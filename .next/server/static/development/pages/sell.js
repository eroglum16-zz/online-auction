module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api-config.js":
/*!***********************!*\
  !*** ./api-config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.serverUrl = 'http://localhost:3030';
exports.defaultCity = {
  city: "İller",
  code: 0,
  districts: ["İl Seçin"]
};

/***/ }),

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavigationBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationBar */ "./components/NavigationBar.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/mert/Desktop/I\u0307TU\u0308/Fall 2019/Bitirme/Project/components/AppLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class Layout extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx("div", {
      style: {
        backgroundColor: 'whitesmoke',
        paddingBottom: '30px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx(_NavigationBar__WEBPACK_IMPORTED_MODULE_0__["default"], {
      page: this.props.page,
      loggedIn: this.props.loggedIn,
      user: this.props.user,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }), this.props.children);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/NavigationBar.js":
/*!*************************************!*\
  !*** ./components/NavigationBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/auth */ "./utils/auth.js");
var _jsxFileName = "/Users/mert/Desktop/I\u0307TU\u0308/Fall 2019/Bitirme/Project/components/NavigationBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class NavigationBar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleLogout() {
    Object(_utils_auth__WEBPACK_IMPORTED_MODULE_4__["logout"])();
  }

  render() {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
      color: "light",
      light: true,
      expand: "md",
      style: {
        boxShadow: '0px 10px 5px 0px #eee',
        minHeight: '70px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarBrand"], {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faGavel"],
      width: "16",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), " A\xE7\u0131k Artt\u0131rma"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarToggler"], {
      onClick: this.toggle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
      isOpen: this.state.isOpen,
      navbar: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
      className: "ml-auto",
      navbar: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      className: this.props.page === "home" ? "active" : "",
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faHome"],
      width: "16",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), " Anasayfa")), this.props.loggedIn ? '' : __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      className: this.props.page === "registration" ? "active" : "",
      href: "/registration",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faList"],
      width: "16",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }), " Kay\u0131t")), this.props.loggedIn ? '' : __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      className: this.props.page === "login" ? "active" : "",
      href: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSignInAlt"],
      width: "16",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), " Giri\u015F")), this.props.loggedIn ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      className: this.props.page === "sell" ? "active" : "",
      href: "/sell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faClipboard"],
      width: "16",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }), " Sat\u0131\u015F Ba\u015Flat")) : '', __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
      style: {
        marginLeft: '10px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      type: "search",
      name: "search",
      id: "exampleSearch",
      placeholder: "arama yap\u0131n...",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    })), this.props.loggedIn ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["UncontrolledDropdown"], {
      nav: true,
      inNavbar: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownToggle"], {
      nav: true,
      caret: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUser"],
      width: "16",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }), " ", this.props.user.nameSurname ? this.props.user.nameSurname : ''), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"], {
      right: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
      href: "/sales",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faHandHoldingUsd"],
      width: "16",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }), " Sat\u0131lanlar"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
      href: "/purchases",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faShoppingCart"],
      width: "16",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }), " Al\u0131nanlar"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
      divider: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
      onClick: this.handleLogout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSignOutAlt"],
      width: "16",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }), " \xC7\u0131k\u0131\u015F Yap"))) : '')));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NavigationBar);

/***/ }),

/***/ "./components/ValidationError.js":
/*!***************************************!*\
  !*** ./components/ValidationError.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/mert/Desktop/I\u0307TU\u0308/Fall 2019/Bitirme/Project/components/ValidationError.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class ValidationError extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    if (!this.props.message) return "";else return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
      className: "mt-3",
      color: "danger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, this.props.message);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ValidationError);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "core-js/library/fn/date/now");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

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

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/filepond/dist/filepond.min.css":
/*!*****************************************************!*\
  !*** ./node_modules/filepond/dist/filepond.min.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "./node_modules/react-datepicker/dist/react-datepicker.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-datepicker/dist/react-datepicker.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/sell.js":
/*!***********************!*\
  !*** ./pages/sell.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_ValidationError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ValidationError */ "./components/ValidationError.js");
