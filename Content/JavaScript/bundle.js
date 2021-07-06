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
        let loginPageClass = UE.Class.Load("/Game/Blueprints/UI/BP_LoginPage.BP_LoginPage_C");
        let loginPage = UE.UMGManager.CreateWidget(world, loginPageClass);
        loginPage.AddToViewport(0);
        loginPage.loginBtn.OnClicked.Add(() => {
            console.log("justin click me........");
        });
    }
}
new GameMain().start();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90c3Byb2ovZXh0ZXJuYWwgXCJwdWVydHNcIiIsIndlYnBhY2s6Ly90c3Byb2ovZXh0ZXJuYWwgXCJ1ZVwiIiwid2VicGFjazovL3RzcHJvai93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90c3Byb2ovLi9zcmMvR2FtZU1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG1DOzs7Ozs7Ozs7O0FDQUEsK0I7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7OztBQ3RCQSwrQ0FBeUI7QUFDekIsNkRBQTRCO0FBSTVCLE1BQU0sUUFBUTtJQUVWO0lBRUEsQ0FBQztJQUVNLEtBQUs7UUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7UUFHeEQsSUFBSSxLQUFLLEdBQUksYUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQW1CLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFekUsSUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsaURBQWlELENBQUMsQ0FBQztRQUN0RixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFzQixDQUFDO1FBRXZGLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFM0IsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUUsRUFBRTtZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUFHRCxJQUFJLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInB1ZXJ0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1ZVwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0ICogYXMgVUUgZnJvbSAndWUnO1xuaW1wb3J0IHthcmd2fSBmcm9tICdwdWVydHMnO1xuXG5cblxuY2xhc3MgR2FtZU1haW57XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0KCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG8gd29ybGQsIHRoaXMgaXMganVzdGluIGhlcmUuLi4yMjIuLlwiKTtcblxuXG4gICAgICAgIGxldCB3b3JsZCA9IChhcmd2LmdldEJ5TmFtZShcIkdhbWVJbnN0YW5jZVwiKSBhcyBVRS5HYW1lRW5naW5lKS5HZXRXb3JsZCgpO1xuICAgICAgXG4gICAgICAgIGxldCBsb2dpblBhZ2VDbGFzcyA9IFVFLkNsYXNzLkxvYWQoXCIvR2FtZS9CbHVlcHJpbnRzL1VJL0JQX0xvZ2luUGFnZS5CUF9Mb2dpblBhZ2VfQ1wiKTtcbiAgICAgICAgbGV0IGxvZ2luUGFnZSA9IFVFLlVNR01hbmFnZXIuQ3JlYXRlV2lkZ2V0KHdvcmxkLCBsb2dpblBhZ2VDbGFzcykgYXMgVUUuQlBfTG9naW5QYWdlX0M7XG4gICAgXG4gICAgICAgIGxvZ2luUGFnZS5BZGRUb1ZpZXdwb3J0KDApO1xuICAgICAgICBcbiAgICAgICAgbG9naW5QYWdlLmxvZ2luQnRuLk9uQ2xpY2tlZC5BZGQoKCk9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwianVzdGluIGNsaWNrIG1lLi4uLi4uLi5cIik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5uZXcgR2FtZU1haW4oKS5zdGFydCgpOyJdLCJzb3VyY2VSb290IjoiIn0=