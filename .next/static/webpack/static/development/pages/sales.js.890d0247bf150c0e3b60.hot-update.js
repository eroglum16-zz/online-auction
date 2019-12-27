webpackHotUpdate("static/development/pages/sales.js",{

/***/ "./components/NavigationBar.js":
/*!*************************************!*\
  !*** ./components/NavigationBar.js ***!
  \*************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/auth */ "./utils/auth.js");






var _jsxFileName = "/Users/mert/Desktop/I\u0307TU\u0308/Fall 2019/Bitirme/Project/components/NavigationBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;





var NavigationBar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(NavigationBar, _React$Component);

  function NavigationBar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavigationBar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NavigationBar).call(this, props));
    _this.toggle = _this.toggle.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {
      isOpen: false
    };
    _this.handleLogout = _this.handleLogout.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavigationBar, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "handleLogout",
    value: function handleLogout() {
      Object(_utils_auth__WEBPACK_IMPORTED_MODULE_10__["logout"])();
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Navbar"], {
        color: "light",
        light: true,
        expand: "md",
        style: {
          boxShadow: '0px 10px 5px 0px #eee',
          minHeight: '70px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavbarBrand"], {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faGavel"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), " A\xE7\u0131k Artt\u0131rma"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavbarToggler"], {
        onClick: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Collapse"], {
        isOpen: this.state.isOpen,
        navbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"], {
        className: "ml-auto",
        navbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
        className: this.props.page === "home" ? "active" : "",
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faHome"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), " Anasayfa")), this.props.loggedIn ? '' : __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
        className: this.props.page === "registration" ? "active" : "",
        href: "/registration",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faList"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), " Kay\u0131t")), this.props.loggedIn ? '' : __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
        className: this.props.page === "login" ? "active" : "",
        href: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faSignInAlt"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), " Giri\u015F")), this.props.loggedIn ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
        className: this.props.page === "sell" ? "active" : "",
        href: "/sell",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faClipboard"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), " Sat\u0131\u015F Ba\u015Flat")) : '', __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
        style: {
          marginLeft: '10px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        type: "search",
        name: "search",
        id: "exampleSearch",
        placeholder: "arama yap\u0131n...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })), this.props.loggedIn ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["UncontrolledDropdown"], {
        nav: true,
        inNavbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownToggle"], {
        className: this.props.page === "me" ? "active" : "",
        nav: true,
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faUser"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), " ", this.props.user.nameSurname ? this.props.user.nameSurname : ''), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownMenu"], {
        right: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
        href: "/sales",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faHandHoldingUsd"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), " Sat\u0131lanlar"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
        href: "/purchases",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faShoppingCart"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), " Al\u0131nanlar"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
        divider: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
        onClick: this.handleLogout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faSignOutAlt"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), " \xC7\u0131k\u0131\u015F Yap"))) : '')));
    }
  }]);

  return NavigationBar;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NavigationBar);

/***/ })

})
//# sourceMappingURL=sales.js.890d0247bf150c0e3b60.hot-update.js.map