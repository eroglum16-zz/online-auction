webpackHotUpdate("static/development/pages/s/[id].js",{

/***/ "./components/ChatBox.js":
/*!*******************************!*\
  !*** ./components/ChatBox.js ***!
  \*******************************/
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
/* harmony import */ var react_chat_elements_dist_main_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-chat-elements/dist/main.css */ "./node_modules/react-chat-elements/dist/main.css");
/* harmony import */ var react_chat_elements_dist_main_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_chat_elements_dist_main_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_chat_elements__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-chat-elements */ "./node_modules/react-chat-elements/dist/main.js");
/* harmony import */ var react_chat_elements__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_chat_elements__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _api_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../api-config */ "./api-config.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_14__);






var _jsxFileName = "/Users/mert/Desktop/I\u0307TU\u0308/Fall 2019/Bitirme/Project/components/ChatBox.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;









var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_14___default()(apiConfig.serverUrl);

var ChatBox =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ChatBox, _React$Component);

  function ChatBox(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChatBox);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ChatBox).call(this, props));
    _this.state = {
      message: '',
      messages: []
    };
    _this.handleInputChange = _this.handleInputChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleEnter = _this.handleEnter.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleSendClick = _this.handleSendClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ChatBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.getMessages();

      if (this.state.messages.length === 0) {
        var intervalId;
        intervalId = setInterval(function () {
          _this2.getMessages();

          if (_this2.state.messages.length !== 0) {
            clearInterval(intervalId);
          }
        }, 500);
      }

      socket.on('new message on ' + this.props.saleId, function (msg) {
        if (msg.receiverEmail === _this2.props.userEmail) _this2.getMessages();
      });
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var target = event.target;
      var value = target.value;
      this.setState({
        message: value
      });
    }
  }, {
    key: "handleEnter",
    value: function handleEnter(event) {
      if (event.key === 'Enter') {
        this.sendMessage();
      }
    }
  }, {
    key: "handleSendClick",
    value: function handleSendClick() {
      this.sendMessage();
    }
  }, {
    key: "sendMessage",
    value: function sendMessage() {
      var _this3 = this;

      var url = _api_config__WEBPACK_IMPORTED_MODULE_12__["serverUrl"] + '/message/new';
      axios__WEBPACK_IMPORTED_MODULE_13___default.a.post(url, {
        text: this.state.message,
        receiverEmail: this.props.receiverEmail,
        saleId: this.props.saleId
      }, {
        headers: {
          authorization: this.props.userToken
        }
      }).then(function (response) {
        console.log(response.data);

        _this3.setState({
          message: ''
        });

        socket.emit('new message', {
          relatedSale: _this3.props.saleId,
          receiverEmail: _this3.props.receiverEmail
        });

        _this3.refs.message.clear();

        _this3.getMessages();
      })["catch"](function (error) {
        throw error;
      });
    }
  }, {
    key: "getMessages",
    value: function getMessages() {
      var _this4 = this;

      console.log("Sale ID: " + this.props.saleId);
      console.log("Token: " + this.props.userToken);
      var url = _api_config__WEBPACK_IMPORTED_MODULE_12__["serverUrl"] + '/messages/' + this.props.saleId;
      axios__WEBPACK_IMPORTED_MODULE_13___default.a.post(url, {}, {
        headers: {
          authorization: this.props.userToken
        }
      }).then(function (response) {
        _this4.setState({
          messages: response.data.messages
        });
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var dataSource = [];
      var messages = this.state.messages;
      var i;

      for (i in messages) {
        dataSource.push({
          position: messages[i].receiverEmail === this.props.receiverEmail ? 'right' : 'left',
          type: 'text',
          className: 'mb-2',
          text: messages[i].messageText,
          date: messages[i].createdAt
        });
      }

      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardHeader"], {
        className: "bg-dark text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, this.props.buyer, __jsx("span", {
        className: "float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, " ", this.props.salePrice, "\u20BA ")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
        style: {
          minHeight: '400px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, __jsx(react_chat_elements__WEBPACK_IMPORTED_MODULE_11__["MessageList"], {
        className: "message-list",
        lockable: true,
        toBottomHeight: '100%',
        dataSource: dataSource,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardFooter"], {
        className: "bg-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, __jsx(react_chat_elements__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        placeholder: "Mesaj\u0131n\u0131z...",
        className: "pl-2",
        multiline: false,
        ref: "message",
        value: this.state.message,
        onChange: this.handleInputChange,
        onKeyDown: this.handleEnter,
        rightButtons: __jsx(react_chat_elements__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          color: "white",
          className: "bg-dark col-2",
          onClick: this.handleSendClick,
          text: __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faPaperPlane"],
            width: "16",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 139
            },
            __self: this
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }))));
    }
  }]);

  return ChatBox;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ChatBox);