/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/auth */ "./utils/auth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-datepicker */ "react-datepicker");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var date_fns_locale_tr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns/locale/tr */ "date-fns/locale/tr");
/* harmony import */ var date_fns_locale_tr__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_tr__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_filepond__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-filepond */ "react-filepond");
/* harmony import */ var react_filepond__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_filepond__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var filepond_dist_filepond_min_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! filepond/dist/filepond.min.css */ "./node_modules/filepond/dist/filepond.min.css");
/* harmony import */ var filepond_dist_filepond_min_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(filepond_dist_filepond_min_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var filepond_plugin_image_exif_orientation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! filepond-plugin-image-exif-orientation */ "filepond-plugin-image-exif-orientation");
/* harmony import */ var filepond_plugin_image_exif_orientation__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_exif_orientation__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! filepond-plugin-image-preview */ "filepond-plugin-image-preview");
/* harmony import */ var filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var filepond_plugin_image_preview_dist_filepond_plugin_image_preview_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css */ "./node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css");
/* harmony import */ var filepond_plugin_image_preview_dist_filepond_plugin_image_preview_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_preview_dist_filepond_plugin_image_preview_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! filepond-plugin-file-validate-type */ "filepond-plugin-file-validate-type");
/* harmony import */ var filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_21__);


var _jsxFileName = "/Users/mert/Desktop/I\u0307TU\u0308/Fall 2019/Bitirme/Project/pages/sell.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






















const apiConfig = __webpack_require__(/*! ../api-config */ "./api-config.js");

const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_21___default()(apiConfig.serverUrl);
const minimumSaleDuration = 1000 * 60 * 60 * 12; //12 hours

Object(react_datepicker__WEBPACK_IMPORTED_MODULE_11__["registerLocale"])('tr', date_fns_locale_tr__WEBPACK_IMPORTED_MODULE_13___default.a);
Object(react_filepond__WEBPACK_IMPORTED_MODULE_15__["registerPlugin"])(filepond_plugin_image_exif_orientation__WEBPACK_IMPORTED_MODULE_17___default.a, filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_18___default.a, filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_20___default.a);

