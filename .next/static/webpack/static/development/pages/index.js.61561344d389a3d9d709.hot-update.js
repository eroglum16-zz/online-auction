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





var apiConfig = __webpack_require__(/*! ../api-config */ "./api-config.js");

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
      return __jsx("div", {
        className: "col-md-3 mb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        style: {
          boxShadow: '0px 10px 5px 0px #ccc',
          height: '400px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: '/a/[id]',
        as: "/a/" + this.props.sale._id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, __jsx("a", {
        style: {
          color: 'inherit',
          textDecoration: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardImg"], {
        top: true,
        width: "100%",
        src: apiConfig.serverUrl + '/images/products/' + this.props.sale.images[0],
        alt: this.props.sale.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: '/a/[id]',
        as: "/a/" + this.props.sale._id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("a", {
        style: {
          color: 'inherit',
          textDecoration: 'none'
        },
        className: "jsx-1760715275",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardTitle"], {
        style: {
          fontWeight: 'bold'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, " ", this.props.sale.title, " "))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardSubtitle"], {
        style: {
          fontSize: '14px'
        },
        className: "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, " ", this.props.sale.owner.nameSurname, " "), __jsx("hr", {
        className: "jsx-1760715275",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), __jsx("span", {
        style: {
          fontSize: '16px'
        },
        className: "jsx-1760715275",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faMapMarkerAlt"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), " ", this.props.sale.city, ", ", this.props.sale.district), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1760715275",
        __self: this
      }, "h1.jsx-1760715275,a.jsx-1760715275{font-family:'Arial';}ul.jsx-1760715275{padding:0;}li.jsx-1760715275{list-style:none;margin:5px 0;}a.jsx-1760715275{-webkit-text-decoration:none;text-decoration:none;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXJ0L0Rlc2t0b3AvScyHVFXMiC9GYWxsIDIwMTkvQml0aXJtZS9Qcm9qZWN0L2NvbXBvbmVudHMvSXRlbUNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkI0QyxBQUkyQyxBQUlWLEFBSU0sQUFLSyxVQVJ2QixNQUllLElBUmYsU0FTQSxxQkFJYSxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9tZXJ0L0Rlc2t0b3AvScyHVFXMiC9GYWxsIDIwMTkvQml0aXJtZS9Qcm9qZWN0L2NvbXBvbmVudHMvSXRlbUNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0J1dHRvbiwgQ2FyZCwgQ2FyZEJvZHksIENhcmRJbWcsIENhcmRTdWJ0aXRsZSwgQ2FyZFRpdGxlfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuaW1wb3J0IHtmYU1hcE1hcmtlckFsdH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xuY29uc3QgYXBpQ29uZmlnID0gcmVxdWlyZSgnLi4vYXBpLWNvbmZpZycpO1xuXG5jbGFzcyBJdGVtQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zIG1iLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkICBzdHlsZT17e2JveFNoYWRvdzogJzBweCAxMHB4IDVweCAwcHggI2NjYycsIGhlaWdodDogJzQwMHB4J319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvYS9baWRdJ30gYXM9e2AvYS9gICsgdGhpcy5wcm9wcy5zYWxlLl9pZH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17e2NvbG9yOidpbmhlcml0JywgdGV4dERlY29yYXRpb246J25vbmUnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEltZyB0b3Agd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YXBpQ29uZmlnLnNlcnZlclVybCArICcvaW1hZ2VzL3Byb2R1Y3RzLycgKyB0aGlzLnByb3BzLnNhbGUuaW1hZ2VzWzBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXt0aGlzLnByb3BzLnNhbGUudGl0bGV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL2EvW2lkXSd9IGFzPXtgL2EvYCArIHRoaXMucHJvcHMuc2FsZS5faWR9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7Y29sb3I6J2luaGVyaXQnLCB0ZXh0RGVjb3JhdGlvbjonbm9uZSd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZCd9fT4ge3RoaXMucHJvcHMuc2FsZS50aXRsZX0gPC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRTdWJ0aXRsZSBzdHlsZT17e2ZvbnRTaXplOicxNHB4J319IGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj4ge3RoaXMucHJvcHMuc2FsZS5vd25lci5uYW1lU3VybmFtZX0gPC9DYXJkU3VidGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6JzE2cHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTWFwTWFya2VyQWx0fSB3aWR0aD1cIjE2XCIgLz4ge3RoaXMucHJvcHMuc2FsZS5jaXR5fSwge3RoaXMucHJvcHMuc2FsZS5kaXN0cmljdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIGgxLFxuICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSXRlbUNhcmQ7Il19 */\n/*@ sourceURL=/Users/mert/Desktop/I\u0307TU\u0308/Fall 2019/Bitirme/Project/components/ItemCard.js */"))));
    }
  }]);

  return ItemCard;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ItemCard);

/***/ })

})
//# sourceMappingURL=index.js.61561344d389a3d9d709.hot-update.js.map