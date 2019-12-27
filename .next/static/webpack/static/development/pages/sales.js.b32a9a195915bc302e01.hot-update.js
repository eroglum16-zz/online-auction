webpackHotUpdate("static/development/pages/sales.js",{

/***/ "./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/*! exports provided: login, auth, guest, getToken, getUser, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guest", function() { return guest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/index.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var _node_modules_js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);






var apiConfig = __webpack_require__(/*! ../api-config */ "./api-config.js");

var login = function login(_ref) {
  var token = _ref.token;
  _node_modules_js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('token', token, {
    expires: 1
  });
  next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/index');
};
var auth = function auth(ctx) {
  var _nextCookie = next_cookies__WEBPACK_IMPORTED_MODULE_2___default()(ctx),
      token = _nextCookie.token;

  if (ctx.req && !token) {
    ctx.res.writeHead(302, {
      Location: '/login'
    });
    ctx.res.end();
    return;
  }

  if (!token) {
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/login');
  }

  return token;
};
var guest = function guest(ctx) {
  var _nextCookie2 = next_cookies__WEBPACK_IMPORTED_MODULE_2___default()(ctx),
      token = _nextCookie2.token;

  if (ctx.req && token) {
    ctx.res.writeHead(302, {
      Location: '/index'
    });
    ctx.res.end();
    return;
  }

  if (token) {
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/index');
  }

  return;
};
var getToken = function getToken(ctx) {
  var _nextCookie3 = next_cookies__WEBPACK_IMPORTED_MODULE_2___default()(ctx),
      token = _nextCookie3.token;

  return token;
};
var getUser = function getUser(token) {
  var url = apiConfig.serverUrl + '/user/get';
  var user;
  axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(url, {}, {
    headers: {
      authorization: token
    }
  }).then(function (response) {
    return response.data.user;
  })["catch"](function (error) {
    console.log(error);
  });
};
var logout = function logout() {
  _node_modules_js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove('token'); // to support logging out from all windows

  window.localStorage.setItem('logout', _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()());
  next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/login');
};

/***/ })

})
//# sourceMappingURL=sales.js.b32a9a195915bc302e01.hot-update.js.map