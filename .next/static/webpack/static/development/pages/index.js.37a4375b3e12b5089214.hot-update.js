webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ItemCard.js":
/*!********************************!*\
  !*** ./components/ItemCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");






var _jsxFileName = "/Users/mert/Desktop/I\u0307TU\u0308/Fall 2019/Bitirme/Project/components/ItemCard.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;





var apiConfig = __webpack_require__(/*! ../api-config */ "./api-config.js");

var ItemCard =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ItemCard, _React$Component);

  function ItemCard() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ItemCard);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ItemCard).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ItemCard, [{
    key: "render",
    value: function render() {
      var expiredSale = this.props.sale.endDate <= _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()();

      return __jsx("div", {
        className: "col-md-3 mb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        style: {
          boxShadow: '0px 10px 5px 0px #ccc'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: '/a/[id]',
        as: "/a/" + this.props.sale._id,
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
      }, __jsx("div", {
        style: {
          height: '230px',
          overflow: 'hidden'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardImg"], {
        top: true,
        style: {
          maxWidth: '100%'
        },
        src: apiConfig.serverUrl + '/images/products/' + this.props.sale.images[0],
        alt: this.props.sale.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: '/a/[id]',
        as: "/a/" + this.props.sale._id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
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
          lineNumber: 24
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardTitle"], {
        style: {
          fontWeight: 'bold'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, " ", this.props.sale.title, " "))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardSubtitle"], {
        style: {
          fontSize: '14px'
        },
        className: "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, " ", this.props.sale.owner.nameSurname, " "), __jsx("span", {
        style: {
          fontSize: '16px'
        },
        className: "jsx-1760715275",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faMapMarkerAlt"],
        width: "16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), " ", this.props.sale.city, ", ", this.props.sale.district), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1760715275",
        __self: this
      }, "h1.jsx-1760715275,a.jsx-1760715275{font-family:'Arial';}ul.jsx-1760715275{padding:0;}li.jsx-1760715275{list-style:none;margin:5px 0;}a.jsx-1760715275{-webkit-text-decoration:none;text-decoration:none;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXJ0L0Rlc2t0b3AvScyHVFXMiC9GYWxsIDIwMTkvQml0aXJtZS9Qcm9qZWN0L2NvbXBvbmVudHMvSXRlbUNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0M0QyxBQUkyQyxBQUlWLEFBSU0sQUFLSyxVQVJ2QixNQUllLElBUmYsU0FTQSxxQkFJYSxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9tZXJ0L0Rlc2t0b3AvScyHVFXMiC9GYWxsIDIwMTkvQml0aXJtZS9Qcm9qZWN0L2NvbXBvbmVudHMvSXRlbUNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0J1dHRvbiwgQ2FyZCwgQ2FyZEJvZHksIENhcmRJbWcsIENhcmRTdWJ0aXRsZSwgQ2FyZFRpdGxlLCBCYWRnZX0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcbmltcG9ydCB7ZmFNYXBNYXJrZXJBbHR9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcbmNvbnN0IGFwaUNvbmZpZyA9IHJlcXVpcmUoJy4uL2FwaS1jb25maWcnKTtcblxuY2xhc3MgSXRlbUNhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZXhwaXJlZFNhbGUgPSB0aGlzLnByb3BzLnNhbGUuZW5kRGF0ZSA8PSBEYXRlLm5vdygpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMyBtYi01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCAgc3R5bGU9e3tib3hTaGFkb3c6ICcwcHggMTBweCA1cHggMHB4ICNjY2MnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9hL1tpZF0nfSBhcz17YC9hL2AgKyB0aGlzLnByb3BzLnNhbGUuX2lkfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7Y29sb3I6J2luaGVyaXQnLCB0ZXh0RGVjb3JhdGlvbjonbm9uZSd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6ICcyMzBweCcsIG92ZXJmbG93OidoaWRkZW4nfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRJbWcgdG9wIHN0eWxlPXt7bWF4V2lkdGg6ICcxMDAlJ319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXthcGlDb25maWcuc2VydmVyVXJsICsgJy9pbWFnZXMvcHJvZHVjdHMvJyArIHRoaXMucHJvcHMuc2FsZS5pbWFnZXNbMF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXt0aGlzLnByb3BzLnNhbGUudGl0bGV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvYS9baWRdJ30gYXM9e2AvYS9gICsgdGhpcy5wcm9wcy5zYWxlLl9pZH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3tjb2xvcjonaW5oZXJpdCcsIHRleHREZWNvcmF0aW9uOidub25lJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGUgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkJ319PiB7dGhpcy5wcm9wcy5zYWxlLnRpdGxlfSA8L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFN1YnRpdGxlIHN0eWxlPXt7Zm9udFNpemU6JzE0cHgnfX0gY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPiB7dGhpcy5wcm9wcy5zYWxlLm93bmVyLm5hbWVTdXJuYW1lfSA8L0NhcmRTdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6JzE2cHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTWFwTWFya2VyQWx0fSB3aWR0aD1cIjE2XCIgLz4ge3RoaXMucHJvcHMuc2FsZS5jaXR5fSwge3RoaXMucHJvcHMuc2FsZS5kaXN0cmljdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIGgxLFxuICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSXRlbUNhcmQ7Il19 */\n/*@ sourceURL=/Users/mert/Desktop/I\u0307TU\u0308/Fall 2019/Bitirme/Project/components/ItemCard.js */"))));
    }
  }]);

  return ItemCard;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ItemCard);

/***/ })

})
//# sourceMappingURL=index.js.37a4375b3e12b5089214.hot-update.js.map