webpackHotUpdate("static/development/pages/a/[id].js",{

/***/ "./components/Bidding.js":
/*!*******************************!*\
  !*** ./components/Bidding.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_countdown_now__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-countdown-now */ "./node_modules/react-countdown-now/dist/index.es.js");





var _jsxFileName = "/Users/mert/Desktop/I\u0307TU\u0308/Fall 2019/Bitirme/Project/components/Bidding.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;







var Bidding =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Bidding, _React$Component);

  function Bidding() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Bidding);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Bidding).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Bidding, [{
    key: "render",
    value: function render() {
      var horizontalRule = this.props.loggedIn && this.props.saleOwner ? __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }) : "";
      var biddingInput = this.props.finishedSale ? "" : __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), __jsx("h5", {
        className: "text-center mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "Teklif Ver"), __jsx("p", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Teklif vermek i\xE7in", __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: '/registration',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx("a", {
        className: "text-dark underline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, " kay\u0131t olun")), " veya", __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: '/login',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("a", {
        className: "text-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, " giri\u015F yap\u0131n"))));
      biddingInput = !this.props.loggedIn ? biddingInput : __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, " \u015Eu anda en y\xFCksek teklif sizin teklifiniz. "));
      biddingInput = this.props.maxBidder ? biddingInput : "";
      biddingInput = this.props.saleOwner ? biddingInput : __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), __jsx("div", {
        className: "text-center justify-content-md-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("h5", {
        className: "text-center mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Teklif Ver"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
        style: {
          width: '60%',
          marginLeft: '20%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroupAddon"], {
        addonType: "prepend",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroupText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "\u20BA")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        className: "text-center",
        bgSize: "sm",
        type: "number",
        form: "nanana",
        name: "bid",
        value: this.props.bid,
        onChange: this.props.handleInputChange,
        onKeyDown: this.props.handleKeyDown,
        placeholder: "Teklifiniz",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Fade"], {
        "in": this.props.biddingFade["in"],
        tag: "p",
        className: "mt-3 text-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, this.props.biddingFade.message)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: this.props.handleNewBid,
        color: "dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "G\xF6nder"))));
      var biddingInfo = this.props.finishedSale ? __jsx("p", {
        className: "text-center mt-3 text-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Kapand\u0131") : __jsx("p", {
        className: "text-center mt-3 text-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx(react_countdown_now__WEBPACK_IMPORTED_MODULE_11__["default"], {
        date: this.props.endDate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }));
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx("h4", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "En Y\xFCksek Teklif"), horizontalRule, __jsx("p", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faLiraSign"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), " ", this.props.maxBid.amount), biddingInput, __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), biddingInfo);
    }
  }]);

  return Bidding;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Bidding);

/***/ }),

/***/ "./pages/a/[id].js":
/*!*************************!*\
  !*** ./pages/a/[id].js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_Bidding__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Bidding */ "./components/Bidding.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../utils/auth */ "./utils/auth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_countdown_now__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-countdown-now */ "./node_modules/react-countdown-now/dist/index.es.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_23__);











var _jsxFileName = "/Users/mert/Desktop/I\u0307TU\u0308/Fall 2019/Bitirme/Project/pages/a/[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;













var apiConfig = __webpack_require__(/*! ../../api-config */ "./api-config.js");

var defaults = __webpack_require__(/*! ../../utils/defaults */ "./utils/defaults.js");


var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_23___default()(apiConfig.serverUrl);

