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
        //同步加载 
        // LoadObject
        // LoadClass
        // LoadPackage
        // FSoftObjectPath::TryLoad
        // FStreamableManager::RequestSyncLoad
        // FStreamableManager::LoadSynchronous
        // FlushAsyncLoading（异步转同步）
        //异步加载
        // LoadPackageAsync
        // FStreamableManager::RequestAsyncLoad
        //判断加载状态
        // GIsSavingPackage  判断引擎当前是否在保存Package。
        // IsGarbageCollectingOnGameThread 判断引擎当前是否在gc
        // IsLoading 判断引擎当前是否正在加载
        // GetNumAsyncPackages 返回当前正在加载的包
        // GetAsyncLoadPercentage  获取指定资源加载进度
        // FStreamableManager::IsAsyncLoadComplete 判断指定的FSoftObjectPath对应的资源是否已经加载完成
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90c3Byb2ovZXh0ZXJuYWwgXCJwdWVydHNcIiIsIndlYnBhY2s6Ly90c3Byb2ovZXh0ZXJuYWwgXCJ1ZVwiIiwid2VicGFjazovL3RzcHJvai93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90c3Byb2ovLi9zcmMvR2FtZU1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG1DOzs7Ozs7Ozs7O0FDQUEsK0I7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7OztBQ3RCQSwrQ0FBeUI7QUFDekIsNkRBQTRCO0FBSTVCLE1BQU0sUUFBUTtJQUVWO0lBRUEsQ0FBQztJQUVNLEtBQUs7UUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7UUFHeEQsSUFBSSxLQUFLLEdBQUksYUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQW1CLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFekUsd0dBQXdHO1FBQ3hHLDBGQUEwRjtRQUUxRiw4QkFBOEI7UUFFOUIsNkZBQTZGO1FBQzdGLG9FQUFvRTtRQUNwRSx5Q0FBeUM7UUFDekMsOENBQThDO1FBQzlDLG9DQUFvQztRQUNwQyxNQUFNO1FBR04sOEdBQThHO1FBQzlHLHVGQUF1RjtRQUN2Rix3Q0FBd0M7UUFFeEMsaUNBQWlDO1FBRXpDLE9BQU87UUFDUCxhQUFhO1FBQ2IsWUFBWTtRQUNaLGNBQWM7UUFDZCwyQkFBMkI7UUFDM0Isc0NBQXNDO1FBQ3RDLHNDQUFzQztRQUN0QywyQkFBMkI7UUFFM0IsTUFBTTtRQUNOLG1CQUFtQjtRQUNuQix1Q0FBdUM7UUFFdkMsUUFBUTtRQUNSLHdDQUF3QztRQUN4Qyw4Q0FBOEM7UUFDOUMseUJBQXlCO1FBQ3pCLGlDQUFpQztRQUNqQyxxQ0FBcUM7UUFDckMsNEVBQTRFO1FBR3BFLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNEQUFzRCxDQUFDLENBQUM7UUFDbkYsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsMERBQTBELENBQUMsQ0FBQztRQUN2RixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywwREFBMEQsQ0FBQyxDQUFDO1FBQ3ZGLElBQUksS0FBSyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUdsQyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxnRUFBZ0UsQ0FBQyxDQUFDO1FBQy9GLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQW1CLENBQUM7UUFDeEUsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUNoQyxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBRXJDLElBQUksZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0ZBQWdGLENBQUMsQ0FBQztRQUN2SCxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFDO1lBRW5CLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBMkIsQ0FBQztZQUNoRyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3hDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDO1lBQzdCLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRXJFLElBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUU1RCxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO1FBR0QsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBRXhCLENBQUM7Q0FDSjtBQUdELElBQUksUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHVlcnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVlXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgKiBhcyBVRSBmcm9tICd1ZSc7XG5pbXBvcnQge2FyZ3Z9IGZyb20gJ3B1ZXJ0cyc7XG5cblxuXG5jbGFzcyBHYW1lTWFpbntcblxuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnQoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJoZWxsbyB3b3JsZCwgdGhpcyBpcyBqdXN0aW4gaGVyZS4uLjIyMi4uXCIpO1xuXG5cbiAgICAgICAgbGV0IHdvcmxkID0gKGFyZ3YuZ2V0QnlOYW1lKFwiR2FtZUluc3RhbmNlXCIpIGFzIFVFLkdhbWVFbmdpbmUpLkdldFdvcmxkKCk7XG4gICAgICBcbiAgICAgICAgLy8gbGV0IGxvZ2luUGFnZUNsYXNzID0gVUUuQ2xhc3MuTG9hZChcIldpZGdldEJsdWVwcmludCcvR2FtZS9CbHVlcHJpbnRzL1VJL0JhZy9CYWdXaWRnZXQuQmFnV2lkZ2V0X0MnXCIpO1xuICAgICAgICAvLyBsZXQgbG9naW5QYWdlID0gVUUuVU1HTWFuYWdlci5DcmVhdGVXaWRnZXQod29ybGQsIGxvZ2luUGFnZUNsYXNzKSBhcyBVRS5CUF9Mb2dpblBhZ2VfQztcbiAgICBcbiAgICAgICAgLy8gbG9naW5QYWdlLkFkZFRvVmlld3BvcnQoMCk7XG4gICAgICAgIFxuICAgICAgICAvLyBsZXQgYnRuTm9ybWFsID0gVUUuT2JqZWN0LkxvYWQoXCIvR2FtZS9Bc3NldC9VSUFzc2V0L0JhZy91aV9iYWdfdGlwYnRuXzEudWlfYmFnX3RpcGJ0bl8xXCIpO1xuICAgICAgICAvLyBsb2dpblBhZ2UubG9naW5CdG4uV2lkZ2V0U3R5bGUuTm9ybWFsLlJlc291cmNlT2JqZWN0ID0gYnRuTm9ybWFsO1xuICAgICAgICAvLyBsb2dpblBhZ2UubG9naW5CdG4uT25DbGlja2VkLkFkZCgoKT0+e1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJqdXN0aW4gY2xpY2sgbWUuLi4uLi4uLlwiKTtcbiAgICAgICAgLy8gICAgIGxvZ2luUGFnZS5SZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgIC8vIH0pO1xuXG5cbiAgICAgICAgLy8gbGV0IGJhZ0dyaWRDbGFzcyA9IFVFLkNsYXNzLkxvYWQoXCJXaWRnZXRCbHVlcHJpbnQnL0dhbWUvQmx1ZXByaW50cy9VSS9CYWcvQmFnR3JpZFdpZGdldC5CYWdHcmlkV2lkZ2V0X0MnXCIpO1xuICAgICAgICAvLyBsZXQgYmFnR3JpZCA9IFVFLlVNR01hbmFnZXIuQ3JlYXRlV2lkZ2V0KHdvcmxkLCBiYWdHcmlkQ2xhc3MpIGFzIFVFLkJhZ0dyaWRXaWRnZXRfQztcbiAgICAgICAgLy8gbGV0IGdyaWRQYW5lbCA9IGJhZ0dyaWQuQmFnR3JpZFBhbmVsO1xuXG4gICAgICAgIC8vbGV0IGJhZ0dyaWRQYW5lbCA9IGJhZ0l0ZW0uZmluZFxuXG4vL+WQjOatpeWKoOi9vSBcbi8vIExvYWRPYmplY3Rcbi8vIExvYWRDbGFzc1xuLy8gTG9hZFBhY2thZ2Vcbi8vIEZTb2Z0T2JqZWN0UGF0aDo6VHJ5TG9hZFxuLy8gRlN0cmVhbWFibGVNYW5hZ2VyOjpSZXF1ZXN0U3luY0xvYWRcbi8vIEZTdHJlYW1hYmxlTWFuYWdlcjo6TG9hZFN5bmNocm9ub3VzXG4vLyBGbHVzaEFzeW5jTG9hZGluZ++8iOW8guatpei9rOWQjOatpe+8iVxuXG4vL+W8guatpeWKoOi9vVxuLy8gTG9hZFBhY2thZ2VBc3luY1xuLy8gRlN0cmVhbWFibGVNYW5hZ2VyOjpSZXF1ZXN0QXN5bmNMb2FkXG5cbi8v5Yik5pat5Yqg6L2954q25oCBXG4vLyBHSXNTYXZpbmdQYWNrYWdlICDliKTmlq3lvJXmk47lvZPliY3mmK/lkKblnKjkv53lrZhQYWNrYWdl44CCXG4vLyBJc0dhcmJhZ2VDb2xsZWN0aW5nT25HYW1lVGhyZWFkIOWIpOaWreW8leaTjuW9k+WJjeaYr+WQpuWcqGdjXG4vLyBJc0xvYWRpbmcg5Yik5pat5byV5pOO5b2T5YmN5piv5ZCm5q2j5Zyo5Yqg6L29XG4vLyBHZXROdW1Bc3luY1BhY2thZ2VzIOi/lOWbnuW9k+WJjeato+WcqOWKoOi9veeahOWMhVxuLy8gR2V0QXN5bmNMb2FkUGVyY2VudGFnZSAg6I635Y+W5oyH5a6a6LWE5rqQ5Yqg6L296L+b5bqmXG4vLyBGU3RyZWFtYWJsZU1hbmFnZXI6OklzQXN5bmNMb2FkQ29tcGxldGUg5Yik5pat5oyH5a6a55qERlNvZnRPYmplY3RQYXRo5a+55bqU55qE6LWE5rqQ5piv5ZCm5bey57uP5Yqg6L295a6M5oiQXG5cblxuICAgICAgICBsZXQgaWNvbjEgPSBVRS5PYmplY3QuTG9hZChcIlRleHR1cmUyRCcvR2FtZS9Bc3NldC9VSUFzc2V0L0JhZy9pX3NfeXlfMS5pX3NfeXlfMSdcIik7XG4gICAgICAgIGxldCBpY29uMiA9IFVFLk9iamVjdC5Mb2FkKFwiVGV4dHVyZTJEJy9HYW1lL0Fzc2V0L1VJQXNzZXQvQmFnL2lfc195eXN6XzIuaV9zX3l5c3pfMidcIik7XG4gICAgICAgIGxldCBpY29uMyA9IFVFLk9iamVjdC5Mb2FkKFwiVGV4dHVyZTJEJy9HYW1lL0Fzc2V0L1VJQXNzZXQvQmFnL2lfc195emh1XzEuaV9zX3l6aHVfMSdcIik7XG4gICAgICAgIGxldCBpY29ucyA9IFtpY29uMSwgaWNvbjIsIGljb24zXTtcbiAgICAgIFxuXG4gICAgICAgIGxldCBiYWdDbGFzcyA9IFVFLkNsYXNzLkxvYWQoXCJXaWRnZXRCbHVlcHJpbnQnL0dhbWUvQmx1ZXByaW50cy9VSS9CYWcvQmFnV2lkZ2V0LkJhZ1dpZGdldF9DJ1wiKTtcbiAgICAgICAgbGV0IGJhZyA9IFVFLlVNR01hbmFnZXIuQ3JlYXRlV2lkZ2V0KHdvcmxkLCBiYWdDbGFzcykgYXMgVUUuQmFnV2lkZ2V0X0M7XG4gICAgICAgIGxldCBiYWdHcmlkID0gYmFnLkJhZ0l0ZW1XaWRnZXQ7XG4gICAgICAgIGxldCBncmlkUGFuZWwgPSBiYWdHcmlkLkJhZ0dyaWRQYW5lbDtcblxuICAgICAgICBsZXQgYmFnR3JpZEl0ZW1DbGFzcyA9IFVFLkNsYXNzLkxvYWQoXCJXaWRnZXRCbHVlcHJpbnQnL0dhbWUvQmx1ZXByaW50cy9VSS9CYWcvQmFnR3JpZEl0ZW1XaWRnZXQuQmFnR3JpZEl0ZW1XaWRnZXRfQydcIik7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPDUwOyBpKyspe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgYmFnR3JpZEl0ZW0gPSBVRS5VTUdNYW5hZ2VyLkNyZWF0ZVdpZGdldCh3b3JsZCwgYmFnR3JpZEl0ZW1DbGFzcykgYXMgVUUuQmFnR3JpZEl0ZW1XaWRnZXRfQztcbiAgICAgICAgICAgIGJhZ0dyaWRJdGVtLkl0ZW1BbW91bnQuU2V0VGV4dChcIlwiK2kqMTApO1xuICAgICAgICAgICAgbGV0IHJuZCA9IE1hdGgucmFuZG9tKCkqMTAlMztcbiAgICAgICAgICAgIGJhZ0dyaWRJdGVtLkl0ZW1JbWFnZS5CcnVzaC5SZXNvdXJjZU9iamVjdCA9IGljb25zW3BhcnNlSW50KFwiXCIrcm5kKV07XG5cbiAgICAgICAgICAgIGxldCBncmlkU2xvdCA9IGdyaWRQYW5lbC5BZGRDaGlsZFRvVW5pZm9ybUdyaWQoYmFnR3JpZEl0ZW0pO1xuXG4gICAgICAgICAgICBncmlkU2xvdC5TZXRSb3cocGFyc2VJbnQoXCJcIitpLzUpKTtcbiAgICAgICAgICAgIGdyaWRTbG90LlNldENvbHVtbihwYXJzZUludChcIlwiK2klNSkpO1xuICAgICAgICB9XG4gICAgICAgXG5cbiAgICAgICAgYmFnLkFkZFRvVmlld3BvcnQoKTtcbiAgICAgIFxuICAgIH1cbn1cblxuXG5uZXcgR2FtZU1haW4oKS5zdGFydCgpOyJdLCJzb3VyY2VSb290IjoiIn0=