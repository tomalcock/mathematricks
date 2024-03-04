"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fadmin%2FDocuments%2Fmathematricks%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fadmin%2FDocuments%2Fmathematricks&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fadmin%2FDocuments%2Fmathematricks%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fadmin%2FDocuments%2Fmathematricks&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_admin_Documents_mathematricks_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Users/admin/Documents/mathematricks/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _Users_admin_Documents_mathematricks_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmFkbWluJTJGRG9jdW1lbnRzJTJGbWF0aGVtYXRyaWNrcyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZhZG1pbiUyRkRvY3VtZW50cyUyRm1hdGhlbWF0cmlja3MmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDd0I7QUFDckc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXRoZW1hdHJpY2tzLz9jOGYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvbWF0aGVtYXRyaWNrcy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL21hdGhlbWF0cmlja3MvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fadmin%2FDocuments%2Fmathematricks%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fadmin%2FDocuments%2Fmathematricks&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var _lib_authOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/authOptions */ \"(rsc)/./lib/authOptions.ts\");\n\n\nconst handler = (0,next_auth_next__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_lib_authOptions__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXNDO0FBRVU7QUFFaEQsTUFBTUUsVUFBVUYsMERBQVFBLENBQUNDLHlEQUFXQTtBQUVPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWF0aGVtYXRyaWNrcy8uL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzP2M4YTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGgvbmV4dFwiO1xuXG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCJAL2xpYi9hdXRoT3B0aW9uc1wiO1xuXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJhdXRoT3B0aW9ucyIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/authOptions.ts":
/*!****************************!*\
  !*** ./lib/authOptions.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth/prisma-adapter */ \"(rsc)/./node_modules/@auth/prisma-adapter/index.js\");\n/* harmony import */ var _lib_db_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db/prisma */ \"(rsc)/./lib/db/prisma.ts\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _lib_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/env */ \"(rsc)/./lib/env.ts\");\n/* harmony import */ var _lib_db_mycourses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/db/mycourses */ \"(rsc)/./lib/db/mycourses.ts\");\n\n\n\n\n\nconst authOptions = {\n    adapter: (0,_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter)(_lib_db_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            clientId: _lib_env__WEBPACK_IMPORTED_MODULE_3__.env.GOOGLE_CLIENT_ID,\n            clientSecret: _lib_env__WEBPACK_IMPORTED_MODULE_3__.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    callbacks: {\n        session ({ session, user }) {\n            session.user.id = user.id;\n            return session;\n        }\n    },\n    events: {\n        async signIn ({ user }) {\n            await (0,_lib_db_mycourses__WEBPACK_IMPORTED_MODULE_4__.mergeAnonymousMyCoursesIntoUserCart)(user.id);\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aE9wdGlvbnMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXFEO0FBRWhCO0FBQ21CO0FBRXhCO0FBQ3lDO0FBSWxFLE1BQU1LLGNBQStCO0lBQ3hDQyxTQUFTTixtRUFBYUEsQ0FBQ0Msc0RBQU1BO0lBQzdCTSxXQUFXO1FBQ1RMLHNFQUFjQSxDQUFDO1lBQ2JNLFVBQVVMLHlDQUFHQSxDQUFDTSxnQkFBZ0I7WUFDOUJDLGNBQWNQLHlDQUFHQSxDQUFDUSxvQkFBb0I7UUFDeEM7S0FDRDtJQUNEQyxXQUFXO1FBQ1RDLFNBQVEsRUFBRUEsT0FBTyxFQUFFQyxJQUFJLEVBQUU7WUFDdkJELFFBQVFDLElBQUksQ0FBQ0MsRUFBRSxHQUFHRCxLQUFLQyxFQUFFO1lBQ3pCLE9BQU9GO1FBQ1Q7SUFDRjtJQUNBRyxRQUFRO1FBQ04sTUFBTUMsUUFBTyxFQUFFSCxJQUFJLEVBQUU7WUFDbkIsTUFBTVYsc0ZBQW1DQSxDQUFDVSxLQUFLQyxFQUFFO1FBQ25EO0lBQ0Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWF0aGVtYXRyaWNrcy8uL2xpYi9hdXRoT3B0aW9ucy50cz85MTExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tIFwiQGF1dGgvcHJpc21hLWFkYXB0ZXJcIjtcbmltcG9ydCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBwcmlzbWEgZnJvbSBcIkAvbGliL2RiL3ByaXNtYVwiO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xuaW1wb3J0IHsgQWRhcHRlciB9IGZyb20gXCJuZXh0LWF1dGgvYWRhcHRlcnNcIjtcbmltcG9ydCB7IGVudiB9IGZyb20gXCJAL2xpYi9lbnZcIjtcbmltcG9ydCB7IG1lcmdlQW5vbnltb3VzTXlDb3Vyc2VzSW50b1VzZXJDYXJ0IH0gZnJvbSBcIkAvbGliL2RiL215Y291cnNlc1wiO1xuXG5cblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gICAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWEpIGFzIEFkYXB0ZXIsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICAgIGNsaWVudElkOiBlbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICAgICAgY2xpZW50U2VjcmV0OiBlbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG4gICAgICB9KSxcbiAgICBdLFxuICAgIGNhbGxiYWNrczoge1xuICAgICAgc2Vzc2lvbih7IHNlc3Npb24sIHVzZXIgfSkge1xuICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSB1c2VyLmlkO1xuICAgICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICAgIH0sXG4gICAgfSxcbiAgICBldmVudHM6IHtcbiAgICAgIGFzeW5jIHNpZ25Jbih7IHVzZXIgfSkge1xuICAgICAgICBhd2FpdCBtZXJnZUFub255bW91c015Q291cnNlc0ludG9Vc2VyQ2FydCh1c2VyLmlkKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfTsiXSwibmFtZXMiOlsiUHJpc21hQWRhcHRlciIsInByaXNtYSIsIkdvb2dsZVByb3ZpZGVyIiwiZW52IiwibWVyZ2VBbm9ueW1vdXNNeUNvdXJzZXNJbnRvVXNlckNhcnQiLCJhdXRoT3B0aW9ucyIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ1c2VyIiwiaWQiLCJldmVudHMiLCJzaWduSW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/authOptions.ts\n");

