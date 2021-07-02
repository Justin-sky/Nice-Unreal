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

/***/ "react-umg":
/*!****************************!*\
  !*** external "react-umg" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-umg");

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
const puerts_1 = __webpack_require__(/*! puerts */ "puerts");
const react_umg_1 = __webpack_require__(/*! react-umg */ "react-umg");
class GameMain {
    constructor() {
    }
    start() {
        console.log("hello world, this is justin here...222..");
        let world = puerts_1.argv.getByName("GameInstance").GetWorld();
        console.log(world);
        react_umg_1.ReactUMG.init(world);
    }
}
new GameMain().start();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90c3Byb2ovZXh0ZXJuYWwgXCJwdWVydHNcIiIsIndlYnBhY2s6Ly90c3Byb2ovZXh0ZXJuYWwgXCJyZWFjdC11bWdcIiIsIndlYnBhY2s6Ly90c3Byb2ovd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHNwcm9qLy4vc3JjL0dhbWVNYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxtQzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7QUNyQkEsNkRBQTRCO0FBQzVCLHNFQUFtQztBQUVuQyxNQUFNLFFBQVE7SUFFVjtJQUVBLENBQUM7SUFFTSxLQUFLO1FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO1FBR3hELElBQUksS0FBSyxHQUFJLGFBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEIsb0JBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFHeEIsQ0FBQztDQUNKO0FBR0QsSUFBSSxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwdWVydHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdW1nXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgKiBhcyBVRSBmcm9tICd1ZSc7XG5pbXBvcnQge2FyZ3Z9IGZyb20gJ3B1ZXJ0cyc7XG5pbXBvcnQge1JlYWN0VU1HfSBmcm9tICdyZWFjdC11bWcnO1xuXG5jbGFzcyBHYW1lTWFpbntcblxuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnQoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJoZWxsbyB3b3JsZCwgdGhpcyBpcyBqdXN0aW4gaGVyZS4uLjIyMi4uXCIpO1xuXG5cbiAgICAgICAgbGV0IHdvcmxkID0gKGFyZ3YuZ2V0QnlOYW1lKFwiR2FtZUluc3RhbmNlXCIpIGFzIFVFLkdhbWVFbmdpbmUpLkdldFdvcmxkKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHdvcmxkKTtcbiAgICAgICBSZWFjdFVNRy5pbml0KHdvcmxkKTtcblxuICAgICAgICBcbiAgICB9XG59XG5cblxubmV3IEdhbWVNYWluKCkuc3RhcnQoKTsiXSwic291cmNlUm9vdCI6IiJ9