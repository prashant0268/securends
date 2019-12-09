webpackHotUpdate("static/development/pages/success-story-1.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
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

/***/ })

})
//# sourceMappingURL=success-story-1.js.64915f915e8d3e93b7aa.hot-update.js.map