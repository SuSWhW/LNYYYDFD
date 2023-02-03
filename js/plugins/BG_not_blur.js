﻿//=============================================================================
// rpg_managers.jsから抜き出し
//=============================================================================

/*:
 * @plugindesc 背景ぼかさないよ
 * @author ゆわか
 *
 * @help プラグインコマンドはありません。
 *
 * 戦闘背景を指定せずに戦闘をした時に戦闘背景として表示されたり
 * メニューを呼び出したときに表示されるマップ画像をぼかさないプラグインです。
 *
 * 使用報告不要・クレジット不要・改変可・商用利用可
 * もし何か問題が起きても、当方は一切責任を負いません。ご了承ください。
 */



SceneManager.snapForBackground = function() {
    this._backgroundBitmap = this.snap();
//    this._backgroundBitmap.blur();
};