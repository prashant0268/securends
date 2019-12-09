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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layouts/Footer.js":
/*!**************************************!*\
  !*** ./components/Layouts/Footer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);








var Footer =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Footer, _React$Component);

  function Footer() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Footer);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Footer).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer, [{
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
        src: __webpack_require__(/*! ../../images/SecurEnds.png */ "./images/SecurEnds.png"),
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

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Layouts/Navbar.js":
/*!**************************************!*\
  !*** ./components/Layouts/Navbar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/ActiveLink */ "./utils/ActiveLink.js");
/* harmony import */ var _SideDrawer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SideDrawer */ "./components/Layouts/SideDrawer.js");











 // import SearchForm from "./SearchForm";

var Navbar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Navbar, _React$Component);

  function Navbar() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_isMounted", false);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      drawer: false,
      searchForm: false,
      collapsed: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleNavbar", function () {
      _this.setState({
        collapsed: !_this.state.collapsed
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleDrawer", function () {
      _this.setState(function (prevState) {
        return {
          drawer: !prevState.drawer
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSearchForm", function () {
      _this.setState(function (prevState) {
        return {
          searchForm: !prevState.searchForm
        };
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navbar, [{
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

      var logo = __webpack_require__(/*! ../../images/SecurEnds.png */ "./images/SecurEnds.png");

      if (pathname == "/digital-marketing") {
        layOutCls = "marketing-navbar";
        logo = __webpack_require__(/*! ../../images/logo2.png */ "./images/logo2.png");
      }

      var collapsed = this.state.collapsed;
      var classOne = collapsed ? "collapse navbar-collapse" : "collapse navbar-collapse show";
      var classTwo = collapsed ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("header", {
        id: "header"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "notification"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "title"
      }, "Visit us at booth 618, Gartner IAM Summit , Dec 10-12, Las Vegas")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "navbar",
        className: "crake-nav ".concat(layOutCls)
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", {
        className: "navbar navbar-expand-md navbar-light"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        href: "/#"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "navbar-brand"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: logo,
        alt: "logo"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
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
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "navbar-toggler-icon"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: classOne,
        id: "navbarSupportedContent"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "navbar-nav nav ml-auto"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "nav-link"
      }, "Home"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: "nav-link"
      }, "Products \xA0", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-rounded-down"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "dropdown_menu"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/product-1"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "User Access & Entitlement Review"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/product-2"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Identity alerts & Intelligence"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/product-3"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Cloud Identity & Access Management"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: "nav-link"
      }, "Solutions \xA0", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-rounded-down"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "dropdown_menu"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/solution-1"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Protect against Hacking"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/solution-2"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Extend existing IAM investment"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: "nav-link"
      }, "Company \xA0", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-rounded-down"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "dropdown_menu"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/about-us"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "About Us"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/whitepaper"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Whitepaper"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/case-studies"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Case Studies"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/request-a-demo"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Request a Demo"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/webinar"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Webinar"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/events"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Events"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/partners"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Partners"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/blog"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Blog"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/contact-us"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Contact Us"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: "nav-link"
      }, "Success Stories \xA0", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-rounded-down"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "dropdown_menu"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/success-story-1"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "SITA"))))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mr-auto others-option"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "btn-sm btn-primary"
      }, "Demo")))))));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.addedItems
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps)(Navbar)));

/***/ }),

/***/ "./components/Layouts/SideDrawer.js":
/*!******************************************!*\
  !*** ./components/Layouts/SideDrawer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);










var SideDrawer =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SideDrawer, _React$Component);

  function SideDrawer() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SideDrawer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SideDrawer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      drawer: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "closeDrawer", function () {
      _this.props.onClick(_this.state.drawer);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SideDrawer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "sidebar-modal"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "modal right fade show",
        style: {
          display: "block",
          paddingRight: "16px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "modal-dialog",
        role: "document"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "modal-content"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "modal-header"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "button",
        className: "close",
        "data-dismiss": "modal",
        "aria-label": "Close",
        onClick: this.closeDrawer
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        "aria-hidden": "true"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-close"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "modal-title",
        id: "myModalLabel2"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/logo.png */ "./images/logo.png"),
        alt: "logo"
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "modal-body"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "sidebar-modal-widget"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        className: "title"
      }, "Additional Links"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/login"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Login"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/signup"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Register"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/faq"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "FAQ"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Logout"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "sidebar-modal-widget"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        className: "title"
      }, "Contact Info"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "contact-info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-google-map"
      }), "Address", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, "1660 Travis Street Miramar, FL 33025, California")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-email"
      }), "Email", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, "admin@crake.com")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-phone"
      }), "Phone", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, "+123 456 7890")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "sidebar-modal-widget"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        className: "title"
      }, "Connect With Us"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "social-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-facebook"
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-twitter"
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-instagram"
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-linkedin"
      })))))))))));
    }
  }]);

  return SideDrawer;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SideDrawer);

