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
/* harmony import */ var _components_Bidding__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Bidding */ "./components/Bidding.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../utils/auth */ "./utils/auth.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-currency-formatter */ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_21__);











var _jsxFileName = "/Users/mert/Desktop/I\u0307TU\u0308/Fall 2019/Bitirme/Project/pages/a/[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;












var apiConfig = __webpack_require__(/*! ../../api-config */ "./api-config.js");

var defaults = __webpack_require__(/*! ../../utils/defaults */ "./utils/defaults.js");

var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_20___default()(apiConfig.serverUrl);

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
        amount: 0,
        bidder: {
          email: "",
          nameSurname: ""
        }
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
      socket.on('bid update on ' + saleId, function () {
        _this2.getSale(saleId);
      });
      console.log("saleId: " + saleId);
      socket.on('sale ' + saleId + ' expired', function () {
        _this2.getSale(saleId);
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
      if (event.key === 'Enter') {
        this.handleNewBid();
        this.getSale(this.state.sale._id);
      }
    }
  }, {
    key: "handleNewBid",
    value: function handleNewBid() {
      if (this.state.bid === "") {
        this.showFade("Önce teklifinizi girin.");
        return;
      }

      if (this.state.bid < this.state.sale.firstPrice) {
        var message = __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, "Ba\u015Flang\u0131\xE7 fiyat\u0131ndan d\xFC\u015F\xFCk teklif veremezsiniz. (", __jsx(react_currency_formatter__WEBPACK_IMPORTED_MODULE_21___default.a, {
          quantity: this.state.sale.firstPrice,
          currency: "TRY",
          pattern: "##,### !",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }), "\u20BA)");

        this.showFade(message);
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
          bidder: this.state.user
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
          bidder: {
            email: "",
            nameSurname: ""
          },
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
        console.log(error);
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
            lineNumber: 212
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
            lineNumber: 217
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
          lineNumber: 227
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
          lineNumber: 228
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, " ", this.state.sale.title, " ", userEmail === this.state.sale.owner.email ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_15__["Badge"], {
        className: "ml-2",
        color: "dark",
        pill: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, "Sizin ilan\u0131n\u0131z") : "", __jsx("span", {
        className: "float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      })), __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
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
          lineNumber: 237
        },
        __self: this
      }, this.state.sale.description), __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, __jsx("div", {
        className: "col-md-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_15__["Carousel"], {
        activeIndex: this.state.activeIndex,
        next: next,
        previous: previous,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_15__["CarouselIndicators"], {
        items: items,
        activeIndex: this.state.activeIndex,
        onClickHandler: goToIndex,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }), slides, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_15__["CarouselControl"], {
        direction: "prev",
        directionText: "Previous",
        onClickHandler: previous,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_15__["CarouselControl"], {
        direction: "next",
        directionText: "Next",
        onClickHandler: next,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }))), __jsx("div", {
        className: "col-md-4 pt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, __jsx(_components_Bidding__WEBPACK_IMPORTED_MODULE_13__["default"], {
        loggedIn: loggedIn,
        saleOwner: loggedIn && this.state.sale.owner.email === this.state.user.email,
        finishedSale: !this.state.sale.isActive,
        maxBidder: loggedIn && this.state.maxBid.bidder.email === this.state.user.email,
        bid: this.state.bid,
        biddingFade: this.state.biddingFade,
        endDate: this.state.sale.endDate,
        maxBid: this.state.maxBid,
        handleInputChange: this.handleInputChange,
        handleKeyDown: this.handleKeyDown,
        handleNewBid: this.handleNewBid,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }))), __jsx("div", {
        className: "row mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, __jsx("div", {
        className: "col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, __jsx("p", {
        className: "mb-4 mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faUser"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }), " ", __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, "Sat\u0131c\u0131: "), this.state.sale.owner.nameSurname), __jsx("p", {
        className: "mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faMoneyBill"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }), " ", __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, "Ba\u015Flang\u0131\xE7 Fiyat\u0131: "), __jsx(react_currency_formatter__WEBPACK_IMPORTED_MODULE_21___default.a, {
        quantity: this.state.sale.firstPrice,
        currency: "TRY",
        pattern: "##,### !",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }))), __jsx("div", {
        className: "col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, __jsx("p", {
        className: "mb-4 mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faUsers"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }), " ", __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, "Teklif say\u0131s\u0131: "), this.state.sale.bids.length), __jsx("p", {
        className: "mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faThumbsUp"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }), " ", __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, "Durum: "), this.state.sale.state)), __jsx("div", {
        className: "col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, __jsx("p", {
        className: "mb-4 mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faCalendarAlt"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }), " ", __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }, "Kapan\u0131\u015F: "), endDate), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faMapMarkerAlt"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }), " ", __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
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
//# sourceMappingURL=[id].js.1ad4403f44be0f5bdfbc.hot-update.js.map