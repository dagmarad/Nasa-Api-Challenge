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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(function () {
  function loadRandomImage(image) {
    var date = function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    function loadPhoto() {
      $.ajax({
        url: urlNasa
      }).done(function (response) {
        if (response.media_type == 'image') {
          $(image).find('p').text(response.title);
          $(image).css('background-image', 'url(' + response.url + ')');
        } else {
          loadRandomImage(image);
        }
      }).fail(function (error) {
        console.log(error);
      });
    }

    var year = date(2010, 2016);
    var month = date(1, 12);
    var day = date(1, 28);
    var urlNasa = "https://api.nasa.gov/planetary/apod?api_key=oWe4gdwdmS0UnFJ3FuMrO1sK6NaZTxDZoyf0rKTY" + "&date=" + year + "-" + month + "-" + day;
    console.log(urlNasa);
    loadPhoto();
  }
  $(".gallery__list__item").each(function () {
    loadRandomImage(this);
  });

  //slider
  var list = $('li');
  var listFirst = $('li').eq(0);
  console.log(listFirst);
  var index = 0;

  $('li').eq(0).addClass('visible');

  $('.next').on('click', function () {
    console.log('next');
    list[index].classList.remove('visible');
    if (index < list.length - 1) {
      index++;
    } else {
      index = 0;
    }
    list[index].classList.add("visible");
  });

  $('.previous').on('click', function () {
    list[index].classList.remove("visible");
    if (index > 0) {
      index--;
    } else {
      index = list.length - 1;
    }
    list[index].classList.add("visible");
  });
});

/***/ })
/******/ ]);