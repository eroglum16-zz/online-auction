webpackHotUpdate("static/development/pages/a/[id].js",{

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
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../utils/auth */ "./utils/auth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_countdown_now__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-countdown-now */ "./node_modules/react-countdown-now/dist/index.es.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_22__);











var _jsxFileName = "/Users/mert/Desktop/I\u0307TU\u0308/Fall 2019/Bitirme/Project/pages/a/[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;












var apiConfig = __webpack_require__(/*! ../../api-config */ "./api-config.js");

var defaults = __webpack_require__(/*! ../../utils/defaults */ "./utils/defaults.js");


var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_22___default()(apiConfig.serverUrl);

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
      axios__WEBPACK_IMPORTED_MODULE_18___default.a.post(url, {}, {
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
      axios__WEBPACK_IMPORTED_MODULE_18___default.a.get(url).then(function (response) {
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
        return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["CarouselItem"], {
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
            lineNumber: 201
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
            lineNumber: 206
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
          lineNumber: 216
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
          lineNumber: 217
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, " ", this.state.sale.title, " ", userEmail === this.state.sale.owner.email ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Badge"], {
        className: "ml-2",
        color: "dark",
        pill: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, "Sizin ilan\u0131n\u0131z") : "", __jsx("span", {
        className: "float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      })), __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
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
          lineNumber: 226
        },
        __self: this
      }, this.state.sale.description), __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, __jsx("div", {
        className: "col-md-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Carousel"], {
        activeIndex: this.state.activeIndex,
        next: next,
        previous: previous,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["CarouselIndicators"], {
        items: items,
        activeIndex: this.state.activeIndex,
        onClickHandler: goToIndex,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }), slides, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["CarouselControl"], {
        direction: "prev",
        directionText: "Previous",
        onClickHandler: previous,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["CarouselControl"], {
        direction: "next",
        directionText: "Next",
        onClickHandler: next,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }))), __jsx("div", {
        className: "col-md-4 pt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, __jsx("h4", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, "En Y\xFCksek Teklif"), loggedIn ? this.state.sale.owner.email === this.state.user.email ? __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }) : "" : "", __jsx("p", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faLiraSign"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }), " ", this.state.maxBid.amount), this.state.sale.isActive ? "" : !loggedIn ? __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }), __jsx("h5", {
        className: "text-center mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, "Teklif Ver"), __jsx("p", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, "Teklif vermek i\xE7in", __jsx(next_link__WEBPACK_IMPORTED_MODULE_17___default.a, {
        href: '/registration',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, __jsx("a", {
        className: "text-dark underline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, " kay\u0131t olun")), " veya", __jsx(next_link__WEBPACK_IMPORTED_MODULE_17___default.a, {
        href: '/login',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, __jsx("a", {
        className: "text-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, " giri\u015F yap\u0131n")))) : this.state.maxBid.bidder === this.state.user.email ? __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, "\u015Eu anda en y\xFCksek teklif sizin teklifiniz.")) : this.state.sale.owner.email === this.state.user.email ? "" : __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }), __jsx("div", {
        className: "text-center justify-content-md-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, __jsx("h5", {
        className: "text-center mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, "Teklif Ver"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["InputGroup"], {
        style: {
          width: '60%',
          marginLeft: '20%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["InputGroupAddon"], {
        addonType: "prepend",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["InputGroupText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }, "\u20BA")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Input"], {
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
          lineNumber: 297
        },
        __self: this
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Fade"], {
        "in": this.state.biddingFade["in"],
        tag: "p",
        className: "mt-3 text-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, this.state.biddingFade.message)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Button"], {
        onClick: this.handleNewBid,
        color: "dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }, "G\xF6nder")))), __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }), this.state.sale.isActive ? __jsx("p", {
        className: "text-center mt-3 text-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }, "Kapand\u0131") : __jsx("p", {
        className: "text-center mt-3 text-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, __jsx(react_countdown_now__WEBPACK_IMPORTED_MODULE_21__["default"], {
        date: this.state.sale.endDate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      })))), __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }, __jsx("div", {
        className: "col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, __jsx("p", {
        className: "mb-4 mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faUser"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        },
        __self: this
      }), " ", __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        },
        __self: this
      }, "Sat\u0131c\u0131: "), this.state.sale.owner.nameSurname), __jsx("p", {
        className: "mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faMoneyBill"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }), " ", __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }, "Ba\u015Flang\u0131\xE7 Fiyat\u0131: "), this.state.sale.firstPrice, "\u20BA")), __jsx("div", {
        className: "col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }, __jsx("p", {
        className: "mb-4 mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faUsers"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }), " ", __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, "Teklif say\u0131s\u0131: "), this.state.sale.bids.length), __jsx("p", {
        className: "mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faThumbsUp"],
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
      }, "Durum: "), this.state.sale.state)), __jsx("div", {
        className: "col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }, __jsx("p", {
        className: "mb-4 mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faCalendarAlt"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }), " ", __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }, "Kapan\u0131\u015F: "), endDate), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faMapMarkerAlt"],
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
            token = Object(_utils_auth__WEBPACK_IMPORTED_MODULE_19__["getToken"])(context);
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
//# sourceMappingURL=[id].js.b1a426314705ef223fc6.hot-update.js.map