/***/ }),

/***/ "(rsc)/./lib/db/mycourses.ts":
/*!*****************************!*\
  !*** ./lib/db/mycourses.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMyCourses: () => (/* binding */ createMyCourses),\n/* harmony export */   getMyCourses: () => (/* binding */ getMyCourses),\n/* harmony export */   mergeAnonymousMyCoursesIntoUserCart: () => (/* binding */ mergeAnonymousMyCoursesIntoUserCart)\n/* harmony export */ });\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prisma */ \"(rsc)/./lib/db/prisma.ts\");\n/* harmony import */ var next_dist_client_components_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/components/headers */ \"(rsc)/./node_modules/next/dist/client/components/headers.js\");\n/* harmony import */ var next_dist_client_components_headers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_headers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_authOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/authOptions */ \"(rsc)/./lib/authOptions.ts\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n\n\n\n\nasync function getMyCourses() {\n    const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_3__.getServerSession)(_lib_authOptions__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    let myCourses = null;\n    if (session) {\n        myCourses = await _prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].myCourses.findFirst({\n            where: {\n                userId: session.user.id\n            },\n            include: {\n                courses: {\n                    include: {\n                        course: true\n                    }\n                }\n            }\n        });\n    } else {\n        const localMyCoursesId = (0,next_dist_client_components_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)().get(\"localMyCoursesId\")?.value;\n        myCourses = localMyCoursesId ? await _prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].myCourses.findUnique({\n            where: {\n                id: localMyCoursesId\n            },\n            include: {\n                courses: {\n                    include: {\n                        course: true\n                    }\n                }\n            }\n        }) : null;\n    }\n    if (!myCourses) {\n        return null;\n    }\n    return {\n        ...myCourses,\n        size: myCourses.courses.reduce((acc, item)=>acc + item.quantity, 0)\n    };\n}\nasync function createMyCourses() {\n    const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_3__.getServerSession)(_lib_authOptions__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    let newMyCourses;\n    if (session) {\n        newMyCourses = await _prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].myCourses.create({\n            data: {\n                userId: session.user.id\n            }\n        });\n    } else {\n        newMyCourses = await _prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"]?.myCourses.create({\n            data: {}\n        });\n        //Note: Needs encryption + secure settings in real production app\n        (0,next_dist_client_components_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)().set(\"localMyCoursesId\", newMyCourses.id);\n    }\n    return {\n        ...newMyCourses,\n        courses: [],\n        size: 0\n    };\n}\nasync function mergeAnonymousMyCoursesIntoUserCart(userId) {\n    const localMyCoursesId = (0,next_dist_client_components_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)().get(\"localMyCoursesId\")?.value;\n    const localMyCourses = localMyCoursesId ? await _prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].myCourses.findUnique({\n        where: {\n            id: localMyCoursesId\n        },\n        include: {\n            courses: true\n        }\n    }) : null;\n    if (!localMyCourses) return;\n    const userMyCourses = await _prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].myCourses.findFirst({\n        where: {\n            userId\n        },\n        include: {\n            courses: true\n        }\n    });\n    await _prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$transaction(async (tx)=>{\n        if (userMyCourses) {\n            const mergedMyCoursesItems = mergeMyCoursesItems(localMyCourses.courses, userMyCourses.courses);\n            await tx.myCoursesItem.deleteMany({\n                where: {\n                    myCoursesId: userMyCourses.id\n                }\n            });\n            await tx.myCoursesItem.createMany({\n                data: mergedMyCoursesItems.map((course)=>({\n                        myCoursesId: userMyCourses.id,\n                        courseId: course.courseId,\n                        quantity: course.quantity\n                    }))\n            });\n        } else {\n            await tx.myCourses.create({\n                data: {\n                    userId,\n                    courses: {\n                        createMany: {\n                            data: localMyCourses.courses.map((course)=>({\n                                    courseId: course.courseId,\n                                    quantity: course.quantity\n                                }))\n                        }\n                    }\n                }\n            });\n        }\n        await tx.myCourses.delete({\n            where: {\n                id: localMyCourses.id\n            }\n        });\n        (0,next_dist_client_components_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)().set(\"localCartId\", \"\");\n    });\n}\nfunction mergeMyCoursesItems(...myCoursesItems) {\n    return myCoursesItems.reduce((acc, courses)=>{\n        courses.forEach((course)=>{\n            const existingCourse = acc.find((i)=>i.courseId === course.courseId);\n            if (existingCourse) {\n                return;\n            } else {\n                acc.push(course);\n            }\n        });\n        return acc;\n    }, []);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3dCLGFBQWFQLGNBQWNwQixFQUFFO3dCQUM3QjhCLFVBQVUzQixPQUFPMkIsUUFBUTt3QkFDekJsQixVQUFVVCxPQUFPUyxRQUFRO29CQUMzQjtZQUNGO1FBQ0YsT0FBTztZQUNMLE1BQU1VLEdBQUczQixTQUFTLENBQUNvQixNQUFNLENBQUM7Z0JBQ3hCQyxNQUFNO29CQUNKbEI7b0JBQ0FJLFNBQVM7d0JBQ1AwQixZQUFZOzRCQUNWWixNQUFNRyxlQUFlakIsT0FBTyxDQUFDMkIsR0FBRyxDQUFDLENBQUMxQixTQUFZO29DQUM1QzJCLFVBQVUzQixPQUFPMkIsUUFBUTtvQ0FDekJsQixVQUFVVCxPQUFPUyxRQUFRO2dDQUMzQjt3QkFDRjtvQkFDRjtnQkFDRjtZQUNGO1FBQ0Y7UUFFQSxNQUFNVSxHQUFHM0IsU0FBUyxDQUFDb0MsTUFBTSxDQUFDO1lBQ3hCbEMsT0FBTztnQkFBRUcsSUFBSW1CLGVBQWVuQixFQUFFO1lBQUM7UUFDakM7UUFFQVYsNEVBQU9BLEdBQUcyQixHQUFHLENBQUMsZUFBZTtJQUMvQjtBQUNGO0FBRUEsU0FBU08sb0JBQW9CLEdBQUdRLGNBQWlDO0lBQy9ELE9BQU9BLGVBQWV2QixNQUFNLENBQUMsQ0FBQ0MsS0FBS1I7UUFDakNBLFFBQVErQixPQUFPLENBQUMsQ0FBQzlCO1lBQ2YsTUFBTStCLGlCQUFpQnhCLElBQUl5QixJQUFJLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRU4sUUFBUSxLQUFLM0IsT0FBTzJCLFFBQVE7WUFDckUsSUFBSUksZ0JBQWdCO2dCQUNsQjtZQUNGLE9BQU87Z0JBQ0x4QixJQUFJMkIsSUFBSSxDQUFDbEM7WUFDWDtRQUNGO1FBQ0EsT0FBT087SUFDVCxHQUFHLEVBQUU7QUFDUCIsInNvdXJjZXMiOlsid2VicGFjazovL21hdGhlbWF0cmlja3MvLi9saWIvZGIvbXljb3Vyc2VzLnRzP2NjODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTXlDb3Vyc2VzLCBNeUNvdXJzZXNJdGVtLCBQcmlzbWEgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCBwcmlzbWEgZnJvbSBcIi4vcHJpc21hXCI7XG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvY29tcG9uZW50cy9oZWFkZXJzXCI7XG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCJAL2xpYi9hdXRoT3B0aW9uc1wiO1xuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvbmV4dFwiO1xuXG5leHBvcnQgdHlwZSBNeUNvdXJzZXNXaXRoQ291cnNlcyA9IFByaXNtYS5NeUNvdXJzZXNHZXRQYXlsb2FkPHtcbiAgaW5jbHVkZTogeyBjb3Vyc2VzOiB7IGluY2x1ZGU6IHsgY291cnNlOiB0cnVlIH0gfSB9O1xufT47XG5cbmV4cG9ydCB0eXBlIG15Y291cnNlc0l0ZW1XaXRoQ291cnNlID0gUHJpc21hLk15Q291cnNlc0l0ZW1HZXRQYXlsb2FkPHtcbiAgaW5jbHVkZTogeyBjb3Vyc2U6IHRydWUgfTtcbn0+O1xuXG5leHBvcnQgdHlwZSBNeU1hdGhzQ291cnNlcyA9IE15Q291cnNlc1dpdGhDb3Vyc2VzICYge1xuICBzaXplOiBudW1iZXI7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TXlDb3Vyc2VzKCk6IFByb21pc2U8TXlNYXRoc0NvdXJzZXMgfCBudWxsPiB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcblxuICBsZXQgbXlDb3Vyc2VzOiBNeUNvdXJzZXNXaXRoQ291cnNlcyB8IG51bGwgPSBudWxsO1xuXG4gIGlmIChzZXNzaW9uKSB7XG4gICAgbXlDb3Vyc2VzID0gYXdhaXQgcHJpc21hLm15Q291cnNlcy5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHsgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQgfSxcbiAgICAgIGluY2x1ZGU6IHsgY291cnNlczogeyBpbmNsdWRlOiB7IGNvdXJzZTogdHJ1ZSB9IH0gfSxcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsb2NhbE15Q291cnNlc0lkID0gY29va2llcygpLmdldChcImxvY2FsTXlDb3Vyc2VzSWRcIik/LnZhbHVlO1xuICAgIG15Q291cnNlcyA9IGxvY2FsTXlDb3Vyc2VzSWRcbiAgICAgID8gYXdhaXQgcHJpc21hLm15Q291cnNlcy5maW5kVW5pcXVlKHtcbiAgICAgICAgICB3aGVyZTogeyBpZDogbG9jYWxNeUNvdXJzZXNJZCB9LFxuICAgICAgICAgIGluY2x1ZGU6IHsgY291cnNlczogeyBpbmNsdWRlOiB7IGNvdXJzZTogdHJ1ZSB9IH0gfSxcbiAgICAgICAgfSlcbiAgICAgIDogbnVsbDtcbiAgfVxuXG4gIGlmICghbXlDb3Vyc2VzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLm15Q291cnNlcyxcbiAgICBzaXplOiBteUNvdXJzZXMuY291cnNlcy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gYWNjICsgaXRlbS5xdWFudGl0eSwgMCksXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVNeUNvdXJzZXMoKTogUHJvbWlzZTxNeU1hdGhzQ291cnNlcz4ge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG5cbiAgbGV0IG5ld015Q291cnNlczogTXlDb3Vyc2VzO1xuXG4gIGlmIChzZXNzaW9uKSB7XG4gICAgbmV3TXlDb3Vyc2VzID0gYXdhaXQgcHJpc21hLm15Q291cnNlcy5jcmVhdGUoe1xuICAgICAgZGF0YTogeyB1c2VySWQ6IHNlc3Npb24udXNlci5pZCB9LFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG5ld015Q291cnNlcyA9IGF3YWl0IHByaXNtYT8ubXlDb3Vyc2VzLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7fSxcbiAgICB9KTtcblxuICAgIC8vTm90ZTogTmVlZHMgZW5jcnlwdGlvbiArIHNlY3VyZSBzZXR0aW5ncyBpbiByZWFsIHByb2R1Y3Rpb24gYXBwXG5cbiAgICBjb29raWVzKCkuc2V0KFwibG9jYWxNeUNvdXJzZXNJZFwiLCBuZXdNeUNvdXJzZXMuaWQpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5uZXdNeUNvdXJzZXMsXG4gICAgY291cnNlczogW10sXG4gICAgc2l6ZTogMCxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1lcmdlQW5vbnltb3VzTXlDb3Vyc2VzSW50b1VzZXJDYXJ0KHVzZXJJZDogc3RyaW5nKSB7XG4gIGNvbnN0IGxvY2FsTXlDb3Vyc2VzSWQgPSBjb29raWVzKCkuZ2V0KFwibG9jYWxNeUNvdXJzZXNJZFwiKT8udmFsdWU7XG4gIGNvbnN0IGxvY2FsTXlDb3Vyc2VzID0gbG9jYWxNeUNvdXJzZXNJZFxuICAgID8gYXdhaXQgcHJpc21hLm15Q291cnNlcy5maW5kVW5pcXVlKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IGxvY2FsTXlDb3Vyc2VzSWQgfSxcbiAgICAgICAgaW5jbHVkZTogeyBjb3Vyc2VzOiB0cnVlIH0sXG4gICAgICB9KVxuICAgIDogbnVsbDtcblxuICBpZiAoIWxvY2FsTXlDb3Vyc2VzKSByZXR1cm47XG5cbiAgY29uc3QgdXNlck15Q291cnNlcyA9IGF3YWl0IHByaXNtYS5teUNvdXJzZXMuZmluZEZpcnN0KHtcbiAgICB3aGVyZTogeyB1c2VySWQgfSxcbiAgICBpbmNsdWRlOiB7IGNvdXJzZXM6IHRydWUgfSxcbiAgfSk7XG5cbiAgYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcbiAgICBpZiAodXNlck15Q291cnNlcykge1xuICAgICAgY29uc3QgbWVyZ2VkTXlDb3Vyc2VzSXRlbXMgPSBtZXJnZU15Q291cnNlc0l0ZW1zKFxuICAgICAgICBsb2NhbE15Q291cnNlcy5jb3Vyc2VzLFxuICAgICAgICB1c2VyTXlDb3Vyc2VzLmNvdXJzZXNcbiAgICAgICk7XG4gICAgICBhd2FpdCB0eC5teUNvdXJzZXNJdGVtLmRlbGV0ZU1hbnkoe1xuICAgICAgICB3aGVyZTogeyBteUNvdXJzZXNJZDogdXNlck15Q291cnNlcy5pZCB9LFxuICAgICAgfSk7XG5cbiAgICAgIGF3YWl0IHR4Lm15Q291cnNlc0l0ZW0uY3JlYXRlTWFueSh7XG4gICAgICAgIGRhdGE6IG1lcmdlZE15Q291cnNlc0l0ZW1zLm1hcCgoY291cnNlKSA9PiAoe1xuICAgICAgICAgIG15Q291cnNlc0lkOiB1c2VyTXlDb3Vyc2VzLmlkLFxuICAgICAgICAgIGNvdXJzZUlkOiBjb3Vyc2UuY291cnNlSWQsXG4gICAgICAgICAgcXVhbnRpdHk6IGNvdXJzZS5xdWFudGl0eSxcbiAgICAgICAgfSkpLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHR4Lm15Q291cnNlcy5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIGNvdXJzZXM6IHtcbiAgICAgICAgICAgIGNyZWF0ZU1hbnk6IHtcbiAgICAgICAgICAgICAgZGF0YTogbG9jYWxNeUNvdXJzZXMuY291cnNlcy5tYXAoKGNvdXJzZSkgPT4gKHtcbiAgICAgICAgICAgICAgICBjb3Vyc2VJZDogY291cnNlLmNvdXJzZUlkLFxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiBjb3Vyc2UucXVhbnRpdHksXG4gICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGF3YWl0IHR4Lm15Q291cnNlcy5kZWxldGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGxvY2FsTXlDb3Vyc2VzLmlkIH0sXG4gICAgfSk7XG5cbiAgICBjb29raWVzKCkuc2V0KFwibG9jYWxDYXJ0SWRcIiwgXCJcIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtZXJnZU15Q291cnNlc0l0ZW1zKC4uLm15Q291cnNlc0l0ZW1zOiBNeUNvdXJzZXNJdGVtW11bXSkge1xuICByZXR1cm4gbXlDb3Vyc2VzSXRlbXMucmVkdWNlKChhY2MsIGNvdXJzZXMpID0+IHtcbiAgICBjb3Vyc2VzLmZvckVhY2goKGNvdXJzZSkgPT4ge1xuICAgICAgY29uc3QgZXhpc3RpbmdDb3Vyc2UgPSBhY2MuZmluZCgoaSkgPT4gaS5jb3Vyc2VJZCA9PT0gY291cnNlLmNvdXJzZUlkKTtcbiAgICAgIGlmIChleGlzdGluZ0NvdXJzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY2MucHVzaChjb3Vyc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIFtdIGFzIE15Q291cnNlc0l0ZW1bXSk7XG59XG4iXSwibmFtZXMiOlsicHJpc21hIiwiY29va2llcyIsImF1dGhPcHRpb25zIiwiZ2V0U2VydmVyU2Vzc2lvbiIsImdldE15Q291cnNlcyIsInNlc3Npb24iLCJteUNvdXJzZXMiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsInVzZXJJZCIsInVzZXIiLCJpZCIsImluY2x1ZGUiLCJjb3Vyc2VzIiwiY291cnNlIiwibG9jYWxNeUNvdXJzZXNJZCIsImdldCIsInZhbHVlIiwiZmluZFVuaXF1ZSIsInNpemUiLCJyZWR1Y2UiLCJhY2MiLCJpdGVtIiwicXVhbnRpdHkiLCJjcmVhdGVNeUNvdXJzZXMiLCJuZXdNeUNvdXJzZXMiLCJjcmVhdGUiLCJkYXRhIiwic2V0IiwibWVyZ2VBbm9ueW1vdXNNeUNvdXJzZXNJbnRvVXNlckNhcnQiLCJsb2NhbE15Q291cnNlcyIsInVzZXJNeUNvdXJzZXMiLCIkdHJhbnNhY3Rpb24iLCJ0eCIsIm1lcmdlZE15Q291cnNlc0l0ZW1zIiwibWVyZ2VNeUNvdXJzZXNJdGVtcyIsIm15Q291cnNlc0l0ZW0iLCJkZWxldGVNYW55IiwibXlDb3Vyc2VzSWQiLCJjcmVhdGVNYW55IiwibWFwIiwiY291cnNlSWQiLCJkZWxldGUiLCJteUNvdXJzZXNJdGVtcyIsImZvckVhY2giLCJleGlzdGluZ0NvdXJzZSIsImZpbmQiLCJpIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/db/mycourses.ts\n");

