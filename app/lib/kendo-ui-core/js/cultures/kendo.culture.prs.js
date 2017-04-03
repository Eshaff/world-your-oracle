module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(277);
	module.exports = __webpack_require__(277);


/***/ },

/***/ 277:
/***/ function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["prs"] = {
	        name: "prs",
	        numberFormat: {
	            pattern: ["n-"],
	            decimals: 2,
	            ",": ".",
	            ".": ",",
	            groupSize: [3],
	            percent: {
	                pattern: ["%n-","%n"],
	                decimals: 2,
	                ",": ".",
	                ".": ",",
	                groupSize: [3],
	                symbol: "%"
	            },
	            currency: {
	                name: "",
	                abbr: "",
	                pattern: ["$n-","$n"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "؋"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["یکشنبه","دوشنبه","سه‌ شنبه","چهار شنبه","پنجشنبه","جمعه","شنبه"],
	                    namesAbbr: ["یکشنبه","دوشنبه","سه‌ شنبه","چهار شنبه","پنجشنبه","جمعه","شنبه"],
	                    namesShort: ["ی","د","س","چ","پ","ج","ش"]
	                },
	                months: {
	                    names: ["محرّم","صفر","ربيع الأوّل","ربيع الثاني","جمادى الأول","جمادى الثاني","رجب","شعبان","رمضان","شوّال","ذو القعدة","ذو الحجّة"],
	                    namesAbbr: ["محرّم","صفر","ربيع الأوّل","ربيع الثاني","جمادى الأول","جمادى الثاني","رجب","شعبان","رمضان","شوّال","ذو القعدة","ذو الحجّة"]
	                },
	                AM: ["غ.م","غ.م","غ.م"],
	                PM: ["غ.و","غ.و","غ.و"],
	                patterns: {
	                    d: "yyyy/M/d",
	                    D: "yyyy, dd, MMMM, dddd",
	                    F: "yyyy, dd, MMMM, dddd h:mm:ss tt",
	                    g: "yyyy/M/d h:mm tt",
	                    G: "yyyy/M/d h:mm:ss tt",
	                    m: "d MMMM",
	                    M: "d MMMM",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "h:mm tt",
	                    T: "h:mm:ss tt",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM yyyy",
	                    Y: "MMMM yyyy"
	                },
	                "/": "/",
	                ":": ":",
	                firstDay: 6
	            }
	        }
	    }
	})(this);


/***/ }

/******/ });