// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"CommonPopupCore","status":true,"description":"ver1.05/汎用的なポップアップの仕組みを提供するためのベースプラグインです。","parameters":{"Text Back Color":"rgba(0,0,0,0.6)","Text Back FileName":"popup_back%d"}},
{"name":"GetInformation","status":true,"description":"ver1.15/アイテムの入手などにスライドアニメするインフォメーションを追加するプラグインです。","parameters":{"Info Disable Switch Id":"5","Use Battle Info":"true","Use Rewards Info":"true","Info Pattern":"Stretch","Info Font Size":"20","Info Count":"120","Info Delay":"10","Info MoveWait":"100","Info MoveFade":"20","Info Position":"","Info Slide Action":"","Info Sup X":"0","Info Sup Y":"-180","Info Width":"500","Gold Icon Index":"314","Actor Icon Start Index":"320","Reward Popup Delay":"0","Battle Show List":"item,gold,exp,skill,params,level,abp,classLevel","Get Gold Text":"\\C[24]获得了\\C[0] 「\\I[_icon]_num\\C[14]\\G\\C[0]」！","Lost Gold Text":"\\C[2]失去了\\C[0] 「\\I[_icon]_num\\C[14]\\G\\C[0]」…","Get Item Text":"\\C[24]获得了\\C[0] 「\\I[_icon]_name」！","Lost Item Text":"\\C[2]失去了\\C[0] 「\\I[_icon]_name」…\\n\\C[6]_desc1","Get Item Text Num":"\\C[24]获得了\\C[14]_num个\\C[0] 「\\I[_icon]_name」！","Lost Item Text Num":"\\C[2]失去了\\C[14]_num个\\C[0] 「\\I[_icon]_name」…\\n\\C[6]_desc1","Get Skill Text":"_actor\\C[24]学会了\\C[0] 「\\I[_icon]_name」！\\n\\C[6]_desc1","Lost Skill Text":"_actor\\C[2]忘记了\\C[0] 「\\I[_icon]_name」…\\n\\C[6]_desc1","Exp Up Text":"_actor\\C[24]获得了\\C[14]_num点\\C[0]的\\C[4]_name\\C[0]！","Exp Down Text":"_actor\\C[2]失去了\\C[14]_num点\\C[0]的\\C[4]_name\\C[0]…","Lv Up Text":"_actor的\\C[4]_name\\C[24]上升了\\C[14]_num点C[0]！","Lv Down Text":"_actor的\\C[4]_name\\C[2]下降了\\C[14]_num点C[0]…","Param Up Text":"_actor的\\C[4]_name\\C[24]上升了\\C[14]_num点C[0]！","Param Down Text":"_actor的\\C[4]_name\\C[2]下降了\\C[14]_num点C[0]…","Abp Up Text":"_actor\\C[24]获得了\\C[14]_num点\\C[0]的\\C[4]_name\\C[0]！","Abp Down Text":"_actor\\C[2]失去了\\C[14]_num点\\C[0]的\\C[4]_name\\C[0]…","Class Lv Up Text":"_actor的\\C[4]_class的_name\\C[24]上升了\\C[14]_num点\\C[0]！","Class Lv Down Text":"_actor的\\C[4]_class的_name\\C[2]下降了\\C[14]_num点\\C[0]…","Formation Lv Up Text":"\\C[4]_name的熟练度\\C[24]上升了\\C[14]_num点\\C[0]！","Formation Lv Max Text":"\\C[14]掌握了\\C[4]_name\\C[0]！"}},
{"name":"TitleCommandPosition","status":true,"description":"タイトルコマンドウィンドウの位置を変更します。","parameters":{"Offset X":"-140","Offset Y":"-30","Width":"200","Background":"0"}},
{"name":"MPI_AnimationOverPictures","status":true,"description":"アニメーションを、ピクチャより前に表示します。","parameters":{"表示切替用スイッチ番号":"300"}},
{"name":"FTKR_ExEquipSlot","status":true,"description":"v1.2.1 同じ装備タイプの装備を２つ以上装備できるようにする","parameters":{"Enable Equip Same Items":"true","Disabled Equip Same WtypeIds":"","Disabled Equip Same AtypeIds":"","Disabled Slot Name":""}},
{"name":"BB_DrawGauge","status":true,"description":"ゲージ改造プラグイン","parameters":{"GaugeFrameColor":"0","GaugeHPColor1":"20","GaugeHPColor2":"21","GaugeMPColor1":"22","GaugeMPColor2":"23","GaugeTPColor1":"31","GaugeTPColor2":"27","GaugeBackColor":"19"}},
{"name":"YEP_CoreEngine","status":false,"description":"v1.32 解像度、所持金、アイテム、レベル、能力値の上限など様々な変更が可能になります","parameters":{"---画面---":"","Screen Width":"816","Screen Height":"624","Scale Battlebacks":"false","Scale Title":"false","Scale Game Over":"false","Open Console":"false","Reposition Battlers":"false","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---所持金---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"大量","---アイテム---":"","Default Max":"99","Quantity Text Size":"20","---能力値---":"","Max Level":"120","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---戦闘---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---マップ最適化---":"","Refresh Update HP":"true","Refresh Update MP":"true","Refresh Update TP":"false","---フォント---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---ウィンドウ---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"8","Menu TP Bar":"true","---ウィンドウ色---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.50 戦闘システムをカスタムし、様々な要素を変更することができます","parameters":{"---一般---":"","Action Speed":"agi","Default System":"dtb","---逃走---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.10","---アニメーション---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"0","Physical Animation":"0","Magical Animation":"0","Enemy Attack Animation":"0","Reflect Animation":"0","Motion Waiting":"false","---フロントビュー---":"","Front Actor Sprite":"false","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Sprite Priority":"1","---サイドビュー---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---スプライト---":"","Default X Anchor":"0.50","Default Y Anchor":"1.00","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---ダメージポップアップ---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---ティック---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---ウィンドウ---":"","Lower Windows":"true","Window Rows":"3","Command Window Rows":"1","Command Alignment":"left","Start Actor Command":"true","Current Max":"false","---選択ヘルプ---":"","Mouse Over":"false","Select Help Window":"false","User Help Text":"使用者","Ally Help Text":"己方单体","Allies Help Text":"己方","Enemy Help Text":"敌方单体","Enemies Help Text":"敌方单体","All Help Text":"所有的%1","Random Help Text":"对随机的%1进行%2次","---敵選択---":"","Visual Enemy Select":"false","Show Enemy Name":"false","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---アクター選択---":"","Visual Actor Select":"true","---戦闘ログ---":"","Show Emerge Text":"true","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"false","Show Action Text":"true","Show State Text":"true","Show Buff Text":"true","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"false","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"true","Show Evasion Text":"true","Show HP Text":"true","Show MP Text":"true","Show TP Text":"true"}},
{"name":"YEP_X_VisualHpGauge","status":true,"description":"v1.07 (要YEP_BattleEngineCore.js) バトラーが選択されたとき、または戦闘でダメージを受けたときにHPゲージを表示します。","parameters":{"---一般---":"","Display Actor":"false","Defeat First":"false","Always Visible":"false","---外観---":"","Minimum Gauge Width":"150","Gauge Height":"12","Back Color":"19","HP Color 1":"20","HP Color 2":"21","Gauge Duration":"30","Gauge Position":"false","Y Buffer":"0","Use Thick Gauges":"true","---テキスト表示---":"","Show HP":"false","Show Value":"false","Show Max":"false"}},
{"name":"YEP_SkillCore","status":true,"description":"スキルシステムにより多くの機能を実装し、\r\nコストの設定などができるようになります。","parameters":{"---一般---":"","Cost Padding":"4","Command Alignment":"center","---HP消費---":"","HP Format":"%1%2","HP Font Size":"20","HP Text Color":"18","HP Icon":"162","---MP消費---":"","MP Format":"%1%2","MP Font Size":"20","MP Text Color":"23","MP Icon":"165","---TP Costs---":"","TP Format":"%1%2","TP Font Size":"20","TP Text Color":"29","TP Icon":"164"}},
{"name":"YEP_X_SkillCooldowns","status":true,"description":"v1.12 (要YEP_SkillCore.js)スキルが連続で使われるのを防ぐため、クールダウンのシステムを導入できます。","parameters":{"---クールダウン---":"","Cooldown Format":"%1CD","Cooldown Font Size":"20","Cooldown Text Color":"6","Cooldown Icon":"75","Cooldown After Battle":"0","Cooldown Steps":"5","Cooldown Bypass":"1 2 3 4 5 6 7","Cooldown Bypass List":"[]","---ウォームアップ---":"","Warmup Format":"%1WU","Warmup Font Size":"20","Warmup Text Color":"4","Warmup Icon":"75","---Battle Core---":"","Time Based":"false","Turn Time":"100"}},
{"name":"ChangeBattleWindowRows","status":true,"description":"戦闘時におけるウィンドウの行数を変更します。","parameters":{"----基本設定----":"","ウィンドウの行数":"3","行数を同期させる":"false","高さだけ同期させる":"false"}},
{"name":"TMSoloMenu","status":true,"description":"一人旅に特化したメインメニューを導入します。","parameters":{"commandWindow":"{\"x\":\"0\",\"y\":\"0\",\"width\":\"240\"}","statusWindow":"{\"x\":\"240\",\"y\":\"0\",\"width\":\"576\",\"height\":\"624\"}","goldWindow":"{\"x\":\"0\",\"y\":\"552\",\"width\":\"240\"}","menuFace":"{\"x\":\"0\",\"y\":\"0\",\"width\":\"144\",\"height\":\"144\"}","menuName":"{\"x\":\"152\",\"y\":\"0\",\"width\":\"168\"}","menuNickname":"{\"x\":\"328\",\"y\":\"0\",\"width\":\"168\",\"fontSize\":\"20\"}","menuClass":"{\"x\":\"0\",\"y\":\"0\",\"width\":\"0\",\"height\":\"36\",\"fontSize\":\"28\",\"name\":\"\",\"cols\":\"1\",\"space\":\"8\",\"fixed\":\"0\"}","menuLevel":"{\"x\":\"152\",\"y\":\"36\",\"width\":\"200\",\"height\":\"36\",\"fontSize\":\"28\",\"name\":\"\",\"cols\":\"1\",\"space\":\"8\",\"fixed\":\"0\"}","menuHp":"{\"x\":\"152\",\"y\":\"72\",\"width\":\"186\"}","menuMp":"{\"x\":\"152\",\"y\":\"108\",\"width\":\"186\"}","menuTp":"{\"x\":\"350\",\"y\":\"108\",\"width\":\"120\"}","menuIcons":"{\"x\":\"350\",\"y\":\"72\",\"width\":\"144\",\"height\":\"36\",\"fontSize\":\"28\",\"name\":\"\",\"cols\":\"1\",\"space\":\"8\",\"fixed\":\"0\"}","menuEquips":"{\"x\":\"300\",\"y\":\"172\",\"width\":\"240\",\"fontSize\":\"20\",\"cols\":\"1\",\"space\":\"8\"}","menuStateRate":"{\"x\":\"0\",\"y\":\"380\",\"width\":\"120\",\"height\":\"36\",\"fontSize\":\"20\",\"name\":\"12 15 13 10\",\"cols\":\"2\",\"space\":\"8\",\"fixed\":\"0\"}","menuElementRate":"{\"x\":\"260\",\"y\":\"380\",\"width\":\"120\",\"height\":\"36\",\"fontSize\":\"20\",\"name\":\"2 4 5 9\",\"cols\":\"2\",\"space\":\"8\",\"fixed\":\"0\"}","menuProfile":"{\"x\":\"0\",\"y\":\"516\",\"width\":\"0\",\"height\":\"36\",\"fontSize\":\"28\",\"name\":\"\",\"cols\":\"1\",\"space\":\"8\",\"fixed\":\"0\"}","menuMhp":"{\"name\":\"最大HP\"}","menuMmp":"{\"name\":\"最大MP\"}","menuAtk":"{\"x\":\"0\",\"y\":\"172\",\"width\":\"130\",\"fontSize\":\"20\",\"name\":\"攻击\"}","menuDef":"{\"x\":\"138\",\"y\":\"172\",\"width\":\"130\",\"fontSize\":\"20\",\"name\":\"防御\"}","menuMat":"{\"x\":\"0\",\"y\":\"208\",\"width\":\"130\",\"fontSize\":\"20\",\"name\":\"魔攻\"}","menuMdf":"{\"x\":\"138\",\"y\":\"208\",\"width\":\"130\",\"fontSize\":\"20\",\"name\":\"魔防\"}","menuAgi":"{\"x\":\"0\",\"y\":\"244\",\"width\":\"130\",\"fontSize\":\"20\",\"name\":\"敏捷\"}","menuLuc":"{\"x\":\"138\",\"y\":\"244\",\"width\":\"130\",\"fontSize\":\"20\",\"name\":\"幸运\"}","menuHit":"{\"x\":\"0\",\"y\":\"280\",\"width\":\"0\",\"height\":\"36\",\"fontSize\":\"20\",\"name\":\"命中\",\"cols\":\"1\",\"space\":\"8\",\"fixed\":\"0\"}","menuEva":"{\"x\":\"138\",\"y\":\"280\",\"width\":\"0\",\"height\":\"36\",\"fontSize\":\"20\",\"name\":\"回避\",\"cols\":\"1\",\"space\":\"8\",\"fixed\":\"0\"}","menuCri":"{\"x\":\"0\",\"y\":\"316\",\"width\":\"0\",\"height\":\"36\",\"fontSize\":\"20\",\"name\":\"会心\",\"cols\":\"1\",\"space\":\"8\",\"fixed\":\"0\"}","menuCev":"{\"name\":\"会心回避率\"}","menuMev":"{\"name\":\"魔法回避率\"}","menuMrf":"{\"name\":\"魔法反射率\"}","menuCnt":"{\"x\":\"138\",\"y\":\"316\",\"width\":\"0\",\"height\":\"36\",\"fontSize\":\"20\",\"name\":\"反击\",\"cols\":\"1\",\"space\":\"8\",\"fixed\":\"0\"}","menuHrg":"{\"name\":\"HP再生率\"}","menuMrg":"{\"name\":\"MP再生率\"}","menuTrg":"{\"name\":\"TP再生率\"}","menuTgr":"{\"name\":\"成为目标率\"}","menuGrd":"{\"name\":\"防御效果率\"}","menuRec":"{\"name\":\"回复效果率\"}","menuPha":"{\"name\":\"药的知识\"}","menuMcr":"{\"name\":\"MP消费率\"}","menuTcr":"{\"name\":\"TP积累率\"}","menuPdr":"{\"name\":\"物理伤害率\"}","menuMdr":"{\"name\":\"魔法伤害率\"}","menuFdr":"{\"name\":\"地形伤害率\"}","menuExr":"{\"name\":\"经验获得率\"}","horzLine1":"{\"x\":\"0\",\"y\":\"162\",\"width\":\"540\",\"height\":\"2\"}","horzLine2":"{\"x\":\"0\",\"y\":\"370\",\"width\":\"540\",\"height\":\"2\"}","horzLine3":"{\"x\":\"0\",\"y\":\"0\",\"width\":\"0\",\"height\":\"2\",\"fontSize\":\"28\",\"name\":\"\",\"cols\":\"1\",\"space\":\"8\",\"fixed\":\"0\"}","horzLine4":"{\"height\":\"2\"}","horzLine5":"{\"height\":\"2\"}","freeText1":"{\"x\":\"100\",\"y\":\"144\",\"width\":\"186\",\"name\":\"\\\\C[16]\\\\}Parameter\"}","freeText2":"{\"x\":\"396\",\"y\":\"144\",\"width\":\"186\",\"name\":\"\\\\C[16]\\\\}Equips\"}","freeText3":"{\"x\":\"70\",\"y\":\"352\",\"width\":\"186\",\"name\":\"\\\\C[16]\\\\}StateRate\"}","freeText4":"{\"x\":\"344\",\"y\":\"352\",\"width\":\"186\",\"name\":\"\\\\C[16]\\\\}ElementRate\"}","freeText5":"{\"x\":\"240\",\"y\":\"488\",\"width\":\"0\",\"height\":\"36\",\"fontSize\":\"28\",\"name\":\"\\\\C[16]\\\\}Profile\",\"cols\":\"1\",\"space\":\"8\",\"fixed\":\"0\"}","freeText6":"{}","freeText7":"{}","freeText8":"{}","freeText9":"{}","freeText10":"{}","expGaugeColor1":"30","expGaugeColor2":"31","expNextText":"%1exp","expMaxText":"%1exp","expFontSize":"20","equipMax":"4","elementIcons":"77 424 425 426 427 428 429 430 431","textBackColor":"#000000","textBackOpacity":"128","horzLineColor":"#ffffff","horzLineOpacity":"48","forceChangeSoloMenu":"true","soloItemStatus":"144 160 144 144 96"}},
{"name":"MOT_ItemFavoriteSort","status":true,"description":"アイテムソートとアイテムのお気に入り機能を追加します","parameters":{"お気に入り登録するキー":"a","お気に入りアイテムのアイコン":"84","お気に入り登録上限数":"10","お気に入り登録時のSE:ファイル名":"Decision2","お気に入り登録時のSE:ボリューム":"90","お気に入り登録時のSE:ピッチ":"100","お気に入り解除時のSE:ファイル名":"Cancel1","お気に入り解除時のSE:ボリューム":"90","お気に入り解除時のSE:ピッチ":"100","ダブルタップの猶予フレーム":"20","ソート画面を開くキー":"s","ソートタイトルに表示される文字列":"排列","ソートタイトル画面:フォントサイズ":"23","ソートタイトル画面:横幅":"400","ソートタイトル画面:縦幅":"53","ソートタイトル画面:パディング":"12"}},
{"name":"MessageWindowHidden","status":false,"description":"メッセージウィンドウ一時消去プラグイン","parameters":{"ボタン名称":"右クリック"}},
{"name":"NoGameover","status":true,"description":"ゲームオーバーにならないよ。","parameters":{"Switch ID":"0"}},
{"name":"UTA_MessageSkip","status":true,"description":"特定キーを押す事でメッセージをスキップできるようにします。","parameters":{"Skip Key":"control","Show Trace":"false"}},
{"name":"ActorCommand_kai","status":true,"description":"任意のタイミングで、アイテムを選択不可にします。","parameters":{"Variable ID":"219"}},
{"name":"CustomizeConfigDefault","status":true,"description":"オプションデフォルト値設定プラグイン","parameters":{"常時ダッシュ":"ON","コマンド記憶":"ON","BGM音量":"90","BGS音量":"90","ME音量":"90","SE音量":"90","常時ダッシュ消去":"OFF","コマンド記憶消去":"OFF","BGM音量消去":"OFF","BGS音量消去":"OFF","ME音量消去":"OFF","SE音量消去":"OFF"}},
{"name":"Text2Frame","status":true,"description":"テキストファイル(.txtファイルなど)から「文章の表示」イベントコマンドに簡単に変換するための、開発支援プラグインです。","parameters":{"Default Window Position":"下","Default Background":"ウインドウ","Default Scenario Folder":"text","Default Scenario File":"message.txt","Default Common Event ID":"1","Default MapID":"1","Default EventID":"2","IsOverwrite":"false","Comment Out Char":"%","IsDebug":"false"}},
{"name":"PNDK_ActiveWindowBackOpacity","status":true,"description":"操作対象のウィンドウの背景の不透明度やカラーを変更できます。","parameters":{"StandardWindowBackOpacity":"80","ActiveWindowBackOpacity":"180","ActiveWindowBackColorR":"0","ActiveWindowBackColorG":"0","ActiveWindowBackColorB":"0"}},
{"name":"DependStateEscape","status":true,"description":"パーティの誰かが特定ステート時にバトル中の逃げるコマンドを封印","parameters":{"stateNo":"3"}},
{"name":"装備画面レイアウト変更","status":true,"description":"装備画面のレイアウトを変更します。","parameters":{}},
{"name":"HighSpeedBossCollapseEffect","status":true,"description":"ボスの消滅エフェクトを高速化します","parameters":{}},
{"name":"AddBattleLogEC","status":true,"description":"ver1.02/メッセージをバトルログに表示する制御文字を追加します。","parameters":{}},
{"name":"BG_not_blur","status":true,"description":"背景ぼかさないよ","parameters":{}},
{"name":"MSS_NoBattleBGM","status":true,"description":"Allows the user to disable and enable battle BGM","parameters":{}},
{"name":"TriggerOnEquipAndState","status":true,"description":"装備変更時の変数操作プラグイン","parameters":{"BattleMemberOnly":"false","SlotVariables":"[\"0\",\"0\",\"0\",\"0\",\"0\"]"}},
{"name":"FixImageLoading","status":true,"description":"画像ロード時のチラつき防止プラグイン","parameters":{}},
{"name":"RestoreMenuAfterCommon","status":true,"description":"Back to the same menu scene after common events caused by items.","parameters":{}},
{"name":"TYA_BattleMessageCustom","status":true,"description":"戦闘開始時の「～が現れた！」というメッセージを非表示にします。","parameters":{}},
{"name":"GraphicsRenderFix","status":true,"description":"放置していると画面がフリーズするのを修正","parameters":{}},
{"name":"Mano_SkillSort","status":true,"description":"スキルをID順にソートします。","parameters":{}},
{"name":"AKUNOU_OptionBase","status":true,"description":"オプション追加用のベーススクリプトです。\r\n入れるだけで若干オプションの操作性が向上したりもします。","parameters":{"Window Options Width":"400","Window Options Number":"13"}},
{"name":"AKUNOU_OptionDefault","status":true,"description":"オプションにデフォルトに戻すコマンドを追加します。\r\n動作には同作者のオプションベーススクリプトが必須です。","parameters":{"Default Term":"全部回到初始值","Always Dash Default":"1","Command Remember Default":"1","Bgm Volume Default":"90","Bgs Volume Default":"90","Me Volume Default":"90","Se Volume Default":"90"}},
{"name":"AKUNOU_OptionAutoMessage","status":true,"description":"オプションに自動メッセージ送りの変更を追加します。\r\n動作には同作者のオプションベーススクリプトが必須です。","parameters":{"Auto Message Term":"自动播放文章","Auto Message List":"{\"普通\":70,\"略快\":40,\"快\":20,\"最快\":10,\"OFF\":-1,\"慢\":190,\"略慢\":140}","Auto Message Default":"0"}},
{"name":"AKUNOU_OptionGauge","status":true,"description":"オプションの数値で表されている一部項目にゲージを描画します。","parameters":{"Gauge Color 1":"255, 204, 32, 255","Gauge Color 2":"255, 255, 160, 255","Gauge Color R 1":"255, 96, 96, 255","Gauge Color R 2":"255, 192, 192, 255","Gauge Color G 1":"96, 255, 96, 255","Gauge Color G 2":"192, 255, 192, 255","Gauge Color B 1":"96, 96, 255, 255","Gauge Color B 2":"192, 192, 255, 255"}},
{"name":"AKUNOU_OptionMessageSpeed","status":true,"description":"オプションにメッセージ表示速度の変更を追加します。\r\n動作には同作者のオプションベーススクリプトが必須です。","parameters":{"Message Speed Term":"信息速度","Message Speed List":"{\"最慢\":-2,\"慢\":-1,\"标准\":0,\"略快\":1,\"快\":2,\"更快\":4,\"很快\":10,\"极快\":20,\"瞬间\":100}","Message Speed Default":"2"}},
{"name":"AKUNOU_OptionWindowOpacity","status":true,"description":"オプションにウィンドウ透明度の変更を追加します。\r\n動作には同作者のオプションベーススクリプトが必須です。","parameters":{"Window Opacity Term":"窗口透明度","Window Opacity Offset":"5","Window Opacity Default":"192"}},
{"name":"MessageSkip","status":true,"description":"メッセージスキッププラグイン","parameters":{"スキップキー":"S","オートキー":"A","スキップスイッチ":"0","オートスイッチ":"298","スキップアイコン":"140","オートアイコン":"75","アイコンX":"0","アイコンY":"0","押し続けスキップ":"false","オート待機フレーム":"100","終了解除スイッチID":"0","スキップピクチャ":"","ボタン原点":"0","ボタン表示スイッチID":"0","スキップピクチャX":"500","スキップピクチャY":"0","オートピクチャ":"","オートピクチャX":"750","オートピクチャY":"0","ピクチャ座標タイプ":"relative","無効化スイッチ":"0"}},
{"name":"BattleParallelEvent","status":true,"description":"戦闘中でも「並列処理」のコモンイベントを実行する為のプラグインです。","parameters":{}},
{"name":"戦闘開始エフェクトカット","status":true,"description":"","parameters":{}},
{"name":"VariableLinkagePicture","status":true,"description":"ピクチャ名の一部に変数を使用し、変数の値に連動してピクチャを切り換えます。","parameters":{}},
{"name":"StackBattleLog","status":true,"description":"ver1.05/戦闘ログを蓄積型に変更し、戦闘ログを表示するパーティコマンドを追加します。","parameters":{"Stack Log UseLog":"true","Stack Log UseStack":"true","Stack Log Text":"Log","Stack Log Start":"------Start Battle------","Stack Log TurnEnd":"------ %d Turn End------","Stack Log MaxLines":"3","Stack Log FontSize":"24","Stack Log Size":"100"}},
{"name":"NRP_EnemyRoutineKai","status":true,"description":"v1.06 敵行動ルーチンを改善します。","parameters":{"<Base Setting>":"","resetAction":"true","testApply":"true","<Heal>":"","controlRecover":"true","ifHpRecover":"b.hpRate() < 1.0","ifMpRecover":"b.mpRate() < 1.0","controlForDead":"true","<Effect>":"","controlEnemyEffect":"true","controlActorEffect":"true","watchResist":"true"}},
{"name":"ParallelBgs","status":false,"description":"BGS並行演奏プラグイン","parameters":{}},
{"name":"SRD_BattleLogUpgrade","status":true,"description":"Allows more customization of the BattleLog! \r\nThe position, color, and mechanics can be changed!","parameters":{"Reverse Mode":"false","New Log Placement":"below","Global Escape Chars":"","Global Front Chars":"","Global End Chars":"","Maximum Lines":"3","Line Height":"30","== Display ==":"","X Position":"0","Y Position":"0","Width":"Graphics.boxWidth","Height":"this.fittingHeight(this.maxLines())","Background Color":"#000000","Background Opacity":"0","== Animation ==":"","Message Speed":"16","Animation Base Delay":"8","Animation Next Delay":"12"}},
{"name":"minRPG_CustomizeGameSpeed","status":true,"description":"ツクールのゲームスピードを快適に遊べるように調整されたプラグインです。\n自分で調整もできます。詳細はヘルプを見てね。","parameters":{"※表示領域の調整方法":"上のバー「｜」ドラッグで横幅調整可能","デバッグ出力するか":"OFF","■スピードの変更":"","【機能】スピード変更":"ON","スピード倍率の設定":"↓は上がONの時だけ有効","「＼.」の待ちフレーム数":"15","「＼|」の待ちフレーム数":"60","↓可変スピード倍率変更":"↓変数番号を入力","可変ゲームスピードを格納する変数番号":"0","可変メッセージウェイト制御文字スピードを格納する変数番号":"0","可変イベント早送り倍数を格納する変数番号":"0","可変戦闘早送り倍数を格納する変数番号":"0","可変スキップ倍数を格納する変数番号":"0","↓標準スピード倍率":"↓整数を入力","標準イベントスピード":"1","標準戦闘ログスピード":"2","標準戦闘敵スプライトスピード":"2","標準戦闘武器モーションスピード":"1","標準戦闘移動スピード":"2","標準戦闘アニメーションスピード":"1","↓早送りスピード倍率":"↓整数を入力","早送りイベントスピード":"2","早送り戦闘ログスピード":"20","早送り戦闘敵スプライトスピード":"6","早送り戦闘武器モーションスピード":"6","早送り戦闘移動スピード":"8","早送り戦闘アニメーションスピード":"2","↓早送りボタンの有効/無効化":"\"↓ON/OFFを入力\"","決定ボタンでイベント早送り可能か":"ON","決定ボタンで戦闘早送り可能か":"ON","キャンセルボタンでイベント早送り可能か":"ON","キャンセルボタンで戦闘早送り可能か":"ON","ダッシュボタンでイベント早送り可能か":"OFF","ダッシュボタンで戦闘早送り可能か":"OFF","↓スキップボタンの有効/無効化":"\"↓ON/OFFを入力\"","決定ボタンでスキップ可能か":"OFF","キャンセルボタンでスキップ可能か":"OFF","ダッシュボタンでスキップ可能か":"ON","↓スキップのシーン毎の有効/無効化":"\"↓ON/OFFを入力\"","マップイベント中もスキップ可能か":"ON","マップ移動中もスキップ可能か":"ON","マップ無操作中もスキップ可能か":"ON","戦闘中もスキップ可能か":"ON","↓スキップ機能詳細":"↓整数を入力","デフォルトスキップ倍数":"50","スキップ中かを格納するスイッチ番号":"0","スキップ禁止中かを格納するスイッチ番号":"0","＜スピードの変更、終わり＞":"","■パラメータの変更":"","【機能】ステータス限界値変更":"OFF","↓パラメータ限界値の変更":"↓は上がONの時だけ有効","最大HPの限界値":"99999","最大MPの限界値":"999","攻撃力などの限界値":"999","＜パラメータの変更、終わり＞":"","■その他の機能":"","【機能】戦闘を検知するか":"OFF","↓戦闘の検知":"↓は上がONの時だけ有効","↓戦闘時の変数制御":"↓変数番号を入力","最後に戦闘した敵グループIDを格納する変数番号":"0","↓戦闘時のスイッチ制御":"↓スイッチ番号を入力","戦闘中かを格納するスイッチ番号":"0","ランダムエンカウント時にONになるスイッチ番号":"0","戦闘全滅時にONになるスイッチ番号":"0","戦闘逃走時にONになるスイッチ番号":"0","戦闘勝利時にONになるスイッチ番号":"0","【機能】身代わり条件を変えるか":"OFF","↓身代わり条件の変更":"↓は上がONの時だけ有効","かばわれる側の最大HP％0-100":"25","かばわれる側の最大MP％0-100":"100","かばう側の最小HP％0-100":"1","かばう側の最小MP％0-100":"1","身代わり率％0-100":"99","最後にかばわれたアクターIDを格納する変数番号":"0","最後にかばったアクターIDを格納する変数番号":"0","最後にかばわれた敵キャラIDを格納する変数番号":"0","最後にかばった敵キャラIDを格納する変数番号":"0","味方の身代わり成功時に実行するコモンイベント番号":"0","敵の身代わり成功時に実行するコモンイベント番号":"0","＜その他の変更、終わり＞":""}},
{"name":"Ricon_BattleTransition","status":true,"description":"戦闘開始時トランジション変更プラグイン","parameters":{"Speed":"30","Zoom":"0","ZoomMode":"true","Flash":"false","FlashRed":"255","FlashGreen":"255","FlashBlue":"255","FlashIntensity":"255"}},
{"name":"SimpleVoice","status":true,"description":"簡易ボイスプラグイン","parameters":{"フォルダ名":"voice","オプション名称":"语音 音量","オプション初期値":"100"}},
{"name":"BB_EnemyPositionYMax","status":true,"description":"戦闘時の敵グラフィック配置範囲を画面下端まで拡大or移動できるようにするプラグイン。","parameters":{"Fit_or_Slide":"true","CanNot_Fit_or_Slide":"false"}},
{"name":"AltBgs","status":true,"description":"システムと独立した複数のBGSを演奏可能にします","parameters":{}},
{"name":"FTKR_ExBattleEvent","status":true,"description":"v1.3.6 バトルイベントを拡張するプラグイン","parameters":{"Battle Event":"","--勝利時イベント--":"","Custom Victory Event":"0","Victory Event":"17","--敗北時イベント--":"","Custom Defeat Event":"0","Defeat Event":"","--逃走時イベント--":"","Custom Escape Event":"0","Escape Event":"","--中断時イベント--":"","Custom Abort Event":"0","Abort Event":"","Abort BugFix":"false","--戦闘行動の強制--":"","Invalid Battle Phase":"action"}},
{"name":"Torigoya_QuickSkill","status":true,"description":"選択するとターンを消費せずに即発動するスキルを追加します。","parameters":{"■ 上級者向け設定":"","Recalc Action Time Mode":"None"}},
{"name":"dsShowBattleCommand","status":true,"description":"戦闘中のコマンド表示制御プラグイン ver1.00","parameters":{"Show Attack Command":"true","Show Guard Command":"false","Show Item Command":"true","Show Skill Type 01":"true","Show Skill Type 02":"true","Show Skill Type 03":"true","Show Skill Type 04":"true","Show Skill Type 05":"true","Show Skill Type 06":"true","Show Skill Type 07":"true","Show Skill Type 08":"true","Show Skill Type 09":"true","Show Skill Type 10":"true","Show Skill Type 11":"true","Show Skill Type 12":"true","Show Skill Type 13":"true","Show Skill Type 14":"true","Show Skill Type 15":"true","Show Skill Type 16":"true","Show Skill Type 17":"true","Show Skill Type 18":"true","Show Skill Type 19":"true","Show Skill Type 20":"true","Show Skill Type 21":"true","Show Skill Type 22":"true","Show Skill Type 23":"true","Show Skill Type 24":"true","Show Skill Type 25":"true","Show Skill Type 26":"true","Show Skill Type 27":"true","Show Skill Type 28":"true","Show Skill Type 29":"true","Show Skill Type 30":"true"}},
{"name":"Torigoya_SaveCommand","status":true,"description":"プラグインコマンドからセーブを実行できるようにします。","parameters":{}},
{"name":"LoadComSim","status":true,"description":"ver1.00 メニューコマンドにロードを追加します。","parameters":{"loadtext":"读取"}},
{"name":"FTKR_ExBattleEvent","status":true,"description":"v1.3.6 バトルイベントを拡張するプラグイン","parameters":{"Battle Event":"","--勝利時イベント--":"","Custom Victory Event":"0","Victory Event":"12","--敗北時イベント--":"","Custom Defeat Event":"0","Defeat Event":"12","--逃走時イベント--":"","Custom Escape Event":"0","Escape Event":"12","--中断時イベント--":"","Custom Abort Event":"0","Abort Event":"12","Abort BugFix":"false","--戦闘行動の強制--":"","Invalid Battle Phase":"action"}},
{"name":"TMNamePop","status":true,"description":"イベントの頭上に文字列を表示する機能を追加します。","parameters":{"backOpacity":"96","fontSize":"20","outlineWidth":"4","outlineColor":"rgba(0, 0, 0, 0.5)","width":"300","roundRectRadius":"6"}}
];