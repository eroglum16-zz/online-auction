webpackHotUpdate("static/development/pages/sales.js",{

/***/ "./pages/sales.js":
/*!************************!*\
  !*** ./pages/sales.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_SaleRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SaleRow */ "./components/SaleRow.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/auth */ "./utils/auth.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "/Users/mert/Desktop/I\u0307TU\u0308/Fall 2019/Bitirme/Project/pages/sales.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement;








var apiConfig = __webpack_require__(/*! ../api-config */ "./api-config.js");

var Sales =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Sales, _React$Component);

  function Sales(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Sales);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Sales).call(this, props));
    var token = _this.props.token;
    _this.state = {
      loggedIn: !!token,
      user: {},
      sales: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Sales, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Object(_utils_auth__WEBPACK_IMPORTED_MODULE_11__["getUser"])(this.props.token).then(function (user) {
        _this2.setState({
          user: user
        });

        _this2.getExpiredSales(user.email);
      });
    }
  }, {
    key: "getExpiredSales",
    value: function getExpiredSales(userEmail) {
      var _this3 = this;

      var url = apiConfig.serverUrl + '/sales/expired/' + userEmail;
      axios__WEBPACK_IMPORTED_MODULE_13___default.a.get(url).then(function (response) {
        _this3.setState({
          sales: response.data.sales
        });
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var saleRows = this.state.sales.map(function (sale) {
        return __jsx(_components_SaleRow__WEBPACK_IMPORTED_MODULE_9__["default"], {
          image: apiConfig.serverUrl + '/images/products/' + sale.images[0],
          type: "s",
          name: "Ak\u0131ll\u0131 S\xFCp\xFCrge",
          description: "Son teknoloji yapay zeka ev s\xFCp\xFCrgesi. Sizin yerinize kirleri tespit edip s\xFCp\xFCr\xFCr.",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        });
      });
      return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        page: "me",
        user: this.state.user,
        loggedIn: this.state.loggedIn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
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
          lineNumber: 50
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, " Satt\u0131\u011F\u0131n\u0131z \xDCr\xFCnler ", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Badge"], {
        className: "ml-2",
        color: "dark",
        pill: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, this.state.sales.length), " "), __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), __jsx(_components_SaleRow__WEBPACK_IMPORTED_MODULE_9__["default"], {
        image: "/cleaner.jpg",
        type: "s",
        name: "Ak\u0131ll\u0131 S\xFCp\xFCrge",
        description: "Son teknoloji yapay zeka ev s\xFCp\xFCrgesi. Sizin yerinize kirleri tespit edip s\xFCp\xFCr\xFCr.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), __jsx(_components_SaleRow__WEBPACK_IMPORTED_MODULE_9__["default"], {
        image: "/apple-watch.jpeg",
        type: "s",
        name: "Apple Watch",
        description: "\u0130lk testlerini Steve Jobs'\u0131n yapt\u0131\u011F\u0131 ve bir s\xFCre kulland\u0131\u011F\u0131 orijinal Apple Watch.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      })));
    }
  }]);

  return Sales;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);

Sales.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var token;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Check user's session
            token = Object(_utils_auth__WEBPACK_IMPORTED_MODULE_11__["auth"])(ctx);
            return _context.abrupt("return", {
              token: token
            });

          case 2:
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

/* harmony default export */ __webpack_exports__["default"] = (Sales);

/***/ })

})
//# sourceMappingURL=sales.js.43684488767175bba532.hot-update.js.map