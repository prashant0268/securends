module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("xfKh");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "8Smf":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAAAyCAMAAADhhAc5AAAAYFBMVEUAAAD///8AZpn7ggAAZpn7ggAAZpn7ggAAZpn7ggAAZpn7ggAAZpn7ggAAZpn7ggAAZpn7ggAAZpn7ggAAZpn7ggAAZpn7ggAAZpn7ggAAZpn7ggAAZpn7ggAAZpn7ggASr/0aAAAAHnRSTlMAABERIiIzM0REVVVmZnd3iIiZmaqqu7vMzN3d7u7QR4jHAAAEC0lEQVRo3u3b6WKiMBAA4BgOwXIoUkRFef+3bJWoOSaTQVmXtplfrk2z8m2OycRlCx9PBPMEns2zeba/wMb+bqTlNfBGnk2Psr+GZ3sTW7xuznAks3iw5a7HIv0vbLHNbC5swamfH1vWnWfOlvfzY1udz3NnK+fHFnae7Qm26uzZxrNxwXMoEjD4jNhSWwRvZ8sGtWrWeRvpud7KVgxsnMTGk6yQIomNFsmq0OMyzZPhpdH6+m4mvxUm2q+PYfso1Ujh2RulciOg+yDVOiojja2+qjWUU0JcGytfV8iTOATXycuDi38cvcfh7ebxRtYav05nWx6BZe8z13PAUmtmdJ9+QqunytaQ2TJwy+hWjgYj2EIo7aazWU4S+yVuq3dfwpuOyra+frbWzZbZ9tqVowGZDU6F6GzWjVYacEvzvKF1n/cUNvFAsYsttqYoHUceegwbfMSbgO3hFgDzWO0+OpHYkuHDtbHjM9X21K66NrDmf1Q2y2idgu2e2EETUO1+05PYFrdB0jZarLNQWu1FK6WFWL+76yZ7fpWtJrDlOzNyAttRNDk62XZEtgI5ItSxurJ1MbjeXVIMcbKt4PSYwoYM+1J7QCVKlU3JOT72yjSNxCYR2fO2YY5u3Uf5FjtbFcoDVnpf7Z2teAy859hCdYOZho2xrchDhtRi+MMSSXeHlxs3G36Wr+QHNPLVRmNrnmdLkDPwC2xiXp5kNuyUICapvAps8wCqt4WE8WZhO8yfTSQUEZEN3BJOJVgUzw6IW2hl49WjxWzZUultAlsEbwm7ALyCiYtK30lvlGuFDUiuWvY2NsJOmsJ5CZXNloFsyTdXhZRfYGzZ+9gIedurbLdNxEhByBd+a3GCwNla9rvYWAkeFHZktvisrfgQ24H/NjatAHWrh0Tk62UCW8MZgU0kw/yHsGlVvOHHH1Q27mLr6sRaOlPrkdIq+OPYxMmhpLJlABtDp6GNjSkT+qexHUex8cNjRXKo3FevEC+gtOFTbDnpgorMloP1zb21atybbDyxxGotDl21tDhVNpZbA+ACLFSqQpXcoCKyLW/JOnpz5WYTr08b+ZfzT/nYGhmd3zbWJVBvc92UQnUhZezxDj+dIQc4NxtY8DHKaQS2be+qZVqvZI+LUWyNksNZ2ViBs8XdK2zlRGypsyRn/ZvKUWyi5H1f6KxsvMVrT/Yv6BDY2H4aNtvR6ZJf4Gz7xRi2R9XQHC7aBhEf8JKd7ecktmA/DZvVP8fH9T4YwaZcg/IGZ2O8RtkYLzrk6gtnY8FmGjZ4vB1TfDnYBozK1tWFlmYl6xZj+x5Q0JcypWSPZ7UxlQ8Fo7B973Gb3RRsZj9H+QoaYNttImb97q4P//8SPJtn82yezYdn+9fxBWBvE/PHwsBuAAAAAElFTkSuQmCC"

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Cc5c":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAABKCAMAAABdGEKNAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAECAwQFBgcICPn6+/z9/vIxqCigAABTBJREFUeNrtm+mWqyAMgIsgIiLw/k97Zy2QBWLb056O139zmigfJGSBuVye+Cjrrs90OcOz5fKkF49FVWPJ03i8801fCfVXzGuJTT0WS8vUIu5vEW+kyFyLrG9P7OqxZFLE1xLhjxGTXhr/FnEzluwJCZ3HZvC+xJGQWP4YcWp5NJbYWwnz7sQtDhF8VH4AcR3Rs3opMHDSvCMJCySWm/KckmS6+bVLbAAPXoBtaAXv9cAVxGkXcHQmS3mfx+UBEDKC8ObEHgLBymaFAvHNiQMEgmlXRALUaybjXPh+VmePbudibWXMd6FtjVE9qbJN6kGwRaXChH7HJaXxaFo2q3jnOaz9PZJlA1vKvrkZCOrFh8HbMFDsJVxEQDbYTL68wykJsUibl/vALtFy9ikP36byYA03/Lvt+3kZix4Ty7R7cmUnNbxMjrontXQSLhSQfeczSY+IhdpdORFxeZvpvQI2AwhHX3pfybvqE0u1u3Iy4pwUE45B2uX7MzKl7lfK5JDEYu30AOJf0ySJbS82Nam3z4Nn6hFLtW1+BHHiwnHTFrjWGZG0SjUa8nWZKGKxtn8I8U+iURNvOO26DpT2Qzscc+wQi7X3xxA75CEzbgtcvzWRAbmd/OgWMztPdhgoYrF2HUdUNyFrHgfCc0AJyBSgLaoy2YkijpQv6ESEOopYrN2r3vtVeUDETT+gDGuHdrc25u8oR0yKtHXPEsu1b6/bFCoITLOXGbhJbsXpN4LY0FFaEV5GEMu176hUA/yubd8ObTGVCO2IEtoyJVfAeASxXJsyhVuJXUscWiZTWflC7I6OqS82EbFcu97f1lIHmukGYt/aqmu/tFY2Z4imgWMSNYeziBFxV5tPKryht+zld1pQHgH2I91aWaz+0sRmuzIFEbF6BLFcuxePt9bOZx95WfguUzuub5oBCky0Zv31ALFc28vqjQ/e2E1BoL2Y2odiXbHslOgTiWdZzjXM02EkUE1Zpiv8FQ7QPpf40l86Ky1MYEhsMxJXTcdMuPxTifsZ886X8l3i2EbgvXqDggPxTyYeFB0TbQgpBA/3aofcoQRD5ds5xLJP26s/1yaOysB2ieOiyWnF61Yc2aY2AzTYjp4Vj7+Xee+XgSsZsyAxTpZLRIo9X3puzvXbJJqv+dYaIhx6ICcKEgdc1sXMnUHgJZmZVtEuIj6gPTg+QsQ7m2USRa9n491gC/V31U597cHBNyIOLLFoV3TE3Bs8CYnu1PL18QHtweUGOfFEDGNiD12IgNwYoFcHeyBy7aNrHDliQ3lM5I4SV0zcno1E/7mpBHGfS6591I+vq6TApmApQ/Bc2koEZH1XL1OsrQN+UnevTvZjt9Z2g2vnKLCZO2WaCel4T79arC1qRIfh/OXWrNbhZSZzS8u5eyYh1TYSMSchDuSB4U67MbnPDZrng3MnqfaAOAh9JLcftMxRbaAP1zXZXj56tijUHhAboY9kMhwjR17oUzcjGfT4/FimbW63hKZ4AgcSTFdb033BMhE6Svox3B0BkbYROQ5xypzmZq+gwzHwrsRcB3D1BURyoaIV3XyRaHcsIRj+Nt7X7Q+VGOLE3LnYmFG36Z+Ft3Ciny/Suz4C7YtxgaDeV5Ch6MoM958bPtWXL1N1DqeZM7qpuXVFy//8eO0RW+KqlesXRAPtH+wvoa/8wzvm2tdkPwWcKy+paF53GfJyhuc/8bmI4+mIw+mIt9MRu9MR29MRm9MRX85GvJ+OeD0d8Xw6YnU24nPkHzWxPQlx+ZerFxr1PyF6t7TFfhbYAAAAAElFTkSuQmCC"

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "So4i":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAABKCAMAAABdGEKNAAAAM1BMVEUAAAATxKETxKETxKETxKETxKETxKETxKETxKETxKETxKETxKETxKETxKETxKETxKETxKFTmGeXAAAAEHRSTlMAECAwQFBgcICPn6+/z9/vIxqCigAABTBJREFUeNrtm+mWqyAMgIsgIiLw/k97Zy2QBWLb056O139zmigfJGSBuVye+Cjrrs90OcOz5fKkF49FVWPJ03i8801fCfVXzGuJTT0WS8vUIu5vEW+kyFyLrG9P7OqxZFLE1xLhjxGTXhr/FnEzluwJCZ3HZvC+xJGQWP4YcWp5NJbYWwnz7sQtDhF8VH4AcR3Rs3opMHDSvCMJCySWm/KckmS6+bVLbAAPXoBtaAXv9cAVxGkXcHQmS3mfx+UBEDKC8ObEHgLBymaFAvHNiQMEgmlXRALUaybjXPh+VmePbudibWXMd6FtjVE9qbJN6kGwRaXChH7HJaXxaFo2q3jnOaz9PZJlA1vKvrkZCOrFh8HbMFDsJVxEQDbYTL68wykJsUibl/vALtFy9ikP36byYA03/Lvt+3kZix4Ty7R7cmUnNbxMjrontXQSLhSQfeczSY+IhdpdORFxeZvpvQI2AwhHX3pfybvqE0u1u3Iy4pwUE45B2uX7MzKl7lfK5JDEYu30AOJf0ySJbS82Nam3z4Nn6hFLtW1+BHHiwnHTFrjWGZG0SjUa8nWZKGKxtn8I8U+iURNvOO26DpT2Qzscc+wQi7X3xxA75CEzbgtcvzWRAbmd/OgWMztPdhgoYrF2HUdUNyFrHgfCc0AJyBSgLaoy2YkijpQv6ESEOopYrN2r3vtVeUDETT+gDGuHdrc25u8oR0yKtHXPEsu1b6/bFCoITLOXGbhJbsXpN4LY0FFaEV5GEMu176hUA/yubd8ObTGVCO2IEtoyJVfAeASxXJsyhVuJXUscWiZTWflC7I6OqS82EbFcu97f1lIHmukGYt/aqmu/tFY2Z4imgWMSNYeziBFxV5tPKryht+zld1pQHgH2I91aWaz+0sRmuzIFEbF6BLFcuxePt9bOZx95WfguUzuub5oBCky0Zv31ALFc28vqjQ/e2E1BoL2Y2odiXbHslOgTiWdZzjXM02EkUE1Zpiv8FQ7QPpf40l86Ky1MYEhsMxJXTcdMuPxTifsZ886X8l3i2EbgvXqDggPxTyYeFB0TbQgpBA/3aofcoQRD5ds5xLJP26s/1yaOysB2ieOiyWnF61Yc2aY2AzTYjp4Vj7+Xee+XgSsZsyAxTpZLRIo9X3puzvXbJJqv+dYaIhx6ICcKEgdc1sXMnUHgJZmZVtEuIj6gPTg+QsQ7m2USRa9n491gC/V31U597cHBNyIOLLFoV3TE3Bs8CYnu1PL18QHtweUGOfFEDGNiD12IgNwYoFcHeyBy7aNrHDliQ3lM5I4SV0zcno1E/7mpBHGfS6591I+vq6TApmApQ/Bc2koEZH1XL1OsrQN+UnevTvZjt9Z2g2vnKLCZO2WaCel4T79arC1qRIfh/OXWrNbhZSZzS8u5eyYh1TYSMSchDuSB4U67MbnPDZrng3MnqfaAOAh9JLcftMxRbaAP1zXZXj56tijUHhAboY9kMhwjR17oUzcjGfT4/FimbW63hKZ4AgcSTFdb033BMhE6Svox3B0BkbYROQ5xypzmZq+gwzHwrsRcB3D1BURyoaIV3XyRaHcsIRj+Nt7X7Q+VGOLE3LnYmFG36Z+Ft3Ciny/Suz4C7YtxgaDeV5Ch6MoM958bPtWXL1N1DqeZM7qpuXVFy//8eO0RW+KqlesXRAPtH+wvoa/8wzvm2tdkPwWcKy+paF53GfJyhuc/8bmI4+mIw+mIt9MRu9MR29MRm9MRX85GvJ+OeD0d8Xw6YnU24nPkHzWxPQlx+ZerFxr1PyF6t7TFfhbYAAAAAElFTkSuQmCC"

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "g7ta":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);