/***/ }),

/***/ "./images/SecurEnds.png":
/*!******************************!*\
  !*** ./images/SecurEnds.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAAAyCAYAAADWWvcLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTgwQzNCQzg1RUI0MTFFOEFFM0ZDQkY5MkIwMDA5MEIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTgwQzNCQzk1RUI0MTFFOEFFM0ZDQkY5MkIwMDA5MEIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFODBDM0JDNjVFQjQxMUU4QUUzRkNCRjkyQjAwMDkwQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFODBDM0JDNzVFQjQxMUU4QUUzRkNCRjkyQjAwMDkwQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpIIJMYAAAcvSURBVHja7J3fdas4EMble7IFuAVuCaQEuwSnBCjBebn7kH0xJUAJcQmhhFBCaMEFZM/xapC48c1aAoH+YX+/c3zykARkSfNpRsyI1fl8ZgAAcEv8QBcAACBsAAAAYQMAAAgbAADM4mHuBVarFXoRgDvg84Vt+I/02u/++psVIdqkevj5gOECAIyERO2g+F0RU0MRigIAEIp24WdekXLvOgXPyo3D9m1ZldcYJvAtJOo9h02A22952IU5eUvCJgUt1IQCgERtzX+88c8avQFmh6Jc1DI5oSBqICQ7iBqw4rFxUaPJVKK7QARA1MB8j42LWgJRAwDcWii6xyoJALiZUJR7ayRomeZPWv6p+Kdx1L4GQwQM2Hq4B+bk0oWNiY1aFdW5zHJUHoBYQBoGGCtsuhD0OcpvlJXUZkpLSSaE0LQan1iVNxbasZH3T6x4CZf5fOLa6fXlJi8stPvatalfKsNrJfL7p5PbM/f7eObzpXMGkllj7UikedsmjYfNcimZrpPOmhOCI29XO1XYVDevubd2ikzQqK37AS9z7LXouxVdmF3lJ0ND3g+E71OgRaT+Ni6uSltU167ltsOYfshkH6QWvvsihE0mDb9aWsjoep3xUr9zA65mCkk/HkmoMZB1ppkV+/xaAJTCNvTwYBkPDYQhvVvstLU07g9+7Z1BGz4ciNpyIGHPSsp1LC2J2pI42BK1C7o0Ky4K71I4p4jtu6O2mbSDFvs3i/Y5yJCwNdELnhAUV+ko624VHhI3t21YjqgJI7rXBG6X37sTKC4QoxdNKWpvIQVNtiPTRBfBhE0VhqWyvCqG8NOHoJRy705l0AcGSoa0IOd9PEbcZPj5Gno85J5eENuY6rF1nRyBuO093WetGSDk+QmPFaV2/sRtqK/n7KdZnRmhbEP78OBcZjUXr5OicSJ+z8pG49mNpd8IrFmVtwahjy5EnPJUqX9io9rvyL+1YSjPD2FYuPDH5n7Occ4GviPv+OeAoMRAMMdnTK1oMeBOplYNIyuP3T2HUy42mvB5OzllQ71ftu5SIf48Rkln0GQIz0ZPVZfLTrNg5VbSZ8wXKJtiOyf1wviYI5kystfYVkLifU1sL1I6VOPxpEuT8CRsFW9DHjIUJa+tYH6zrXfSE9yPmLxXV9dZhiRytcb+f6IU1yrP70LUhOesXhT9i9ri4UZPHuIj06fXbAznJJF7FDWdjTq3i7HnsT0x8cTLZ7x86IyGBMIMGwNnI7S+FxKH/XjvApfL/bTERvjPr+d7XtaKdu4npK+00q5I9Afn1ajz2LjXRhd9DGCw2QjPzbexAuATVXLsWoadMdMMeJwmn36L6EPmxc0Xtl7c+OeRiQ10n+7sYSDcsRlW0T5aqRG2FnYGPNMueAF28cCly1Dg4vYm01pmhaKXAkeNrWSqR+8mz+3goWuQWpvXpooseFubyM3oJ7YgNCfGrNZaBgup6cGDLK9aYijd8raTx+ki6tow8VAztyJsFwJHbmZj7XQPEXIerApb/KsPcGNQFcYrmrF4vqhXtR5j/fvP6vjw61xPDkXdy0Z3ioNyP0FWGYTbKzA92QIA0ItbLh0TF57v3qrH5oijxm0Nld1P4ecW0xOAWeLWOS4Tj3XqX/d5NSTlXlvCvbY2XmGjnKcsqlpycnGfIsxHazUh/fpOkoLBMgXuOOX/pCC+aoSvjTMU7Y0yPCfpOVL1wjZSkdC1aQfzATcqiKp5n8Qeito1ShKmW4TKutSe7b4rS4PXBm4PVd36/4jHYxPe2l5rzOOIoSB74yH37qhZvd685f5F5K2OOPXirjE5z83QthoPbU+Zwd7cmLdUpQOCNLfN/T10R5xcM+JWIyrUqMJD3pnu+iQutt7g1V75LrXGw6X+/JD3bw3bsORs9leZN+XS0JoxJT0BQzZd3ttBViuY5vgl7KsCYLQdDBTkm5AyfS5cbRqK9qdwBg++xnyZS7llohzL5B71hNC11rjHNg/Ze2bfU2Eo/UScRJIO9MNNQfWO3GBahcGsmfuDDbeMRf82rEox9n1UZDthVtUfOw/j0T78OjfxhqJ6wamvhKYnFvpFH+HbkLP7LDRHTuG0bQonwhL4rLqr945d2MhonzS/L1j4+k2XL4weEtaGuUt8jNlrKxheXKwNRz0uuCErghrurRVLE7aGiZSL04DH9BTUsEUbfB8M8GdIKsKje6tj3ULctOL27KF/8ql5adb0QUGMwnaSq8C4U3DF3/xkIfc9RBsePYcA1+7v0nurIjPck5zYi3qhsuc+enTUP101TsAQtJL3V871WPLY+tMYGmb6kuIvr2kr32Lef1LP4iK8R1HTupP333i+fyGfhO7Y18krqYVJTGNyjNBwu0Xw8+X3ZrnfPl+I52apf/qn63UgQfutD2NOAV6dz2eMPgDgpviBLgAAQNgAAADCBgAAEDYAAICwAQAAhA0AcNP8J8AAVBVDqtUxVYsAAAAASUVORK5CYII="

/***/ }),

