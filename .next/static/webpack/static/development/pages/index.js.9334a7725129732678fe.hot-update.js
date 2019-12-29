webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
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
/* harmony import */ var _NavigationBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavigationBar */ "./components/NavigationBar.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ItemCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ItemCard */ "./components/ItemCard.js");
/* harmony import */ var _SearchResult__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SearchResult */ "./components/SearchResult.js");






var _jsxFileName = "/Users/mert/Desktop/I\u0307TU\u0308/Fall 2019/Bitirme/Project/components/AppLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;






var apiConfig = __webpack_require__(/*! ../api-config */ "./api-config.js");

var Layout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Layout, _React$Component);

  function Layout(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout).call(this, props));
    _this.state = {
      searchResults: [],
      searchString: "",
      serverDown: false
    };
    _this.handleSearch = _this.handleSearch.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "handleSearch",
    value: function handleSearch(event) {
      var target = event.target;
      var value = target.value;
      this.setState({
        searchString: value
      });
      this.doSearch();
    }
  }, {
    key: "doSearch",
    value: function doSearch() {
      var _this2 = this;

      var url = apiConfig.serverUrl + '/sales';
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(url).then(function (response) {
        _this2.setState({
          searchResults: response.data.sales
        });
      })["catch"](function (error) {
        if (!error.response) _this2.setState({
          serverDown: true
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var sales = [];

      if (this.state.searchString) {
        sales = this.state.searchResults.map(function (sale) {
          return __jsx(_ItemCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
            sale: sale,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          });
        });
      }

      return __jsx("div", {
        style: {
          backgroundColor: 'whitesmoke',
          paddingBottom: '30px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx(_NavigationBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        page: this.props.page,
        loggedIn: this.props.loggedIn,
        user: this.props.user,
        handleSearch: this.handleSearch,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), this.state.searchString ? __jsx(_SearchResult__WEBPACK_IMPORTED_MODULE_10__["default"], {
        searchString: this.state.searchString,
        sales: sales,
        serverDown: this.state.serverDown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }) : this.props.children);
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.9334a7725129732678fe.hot-update.js.map