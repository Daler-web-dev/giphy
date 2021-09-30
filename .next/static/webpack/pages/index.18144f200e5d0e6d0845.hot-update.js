"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./containers/HomeContainer.jsx":
/*!**************************************!*\
  !*** ./containers/HomeContainer.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_User_Desktop_new_React_next_giffy_giphy_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_User_Desktop_new_React_next_giffy_giphy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_User_Desktop_new_React_next_giffy_giphy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_User_Desktop_new_React_next_giffy_giphy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_SearchForm_SearchForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/SearchForm/SearchForm */ "./Components/SearchForm/SearchForm.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\User\\Desktop\\new React\\next giffy\\giphy\\containers\\HomeContainer.jsx",
    _this = undefined,
    _s = $RefreshSig$();









var HomeContainer = function HomeContainer(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      formInputs = _useState[0],
      setFormInputs = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('cat'),
      searchTerm = _useState2[0],
      setSearchTerm = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      searchResults = _useState3[0],
      setSearchResults = _useState3[1];

  var handleInputs = function handleInputs(event) {
    var value = event.target.value;
    setFormInputs(value);
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = (0,C_Users_User_Desktop_new_React_next_giffy_giphy_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_User_Desktop_new_React_next_giffy_giphy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {
      var giphys;
      return C_Users_User_Desktop_new_React_next_giffy_giphy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              _context.next = 3;
              return fetch("https://api.giphy.com/v1/gifs/search?q=".concat(searchTerm, "&api_key=fWsx77g2ZI5ssH0zX0n1lh91aLh0ev1Q&limit=10"));

            case 3:
              giphys = _context.sent;
              _context.next = 6;
              return giphys.json();

            case 6:
              giphys = _context.sent;
              setSearchResults(giphys.data);
              setSearchTerm(formInputs);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    setSearchResults(props.data);
  }, [formInputs]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("title", {
        children: "Search"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
      children: ["Giphy search app: ", searchTerm, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Components_SearchForm_SearchForm__WEBPACK_IMPORTED_MODULE_2__.default, {
      name: "searchTerm",
      handleSubmit: handleSubmit,
      actionHandler: handleInputs
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "links",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "/search/Marvel",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
          className: "link",
          children: "Marvel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 45
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "/search/monkeys",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
          className: "link",
          children: "monkeys"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 46
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "/search/harry-potter",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
          className: "link",
          children: "harryPoter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 51
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "giphy-search-result-grid",
      children: searchResults.map(function (item, idx) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h3", {
            children: item.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 33
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
            src: item.images.original.url,
            alt: item.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 33
          }, _this)]
        }, idx, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 29
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(HomeContainer, "xQUH8adnsZCDGuQ6PGOL93ri/gs=");

_c = HomeContainer;
/* harmony default export */ __webpack_exports__["default"] = (HomeContainer);

var _c;

$RefreshReg$(_c, "HomeContainer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_HomeContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/HomeContainer */ "./containers/HomeContainer.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\User\\Desktop\\new React\\next giffy\\giphy\\pages\\index.jsx";




var __N_SSG = true;
function Home(initData) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("title", {
        children: "Giphy"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("meta", {
        name: "description",
        content: "this is a Giphy app. Find giphies quickly"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_containers_HomeContainer__WEBPACK_IMPORTED_MODULE_2__.default, {
      data: initData.catGiphys.data
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTgxNDRmMjAwZTVkMGU2ZDA4NDUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBLElBQU1NLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzdCLGtCQUFvQ0wsK0NBQVEsRUFBNUM7QUFBQSxNQUFPTSxVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUNBLG1CQUFvQ1AsK0NBQVEsQ0FBQyxLQUFELENBQTVDO0FBQUEsTUFBT1EsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBMENULCtDQUFRLENBQUMsRUFBRCxDQUFsRDtBQUFBLE1BQU9VLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUM1QixRQUFNQyxLQUFOLEdBQWdCRCxLQUFLLENBQUNFLE1BQXRCLENBQU1ELEtBQU47QUFDQVAsSUFBQUEsYUFBYSxDQUFDTyxLQUFELENBQWI7QUFDSCxHQUhEOztBQUtBLE1BQU1FLFlBQVk7QUFBQSxpVEFBRyxpQkFBT0gsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakJBLGNBQUFBLEtBQUssQ0FBQ0ksY0FBTjtBQURpQjtBQUFBLHFCQUVFQyxLQUFLLGtEQUEyQ1YsVUFBM0Msd0RBRlA7O0FBQUE7QUFFYlcsY0FBQUEsTUFGYTtBQUFBO0FBQUEscUJBR0ZBLE1BQU0sQ0FBQ0MsSUFBUCxFQUhFOztBQUFBO0FBR2pCRCxjQUFBQSxNQUhpQjtBQUlqQlIsY0FBQUEsZ0JBQWdCLENBQUNRLE1BQU0sQ0FBQ0UsSUFBUixDQUFoQjtBQUNBWixjQUFBQSxhQUFhLENBQUNILFVBQUQsQ0FBYjs7QUFMaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFB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akM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBVUMsOERBQUMsOERBQUQ7QUFBZSxVQUFJLEVBQUVBLFFBQVEsQ0FBQ0MsU0FBVCxDQUFtQlY7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBY0E7S0FmdUJRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRhaW5lcnMvSG9tZUNvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VhcmNoRm9ybSBmcm9tIFwiLi4vQ29tcG9uZW50cy9TZWFyY2hGb3JtL1NlYXJjaEZvcm1cIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcblxyXG5jb25zdCBIb21lQ29udGFpbmVyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbZm9ybUlucHV0cywgc2V0Rm9ybUlucHV0c10gPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnY2F0JylcclxuICAgIGNvbnN0IFtzZWFyY2hSZXN1bHRzLCBzZXRTZWFyY2hSZXN1bHRzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUlucHV0cyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGxldCB7IHZhbHVlIH0gPSBldmVudC50YXJnZXRcclxuICAgICAgICBzZXRGb3JtSW5wdXRzKHZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBsZXQgZ2lwaHlzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL3NlYXJjaD9xPSR7c2VhcmNoVGVybX0mYXBpX2tleT1mV3N4NzdnMlpJNXNzSDB6WDBuMWxoOTFhTGgwZXYxUSZsaW1pdD0xMGApXHJcbiAgICAgICAgZ2lwaHlzID0gYXdhaXQgZ2lwaHlzLmpzb24oKVxyXG4gICAgICAgIHNldFNlYXJjaFJlc3VsdHMoZ2lwaHlzLmRhdGEpXHJcbiAgICAgICAgc2V0U2VhcmNoVGVybShmb3JtSW5wdXRzKVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0U2VhcmNoUmVzdWx0cyhwcm9wcy5kYXRhKVxyXG4gICAgfSwgW2Zvcm1JbnB1dHNdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlNlYXJjaDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIDxoMT5HaXBoeSBzZWFyY2ggYXBwOiB7c2VhcmNoVGVybX0gPC9oMT5cclxuICAgICAgICAgICAgPFNlYXJjaEZvcm0gbmFtZT1cInNlYXJjaFRlcm1cIiBoYW5kbGVTdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gYWN0aW9uSGFuZGxlcj17aGFuZGxlSW5wdXRzfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NlYXJjaC9NYXJ2ZWxcIj48c3BhbiBjbGFzc05hbWU9XCJsaW5rXCIgPk1hcnZlbDwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NlYXJjaC9tb25rZXlzXCI+PHNwYW4gY2xhc3NOYW1lPVwibGlua1wiID5tb25rZXlzPC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VhcmNoL2hhcnJ5LXBvdHRlclwiPjxzcGFuIGNsYXNzTmFtZT1cImxpbmtcIiA+aGFycnlQb3Rlcjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdpcGh5LXNlYXJjaC1yZXN1bHQtZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdHMubWFwKChpdGVtLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpZHh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57aXRlbS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlcy5vcmlnaW5hbC51cmx9IGFsdD17aXRlbS50aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVDb250YWluZXIiLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhvbWVDb250YWluZXIgZnJvbSAnLi4vY29udGFpbmVycy9Ib21lQ29udGFpbmVyJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKGluaXREYXRhKSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+R2lwaHk8L3RpdGxlPlxuXHRcdFx0XHQ8bWV0YVxuXHRcdFx0XHRcdG5hbWU9XCJkZXNjcmlwdGlvblwiXG5cdFx0XHRcdFx0Y29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIlxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJ0aGlzIGlzIGEgR2lwaHkgYXBwLiBGaW5kIGdpcGhpZXMgcXVpY2tseVwiIC8+XG5cdFx0XHQ8L0hlYWQ+XG5cdFx0XHQ8SG9tZUNvbnRhaW5lciBkYXRhPXtpbml0RGF0YS5jYXRHaXBoeXMuZGF0YX0gLz5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcblx0bGV0IGNhdEdpcGh5cyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy9zZWFyY2g/cT1jYXRzJmFwaV9rZXk9ZldzeDc3ZzJaSTVzc0gwelgwbjFsaDkxYUxoMGV2MVEmbGltaXQ9MTAnKVxuXHRjYXRHaXBoeXMgPSBhd2FpdCBjYXRHaXBoeXMuanNvbigpXG5cdHJldHVybiB7IHByb3BzOiB7IGNhdEdpcGh5cyB9IH1cbn0iXSwibmFtZXMiOlsiU2VhcmNoRm9ybSIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiSGVhZCIsIkhvbWVDb250YWluZXIiLCJwcm9wcyIsImZvcm1JbnB1dHMiLCJzZXRGb3JtSW5wdXRzIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJzZWFyY2hSZXN1bHRzIiwic2V0U2VhcmNoUmVzdWx0cyIsImhhbmRsZUlucHV0cyIsImV2ZW50IiwidmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwiZ2lwaHlzIiwianNvbiIsImRhdGEiLCJtYXAiLCJpdGVtIiwiaWR4IiwidGl0bGUiLCJpbWFnZXMiLCJvcmlnaW5hbCIsInVybCIsIkhvbWUiLCJpbml0RGF0YSIsImNhdEdpcGh5cyJdLCJzb3VyY2VSb290IjoiIn0=