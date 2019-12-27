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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_chat_elements_dist_main_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-chat-elements/dist/main.css */ "./node_modules/react-chat-elements/dist/main.css");
/* harmony import */ var react_chat_elements_dist_main_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_chat_elements_dist_main_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_chat_elements__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-chat-elements */ "./node_modules/react-chat-elements/dist/main.js");
/* harmony import */ var react_chat_elements__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_chat_elements__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "/Users/mert/Desktop/I\u0307TU\u0308/Fall 2019/Bitirme/Project/components/ChatBox.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



 // RCE CSS

 // MessageBox component



var ChatBox =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ChatBox, _React$Component);

  function ChatBox() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChatBox);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ChatBox).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ChatBox, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Gamze G\xFClbahar"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
        style: {
          minHeight: '300px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx(react_chat_elements__WEBPACK_IMPORTED_MODULE_10__["MessageList"], {
        className: "message-list",
        lockable: true,
        toBottomHeight: '100%',
        dataSource: [{
          position: 'right',
          type: 'text',
          text: 'Merhaba ürünü ne zaman alabilirsiniz? ',
          date: new Date() - 100000
        }, {
          position: 'left',
          type: 'text',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
          date: new Date() - 10000
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardFooter"], {
        className: "bg-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx(react_chat_elements__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        placeholder: "Mesaj\u0131n\u0131z...",
        multiline: false,
        rightButtons: __jsx(react_chat_elements__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          color: "white",
          className: "bg-dark col-3",
          text: __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faPaperPlane"],
            width: "16",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }))));
    }
  }]);

  return ChatBox;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ChatBox);

/***/ })

})
//# sourceMappingURL=[id].js.70a9366f76fea4e56920.hot-update.js.map