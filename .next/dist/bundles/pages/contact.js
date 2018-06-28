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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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

/***/ "./components/number.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\Projects\\personal-site\\frontend\\components\\number.js";

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children,
      number = _ref.number;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, "Call me at ", number), children);
});

/***/ }),

/***/ "./pages/contact.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout__ = __webpack_require__("./components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_number__ = __webpack_require__("./components/number.js");
var _jsxFileName = "C:\\Projects\\personal-site\\frontend\\pages\\contact.js";




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_layout__["a" /* default */], {
    title: "Contact me",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-1243117857" + " " + 'contact'
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_number__["a" /* default */], {
    number: "XXX-XXX-XXXX",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1243117857",
    css: ".contact.jsx-1243117857{margin-top:50px;text-align:center;font:35px Helvetica,Arial,sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNnQixBQUd1QixnQkFDRSxrQkFDcUIscUNBQ3pDIiwiZmlsZSI6InBhZ2VzXFxjb250YWN0LmpzIiwic291cmNlUm9vdCI6IkM6XFxQcm9qZWN0c1xccGVyc29uYWwtc2l0ZVxcZnJvbnRlbmQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgTnVtYmVyIGZyb20gJy4uL2NvbXBvbmVudHMvbnVtYmVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gIDxMYXlvdXQgdGl0bGU9J0NvbnRhY3QgbWUnPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhY3QnPlxyXG4gICAgICA8TnVtYmVyIG51bWJlcj0nWFhYLVhYWC1YWFhYJy8+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAuY29udGFjdCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udDogMzVweCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gIGB9PC9zdHlsZT5cclxuICA8L0xheW91dD5cclxuKSJdfQ== */\n/*@ sourceURL=pages\\contact.js */"
  }));
});

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/contact.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-motion":
/***/ (function(module, exports) {

module.exports = require("react-motion");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=contact.js.map