var AuctionDetail =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["default"])(AuctionDetail, _React$Component);

  function AuctionDetail(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, AuctionDetail);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(AuctionDetail).call(this, props));
    var token = _this.props.token;

    _this.getUser(token);

    _this.state = {
      loggedIn: token ? true : false,
      user: {},
      bid: "",
      activeIndex: 0,
      animating: false,
      sale: defaults.defaultSale,
      maxBid: {
        amount: null,
        bidder: ""
      },
      biddingFade: {
        message: "",
        "in": false
      }
    };
    _this.handleNewBid = _this.handleNewBid.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this));
    _this.handleInputChange = _this.handleInputChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this));
    _this.getSale = _this.getSale.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(AuctionDetail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var saleId = this.props.id;
      this.getSale(saleId);
      this.setState({
        bid: ""
      });
      socket.on('bid update', function (msg) {
        if (msg.saleId === saleId) {
          _this2.getSale(saleId);
        }
      });
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var target = event.target;
      var value = target.value;
      var name = target.name;
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])({}, name, value));
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      console.log(event.key);

      if (event.key === 'Enter') {
        this.handleNewBid();
        this.getSale(this.state.sale._id);
      }
    }
  }, {
    key: "handleNewBid",
    value: function handleNewBid() {
      console.log(this.state.bid);

      if (this.state.bid === "") {
        this.showFade("Önce teklifinizi girin.");
        return;
      }

      if (this.state.bid < this.state.sale.firstPrice) {
        this.showFade("Başlangıç fiyatından düşük teklif veremezsiniz. (" + this.state.sale.firstPrice + "₺)");
        this.setState({
          bid: ""
        });
        return;
      }

      if (this.state.bid < this.state.maxBid.amount) {
        this.showFade("En yüksek tekliften düşük teklif veremezsiniz. (" + this.state.maxBid.amount + "₺)");
        return;
      }

      if (this.state.bid == this.state.maxBid.amount) {
        this.showFade(this.state.bid + "₺ en yüksek teklif, aynı teklifi vermezsiniz.");
        return;
      }

      socket.emit('new bid', {
        saleId: this.state.sale._id,
        bid: {
          amount: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default()(this.state.bid),
          bidder: this.state.user.email
        }
      });
    }
  }, {
    key: "showFade",
    value: function showFade(message) {
      var _this3 = this;

      this.setState({
        biddingFade: {
          message: message,
          "in": true
        }
      });
      setInterval(function () {
        _this3.setState({
          biddingFade: {
            message: "",
            "in": false
          }
        });
      }, 60000);
    }
  }, {
    key: "getUser",
    value: function getUser(token) {
      var _this4 = this;

      var url = apiConfig.serverUrl + '/user/get';
      axios__WEBPACK_IMPORTED_MODULE_19___default.a.post(url, {}, {
        headers: {
          authorization: token
        }
      }).then(function (response) {
        _this4.setState({
          user: response.data.user
        });
      })["catch"](function (error) {
        console.log(error);
      }.bind(this));
    }
  }, {
    key: "getSale",
    value: function getSale(id) {
      var _this5 = this;

      var url = apiConfig.serverUrl + '/sale/' + id;
      axios__WEBPACK_IMPORTED_MODULE_19___default.a.get(url).then(function (response) {
        var maxBid = response.data.sale.bids.length === 0 ? {
          bidder: "",
          amount: 0
        } : response.data.sale.bids.reduce(function (a, b) {
          return a.amount > b.amount ? a : b;
        });
        var sale = response.data.sale;
        sale.isActive = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default()() < sale.endDate;

        _this5.setState({
          sale: sale,
          maxBid: maxBid
        });
      })["catch"](function (error) {
        console.log(error); //if(!error.response) Router.push('/index');
        //if(error.response.status === 404) Router.push('/index');
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var loggedIn = this.state.loggedIn;
      var userEmail = this.state.user ? this.state.user.email : "";
      var images = this.state.sale.images;
      var items = [];
      var i;

      for (i in images) {
        items.push({
          src: apiConfig.serverUrl + '/images/products/' + images[i],
          altText: this.state.sale.title,
          caption: this.state.sale.title
        });
      }

      var next = function next() {
        if (_this6.state.animating) return;
        var nextIndex = _this6.state.activeIndex === items.length - 1 ? 0 : _this6.state.activeIndex + 1;

        _this6.setState({
          activeIndex: nextIndex
        });
      };

      var previous = function previous() {
        if (_this6.state.animating) return;
        var nextIndex = _this6.state.activeIndex === 0 ? items.length - 1 : _this6.state.activeIndex - 1;

        _this6.setState({
          activeIndex: nextIndex
        });
      };

      var goToIndex = function goToIndex(newIndex) {
        if (_this6.state.animating) return;

        _this6.setState({
          activeIndex: newIndex
        });
      };

      var slides = items.map(function (item) {
        return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_15__["CarouselItem"], {
          className: "text-center",
          onExiting: function onExiting() {
            return _this6.setState({
              animating: true
            });
          },
          onExited: function onExited() {
            return _this6.setState({
              animating: false
            });
          },
          key: item.src,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202
          },
          __self: this
        }, __jsx("img", {
          style: {
            maxHeight: '300px'
          },
          src: item.src,
          alt: item.altText,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 207
          },
          __self: this
        }));
      });
      var date = new Date(this.state.sale.endDate);
      var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      };
      var endDate = this.state.sale.endDate === 0 ? "-" : date.toLocaleDateString('tr-TR', options);
      return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_12__["default"], {
        page: "home",
        user: this.state.user,
        loggedIn: this.state.loggedIn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, __jsx("div", {
        className: "container bg-white",
        style: {
          padding: '3%',
          marginTop: '3%',
          boxShadow: '0px 10px 5px 0px #ccc'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, " ", this.state.sale.title, " ", userEmail === this.state.sale.owner.email ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_15__["Badge"], {
        className: "ml-2",
        color: "dark",
        pill: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, "Sizin ilan\u0131n\u0131z") : "", __jsx("span", {
        className: "float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      })), __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }), __jsx("p", {
        style: {
          fontFamily: 'verdana',
          fontSize: '17px',
          marginBottom: '50px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, this.state.sale.description), __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, __jsx("div", {
        className: "col-md-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_15__["Carousel"], {
        activeIndex: this.state.activeIndex,
        next: next,
        previous: previous,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_15__["CarouselIndicators"], {
        items: items,
        activeIndex: this.state.activeIndex,
        onClickHandler: goToIndex,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }), slides, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_15__["CarouselControl"], {
        direction: "prev",
        directionText: "Previous",
        onClickHandler: previous,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_15__["CarouselControl"], {
        direction: "next",
        directionText: "Next",
        onClickHandler: next,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }))), __jsx("div", {
        className: "col-md-4 pt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, __jsx(_components_Bidding__WEBPACK_IMPORTED_MODULE_13__["default"], {
        loggedIn: loggedIn,
        saleOwner: this.state.sale.owner.email === this.state.user.email,
        finishedSale: !this.state.sale.isActive,
        maxBidder: this.state.maxBid.bidder === this.state.user.email,
        bid: this.state.bid,
        biddingFade: this.state.biddingFade,
        endDate: this.state.sale.endDate,
        maxBid: this.state.maxBid,
        handleInputChange: this.handleInputChange,
        handleKeyDown: this.handleKeyDown,
        handleNewBid: this.handleNewBid,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }), __jsx("h4", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, "En Y\xFCksek Teklif"), loggedIn ? this.state.sale.owner.email === this.state.user.email ? __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }) : "" : "", __jsx("p", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faLiraSign"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }), " ", this.state.maxBid.amount), !this.state.sale.isActive ? "" : !loggedIn ? __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }), __jsx("h5", {
        className: "text-center mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, "Teklif Ver"), __jsx("p", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, "Teklif vermek i\xE7in", __jsx(next_link__WEBPACK_IMPORTED_MODULE_18___default.a, {
        href: '/registration',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }, __jsx("a", {
        className: "text-dark underline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, " kay\u0131t olun")), " veya", __jsx(next_link__WEBPACK_IMPORTED_MODULE_18___default.a, {
        href: '/login',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, __jsx("a", {
        className: "text-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, " giri\u015F yap\u0131n")))) : this.state.maxBid.bidder === this.state.user.email ? __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, "\u015Eu anda en y\xFCksek teklif sizin teklifiniz.")) : this.state.sale.owner.email === this.state.user.email ? "" : __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }, __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }), __jsx("div", {
        className: "text-center justify-content-md-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, __jsx("h5", {
        className: "text-center mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }, "Teklif Ver"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_15__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_15__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_15__["InputGroup"], {
        style: {
          width: '60%',
          marginLeft: '20%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_15__["InputGroupAddon"], {
        addonType: "prepend",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_15__["InputGroupText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, "\u20BA")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_15__["Input"], {
        className: "text-center",
        bgSize: "sm",
        type: "number",
        form: "nanana",
        name: "bid",
        value: this.state.bid,
        onChange: this.handleInputChange,
        onKeyDown: this.handleKeyDown,
        placeholder: "Teklifiniz",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_15__["Fade"], {
        "in": this.state.biddingFade["in"],
        tag: "p",
        className: "mt-3 text-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }, this.state.biddingFade.message)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_15__["Button"], {
        onClick: this.handleNewBid,
        color: "dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }, "G\xF6nder")))), __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      }), !this.state.sale.isActive ? __jsx("p", {
        className: "text-center mt-3 text-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }, "Kapand\u0131") : __jsx("p", {
        className: "text-center mt-3 text-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      }, __jsx(react_countdown_now__WEBPACK_IMPORTED_MODULE_22__["default"], {
        date: this.state.sale.endDate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      })))), __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, __jsx("div", {
        className: "col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }, __jsx("p", {
        className: "mb-4 mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faUser"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }), " ", __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }, "Sat\u0131c\u0131: "), this.state.sale.owner.nameSurname), __jsx("p", {
        className: "mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faMoneyBill"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }), " ", __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }, "Ba\u015Flang\u0131\xE7 Fiyat\u0131: "), this.state.sale.firstPrice, "\u20BA")), __jsx("div", {
        className: "col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, __jsx("p", {
        className: "mb-4 mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faUsers"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }), " ", __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }, "Teklif say\u0131s\u0131: "), this.state.sale.bids.length), __jsx("p", {
        className: "mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faThumbsUp"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        },
        __self: this
      }), " ", __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        },
        __self: this
      }, "Durum: "), this.state.sale.state)), __jsx("div", {
        className: "col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      }, __jsx("p", {
        className: "mb-4 mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faCalendarAlt"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }), " ", __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }, "Kapan\u0131\u015F: "), endDate), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faMapMarkerAlt"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }), " ", __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }, "Konum: "), this.state.sale.city, ", ", this.state.sale.district)))));
    }
  }]);

  return AuctionDetail;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

AuctionDetail.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var id, token;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            token = Object(_utils_auth__WEBPACK_IMPORTED_MODULE_20__["getToken"])(context);
            return _context.abrupt("return", {
              id: id,
              token: token
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

/* harmony default export */ __webpack_exports__["default"] = (AuctionDetail);

/***/ })

})
//# sourceMappingURL=[id].js.61d9b9a3894f001d7974.hot-update.js.map