class Sell extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "handleChange", date => {
      let validationErrors = this.state.validationErrors;
      validationErrors.endDate = '';
      this.setState({
        endDate: date,
        validationErrors: validationErrors
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "handleSubmit", event => {
      const url = apiConfig.serverUrl + '/sale/new';
      event.preventDefault();
      let filenames = [];

      if (event.target.filepond.length) {
        for (var i = 0; i < event.target.filepond.length; i++) {
          filenames.push(event.target.filepond[i].value);
        }
      } else if (event.target.filepond.value) {
        filenames.push(event.target.filepond.value);
      }

      let validated = this.validate();
      if (!validated) return;
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(url, {
        title: this.state.title,
        description: this.state.description,
        state: this.state.state,
        firstPrice: this.state.firstPrice,
        endDate: this.state.endDate,
        city: this.state.city,
        district: this.state.district,
        images: filenames
      }, {
        headers: {
          authorization: this.state.user.token
        }
      }).then(response => {
        var saleId = response.data.saleId;
        socket.emit('new sale', {
          saleId: saleId,
          endDate: this.state.endDate
        });
        next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/index');
      }).catch(error => {
        console.log(error);
      });
    });

    var token = this.props.token;
    this.getUser(token);
    this.state = {
      loggedIn: token ? true : false,
      user: {},
      title: '',
      description: '',
      state: 'Seçiniz',
      firstPrice: '',
      focuses: {},
      validationErrors: {},
      locations: [apiConfig.defaultCity],
      endDate: new Date(),
      selectedCity: apiConfig.defaultCity,
      district: '',
      city: '',
      files: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.updateSelectedCity = this.updateSelectedCity.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }

  componentDidMount() {
    this.getLocations();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let validationErrors = this.state.validationErrors;
    validationErrors[name] = '';
    this.setState({
      [name]: value,
      validationErrors: validationErrors
    });

    if (name == "city") {
      let selectedCity = this.state.locations.find(location => location.city === value);
      this.updateSelectedCity(selectedCity);
    }
  }

  handleInputFocus(event) {
    const target = event.target;
    const name = target.name;
    var focuses = this.state.focuses;
    focuses[name] = true;
    this.setState({
      focuses: focuses
    });
  }

  handleInputBlur(event) {
    const target = event.target;
    const name = target.name;
    var focuses = this.state.focuses;
    focuses[name] = false;
    this.setState({
      focuses: focuses
    });
  }

  validate() {
    let validated = true;
    let validationErrors = {};

    if (this.state.files.length === 0) {
      validationErrors.image = "Lütfen en az bir fotoğraf yükleyin.";
      validated = false;
    }

    if (this.state.title.length === 0) {
      validationErrors.title = "Lütfen ürününüze bir başlık verin.";
      validated = false;
    } else if (this.state.title.length > 40) {
      validationErrors.title = "Başlık en fazla 40 karakter olabilir.";
      validated = false;
    }

    if (this.state.description.length > 400) {
      validationErrors.description = "Açıklama en fazla 400 karakter olabilir.";
      validated = false;
    }

    if (this.state.state == 'Seçiniz') {
      validationErrors.state = "Lütfen ürününüzün durumunu belirtin.";
      validated = false;
    }

    if (this.state.firstPrice.length === 0) {
      validationErrors.firstPrice = "Lütfen bir açılış fiyatı belirleyin.";
      validated = false;
    }

    if (this.state.endDate < _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()() + minimumSaleDuration) {
      validationErrors.endDate = "Kapanış tarihi en erken 12 saat sonra olabilir.";
      validated = false;
    }

    if (!this.state.selectedCity.code) {
      validationErrors.city = "Lütfen bir konum seçin.";
      validated = false;
    }

    this.setState({
      validationErrors: validationErrors
    });
    return validated;
  }

  getUser(token) {
    const url = apiConfig.serverUrl + '/user/get';
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(url, {}, {
      headers: {
        authorization: token
      }
    }).then(response => {
      this.setState({
        user: response.data.user
      });
    }).catch(function (error) {
      console.log(error);
    });
  }

  getLocations() {
    const apiConfig = __webpack_require__(/*! ../api-config */ "./api-config.js");

    const url = apiConfig.serverUrl + '/locations';
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(url).then(response => {
      this.setState({
        locations: response.data.locations,
        selectedCity: response.data.locations[0]
      });
    }).catch(function (error) {
      console.log(error);
    }.bind(this));
  }

  updateSelectedCity(city) {
    this.setState({
      selectedCity: city
    });
  }

  render() {
    const cities = this.state.locations.map(location => __jsx("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: this
    }, location.city));
    var location;

    for (location in this.state.locations) {
      if (location.city === this.state.city) {
        this.setState({
          selectedCity: location
        });
      }
    }

    const districts = this.state.selectedCity.districts.map(district => __jsx("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248
      },
      __self: this
    }, district));
    console.log(this.state.validationErrors.title);
    return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      page: "sell",
      user: this.state.user,
      loggedIn: this.state.loggedIn,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252
      },
      __self: this
    }, __jsx("div", {
      className: "container bg-white",
      style: {
        padding: '3%',
        marginTop: '3%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254
      },
      __self: this
    }, " Sat\u0131\u015F Ba\u015Flat "), __jsx("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      },
      __self: this
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], {
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257
      },
      __self: this
    }, __jsx("div", {
      className: "col-md-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
      for: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260
      },
      __self: this
    }, "Ba\u015Fl\u0131k"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
      type: "text",
      name: "title",
      id: "title",
      maxLength: "40",
      value: this.state.title,
      onChange: this.handleInputChange,
      onFocus: this.handleInputFocus,
      onBlur: this.handleInputBlur,
      placeholder: "\xDCr\xFCn\xFCn\xFCz\xFC tan\u0131mlayan birka\xE7 kelime...",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261
      },
      __self: this
    }), __jsx(_components_ValidationError__WEBPACK_IMPORTED_MODULE_4__["default"], {
      message: this.state.validationErrors.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271
      },
      __self: this
    }), this.state.focuses.title && this.state.title.length !== 0 ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Progress"], {
      className: "mt-3",
      color: "info",
      value: this.state.title.length * 2.5,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273
      },
      __self: this
    }) : ""), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
      for: "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280
      },
      __self: this
    }, "A\xE7\u0131klama"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
      type: "textarea",
      id: "description",
      name: "description",
      value: this.state.description,
      rows: "5",
      maxLength: "400",
      onChange: this.handleInputChange,
      onFocus: this.handleInputFocus,
      onBlur: this.handleInputBlur,
      style: {
        outline: 'none'
      },
      placeholder: "\xDCr\xFCn\xFCn\xFCz hakk\u0131nda a\xE7\u0131klamalar ve belirtmek istedi\u011Finiz ekstra bilgiler.",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281
      },
      __self: this
    }), __jsx(_components_ValidationError__WEBPACK_IMPORTED_MODULE_4__["default"], {
      message: this.state.validationErrors.description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292
      },
      __self: this
    }), this.state.focuses.description && this.state.description.length !== 0 ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Progress"], {
      className: "mt-3",
      color: "info",
      value: this.state.description.length / 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294
      },
      __self: this
    }) : ""), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
      for: "state",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300
      },
      __self: this
    }, "Durum"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
      type: "select",
      name: "state",
      id: "state",
      value: this.state.state,
      onChange: this.handleInputChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301
      },
      __self: this
    }, __jsx("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306
      },
      __self: this
    }, "Se\xE7iniz"), __jsx("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307
      },
      __self: this
    }, "Kullan\u0131lmam\u0131\u015F"), __jsx("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308
      },
      __self: this
    }, "Yeni gibi"), __jsx("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309
      },
      __self: this
    }, "Az kullan\u0131lm\u0131\u015F"), __jsx("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310
      },
      __self: this
    }, "Eski"), __jsx("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311
      },
      __self: this
    }, "\xC7ok Eski")), __jsx(_components_ValidationError__WEBPACK_IMPORTED_MODULE_4__["default"], {
      message: this.state.validationErrors.state,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313
      },
      __self: this
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
      for: "firstPrice",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316
      },
      __self: this
    }, "Ba\u015Flang\u0131\xE7 Fiyat\u0131"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
      addonType: "prepend",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faLiraSign"],
      width: "16",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320
      },
      __self: this
    }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
      type: "number",
      name: "firstPrice",
      value: this.state.firstPrice,
      onChange: this.handleInputChange,
      id: "firstPrice",
      placeholder: "Minimum sat\u0131\u015F fiyat\u0131n\u0131 belirtin...",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323
      },
      __self: this
    })), __jsx(_components_ValidationError__WEBPACK_IMPORTED_MODULE_4__["default"], {
      message: this.state.validationErrors.firstPrice,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330
      },
      __self: this
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
      style: {
        display: 'block'
      },
      for: "endDate",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333
      },
      __self: this
    }, "Kapan\u0131\u015F Tarihi"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
      addonType: "prepend",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faCalendar"],
      width: "16",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337
      },
      __self: this
    }))), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_11___default.a, {
      id: "endDate",
      className: "form-control",
      selected: this.state.endDate,
      onChange: this.handleChange,
      locale: "tr",
      showTimeSelect: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340
      },
      __self: this
    })), __jsx(_components_ValidationError__WEBPACK_IMPORTED_MODULE_4__["default"], {
      message: this.state.validationErrors.endDate,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349
      },
      __self: this
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
      style: {
        textDecoration: 'underline'
      },
      for: "location",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352
      },
      __self: this
    }, "Konum"), __jsx("div", {
      className: "row",
      id: "location",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353
      },
      __self: this
    }, __jsx("div", {
      className: "col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
      for: "city",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355
      },
      __self: this
    }, "\u0130l"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
      type: "select",
      name: "city",
      id: "city",
      value: this.state.city,
      onChange: this.handleInputChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356
      },
      __self: this
    }, cities)), __jsx("div", {
      className: "col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
      for: "district",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365
      },
      __self: this
    }, "\u0130l\xE7e"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
      type: "select",
      name: "district",
      id: "district",
      value: this.state.district,
      onChange: this.handleInputChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366
      },
      __self: this
    }, districts))), __jsx(_components_ValidationError__WEBPACK_IMPORTED_MODULE_4__["default"], {
      message: this.state.validationErrors.city,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 375
      },
      __self: this
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      color: "danger",
      size: "lg",
      type: "submit",
      block: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377
      },
      __self: this
    }, "Sat\u0131\u015F\u0131 Ba\u015Flat")), __jsx("div", {
      className: "col-md-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 385
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
      style: {
        display: 'block'
      },
      for: "filepond",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386
      },
      __self: this
    }, "\xDCr\xFCn foto\u011Fraflar\u0131"), __jsx(react_filepond__WEBPACK_IMPORTED_MODULE_15__["FilePond"], {
      id: "filepond",
      files: this.state.files,
      allowFileTypeValidation: true,
      acceptedFileTypes: ['image/*'],
      labelInvalidField: "Sadece foto\u011Fraf dosyalar\u0131 y\xFCkleyebilirsiniz",
      labelIdle: "S\xFCr\xFCkleyip b\u0131rak\u0131n, veya bilgisayar\u0131n\u0131zdan y\xFCklemek i\xE7in t\u0131klay\u0131n. <br> En fazla 10 foto\u011Fraf y\xFCkleyebilirsiniz.",
      labelTapToRetry: "Yeniden denemek i\xE7in t\u0131klay\u0131n",
      labelFileProcessingError: "Foto\u011Fraf y\xFCklenirken hata olu\u015Ftu",
      labelFileProcessingComplete: "Y\xFCkleme tamamland\u0131",
      labelTapToUndo: "Geri almak i\xE7in t\u0131klay\u0131n",
      labelFileProcessing: "Foto\u011Fraf y\xFCkleniyor",
      labelTapToCancel: "\u0130ptal etmek i\xE7in t\u0131klay\u0131n",
      allowMultiple: true,
      maxFiles: 10,
      server: {
        url: apiConfig.serverUrl,
        process: '/file/product',
        revert: '/file/product'
      },
      onupdatefiles: fileItems => {
        let validationErrors = this.state.validationErrors;
        validationErrors.image = ''; // Set currently active file objects to this.state

        this.setState({
          files: fileItems.map(fileItem => fileItem.file),
          validationErrors: validationErrors
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387
      },
      __self: this
    }), __jsx(_components_ValidationError__WEBPACK_IMPORTED_MODULE_4__["default"], {
      message: this.state.validationErrors.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419
      },
      __self: this
    })))))));
  }

}