/***/ "./images/logo.png":
/*!*************************!*\
  !*** ./images/logo.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/logo2.png":
/*!**************************!*\
  !*** ./images/logo2.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

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

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

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

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/success-story-1.js":
/*!**********************************!*\
  !*** ./pages/success-story-1.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layouts/Navbar */ "./components/Layouts/Navbar.js");
/* harmony import */ var _components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layouts/Footer */ "./components/Layouts/Footer.js");









var SuccessStory1 =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SuccessStory1, _Component);

  function SuccessStory1() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SuccessStory1);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SuccessStory1).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SuccessStory1, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], null));
    }
  }]);

  return SuccessStory1;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SuccessStory1);

/***/ }),

/***/ "./utils/ActiveLink.js":
/*!*****************************!*\
  !*** ./utils/ActiveLink.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





var ActiveLink = function ActiveLink(_ref) {
  var router = _ref.router,
      children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["router", "children"]);

  var child = react__WEBPACK_IMPORTED_MODULE_3__["Children"].only(children);
  var className = child.props.className || '';

  if (router.pathname === props.href && props.activeClassName) {
    className = "".concat(className, " ").concat(props.activeClassName).trim();
  }

  delete props.activeClassName;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, props, react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(child, {
    className: className
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ActiveLink));

/***/ }),

/***/ 10:
/*!****************************************!*\
  !*** multi ./pages/success-story-1.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/psapkal/Research/ans/pages/success-story-1.js */"./pages/success-story-1.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=success-story-1.js.map