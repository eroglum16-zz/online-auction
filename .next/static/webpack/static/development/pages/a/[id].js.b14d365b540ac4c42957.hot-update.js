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
      var biddingInput;

      if (this.props.finishedSale) {
        biddingInput = "";
      } else if (!this.props.loggedIn) {
        biddingInput = __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, __jsx("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }), __jsx("h5", {
          className: "text-center mb-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }, "Teklif Ver"), __jsx("p", {
          className: "text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, "Teklif vermek i\xE7in", __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: '/registration',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, __jsx("a", {
          className: "text-dark underline",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, " kay\u0131t olun")), " veya", __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: '/login',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, __jsx("a", {
          className: "text-dark",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, " giri\u015F yap\u0131n"))));
      } else if (this.props.maxBidder) {
        biddingInput = __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, __jsx("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }), __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, " \u015Eu anda en y\xFCksek teklif sizin teklifiniz. "));
      }

      biddingInput = !this.props.loggedIn ? biddingInput : __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, " \u015Eu anda en y\xFCksek teklif sizin teklifiniz. "));

      var inputCode = __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), __jsx("div", {
        className: "text-center justify-content-md-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx("h5", {
        className: "text-center mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Teklif Ver"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
        style: {
          width: '60%',
          marginLeft: '20%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroupAddon"], {
        addonType: "prepend",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroupText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
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
          lineNumber: 55
        },
        __self: this
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Fade"], {
        "in": this.props.biddingFade["in"],
        tag: "p",
        className: "mt-3 text-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, this.props.biddingFade.message)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: this.props.handleNewBid,
        color: "dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "G\xF6nder"))));

      biddingInput = this.props.maxBidder ? biddingInput : inputCode;
      biddingInput = this.props.saleOwner ? "" : biddingInput;
      var biddingInfo = this.props.finishedSale ? __jsx("p", {
        className: "text-center mt-3 text-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Kapand\u0131") : __jsx("p", {
        className: "text-center mt-3 text-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx(react_countdown_now__WEBPACK_IMPORTED_MODULE_11__["default"], {
        date: this.props.endDate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }));
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx("h4", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "En Y\xFCksek Teklif"), horizontalRule, __jsx("p", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faLiraSign"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), " ", this.props.maxBid.amount), biddingInput, __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }), biddingInfo);
    }
  }]);

  return Bidding;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Bidding);

/***/ })

})
//# sourceMappingURL=[id].js.b14d365b540ac4c42957.hot-update.js.map