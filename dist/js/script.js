/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/media.js":
/*!*********************************!*\
  !*** ./src/js/modules/media.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// функция для отображения некоторых элементов на мобильных экранах
function media(lineSelector, imgSelector, footerSelector) {
  var line = document.querySelector(lineSelector),
      // линия в хедере
  imgHeaven = document.querySelector(imgSelector),
      // картинка в блоке prediction
  footer = document.querySelector(footerSelector);

  function resizeLine() {
    if (document.body.clientWidth < 1440) {
      line.style.width = "100%";
    } else {
      line.style.width = "1440px";
    }
  }

  function resizeImg() {
    if (document.body.clientWidth > 1440) {
      imgHeaven.style.left = "0";
      imgHeaven.style.transform = "none";
      imgHeaven.src = "img/heaven.png";
    } else if (document.body.clientWidth < 501) {
      imgHeaven.src = "img/heaven_small.png";
    } else {
      imgHeaven.src = "img/heaven.png";
      imgHeaven.style.left = "50%";
      imgHeaven.style.transform = "translateX(-50%)";
    }
  }

  footer.addEventListener("click", function () {
    var currentHeight = getComputedStyle(footer).height;

    if (currentHeight == "19px") {
      footer.style.height = "27px";
      window.scrollBy(0, 8);
    } else {
      footer.style.height = "19px";
    }
  });
  resizeLine();
  resizeImg();
  window.addEventListener("resize", function () {
    resizeLine();
    resizeImg();
  });
}

/* harmony default export */ __webpack_exports__["default"] = (media);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/media */ "./src/js/modules/media.js");

window.addEventListener("DOMContentLoaded", function () {
  Object(_modules_media__WEBPACK_IMPORTED_MODULE_0__["default"])(".promo__line", ".prediction__img", ".footer__text"); // функция для отображения некоторых элементов на мобильных экранах
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map