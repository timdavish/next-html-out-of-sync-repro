webpackHotUpdate("static/development/pages/redirect.js",{

/***/ "./pages/redirect.js":
/*!***************************!*\
  !*** ./pages/redirect.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_redirect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/redirect */ "./helpers/redirect.js");
var _jsxFileName = "/Users/timdavis/Projects/repro/nextjs-repro/pages/redirect.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var id = setTimeout(function () {
      Object(_helpers_redirect__WEBPACK_IMPORTED_MODULE_1__["default"])({
        href: '/'
      });
    }, 2000);
    return function () {
      return clearTimeout(id);
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Redirecting back to / in 2 seconds..");
});

/***/ })

})
//# sourceMappingURL=redirect.js.e4f97e56ec24659334b7.hot-update.js.map