var Footer =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Footer, _React$Component);

  function Footer() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Footer);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Footer).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("footer", {
        className: "footer-area ptb-100 pb-0 bg-image"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-3 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-footer-widget"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "logo"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__("8Smf"),
        alt: "SecurEnds"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", null, "Head Quarter"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "1 Glenlake Parkway, Ste. 525 Atlanta, GA 30328 Phone: 678.374.4243"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "social-list"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-facebook"
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-twitter"
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-youtube"
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-linkedin"
      }))))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-3 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-footer-widget pl-5"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Useful Links"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "list"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/whitepaper"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Whitepaper"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/case-studies"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Case Studies"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/partners"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Partners"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/contact-us"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Contact Us")))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-3 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-footer-widget"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Products"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "list"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/product-1"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "User Access & Entitlement Review"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/product-2"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Identity alerts & Intelligence"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/product-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Cloud Identity & Access Management")))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-3 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-footer-widget"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Solutions"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "list"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/solution-1"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Protect against Hacking"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/solution-2"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Extend existing IAM investment")))))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "copyright-area"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row h-100 justify-content-center align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-6 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "\xA9 Copyright 2019 SecurEnds, LLC. All rights reserved SecurEnds, LLC."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Other product and company names mentioned herein are the property of their respective owners.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-6 col-md-6",
        style: {
          margin: "0 0 auto"
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/terms-and-conditions"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Terms & Conditions"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/privacy-policy"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Privacy Policy")))))))));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pFRj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (get_own_property_symbols_default.a) {
    var sourceSymbolKeys = get_own_property_symbols_default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./utils/ActiveLink.js





var ActiveLink_ActiveLink = function ActiveLink(_ref) {
  var router = _ref.router,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["router", "children"]);

  var child = external_react_["Children"].only(children);
  var className = child.props.className || '';

  if (router.pathname === props.href && props.activeClassName) {
    className = "".concat(className, " ").concat(props.activeClassName).trim();
  }

  delete props.activeClassName;
  return external_react_default.a.createElement(link_default.a, props, external_react_default.a.cloneElement(child, {
    className: className
  }));
};

