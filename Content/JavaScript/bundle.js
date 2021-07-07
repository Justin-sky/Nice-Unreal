/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "puerts":
/*!*************************!*\
  !*** external "puerts" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("puerts");

/***/ }),

/***/ "ue":
/*!*********************!*\
  !*** external "ue" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("ue");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*************************!*\
  !*** ./src/GameMain.ts ***!
  \*************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const UE = __webpack_require__(/*! ue */ "ue");
const puerts_1 = __webpack_require__(/*! puerts */ "puerts");
class GameMain {
    constructor() {
    }
    start() {
        console.log("hello world, this is justin here...222..");
        let world = puerts_1.argv.getByName("GameInstance").GetWorld();
        // let loginPageClass = UE.Class.Load("WidgetBlueprint'/Game/Blueprints/UI/Bag/BagWidget.BagWidget_C'");
        // let loginPage = UE.UMGManager.CreateWidget(world, loginPageClass) as UE.BP_LoginPage_C;
        // loginPage.AddToViewport(0);
        // let btnNormal = UE.Object.Load("/Game/Asset/UIAsset/Bag/ui_bag_tipbtn_1.ui_bag_tipbtn_1");
        // loginPage.loginBtn.WidgetStyle.Normal.ResourceObject = btnNormal;
        // loginPage.loginBtn.OnClicked.Add(()=>{
        //     console.log("justin click me........");
        //     loginPage.RemoveFromParent();
        // });
        // let bagGridClass = UE.Class.Load("WidgetBlueprint'/Game/Blueprints/UI/Bag/BagGridWidget.BagGridWidget_C'");
        // let bagGrid = UE.UMGManager.CreateWidget(world, bagGridClass) as UE.BagGridWidget_C;
        // let gridPanel = bagGrid.BagGridPanel;
        //let bagGridPanel = bagItem.find
        let icon1 = UE.Object.Load("Texture2D'/Game/Asset/UIAsset/Bag/i_s_yy_1.i_s_yy_1'");
        let icon2 = UE.Object.Load("Texture2D'/Game/Asset/UIAsset/Bag/i_s_yysz_2.i_s_yysz_2'");
        let icon3 = UE.Object.Load("Texture2D'/Game/Asset/UIAsset/Bag/i_s_yzhu_1.i_s_yzhu_1'");
        let icons = [icon1, icon2, icon3];
        let bagClass = UE.Class.Load("WidgetBlueprint'/Game/Blueprints/UI/Bag/BagWidget.BagWidget_C'");
        let bag = UE.UMGManager.CreateWidget(world, bagClass);
        let bagGrid = bag.BagItemWidget;
        let gridPanel = bagGrid.BagGridPanel;
        let bagGridItemClass = UE.Class.Load("WidgetBlueprint'/Game/Blueprints/UI/Bag/BagGridItemWidget.BagGridItemWidget_C'");
        for (let i = 0; i < 50; i++) {
            let bagGridItem = UE.UMGManager.CreateWidget(world, bagGridItemClass);
            bagGridItem.ItemAmount.SetText("" + i * 10);
            let rnd = Math.random() * 10 % 3;
            bagGridItem.ItemImage.Brush.ResourceObject = icons[parseInt("" + rnd)];
            let gridSlot = gridPanel.AddChildToUniformGrid(bagGridItem);
            gridSlot.SetRow(parseInt("" + i / 5));
            gridSlot.SetColumn(parseInt("" + i % 5));
        }
        bag.AddToViewport();
    }
}
new GameMain().start();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90c3Byb2ovZXh0ZXJuYWwgXCJwdWVydHNcIiIsIndlYnBhY2s6Ly90c3Byb2ovZXh0ZXJuYWwgXCJ1ZVwiIiwid2VicGFjazovL3RzcHJvai93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90c3Byb2ovLi9zcmMvR2FtZU1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG1DOzs7Ozs7Ozs7O0FDQUEsK0I7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7OztBQ3RCQSwrQ0FBeUI7QUFDekIsNkRBQTRCO0FBSTVCLE1BQU0sUUFBUTtJQUVWO0lBRUEsQ0FBQztJQUVNLEtBQUs7UUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7UUFHeEQsSUFBSSxLQUFLLEdBQUksYUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQW1CLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFekUsd0dBQXdHO1FBQ3hHLDBGQUEwRjtRQUUxRiw4QkFBOEI7UUFFOUIsNkZBQTZGO1FBQzdGLG9FQUFvRTtRQUNwRSx5Q0FBeUM7UUFDekMsOENBQThDO1FBQzlDLG9DQUFvQztRQUNwQyxNQUFNO1FBR04sOEdBQThHO1FBQzlHLHVGQUF1RjtRQUN2Rix3Q0FBd0M7UUFFeEMsaUNBQWlDO1FBRWpDLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNEQUFzRCxDQUFDLENBQUM7UUFDbkYsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsMERBQTBELENBQUMsQ0FBQztRQUN2RixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywwREFBMEQsQ0FBQyxDQUFDO1FBQ3ZGLElBQUksS0FBSyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUdsQyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxnRUFBZ0UsQ0FBQyxDQUFDO1FBQy9GLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQW1CLENBQUM7UUFDeEUsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUNoQyxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBRXJDLElBQUksZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0ZBQWdGLENBQUMsQ0FBQztRQUN2SCxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFDO1lBRW5CLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBMkIsQ0FBQztZQUNoRyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3hDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDO1lBQzdCLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRXJFLElBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUU1RCxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO1FBR0QsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Q0FDSjtBQUdELElBQUksUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHVlcnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVlXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgKiBhcyBVRSBmcm9tICd1ZSc7XG5pbXBvcnQge2FyZ3Z9IGZyb20gJ3B1ZXJ0cyc7XG5cblxuXG5jbGFzcyBHYW1lTWFpbntcblxuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnQoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJoZWxsbyB3b3JsZCwgdGhpcyBpcyBqdXN0aW4gaGVyZS4uLjIyMi4uXCIpO1xuXG5cbiAgICAgICAgbGV0IHdvcmxkID0gKGFyZ3YuZ2V0QnlOYW1lKFwiR2FtZUluc3RhbmNlXCIpIGFzIFVFLkdhbWVFbmdpbmUpLkdldFdvcmxkKCk7XG4gICAgICBcbiAgICAgICAgLy8gbGV0IGxvZ2luUGFnZUNsYXNzID0gVUUuQ2xhc3MuTG9hZChcIldpZGdldEJsdWVwcmludCcvR2FtZS9CbHVlcHJpbnRzL1VJL0JhZy9CYWdXaWRnZXQuQmFnV2lkZ2V0X0MnXCIpO1xuICAgICAgICAvLyBsZXQgbG9naW5QYWdlID0gVUUuVU1HTWFuYWdlci5DcmVhdGVXaWRnZXQod29ybGQsIGxvZ2luUGFnZUNsYXNzKSBhcyBVRS5CUF9Mb2dpblBhZ2VfQztcbiAgICBcbiAgICAgICAgLy8gbG9naW5QYWdlLkFkZFRvVmlld3BvcnQoMCk7XG4gICAgICAgIFxuICAgICAgICAvLyBsZXQgYnRuTm9ybWFsID0gVUUuT2JqZWN0LkxvYWQoXCIvR2FtZS9Bc3NldC9VSUFzc2V0L0JhZy91aV9iYWdfdGlwYnRuXzEudWlfYmFnX3RpcGJ0bl8xXCIpO1xuICAgICAgICAvLyBsb2dpblBhZ2UubG9naW5CdG4uV2lkZ2V0U3R5bGUuTm9ybWFsLlJlc291cmNlT2JqZWN0ID0gYnRuTm9ybWFsO1xuICAgICAgICAvLyBsb2dpblBhZ2UubG9naW5CdG4uT25DbGlja2VkLkFkZCgoKT0+e1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJqdXN0aW4gY2xpY2sgbWUuLi4uLi4uLlwiKTtcbiAgICAgICAgLy8gICAgIGxvZ2luUGFnZS5SZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgIC8vIH0pO1xuXG5cbiAgICAgICAgLy8gbGV0IGJhZ0dyaWRDbGFzcyA9IFVFLkNsYXNzLkxvYWQoXCJXaWRnZXRCbHVlcHJpbnQnL0dhbWUvQmx1ZXByaW50cy9VSS9CYWcvQmFnR3JpZFdpZGdldC5CYWdHcmlkV2lkZ2V0X0MnXCIpO1xuICAgICAgICAvLyBsZXQgYmFnR3JpZCA9IFVFLlVNR01hbmFnZXIuQ3JlYXRlV2lkZ2V0KHdvcmxkLCBiYWdHcmlkQ2xhc3MpIGFzIFVFLkJhZ0dyaWRXaWRnZXRfQztcbiAgICAgICAgLy8gbGV0IGdyaWRQYW5lbCA9IGJhZ0dyaWQuQmFnR3JpZFBhbmVsO1xuXG4gICAgICAgIC8vbGV0IGJhZ0dyaWRQYW5lbCA9IGJhZ0l0ZW0uZmluZFxuXG4gICAgICAgIGxldCBpY29uMSA9IFVFLk9iamVjdC5Mb2FkKFwiVGV4dHVyZTJEJy9HYW1lL0Fzc2V0L1VJQXNzZXQvQmFnL2lfc195eV8xLmlfc195eV8xJ1wiKTtcbiAgICAgICAgbGV0IGljb24yID0gVUUuT2JqZWN0LkxvYWQoXCJUZXh0dXJlMkQnL0dhbWUvQXNzZXQvVUlBc3NldC9CYWcvaV9zX3l5c3pfMi5pX3NfeXlzel8yJ1wiKTtcbiAgICAgICAgbGV0IGljb24zID0gVUUuT2JqZWN0LkxvYWQoXCJUZXh0dXJlMkQnL0dhbWUvQXNzZXQvVUlBc3NldC9CYWcvaV9zX3l6aHVfMS5pX3NfeXpodV8xJ1wiKTtcbiAgICAgICAgbGV0IGljb25zID0gW2ljb24xLCBpY29uMiwgaWNvbjNdO1xuICAgICAgICBcblxuICAgICAgICBsZXQgYmFnQ2xhc3MgPSBVRS5DbGFzcy5Mb2FkKFwiV2lkZ2V0Qmx1ZXByaW50Jy9HYW1lL0JsdWVwcmludHMvVUkvQmFnL0JhZ1dpZGdldC5CYWdXaWRnZXRfQydcIik7XG4gICAgICAgIGxldCBiYWcgPSBVRS5VTUdNYW5hZ2VyLkNyZWF0ZVdpZGdldCh3b3JsZCwgYmFnQ2xhc3MpIGFzIFVFLkJhZ1dpZGdldF9DO1xuICAgICAgICBsZXQgYmFnR3JpZCA9IGJhZy5CYWdJdGVtV2lkZ2V0O1xuICAgICAgICBsZXQgZ3JpZFBhbmVsID0gYmFnR3JpZC5CYWdHcmlkUGFuZWw7XG5cbiAgICAgICAgbGV0IGJhZ0dyaWRJdGVtQ2xhc3MgPSBVRS5DbGFzcy5Mb2FkKFwiV2lkZ2V0Qmx1ZXByaW50Jy9HYW1lL0JsdWVwcmludHMvVUkvQmFnL0JhZ0dyaWRJdGVtV2lkZ2V0LkJhZ0dyaWRJdGVtV2lkZ2V0X0MnXCIpO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTw1MDsgaSsrKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGJhZ0dyaWRJdGVtID0gVUUuVU1HTWFuYWdlci5DcmVhdGVXaWRnZXQod29ybGQsIGJhZ0dyaWRJdGVtQ2xhc3MpIGFzIFVFLkJhZ0dyaWRJdGVtV2lkZ2V0X0M7XG4gICAgICAgICAgICBiYWdHcmlkSXRlbS5JdGVtQW1vdW50LlNldFRleHQoXCJcIitpKjEwKTtcbiAgICAgICAgICAgIGxldCBybmQgPSBNYXRoLnJhbmRvbSgpKjEwJTM7XG4gICAgICAgICAgICBiYWdHcmlkSXRlbS5JdGVtSW1hZ2UuQnJ1c2guUmVzb3VyY2VPYmplY3QgPSBpY29uc1twYXJzZUludChcIlwiK3JuZCldO1xuXG4gICAgICAgICAgICBsZXQgZ3JpZFNsb3QgPSBncmlkUGFuZWwuQWRkQ2hpbGRUb1VuaWZvcm1HcmlkKGJhZ0dyaWRJdGVtKTtcblxuICAgICAgICAgICAgZ3JpZFNsb3QuU2V0Um93KHBhcnNlSW50KFwiXCIraS81KSk7XG4gICAgICAgICAgICBncmlkU2xvdC5TZXRDb2x1bW4ocGFyc2VJbnQoXCJcIitpJTUpKTtcbiAgICAgICAgfVxuICAgICAgIFxuXG4gICAgICAgIGJhZy5BZGRUb1ZpZXdwb3J0KCk7XG4gICAgfVxufVxuXG5cbm5ldyBHYW1lTWFpbigpLnN0YXJ0KCk7Il0sInNvdXJjZVJvb3QiOiIifQ==