/***/ }),

/***/ "./pages/s/[id].js":
/*!*************************!*\
  !*** ./pages/s/[id].js ***!
  \*************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_ChatBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/ChatBox */ "./components/ChatBox.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/auth */ "./utils/auth.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.js");
/* harmony import */ var _utils_miscellaneous__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utils/miscellaneous */ "./utils/miscellaneous.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_18__);







var _jsxFileName = "/Users/mert/Desktop/I\u0307TU\u0308/Fall 2019/Bitirme/Project/pages/s/[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;









var defaults = __webpack_require__(/*! ../../utils/defaults */ "./utils/defaults.js");

var apiConfig = __webpack_require__(/*! ../../api-config */ "./api-config.js");





var Sale =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Sale, _React$Component);

  function Sale(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Sale);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Sale).call(this, props));
    var token = _this.props.token;
    _this.state = {
      loggedIn: !!token,
      user: {},
      sale: defaults.defaultSale,
      maxBid: {
        amount: 0,
        bidder: {
          email: "",
          nameSurname: ""
        }
      }
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Sale, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Object(_utils_auth__WEBPACK_IMPORTED_MODULE_15__["getUser"])(this.props.token).then(function (user) {
        _this2.setState({
          user: user
        });
      });
      Object(_utils_api__WEBPACK_IMPORTED_MODULE_16__["getSale"])(this.props.id).then(function (response) {
        if (!response) {
          next_router__WEBPACK_IMPORTED_MODULE_18___default.a.push('/sales');
          return;
        }

        _this2.setState({
          sale: response.sale,
          maxBid: response.maxBid
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var buyer = this.state.maxBid.bidder.nameSurname;
      var salePrice = this.state.maxBid.amount;
      return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        page: "me",
        user: this.state.user,
        loggedIn: this.state.loggedIn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
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
          lineNumber: 55
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("div", {
        className: "col-md-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), __jsx("div", {
        className: "col-md-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx("div", {
        className: "mb-3",
        style: {
          maxHeight: '400px',
          overflow: 'hidden'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx("img", {
        src: apiConfig.productImageBase + this.state.sale.images[0],
        width: "100%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      })), __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, " ", this.state.sale.title, " "), __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), __jsx("div", {
        className: "row mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx("p", {
        className: "col-md-6 ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faUser"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), " ", __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Al\u0131c\u0131: "), " ", buyer), __jsx("p", {
        className: "col-md-6 ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faMoneyBill"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), " ", __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Sat\u0131\u015F Fiyat\u0131: "), " ", salePrice, "\u20BA"), __jsx("p", {
        className: "col-md-12 mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faCalendarAlt"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), " ", __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Kapan\u0131\u015F Tarihi: "), Object(_utils_miscellaneous__WEBPACK_IMPORTED_MODULE_17__["toTimeString"])(this.state.sale.endDate)))), __jsx("div", {
        className: "col-md-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), __jsx("div", {
        className: "col-md-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx(_components_ChatBox__WEBPACK_IMPORTED_MODULE_9__["default"], {
        buyer: buyer,
        saleId: this.state.sale._id,
        salePrice: salePrice,
        userToken: this.props.token,
        userEmail: this.state.user.email,
        receiverEmail: this.state.maxBid.bidder.email,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      })))));
    }
  }]);

  return Sale;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

Sale.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var id, token;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = ctx.query.id; // Check user's session

            token = Object(_utils_auth__WEBPACK_IMPORTED_MODULE_15__["auth"])(ctx);
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

/* harmony default export */ __webpack_exports__["default"] = (Sale);

/***/ })

})
//# sourceMappingURL=[id].js.f81c0db60ff709a886bc.hot-update.js.map