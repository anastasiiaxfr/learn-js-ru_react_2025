"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/components/Layout/Provider/index.js":
/*!*************************************************!*\
  !*** ./src/components/Layout/Provider/index.js ***!
  \*************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Providers: () => (/* binding */ Providers)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../redux/store */ \"(app-pages-browser)/./src/redux/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _components_Context_ThemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Context/ThemeContext */ \"(app-pages-browser)/./src/components/Context/ThemeContext/index.jsx\");\n/* harmony import */ var _components_Context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Context/AuthContext */ \"(app-pages-browser)/./src/components/Context/AuthContext/index.jsx\");\n/* __next_internal_client_entry_do_not_use__ Providers auto */ \n\n\n\n\nconst Providers = (param)=>{\n    let { children } = param;\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n        store: _redux_store__WEBPACK_IMPORTED_MODULE_1__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Context_ThemeContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Context_AuthContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: \"test\"\n            }, void 0, false, {\n                fileName: \"/Users/anastasiath9/Desktop/GIT/learn-js-ru_react_2025/src/components/Layout/Provider/index.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/anastasiath9/Desktop/GIT/learn-js-ru_react_2025/src/components/Layout/Provider/index.js\",\n            lineNumber: 9,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/anastasiath9/Desktop/GIT/learn-js-ru_react_2025/src/components/Layout/Provider/index.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Providers;\nvar _c;\n$RefreshReg$(_c, \"Providers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xheW91dC9Qcm92aWRlci9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzJDO0FBQ0o7QUFDOEI7QUFDRjtBQUU1RCxNQUFNSSxZQUFZO1FBQUMsRUFBRUMsUUFBUSxFQUFFO2tCQUNsQyw4REFBQ0osaURBQVFBO1FBQUNELE9BQU9BLCtDQUFLQTtrQkFDbEIsNEVBQUNFLHdFQUFhQTtzQkFDViw0RUFBQ0MsdUVBQVlBOzBCQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBSzFCLEVBQUM7S0FSWUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmFzdGFzaWF0aDkvRGVza3RvcC9HSVQvbGVhcm4tanMtcnVfcmVhY3RfMjAyNS9zcmMvY29tcG9uZW50cy9MYXlvdXQvUHJvdmlkZXIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHtzdG9yZX0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvc3RvcmUnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgVGhlbWVQcm92aWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0NvbnRleHQvVGhlbWVDb250ZXh0JztcbmltcG9ydCBBdXRoUHJvdmlkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9Db250ZXh0L0F1dGhDb250ZXh0JztcblxuZXhwb3J0IGNvbnN0IFByb3ZpZGVycyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPFRoZW1lUHJvdmlkZXI+XG4gICAgICAgICAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgICAgICAgICAgdGVzdFxuICAgICAgICAgICAgPC9BdXRoUHJvdmlkZXI+XG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L1Byb3ZpZGVyPlxufSJdLCJuYW1lcyI6WyJzdG9yZSIsIlByb3ZpZGVyIiwiVGhlbWVQcm92aWRlciIsIkF1dGhQcm92aWRlciIsIlByb3ZpZGVycyIsImNoaWxkcmVuIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Layout/Provider/index.js\n"));

/***/ })

});