Sell.getInitialProps = async ctx => {
  // Check user's session
  const token = Object(_utils_auth__WEBPACK_IMPORTED_MODULE_9__["auth"])(ctx);
  return {
    token
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Sell);

/***/ }),

/***/ "./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/*! exports provided: login, auth, getToken, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var _node_modules_js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_js_cookie__WEBPACK_IMPORTED_MODULE_3__);




const login = ({
  token
}) => {
  _node_modules_js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('token', token, {
    expires: 1
  });
  next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/index');
};
const auth = ctx => {
  const {
    token
  } = next_cookies__WEBPACK_IMPORTED_MODULE_2___default()(ctx);

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
const getToken = ctx => {
  const {
    token
  } = next_cookies__WEBPACK_IMPORTED_MODULE_2___default()(ctx);
  return token;
};
const logout = () => {
  _node_modules_js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove('token'); // to support logging out from all windows

  window.localStorage.setItem('logout', _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()());
  next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/login');
};

/***/ }),

/***/ 5:
/*!*****************************!*\
  !*** multi ./pages/sell.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mert/Desktop/İTÜ/Fall 2019/Bitirme/Project/pages/sell.js */"./pages/sell.js");


/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/date/now":
/*!**********************************************!*\
  !*** external "core-js/library/fn/date/now" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "date-fns/locale/tr":
/*!*************************************!*\
  !*** external "date-fns/locale/tr" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns/locale/tr");

/***/ }),

/***/ "filepond-plugin-file-validate-type":
/*!*****************************************************!*\
  !*** external "filepond-plugin-file-validate-type" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("filepond-plugin-file-validate-type");

/***/ }),

/***/ "filepond-plugin-image-exif-orientation":
/*!*********************************************************!*\
  !*** external "filepond-plugin-image-exif-orientation" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("filepond-plugin-image-exif-orientation");

/***/ }),

/***/ "filepond-plugin-image-preview":
/*!************************************************!*\
  !*** external "filepond-plugin-image-preview" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("filepond-plugin-image-preview");

/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-datepicker":
/*!***********************************!*\
  !*** external "react-datepicker" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ }),

/***/ "react-filepond":
/*!*********************************!*\
  !*** external "react-filepond" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-filepond");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ })

/******/ });
//# sourceMappingURL=sell.js.map