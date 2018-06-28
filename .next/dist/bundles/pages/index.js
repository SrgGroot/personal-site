module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_motion__ = __webpack_require__("react-motion");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_motion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_motion__);
var _jsxFileName = "C:\\Projects\\personal-site\\frontend\\components\\layout.js";





/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children,
      title = _ref.title;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_motion__["Motion"], {
    defaultStyle: {
      x: -10,
      opacity: 0
    },
    style: {
      x: Object(__WEBPACK_IMPORTED_MODULE_4_react_motion__["spring"])(0),
      opacity: Object(__WEBPACK_IMPORTED_MODULE_4_react_motion__["spring"])(1)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, function (style) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      style: {
        transform: "translateX(".concat(style.x, "px)"),
        opacity: style.opacity
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      className: "jsx-1608160676" + " " + 'root'
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      className: "jsx-1608160676"
    }, title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
      charSet: "utf-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      className: "jsx-1608160676"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
      name: "viewport",
      content: "initial-scale=1.0, width=device-width",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      className: "jsx-1608160676"
    })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("header", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      className: "jsx-1608160676"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      className: "jsx-1608160676"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      className: "jsx-1608160676"
    }, "Home")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
      href: "/about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      className: "jsx-1608160676"
    }, "About")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
      href: "/contact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      className: "jsx-1608160676"
    }, "Contact")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
      href: "/newindex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      className: "jsx-1608160676"
    }, "Color Palettes")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      id: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      className: "jsx-1608160676"
    }, children), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("footer", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      className: "jsx-1608160676"
    }, 'samrgroot@gmail.com'), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "400546540",
      css: "html{height:100%;}body{margin:0;height:100%;background-color:#D5F7FF;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQzJCLEFBR3lCLEFBR0gsU0FDRyxHQUhkLFNBSTJCLHlCQUMzQiIsImZpbGUiOiJjb21wb25lbnRzXFxsYXlvdXQuanMiLCJzb3VyY2VSb290IjoiQzpcXFByb2plY3RzXFxwZXJzb25hbC1zaXRlXFxmcm9udGVuZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQge01vdGlvbiwgc3ByaW5nfSBmcm9tICdyZWFjdC1tb3Rpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4sIHRpdGxlIH0pID0+IChcclxuICA8TW90aW9uIGRlZmF1bHRTdHlsZT17eyB4OiAtMTAsIG9wYWNpdHk6IDAgfX0gXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHg6IHNwcmluZygwKSwgb3BhY2l0eTogc3ByaW5nKDEpIH19PlxyXG4gICAgeyhzdHlsZSkgPT4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm9vdCdcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7c3R5bGUueH1weClgLFxyXG4gICAgICAgICAgb3BhY2l0eTogc3R5bGUub3BhY2l0eSB9fSA+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+eyB0aXRsZSB9PC90aXRsZT5cclxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvJz48YT5Ib21lPC9hPjwvTGluaz4gXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hYm91dCc+PGE+QWJvdXQ8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvY29udGFjdCc+PGE+Q29udGFjdDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9uZXdpbmRleCc+PGE+Q29sb3IgUGFsZXR0ZXM8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBpZD0nY29udGVudCc+IFxyXG4gICAgICAgICAgeyBjaGlsZHJlbiB9IFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8Zm9vdGVyPiBcclxuICAgICAgICAgIHsnc2Ftcmdyb290QGdtYWlsLmNvbSd9IFxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNENUY3RkY7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICNjb250ZW50IHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoZWFkZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5hdiB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250OiAyM3B4IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgY29sb3I6ICMwMEFEQjU7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIG5hdiB7XHJcbiAgICAgICAgICAgIGZvbnQ6IDE2cHggSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgZm9udDogMTJweCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKX1cclxuICA8L01vdGlvbj5cclxuKSJdfQ== */\n/*@ sourceURL=components\\layout.js */"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "644138433",
      css: "#content.jsx-1608160676{padding-top:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}header.jsx-1608160676{width:100%;}nav.jsx-1608160676{text-align:center;font:23px Helvetica,Arial,sans-serif;-webkit-flex:1;-ms-flex:1;flex:1;padding-top:20px;position:fixed;z-index:1000;top:0;left:0;right:0;width:100%;}a.jsx-1608160676{padding:15px;color:#00ADB5;-webkit-text-decoration:none;text-decoration:none;}@media (max-width:600px){a.jsx-1608160676{padding:10px;}nav.jsx-1608160676{font:16px Helvetica,Arial,sans-serif;}}div.jsx-1608160676{padding-top:40px;padding-left:5px;padding-right:5px;}footer.jsx-1608160676{padding-top:40px;padding-bottom:10px;font:12px Helvetica,Arial,sans-serif;text-align:center;}.root.jsx-1608160676{-webkit-flex:1;-ms-flex:1;flex:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Q29CLEFBRzJCLEFBTUwsQUFHTyxBQWFMLEFBTUUsQUFHMEIsQUFJeEIsQUFLQSxBQU1WLFdBdkNULEVBZ0JnQixBQU1kLEdBNUJhLENBbUNJLEFBS0csQ0EvQm1CLFNBY2xCLE1BdUJ2QixDQVZvQixHQUxsQixBQVV1QyxlQUp6QyxHQTNCUyxtQkFnQ1csR0FsQnBCLFdBYm1CLEVBVkUsRUEwQ3JCLGFBL0JpQixlQUNGLGFBQ1AsTUFDQyxPQUNDLFFBQ0csV0FFYixrQkFqQnlCLG1HQUN6QiIsImZpbGUiOiJjb21wb25lbnRzXFxsYXlvdXQuanMiLCJzb3VyY2VSb290IjoiQzpcXFByb2plY3RzXFxwZXJzb25hbC1zaXRlXFxmcm9udGVuZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQge01vdGlvbiwgc3ByaW5nfSBmcm9tICdyZWFjdC1tb3Rpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4sIHRpdGxlIH0pID0+IChcclxuICA8TW90aW9uIGRlZmF1bHRTdHlsZT17eyB4OiAtMTAsIG9wYWNpdHk6IDAgfX0gXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHg6IHNwcmluZygwKSwgb3BhY2l0eTogc3ByaW5nKDEpIH19PlxyXG4gICAgeyhzdHlsZSkgPT4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm9vdCdcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7c3R5bGUueH1weClgLFxyXG4gICAgICAgICAgb3BhY2l0eTogc3R5bGUub3BhY2l0eSB9fSA+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+eyB0aXRsZSB9PC90aXRsZT5cclxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvJz48YT5Ib21lPC9hPjwvTGluaz4gXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hYm91dCc+PGE+QWJvdXQ8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvY29udGFjdCc+PGE+Q29udGFjdDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9uZXdpbmRleCc+PGE+Q29sb3IgUGFsZXR0ZXM8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBpZD0nY29udGVudCc+IFxyXG4gICAgICAgICAgeyBjaGlsZHJlbiB9IFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8Zm9vdGVyPiBcclxuICAgICAgICAgIHsnc2Ftcmdyb290QGdtYWlsLmNvbSd9IFxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNENUY3RkY7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICNjb250ZW50IHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoZWFkZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5hdiB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250OiAyM3B4IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgY29sb3I6ICMwMEFEQjU7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIG5hdiB7XHJcbiAgICAgICAgICAgIGZvbnQ6IDE2cHggSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgZm9udDogMTJweCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKX1cclxuICA8L01vdGlvbj5cclxuKSJdfQ== */\n/*@ sourceURL=components\\layout.js */"
    }));
  });
});

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_node_fetch__ = __webpack_require__("node-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_node_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_node_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_motion__ = __webpack_require__("react-motion");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_motion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_motion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_pose__ = __webpack_require__("react-pose");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_pose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_pose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_layout__ = __webpack_require__("./components/layout.js");
var _jsxFileName = "C:\\Projects\\personal-site\\frontend\\pages\\index.js";



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 //components

 //test palette: {"id":"118872","c1":"323643","c2":"606470","c3":"93deff","c4":"f7f7f7","date":"05/22/18","likes":"626"}

var CreateIndex = function CreateIndex(props) {
  var component = new __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component(props);
  component.state = {
    subject: "My name is Sam Groot.",
    body: "I use creative solutions to solve expensive problems.",
    valuePitch: "I’m a software developer and entrepreneur that helps companies achieve their business goals.",
    loadSubject: false,
    loadBody: false,
    loadValuePitch: false,
    loadColors: false,
    palettes: []
  };

  component.handleChange = function (event) {
    component.setState(_defineProperty({}, event.target.name, event.target.value));
  };

  component.componentDidMount = function () {
    __WEBPACK_IMPORTED_MODULE_3_node_fetch___default()('https://colorhuntapi.now.sh/').then(function (res) {
      return res.json();
    });
    setTimeout(function () {
      component.setState({
        loadSubject: true
      });
    }, 333);
    setTimeout(function () {
      component.setState({
        loadBody: true
      });
    }, 1333);
    setTimeout(function () {
      component.setState({
        loadValuePitch: true
      });
    }, 2233);
    setTimeout(function () {
      component.setState({
        loadColors: true
      });
    }, 3233);
  };

  component.componentDidUpdate = function () {}; //I should make this a component since i'm using it in /about.js


  var ContentAnimation = __WEBPACK_IMPORTED_MODULE_5_react_pose___default.a.div({
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      //take 300ms to go from opacity: 0 to 1
      duration: 300
    }
  });

  var Index = function Index(props) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      className: "jsx-662993934" + " " + 'root'
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_layout__["a" /* default */], {
      title: "Sam Groot",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      className: "jsx-662993934" + " " + 'content'
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ContentAnimation, {
      pose: component.state.loadSubject ? "visible" : "hidden",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      className: "jsx-662993934" + " " + 'target-div'
    }, component.state.subject)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      className: "jsx-662993934"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ContentAnimation, {
      pose: component.state.loadBody ? "visible" : "hidden",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      }
    }, component.state.body), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      className: "jsx-662993934"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ContentAnimation, {
      pose: component.state.loadValuePitch ? "visible" : "hidden",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      }
    }, component.state.valuePitch, component.state.palettes.c1))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "662993934",
      css: "div.jsx-662993934{font:23px Times,Arial,sans-serif;}.target-div.jsx-662993934{text-align:center;font:35px Helvetica,Arial,sans-serif;}.content.jsx-662993934{text-align:center;padding-top:50px;max-width:600px;}.root.jsx-662993934{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnR2tCLEFBRzRDLEFBR2pCLEFBSUEsQUFLTCxrQkFSMEIsQUFJdEIsZUFQbkIsRUFRa0IsZ0JBQ2xCLElBTEEsbUJBUXFCLDZGQUNJLG1HQUN6QiIsImZpbGUiOiJwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VSb290IjoiQzpcXFByb2plY3RzXFxwZXJzb25hbC1zaXRlXFxmcm9udGVuZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJ1xyXG5pbXBvcnQge01vdGlvbiwgc3ByaW5nfSBmcm9tICdyZWFjdC1tb3Rpb24nO1xyXG5pbXBvcnQgcG9zZWQgZnJvbSBcInJlYWN0LXBvc2VcIjtcclxuLy9jb21wb25lbnRzXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xyXG5cclxuLy90ZXN0IHBhbGV0dGU6IHtcImlkXCI6XCIxMTg4NzJcIixcImMxXCI6XCIzMjM2NDNcIixcImMyXCI6XCI2MDY0NzBcIixcImMzXCI6XCI5M2RlZmZcIixcImM0XCI6XCJmN2Y3ZjdcIixcImRhdGVcIjpcIjA1LzIyLzE4XCIsXCJsaWtlc1wiOlwiNjI2XCJ9XHJcblxyXG5jb25zdCBDcmVhdGVJbmRleCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBSZWFjdC5Db21wb25lbnQocHJvcHMpO1xyXG4gIGNvbXBvbmVudC5zdGF0ZSA9IHtcclxuICAgIHN1YmplY3Q6IFwiTXkgbmFtZSBpcyBTYW0gR3Jvb3QuXCIsXHJcbiAgICBib2R5OiBcIkkgdXNlIGNyZWF0aXZlIHNvbHV0aW9ucyB0byBzb2x2ZSBleHBlbnNpdmUgcHJvYmxlbXMuXCIsXHJcbiAgICB2YWx1ZVBpdGNoOiBcIknigJltIGEgc29mdHdhcmUgZGV2ZWxvcGVyIGFuZCBlbnRyZXByZW5ldXIgdGhhdCBoZWxwcyBjb21wYW5pZXMgYWNoaWV2ZSB0aGVpciBidXNpbmVzcyBnb2Fscy5cIixcclxuICAgIGxvYWRTdWJqZWN0OiBmYWxzZSxcclxuICAgIGxvYWRCb2R5OiBmYWxzZSxcclxuICAgIGxvYWRWYWx1ZVBpdGNoOiBmYWxzZSxcclxuICAgIGxvYWRDb2xvcnM6IGZhbHNlLFxyXG4gICAgcGFsZXR0ZXM6IFtdXHJcbiAgfTtcclxuICBcclxuICBjb21wb25lbnQuaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb21wb25lbnQuc2V0U3RhdGUoe1tldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG4gIH1cclxuXHJcbiAgXHJcblxyXG4gIGNvbXBvbmVudC5jb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcclxuICAgIGZldGNoKCdodHRwczovL2NvbG9yaHVudGFwaS5ub3cuc2gvJylcclxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29tcG9uZW50LnNldFN0YXRlKHtsb2FkU3ViamVjdDogdHJ1ZSB9KVxyXG4gICAgICB9LCAzMzMgKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb21wb25lbnQuc2V0U3RhdGUoe2xvYWRCb2R5OiB0cnVlIH0pXHJcbiAgICB9LCAxMzMzICk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29tcG9uZW50LnNldFN0YXRlKHtsb2FkVmFsdWVQaXRjaDogdHJ1ZSB9KVxyXG4gICAgfSwgMjIzMyApO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZSh7bG9hZENvbG9yczogdHJ1ZSB9KVxyXG4gICAgfSwgMzIzMyApO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50LmNvbXBvbmVudERpZFVwZGF0ZSA9ICgpID0+IHtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLy9JIHNob3VsZCBtYWtlIHRoaXMgYSBjb21wb25lbnQgc2luY2UgaSdtIHVzaW5nIGl0IGluIC9hYm91dC5qc1xyXG4gIGNvbnN0IENvbnRlbnRBbmltYXRpb24gPSBwb3NlZC5kaXYoe1xyXG4gICAgaGlkZGVuOiB7IFxyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgfSxcclxuICAgIHZpc2libGU6IHsgXHJcbiAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgIC8vdGFrZSAzMDBtcyB0byBnbyBmcm9tIG9wYWNpdHk6IDAgdG8gMVxyXG4gICAgICBkdXJhdGlvbjogMzAwXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncm9vdCc+XHJcbiAgICAgIDxMYXlvdXQgdGl0bGU9J1NhbSBHcm9vdCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgICAgICAgPENvbnRlbnRBbmltYXRpb25cclxuICAgICAgICAgICAgcG9zZT17IFxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudC5zdGF0ZS5sb2FkU3ViamVjdCBcclxuICAgICAgICAgICAgICA/IFwidmlzaWJsZVwiIFxyXG4gICAgICAgICAgICAgIDogXCJoaWRkZW5cIiBcclxuICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YXJnZXQtZGl2Jz4gXHJcbiAgICAgICAgICAgICAge2NvbXBvbmVudC5zdGF0ZS5zdWJqZWN0fVxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICA8L0NvbnRlbnRBbmltYXRpb24+XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgPENvbnRlbnRBbmltYXRpb25cclxuICAgICAgICAgICAgcG9zZT17IGNvbXBvbmVudC5zdGF0ZS5sb2FkQm9keSBcclxuICAgICAgICAgICAgICA/IFwidmlzaWJsZVwiIFxyXG4gICAgICAgICAgICAgIDogXCJoaWRkZW5cIiBcclxuICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgIHtjb21wb25lbnQuc3RhdGUuYm9keX1cclxuICAgICAgICAgIDwvQ29udGVudEFuaW1hdGlvbj5cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICA8Q29udGVudEFuaW1hdGlvblxyXG4gICAgICAgICAgICBwb3NlPXsgY29tcG9uZW50LnN0YXRlLmxvYWRWYWx1ZVBpdGNoXHJcbiAgICAgICAgICAgICAgPyBcInZpc2libGVcIiBcclxuICAgICAgICAgICAgICA6IFwiaGlkZGVuXCIgXHJcbiAgICAgICAgICB9PlxyXG4gICAgICAgICAgICB7Y29tcG9uZW50LnN0YXRlLnZhbHVlUGl0Y2h9XHJcbiAgICAgICAgICAgIHtjb21wb25lbnQuc3RhdGUucGFsZXR0ZXMuYzF9XHJcbiAgICAgICAgICA8L0NvbnRlbnRBbmltYXRpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgICBcclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICBkaXYge1xyXG4gICAgICAgIGZvbnQ6IDIzcHggVGltZXMsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICB9O1xyXG4gICAgICAudGFyZ2V0LWRpdiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQ6IDM1cHggSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgfTtcclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICB9O1xyXG4gICAgICAucm9vdCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxuXHJcbiAgY29tcG9uZW50LnJlbmRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SW5kZXgvPlxyXG4gICAgKVxyXG4gIH1cclxuICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVJbmRleDsiXX0= */\n/*@ sourceURL=pages\\index.js */"
    }));
  };

  component.render = function () {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Index, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      }
    });
  };

  return component;
};

/* harmony default export */ __webpack_exports__["default"] = (CreateIndex);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "node-fetch":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-motion":
/***/ (function(module, exports) {

module.exports = require("react-motion");

/***/ }),

/***/ "react-pose":
/***/ (function(module, exports) {

module.exports = require("react-pose");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map