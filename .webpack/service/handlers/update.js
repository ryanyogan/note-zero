(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./handlers/update.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./handlers/update.js":
/*!****************************!*\
  !*** ./handlers/update.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.main = undefined;\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"babel-runtime/regenerator\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ \"babel-runtime/helpers/asyncToGenerator\");\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\nvar _dynamodbLib = __webpack_require__(/*! ../libs/dynamodb-lib */ \"./libs/dynamodb-lib.js\");\n\nvar db = _interopRequireWildcard(_dynamodbLib);\n\nvar _responseLib = __webpack_require__(/*! ../libs/response-lib */ \"./libs/response-lib.js\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar main = exports.main = function () {\n  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event, context, callback) {\n    var data, params;\n    return _regenerator2.default.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            data = JSON.parse(event.body);\n            params = {\n              TableName: 'notes',\n              Key: {\n                userId: event.requestContext.identity.cognitoIdentityId,\n                noteId: event.pathParameters.id\n              },\n              UpdateExpression: 'SET content = :content, attachment = :attachment',\n              ExpressionAttributeValues: {\n                ':attachment': data.attachment ? data.attachment : null,\n                ':content': data.content ? data.content : null\n              },\n              ReturnValues: 'ALL_NEW'\n            };\n            _context.prev = 2;\n            _context.next = 5;\n            return db.call('update', params);\n\n          case 5:\n            callback(null, (0, _responseLib.success)({ status: true }));\n            _context.next = 11;\n            break;\n\n          case 8:\n            _context.prev = 8;\n            _context.t0 = _context['catch'](2);\n\n            callback(null, (0, _responseLib.failure)({ status: false }));\n\n          case 11:\n          case 'end':\n            return _context.stop();\n        }\n      }\n    }, _callee, undefined, [[2, 8]]);\n  }));\n\n  return function main(_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./handlers/update.js?");

/***/ }),

/***/ "./libs/dynamodb-lib.js":
/*!******************************!*\
  !*** ./libs/dynamodb-lib.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.call = undefined;\n\nvar _awsSdk = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n\nvar _awsSdk2 = _interopRequireDefault(_awsSdk);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_awsSdk2.default.config.update({ region: 'us-east-1' });\n\nvar call = exports.call = function call(action, params) {\n  var dynamoDb = new _awsSdk2.default.DynamoDB.DocumentClient();\n\n  return dynamoDb[action](params).promise();\n};\n\n//# sourceURL=webpack:///./libs/dynamodb-lib.js?");

/***/ }),

/***/ "./libs/response-lib.js":
/*!******************************!*\
  !*** ./libs/response-lib.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.failure = exports.success = undefined;\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"babel-runtime/core-js/json/stringify\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar success = exports.success = function success(body) {\n  return buildResponse(200, body);\n};\n\nvar failure = exports.failure = function failure(body) {\n  return buildResponse(500, body);\n};\n\nvar buildResponse = function buildResponse(statusCode, body) {\n  return {\n    statusCode: statusCode,\n    headers: {\n      'Access-Control-Allow-Origin': '*',\n      'Access-Control-Allow-Credentials': true\n    },\n    body: (0, _stringify2.default)(body)\n  };\n};\n\n//# sourceURL=webpack:///./libs/response-lib.js?");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"aws-sdk\");\n\n//# sourceURL=webpack:///external_%22aws-sdk%22?");

/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/core-js/json/stringify\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/core-js/json/stringify%22?");

/***/ }),

/***/ "babel-runtime/helpers/asyncToGenerator":
/*!*********************************************************!*\
  !*** external "babel-runtime/helpers/asyncToGenerator" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "babel-runtime/regenerator":
/*!********************************************!*\
  !*** external "babel-runtime/regenerator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/regenerator%22?");

/***/ })

/******/ })));