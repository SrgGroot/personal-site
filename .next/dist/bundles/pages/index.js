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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
var _jsxFileName = "C:\\Projects\\personal-site\\components\\layout.js";





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
      className: "jsx-3861002953" + " " + 'root'
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
      className: "jsx-3861002953"
    }, title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
      charSet: "utf-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      className: "jsx-3861002953"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
      name: "viewport",
      content: "initial-scale=1.0, width=device-width",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      className: "jsx-3861002953"
    })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("header", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      className: "jsx-3861002953"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      className: "jsx-3861002953"
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
      className: "jsx-3861002953"
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
      className: "jsx-3861002953"
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
      className: "jsx-3861002953"
    }, "Contact")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      className: "jsx-3861002953" + " " + 'content'
    }, " ", children, " "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("footer", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      className: "jsx-3861002953"
    }, " ", 'I\'m a footer', " "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "400546540",
      css: "html{height:100%;}body{margin:0;height:100%;background-color:#D5F7FF;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QjJCLEFBR3lCLEFBR0gsU0FDRyxHQUhkLFNBSTJCLHlCQUMzQiIsImZpbGUiOiJjb21wb25lbnRzXFxsYXlvdXQuanMiLCJzb3VyY2VSb290IjoiQzpcXFByb2plY3RzXFxwZXJzb25hbC1zaXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7TW90aW9uLCBzcHJpbmd9IGZyb20gJ3JlYWN0LW1vdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiwgdGl0bGUgfSkgPT4gKFxyXG4gIDxNb3Rpb24gZGVmYXVsdFN0eWxlPXt7IHg6IC0xMCwgb3BhY2l0eTogMCB9fSBcclxuICAgICAgICAgICAgc3R5bGU9e3sgeDogc3ByaW5nKDApLCBvcGFjaXR5OiBzcHJpbmcoMSkgfX0+XHJcbiAgICB7KHN0eWxlKSA9PiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb290J1xyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHtzdHlsZS54fXB4KWAsXHJcbiAgICAgICAgICBvcGFjaXR5OiBzdHlsZS5vcGFjaXR5IH19ID5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT57IHRpdGxlIH08L3RpdGxlPlxyXG4gICAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPjxhPkhvbWU8L2E+PC9MaW5rPiBcclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL2Fib3V0Jz48YT5BYm91dDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9jb250YWN0Jz48YT5Db250YWN0PC9hPjwvTGluaz5cclxuICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz4geyBjaGlsZHJlbiB9IDwvZGl2PlxyXG5cclxuICAgICAgICA8Zm9vdGVyPiB7J0lcXCdtIGEgZm9vdGVyJ30gPC9mb290ZXI+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICBodG1sIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Q1RjdGRjtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgbmF2IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQ6IDIzcHggSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICBjb2xvcjogIzAwQURCNTtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgZm9udDogMTJweCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKX1cclxuICA8L01vdGlvbj5cclxuKSJdfQ== */\n/*@ sourceURL=components\\layout.js */"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "1599563916",
      css: "nav.jsx-3861002953{text-align:center;font:23px Helvetica,Arial,sans-serif;padding:12px;padding-top:20px;position:fixed;z-index:1000;top:0;left:0;right:0;}a.jsx-3861002953{padding:20px;color:#00ADB5;-webkit-text-decoration:none;text-decoration:none;}div.jsx-3861002953{padding-top:40px;}footer.jsx-3861002953{padding-top:40px;padding-bottom:10px;font:12px Helvetica,Arial,sans-serif;text-align:center;}.root.jsx-3861002953{height:100%;}.content.jsx-3861002953{padding:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q29CLEFBRzZCLEFBV0wsQUFLSSxBQUdBLEFBTUwsQUFHQyxZQUZmLENBZGdCLEFBaUJoQixJQVpBLEFBR3NCLENBbkJtQixTQVlsQixVQVFrQixrQkFuQjFCLGFBQ0ksTUFtQkMsR0FScEIsUUFWaUIsT0FtQmpCLFFBbEJlLGFBQ1AsTUFDQyxPQUNDLFFBQ1YiLCJmaWxlIjoiY29tcG9uZW50c1xcbGF5b3V0LmpzIiwic291cmNlUm9vdCI6IkM6XFxQcm9qZWN0c1xccGVyc29uYWwtc2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQge01vdGlvbiwgc3ByaW5nfSBmcm9tICdyZWFjdC1tb3Rpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4sIHRpdGxlIH0pID0+IChcclxuICA8TW90aW9uIGRlZmF1bHRTdHlsZT17eyB4OiAtMTAsIG9wYWNpdHk6IDAgfX0gXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHg6IHNwcmluZygwKSwgb3BhY2l0eTogc3ByaW5nKDEpIH19PlxyXG4gICAgeyhzdHlsZSkgPT4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm9vdCdcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7c3R5bGUueH1weClgLFxyXG4gICAgICAgICAgb3BhY2l0eTogc3R5bGUub3BhY2l0eSB9fSA+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+eyB0aXRsZSB9PC90aXRsZT5cclxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvJz48YT5Ib21lPC9hPjwvTGluaz4gXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hYm91dCc+PGE+QWJvdXQ8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvY29udGFjdCc+PGE+Q29udGFjdDwvYT48L0xpbms+XHJcbiAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+IHsgY2hpbGRyZW4gfSA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGZvb3Rlcj4geydJXFwnbSBhIGZvb3Rlcid9IDwvZm9vdGVyPlxyXG5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNENUY3RkY7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIG5hdiB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250OiAyM3B4IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgY29sb3I6ICMwMEFEQjU7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgIGZvbnQ6IDEycHggSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC5yb290IHtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICl9XHJcbiAgPC9Nb3Rpb24+XHJcbikiXX0= */\n/*@ sourceURL=components\\layout.js */"
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_layout__ = __webpack_require__("./components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_motion__ = __webpack_require__("react-motion");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_motion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_motion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_pose__ = __webpack_require__("react-pose");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_pose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_pose__);
var _jsxFileName = "C:\\Projects\\personal-site\\pages\\index.js";



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var CreateIndex = function CreateIndex(props) {
  var component = new __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component(props);
  component.state = {
    subject: "My name is Sam Groot.",
    body: " I use creative solutions to solve expensive problems.",
    changeName: "am Groot."
  };

  component.handleChange = function (event) {
    component.setState(_defineProperty({}, event.target.name, event.target.value));
  };

  component.componentDidMount = function () {
    component;
  };

  component.render = function () {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      className: "jsx-1963203344" + " " + 'root'
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_layout__["a" /* default */], {
      title: "Sam Groot",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      className: "jsx-1963203344" + " " + 'message'
    }, component.state.subject, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      className: "jsx-1963203344"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      className: "jsx-1963203344"
    }), " I ", component.state.changeName), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
      value: component.state.changeName,
      id: "changeNameID",
      name: "changeName",
      onChange: component.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      className: "jsx-1963203344"
    })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "1963203344",
      css: "div.jsx-1963203344{font:23px Times,Arial,sans-serif;}.message.jsx-1963203344{text-align:center;padding-top:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Qm9CLEFBRzhDLEFBR2pCLGtCQUNELGVBSG5CLEVBSUEiLCJmaWxlIjoicGFnZXNcXGluZGV4LmpzIiwic291cmNlUm9vdCI6IkM6XFxQcm9qZWN0c1xccGVyc29uYWwtc2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcclxuaW1wb3J0IHtNb3Rpb24sIHNwcmluZ30gZnJvbSAncmVhY3QtbW90aW9uJ1xyXG5pbXBvcnQgcG9zZWQgZnJvbSBcInJlYWN0LXBvc2VcIjtcclxuXHJcbmNvbnN0IENyZWF0ZUluZGV4ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgY29tcG9uZW50ID0gbmV3IFJlYWN0LkNvbXBvbmVudChwcm9wcyk7XHJcbiAgY29tcG9uZW50LnN0YXRlID0ge1xyXG4gICAgc3ViamVjdDogXCJNeSBuYW1lIGlzIFNhbSBHcm9vdC5cIixcclxuICAgIGJvZHk6IFwiIEkgdXNlIGNyZWF0aXZlIHNvbHV0aW9ucyB0byBzb2x2ZSBleHBlbnNpdmUgcHJvYmxlbXMuXCIsXHJcbiAgICBjaGFuZ2VOYW1lOiBcImFtIEdyb290LlwiXHJcbiAgfTtcclxuICBjb21wb25lbnQuaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb21wb25lbnQuc2V0U3RhdGUoe1tldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG4gIH1cclxuICBjb21wb25lbnQuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbigpIHtcclxuICAgIGNvbXBvbmVudFxyXG4gIH1cclxuICBjb21wb25lbnQucmVuZGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm9vdCc+XHJcbiAgICAgICAgPExheW91dCB0aXRsZT0nU2FtIEdyb290Jz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlJz5cclxuICAgICAgICAgICAge2NvbXBvbmVudC5zdGF0ZS5zdWJqZWN0fTxici8+PGJyLz4gSSB7Y29tcG9uZW50LnN0YXRlLmNoYW5nZU5hbWV9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dCB2YWx1ZT17Y29tcG9uZW50LnN0YXRlLmNoYW5nZU5hbWV9IGlkPSdjaGFuZ2VOYW1lSUQnIG5hbWU9J2NoYW5nZU5hbWUnIG9uQ2hhbmdlPXtjb21wb25lbnQuaGFuZGxlQ2hhbmdlfS8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICBmb250OiAyM3B4IFRpbWVzLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC5tZXNzYWdlIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZUluZGV4OyJdfQ== */\n/*@ sourceURL=pages\\index.js */"
    }));
  };

  return component;
};

/* harmony default export */ __webpack_exports__["default"] = (CreateIndex);

/***/ }),

/***/ 3:
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