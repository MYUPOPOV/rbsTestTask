/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_chooseAbout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/chooseAbout */ \"./modules/chooseAbout.js\");\n\r\n\r\n(0,_modules_chooseAbout__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUFnRDtBQUNoRDtBQUNBLGdFQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaW5kZXguanM/NDFmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hvb3NlQWJvdXQgZnJvbSAnLi9tb2R1bGVzL2Nob29zZUFib3V0JztcclxuXHJcbmNob29zZUFib3V0KCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./modules/chooseAbout.js":
/*!********************************!*\
  !*** ./modules/chooseAbout.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst chooseAbout = () => {\r\n\tconst chooseBlock = document.querySelector('.i5-about-choose');\r\n\tconst chooseBlockAll = document.querySelectorAll('.i5-about-choose-block');\r\n\tconst aboutContentAll = document.querySelectorAll('.i5-about-content');\r\n\r\n\tchooseBlock.addEventListener('click', (e) => {\r\n\t\tif (e.target.closest('.i5-about-choose-block')) {\r\n\t\t\tchooseBlockAll.forEach((item, index) => {\r\n\t\t\t\taboutContentAll[index].classList.add('hidden');\r\n\t\t\t\tif (item === e.target.closest('.i5-about-choose-block')) {\r\n\t\t\t\t\taboutContentAll[index].classList.toggle('hidden');\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t}\r\n\t});\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chooseAbout);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL2Nob29zZUFib3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLGlFQUFlLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL21vZHVsZXMvY2hvb3NlQWJvdXQuanM/ODc4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjaG9vc2VBYm91dCA9ICgpID0+IHtcclxuXHRjb25zdCBjaG9vc2VCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pNS1hYm91dC1jaG9vc2UnKTtcclxuXHRjb25zdCBjaG9vc2VCbG9ja0FsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pNS1hYm91dC1jaG9vc2UtYmxvY2snKTtcclxuXHRjb25zdCBhYm91dENvbnRlbnRBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaTUtYWJvdXQtY29udGVudCcpO1xyXG5cclxuXHRjaG9vc2VCbG9jay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRpZiAoZS50YXJnZXQuY2xvc2VzdCgnLmk1LWFib3V0LWNob29zZS1ibG9jaycpKSB7XHJcblx0XHRcdGNob29zZUJsb2NrQWxsLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0YWJvdXRDb250ZW50QWxsW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuXHRcdFx0XHRpZiAoaXRlbSA9PT0gZS50YXJnZXQuY2xvc2VzdCgnLmk1LWFib3V0LWNob29zZS1ibG9jaycpKSB7XHJcblx0XHRcdFx0XHRhYm91dENvbnRlbnRBbGxbaW5kZXhdLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaG9vc2VBYm91dDtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./modules/chooseAbout.js\n");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;