/***/ }),

/***/ "(rsc)/./lib/db/prisma.ts":
/*!**************************!*\
  !*** ./lib/db/prisma.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prismaClientSingleton = ()=>{\n    return new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n};\nconst prisma = globalThis.prisma ?? prismaClientSingleton();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\nif (true) globalThis.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3QyxNQUFNQyx3QkFBd0I7SUFDNUIsT0FBTyxJQUFJRCx3REFBWUE7QUFDekI7QUFNQSxNQUFNRSxTQUFTQyxXQUFXRCxNQUFNLElBQUlEO0FBRXBDLGlFQUFlQyxNQUFNQSxFQUFDO0FBRXRCLElBQUlFLElBQXlCLEVBQWNELFdBQVdELE1BQU0sR0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXRoZW1hdHJpY2tzLy4vbGliL2RiL3ByaXNtYS50cz8wOTYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5jb25zdCBwcmlzbWFDbGllbnRTaW5nbGV0b24gPSAoKSA9PiB7XG4gIHJldHVybiBuZXcgUHJpc21hQ2xpZW50KCk7XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIHByaXNtYTogdW5kZWZpbmVkIHwgUmV0dXJuVHlwZTx0eXBlb2YgcHJpc21hQ2xpZW50U2luZ2xldG9uPlxufVxuXG5jb25zdCBwcmlzbWEgPSBnbG9iYWxUaGlzLnByaXNtYSA/PyBwcmlzbWFDbGllbnRTaW5nbGV0b24oKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsVGhpcy5wcmlzbWEgPSBwcmlzbWE7Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYUNsaWVudFNpbmdsZXRvbiIsInByaXNtYSIsImdsb2JhbFRoaXMiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/db/prisma.ts\n");

/***/ }),