/* harmony default export */ var utils_ActiveLink = (Object(router_["withRouter"])(ActiveLink_ActiveLink));
// CONCATENATED MODULE: ./components/Layouts/SideDrawer.js










var SideDrawer_SideDrawer =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(SideDrawer, _React$Component);

  function SideDrawer() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, SideDrawer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(SideDrawer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      drawer: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "closeDrawer", function () {
      _this.props.onClick(_this.state.drawer);
    });

    return _this;
  }

  Object(createClass["a" /* default */])(SideDrawer, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "sidebar-modal"
      }, external_react_default.a.createElement("div", {
        className: "modal right fade show",
        style: {
          display: "block",
          paddingRight: "16px"
        }
      }, external_react_default.a.createElement("div", {
        className: "modal-dialog",
        role: "document"
      }, external_react_default.a.createElement("div", {
        className: "modal-content"
      }, external_react_default.a.createElement("div", {
        className: "modal-header"
      }, external_react_default.a.createElement("button", {
        type: "button",
        className: "close",
        "data-dismiss": "modal",
        "aria-label": "Close",
        onClick: this.closeDrawer
      }, external_react_default.a.createElement("span", {
        "aria-hidden": "true"
      }, external_react_default.a.createElement("i", {
        className: "icofont-close"
      }))), external_react_default.a.createElement("h2", {
        className: "modal-title",
        id: "myModalLabel2"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/"
      }, external_react_default.a.createElement("a", null, external_react_default.a.createElement("img", {
        src: __webpack_require__("Cc5c"),
        alt: "logo"
      }))))), external_react_default.a.createElement("div", {
        className: "modal-body"
      }, external_react_default.a.createElement("div", {
        className: "sidebar-modal-widget"
      }, external_react_default.a.createElement("h3", {
        className: "title"
      }, "Additional Links"), external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        href: "/login"
      }, external_react_default.a.createElement("a", null, "Login"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        href: "/signup"
      }, external_react_default.a.createElement("a", null, "Register"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        href: "/faq"
      }, external_react_default.a.createElement("a", null, "FAQ"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        href: "#"
      }, external_react_default.a.createElement("a", null, "Logout"))))), external_react_default.a.createElement("div", {
        className: "sidebar-modal-widget"
      }, external_react_default.a.createElement("h3", {
        className: "title"
      }, "Contact Info"), external_react_default.a.createElement("ul", {
        className: "contact-info"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("i", {
        className: "icofont-google-map"
      }), "Address", external_react_default.a.createElement("span", null, "1660 Travis Street Miramar, FL 33025, California")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("i", {
        className: "icofont-email"
      }), "Email", external_react_default.a.createElement("span", null, "admin@crake.com")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("i", {
        className: "icofont-phone"
      }), "Phone", external_react_default.a.createElement("span", null, "+123 456 7890")))), external_react_default.a.createElement("div", {
        className: "sidebar-modal-widget"
      }, external_react_default.a.createElement("h3", {
        className: "title"
      }, "Connect With Us"), external_react_default.a.createElement("ul", {
        className: "social-list"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        href: "#"
      }, external_react_default.a.createElement("a", null, external_react_default.a.createElement("i", {
        className: "icofont-facebook"
      })))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        href: "#"
      }, external_react_default.a.createElement("a", null, external_react_default.a.createElement("i", {
        className: "icofont-twitter"
      })))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        href: "#"
      }, external_react_default.a.createElement("a", null, external_react_default.a.createElement("i", {
        className: "icofont-instagram"
      })))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        href: "#"
      }, external_react_default.a.createElement("a", null, external_react_default.a.createElement("i", {
        className: "icofont-linkedin"
      })))))))))));
    }
  }]);

  return SideDrawer;
}(external_react_default.a.Component);

