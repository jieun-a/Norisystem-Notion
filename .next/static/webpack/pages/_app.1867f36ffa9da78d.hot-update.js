"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/site-config.ts":
/*!****************************!*\
  !*** ./lib/site-config.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"siteConfig\": function() { return /* binding */ siteConfig; }\n/* harmony export */ });\nvar siteConfig = function(config) {\n    return config;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc2l0ZS1jb25maWcudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQWdETyxJQUFNQSxVQUFVLEdBQUcsU0FBQ0MsTUFBa0IsRUFBaUI7SUFDNUQsT0FBT0EsTUFBTTtBQUNmLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3NpdGUtY29uZmlnLnRzPzI1ZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcydcblxuZXhwb3J0IGludGVyZmFjZSBTaXRlQ29uZmlnIHtcbiAgcm9vdE5vdGlvblBhZ2VJZDogc3RyaW5nXG4gIHJvb3ROb3Rpb25TcGFjZUlkPzogc3RyaW5nXG5cbiAgbmFtZTogc3RyaW5nXG4gIGRvbWFpbjogc3RyaW5nXG4gIGF1dGhvcjogc3RyaW5nXG4gIGFkZHJlc3NTdXdvbjogc3RyaW5nXG4gIGFkZHJlc3NDaGVvbmFuOiBzdHJpbmdcbiAgc3V3b25UZWw6IHN0cmluZ1xuICBjaGVvbmFuVGVsOiBzdHJpbmdcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgbGFuZ3VhZ2U/OiBzdHJpbmdcblxuICB0d2l0dGVyPzogc3RyaW5nXG4gIGdpdGh1Yj86IHN0cmluZ1xuICBsaW5rZWRpbj86IHN0cmluZ1xuICBuZXdzbGV0dGVyPzogc3RyaW5nXG4gIHlvdXR1YmU/OiBzdHJpbmdcbiAgemhpaHU/OiBzdHJpbmdcbiAgbWFzdG9kb24/OiBzdHJpbmc7XG4gIGhvbWVwYWdlPzogc3RyaW5nXG5cbiAgZGVmYXVsdFBhZ2VJY29uPzogc3RyaW5nIHwgbnVsbFxuICBkZWZhdWx0UGFnZUNvdmVyPzogc3RyaW5nIHwgbnVsbFxuICBkZWZhdWx0UGFnZUNvdmVyUG9zaXRpb24/OiBudW1iZXIgfCBudWxsXG5cbiAgaXNQcmV2aWV3SW1hZ2VTdXBwb3J0RW5hYmxlZD86IGJvb2xlYW5cbiAgaXNUd2VldEVtYmVkU3VwcG9ydEVuYWJsZWQ/OiBib29sZWFuXG4gIGlzUmVkaXNFbmFibGVkPzogYm9vbGVhblxuICBpc1NlYXJjaEVuYWJsZWQ/OiBib29sZWFuXG5cbiAgaW5jbHVkZU5vdGlvbklkSW5VcmxzPzogYm9vbGVhblxuICBwYWdlVXJsT3ZlcnJpZGVzPzogdHlwZXMuUGFnZVVybE92ZXJyaWRlc01hcFxuICBwYWdlVXJsQWRkaXRpb25zPzogdHlwZXMuUGFnZVVybE92ZXJyaWRlc01hcFxuXG4gIG5hdmlnYXRpb25TdHlsZT86IHR5cGVzLk5hdmlnYXRpb25TdHlsZVxuICBuYXZpZ2F0aW9uTGlua3M/OiBBcnJheTxOYXZpZ2F0aW9uTGluaz5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0aW9uTGluayB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgcGFnZUlkPzogc3RyaW5nXG4gIHVybD86IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3Qgc2l0ZUNvbmZpZyA9IChjb25maWc6IFNpdGVDb25maWcpOiBTaXRlQ29uZmlnID0+IHtcbiAgcmV0dXJuIGNvbmZpZ1xufVxuIl0sIm5hbWVzIjpbInNpdGVDb25maWciLCJjb25maWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/site-config.ts\n"));

/***/ })

});