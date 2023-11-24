//=============================================================================
// RPG Maker MV yukii Smooth Camera Slide.js
//=============================================================================

/*:
 * @target MV
 * @plugindesc Adds a smooth camera sliding when moving
 * @author Yukii
 * 
 * @help Akea - Battle Shockwave Effect - this plugins is under zlib license
 * For support and new plugins join our discord server!
 * Want to support new creations? be a patreon! 
 * @help You only need to configure the parameters, and you are ready to go!
 *
 * 
 * @param Switch
 * @type number
 * @desc The switch when on, turns off the smooth camera.
 * @default 1
 * 
 * @param Scroll X
 * @desc The speed in which the camera will move in the X axis (Higher = slower)
 * @default 20
  * @param Scroll Y
 * @desc The speed in which the camera will move in the Y axis (Higher = slower)
 * @default 20
 */



(() => {
    let yukiiParameters = PluginManager.parameters('yukiiSmoothCameraSlide');
    let yukiiScrollX = parseInt(yukiiParameters['Scroll X'] || 20);
    let yukiiScrollY = parseInt(yukiiParameters['Scroll Y'] || 20);
    const yukiiSwitch = parseInt(yukiiParameters['Switch']);
    const _Game_Player_updateScroll = Game_Player.prototype.updateScroll;
    Game_Player.prototype.updateScroll = function (lastScrolledX, lastScrolledY) {
        
        if ($gameSwitches.value(yukiiSwitch)) {
            _Game_Player_updateScroll.call(this, ...arguments);
            return;
        }
        let x2 = this.scrolledX();
        let y2 = this.scrolledY();
        if (y2 > this.centerY()) {
            $gameMap.scrollDown((y2 - this.centerY()) / yukiiScrollY);
        }
        if (x2 < this.centerX()) {
            $gameMap.scrollLeft((this.centerX() - x2) / yukiiScrollX);
        }
        if (x2 > this.centerX()) {
            $gameMap.scrollRight((x2 - this.centerX()) / yukiiScrollX);
        }
        if (y2 < this.centerY()) {
            $gameMap.scrollUp((this.centerY() - y2) / yukiiScrollY);
        }
    };
}


)();