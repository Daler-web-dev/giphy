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
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "/styles.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
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
      lineNumber: 37,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Components_SearchForm_SearchForm__WEBPACK_IMPORTED_MODULE_2__.default, {
      name: "searchTerm",
      handleSubmit: handleSubmit,
      actionHandler: handleInputs
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
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
          lineNumber: 40,
          columnNumber: 45
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "/search/monkeys",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
          className: "link",
          children: "monkeys"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 46
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "/search/harry-potter",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
          className: "link",
          children: "harryPoter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 51
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "giphy-search-result-grid",
      children: searchResults.map(function (item, idx) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h3", {
            children: item.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 33
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
            src: item.images.original.url,
            alt: item.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 33
          }, _this)]
        }, idx, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 29
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWQ0OTlkMDc5NTViMmQ3ODA0ODEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBLElBQU1NLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzdCLGtCQUFvQ0wsK0NBQVEsRUFBNUM7QUFBQSxNQUFPTSxVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUNBLG1CQUFvQ1AsK0NBQVEsQ0FBQyxLQUFELENBQTVDO0FBQUEsTUFBT1EsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBMENULCtDQUFRLENBQUMsRUFBRCxDQUFsRDtBQUFBLE1BQU9VLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUM1QixRQUFNQyxLQUFOLEdBQWdCRCxLQUFLLENBQUNFLE1BQXRCLENBQU1ELEtBQU47QUFDQVAsSUFBQUEsYUFBYSxDQUFDTyxLQUFELENBQWI7QUFDSCxHQUhEOztBQUtBLE1BQU1FLFlBQVk7QUFBQSxpVEFBRyxpQkFBT0gsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakJBLGNBQUFBLEtBQUssQ0FBQ0ksY0FBTjtBQURpQjtBQUFBLHFCQUVFQyxLQUFLLGtEQUEyQ1YsVUFBM0Msd0RBRlA7O0FBQUE7QUFFYlcsY0FBQUEsTUFGYTtBQUFBO0FBQUEscUJBR0ZBLE1BQU0sQ0FBQ0MsSUFBUCxFQUhFOztBQUFBO0FBR2pCRCxjQUFBQSxNQUhpQjtBQUlqQlIsY0FBQUEsZ0JBQWdCLENBQUNRLE1BQU0sQ0FBQ0UsSUFBUixDQUFoQjtBQUNBWixjQUFBQSxhQUFhLENBQUNILFVBQUQsQ0FBYjs7QUFMaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWlUsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFRQWYsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1pVLElBQUFBLGdCQUFnQixDQUFDTixLQUFLLENBQUNnQixJQUFQLENBQWhCO0FBQ0gsR0FGUSxFQUVOLENBQUNmLFVBQUQsQ0FGTSxDQUFUO0FBSUEsc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyxrREFBRDtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFPSTtBQUFBLHVDQUF1QkUsVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEosZUFRSSw4REFBQyxzRUFBRDtBQUFZLFVBQUksRUFBQyxZQUFqQjtBQUE4QixrQkFBWSxFQUFFUSxZQUE1QztBQUEwRCxtQkFBYSxFQUFFSjtBQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkosZUFTSTtBQUFLLGVBQVMsRUFBQyxPQUFmO0FBQUEsOEJBQ0ksOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsZ0JBQVg7QUFBQSwrQkFBNEI7QUFBTSxtQkFBUyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLGlCQUFYO0FBQUEsK0JBQTZCO0FBQU0sbUJBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxzQkFBWDtBQUFBLCtCQUFrQztBQUFNLG1CQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRKLGVBY0k7QUFBSyxlQUFTLEVBQUMsMEJBQWY7QUFBQSxnQkFFUUYsYUFBYSxDQUFDWSxHQUFkLENBQWtCLFVBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFlO0FBQzdCLDRCQUNJO0FBQUEsa0NBQ0k7QUFBQSxzQkFBS0QsSUFBSSxDQUFDRTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFLLGVBQUcsRUFBRUYsSUFBSSxDQUFDRyxNQUFMLENBQVlDLFFBQVosQ0FBcUJDLEdBQS9CO0FBQW9DLGVBQUcsRUFBRUwsSUFBSSxDQUFDRTtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUEsV0FBVUQsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBTUgsT0FQRDtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkSjtBQUFBLGtCQURKO0FBNkJILENBbkREOztHQUFNcEI7O0tBQUFBO0FBcUROLCtEQUFlQSxhQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRhaW5lcnMvSG9tZUNvbnRhaW5lci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSBcIi4uL0NvbXBvbmVudHMvU2VhcmNoRm9ybS9TZWFyY2hGb3JtXCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5cclxuY29uc3QgSG9tZUNvbnRhaW5lciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2Zvcm1JbnB1dHMsIHNldEZvcm1JbnB1dHNdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoJ2NhdCcpXHJcbiAgICBjb25zdCBbc2VhcmNoUmVzdWx0cywgc2V0U2VhcmNoUmVzdWx0c10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dHMgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBsZXQgeyB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0XHJcbiAgICAgICAgc2V0Rm9ybUlucHV0cyh2YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgbGV0IGdpcGh5cyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy9zZWFyY2g/cT0ke3NlYXJjaFRlcm19JmFwaV9rZXk9ZldzeDc3ZzJaSTVzc0gwelgwbjFsaDkxYUxoMGV2MVEmbGltaXQ9MTBgKVxyXG4gICAgICAgIGdpcGh5cyA9IGF3YWl0IGdpcGh5cy5qc29uKClcclxuICAgICAgICBzZXRTZWFyY2hSZXN1bHRzKGdpcGh5cy5kYXRhKVxyXG4gICAgICAgIHNldFNlYXJjaFRlcm0oZm9ybUlucHV0cylcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFNlYXJjaFJlc3VsdHMocHJvcHMuZGF0YSlcclxuICAgIH0sIFtmb3JtSW5wdXRzXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5TZWFyY2g8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3R5bGVzLmNzc1wiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIDxoMT5HaXBoeSBzZWFyY2ggYXBwOiB7c2VhcmNoVGVybX0gPC9oMT5cclxuICAgICAgICAgICAgPFNlYXJjaEZvcm0gbmFtZT1cInNlYXJjaFRlcm1cIiBoYW5kbGVTdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gYWN0aW9uSGFuZGxlcj17aGFuZGxlSW5wdXRzfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NlYXJjaC9NYXJ2ZWxcIj48c3BhbiBjbGFzc05hbWU9XCJsaW5rXCIgPk1hcnZlbDwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NlYXJjaC9tb25rZXlzXCI+PHNwYW4gY2xhc3NOYW1lPVwibGlua1wiID5tb25rZXlzPC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VhcmNoL2hhcnJ5LXBvdHRlclwiPjxzcGFuIGNsYXNzTmFtZT1cImxpbmtcIiA+aGFycnlQb3Rlcjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdpcGh5LXNlYXJjaC1yZXN1bHQtZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdHMubWFwKChpdGVtLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpZHh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57aXRlbS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlcy5vcmlnaW5hbC51cmx9IGFsdD17aXRlbS50aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVDb250YWluZXIiXSwibmFtZXMiOlsiU2VhcmNoRm9ybSIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiSGVhZCIsIkhvbWVDb250YWluZXIiLCJwcm9wcyIsImZvcm1JbnB1dHMiLCJzZXRGb3JtSW5wdXRzIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJzZWFyY2hSZXN1bHRzIiwic2V0U2VhcmNoUmVzdWx0cyIsImhhbmRsZUlucHV0cyIsImV2ZW50IiwidmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwiZ2lwaHlzIiwianNvbiIsImRhdGEiLCJtYXAiLCJpdGVtIiwiaWR4IiwidGl0bGUiLCJpbWFnZXMiLCJvcmlnaW5hbCIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=