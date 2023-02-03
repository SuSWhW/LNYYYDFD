//=============================================================================
// VariableLinkagePicture.js
// ----------------------------------------------------------------------------
// <利用規約>
//  利用はRPGツクールMV/RPGMakerMVの正規ユーザーに限られます。
//  商用、非商用、ゲームの内容を問わず利用可能です。
//  ゲームへの利用の際、報告や出典元の記載等は必須ではありません。
//  二次配布や転載は禁止します。
//  ソースコードURL、ダウンロードURLへの直接リンクも禁止します。
//  不具合対応以外のサポートやリクエストは受け付けておりません。
//  スクリプト利用により生じたいかなる問題においても、一切責任を負いかねます。
// ----------------------------------------------------------------------------
//  Ver1.00  2016/02/04  初版
//=============================================================================

/*:
 * @plugindesc ピクチャ名の一部に変数を使用し、変数の値に連動してピクチャを切り換えます。
 * @author こま
 *
 * @help
 * 重要：「変数内容の即時反映について」は必ずご一読ください。
 *
 * 下記のプラグインコマンドを実行後、イベントコマンドの「ピクチャの表示」を実行して
 * ください。プラグインコマンドで指定した画像ファイルが表示されます。
 *
 *  VLP_PICTURE_NAME [ファイル名]
 *
 * ファイル名を指定する際、以下のような記述をすることで変数を含めることができます。
 *
 *  VLP_PICTURE_NAME picture_\v[1]
 *
 * 上記例では、変数1番をファイル名に含みます。例えば変数の内容が「2」だった場合、
 * その後のピクチャの表示で読み込まれるファイルは「picture_2」になります。
 * また、以下のように指定することで桁数を指定することもできます。
 *
 *  VLP_PICTURE_NAME picture_\3v[1]
 *
 * 上記例では、読み込まれるファイルは「picture_002」になります。
 * 変数の指定方法は、他に以下のようなものもあります。
 *
 *  VLP_PICTURE_NAME picture_\v[1]_\v[2]     # 複数の変数を指定
 *  VLP_PICTURE NAME picture_\v[\v[1]]       # 変数の番号に変数を指定
 *
 * ----------------------------
 *  変数内容の即時反映について
 * ----------------------------
 *  変数付きでファイル名を指定したピクチャは、「変数の内容が変更されると同時」に
 *  表示が更新されます。イベントコマンド「ピクチャの表示」をする必要はありません。
 *  「ピクチャの表示」実行まで表示を変えたくない場合は、事前に以下のプラグイン
 *  コマンドを実行してください。
 *
 *   VLP_IMMEDIATELY_UPDATE OFF
 *
 *  即時反映に戻すには「VLP_IMMEDIATELY_UPDATE ON」を実行してください。
 */

(function(){
    var pluginName = 'VariableLinkagePicture';
    
    function pluginProperty(object) {
        return (object[pluginName] = object[pluginName] || {});
    }
    
    function convertEscapeCharacters (text) {
        text = text.replace(/\\/g, '\x1b');
        text = text.replace(/\x1b\x1b/g, '\\');
        while (text.match(/\x1b\d*v\[\d+\]/i)) {
            text = text.replace(/\x1b(\d*)v\[(\d+)\]/gi, function() {
                return $gameVariables.value(parseInt(arguments[2])).padZero(parseInt(arguments[1]));
            }.bind(this));
        }
        return text;
    }

    //=========================================================================
    // Game_Picture
    //=========================================================================
    var _Game_Picture_show = Game_Picture.prototype.show;
    Game_Picture.prototype.show = function(name, origin, x, y, scaleX,
                                           scaleY, opacity, blendMode) {
        // ファイル名を取り込み
        pluginProperty(this)._basename = pluginProperty($gameScreen)._pictureName;
        pluginProperty($gameScreen)._pictureName = null;

        // 変数を展開したファイル名をセット
        if (pluginProperty(this)._basename) {
            arguments[0] = convertEscapeCharacters(pluginProperty(this)._basename);
        }
        _Game_Picture_show.apply(this, arguments);
    };

    //=========================================================================
    // Game_Variables
    //=========================================================================
    var _Game_Variables_onChange = Game_Variables.prototype.onChange;
    Game_Variables.prototype.onChange = function() {
        if (pluginProperty($gameScreen)._immediately) {
            $gameScreen._pictures.forEach(function(picture) {
                if (picture && pluginProperty(picture)._basename) {
                    picture._name = convertEscapeCharacters(pluginProperty(picture)._basename);
                }
            });
        }
        _Game_Variables_onChange.call(this);
    };
    
    //=========================================================================
    // Game_Interpreter
    //=========================================================================
    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        switch (command.toUpperCase()) {
            case 'VLP_PICTURE_NAME':
                pluginProperty($gameScreen)._pictureName = args[0] || '';
                if (pluginProperty($gameScreen)._immediately === void 0) {
                    pluginProperty($gameScreen)._immediately = true;
                }
                break;
            case 'VLP_IMMEDIATELY_UPDATE':
                pluginProperty($gameScreen)._immediately = (args[0].toUpperCase() === 'ON');
                break;
        }
    };
}());