/***/ "(rsc)/./lib/env.ts":
/*!********************!*\
  !*** ./lib/env.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   env: () => (/* binding */ env)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/lib/index.mjs\");\n\nconst envSchema = zod__WEBPACK_IMPORTED_MODULE_0__[\"default\"].object({\n    DATABASE_URL: zod__WEBPACK_IMPORTED_MODULE_0__[\"default\"].string().min(1),\n    GOOGLE_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_0__[\"default\"].string().min(1),\n    GOOGLE_CLIENT_SECRET: zod__WEBPACK_IMPORTED_MODULE_0__[\"default\"].string().min(1),\n    NEXTAUTH_URL: zod__WEBPACK_IMPORTED_MODULE_0__[\"default\"].string().min(1),\n    NEXTAUTH_SECRET: zod__WEBPACK_IMPORTED_MODULE_0__[\"default\"].string().min(1)\n});\nconst env = envSchema.parse(process.env);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZW52LnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXNCO0FBRXRCLE1BQU1DLFlBQVlELGtEQUFVLENBQUM7SUFDM0JHLGNBQWNILGtEQUFVLEdBQUdLLEdBQUcsQ0FBQztJQUMvQkMsa0JBQWtCTixrREFBVSxHQUFHSyxHQUFHLENBQUM7SUFDbkNFLHNCQUFzQlAsa0RBQVUsR0FBR0ssR0FBRyxDQUFDO0lBQ3ZDRyxjQUFjUixrREFBVSxHQUFHSyxHQUFHLENBQUM7SUFDL0JJLGlCQUFpQlQsa0RBQVUsR0FBR0ssR0FBRyxDQUFDO0FBQ3BDO0FBRU8sTUFBTUssTUFBTVQsVUFBVVUsS0FBSyxDQUFDQyxRQUFRRixHQUFHLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXRoZW1hdHJpY2tzLy4vbGliL2Vudi50cz85M2YyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB6b2QgZnJvbSBcInpvZFwiO1xuXG5jb25zdCBlbnZTY2hlbWEgPSB6b2Qub2JqZWN0KHtcbiAgREFUQUJBU0VfVVJMOiB6b2Quc3RyaW5nKCkubWluKDEpLFxuICBHT09HTEVfQ0xJRU5UX0lEOiB6b2Quc3RyaW5nKCkubWluKDEpLFxuICBHT09HTEVfQ0xJRU5UX1NFQ1JFVDogem9kLnN0cmluZygpLm1pbigxKSxcbiAgTkVYVEFVVEhfVVJMOiB6b2Quc3RyaW5nKCkubWluKDEpLFxuICBORVhUQVVUSF9TRUNSRVQ6IHpvZC5zdHJpbmcoKS5taW4oMSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGVudiA9IGVudlNjaGVtYS5wYXJzZShwcm9jZXNzLmVudik7XG4iXSwibmFtZXMiOlsiem9kIiwiZW52U2NoZW1hIiwib2JqZWN0IiwiREFUQUJBU0VfVVJMIiwic3RyaW5nIiwibWluIiwiR09PR0xFX0NMSUVOVF9JRCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiTkVYVEFVVEhfVVJMIiwiTkVYVEFVVEhfU0VDUkVUIiwiZW52IiwicGFyc2UiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/env.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/zod","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/@auth","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fadmin%2FDocuments%2Fmathematricks%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fadmin%2FDocuments%2Fmathematricks&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();