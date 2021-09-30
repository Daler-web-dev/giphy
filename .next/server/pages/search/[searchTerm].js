"use strict";
(() => {
var exports = {};
exports.id = "pages/search/[searchTerm]";
exports.ids = ["pages/search/[searchTerm]"];
exports.modules = {

/***/ "./pages/search/[searchTerm].jsx":
/*!***************************************!*\
  !*** ./pages/search/[searchTerm].jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_shared_lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/shared/lib/utils */ "next/dist/shared/lib/utils");
/* harmony import */ var next_dist_shared_lib_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\new React\\next giffy\\giphy\\pages\\search\\[searchTerm].jsx";





function Search(initProps) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("title", {
        children: ["Search ", router.query.searchTerm, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "/styles.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
        name: "description",
        content: initProps.giphys.map((each, index) => each.title + ' ')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
      children: ["Search ", router.query.searchTerm, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "giphy-search-result-grid",
      children: initProps.giphys.map((item, idx) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
            children: item.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 33
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
            src: item.images.original.url,
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 33
          }, this)]
        }, idx, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 29
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}
async function getServerSideProps(context) {
  const searchTerm = context.query.searchTerm;
  let giphys = await fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=fWsx77g2ZI5ssH0zX0n1lh91aLh0ev1Q&limit=10`);
  giphys = await giphys.json();
  return {
    props: {
      giphys: giphys.data
    }
  };
}

/***/ }),

/***/ "next/dist/shared/lib/utils":
/*!*********************************************!*\
  !*** external "next/dist/shared/lib/utils" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/search/[searchTerm].jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvc2VhcmNoL1tzZWFyY2hUZXJtXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNJLE1BQVQsQ0FBaUJDLFNBQWpCLEVBQTRCO0FBQ3ZDLFFBQU1DLE1BQU0sR0FBR0osc0RBQVMsRUFBeEI7QUFDQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0k7QUFBQSw4QkFBZUksTUFBTSxDQUFDQyxLQUFQLENBQWFDLFVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLGVBSUk7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUVILFNBQVMsQ0FBQ0ksTUFBVixDQUFpQkMsR0FBakIsQ0FBcUIsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQWtCRCxJQUFJLENBQUNFLEtBQUwsR0FBYSxHQUFwRDtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFPSTtBQUFBLDRCQUFZUCxNQUFNLENBQUNDLEtBQVAsQ0FBYUMsVUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEosZUFTSTtBQUFLLGVBQVMsRUFBQywwQkFBZjtBQUFBLGdCQUNLSCxTQUFTLENBQUNJLE1BQVYsQ0FBaUJDLEdBQWpCLENBQXFCLENBQUNJLElBQUQsRUFBT0MsR0FBUCxLQUFlO0FBQzdCLDRCQUNJO0FBQUEsa0NBQ0k7QUFBQSxzQkFBS0QsSUFBSSxDQUFDRDtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFLLGVBQUcsRUFBRUMsSUFBSSxDQUFDRSxNQUFMLENBQVlDLFFBQVosQ0FBcUJDLEdBQS9CO0FBQW9DLGVBQUcsRUFBQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUEsV0FBVUgsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKO0FBTUgsT0FQSjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXdCSDtBQUVNLGVBQWVJLGtCQUFmLENBQWtDQyxPQUFsQyxFQUEyQztBQUM5QyxRQUFNWixVQUFVLEdBQUdZLE9BQU8sQ0FBQ2IsS0FBUixDQUFjQyxVQUFqQztBQUNBLE1BQUlDLE1BQU0sR0FBRyxNQUFNWSxLQUFLLENBQUUsMENBQXlDYixVQUFXLG9EQUF0RCxDQUF4QjtBQUNBQyxFQUFBQSxNQUFNLEdBQUksTUFBTUEsTUFBTSxDQUFDYSxJQUFQLEVBQWhCO0FBQ0EsU0FBTztBQUFDQyxJQUFBQSxLQUFLLEVBQUU7QUFBQ2QsTUFBQUEsTUFBTSxFQUFFQSxNQUFNLENBQUNlO0FBQWhCO0FBQVIsR0FBUDtBQUNIOzs7Ozs7Ozs7O0FDdENEOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naXBoeS8uL3BhZ2VzL3NlYXJjaC9bc2VhcmNoVGVybV0uanN4Iiwid2VicGFjazovL2dpcGh5L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHNcIiIsIndlYnBhY2s6Ly9naXBoeS9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2dpcGh5L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9naXBoeS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZ2lwaHkvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgbG9hZEdldEluaXRpYWxQcm9wcyB9IGZyb20gJ25leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCAoaW5pdFByb3BzKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5TZWFyY2gge3JvdXRlci5xdWVyeS5zZWFyY2hUZXJtfSA8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3R5bGVzLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtpbml0UHJvcHMuZ2lwaHlzLm1hcCgoZWFjaCwgaW5kZXggKSA9PiBlYWNoLnRpdGxlICsgJyAnICl9IC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPGgxPlNlYXJjaCB7cm91dGVyLnF1ZXJ5LnNlYXJjaFRlcm19IDwvaDE+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdpcGh5LXNlYXJjaC1yZXN1bHQtZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAge2luaXRQcm9wcy5naXBoeXMubWFwKChpdGVtLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpZHh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57aXRlbS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlcy5vcmlnaW5hbC51cmx9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgICBjb25zdCBzZWFyY2hUZXJtID0gY29udGV4dC5xdWVyeS5zZWFyY2hUZXJtXHJcbiAgICBsZXQgZ2lwaHlzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL3NlYXJjaD9xPSR7c2VhcmNoVGVybX0mYXBpX2tleT1mV3N4NzdnMlpJNXNzSDB6WDBuMWxoOTFhTGgwZXYxUSZsaW1pdD0xMGApXHJcbiAgICBnaXBoeXMgID0gYXdhaXQgZ2lwaHlzLmpzb24oKVxyXG4gICAgcmV0dXJuIHtwcm9wczoge2dpcGh5czogZ2lwaHlzLmRhdGF9fVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwidXNlUm91dGVyIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIlNlYXJjaCIsImluaXRQcm9wcyIsInJvdXRlciIsInF1ZXJ5Iiwic2VhcmNoVGVybSIsImdpcGh5cyIsIm1hcCIsImVhY2giLCJpbmRleCIsInRpdGxlIiwiaXRlbSIsImlkeCIsImltYWdlcyIsIm9yaWdpbmFsIiwidXJsIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsImZldGNoIiwianNvbiIsInByb3BzIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=