/* harmony default export */ var Layouts_SideDrawer = (SideDrawer_SideDrawer);
// CONCATENATED MODULE: ./components/Layouts/Navbar.js











 // import SearchForm from "./SearchForm";

var Navbar_Navbar =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Navbar, _React$Component);

  function Navbar() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Navbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Navbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_isMounted", false);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      drawer: false,
      searchForm: false,
      collapsed: true
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "toggleNavbar", function () {
      _this.setState({
        collapsed: !_this.state.collapsed
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleDrawer", function () {
      _this.setState(function (prevState) {
        return {
          drawer: !prevState.drawer
        };
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleSearchForm", function () {
      _this.setState(function (prevState) {
        return {
          searchForm: !prevState.searchForm
        };
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      var elementId = document.getElementById("navbar");
      document.addEventListener("scroll", function () {
        if (window.scrollY > 170) {
          elementId.classList.add("is-sticky");
        } else {
          elementId.classList.remove("is-sticky");
        }
      });
      window.scrollTo(0, 0);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var pathname = this.props.router.pathname;
      var products = this.props.products;
      var layOutCls = ""; //let logo = require("../../images/logo.png");

      var logo = __webpack_require__("8Smf");

      if (pathname == "/digital-marketing") {
        layOutCls = "marketing-navbar";
        logo = __webpack_require__("So4i");
      }

      var collapsed = this.state.collapsed;
      var classOne = collapsed ? "collapse navbar-collapse" : "collapse navbar-collapse show";
      var classTwo = collapsed ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";
      return external_react_default.a.createElement("header", {
        id: "header"
      }, external_react_default.a.createElement("div", {
        className: "notification"
      }, external_react_default.a.createElement("div", {
        className: "title"
      }, "Visit us at booth 618, Gartner IAM Summit , Dec 10-12, Las Vegas")), external_react_default.a.createElement("div", {
        id: "navbar",
        className: "crake-nav ".concat(layOutCls)
      }, external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement("nav", {
        className: "navbar navbar-expand-md navbar-light"
      }, external_react_default.a.createElement(utils_ActiveLink, {
        href: "/#"
      }, external_react_default.a.createElement("a", {
        className: "navbar-brand"
      }, external_react_default.a.createElement("img", {
        src: logo,
        alt: "logo"
      }))), external_react_default.a.createElement("button", {
        onClick: this.toggleNavbar,
        className: classTwo,
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        style: {
          background: "#001b90 !important"
        }
      }, external_react_default.a.createElement("span", {
        className: "navbar-toggler-icon"
      })), external_react_default.a.createElement("div", {
        className: classOne,
        id: "navbarSupportedContent"
      }, external_react_default.a.createElement("ul", {
        className: "navbar-nav nav ml-auto"
      }, external_react_default.a.createElement("li", {
        className: "nav-item"
      }, external_react_default.a.createElement(utils_ActiveLink, {
        activeClassName: "active",
        href: "/"
      }, external_react_default.a.createElement("a", {
        className: "nav-link"
      }, "Home"))), external_react_default.a.createElement("li", {
        className: "nav-item"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "nav-link"
      }, "Products \xA0", external_react_default.a.createElement("i", {
        className: "icofont-rounded-down"
      })), external_react_default.a.createElement("ul", {
        className: "dropdown_menu"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement(utils_ActiveLink, {
        activeClassName: "active",
        href: "/product-1"
      }, external_react_default.a.createElement("a", null, "User Access & Entitlement Review"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(utils_ActiveLink, {
        activeClassName: "active",
        href: "/product-2"
      }, external_react_default.a.createElement("a", null, "Identity alerts & Intelligence"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(utils_ActiveLink, {
        activeClassName: "active",
        href: "/product-3"
      }, external_react_default.a.createElement("a", null, "Cloud Identity & Access Management"))))), external_react_default.a.createElement("li", {
        className: "nav-item"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "nav-link"
      }, "Solutions \xA0", external_react_default.a.createElement("i", {
        className: "icofont-rounded-down"
      })), external_react_default.a.createElement("ul", {
        className: "dropdown_menu"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement(utils_ActiveLink, {
        activeClassName: "active",
        href: "/solution-1"
      }, external_react_default.a.createElement("a", null, "Protect against Hacking"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(utils_ActiveLink, {
        activeClassName: "active",
        href: "/solution-2"
      }, external_react_default.a.createElement("a", null, "Extend existing IAM investment"))))), external_react_default.a.createElement("li", {
        className: "nav-item"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "nav-link"
      }, "Company \xA0", external_react_default.a.createElement("i", {
        className: "icofont-rounded-down"
      })), external_react_default.a.createElement("ul", {
        className: "dropdown_menu"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement(utils_ActiveLink, {
        activeClassName: "active",
        href: "/about-us"
      }, external_react_default.a.createElement("a", null, "About Us"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(utils_ActiveLink, {
        activeClassName: "active",
        href: "/whitepaper"
      }, external_react_default.a.createElement("a", null, "Whitepaper"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(utils_ActiveLink, {
        activeClassName: "active",
        href: "/case-studies"
      }, external_react_default.a.createElement("a", null, "Case Studies"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(utils_ActiveLink, {
        activeClassName: "active",
        href: "/request-a-demo"
      }, external_react_default.a.createElement("a", null, "Request a Demo"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(utils_ActiveLink, {
        activeClassName: "active",
        href: "/webinar"
      }, external_react_default.a.createElement("a", null, "Webinar"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(utils_ActiveLink, {
        activeClassName: "active",
        href: "/events"
      }, external_react_default.a.createElement("a", null, "Events"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(utils_ActiveLink, {
        activeClassName: "active",
        href: "/partners"
      }, external_react_default.a.createElement("a", null, "Partners"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(utils_ActiveLink, {
        activeClassName: "active",
        href: "/blog"
      }, external_react_default.a.createElement("a", null, "Blog"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(utils_ActiveLink, {
        activeClassName: "active",
        href: "/contact-us"
      }, external_react_default.a.createElement("a", null, "Contact Us"))))), external_react_default.a.createElement("li", {
        className: "nav-item"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "nav-link"
      }, "Success Stories \xA0", external_react_default.a.createElement("i", {
        className: "icofont-rounded-down"
      })), external_react_default.a.createElement("ul", {
        className: "dropdown_menu"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement(utils_ActiveLink, {
        activeClassName: "active",
        href: "/success-story-1"
      }, external_react_default.a.createElement("a", null, "SITA"))))))), external_react_default.a.createElement("div", {
        className: "mr-auto others-option"
      }, external_react_default.a.createElement(utils_ActiveLink, {
        href: "#"
      }, external_react_default.a.createElement("a", {
        className: "btn-sm btn-primary"
      }, "Demo")))))));
    }
  }]);

  return Navbar;
}(external_react_default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.addedItems
  };
};

/* harmony default export */ var Layouts_Navbar = __webpack_exports__["a"] = (Object(router_["withRouter"])(Object(external_react_redux_["connect"])(mapStateToProps)(Navbar_Navbar)));

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xfKh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("pFRj");
/* harmony import */ var _components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("g7ta");









var SuccessStory1 =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(SuccessStory1, _Component);

  function SuccessStory1() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, SuccessStory1);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(SuccessStory1).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(SuccessStory1, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null));
    }
  }]);

  return SuccessStory1;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SuccessStory1);

/***/ })

/******/ });