webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ItemCard.js":
/*!********************************!*\
  !*** ./components/ItemCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");





var _jsxFileName = "/Users/mert/Desktop/I\u0307TU\u0308/Fall 2019/Bitirme/Project/components/ItemCard.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;





var ItemCard =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ItemCard, _React$Component);

  function ItemCard() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ItemCard);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ItemCard).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ItemCard, [{
    key: "render",
    value: function render() {
      var itemName = this.props.name;
      var itemDescription = this.props.description;
      return __jsx("div", {
        className: "col-md-3 mb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: '/a/[id]',
        as: "/a/1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx("a", {
        style: {
          color: 'inherit',
          textDecoration: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        style: {
          boxShadow: '0px 10px 5px 0px #ccc'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardImg"], {
        top: true,
        width: "100%",
        src: this.props.image,
        alt: "Card image cap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardTitle"], {
        style: {
          fontWeight: 'bold'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, " ", itemName, " "), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardSubtitle"], {
        style: {
          fontSize: '14px'
        },
        className: "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, " Mert Ero\u011Flu "), __jsx("hr", {
        className: "jsx-1760715275",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), __jsx("span", {
        style: {
          fontSize: '16px'
        },
        className: "jsx-1760715275",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, " ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faMapMarkerAlt"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), " \u0130stanbul, Sar\u0131yer"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1760715275",
        __self: this
      }, "h1.jsx-1760715275,a.jsx-1760715275{font-family:'Arial';}ul.jsx-1760715275{padding:0;}li.jsx-1760715275{list-style:none;margin:5px 0;}a.jsx-1760715275{-webkit-text-decoration:none;text-decoration:none;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXJ0L0Rlc2t0b3AvScyHVFXMiC9GYWxsIDIwMTkvQml0aXJtZS9Qcm9qZWN0L2NvbXBvbmVudHMvSXRlbUNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUI0QyxBQUkyQyxBQUlWLEFBSU0sQUFLSyxVQVJ2QixNQUllLElBUmYsU0FTQSxxQkFJYSxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9tZXJ0L0Rlc2t0b3AvScyHVFXMiC9GYWxsIDIwMTkvQml0aXJtZS9Qcm9qZWN0L2NvbXBvbmVudHMvSXRlbUNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0J1dHRvbiwgQ2FyZCwgQ2FyZEJvZHksIENhcmRJbWcsIENhcmRTdWJ0aXRsZSwgQ2FyZFRpdGxlfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuaW1wb3J0IHtmYU1hcE1hcmtlckFsdH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xuXG5jbGFzcyBJdGVtQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBpdGVtTmFtZSA9IHRoaXMucHJvcHMubmFtZTtcbiAgICAgICAgbGV0IGl0ZW1EZXNjcmlwdGlvbiA9IHRoaXMucHJvcHMuZGVzY3JpcHRpb247XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTMgbWItNVwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvYS9baWRdJ30gYXM9e2AvYS8xYH0gPlxuICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17e2NvbG9yOidpbmhlcml0JywgdGV4dERlY29yYXRpb246J25vbmUnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17e2JveFNoYWRvdzogJzBweCAxMHB4IDVweCAwcHggI2NjYyd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEltZyB0b3Agd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3RoaXMucHJvcHMuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZSBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGQnfX0+IHtpdGVtTmFtZX0gPC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkU3VidGl0bGUgc3R5bGU9e3tmb250U2l6ZTonMTRweCd9fSBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+IE1lcnQgRXJvxJ9sdSA8L0NhcmRTdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZTonMTZweCd9fT4gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYU1hcE1hcmtlckFsdH0gd2lkdGg9XCIxNlwiIC8+IMSwc3RhbmJ1bCwgU2FyxLF5ZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgaDEsXG4gICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJdGVtQ2FyZDsiXX0= */\n/*@ sourceURL=/Users/mert/Desktop/I\u0307TU\u0308/Fall 2019/Bitirme/Project/components/ItemCard.js */"))))));
    }
  }]);

  return ItemCard;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ItemCard);

/***/ })

})
//# sourceMappingURL=index.js.bc5094528c2f00f05f23.hot-update.js.map