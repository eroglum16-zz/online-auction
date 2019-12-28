webpackHotUpdate("static/development/pages/s/[id].js",{

/***/ "./components/ChatBox.js":
/*!*******************************!*\
  !*** ./components/ChatBox.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
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






var _jsxFileName = "/Users/mert/Desktop/I\u0307TU\u0308/Fall 2019/Bitirme/Project/components/ChatBox.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;



 // RCE CSS

 // MessageBox component



var ChatBox =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ChatBox, _React$Component);

  function ChatBox() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ChatBox);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ChatBox).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ChatBox, [{
    key: "render",
    value: function render() {
      var _ref;

      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardHeader"], {
        className: "bg-dark text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, this.props.buyer, __jsx("span", {
        className: "float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, " ", this.props.salePrice, "\u20BA ")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
        style: {
          minHeight: '400px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx(react_chat_elements__WEBPACK_IMPORTED_MODULE_11__["MessageList"], {
        className: "message-list",
        lockable: true,
        toBottomHeight: '100%',
        dataSource: [(_ref = {
          position: 'right',
          className: 'bg-dark text-white',
          type: 'text'
        }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "className", 'mb-2'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "text", 'Merhaba ürünü ne zaman alabilirsiniz? '), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "date", new Date() - 100000), _ref), {
          position: 'left',
          type: 'text',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
          date: new Date() - 10000
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardFooter"], {
        className: "bg-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx(react_chat_elements__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        placeholder: "Mesaj\u0131n\u0131z...",
        className: "pl-2",
        multiline: false,
        rightButtons: __jsx(react_chat_elements__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          color: "white",
          className: "bg-dark col-2",
          text: __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faPaperPlane"],
            width: "16",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }))));
    }
  }]);

  return ChatBox;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ChatBox);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

})
//# sourceMappingURL=[id].js.229e85499db8ab253063.hot-update.js.map