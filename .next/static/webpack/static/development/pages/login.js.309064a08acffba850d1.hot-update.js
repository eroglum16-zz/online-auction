webpackHotUpdate("static/development/pages/login.js",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/auth */ "./utils/auth.js");









var _jsxFileName = "/Users/mert/Desktop/I\u0307TU\u0308/Fall 2019/Bitirme/Project/pages/login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement;








var validator = __webpack_require__(/*! ../utils/validations */ "./utils/validations.js");

var Login =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Login, _React$Component);

  function Login(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Login);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Login).call(this, props));
    var message = _this.props.registered ? 'Kaydınız oluşturuldu, lütfen giriş yapın!' : '';
    var color = _this.props.registered ? 'success' : '';
    _this.state = {
      alert: {
        message: message,
        color: color
      },
      email: _this.props.registered ? _this.props.registered : '',
      password: ''
    };
    _this.handleInputChange = _this.handleInputChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleLogin = _this.handleLogin.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handlePasswordEnter = _this.handlePasswordEnter.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleEmailEnter = _this.handleEmailEnter.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Login, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var target = event.target;
      var value = target.value;
      var name = target.name;
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, name, value));
    }
  }, {
    key: "handleEmailEnter",
    value: function handleEmailEnter(event) {
      if (event.key === 'Enter') {
        this.refs.password.focus();
      }
    }
  }, {
    key: "handlePasswordEnter",
    value: function handlePasswordEnter(event) {
      if (event.key === 'Enter') {
        this.handleLogin();
      }
    }
  }, {
    key: "handleLogin",
    value: function handleLogin() {
      if (!this.validate()) return;

      var apiConfig = __webpack_require__(/*! ../api-config */ "./api-config.js");

      var url = apiConfig.serverUrl + '/user/authenticate';
      axios__WEBPACK_IMPORTED_MODULE_14___default.a.post(url, {
        email: this.state.email,
        password: this.state.password
      }).then(function (response) {
        var token = response.data.token;
        Object(_utils_auth__WEBPACK_IMPORTED_MODULE_15__["login"])({
          token: token
        });
      })["catch"](function (error) {
        if (error.response) {
          var message = error.response.data.message;
          this.setState({
            alert: {
              message: message,
              color: 'danger'
            },
            password: ''
          });
        } else {
          this.setState({
            alert: {
              message: 'Sunucudaki bir sorundan dolayı kayıt işleminizi şu anda gerçekleştiremiyoruz.',
              color: 'info'
            }
          });
        }
      }.bind(this));
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!validator.isEmail(this.state.email)) {
        this.setState({
          alert: {
            message: 'Geçerli bir email adresi girmediniz.',
            color: 'danger'
          }
        });
        return false;
      } else if (this.state.password.length === 0) {
        this.setState({
          alert: {
            message: 'Şifrenizi girmediniz.',
            color: 'danger'
          }
        });
        return false;
      } else return true;
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        page: "login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx("div", {
        className: "container bg-white",
        style: {
          padding: '3%',
          marginTop: '3%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, __jsx("div", {
        className: "row justify-content-md-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, __jsx("div", {
        className: "col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, this.state.alert.message.length > 0 ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Alert"], {
        color: this.state.alert.color,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, this.state.alert.message) : '', __jsx("h2", {
        className: "text-light bg-dark text-center rounded p-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, " Kullan\u0131c\u0131 Giri\u015Fi "), __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        bsSize: "lg",
        type: "email",
        name: "email",
        value: this.state.email,
        onChange: this.handleInputChange,
        onKeyDown: this.handleEmailEnter,
        id: "email",
        placeholder: "Kay\u0131tl\u0131 email adresiniz",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        bsSize: "lg",
        type: "password",
        name: "password",
        value: this.state.password,
        onChange: this.handleInputChange,
        onKeyDown: this.handlePasswordEnter,
        id: "password",
        ref: "password",
        placeholder: "Parolan\u0131z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      })), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
        href: '/forget-password',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, __jsx("a", {
        className: "text-dark ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, " Parolam\u0131 unuttum"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        color: "secondary",
        size: "lg",
        onClick: this.handleLogin,
        block: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "Giri\u015F Yap\u0131n")), __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "Hesab\u0131n\u0131z yok mu?", __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
        href: '/registration',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, __jsx("a", {
        className: "text-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, " \xDCye olun")))))));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_13___default.a.Component);

Login.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var registered;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Object(_utils_auth__WEBPACK_IMPORTED_MODULE_15__["guest"])(context);
            registered = context.query.registered;
            return _context.abrupt("return", {
              registered: registered
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=login.js.309064a08acffba850d1.hot-update.js.map