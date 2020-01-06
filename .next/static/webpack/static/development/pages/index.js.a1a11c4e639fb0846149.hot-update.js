webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Saas/Banner.js":
/*!***********************************!*\
  !*** ./components/Saas/Banner.js ***!
  \***********************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-modal-video */ "./node_modules/react-modal-video/lib/index.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../node_modules/react-modal-video/scss/modal-video.scss */ "./node_modules/react-modal-video/scss/modal-video.scss");
/* harmony import */ var _node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_10__);











var isServer = typeof window === "undefined";
var WOW = !isServer ? __webpack_require__(/*! wowjs */ "./node_modules/wowjs/dist/wow.js") : null;

var Banner =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Banner, _React$Component);

  function Banner() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Banner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Banner)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      isOpen: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "openModal", function () {
      _this.setState({
        isOpen: true
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Banner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      new WOW.WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 20,
        mobile: true,
        live: true
      }).init();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "main-banner saas-home"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-table"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-table-cell"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row h-100 justify-content-center align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-6 col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "hero-content pl-4"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", null, "Want to better manage your user access and permissions?"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Learn more about our security products and solutions to help your organization be one step ahead."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "btn btn-primary"
      }, "Demo")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "col-lg-6 col-md-12",
        style: {
          fontSize: "85px",
          textAlign: "center",
          color: "whitesmoke"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "icons-container",
        style: {
          width: "300px",
          margin: "0 auto",
          color: "lightgrey"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        class: "icofont-finger-print",
        style: {
          border: "4px solid whitesmoke",
          borderRadius: "50%",
          padding: "20px"
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        class: "icofont-teacher",
        style: {
          left: "-20px",
          top: "-70px",
          fontSize: "59px"
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        class: "icofont-teacher",
        style: {
          bottom: "-40px",
          right: "-30px"
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        class: "icofont-teacher",
        style: {
          left: "13px",
          bottom: "-86px",
          fontSize: "24px"
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        class: "icofont-teacher",
        style: {
          top: "-40px",
          fontSize: "30px"
        }
      })))))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_modal_video__WEBPACK_IMPORTED_MODULE_9___default.a, {
        channel: "youtube",
        isOpen: this.state.isOpen,
        videoId: "szuchBiLrEM",
        onClose: function onClose() {
          return _this2.setState({
            isOpen: false
          });
        }
      }));
    }
  }]);

  return Banner;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ })

})
//# sourceMappingURL=index.js.a1a11c4e639fb0846149.hot-update.js.map