webpackHotUpdate("static/development/pages/s/[id].js",{

/***/ "./utils/api.js":
/*!**********************!*\
  !*** ./utils/api.js ***!
  \**********************/
/*! exports provided: getSale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSale", function() { return getSale; });
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var _this = undefined;



var apiConfig = __webpack_require__(/*! ../api-config */ "./api-config.js");

var getSale = function getSale(saleId) {
  var url = apiConfig.serverUrl + '/sale/' + saleId;
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url).then(function (response) {
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
    sale.isActive = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()() < sale.endDate;

    _this.setState({
      sale: sale,
      maxBid: maxBid
    });
  })["catch"](function (error) {
    console.log(error);
  });
};

/***/ })

})
//# sourceMappingURL=[id].js.5661a22931c3731a27f1.hot-update.js.map