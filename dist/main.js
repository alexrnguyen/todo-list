"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* || General Styles */

:root {
  --primary-color: white;
  --secondary-color: lightgray;
  --completed-color: green;
  --high-priority-color: red;
  --medium-priority-color: orange;
  --low-priority-color: blue;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  min-height: 100vh;
}

body,
p {
  margin: 0;
}

.container {
  display: grid;
  grid-template: 1fr 10fr / 1fr 6fr;
  min-height: 100vh;
}

.container.container.no-sidebar #project-container {
  grid-column: span 2;
  grid-row: 2;
}

#add-project-button,
#add-task-button {
  align-self: flex-end;
  display: flex;
  align-items: center;
  font-size: 1rem;
}

.icon {
  width: 25px;
  height: 25px;
}

/* || Header */
header {
  grid-column: span 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: var(--secondary-color);
  border-bottom: 2px solid black;
}

#menu-button {
  justify-self: start;
  margin-left: 2rem;
  background-color: transparent;
  border: none;
}

h1 {
  place-self: center;
  text-align: center;
}

/* || Sidebar */

#sidebar {
  background-color: var(--secondary-color);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

#sidebar.hidden {
  width: 0;
  padding: 0;
}

#project-items-header,
.project-item-name {
  font-size: 2rem;
}

hr {
  border: 1px solid black;
  margin: 0;
  width: 100%;
  margin-bottom: 1rem;
}

.hidden {
  visibility: hidden;
}
/* || Project Item */
.project-item {
  display: flex;
  gap: 1rem;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.project-item.active {
  background-color: var(--primary-color);
}

.num-tasks-container {
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  height: 25px;
  width: 25px;
  border-radius: 50%;
}

.num-tasks {
  font-size: 1rem;
}

/* || Project Content */
#project-container {
  margin: 0 10vw;
  padding: 1rem;
}

#project-content {
  display: grid;
  grid-template-rows: 1fr 5fr;
}

#content-header {
  display: grid;
  grid-template: repeat(2, 1fr) / 10fr 1fr;
  grid-template-areas:
    "name edit-button"
    "description delete-button";
  row-gap: 1rem;
}

#content-header button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  gap: 10px;
}

.project-name {
  grid-area: name;
  margin: 0;
}

.project-description {
  grid-area: description;
}

.project-edit-button {
  grid-area: edit-button;
}

.project-delete-button {
  grid-area: delete-button;
}

#task-items-container {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

#add-task-button {
  align-self: flex-end;
}

/* || Task Item */

.task-item {
  display: grid;
  grid-template-columns: 1fr 5fr 1fr repeat(2, 0.5fr);
  gap: 1rem;
  border-left: 15px solid;
  border-radius: 10px;
  align-items: center;
  background-color: var(--secondary-color);
  padding: 1rem;
}

input[type="checkbox"] {
  width: 25px;
  height: 25px;
}

/* Task Priority */
.priority-low {
  border-color: var(--low-priority-color);
}

.priority-medium {
  border-color: var(--medium-priority-color);
}

.priority-high {
  border-color: var(--high-priority-color);
}

.completed {
  border-color: var(--completed-color);
}

.task-item button,
.task-item #task-date {
  place-self: end;
}

/* || Modal */

.modal {
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 1rem;
  z-index: 2;
  display: grid;
  place-items: center;
}

.header-container {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 1rem;
}

.form-header {
  grid-column: 2;
  text-align: center;
  margin: 0;
}

.icon {
  width: 25px;
  height: 25px;
}

#task-edit-modal .header-container {
  padding: 1rem;
}

.header-container button {
  grid-column: 3;
  justify-self: end;
  background-color: red;
  border-radius: 1vmin;
  border: 2px solid black;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  display: block;
}

input[type="text"],
textarea {
  border-radius: 5px;
  min-height: 1.5rem;
  width: 100%;
  font-size: 1rem;
  border: 1px solid black;
}

textarea {
  font-family: Arial, Helvetica, sans-serif;
  resize: none;
}

.submit-button {
  background-color: green;
  color: white;
  align-self: center;
  padding: 1rem 3rem;
  font-size: 1rem;
  border: none;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
}

/* Source: https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/ */
#overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 1;
}
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["/* || General Styles */\r\n\r\n:root {\r\n  --primary-color: white;\r\n  --secondary-color: lightgray;\r\n  --completed-color: green;\r\n  --high-priority-color: red;\r\n  --medium-priority-color: orange;\r\n  --low-priority-color: blue;\r\n}\r\n\r\nbody {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  min-height: 100vh;\r\n}\r\n\r\nbody,\r\np {\r\n  margin: 0;\r\n}\r\n\r\n.container {\r\n  display: grid;\r\n  grid-template: 1fr 10fr / 1fr 6fr;\r\n  min-height: 100vh;\r\n}\r\n\r\n.container.container.no-sidebar #project-container {\r\n  grid-column: span 2;\r\n  grid-row: 2;\r\n}\r\n\r\n#add-project-button,\r\n#add-task-button {\r\n  align-self: flex-end;\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 1rem;\r\n}\r\n\r\n.icon {\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n\r\n/* || Header */\r\nheader {\r\n  grid-column: span 2;\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  background-color: var(--secondary-color);\r\n  border-bottom: 2px solid black;\r\n}\r\n\r\n#menu-button {\r\n  justify-self: start;\r\n  margin-left: 2rem;\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n\r\nh1 {\r\n  place-self: center;\r\n  text-align: center;\r\n}\r\n\r\n/* || Sidebar */\r\n\r\n#sidebar {\r\n  background-color: var(--secondary-color);\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  padding: 1rem;\r\n}\r\n\r\n#sidebar.hidden {\r\n  width: 0;\r\n  padding: 0;\r\n}\r\n\r\n#project-items-header,\r\n.project-item-name {\r\n  font-size: 2rem;\r\n}\r\n\r\nhr {\r\n  border: 1px solid black;\r\n  margin: 0;\r\n  width: 100%;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.hidden {\r\n  visibility: hidden;\r\n}\r\n/* || Project Item */\r\n.project-item {\r\n  display: flex;\r\n  gap: 1rem;\r\n  -moz-user-select: none;\r\n  -khtml-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.project-item.active {\r\n  background-color: var(--primary-color);\r\n}\r\n\r\n.num-tasks-container {\r\n  align-self: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: green;\r\n  height: 25px;\r\n  width: 25px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.num-tasks {\r\n  font-size: 1rem;\r\n}\r\n\r\n/* || Project Content */\r\n#project-container {\r\n  margin: 0 10vw;\r\n  padding: 1rem;\r\n}\r\n\r\n#project-content {\r\n  display: grid;\r\n  grid-template-rows: 1fr 5fr;\r\n}\r\n\r\n#content-header {\r\n  display: grid;\r\n  grid-template: repeat(2, 1fr) / 10fr 1fr;\r\n  grid-template-areas:\r\n    \"name edit-button\"\r\n    \"description delete-button\";\r\n  row-gap: 1rem;\r\n}\r\n\r\n#content-header button {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 1rem;\r\n  gap: 10px;\r\n}\r\n\r\n.project-name {\r\n  grid-area: name;\r\n  margin: 0;\r\n}\r\n\r\n.project-description {\r\n  grid-area: description;\r\n}\r\n\r\n.project-edit-button {\r\n  grid-area: edit-button;\r\n}\r\n\r\n.project-delete-button {\r\n  grid-area: delete-button;\r\n}\r\n\r\n#task-items-container {\r\n  margin-top: 2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n#add-task-button {\r\n  align-self: flex-end;\r\n}\r\n\r\n/* || Task Item */\r\n\r\n.task-item {\r\n  display: grid;\r\n  grid-template-columns: 1fr 5fr 1fr repeat(2, 0.5fr);\r\n  gap: 1rem;\r\n  border-left: 15px solid;\r\n  border-radius: 10px;\r\n  align-items: center;\r\n  background-color: var(--secondary-color);\r\n  padding: 1rem;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n\r\n/* Task Priority */\r\n.priority-low {\r\n  border-color: var(--low-priority-color);\r\n}\r\n\r\n.priority-medium {\r\n  border-color: var(--medium-priority-color);\r\n}\r\n\r\n.priority-high {\r\n  border-color: var(--high-priority-color);\r\n}\r\n\r\n.completed {\r\n  border-color: var(--completed-color);\r\n}\r\n\r\n.task-item button,\r\n.task-item #task-date {\r\n  place-self: end;\r\n}\r\n\r\n/* || Modal */\r\n\r\n.modal {\r\n  background-color: white;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border-radius: 10px;\r\n  padding: 1rem;\r\n  z-index: 2;\r\n  display: grid;\r\n  place-items: center;\r\n}\r\n\r\n.header-container {\r\n  display: grid;\r\n  align-items: center;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.form-header {\r\n  grid-column: 2;\r\n  text-align: center;\r\n  margin: 0;\r\n}\r\n\r\n.icon {\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n\r\n#task-edit-modal .header-container {\r\n  padding: 1rem;\r\n}\r\n\r\n.header-container button {\r\n  grid-column: 3;\r\n  justify-self: end;\r\n  background-color: red;\r\n  border-radius: 1vmin;\r\n  border: 2px solid black;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\nlabel {\r\n  display: block;\r\n}\r\n\r\ninput[type=\"text\"],\r\ntextarea {\r\n  border-radius: 5px;\r\n  min-height: 1.5rem;\r\n  width: 100%;\r\n  font-size: 1rem;\r\n  border: 1px solid black;\r\n}\r\n\r\ntextarea {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  resize: none;\r\n}\r\n\r\n.submit-button {\r\n  background-color: green;\r\n  color: white;\r\n  align-self: center;\r\n  padding: 1rem 3rem;\r\n  font-size: 1rem;\r\n  border: none;\r\n  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n/* Source: https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/ */\r\n#overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  backdrop-filter: blur(3px);\r\n  z-index: 1;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;

/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */
var daysInYear = 365.2425;

/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInMinute = 60000;

/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInHour = 3600000;

/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInSecond = 1000;

/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */
var minTime = -maxTime;

/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */
var minutesInHour = 60;

/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var monthsInQuarter = 3;

/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */
var monthsInYear = 12;

/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */
var quartersInYear = 4;

/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */
var secondsInHour = 3600;

/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var secondsInMinute = 60;

/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */
var secondsInDay = secondsInHour * 24;

/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */
var secondsInWeek = secondsInDay * 7;

/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */
var secondsInYear = secondsInDay * daysInYear;

/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */
var secondsInMonth = secondsInYear / 12;

/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */
function parseISO(argument, options) {
  var _options$additionalDi;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }
  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var date;
  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }
  var timestamp = date.getTime();
  var time = 0;
  var offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) {
      return new Date(NaN);
    }
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time);
    // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.
    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }
  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString;

  // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex);
  // Invalid ISO-formatted year
  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null;

  // either year or century is null, not both
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex);
  // Invalid ISO-formatted string
  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// Validation functions

// February is null to handle the leap year (using ||)
var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/controllers/project-controller.js":
/*!***********************************************!*\
  !*** ./src/controllers/project-controller.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectItem: () => (/* binding */ addProjectItem),
/* harmony export */   getProjects: () => (/* binding */ getProjects),
/* harmony export */   removeProjectItem: () => (/* binding */ removeProjectItem),
/* harmony export */   updateProject: () => (/* binding */ updateProject)
/* harmony export */ });
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project */ "./src/models/project.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/controllers/storage.js");



let projects = [];

const getProjects = () => {
  return projects;
};

const addProjectItem = (name, description, tasks = []) => {
  const newProject = (0,_models_project__WEBPACK_IMPORTED_MODULE_0__["default"])(name, description, tasks);
  projects.push(newProject);
  return newProject;
};

const updateProject = (project) => {
  const index = projects.indexOf(project);
  projects[index] = project;
};

const removeProjectItem = (project) => {
  const index = projects.indexOf(project);
  projects.splice(index, 1);
};




/***/ }),

/***/ "./src/controllers/storage.js":
/*!************************************!*\
  !*** ./src/controllers/storage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   retrieveProjects: () => (/* binding */ retrieveProjects),
/* harmony export */   updateProjects: () => (/* binding */ updateProjects)
/* harmony export */ });
/* harmony import */ var _project_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-controller */ "./src/controllers/project-controller.js");


const retrieveProjects = () => {
  return JSON.parse(localStorage.getItem("projects"));
};

const updateProjects = (projects) => {
  console.log(projects);
  localStorage.setItem("projects", JSON.stringify(projects));
};




/***/ }),

/***/ "./src/controllers/task-controller.js":
/*!********************************************!*\
  !*** ./src/controllers/task-controller.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTaskItem: () => (/* binding */ addTaskItem)
/* harmony export */ });
/* harmony import */ var _models_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/task */ "./src/models/task.js");


const addTaskItem = (name, description, dueDate, priority, status, project) => {
  const newTask = (0,_models_task__WEBPACK_IMPORTED_MODULE_0__["default"])(name, description, dueDate, priority, status);
  project.addTask(newTask);
  return newTask;
};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/header */ "./src/ui/header.js");
/* harmony import */ var _ui_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/sidebar */ "./src/ui/sidebar.js");
/* harmony import */ var _ui_project_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/project-content */ "./src/ui/project-content.js");
/* harmony import */ var _ui_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/modal */ "./src/ui/modal.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _ui_edit_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/edit-modal */ "./src/ui/edit-modal.js");
/* harmony import */ var _controllers_project_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controllers/project-controller */ "./src/controllers/project-controller.js");









const initializeWebpage = () => {
  const container = document.createElement("div");
  container.className = "container";
  document.body.appendChild(container);

  container.appendChild((0,_ui_header__WEBPACK_IMPORTED_MODULE_0__["default"])());
  container.appendChild((0,_ui_sidebar__WEBPACK_IMPORTED_MODULE_1__.createSidebar)());
  container.appendChild((0,_ui_project_content__WEBPACK_IMPORTED_MODULE_2__.createProjectContainer)());
  document.body.appendChild((0,_ui_modal__WEBPACK_IMPORTED_MODULE_3__.createOverlay)());
  document.body.appendChild((0,_ui_modal__WEBPACK_IMPORTED_MODULE_3__.createProjectModal)());
  document.body.appendChild((0,_ui_modal__WEBPACK_IMPORTED_MODULE_3__.createTaskModal)());
  document.body.appendChild((0,_ui_edit_modal__WEBPACK_IMPORTED_MODULE_5__.createProjectEditModal)());
  document.body.appendChild((0,_ui_edit_modal__WEBPACK_IMPORTED_MODULE_5__.createTaskEditModal)());

  // Update project count of general project
  for (let i = 0; i < (0,_controllers_project_controller__WEBPACK_IMPORTED_MODULE_6__.getProjects)()[0].tasks.length; i++) {
    (0,_ui_sidebar__WEBPACK_IMPORTED_MODULE_1__.updateProjectCount)((0,_controllers_project_controller__WEBPACK_IMPORTED_MODULE_6__.getProjects)()[0], true);
  }

  const menuButton = document.getElementById("menu-button");
  menuButton.addEventListener("click", () => {
    const container = document.querySelector(".container");
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hidden");
    container.classList.toggle("no-sidebar");
  });
};

initializeWebpage();


/***/ }),

/***/ "./src/models/project.js":
/*!*******************************!*\
  !*** ./src/models/project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const projectFactory = (name, description, tasks) => {
  function addTask(newTask) {
    tasks.push(newTask);
  }

  function removeTask(taskToRemove) {
    const indexOfTask = tasks.indexOf(taskToRemove);
    tasks.splice(indexOfTask, 1);
  }

  function updateTask(updatedTask) {
    const indexOfTask = tasks.indexOf(updatedTask);
    tasks[indexOfTask] = updatedTask;
  }

  return {
    addTask,
    removeTask,
    updateTask,
    get name() {
      return name;
    },
    set name(newName) {
      name = newName;
    },
    get description() {
      return description;
    },
    set description(newDescription) {
      description = newDescription;
    },
    get tasks() {
      return tasks;
    },
    set tasks(newTasks) {
      tasks = newTasks;
    },
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectFactory);


/***/ }),

/***/ "./src/models/task.js":
/*!****************************!*\
  !*** ./src/models/task.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const taskFactory = (name, description, dueDate, priority, status) => {
  function changeStatus() {
    status = !status;
  }

  return {
    get name() {
      return name;
    },
    set name(newName) {
      name = newName;
    },
    get description() {
      return description;
    },
    set description(newDescription) {
      description = newDescription;
    },
    get dueDate() {
      return dueDate;
    },
    set dueDate(newDueDate) {
      dueDate = newDueDate;
    },
    get priority() {
      return priority;
    },
    set priority(newPriority) {
      priority = newPriority;
    },
    get status() {
      return status;
    },
    changeStatus,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskFactory);


/***/ }),

/***/ "./src/ui/edit-modal.js":
/*!******************************!*\
  !*** ./src/ui/edit-modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectEditModal: () => (/* binding */ createProjectEditModal),
/* harmony export */   createTaskEditModal: () => (/* binding */ createTaskEditModal),
/* harmony export */   triggerProjectEditModal: () => (/* binding */ triggerProjectEditModal),
/* harmony export */   triggerTaskEditModal: () => (/* binding */ triggerTaskEditModal)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var _assets_close_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/close.svg */ "./src/assets/close.svg");
/* harmony import */ var _controllers_project_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/project-controller */ "./src/controllers/project-controller.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./src/ui/modal.js");
/* harmony import */ var _project_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-content */ "./src/ui/project-content.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar */ "./src/ui/sidebar.js");
/* harmony import */ var _controllers_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controllers/storage */ "./src/controllers/storage.js");







const createProjectEditModal = () => {
  const projectEditModal = document.createElement("div");
  projectEditModal.id = "project-edit-modal";
  projectEditModal.classList.add("modal");
  projectEditModal.classList.add("hidden");

  const headerContainer = document.createElement("div");
  headerContainer.className = "header-container";

  const header = document.createElement("h1");
  header.className = "form-header";
  header.textContent = "Edit Project";
  headerContainer.appendChild(header);

  const closeButton = document.createElement("button");
  closeButton.id = "project-close-button";
  const closeIcon = new Image();
  closeIcon.className = "icon";
  closeIcon.src = _assets_close_svg__WEBPACK_IMPORTED_MODULE_0__;

  closeButton.addEventListener("click", () => {
    document.getElementById("project-edit-name").value = "";
    document.getElementById("project-edit-description").value = "";
    (0,_modal__WEBPACK_IMPORTED_MODULE_2__.toggleModal)(projectEditModal);
  });

  closeButton.appendChild(closeIcon);
  headerContainer.appendChild(closeButton);

  projectEditModal.appendChild(headerContainer);
  projectEditModal.appendChild(createProjectEditForm());

  return projectEditModal;
};

const triggerProjectEditModal = (project) => {
  const projectEditModal = document.getElementById("project-edit-modal");
  document.getElementById("project-edit-name").value = project.name;
  document.getElementById("project-edit-description").value =
    project.description;
  (0,_modal__WEBPACK_IMPORTED_MODULE_2__.toggleModal)(projectEditModal);

  const projectEditForm = document.getElementById("project-edit-form");
  projectEditForm.onsubmit = (event) => {
    const name = document.getElementById("project-edit-name").value;
    const description = document.getElementById(
      "project-edit-description"
    ).value;
    project.name = name;
    project.description = description;

    (0,_controllers_project_controller__WEBPACK_IMPORTED_MODULE_1__.updateProject)(project);
    (0,_controllers_storage__WEBPACK_IMPORTED_MODULE_5__.updateProjects)((0,_controllers_project_controller__WEBPACK_IMPORTED_MODULE_1__.getProjects)());
    const updatedProjectItem = (0,_sidebar__WEBPACK_IMPORTED_MODULE_4__.updateProjectItem)(project);
    (0,_project_content__WEBPACK_IMPORTED_MODULE_3__.changeProject)(updatedProjectItem, project);
    projectEditForm.reset();
    (0,_modal__WEBPACK_IMPORTED_MODULE_2__.toggleModal)(projectEditModal);
    event.preventDefault();
  };
};

const createProjectEditForm = () => {
  const projectEditForm = document.createElement("form");
  projectEditForm.id = "project-edit-form";

  // Name
  const nameInputContainer = document.createElement("div");
  const nameInputLabel = document.createElement("label");
  nameInputLabel.for = "project-edit-name";
  nameInputLabel.textContent = "Project Name";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "project-edit-name";
  nameInput.id = "project-edit-name";
  nameInput.required = true;

  nameInputContainer.appendChild(nameInputLabel);
  nameInputContainer.appendChild(nameInput);
  projectEditForm.appendChild(nameInputContainer);

  // Description
  const descriptionInputContainer = document.createElement("div");
  const descriptionInputLabel = document.createElement("label");
  descriptionInputLabel.for = "project-edit-description";
  descriptionInputLabel.textContent = "Description";

  const descriptionInput = document.createElement("textarea");
  descriptionInput.name = "project-edit-description";
  descriptionInput.id = "project-edit-description";
  descriptionInput.rows = 10;
  descriptionInput.cols = 50;
  descriptionInput.maxLength = 300;
  descriptionInput.placeholder = "Type a message...";

  descriptionInputContainer.appendChild(descriptionInputLabel);
  descriptionInputContainer.appendChild(descriptionInput);
  projectEditForm.appendChild(descriptionInputContainer);

  // Add Project Button
  const editProjectButton = document.createElement("button");
  editProjectButton.type = "submit";
  editProjectButton.className = "submit-button";
  editProjectButton.textContent = "Edit Project";
  projectEditForm.appendChild(editProjectButton);

  return projectEditForm;
};

const createTaskEditModal = () => {
  const taskEditModal = document.createElement("div");
  taskEditModal.id = "task-edit-modal";
  taskEditModal.classList.add("modal");
  taskEditModal.classList.add("hidden");

  const headerContainer = document.createElement("div");
  headerContainer.className = "header-container";

  const header = document.createElement("h1");
  header.className = "form-header";
  header.textContent = "Edit Task";
  headerContainer.appendChild(header);

  const closeButton = document.createElement("button");
  closeButton.id = "task-close-button";
  const closeIcon = new Image();
  closeIcon.className = "icon";
  closeIcon.src = _assets_close_svg__WEBPACK_IMPORTED_MODULE_0__;

  closeButton.addEventListener("click", () => {
    document.getElementById("task-edit-name").value = "";
    document.getElementById("task-edit-description").value = "";
    document.getElementById("task-edit-due-date").value = "";
    document.getElementById("task-edit-priority").value = "";
    (0,_modal__WEBPACK_IMPORTED_MODULE_2__.toggleModal)(taskEditModal);
  });

  closeButton.appendChild(closeIcon);
  headerContainer.appendChild(closeButton);

  taskEditModal.appendChild(headerContainer);
  taskEditModal.appendChild(createTaskEditForm());

  return taskEditModal;
};

const triggerTaskEditModal = (task, project) => {
  const taskEditModal = document.getElementById("task-edit-modal");
  document.getElementById("task-edit-name").value = task.name;
  document.getElementById("task-edit-description").value = task.description;
  document.getElementById("task-edit-due-date").value = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(
    task.dueDate,
    "yyyy-MM-dd"
  );
  document.getElementById("task-edit-priority").value = task.priority;
  (0,_modal__WEBPACK_IMPORTED_MODULE_2__.toggleModal)(taskEditModal);

  const taskEditForm = document.getElementById("task-edit-form");
  taskEditForm.onsubmit = (event) => {
    const name = document.getElementById("task-edit-name").value;
    const description = document.getElementById("task-edit-description").value;
    const dueDate = new Date(
      document.getElementById("task-edit-due-date").value
    );
    const priority = document.getElementById("task-edit-priority").value;
    task.name = name;
    task.description = description;
    task.dueDate = dueDate;
    task.priority = priority;

    project.updateTask(task);
    (0,_project_content__WEBPACK_IMPORTED_MODULE_3__.updateTaskItem)(task, project);
    (0,_controllers_storage__WEBPACK_IMPORTED_MODULE_5__.updateProjects)((0,_controllers_project_controller__WEBPACK_IMPORTED_MODULE_1__.getProjects)());

    taskEditForm.reset();
    (0,_modal__WEBPACK_IMPORTED_MODULE_2__.toggleModal)(taskEditModal);
    event.preventDefault();
  };
};

const createTaskEditForm = () => {
  const taskForm = document.createElement("form");
  taskForm.id = "task-edit-form";

  // Name
  const nameInputContainer = document.createElement("div");
  const nameInputLabel = document.createElement("label");
  nameInputLabel.for = "task-edit-name";
  nameInputLabel.textContent = "Task Name";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "task-edit-name";
  nameInput.id = "task-edit-name";
  nameInput.required = true;

  nameInputContainer.appendChild(nameInputLabel);
  nameInputContainer.appendChild(nameInput);
  taskForm.appendChild(nameInputContainer);

  // Description
  const descriptionInputContainer = document.createElement("div");
  const descriptionInputLabel = document.createElement("label");
  descriptionInputLabel.for = "task-edit-description";
  descriptionInputLabel.textContent = "Description";

  const descriptionInput = document.createElement("textarea");
  descriptionInput.name = "task-edit-description";
  descriptionInput.id = "task-edit-description";
  descriptionInput.rows = 10;
  descriptionInput.cols = 50;
  descriptionInput.maxLength = 300;
  descriptionInput.placeholder = "Type a message...";

  descriptionInputContainer.appendChild(descriptionInputLabel);
  descriptionInputContainer.appendChild(descriptionInput);
  taskForm.appendChild(descriptionInputContainer);

  // Due Date
  const dateInputContainer = document.createElement("div");
  const dateInputLabel = document.createElement("label");
  dateInputLabel.for = "task-edit-due-date";
  dateInputLabel.textContent = "Due Date";

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.name = "task-edit-due-date";
  dueDateInput.id = "task-edit-due-date";
  dueDateInput.required = true;

  // Don't allow users to input past dates
  dueDateInput.min = new Date()
    .toISOString()
    .replace(/T.*/, "")
    .split("-")
    .join("-");

  dateInputContainer.appendChild(dateInputLabel);
  dateInputContainer.appendChild(dueDateInput);
  taskForm.appendChild(dateInputContainer);

  // Priority
  const priorityInputContainer = document.createElement("div");
  const priorityInputLabel = document.createElement("label");
  priorityInputLabel.for = "task-edit-priority";
  priorityInputLabel.textContent = "Priority";

  const priorityInput = document.createElement("select");
  priorityInput.name = "task-edit-priority";
  priorityInput.id = "task-edit-priority";
  priorityInput.required = true;

  const options = ["Low", "Medium", "High"];
  for (let i = 0; i < 3; i++) {
    const option = document.createElement("option");
    option.textContent = options[i];
    priorityInput.add(option);
  }

  priorityInputContainer.appendChild(priorityInputLabel);
  priorityInputContainer.appendChild(priorityInput);
  taskForm.appendChild(priorityInputContainer);

  // Add Task Button
  const editTaskButton = document.createElement("button");
  editTaskButton.type = "submit";
  editTaskButton.className = "submit-button";
  editTaskButton.textContent = "Edit Task";
  taskForm.appendChild(editTaskButton);

  return taskForm;
};




/***/ }),

/***/ "./src/ui/header.js":
/*!**************************!*\
  !*** ./src/ui/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_menu_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/menu.svg */ "./src/assets/menu.svg");


const createHeader = () => {
  const header = document.createElement("header");

  const menuButton = document.createElement("button");
  menuButton.id = "menu-button";
  const menuIcon = new Image();
  menuIcon.src = _assets_menu_svg__WEBPACK_IMPORTED_MODULE_0__;

  menuButton.appendChild(menuIcon);

  const appName = document.createElement("h1");
  appName.textContent = "ToDoList";

  header.appendChild(menuButton);
  header.appendChild(appName);

  return header;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);


/***/ }),

/***/ "./src/ui/modal.js":
/*!*************************!*\
  !*** ./src/ui/modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createOverlay: () => (/* binding */ createOverlay),
/* harmony export */   createProjectModal: () => (/* binding */ createProjectModal),
/* harmony export */   createTaskModal: () => (/* binding */ createTaskModal),
/* harmony export */   toggleModal: () => (/* binding */ toggleModal),
/* harmony export */   triggerProjectModal: () => (/* binding */ triggerProjectModal),
/* harmony export */   triggerTaskModal: () => (/* binding */ triggerTaskModal)
/* harmony export */ });
/* harmony import */ var _controllers_project_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/project-controller */ "./src/controllers/project-controller.js");
/* harmony import */ var _project_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-item */ "./src/ui/project-item.js");
/* harmony import */ var _task_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-item */ "./src/ui/task-item.js");
/* harmony import */ var _assets_close_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/close.svg */ "./src/assets/close.svg");
/* harmony import */ var _controllers_task_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controllers/task-controller */ "./src/controllers/task-controller.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar */ "./src/ui/sidebar.js");
/* harmony import */ var _controllers_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../controllers/storage */ "./src/controllers/storage.js");








// Project Modal
const createProjectModal = () => {
  const projectModal = document.createElement("div");
  projectModal.id = "project-modal";
  projectModal.classList.add("modal");
  projectModal.classList.add("hidden");

  const headerContainer = document.createElement("div");
  headerContainer.className = "header-container";

  const header = document.createElement("h1");
  header.className = "form-header";
  header.textContent = "Add a Project";
  headerContainer.appendChild(header);

  const closeButton = document.createElement("button");
  closeButton.id = "project-close-button";
  const closeIcon = new Image();
  closeIcon.className = "icon";
  closeIcon.src = _assets_close_svg__WEBPACK_IMPORTED_MODULE_3__;

  closeButton.addEventListener("click", () => {
    document.getElementById("project-name").value = "";
    document.getElementById("project-description").value = "";
    toggleModal(projectModal);
  });

  closeButton.appendChild(closeIcon);
  headerContainer.appendChild(closeButton);

  projectModal.appendChild(headerContainer);
  projectModal.appendChild(createProjectForm());

  return projectModal;
};

const triggerProjectModal = () => {
  const projectModal = document.getElementById("project-modal");
  toggleModal(projectModal);

  const projectForm = document.getElementById("project-form");
  projectForm.onsubmit = (event) => {
    const name = document.getElementById("project-name").value;
    const description = document.getElementById("project-description").value;
    console.log((0,_controllers_project_controller__WEBPACK_IMPORTED_MODULE_0__.getProjects)());
    const newProject = (0,_controllers_project_controller__WEBPACK_IMPORTED_MODULE_0__.addProjectItem)(name, description);
    (0,_controllers_storage__WEBPACK_IMPORTED_MODULE_6__.updateProjects)((0,_controllers_project_controller__WEBPACK_IMPORTED_MODULE_0__.getProjects)());

    const projectItemsContainer = document.getElementById(
      "project-items-container"
    );
    projectItemsContainer.appendChild((0,_project_item__WEBPACK_IMPORTED_MODULE_1__["default"])(newProject));
    projectForm.reset();
    toggleModal(projectModal);
    event.preventDefault();
  };
};

const createProjectForm = () => {
  const projectForm = document.createElement("form");
  projectForm.id = "project-form";

  // Name
  const nameInputContainer = document.createElement("div");
  const nameInputLabel = document.createElement("label");
  nameInputLabel.for = "project-name";
  nameInputLabel.textContent = "Project Name";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "project-name";
  nameInput.id = "project-name";
  nameInput.required = true;

  nameInputContainer.appendChild(nameInputLabel);
  nameInputContainer.appendChild(nameInput);
  projectForm.appendChild(nameInputContainer);

  // Description
  const descriptionInputContainer = document.createElement("div");
  const descriptionInputLabel = document.createElement("label");
  descriptionInputLabel.for = "project-description";
  descriptionInputLabel.textContent = "Description";

  const descriptionInput = document.createElement("textarea");
  descriptionInput.name = "project-description";
  descriptionInput.id = "project-description";
  descriptionInput.rows = 10;
  descriptionInput.cols = 50;
  descriptionInput.maxLength = 300;
  descriptionInput.placeholder = "Type a message...";

  descriptionInputContainer.appendChild(descriptionInputLabel);
  descriptionInputContainer.appendChild(descriptionInput);
  projectForm.appendChild(descriptionInputContainer);

  // Add Project Button
  const addProjectButton = document.createElement("button");
  addProjectButton.type = "submit";
  addProjectButton.className = "submit-button";
  addProjectButton.textContent = "Add Project";
  projectForm.appendChild(addProjectButton);

  return projectForm;
};

// Overlay
const createOverlay = () => {
  const overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.classList.add("hidden");
  return overlay;
};

// Task Modal
const createTaskModal = () => {
  const taskModal = document.createElement("div");
  taskModal.id = "task-modal";
  taskModal.classList.add("modal");
  taskModal.classList.add("hidden");

  const headerContainer = document.createElement("div");
  headerContainer.className = "header-container";

  const header = document.createElement("h1");
  header.className = "form-header";
  header.textContent = "Add a Task";
  headerContainer.appendChild(header);

  const closeButton = document.createElement("button");
  closeButton.id = "task-close-button";
  const closeIcon = new Image();
  closeIcon.className = "icon";
  closeIcon.src = _assets_close_svg__WEBPACK_IMPORTED_MODULE_3__;

  closeButton.addEventListener("click", () => {
    document.getElementById("task-name").value = "";
    document.getElementById("task-description").value = "";
    document.getElementById("task-due-date").value = "";
    document.getElementById("task-priority").value = "";
    toggleModal(taskModal);
  });

  closeButton.appendChild(closeIcon);
  headerContainer.appendChild(closeButton);

  taskModal.appendChild(headerContainer);
  taskModal.appendChild(createTaskForm());

  return taskModal;
};

const triggerTaskModal = (project) => {
  const taskModal = document.getElementById("task-modal");
  toggleModal(taskModal);

  const taskForm = document.getElementById("task-form");
  taskForm.onsubmit = (event) => {
    const name = document.getElementById("task-name").value;
    const description = document.getElementById("task-description").value;
    const dueDate = new Date(document.getElementById("task-due-date").value);
    const priority = document.getElementById("task-priority").value;
    const newTask = (0,_controllers_task_controller__WEBPACK_IMPORTED_MODULE_4__.addTaskItem)(
      name,
      description,
      dueDate,
      priority,
      false,
      project
    );
    (0,_controllers_storage__WEBPACK_IMPORTED_MODULE_6__.updateProjects)((0,_controllers_project_controller__WEBPACK_IMPORTED_MODULE_0__.getProjects)());

    const taskItemsContainer = document.getElementById("task-items-container");
    const addTaskButton = document.getElementById("add-task-button");
    taskItemsContainer.insertBefore(
      (0,_task_item__WEBPACK_IMPORTED_MODULE_2__["default"])(newTask, project),
      addTaskButton
    );
    (0,_sidebar__WEBPACK_IMPORTED_MODULE_5__.updateProjectCount)(project, true);
    taskForm.reset();
    toggleModal(taskModal);
    event.preventDefault();
  };
};

const toggleModal = (modal) => {
  const overlay = document.getElementById("overlay");
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

const createTaskForm = () => {
  const taskForm = document.createElement("form");
  taskForm.id = "task-form";

  // Name
  const nameInputContainer = document.createElement("div");
  const nameInputLabel = document.createElement("label");
  nameInputLabel.for = "task-name";
  nameInputLabel.textContent = "Task Name";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "task-name";
  nameInput.id = "task-name";
  nameInput.required = true;

  nameInputContainer.appendChild(nameInputLabel);
  nameInputContainer.appendChild(nameInput);
  taskForm.appendChild(nameInputContainer);

  // Description
  const descriptionInputContainer = document.createElement("div");
  const descriptionInputLabel = document.createElement("label");
  descriptionInputLabel.for = "task-description";
  descriptionInputLabel.textContent = "Description";

  const descriptionInput = document.createElement("textarea");
  descriptionInput.name = "task-description";
  descriptionInput.id = "task-description";
  descriptionInput.rows = 10;
  descriptionInput.cols = 50;
  descriptionInput.maxLength = 300;
  descriptionInput.placeholder = "Type a message...";

  descriptionInputContainer.appendChild(descriptionInputLabel);
  descriptionInputContainer.appendChild(descriptionInput);
  taskForm.appendChild(descriptionInputContainer);

  // Due Date
  const dateInputContainer = document.createElement("div");
  const dateInputLabel = document.createElement("label");
  dateInputLabel.for = "task-due-date";
  dateInputLabel.textContent = "Due Date";

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.name = "task-due-date";
  dueDateInput.id = "task-due-date";
  dueDateInput.required = true;

  // Don't allow users to input past dates
  dueDateInput.min = new Date()
    .toISOString()
    .replace(/T.*/, "")
    .split("-")
    .join("-");

  dateInputContainer.appendChild(dateInputLabel);
  dateInputContainer.appendChild(dueDateInput);
  taskForm.appendChild(dateInputContainer);

  // Priority
  const priorityInputContainer = document.createElement("div");
  const priorityInputLabel = document.createElement("label");
  priorityInputLabel.for = "task-priority";
  priorityInputLabel.textContent = "Priority";

  const priorityInput = document.createElement("select");
  priorityInput.name = "task-priority";
  priorityInput.id = "task-priority";
  priorityInput.required = true;

  const options = ["Low", "Medium", "High"];
  for (let i = 0; i < 3; i++) {
    const option = document.createElement("option");
    // Select low priority by default
    if (i === 0) {
      option.selected = true;
    }
    option.textContent = options[i];
    priorityInput.add(option);
  }

  priorityInputContainer.appendChild(priorityInputLabel);
  priorityInputContainer.appendChild(priorityInput);
  taskForm.appendChild(priorityInputContainer);

  // Add Task Button
  const addTaskButton = document.createElement("button");
  addTaskButton.type = "submit";
  addTaskButton.className = "submit-button";
  addTaskButton.textContent = "Add Task";
  taskForm.appendChild(addTaskButton);

  return taskForm;
};




/***/ }),

/***/ "./src/ui/project-content.js":
/*!***********************************!*\
  !*** ./src/ui/project-content.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeProject: () => (/* binding */ changeProject),
/* harmony export */   clearContent: () => (/* binding */ clearContent),
/* harmony export */   createProjectContainer: () => (/* binding */ createProjectContainer),
/* harmony export */   loadProject: () => (/* binding */ loadProject),
/* harmony export */   removeTaskItem: () => (/* binding */ removeTaskItem),
/* harmony export */   updateTaskItem: () => (/* binding */ updateTaskItem)
/* harmony export */ });
/* harmony import */ var _controllers_project_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/project-controller */ "./src/controllers/project-controller.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ "./src/ui/sidebar.js");
/* harmony import */ var _task_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-item */ "./src/ui/task-item.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ "./src/ui/modal.js");
/* harmony import */ var _assets_add_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/add.svg */ "./src/assets/add.svg");
/* harmony import */ var _assets_edit_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/edit.svg */ "./src/assets/edit.svg");
/* harmony import */ var _assets_delete_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/delete.svg */ "./src/assets/delete.svg");
/* harmony import */ var _edit_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-modal */ "./src/ui/edit-modal.js");
/* harmony import */ var _controllers_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../controllers/storage */ "./src/controllers/storage.js");










const createProjectContainer = () => {
  const projectContainer = document.createElement("div");
  projectContainer.id = "project-container";

  projectContainer.appendChild(loadGeneralProject((0,_controllers_project_controller__WEBPACK_IMPORTED_MODULE_0__.getProjects)()[0]));
  const generalProject = document.querySelector(".project-item");
  generalProject.classList.add("general");
  (0,_sidebar__WEBPACK_IMPORTED_MODULE_1__.toggleActiveItem)(document.querySelector(".general")); // Set General as initial active project
  return projectContainer;
};

const loadGeneralProject = (project) => {
  const projectContent = document.createElement("div");
  projectContent.id = "project-content";

  const contentHeader = document.createElement("div");
  contentHeader.id = "content-header";

  const projectName = document.createElement("h2");
  projectName.className = "project-name";
  projectName.textContent = project.name;

  const projectDescription = document.createElement("p");
  projectDescription.className = "project-description";
  projectDescription.textContent = project.description;

  contentHeader.appendChild(projectName);
  contentHeader.appendChild(projectDescription);

  projectContent.appendChild(contentHeader);

  const tasks = project.tasks;

  const taskItemContainer = document.createElement("div");
  taskItemContainer.id = "task-items-container";

  tasks.forEach((task) =>
    taskItemContainer.appendChild((0,_task_item__WEBPACK_IMPORTED_MODULE_2__["default"])(task, project))
  );

  const addTaskButton = document.createElement("button");
  addTaskButton.id = "add-task-button";
  const addIcon = new Image();
  addIcon.src = _assets_add_svg__WEBPACK_IMPORTED_MODULE_4__;
  addTaskButton.appendChild(addIcon);
  addTaskButton.addEventListener("click", () => {
    (0,_modal__WEBPACK_IMPORTED_MODULE_3__.triggerTaskModal)(project);
  });

  const addTaskText = document.createElement("p");
  addTaskText.textContent = "Add Task";
  addTaskButton.appendChild(addTaskText);

  taskItemContainer.appendChild(addTaskButton);

  projectContent.appendChild(taskItemContainer);

  return projectContent;
};

const loadProject = (project) => {
  const projectContainer = document.getElementById("project-container");
  const projectContent = loadGeneralProject(project);
  projectContainer.appendChild(projectContent);

  const editButton = document.createElement("button");
  editButton.classList = "project-edit-button";
  editButton.textContent = "Edit";
  const editIcon = new Image();
  editIcon.classList.add("icon");
  editIcon.src = _assets_edit_svg__WEBPACK_IMPORTED_MODULE_5__;
  editButton.appendChild(editIcon);

  editButton.addEventListener("click", () => {
    (0,_edit_modal__WEBPACK_IMPORTED_MODULE_7__.triggerProjectEditModal)(project);
  });

  const deleteButton = document.createElement("button");
  deleteButton.classList = "project-delete-button";
  deleteButton.textContent = "Delete";
  const deleteIcon = new Image();
  deleteIcon.classList.add("icon");
  deleteIcon.src = _assets_delete_svg__WEBPACK_IMPORTED_MODULE_6__;
  deleteButton.appendChild(deleteIcon);

  deleteButton.addEventListener("click", () => {
    (0,_sidebar__WEBPACK_IMPORTED_MODULE_1__.removeProjectFromSidebar)(project);
    (0,_controllers_project_controller__WEBPACK_IMPORTED_MODULE_0__.removeProjectItem)(project);
    (0,_controllers_storage__WEBPACK_IMPORTED_MODULE_8__.updateProjects)((0,_controllers_project_controller__WEBPACK_IMPORTED_MODULE_0__.getProjects)());
    projectContainer.innerHTML = "";
  });

  const contentHeader = document.getElementById("content-header");
  contentHeader.appendChild(editButton);
  contentHeader.appendChild(deleteButton);

  return projectContent;
};

const clearContent = () => {
  const projectContainer = document.getElementById("project-container");
  projectContainer.innerHTML = "";
};

const changeProject = (projectItem, project) => {
  const projectContainer = document.getElementById("project-container");
  clearContent();
  (0,_sidebar__WEBPACK_IMPORTED_MODULE_1__.toggleActiveItem)(projectItem);
  if (projectItem.classList.contains("general")) {
    projectContainer.appendChild(loadGeneralProject((0,_controllers_project_controller__WEBPACK_IMPORTED_MODULE_0__.getProjects)()[0]));
  } else {
    projectContainer.appendChild(loadProject(project));
  }
};

const updateTaskItem = (task, project) => {
  const index = project.tasks.indexOf(task);
  const taskItemToUpdate = document.querySelectorAll(".task-item")[index];
  const taskItemsContainer = document.getElementById("task-items-container");
  const updatedTaskItem = (0,_task_item__WEBPACK_IMPORTED_MODULE_2__["default"])(task, project);
  taskItemsContainer.insertBefore(updatedTaskItem, taskItemToUpdate);
  taskItemsContainer.removeChild(taskItemToUpdate);
};

const removeTaskItem = (taskItem) => {
  const taskItemsContainer = document.getElementById("task-items-container");
  taskItemsContainer.removeChild(taskItem);
};




/***/ }),

/***/ "./src/ui/project-item.js":
/*!********************************!*\
  !*** ./src/ui/project-item.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-content */ "./src/ui/project-content.js");


const createProjectItem = (project) => {
  const projectItem = document.createElement("div");
  projectItem.className = "project-item";

  const projectName = document.createElement("p");
  projectName.className = "project-item-name";
  projectName.textContent = project.name;

  const numTasksContainer = document.createElement("div");
  numTasksContainer.className = "num-tasks-container";

  const numTasks = document.createElement("p");
  numTasks.className = "num-tasks";
  numTasks.textContent = project.tasks.length;
  numTasksContainer.appendChild(numTasks);

  projectItem.appendChild(projectName);
  projectItem.appendChild(numTasksContainer);

  projectItem.addEventListener("click", () => {
    (0,_project_content__WEBPACK_IMPORTED_MODULE_0__.changeProject)(projectItem, project);
  });

  return projectItem;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProjectItem);


/***/ }),

/***/ "./src/ui/sidebar.js":
/*!***************************!*\
  !*** ./src/ui/sidebar.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSidebar: () => (/* binding */ createSidebar),
/* harmony export */   removeProjectFromSidebar: () => (/* binding */ removeProjectFromSidebar),
/* harmony export */   toggleActiveItem: () => (/* binding */ toggleActiveItem),
/* harmony export */   updateProjectCount: () => (/* binding */ updateProjectCount),
/* harmony export */   updateProjectItem: () => (/* binding */ updateProjectItem)
/* harmony export */ });
/* harmony import */ var _assets_add_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/add.svg */ "./src/assets/add.svg");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/ui/modal.js");
/* harmony import */ var _project_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-item */ "./src/ui/project-item.js");
/* harmony import */ var _controllers_project_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/project-controller */ "./src/controllers/project-controller.js");
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/project */ "./src/models/project.js");
/* harmony import */ var _controllers_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controllers/storage */ "./src/controllers/storage.js");
/* harmony import */ var _models_task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/task */ "./src/models/task.js");








const createSidebar = () => {
  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";

  const generalItem = (0,_models_project__WEBPACK_IMPORTED_MODULE_4__["default"])("General", "What are you working on?", []);

  const projectItemsContainer = document.createElement("div");
  projectItemsContainer.id = "project-items-container";

  let projectsInStorage = (0,_controllers_storage__WEBPACK_IMPORTED_MODULE_5__.retrieveProjects)();

  if (projectsInStorage === null) {
    (0,_controllers_project_controller__WEBPACK_IMPORTED_MODULE_3__.addProjectItem)(generalItem.name, generalItem.description, []);
    (0,_controllers_storage__WEBPACK_IMPORTED_MODULE_5__.updateProjects)((0,_controllers_project_controller__WEBPACK_IMPORTED_MODULE_3__.getProjects)());
    projectsInStorage = (0,_controllers_storage__WEBPACK_IMPORTED_MODULE_5__.retrieveProjects)();
  } else {
    const generalProject = projectsInStorage[0];
    (0,_controllers_project_controller__WEBPACK_IMPORTED_MODULE_3__.addProjectItem)(
      generalProject.name,
      generalProject.description,
      generalProject.tasks
    );
    initializeTasks(generalProject);
  }

  const projectItemsHeader = document.createElement("p");
  projectItemsHeader.id = "project-items-header";
  projectItemsHeader.textContent = "Projects";
  projectItemsContainer.appendChild(projectItemsHeader);

  const itemsContainerUnderline = document.createElement("hr");
  projectItemsContainer.appendChild(itemsContainerUnderline);

  projectsInStorage.shift();
  const userProjects = projectsInStorage;
  // Add existing projects to container
  for (const project of userProjects) {
    const projectInStorage = (0,_controllers_project_controller__WEBPACK_IMPORTED_MODULE_3__.addProjectItem)(
      project.name,
      project.description,
      project.tasks
    );
    console.log(projectInStorage);
    initializeTasks(projectInStorage);
    projectItemsContainer.appendChild((0,_project_item__WEBPACK_IMPORTED_MODULE_2__["default"])(projectInStorage));
  }

  const addProjectButton = document.createElement("button");
  addProjectButton.id = "add-project-button";
  const addIcon = new Image();
  addIcon.src = _assets_add_svg__WEBPACK_IMPORTED_MODULE_0__;
  addProjectButton.appendChild(addIcon);
  addProjectButton.addEventListener("click", () => {
    (0,_modal__WEBPACK_IMPORTED_MODULE_1__.triggerProjectModal)();
  });

  const addProjectText = document.createElement("p");
  addProjectText.textContent = "Add Project";
  addProjectButton.appendChild(addProjectText);

  sidebar.appendChild((0,_project_item__WEBPACK_IMPORTED_MODULE_2__["default"])(generalItem));
  sidebar.appendChild(projectItemsContainer);
  sidebar.appendChild(addProjectButton);

  return sidebar;
};

const toggleActiveItem = (projectItem) => {
  const allProjects = document.querySelectorAll(".project-item");
  allProjects.forEach((project) => project.classList.remove("active"));
  projectItem.classList.toggle("active");
};

const updateProjectCount = (project, projectAdded) => {
  const index = (0,_controllers_project_controller__WEBPACK_IMPORTED_MODULE_3__.getProjects)().indexOf(project);
  const numTasks =
    document.querySelectorAll(".project-item")[index].lastChild.firstChild;

  if (projectAdded) {
    numTasks.textContent++;
  } else {
    numTasks.textContent--;
  }
};

const updateProjectItem = (project) => {
  const index = (0,_controllers_project_controller__WEBPACK_IMPORTED_MODULE_3__.getProjects)().indexOf(project);
  const projectItemToUpdate = document.querySelectorAll(".project-item")[index];
  const projectItemsContainer = document.getElementById(
    "project-items-container"
  );
  const updatedProjectItem = (0,_project_item__WEBPACK_IMPORTED_MODULE_2__["default"])(project);
  projectItemsContainer.insertBefore(updatedProjectItem, projectItemToUpdate);
  projectItemsContainer.removeChild(projectItemToUpdate);
  return updatedProjectItem;
};

const removeProjectFromSidebar = (project) => {
  const index = (0,_controllers_project_controller__WEBPACK_IMPORTED_MODULE_3__.getProjects)().indexOf(project);
  const projectItemToRemove = document.querySelectorAll(".project-item")[index];
  const projectItemsContainer = document.getElementById(
    "project-items-container"
  );
  projectItemsContainer.removeChild(projectItemToRemove);
};

const initializeTasks = (project) => {
  const tasks = [];
  for (const object in project.tasks) {
    const task = (0,_models_task__WEBPACK_IMPORTED_MODULE_6__["default"])(
      object.name,
      object.description,
      object.dueDate,
      object.priority,
      object.status,
      project
    );
    tasks.push(task);
  }
  project.tasks = tasks;
};




/***/ }),

/***/ "./src/ui/task-item.js":
/*!*****************************!*\
  !*** ./src/ui/task-item.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var _assets_edit_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/edit.svg */ "./src/assets/edit.svg");
/* harmony import */ var _assets_delete_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/delete.svg */ "./src/assets/delete.svg");
/* harmony import */ var _project_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-content */ "./src/ui/project-content.js");
/* harmony import */ var _edit_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-modal */ "./src/ui/edit-modal.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar */ "./src/ui/sidebar.js");
/* harmony import */ var _controllers_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controllers/storage */ "./src/controllers/storage.js");
/* harmony import */ var _controllers_project_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../controllers/project-controller */ "./src/controllers/project-controller.js");









const createTaskItem = (task, project) => {
  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");
  taskItem.classList.add(`priority-${task.priority.toLowerCase()}`);

  // Task Status
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "task-checkbox";
  checkbox.name = "task-checkbox";
  checkbox.checked = task.status;

  checkbox.addEventListener("click", () => {
    task.changeStatus();
    const priority = task.priority;
    markAsComplete(taskItem, priority);
  });

  taskItem.appendChild(checkbox);

  // Task Name
  const name = document.createElement("p");
  name.className = "task-name";
  name.textContent = task.name;
  taskItem.appendChild(name);

  // Task Date
  const date = document.createElement("p");
  date.className = "task-date";
  date.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(task.dueDate, "yyyy-MM-dd");
  taskItem.appendChild(date);

  // Edit Button
  const editButton = document.createElement("button");
  editButton.className = "task-edit-button";

  const editIcon = new Image();
  editIcon.classList.add("icon");
  editIcon.src = _assets_edit_svg__WEBPACK_IMPORTED_MODULE_0__;
  editButton.appendChild(editIcon);

  editButton.addEventListener("click", () => {
    (0,_edit_modal__WEBPACK_IMPORTED_MODULE_3__.triggerTaskEditModal)(task, project);
    (0,_controllers_storage__WEBPACK_IMPORTED_MODULE_5__.updateProjects)((0,_controllers_project_controller__WEBPACK_IMPORTED_MODULE_6__.getProjects)());
  });

  taskItem.appendChild(editButton);

  // Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.className = "task-delete-button";

  const deleteIcon = new Image();
  deleteIcon.classList.add("icon");
  deleteIcon.src = _assets_delete_svg__WEBPACK_IMPORTED_MODULE_1__;
  deleteButton.appendChild(deleteIcon);

  deleteButton.addEventListener("click", () => {
    project.removeTask(task);
    (0,_project_content__WEBPACK_IMPORTED_MODULE_2__.removeTaskItem)(taskItem);
    (0,_controllers_storage__WEBPACK_IMPORTED_MODULE_5__.updateProjects)((0,_controllers_project_controller__WEBPACK_IMPORTED_MODULE_6__.getProjects)());
    (0,_sidebar__WEBPACK_IMPORTED_MODULE_4__.updateProjectCount)(project, false);
  });

  taskItem.appendChild(deleteButton);

  return taskItem;
};

const markAsComplete = (taskItem, priority) => {
  taskItem.classList.toggle(`priority-${priority.toLowerCase()}`);
  taskItem.classList.toggle("completed");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTaskItem);


/***/ }),

/***/ "./src/assets/add.svg":
/*!****************************!*\
  !*** ./src/assets/add.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c0e8f90e7b3804ff30e3.svg";

/***/ }),

/***/ "./src/assets/close.svg":
/*!******************************!*\
  !*** ./src/assets/close.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f9e1fd884e38ced99e02.svg";

/***/ }),

/***/ "./src/assets/delete.svg":
/*!*******************************!*\
  !*** ./src/assets/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eac1a29b0fcadff53187.svg";

/***/ }),

/***/ "./src/assets/edit.svg":
/*!*****************************!*\
  !*** ./src/assets/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb174535b66c89089803.svg";

/***/ }),

/***/ "./src/assets/menu.svg":
/*!*****************************!*\
  !*** ./src/assets/menu.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "62156aa1f3f8ed08b3c4.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyw0RkFBNEYsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxPQUFPLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxXQUFXLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZ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QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVB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QUFDQTtBQUNBLGlCQUFpQix3REFBVztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SWtDO0FBQ007QUFDSTtBQUNLO0FBQ0M7QUFDTDtBQUNTO0FBQ1E7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsNEJBQTRCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0RBQVE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2Q0FBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUFvQjtBQUN4QixJQUFJLG9FQUFjLENBQUMsNEVBQVc7QUFDOUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwrQ0FBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0VBQWM7QUFDbEIsSUFBSSxvRUFBYyxDQUFDLDRFQUFXO0FBQzlCLElBQUksNERBQWtCO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyx1QkFBdUI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZUlTTy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRyb2xsZXJzL3Byb2plY3QtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udHJvbGxlcnMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udHJvbGxlcnMvdGFzay1jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS9lZGl0LW1vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpL21vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS9wcm9qZWN0LWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpL3Byb2plY3QtaXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdWkvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdWkvdGFzay1pdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiB8fCBHZW5lcmFsIFN0eWxlcyAqL1xyXG5cclxuOnJvb3Qge1xyXG4gIC0tcHJpbWFyeS1jb2xvcjogd2hpdGU7XHJcbiAgLS1zZWNvbmRhcnktY29sb3I6IGxpZ2h0Z3JheTtcclxuICAtLWNvbXBsZXRlZC1jb2xvcjogZ3JlZW47XHJcbiAgLS1oaWdoLXByaW9yaXR5LWNvbG9yOiByZWQ7XHJcbiAgLS1tZWRpdW0tcHJpb3JpdHktY29sb3I6IG9yYW5nZTtcclxuICAtLWxvdy1wcmlvcml0eS1jb2xvcjogYmx1ZTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbmJvZHksXHJcbnAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlOiAxZnIgMTBmciAvIDFmciA2ZnI7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5jb250YWluZXIuY29udGFpbmVyLm5vLXNpZGViYXIgI3Byb2plY3QtY29udGFpbmVyIHtcclxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xyXG4gIGdyaWQtcm93OiAyO1xyXG59XHJcblxyXG4jYWRkLXByb2plY3QtYnV0dG9uLFxyXG4jYWRkLXRhc2stYnV0dG9uIHtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4vKiB8fCBIZWFkZXIgKi9cclxuaGVhZGVyIHtcclxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuI21lbnUtYnV0dG9uIHtcclxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xyXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuaDEge1xyXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIHx8IFNpZGViYXIgKi9cclxuXHJcbiNzaWRlYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDFyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuI3NpZGViYXIuaGlkZGVuIHtcclxuICB3aWR0aDogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4jcHJvamVjdC1pdGVtcy1oZWFkZXIsXHJcbi5wcm9qZWN0LWl0ZW0tbmFtZSB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG5ociB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4vKiB8fCBQcm9qZWN0IEl0ZW0gKi9cclxuLnByb2plY3QtaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDFyZW07XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWl0ZW0uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuLm51bS10YXNrcy1jb250YWluZXIge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLm51bS10YXNrcyB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4vKiB8fCBQcm9qZWN0IENvbnRlbnQgKi9cclxuI3Byb2plY3QtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDAgMTB2dztcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4jcHJvamVjdC1jb250ZW50IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmcjtcclxufVxyXG5cclxuI2NvbnRlbnQtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgyLCAxZnIpIC8gMTBmciAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgIFwibmFtZSBlZGl0LWJ1dHRvblwiXHJcbiAgICBcImRlc2NyaXB0aW9uIGRlbGV0ZS1idXR0b25cIjtcclxuICByb3ctZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4jY29udGVudC1oZWFkZXIgYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLnByb2plY3QtbmFtZSB7XHJcbiAgZ3JpZC1hcmVhOiBuYW1lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnByb2plY3QtZGVzY3JpcHRpb24ge1xyXG4gIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XHJcbn1cclxuXHJcbi5wcm9qZWN0LWVkaXQtYnV0dG9uIHtcclxuICBncmlkLWFyZWE6IGVkaXQtYnV0dG9uO1xyXG59XHJcblxyXG4ucHJvamVjdC1kZWxldGUtYnV0dG9uIHtcclxuICBncmlkLWFyZWE6IGRlbGV0ZS1idXR0b247XHJcbn1cclxuXHJcbiN0YXNrLWl0ZW1zLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4jYWRkLXRhc2stYnV0dG9uIHtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLyogfHwgVGFzayBJdGVtICovXHJcblxyXG4udGFzay1pdGVtIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnIgcmVwZWF0KDIsIDAuNWZyKTtcclxuICBnYXA6IDFyZW07XHJcbiAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi8qIFRhc2sgUHJpb3JpdHkgKi9cclxuLnByaW9yaXR5LWxvdyB7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1sb3ctcHJpb3JpdHktY29sb3IpO1xyXG59XHJcblxyXG4ucHJpb3JpdHktbWVkaXVtIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLW1lZGl1bS1wcmlvcml0eS1jb2xvcik7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1oaWdoIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWhpZ2gtcHJpb3JpdHktY29sb3IpO1xyXG59XHJcblxyXG4uY29tcGxldGVkIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWNvbXBsZXRlZC1jb2xvcik7XHJcbn1cclxuXHJcbi50YXNrLWl0ZW0gYnV0dG9uLFxyXG4udGFzay1pdGVtICN0YXNrLWRhdGUge1xyXG4gIHBsYWNlLXNlbGY6IGVuZDtcclxufVxyXG5cclxuLyogfHwgTW9kYWwgKi9cclxuXHJcbi5tb2RhbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgei1pbmRleDogMjtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uZm9ybS1oZWFkZXIge1xyXG4gIGdyaWQtY29sdW1uOiAyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbiN0YXNrLWVkaXQtbW9kYWwgLmhlYWRlci1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGFpbmVyIGJ1dHRvbiB7XHJcbiAgZ3JpZC1jb2x1bW46IDM7XHJcbiAganVzdGlmeS1zZWxmOiBlbmQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDF2bWluO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG50ZXh0YXJlYSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEuNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICByZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFyZW0gM3JlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi8qIFNvdXJjZTogaHR0cHM6Ly93d3cuZnJlZWNvZGVjYW1wLm9yZy9uZXdzL2hvdy10by1idWlsZC1hLW1vZGFsLXdpdGgtamF2YXNjcmlwdC8gKi9cclxuI292ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsc0JBQXNCOztBQUV0QjtFQUNFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQiwrQkFBK0I7RUFDL0IsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUEsY0FBYztBQUNkO0VBQ0UsbUJBQW1CO0VBQ25C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QUNFLHlDQUF5QztFQUN6QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWiwyQ0FBMkM7QUFDN0M7O0FBRUEsb0ZBQW9GO0FBQ3BGO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHx8IEdlbmVyYWwgU3R5bGVzICovXFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1wcmltYXJ5LWNvbG9yOiB3aGl0ZTtcXHJcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiBsaWdodGdyYXk7XFxyXFxuICAtLWNvbXBsZXRlZC1jb2xvcjogZ3JlZW47XFxyXFxuICAtLWhpZ2gtcHJpb3JpdHktY29sb3I6IHJlZDtcXHJcXG4gIC0tbWVkaXVtLXByaW9yaXR5LWNvbG9yOiBvcmFuZ2U7XFxyXFxuICAtLWxvdy1wcmlvcml0eS1jb2xvcjogYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LFxcclxcbnAge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlOiAxZnIgMTBmciAvIDFmciA2ZnI7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci5jb250YWluZXIubm8tc2lkZWJhciAjcHJvamVjdC1jb250YWluZXIge1xcclxcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXHJcXG4gIGdyaWQtcm93OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3QtYnV0dG9uLFxcclxcbiNhZGQtdGFzay1idXR0b24ge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi8qIHx8IEhlYWRlciAqL1xcclxcbmhlYWRlciB7XFxyXFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudS1idXR0b24ge1xcclxcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogfHwgU2lkZWJhciAqL1xcclxcblxcclxcbiNzaWRlYmFyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyLmhpZGRlbiB7XFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LWl0ZW1zLWhlYWRlcixcXHJcXG4ucHJvamVjdC1pdGVtLW5hbWUge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5ociB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcbi8qIHx8IFByb2plY3QgSXRlbSAqL1xcclxcbi5wcm9qZWN0LWl0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW0uYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubnVtLXRhc2tzLWNvbnRhaW5lciB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm51bS10YXNrcyB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi8qIHx8IFByb2plY3QgQ29udGVudCAqL1xcclxcbiNwcm9qZWN0LWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW46IDAgMTB2dztcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMiwgMWZyKSAvIDEwZnIgMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcIm5hbWUgZWRpdC1idXR0b25cXFwiXFxyXFxuICAgIFxcXCJkZXNjcmlwdGlvbiBkZWxldGUtYnV0dG9uXFxcIjtcXHJcXG4gIHJvdy1nYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50LWhlYWRlciBidXR0b24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbmFtZSB7XFxyXFxuICBncmlkLWFyZWE6IG5hbWU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcXHJcXG4gIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWVkaXQtYnV0dG9uIHtcXHJcXG4gIGdyaWQtYXJlYTogZWRpdC1idXR0b247XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWRlbGV0ZS1idXR0b24ge1xcclxcbiAgZ3JpZC1hcmVhOiBkZWxldGUtYnV0dG9uO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFzay1pdGVtcy1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2stYnV0dG9uIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB8fCBUYXNrIEl0ZW0gKi9cXHJcXG5cXHJcXG4udGFzay1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyIHJlcGVhdCgyLCAwLjVmcik7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBib3JkZXItbGVmdDogMTVweCBzb2xpZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi8qIFRhc2sgUHJpb3JpdHkgKi9cXHJcXG4ucHJpb3JpdHktbG93IHtcXHJcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbG93LXByaW9yaXR5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LW1lZGl1bSB7XFxyXFxuICBib3JkZXItY29sb3I6IHZhcigtLW1lZGl1bS1wcmlvcml0eS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1oaWdoIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0taGlnaC1wcmlvcml0eS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZWQge1xcclxcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21wbGV0ZWQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1pdGVtIGJ1dHRvbixcXHJcXG4udGFzay1pdGVtICN0YXNrLWRhdGUge1xcclxcbiAgcGxhY2Utc2VsZjogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB8fCBNb2RhbCAqL1xcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0taGVhZGVyIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbiB7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2stZWRpdC1tb2RhbCAuaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWNvbnRhaW5lciBidXR0b24ge1xcclxcbiAgZ3JpZC1jb2x1bW46IDM7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDF2bWluO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmxhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxyXFxudGV4dGFyZWEge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgbWluLWhlaWdodDogMS41cmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMXJlbSAzcmVtO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU291cmNlOiBodHRwczovL3d3dy5mcmVlY29kZWNhbXAub3JnL25ld3MvaG93LXRvLWJ1aWxkLWEtbW9kYWwtd2l0aC1qYXZhc2NyaXB0LyAqL1xcclxcbiNvdmVybGF5IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiLyoqXG4gKiBEYXlzIGluIDEgd2Vlay5cbiAqXG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIGRheXNJbldlZWsgPSA3O1xuXG4vKipcbiAqIERheXMgaW4gMSB5ZWFyXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqXG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIGRheXNJblllYXIgPSAzNjUuMjQyNTtcblxuLyoqXG4gKiBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG5cbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuXG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcblxuLyoqXG4gKiBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pblRpbWUgPSAtbWF4VGltZTtcblxuLyoqXG4gKiBNaW51dGVzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWludXRlc0luSG91ciA9IDYwO1xuXG4vKipcbiAqIE1vbnRocyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbW9udGhzSW5RdWFydGVyID0gMztcblxuLyoqXG4gKiBNb250aHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1vbnRoc0luWWVhciA9IDEyO1xuXG4vKipcbiAqIFF1YXJ0ZXJzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHF1YXJ0ZXJzSW5ZZWFyID0gNDtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luSG91ciA9IDM2MDA7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5NaW51dGUgPSA2MDtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgZGF5XG4gKlxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgd2Vla1xuICpcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBtb250aFxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzOyIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciwgbWlsbGlzZWNvbmRzSW5NaW51dGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgcGFyc2VJU09cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2UgSVNPIHN0cmluZ1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUGFyc2UgdGhlIGdpdmVuIHN0cmluZyBpbiBJU08gODYwMSBmb3JtYXQgYW5kIHJldHVybiBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEZ1bmN0aW9uIGFjY2VwdHMgY29tcGxldGUgSVNPIDg2MDEgZm9ybWF0cyBhcyB3ZWxsIGFzIHBhcnRpYWwgaW1wbGVtZW50YXRpb25zLlxuICogSVNPIDg2MDE6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDFcbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXNuJ3QgYSBzdHJpbmcsIHRoZSBmdW5jdGlvbiBjYW5ub3QgcGFyc2UgdGhlIHN0cmluZyBvclxuICogdGhlIHZhbHVlcyBhcmUgaW52YWxpZCwgaXQgcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBvcHRpb25zKSB7XG4gIHZhciBfb3B0aW9ucyRhZGRpdGlvbmFsRGk7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IHRvSW50ZWdlcigoX29wdGlvbnMkYWRkaXRpb25hbERpID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpICE9PSBudWxsICYmIF9vcHRpb25zJGFkZGl0aW9uYWxEaSAhPT0gdm9pZCAwID8gX29wdGlvbnMkYWRkaXRpb25hbERpIDogMik7XG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XG4gIH1cbiAgaWYgKCEodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpID09PSAnW29iamVjdCBTdHJpbmddJykpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuICB2YXIgZGF0ZTtcbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cbiAgaWYgKCFkYXRlIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSk7XG4gICAgaWYgKGlzTmFOKHRpbWUpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH1cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG4gICAgaWYgKGlzTmFOKG9mZnNldCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgZGlydHlEYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSk7XG4gICAgLy8ganMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKDApO1xuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihkaXJ0eURhdGUuZ2V0VVRDRnVsbFllYXIoKSwgZGlydHlEYXRlLmdldFVUQ01vbnRoKCksIGRpcnR5RGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgIHJlc3VsdC5zZXRIb3VycyhkaXJ0eURhdGUuZ2V0VVRDSG91cnMoKSwgZGlydHlEYXRlLmdldFVUQ01pbnV0ZXMoKSwgZGlydHlEYXRlLmdldFVUQ1NlY29uZHMoKSwgZGlydHlEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KTtcbn1cbnZhciBwYXR0ZXJucyA9IHtcbiAgZGF0ZVRpbWVEZWxpbWl0ZXI6IC9bVCBdLyxcbiAgdGltZVpvbmVEZWxpbWl0ZXI6IC9bWiBdL2ksXG4gIHRpbWV6b25lOiAvKFtaKy1dLiopJC9cbn07XG52YXIgZGF0ZVJlZ2V4ID0gL14tPyg/OihcXGR7M30pfChcXGR7Mn0pKD86LT8oXFxkezJ9KSk/fFcoXFxkezJ9KSg/Oi0/KFxcZHsxfSkpP3wpJC87XG52YXIgdGltZVJlZ2V4ID0gL14oXFxkezJ9KD86Wy4sXVxcZCopPykoPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/KD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyQvO1xudmFyIHRpbWV6b25lUmVnZXggPSAvXihbKy1dKShcXGR7Mn0pKD86Oj8oXFxkezJ9KSk/JC87XG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgdmFyIGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIHZhciB0aW1lU3RyaW5nO1xuXG4gIC8vIFRoZSByZWdleCBtYXRjaCBzaG91bGQgb25seSByZXR1cm4gYXQgbWF4aW11bSB0d28gYXJyYXkgZWxlbWVudHMuXG4gIC8vIFtkYXRlXSwgW3RpbWVdLCBvciBbZGF0ZSwgdGltZV0uXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcbiAgICBpZiAocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIudGVzdChkYXRlU3RyaW5ncy5kYXRlKSkge1xuICAgICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIpWzBdO1xuICAgICAgdGltZVN0cmluZyA9IGRhdGVTdHJpbmcuc3Vic3RyKGRhdGVTdHJpbmdzLmRhdGUubGVuZ3RoLCBkYXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgfVxuICB9XG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGF0ZVN0cmluZ3M7XG59XG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeKD86KFxcXFxkezR9fFsrLV1cXFxcZHsnICsgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KXwoXFxcXGR7Mn18WystXVxcXFxkeycgKyAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pJCknKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7XG4gICAgeWVhcjogTmFOLFxuICAgIHJlc3REYXRlU3RyaW5nOiAnJ1xuICB9O1xuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdID8gcGFyc2VJbnQoY2FwdHVyZXNbMV0pIDogbnVsbDtcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSA/IHBhcnNlSW50KGNhcHR1cmVzWzJdKSA6IG51bGw7XG5cbiAgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuICByZXR1cm4ge1xuICAgIHllYXI6IGNlbnR1cnkgPT09IG51bGwgPyB5ZWFyIDogY2VudHVyeSAqIDEwMCxcbiAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSgoY2FwdHVyZXNbMV0gfHwgY2FwdHVyZXNbMl0pLmxlbmd0aClcbiAgfTtcbn1cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpO1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIHZhciBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICB2YXIgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIHZhciB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIHZhciBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG4gIGlmIChpc1dlZWtEYXRlKSB7XG4gICAgaWYgKCF2YWxpZGF0ZVdlZWtEYXRlKHllYXIsIHdlZWssIGRheU9mV2VlaykpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgICByZXR1cm4gZGF5T2ZJU09XZWVrWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspO1xuICB9IGVsc2Uge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHwgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgTWF0aC5tYXgoZGF5T2ZZZWFyLCBkYXkpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuZnVuY3Rpb24gcGFyc2VEYXRlVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xufVxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgdmFyIGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHJldHVybiBob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSArIHNlY29uZHMgKiAxMDAwO1xufVxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMDtcbn1cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcbiAgdmFyIGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xuICBpZiAoIXZhbGlkYXRlVGltZXpvbmUoaG91cnMsIG1pbnV0ZXMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5mdW5jdGlvbiBkYXlPZklTT1dlZWtZZWFyKGlzb1dlZWtZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihpc29XZWVrWWVhciwgMCwgNCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XG4gIHZhciBkaWZmID0gKHdlZWsgLSAxKSAqIDcgKyBkYXkgKyAxIC0gZm91cnRoT2ZKYW51YXJ5RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59XG5cbi8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXG5cbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxudmFyIGRheXNJbk1vbnRocyA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSkge1xuICByZXR1cm4gbW9udGggPj0gMCAmJiBtb250aCA8PSAxMSAmJiBkYXRlID49IDEgJiYgZGF0ZSA8PSAoZGF5c0luTW9udGhzW21vbnRoXSB8fCAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMjkgOiAyOCkpO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykge1xuICBpZiAoaG91cnMgPT09IDI0KSB7XG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMDtcbiAgfVxuICByZXR1cm4gc2Vjb25kcyA+PSAwICYmIHNlY29uZHMgPCA2MCAmJiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8IDYwICYmIGhvdXJzID49IDAgJiYgaG91cnMgPCAyNTtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwcm9qZWN0RmFjdG9yeSBmcm9tIFwiLi4vbW9kZWxzL3Byb2plY3RcIjtcclxuaW1wb3J0IHsgcmV0cmlldmVQcm9qZWN0cyB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcclxuXHJcbmxldCBwcm9qZWN0cyA9IFtdO1xyXG5cclxuY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHByb2plY3RzO1xyXG59O1xyXG5cclxuY29uc3QgYWRkUHJvamVjdEl0ZW0gPSAobmFtZSwgZGVzY3JpcHRpb24sIHRhc2tzID0gW10pID0+IHtcclxuICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkobmFtZSwgZGVzY3JpcHRpb24sIHRhc2tzKTtcclxuICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG4gIHJldHVybiBuZXdQcm9qZWN0O1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XHJcbiAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5pbmRleE9mKHByb2plY3QpO1xyXG4gIHByb2plY3RzW2luZGV4XSA9IHByb2plY3Q7XHJcbn07XHJcblxyXG5jb25zdCByZW1vdmVQcm9qZWN0SXRlbSA9IChwcm9qZWN0KSA9PiB7XHJcbiAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5pbmRleE9mKHByb2plY3QpO1xyXG4gIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBhZGRQcm9qZWN0SXRlbSwgZ2V0UHJvamVjdHMsIHVwZGF0ZVByb2plY3QsIHJlbW92ZVByb2plY3RJdGVtIH07XHJcbiIsImltcG9ydCB7IGdldFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdC1jb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCByZXRyaWV2ZVByb2plY3RzID0gKCkgPT4ge1xyXG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlUHJvamVjdHMgPSAocHJvamVjdHMpID0+IHtcclxuICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgcmV0cmlldmVQcm9qZWN0cywgdXBkYXRlUHJvamVjdHMgfTtcclxuIiwiaW1wb3J0IHRhc2tGYWN0b3J5IGZyb20gXCIuLi9tb2RlbHMvdGFza1wiO1xyXG5cclxuY29uc3QgYWRkVGFza0l0ZW0gPSAobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMsIHByb2plY3QpID0+IHtcclxuICBjb25zdCBuZXdUYXNrID0gdGFza0ZhY3RvcnkobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMpO1xyXG4gIHByb2plY3QuYWRkVGFzayhuZXdUYXNrKTtcclxuICByZXR1cm4gbmV3VGFzaztcclxufTtcclxuXHJcbmV4cG9ydCB7IGFkZFRhc2tJdGVtIH07XHJcbiIsImltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vdWkvaGVhZGVyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVNpZGViYXIgfSBmcm9tIFwiLi91aS9zaWRlYmFyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RDb250YWluZXIgfSBmcm9tIFwiLi91aS9wcm9qZWN0LWNvbnRlbnRcIjtcclxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdE1vZGFsLCBjcmVhdGVUYXNrTW9kYWwsIGNyZWF0ZU92ZXJsYXkgfSBmcm9tIFwiLi91aS9tb2RhbFwiO1xyXG5pbXBvcnQgXCIuL2Nzcy9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdEVkaXRNb2RhbCwgY3JlYXRlVGFza0VkaXRNb2RhbCB9IGZyb20gXCIuL3VpL2VkaXQtbW9kYWxcIjtcclxuaW1wb3J0IHsgZ2V0UHJvamVjdHMgfSBmcm9tIFwiLi9jb250cm9sbGVycy9wcm9qZWN0LWNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgdXBkYXRlUHJvamVjdENvdW50IH0gZnJvbSBcIi4vdWkvc2lkZWJhclwiO1xyXG5cclxuY29uc3QgaW5pdGlhbGl6ZVdlYnBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJjb250YWluZXJcIjtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVNpZGViYXIoKSk7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RDb250YWluZXIoKSk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVPdmVybGF5KCkpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdE1vZGFsKCkpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza01vZGFsKCkpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEVkaXRNb2RhbCgpKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tFZGl0TW9kYWwoKSk7XHJcblxyXG4gIC8vIFVwZGF0ZSBwcm9qZWN0IGNvdW50IG9mIGdlbmVyYWwgcHJvamVjdFxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ2V0UHJvamVjdHMoKVswXS50YXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgdXBkYXRlUHJvamVjdENvdW50KGdldFByb2plY3RzKClbMF0sIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS1idXR0b25cIik7XHJcbiAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XHJcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyXCIpO1xyXG4gICAgc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJuby1zaWRlYmFyXCIpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuaW5pdGlhbGl6ZVdlYnBhZ2UoKTtcclxuIiwiY29uc3QgcHJvamVjdEZhY3RvcnkgPSAobmFtZSwgZGVzY3JpcHRpb24sIHRhc2tzKSA9PiB7XHJcbiAgZnVuY3Rpb24gYWRkVGFzayhuZXdUYXNrKSB7XHJcbiAgICB0YXNrcy5wdXNoKG5ld1Rhc2spO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXNrVG9SZW1vdmUpIHtcclxuICAgIGNvbnN0IGluZGV4T2ZUYXNrID0gdGFza3MuaW5kZXhPZih0YXNrVG9SZW1vdmUpO1xyXG4gICAgdGFza3Muc3BsaWNlKGluZGV4T2ZUYXNrLCAxKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZVRhc2sodXBkYXRlZFRhc2spIHtcclxuICAgIGNvbnN0IGluZGV4T2ZUYXNrID0gdGFza3MuaW5kZXhPZih1cGRhdGVkVGFzayk7XHJcbiAgICB0YXNrc1tpbmRleE9mVGFza10gPSB1cGRhdGVkVGFzaztcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBhZGRUYXNrLFxyXG4gICAgcmVtb3ZlVGFzayxcclxuICAgIHVwZGF0ZVRhc2ssXHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICB9LFxyXG4gICAgc2V0IG5hbWUobmV3TmFtZSkge1xyXG4gICAgICBuYW1lID0gbmV3TmFtZTtcclxuICAgIH0sXHJcbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7XHJcbiAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcclxuICAgIH0sXHJcbiAgICBzZXQgZGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcclxuICAgICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcclxuICAgIH0sXHJcbiAgICBnZXQgdGFza3MoKSB7XHJcbiAgICAgIHJldHVybiB0YXNrcztcclxuICAgIH0sXHJcbiAgICBzZXQgdGFza3MobmV3VGFza3MpIHtcclxuICAgICAgdGFza3MgPSBuZXdUYXNrcztcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2plY3RGYWN0b3J5O1xyXG4iLCJjb25zdCB0YXNrRmFjdG9yeSA9IChuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cykgPT4ge1xyXG4gIGZ1bmN0aW9uIGNoYW5nZVN0YXR1cygpIHtcclxuICAgIHN0YXR1cyA9ICFzdGF0dXM7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgfSxcclxuICAgIHNldCBuYW1lKG5ld05hbWUpIHtcclxuICAgICAgbmFtZSA9IG5ld05hbWU7XHJcbiAgICB9LFxyXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xyXG4gICAgICByZXR1cm4gZGVzY3JpcHRpb247XHJcbiAgICB9LFxyXG4gICAgc2V0IGRlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XHJcbiAgICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XHJcbiAgICB9LFxyXG4gICAgZ2V0IGR1ZURhdGUoKSB7XHJcbiAgICAgIHJldHVybiBkdWVEYXRlO1xyXG4gICAgfSxcclxuICAgIHNldCBkdWVEYXRlKG5ld0R1ZURhdGUpIHtcclxuICAgICAgZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XHJcbiAgICB9LFxyXG4gICAgZ2V0IHByaW9yaXR5KCkge1xyXG4gICAgICByZXR1cm4gcHJpb3JpdHk7XHJcbiAgICB9LFxyXG4gICAgc2V0IHByaW9yaXR5KG5ld1ByaW9yaXR5KSB7XHJcbiAgICAgIHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XHJcbiAgICB9LFxyXG4gICAgZ2V0IHN0YXR1cygpIHtcclxuICAgICAgcmV0dXJuIHN0YXR1cztcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VTdGF0dXMsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhc2tGYWN0b3J5O1xyXG4iLCJpbXBvcnQgeyBwYXJzZUlTTyB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gXCIuLi9hc3NldHMvY2xvc2Uuc3ZnXCI7XHJcbmltcG9ydCB7IGdldFByb2plY3RzLCB1cGRhdGVQcm9qZWN0IH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL3Byb2plY3QtY29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyB0b2dnbGVNb2RhbCB9IGZyb20gXCIuL21vZGFsXCI7XHJcbmltcG9ydCB7IGNoYW5nZVByb2plY3QsIHVwZGF0ZVRhc2tJdGVtIH0gZnJvbSBcIi4vcHJvamVjdC1jb250ZW50XCI7XHJcbmltcG9ydCB7IHVwZGF0ZVByb2plY3RJdGVtIH0gZnJvbSBcIi4vc2lkZWJhclwiO1xyXG5pbXBvcnQgeyB1cGRhdGVQcm9qZWN0cyB9IGZyb20gXCIuLi9jb250cm9sbGVycy9zdG9yYWdlXCI7XHJcbmNvbnN0IGNyZWF0ZVByb2plY3RFZGl0TW9kYWwgPSAoKSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdEVkaXRNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJvamVjdEVkaXRNb2RhbC5pZCA9IFwicHJvamVjdC1lZGl0LW1vZGFsXCI7XHJcbiAgcHJvamVjdEVkaXRNb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XHJcbiAgcHJvamVjdEVkaXRNb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG5cclxuICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhlYWRlckNvbnRhaW5lci5jbGFzc05hbWUgPSBcImhlYWRlci1jb250YWluZXJcIjtcclxuXHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGhlYWRlci5jbGFzc05hbWUgPSBcImZvcm0taGVhZGVyXCI7XHJcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJFZGl0IFByb2plY3RcIjtcclxuICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNsb3NlQnV0dG9uLmlkID0gXCJwcm9qZWN0LWNsb3NlLWJ1dHRvblwiO1xyXG4gIGNvbnN0IGNsb3NlSWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gIGNsb3NlSWNvbi5jbGFzc05hbWUgPSBcImljb25cIjtcclxuICBjbG9zZUljb24uc3JjID0gQ2xvc2VJY29uO1xyXG5cclxuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWVkaXQtbmFtZVwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtZWRpdC1kZXNjcmlwdGlvblwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICB0b2dnbGVNb2RhbChwcm9qZWN0RWRpdE1vZGFsKTtcclxuICB9KTtcclxuXHJcbiAgY2xvc2VCdXR0b24uYXBwZW5kQ2hpbGQoY2xvc2VJY29uKTtcclxuICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xyXG5cclxuICBwcm9qZWN0RWRpdE1vZGFsLmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lcik7XHJcbiAgcHJvamVjdEVkaXRNb2RhbC5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0RWRpdEZvcm0oKSk7XHJcblxyXG4gIHJldHVybiBwcm9qZWN0RWRpdE1vZGFsO1xyXG59O1xyXG5cclxuY29uc3QgdHJpZ2dlclByb2plY3RFZGl0TW9kYWwgPSAocHJvamVjdCkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3RFZGl0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtZWRpdC1tb2RhbFwiKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtZWRpdC1uYW1lXCIpLnZhbHVlID0gcHJvamVjdC5uYW1lO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1lZGl0LWRlc2NyaXB0aW9uXCIpLnZhbHVlID1cclxuICAgIHByb2plY3QuZGVzY3JpcHRpb247XHJcbiAgdG9nZ2xlTW9kYWwocHJvamVjdEVkaXRNb2RhbCk7XHJcblxyXG4gIGNvbnN0IHByb2plY3RFZGl0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1lZGl0LWZvcm1cIik7XHJcbiAgcHJvamVjdEVkaXRGb3JtLm9uc3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWVkaXQtbmFtZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwicHJvamVjdC1lZGl0LWRlc2NyaXB0aW9uXCJcclxuICAgICkudmFsdWU7XHJcbiAgICBwcm9qZWN0Lm5hbWUgPSBuYW1lO1xyXG4gICAgcHJvamVjdC5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG5cclxuICAgIHVwZGF0ZVByb2plY3QocHJvamVjdCk7XHJcbiAgICB1cGRhdGVQcm9qZWN0cyhnZXRQcm9qZWN0cygpKTtcclxuICAgIGNvbnN0IHVwZGF0ZWRQcm9qZWN0SXRlbSA9IHVwZGF0ZVByb2plY3RJdGVtKHByb2plY3QpO1xyXG4gICAgY2hhbmdlUHJvamVjdCh1cGRhdGVkUHJvamVjdEl0ZW0sIHByb2plY3QpO1xyXG4gICAgcHJvamVjdEVkaXRGb3JtLnJlc2V0KCk7XHJcbiAgICB0b2dnbGVNb2RhbChwcm9qZWN0RWRpdE1vZGFsKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVByb2plY3RFZGl0Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBwcm9qZWN0RWRpdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICBwcm9qZWN0RWRpdEZvcm0uaWQgPSBcInByb2plY3QtZWRpdC1mb3JtXCI7XHJcblxyXG4gIC8vIE5hbWVcclxuICBjb25zdCBuYW1lSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IG5hbWVJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIG5hbWVJbnB1dExhYmVsLmZvciA9IFwicHJvamVjdC1lZGl0LW5hbWVcIjtcclxuICBuYW1lSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBOYW1lXCI7XHJcblxyXG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBuYW1lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gIG5hbWVJbnB1dC5uYW1lID0gXCJwcm9qZWN0LWVkaXQtbmFtZVwiO1xyXG4gIG5hbWVJbnB1dC5pZCA9IFwicHJvamVjdC1lZGl0LW5hbWVcIjtcclxuICBuYW1lSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG5cclxuICBuYW1lSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZUlucHV0TGFiZWwpO1xyXG4gIG5hbWVJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xyXG4gIHByb2plY3RFZGl0Rm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXRDb250YWluZXIpO1xyXG5cclxuICAvLyBEZXNjcmlwdGlvblxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBkZXNjcmlwdGlvbklucHV0TGFiZWwuZm9yID0gXCJwcm9qZWN0LWVkaXQtZGVzY3JpcHRpb25cIjtcclxuICBkZXNjcmlwdGlvbklucHV0TGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XHJcblxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gXCJwcm9qZWN0LWVkaXQtZGVzY3JpcHRpb25cIjtcclxuICBkZXNjcmlwdGlvbklucHV0LmlkID0gXCJwcm9qZWN0LWVkaXQtZGVzY3JpcHRpb25cIjtcclxuICBkZXNjcmlwdGlvbklucHV0LnJvd3MgPSAxMDtcclxuICBkZXNjcmlwdGlvbklucHV0LmNvbHMgPSA1MDtcclxuICBkZXNjcmlwdGlvbklucHV0Lm1heExlbmd0aCA9IDMwMDtcclxuICBkZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gXCJUeXBlIGEgbWVzc2FnZS4uLlwiO1xyXG5cclxuICBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXRMYWJlbCk7XHJcbiAgZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcclxuICBwcm9qZWN0RWRpdEZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lcik7XHJcblxyXG4gIC8vIEFkZCBQcm9qZWN0IEJ1dHRvblxyXG4gIGNvbnN0IGVkaXRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBlZGl0UHJvamVjdEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcclxuICBlZGl0UHJvamVjdEJ1dHRvbi5jbGFzc05hbWUgPSBcInN1Ym1pdC1idXR0b25cIjtcclxuICBlZGl0UHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdCBQcm9qZWN0XCI7XHJcbiAgcHJvamVjdEVkaXRGb3JtLmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0QnV0dG9uKTtcclxuXHJcbiAgcmV0dXJuIHByb2plY3RFZGl0Rm9ybTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVRhc2tFZGl0TW9kYWwgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGFza0VkaXRNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGFza0VkaXRNb2RhbC5pZCA9IFwidGFzay1lZGl0LW1vZGFsXCI7XHJcbiAgdGFza0VkaXRNb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XHJcbiAgdGFza0VkaXRNb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG5cclxuICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhlYWRlckNvbnRhaW5lci5jbGFzc05hbWUgPSBcImhlYWRlci1jb250YWluZXJcIjtcclxuXHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGhlYWRlci5jbGFzc05hbWUgPSBcImZvcm0taGVhZGVyXCI7XHJcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJFZGl0IFRhc2tcIjtcclxuICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNsb3NlQnV0dG9uLmlkID0gXCJ0YXNrLWNsb3NlLWJ1dHRvblwiO1xyXG4gIGNvbnN0IGNsb3NlSWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gIGNsb3NlSWNvbi5jbGFzc05hbWUgPSBcImljb25cIjtcclxuICBjbG9zZUljb24uc3JjID0gQ2xvc2VJY29uO1xyXG5cclxuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWVkaXQtbmFtZVwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZWRpdC1kZXNjcmlwdGlvblwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZWRpdC1kdWUtZGF0ZVwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZWRpdC1wcmlvcml0eVwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICB0b2dnbGVNb2RhbCh0YXNrRWRpdE1vZGFsKTtcclxuICB9KTtcclxuXHJcbiAgY2xvc2VCdXR0b24uYXBwZW5kQ2hpbGQoY2xvc2VJY29uKTtcclxuICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xyXG5cclxuICB0YXNrRWRpdE1vZGFsLmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lcik7XHJcbiAgdGFza0VkaXRNb2RhbC5hcHBlbmRDaGlsZChjcmVhdGVUYXNrRWRpdEZvcm0oKSk7XHJcblxyXG4gIHJldHVybiB0YXNrRWRpdE1vZGFsO1xyXG59O1xyXG5cclxuY29uc3QgdHJpZ2dlclRhc2tFZGl0TW9kYWwgPSAodGFzaywgcHJvamVjdCkgPT4ge1xyXG4gIGNvbnN0IHRhc2tFZGl0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZWRpdC1tb2RhbFwiKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZWRpdC1uYW1lXCIpLnZhbHVlID0gdGFzay5uYW1lO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1lZGl0LWRlc2NyaXB0aW9uXCIpLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZWRpdC1kdWUtZGF0ZVwiKS52YWx1ZSA9IHBhcnNlSVNPKFxyXG4gICAgdGFzay5kdWVEYXRlLFxyXG4gICAgXCJ5eXl5LU1NLWRkXCJcclxuICApO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1lZGl0LXByaW9yaXR5XCIpLnZhbHVlID0gdGFzay5wcmlvcml0eTtcclxuICB0b2dnbGVNb2RhbCh0YXNrRWRpdE1vZGFsKTtcclxuXHJcbiAgY29uc3QgdGFza0VkaXRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWVkaXQtZm9ybVwiKTtcclxuICB0YXNrRWRpdEZvcm0ub25zdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZWRpdC1uYW1lXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZWRpdC1kZXNjcmlwdGlvblwiKS52YWx1ZTtcclxuICAgIGNvbnN0IGR1ZURhdGUgPSBuZXcgRGF0ZShcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWVkaXQtZHVlLWRhdGVcIikudmFsdWVcclxuICAgICk7XHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1lZGl0LXByaW9yaXR5XCIpLnZhbHVlO1xyXG4gICAgdGFzay5uYW1lID0gbmFtZTtcclxuICAgIHRhc2suZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRhc2suZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcblxyXG4gICAgcHJvamVjdC51cGRhdGVUYXNrKHRhc2spO1xyXG4gICAgdXBkYXRlVGFza0l0ZW0odGFzaywgcHJvamVjdCk7XHJcbiAgICB1cGRhdGVQcm9qZWN0cyhnZXRQcm9qZWN0cygpKTtcclxuXHJcbiAgICB0YXNrRWRpdEZvcm0ucmVzZXQoKTtcclxuICAgIHRvZ2dsZU1vZGFsKHRhc2tFZGl0TW9kYWwpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlVGFza0VkaXRGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgdGFza0Zvcm0uaWQgPSBcInRhc2stZWRpdC1mb3JtXCI7XHJcblxyXG4gIC8vIE5hbWVcclxuICBjb25zdCBuYW1lSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IG5hbWVJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIG5hbWVJbnB1dExhYmVsLmZvciA9IFwidGFzay1lZGl0LW5hbWVcIjtcclxuICBuYW1lSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiVGFzayBOYW1lXCI7XHJcblxyXG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBuYW1lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gIG5hbWVJbnB1dC5uYW1lID0gXCJ0YXNrLWVkaXQtbmFtZVwiO1xyXG4gIG5hbWVJbnB1dC5pZCA9IFwidGFzay1lZGl0LW5hbWVcIjtcclxuICBuYW1lSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG5cclxuICBuYW1lSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZUlucHV0TGFiZWwpO1xyXG4gIG5hbWVJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xyXG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dENvbnRhaW5lcik7XHJcblxyXG4gIC8vIERlc2NyaXB0aW9uXHJcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIGRlc2NyaXB0aW9uSW5wdXRMYWJlbC5mb3IgPSBcInRhc2stZWRpdC1kZXNjcmlwdGlvblwiO1xyXG4gIGRlc2NyaXB0aW9uSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcclxuXHJcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICBkZXNjcmlwdGlvbklucHV0Lm5hbWUgPSBcInRhc2stZWRpdC1kZXNjcmlwdGlvblwiO1xyXG4gIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSBcInRhc2stZWRpdC1kZXNjcmlwdGlvblwiO1xyXG4gIGRlc2NyaXB0aW9uSW5wdXQucm93cyA9IDEwO1xyXG4gIGRlc2NyaXB0aW9uSW5wdXQuY29scyA9IDUwO1xyXG4gIGRlc2NyaXB0aW9uSW5wdXQubWF4TGVuZ3RoID0gMzAwO1xyXG4gIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBcIlR5cGUgYSBtZXNzYWdlLi4uXCI7XHJcblxyXG4gIGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dExhYmVsKTtcclxuICBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xyXG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIpO1xyXG5cclxuICAvLyBEdWUgRGF0ZVxyXG4gIGNvbnN0IGRhdGVJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgZGF0ZUlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgZGF0ZUlucHV0TGFiZWwuZm9yID0gXCJ0YXNrLWVkaXQtZHVlLWRhdGVcIjtcclxuICBkYXRlSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIjtcclxuXHJcbiAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGR1ZURhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XHJcbiAgZHVlRGF0ZUlucHV0Lm5hbWUgPSBcInRhc2stZWRpdC1kdWUtZGF0ZVwiO1xyXG4gIGR1ZURhdGVJbnB1dC5pZCA9IFwidGFzay1lZGl0LWR1ZS1kYXRlXCI7XHJcbiAgZHVlRGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuXHJcbiAgLy8gRG9uJ3QgYWxsb3cgdXNlcnMgdG8gaW5wdXQgcGFzdCBkYXRlc1xyXG4gIGR1ZURhdGVJbnB1dC5taW4gPSBuZXcgRGF0ZSgpXHJcbiAgICAudG9JU09TdHJpbmcoKVxyXG4gICAgLnJlcGxhY2UoL1QuKi8sIFwiXCIpXHJcbiAgICAuc3BsaXQoXCItXCIpXHJcbiAgICAuam9pbihcIi1cIik7XHJcblxyXG4gIGRhdGVJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlSW5wdXRMYWJlbCk7XHJcbiAgZGF0ZUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XHJcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGF0ZUlucHV0Q29udGFpbmVyKTtcclxuXHJcbiAgLy8gUHJpb3JpdHlcclxuICBjb25zdCBwcmlvcml0eUlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBwcmlvcml0eUlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgcHJpb3JpdHlJbnB1dExhYmVsLmZvciA9IFwidGFzay1lZGl0LXByaW9yaXR5XCI7XHJcbiAgcHJpb3JpdHlJbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCJQcmlvcml0eVwiO1xyXG5cclxuICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICBwcmlvcml0eUlucHV0Lm5hbWUgPSBcInRhc2stZWRpdC1wcmlvcml0eVwiO1xyXG4gIHByaW9yaXR5SW5wdXQuaWQgPSBcInRhc2stZWRpdC1wcmlvcml0eVwiO1xyXG4gIHByaW9yaXR5SW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG5cclxuICBjb25zdCBvcHRpb25zID0gW1wiTG93XCIsIFwiTWVkaXVtXCIsIFwiSGlnaFwiXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvbnNbaV07XHJcbiAgICBwcmlvcml0eUlucHV0LmFkZChvcHRpb24pO1xyXG4gIH1cclxuXHJcbiAgcHJpb3JpdHlJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0TGFiZWwpO1xyXG4gIHByaW9yaXR5SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XHJcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dENvbnRhaW5lcik7XHJcblxyXG4gIC8vIEFkZCBUYXNrIEJ1dHRvblxyXG4gIGNvbnN0IGVkaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBlZGl0VGFza0J1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcclxuICBlZGl0VGFza0J1dHRvbi5jbGFzc05hbWUgPSBcInN1Ym1pdC1idXR0b25cIjtcclxuICBlZGl0VGFza0J1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdCBUYXNrXCI7XHJcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZWRpdFRhc2tCdXR0b24pO1xyXG5cclxuICByZXR1cm4gdGFza0Zvcm07XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGNyZWF0ZVByb2plY3RFZGl0TW9kYWwsXHJcbiAgdHJpZ2dlclByb2plY3RFZGl0TW9kYWwsXHJcbiAgY3JlYXRlVGFza0VkaXRNb2RhbCxcclxuICB0cmlnZ2VyVGFza0VkaXRNb2RhbCxcclxufTtcclxuIiwiaW1wb3J0IE1lbnVJY29uIGZyb20gXCIuLi9hc3NldHMvbWVudS5zdmdcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG5cclxuICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBtZW51QnV0dG9uLmlkID0gXCJtZW51LWJ1dHRvblwiO1xyXG4gIGNvbnN0IG1lbnVJY29uID0gbmV3IEltYWdlKCk7XHJcbiAgbWVudUljb24uc3JjID0gTWVudUljb247XHJcblxyXG4gIG1lbnVCdXR0b24uYXBwZW5kQ2hpbGQobWVudUljb24pO1xyXG5cclxuICBjb25zdCBhcHBOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGFwcE5hbWUudGV4dENvbnRlbnQgPSBcIlRvRG9MaXN0XCI7XHJcblxyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoYXBwTmFtZSk7XHJcblxyXG4gIHJldHVybiBoZWFkZXI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIZWFkZXI7XHJcbiIsImltcG9ydCB7IGFkZFByb2plY3RJdGVtLCBnZXRQcm9qZWN0cyB9IGZyb20gXCIuLi9jb250cm9sbGVycy9wcm9qZWN0LWNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IGNyZWF0ZVByb2plY3RJdGVtIGZyb20gXCIuL3Byb2plY3QtaXRlbVwiO1xyXG5pbXBvcnQgY3JlYXRlVGFza0l0ZW0gZnJvbSBcIi4vdGFzay1pdGVtXCI7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIi4uL2Fzc2V0cy9jbG9zZS5zdmdcIjtcclxuaW1wb3J0IHsgYWRkVGFza0l0ZW0gfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvdGFzay1jb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IHVwZGF0ZVByb2plY3RDb3VudCB9IGZyb20gXCIuL3NpZGViYXJcIjtcclxuaW1wb3J0IHsgdXBkYXRlUHJvamVjdHMgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvc3RvcmFnZVwiO1xyXG5cclxuLy8gUHJvamVjdCBNb2RhbFxyXG5jb25zdCBjcmVhdGVQcm9qZWN0TW9kYWwgPSAoKSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwcm9qZWN0TW9kYWwuaWQgPSBcInByb2plY3QtbW9kYWxcIjtcclxuICBwcm9qZWN0TW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xyXG4gIHByb2plY3RNb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG5cclxuICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhlYWRlckNvbnRhaW5lci5jbGFzc05hbWUgPSBcImhlYWRlci1jb250YWluZXJcIjtcclxuXHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGhlYWRlci5jbGFzc05hbWUgPSBcImZvcm0taGVhZGVyXCI7XHJcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJBZGQgYSBQcm9qZWN0XCI7XHJcbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBjbG9zZUJ1dHRvbi5pZCA9IFwicHJvamVjdC1jbG9zZS1idXR0b25cIjtcclxuICBjb25zdCBjbG9zZUljb24gPSBuZXcgSW1hZ2UoKTtcclxuICBjbG9zZUljb24uY2xhc3NOYW1lID0gXCJpY29uXCI7XHJcbiAgY2xvc2VJY29uLnNyYyA9IENsb3NlSWNvbjtcclxuXHJcbiAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lXCIpLnZhbHVlID0gXCJcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1kZXNjcmlwdGlvblwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICB0b2dnbGVNb2RhbChwcm9qZWN0TW9kYWwpO1xyXG4gIH0pO1xyXG5cclxuICBjbG9zZUJ1dHRvbi5hcHBlbmRDaGlsZChjbG9zZUljb24pO1xyXG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XHJcblxyXG4gIHByb2plY3RNb2RhbC5hcHBlbmRDaGlsZChoZWFkZXJDb250YWluZXIpO1xyXG4gIHByb2plY3RNb2RhbC5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0Rm9ybSgpKTtcclxuXHJcbiAgcmV0dXJuIHByb2plY3RNb2RhbDtcclxufTtcclxuXHJcbmNvbnN0IHRyaWdnZXJQcm9qZWN0TW9kYWwgPSAoKSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW1vZGFsXCIpO1xyXG4gIHRvZ2dsZU1vZGFsKHByb2plY3RNb2RhbCk7XHJcblxyXG4gIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWZvcm1cIik7XHJcbiAgcHJvamVjdEZvcm0ub25zdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xyXG4gICAgY29uc29sZS5sb2coZ2V0UHJvamVjdHMoKSk7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gYWRkUHJvamVjdEl0ZW0obmFtZSwgZGVzY3JpcHRpb24pO1xyXG4gICAgdXBkYXRlUHJvamVjdHMoZ2V0UHJvamVjdHMoKSk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdEl0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwicHJvamVjdC1pdGVtcy1jb250YWluZXJcIlxyXG4gICAgKTtcclxuICAgIHByb2plY3RJdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0SXRlbShuZXdQcm9qZWN0KSk7XHJcbiAgICBwcm9qZWN0Rm9ybS5yZXNldCgpO1xyXG4gICAgdG9nZ2xlTW9kYWwocHJvamVjdE1vZGFsKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVByb2plY3RGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgcHJvamVjdEZvcm0uaWQgPSBcInByb2plY3QtZm9ybVwiO1xyXG5cclxuICAvLyBOYW1lXHJcbiAgY29uc3QgbmFtZUlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBuYW1lSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBuYW1lSW5wdXRMYWJlbC5mb3IgPSBcInByb2plY3QtbmFtZVwiO1xyXG4gIG5hbWVJbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IE5hbWVcIjtcclxuXHJcbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIG5hbWVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgbmFtZUlucHV0Lm5hbWUgPSBcInByb2plY3QtbmFtZVwiO1xyXG4gIG5hbWVJbnB1dC5pZCA9IFwicHJvamVjdC1uYW1lXCI7XHJcbiAgbmFtZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuXHJcbiAgbmFtZUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVJbnB1dExhYmVsKTtcclxuICBuYW1lSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcclxuICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXRDb250YWluZXIpO1xyXG5cclxuICAvLyBEZXNjcmlwdGlvblxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBkZXNjcmlwdGlvbklucHV0TGFiZWwuZm9yID0gXCJwcm9qZWN0LWRlc2NyaXB0aW9uXCI7XHJcbiAgZGVzY3JpcHRpb25JbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xyXG5cclxuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gIGRlc2NyaXB0aW9uSW5wdXQubmFtZSA9IFwicHJvamVjdC1kZXNjcmlwdGlvblwiO1xyXG4gIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSBcInByb2plY3QtZGVzY3JpcHRpb25cIjtcclxuICBkZXNjcmlwdGlvbklucHV0LnJvd3MgPSAxMDtcclxuICBkZXNjcmlwdGlvbklucHV0LmNvbHMgPSA1MDtcclxuICBkZXNjcmlwdGlvbklucHV0Lm1heExlbmd0aCA9IDMwMDtcclxuICBkZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gXCJUeXBlIGEgbWVzc2FnZS4uLlwiO1xyXG5cclxuICBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXRMYWJlbCk7XHJcbiAgZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcclxuICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyKTtcclxuXHJcbiAgLy8gQWRkIFByb2plY3QgQnV0dG9uXHJcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgYWRkUHJvamVjdEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcclxuICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTmFtZSA9IFwic3VibWl0LWJ1dHRvblwiO1xyXG4gIGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XHJcbiAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbik7XHJcblxyXG4gIHJldHVybiBwcm9qZWN0Rm9ybTtcclxufTtcclxuXHJcbi8vIE92ZXJsYXlcclxuY29uc3QgY3JlYXRlT3ZlcmxheSA9ICgpID0+IHtcclxuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBvdmVybGF5LmlkID0gXCJvdmVybGF5XCI7XHJcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gIHJldHVybiBvdmVybGF5O1xyXG59O1xyXG5cclxuLy8gVGFzayBNb2RhbFxyXG5jb25zdCBjcmVhdGVUYXNrTW9kYWwgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0YXNrTW9kYWwuaWQgPSBcInRhc2stbW9kYWxcIjtcclxuICB0YXNrTW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xyXG4gIHRhc2tNb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG5cclxuICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhlYWRlckNvbnRhaW5lci5jbGFzc05hbWUgPSBcImhlYWRlci1jb250YWluZXJcIjtcclxuXHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGhlYWRlci5jbGFzc05hbWUgPSBcImZvcm0taGVhZGVyXCI7XHJcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJBZGQgYSBUYXNrXCI7XHJcbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBjbG9zZUJ1dHRvbi5pZCA9IFwidGFzay1jbG9zZS1idXR0b25cIjtcclxuICBjb25zdCBjbG9zZUljb24gPSBuZXcgSW1hZ2UoKTtcclxuICBjbG9zZUljb24uY2xhc3NOYW1lID0gXCJpY29uXCI7XHJcbiAgY2xvc2VJY29uLnNyYyA9IENsb3NlSWNvbjtcclxuXHJcbiAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1uYW1lXCIpLnZhbHVlID0gXCJcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXNjcmlwdGlvblwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZHVlLWRhdGVcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXByaW9yaXR5XCIpLnZhbHVlID0gXCJcIjtcclxuICAgIHRvZ2dsZU1vZGFsKHRhc2tNb2RhbCk7XHJcbiAgfSk7XHJcblxyXG4gIGNsb3NlQnV0dG9uLmFwcGVuZENoaWxkKGNsb3NlSWNvbik7XHJcbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcclxuXHJcbiAgdGFza01vZGFsLmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lcik7XHJcbiAgdGFza01vZGFsLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tGb3JtKCkpO1xyXG5cclxuICByZXR1cm4gdGFza01vZGFsO1xyXG59O1xyXG5cclxuY29uc3QgdHJpZ2dlclRhc2tNb2RhbCA9IChwcm9qZWN0KSA9PiB7XHJcbiAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLW1vZGFsXCIpO1xyXG4gIHRvZ2dsZU1vZGFsKHRhc2tNb2RhbCk7XHJcblxyXG4gIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWZvcm1cIik7XHJcbiAgdGFza0Zvcm0ub25zdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbmFtZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgZHVlRGF0ZSA9IG5ldyBEYXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kdWUtZGF0ZVwiKS52YWx1ZSk7XHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1wcmlvcml0eVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IG5ld1Rhc2sgPSBhZGRUYXNrSXRlbShcclxuICAgICAgbmFtZSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIGR1ZURhdGUsXHJcbiAgICAgIHByaW9yaXR5LFxyXG4gICAgICBmYWxzZSxcclxuICAgICAgcHJvamVjdFxyXG4gICAgKTtcclxuICAgIHVwZGF0ZVByb2plY3RzKGdldFByb2plY3RzKCkpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tJdGVtc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1pdGVtcy1jb250YWluZXJcIik7XHJcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay1idXR0b25cIik7XHJcbiAgICB0YXNrSXRlbXNDb250YWluZXIuaW5zZXJ0QmVmb3JlKFxyXG4gICAgICBjcmVhdGVUYXNrSXRlbShuZXdUYXNrLCBwcm9qZWN0KSxcclxuICAgICAgYWRkVGFza0J1dHRvblxyXG4gICAgKTtcclxuICAgIHVwZGF0ZVByb2plY3RDb3VudChwcm9qZWN0LCB0cnVlKTtcclxuICAgIHRhc2tGb3JtLnJlc2V0KCk7XHJcbiAgICB0b2dnbGVNb2RhbCh0YXNrTW9kYWwpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgdG9nZ2xlTW9kYWwgPSAobW9kYWwpID0+IHtcclxuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5XCIpO1xyXG4gIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbiAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlVGFza0Zvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICB0YXNrRm9ybS5pZCA9IFwidGFzay1mb3JtXCI7XHJcblxyXG4gIC8vIE5hbWVcclxuICBjb25zdCBuYW1lSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IG5hbWVJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIG5hbWVJbnB1dExhYmVsLmZvciA9IFwidGFzay1uYW1lXCI7XHJcbiAgbmFtZUlucHV0TGFiZWwudGV4dENvbnRlbnQgPSBcIlRhc2sgTmFtZVwiO1xyXG5cclxuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgbmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICBuYW1lSW5wdXQubmFtZSA9IFwidGFzay1uYW1lXCI7XHJcbiAgbmFtZUlucHV0LmlkID0gXCJ0YXNrLW5hbWVcIjtcclxuICBuYW1lSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG5cclxuICBuYW1lSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZUlucHV0TGFiZWwpO1xyXG4gIG5hbWVJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xyXG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dENvbnRhaW5lcik7XHJcblxyXG4gIC8vIERlc2NyaXB0aW9uXHJcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIGRlc2NyaXB0aW9uSW5wdXRMYWJlbC5mb3IgPSBcInRhc2stZGVzY3JpcHRpb25cIjtcclxuICBkZXNjcmlwdGlvbklucHV0TGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XHJcblxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gXCJ0YXNrLWRlc2NyaXB0aW9uXCI7XHJcbiAgZGVzY3JpcHRpb25JbnB1dC5pZCA9IFwidGFzay1kZXNjcmlwdGlvblwiO1xyXG4gIGRlc2NyaXB0aW9uSW5wdXQucm93cyA9IDEwO1xyXG4gIGRlc2NyaXB0aW9uSW5wdXQuY29scyA9IDUwO1xyXG4gIGRlc2NyaXB0aW9uSW5wdXQubWF4TGVuZ3RoID0gMzAwO1xyXG4gIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBcIlR5cGUgYSBtZXNzYWdlLi4uXCI7XHJcblxyXG4gIGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dExhYmVsKTtcclxuICBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xyXG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIpO1xyXG5cclxuICAvLyBEdWUgRGF0ZVxyXG4gIGNvbnN0IGRhdGVJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgZGF0ZUlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgZGF0ZUlucHV0TGFiZWwuZm9yID0gXCJ0YXNrLWR1ZS1kYXRlXCI7XHJcbiAgZGF0ZUlucHV0TGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XHJcblxyXG4gIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBkdWVEYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xyXG4gIGR1ZURhdGVJbnB1dC5uYW1lID0gXCJ0YXNrLWR1ZS1kYXRlXCI7XHJcbiAgZHVlRGF0ZUlucHV0LmlkID0gXCJ0YXNrLWR1ZS1kYXRlXCI7XHJcbiAgZHVlRGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuXHJcbiAgLy8gRG9uJ3QgYWxsb3cgdXNlcnMgdG8gaW5wdXQgcGFzdCBkYXRlc1xyXG4gIGR1ZURhdGVJbnB1dC5taW4gPSBuZXcgRGF0ZSgpXHJcbiAgICAudG9JU09TdHJpbmcoKVxyXG4gICAgLnJlcGxhY2UoL1QuKi8sIFwiXCIpXHJcbiAgICAuc3BsaXQoXCItXCIpXHJcbiAgICAuam9pbihcIi1cIik7XHJcblxyXG4gIGRhdGVJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlSW5wdXRMYWJlbCk7XHJcbiAgZGF0ZUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XHJcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGF0ZUlucHV0Q29udGFpbmVyKTtcclxuXHJcbiAgLy8gUHJpb3JpdHlcclxuICBjb25zdCBwcmlvcml0eUlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBwcmlvcml0eUlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgcHJpb3JpdHlJbnB1dExhYmVsLmZvciA9IFwidGFzay1wcmlvcml0eVwiO1xyXG4gIHByaW9yaXR5SW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIjtcclxuXHJcbiAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgcHJpb3JpdHlJbnB1dC5uYW1lID0gXCJ0YXNrLXByaW9yaXR5XCI7XHJcbiAgcHJpb3JpdHlJbnB1dC5pZCA9IFwidGFzay1wcmlvcml0eVwiO1xyXG4gIHByaW9yaXR5SW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG5cclxuICBjb25zdCBvcHRpb25zID0gW1wiTG93XCIsIFwiTWVkaXVtXCIsIFwiSGlnaFwiXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIC8vIFNlbGVjdCBsb3cgcHJpb3JpdHkgYnkgZGVmYXVsdFxyXG4gICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvbnNbaV07XHJcbiAgICBwcmlvcml0eUlucHV0LmFkZChvcHRpb24pO1xyXG4gIH1cclxuXHJcbiAgcHJpb3JpdHlJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0TGFiZWwpO1xyXG4gIHByaW9yaXR5SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XHJcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dENvbnRhaW5lcik7XHJcblxyXG4gIC8vIEFkZCBUYXNrIEJ1dHRvblxyXG4gIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGFkZFRhc2tCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XHJcbiAgYWRkVGFza0J1dHRvbi5jbGFzc05hbWUgPSBcInN1Ym1pdC1idXR0b25cIjtcclxuICBhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xyXG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xyXG5cclxuICByZXR1cm4gdGFza0Zvcm07XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGNyZWF0ZVByb2plY3RNb2RhbCxcclxuICB0cmlnZ2VyUHJvamVjdE1vZGFsLFxyXG4gIGNyZWF0ZU92ZXJsYXksXHJcbiAgY3JlYXRlVGFza01vZGFsLFxyXG4gIHRyaWdnZXJUYXNrTW9kYWwsXHJcbiAgdG9nZ2xlTW9kYWwsXHJcbn07XHJcbiIsImltcG9ydCB7XHJcbiAgZ2V0UHJvamVjdHMsXHJcbiAgcmVtb3ZlUHJvamVjdEl0ZW0sXHJcbn0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL3Byb2plY3QtY29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyByZW1vdmVQcm9qZWN0RnJvbVNpZGViYXIsIHRvZ2dsZUFjdGl2ZUl0ZW0gfSBmcm9tIFwiLi9zaWRlYmFyXCI7XHJcbmltcG9ydCBjcmVhdGVUYXNrSXRlbSBmcm9tIFwiLi90YXNrLWl0ZW1cIjtcclxuaW1wb3J0IHsgdHJpZ2dlclRhc2tNb2RhbCB9IGZyb20gXCIuL21vZGFsXCI7XHJcbmltcG9ydCBBZGRJY29uIGZyb20gXCIuLi9hc3NldHMvYWRkLnN2Z1wiO1xyXG5pbXBvcnQgRWRpdEljb24gZnJvbSBcIi4uL2Fzc2V0cy9lZGl0LnN2Z1wiO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tIFwiLi4vYXNzZXRzL2RlbGV0ZS5zdmdcIjtcclxuaW1wb3J0IHsgdHJpZ2dlclByb2plY3RFZGl0TW9kYWwgfSBmcm9tIFwiLi9lZGl0LW1vZGFsXCI7XHJcbmltcG9ydCB7IHVwZGF0ZVByb2plY3RzIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL3N0b3JhZ2VcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZVByb2plY3RDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJvamVjdENvbnRhaW5lci5pZCA9IFwicHJvamVjdC1jb250YWluZXJcIjtcclxuXHJcbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkR2VuZXJhbFByb2plY3QoZ2V0UHJvamVjdHMoKVswXSkpO1xyXG4gIGNvbnN0IGdlbmVyYWxQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWl0ZW1cIik7XHJcbiAgZ2VuZXJhbFByb2plY3QuY2xhc3NMaXN0LmFkZChcImdlbmVyYWxcIik7XHJcbiAgdG9nZ2xlQWN0aXZlSXRlbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdlbmVyYWxcIikpOyAvLyBTZXQgR2VuZXJhbCBhcyBpbml0aWFsIGFjdGl2ZSBwcm9qZWN0XHJcbiAgcmV0dXJuIHByb2plY3RDb250YWluZXI7XHJcbn07XHJcblxyXG5jb25zdCBsb2FkR2VuZXJhbFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3RDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwcm9qZWN0Q29udGVudC5pZCA9IFwicHJvamVjdC1jb250ZW50XCI7XHJcblxyXG4gIGNvbnN0IGNvbnRlbnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRlbnRIZWFkZXIuaWQgPSBcImNvbnRlbnQtaGVhZGVyXCI7XHJcblxyXG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIHByb2plY3ROYW1lLmNsYXNzTmFtZSA9IFwicHJvamVjdC1uYW1lXCI7XHJcbiAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XHJcblxyXG4gIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHByb2plY3REZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBcInByb2plY3QtZGVzY3JpcHRpb25cIjtcclxuICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmRlc2NyaXB0aW9uO1xyXG5cclxuICBjb250ZW50SGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcclxuICBjb250ZW50SGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XHJcblxyXG4gIHByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRIZWFkZXIpO1xyXG5cclxuICBjb25zdCB0YXNrcyA9IHByb2plY3QudGFza3M7XHJcblxyXG4gIGNvbnN0IHRhc2tJdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0YXNrSXRlbUNvbnRhaW5lci5pZCA9IFwidGFzay1pdGVtcy1jb250YWluZXJcIjtcclxuXHJcbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT5cclxuICAgIHRhc2tJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tJdGVtKHRhc2ssIHByb2plY3QpKVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGFkZFRhc2tCdXR0b24uaWQgPSBcImFkZC10YXNrLWJ1dHRvblwiO1xyXG4gIGNvbnN0IGFkZEljb24gPSBuZXcgSW1hZ2UoKTtcclxuICBhZGRJY29uLnNyYyA9IEFkZEljb247XHJcbiAgYWRkVGFza0J1dHRvbi5hcHBlbmRDaGlsZChhZGRJY29uKTtcclxuICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICB0cmlnZ2VyVGFza01vZGFsKHByb2plY3QpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBhZGRUYXNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGFkZFRhc2tUZXh0LnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xyXG4gIGFkZFRhc2tCdXR0b24uYXBwZW5kQ2hpbGQoYWRkVGFza1RleHQpO1xyXG5cclxuICB0YXNrSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcclxuXHJcbiAgcHJvamVjdENvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0l0ZW1Db250YWluZXIpO1xyXG5cclxuICByZXR1cm4gcHJvamVjdENvbnRlbnQ7XHJcbn07XHJcblxyXG5jb25zdCBsb2FkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1jb250YWluZXJcIik7XHJcbiAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBsb2FkR2VuZXJhbFByb2plY3QocHJvamVjdCk7XHJcbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGVudCk7XHJcblxyXG4gIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGVkaXRCdXR0b24uY2xhc3NMaXN0ID0gXCJwcm9qZWN0LWVkaXQtYnV0dG9uXCI7XHJcbiAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xyXG4gIGNvbnN0IGVkaXRJY29uID0gbmV3IEltYWdlKCk7XHJcbiAgZWRpdEljb24uY2xhc3NMaXN0LmFkZChcImljb25cIik7XHJcbiAgZWRpdEljb24uc3JjID0gRWRpdEljb247XHJcbiAgZWRpdEJ1dHRvbi5hcHBlbmRDaGlsZChlZGl0SWNvbik7XHJcblxyXG4gIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHRyaWdnZXJQcm9qZWN0RWRpdE1vZGFsKHByb2plY3QpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QgPSBcInByb2plY3QtZGVsZXRlLWJ1dHRvblwiO1xyXG4gIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XHJcbiAgY29uc3QgZGVsZXRlSWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcImljb25cIik7XHJcbiAgZGVsZXRlSWNvbi5zcmMgPSBEZWxldGVJY29uO1xyXG4gIGRlbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcclxuXHJcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICByZW1vdmVQcm9qZWN0RnJvbVNpZGViYXIocHJvamVjdCk7XHJcbiAgICByZW1vdmVQcm9qZWN0SXRlbShwcm9qZWN0KTtcclxuICAgIHVwZGF0ZVByb2plY3RzKGdldFByb2plY3RzKCkpO1xyXG4gICAgcHJvamVjdENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjb250ZW50SGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50LWhlYWRlclwiKTtcclxuICBjb250ZW50SGVhZGVyLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xyXG4gIGNvbnRlbnRIZWFkZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuXHJcbiAgcmV0dXJuIHByb2plY3RDb250ZW50O1xyXG59O1xyXG5cclxuY29uc3QgY2xlYXJDb250ZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtY29udGFpbmVyXCIpO1xyXG4gIHByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxufTtcclxuXHJcbmNvbnN0IGNoYW5nZVByb2plY3QgPSAocHJvamVjdEl0ZW0sIHByb2plY3QpID0+IHtcclxuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWNvbnRhaW5lclwiKTtcclxuICBjbGVhckNvbnRlbnQoKTtcclxuICB0b2dnbGVBY3RpdmVJdGVtKHByb2plY3RJdGVtKTtcclxuICBpZiAocHJvamVjdEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ2VuZXJhbFwiKSkge1xyXG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkR2VuZXJhbFByb2plY3QoZ2V0UHJvamVjdHMoKVswXSkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRQcm9qZWN0KHByb2plY3QpKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVUYXNrSXRlbSA9ICh0YXNrLCBwcm9qZWN0KSA9PiB7XHJcbiAgY29uc3QgaW5kZXggPSBwcm9qZWN0LnRhc2tzLmluZGV4T2YodGFzayk7XHJcbiAgY29uc3QgdGFza0l0ZW1Ub1VwZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1pdGVtXCIpW2luZGV4XTtcclxuICBjb25zdCB0YXNrSXRlbXNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2staXRlbXMtY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IHVwZGF0ZWRUYXNrSXRlbSA9IGNyZWF0ZVRhc2tJdGVtKHRhc2ssIHByb2plY3QpO1xyXG4gIHRhc2tJdGVtc0NvbnRhaW5lci5pbnNlcnRCZWZvcmUodXBkYXRlZFRhc2tJdGVtLCB0YXNrSXRlbVRvVXBkYXRlKTtcclxuICB0YXNrSXRlbXNDb250YWluZXIucmVtb3ZlQ2hpbGQodGFza0l0ZW1Ub1VwZGF0ZSk7XHJcbn07XHJcblxyXG5jb25zdCByZW1vdmVUYXNrSXRlbSA9ICh0YXNrSXRlbSkgPT4ge1xyXG4gIGNvbnN0IHRhc2tJdGVtc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1pdGVtcy1jb250YWluZXJcIik7XHJcbiAgdGFza0l0ZW1zQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRhc2tJdGVtKTtcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgY3JlYXRlUHJvamVjdENvbnRhaW5lcixcclxuICBsb2FkUHJvamVjdCxcclxuICBjbGVhckNvbnRlbnQsXHJcbiAgY2hhbmdlUHJvamVjdCxcclxuICB1cGRhdGVUYXNrSXRlbSxcclxuICByZW1vdmVUYXNrSXRlbSxcclxufTtcclxuIiwiaW1wb3J0IHsgY2hhbmdlUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3QtY29udGVudFwiO1xyXG5cclxuY29uc3QgY3JlYXRlUHJvamVjdEl0ZW0gPSAocHJvamVjdCkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwcm9qZWN0SXRlbS5jbGFzc05hbWUgPSBcInByb2plY3QtaXRlbVwiO1xyXG5cclxuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHByb2plY3ROYW1lLmNsYXNzTmFtZSA9IFwicHJvamVjdC1pdGVtLW5hbWVcIjtcclxuICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcclxuXHJcbiAgY29uc3QgbnVtVGFza3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG51bVRhc2tzQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwibnVtLXRhc2tzLWNvbnRhaW5lclwiO1xyXG5cclxuICBjb25zdCBudW1UYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIG51bVRhc2tzLmNsYXNzTmFtZSA9IFwibnVtLXRhc2tzXCI7XHJcbiAgbnVtVGFza3MudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRhc2tzLmxlbmd0aDtcclxuICBudW1UYXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChudW1UYXNrcyk7XHJcblxyXG4gIHByb2plY3RJdGVtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcclxuICBwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChudW1UYXNrc0NvbnRhaW5lcik7XHJcblxyXG4gIHByb2plY3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjaGFuZ2VQcm9qZWN0KHByb2plY3RJdGVtLCBwcm9qZWN0KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHByb2plY3RJdGVtO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdEl0ZW07XHJcbiIsImltcG9ydCBBZGRJY29uIGZyb20gXCIuLi9hc3NldHMvYWRkLnN2Z1wiO1xyXG5pbXBvcnQgeyB0cmlnZ2VyUHJvamVjdE1vZGFsIH0gZnJvbSBcIi4vbW9kYWxcIjtcclxuaW1wb3J0IGNyZWF0ZVByb2plY3RJdGVtIGZyb20gXCIuL3Byb2plY3QtaXRlbVwiO1xyXG5pbXBvcnQgeyBhZGRQcm9qZWN0SXRlbSwgZ2V0UHJvamVjdHMgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvcHJvamVjdC1jb250cm9sbGVyXCI7XHJcbmltcG9ydCBwcm9qZWN0RmFjdG9yeSBmcm9tIFwiLi4vbW9kZWxzL3Byb2plY3RcIjtcclxuaW1wb3J0IHsgcmV0cmlldmVQcm9qZWN0cywgdXBkYXRlUHJvamVjdHMgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvc3RvcmFnZVwiO1xyXG5pbXBvcnQgdGFza0ZhY3RvcnkgZnJvbSBcIi4uL21vZGVscy90YXNrXCI7XHJcblxyXG5jb25zdCBjcmVhdGVTaWRlYmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNpZGViYXIuaWQgPSBcInNpZGViYXJcIjtcclxuXHJcbiAgY29uc3QgZ2VuZXJhbEl0ZW0gPSBwcm9qZWN0RmFjdG9yeShcIkdlbmVyYWxcIiwgXCJXaGF0IGFyZSB5b3Ugd29ya2luZyBvbj9cIiwgW10pO1xyXG5cclxuICBjb25zdCBwcm9qZWN0SXRlbXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHByb2plY3RJdGVtc0NvbnRhaW5lci5pZCA9IFwicHJvamVjdC1pdGVtcy1jb250YWluZXJcIjtcclxuXHJcbiAgbGV0IHByb2plY3RzSW5TdG9yYWdlID0gcmV0cmlldmVQcm9qZWN0cygpO1xyXG5cclxuICBpZiAocHJvamVjdHNJblN0b3JhZ2UgPT09IG51bGwpIHtcclxuICAgIGFkZFByb2plY3RJdGVtKGdlbmVyYWxJdGVtLm5hbWUsIGdlbmVyYWxJdGVtLmRlc2NyaXB0aW9uLCBbXSk7XHJcbiAgICB1cGRhdGVQcm9qZWN0cyhnZXRQcm9qZWN0cygpKTtcclxuICAgIHByb2plY3RzSW5TdG9yYWdlID0gcmV0cmlldmVQcm9qZWN0cygpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBnZW5lcmFsUHJvamVjdCA9IHByb2plY3RzSW5TdG9yYWdlWzBdO1xyXG4gICAgYWRkUHJvamVjdEl0ZW0oXHJcbiAgICAgIGdlbmVyYWxQcm9qZWN0Lm5hbWUsXHJcbiAgICAgIGdlbmVyYWxQcm9qZWN0LmRlc2NyaXB0aW9uLFxyXG4gICAgICBnZW5lcmFsUHJvamVjdC50YXNrc1xyXG4gICAgKTtcclxuICAgIGluaXRpYWxpemVUYXNrcyhnZW5lcmFsUHJvamVjdCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwcm9qZWN0SXRlbXNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwcm9qZWN0SXRlbXNIZWFkZXIuaWQgPSBcInByb2plY3QtaXRlbXMtaGVhZGVyXCI7XHJcbiAgcHJvamVjdEl0ZW1zSGVhZGVyLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xyXG4gIHByb2plY3RJdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbXNIZWFkZXIpO1xyXG5cclxuICBjb25zdCBpdGVtc0NvbnRhaW5lclVuZGVybGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcclxuICBwcm9qZWN0SXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbXNDb250YWluZXJVbmRlcmxpbmUpO1xyXG5cclxuICBwcm9qZWN0c0luU3RvcmFnZS5zaGlmdCgpO1xyXG4gIGNvbnN0IHVzZXJQcm9qZWN0cyA9IHByb2plY3RzSW5TdG9yYWdlO1xyXG4gIC8vIEFkZCBleGlzdGluZyBwcm9qZWN0cyB0byBjb250YWluZXJcclxuICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgdXNlclByb2plY3RzKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0SW5TdG9yYWdlID0gYWRkUHJvamVjdEl0ZW0oXHJcbiAgICAgIHByb2plY3QubmFtZSxcclxuICAgICAgcHJvamVjdC5kZXNjcmlwdGlvbixcclxuICAgICAgcHJvamVjdC50YXNrc1xyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RJblN0b3JhZ2UpO1xyXG4gICAgaW5pdGlhbGl6ZVRhc2tzKHByb2plY3RJblN0b3JhZ2UpO1xyXG4gICAgcHJvamVjdEl0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RJdGVtKHByb2plY3RJblN0b3JhZ2UpKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGFkZFByb2plY3RCdXR0b24uaWQgPSBcImFkZC1wcm9qZWN0LWJ1dHRvblwiO1xyXG4gIGNvbnN0IGFkZEljb24gPSBuZXcgSW1hZ2UoKTtcclxuICBhZGRJY29uLnNyYyA9IEFkZEljb247XHJcbiAgYWRkUHJvamVjdEJ1dHRvbi5hcHBlbmRDaGlsZChhZGRJY29uKTtcclxuICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICB0cmlnZ2VyUHJvamVjdE1vZGFsKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGFkZFByb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgYWRkUHJvamVjdFRleHQudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XHJcbiAgYWRkUHJvamVjdEJ1dHRvbi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0VGV4dCk7XHJcblxyXG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEl0ZW0oZ2VuZXJhbEl0ZW0pKTtcclxuICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RJdGVtc0NvbnRhaW5lcik7XHJcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcclxuXHJcbiAgcmV0dXJuIHNpZGViYXI7XHJcbn07XHJcblxyXG5jb25zdCB0b2dnbGVBY3RpdmVJdGVtID0gKHByb2plY3RJdGVtKSA9PiB7XHJcbiAgY29uc3QgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtaXRlbVwiKTtcclxuICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xyXG4gIHByb2plY3RJdGVtLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVQcm9qZWN0Q291bnQgPSAocHJvamVjdCwgcHJvamVjdEFkZGVkKSA9PiB7XHJcbiAgY29uc3QgaW5kZXggPSBnZXRQcm9qZWN0cygpLmluZGV4T2YocHJvamVjdCk7XHJcbiAgY29uc3QgbnVtVGFza3MgPVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWl0ZW1cIilbaW5kZXhdLmxhc3RDaGlsZC5maXJzdENoaWxkO1xyXG5cclxuICBpZiAocHJvamVjdEFkZGVkKSB7XHJcbiAgICBudW1UYXNrcy50ZXh0Q29udGVudCsrO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBudW1UYXNrcy50ZXh0Q29udGVudC0tO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHVwZGF0ZVByb2plY3RJdGVtID0gKHByb2plY3QpID0+IHtcclxuICBjb25zdCBpbmRleCA9IGdldFByb2plY3RzKCkuaW5kZXhPZihwcm9qZWN0KTtcclxuICBjb25zdCBwcm9qZWN0SXRlbVRvVXBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWl0ZW1cIilbaW5kZXhdO1xyXG4gIGNvbnN0IHByb2plY3RJdGVtc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJwcm9qZWN0LWl0ZW1zLWNvbnRhaW5lclwiXHJcbiAgKTtcclxuICBjb25zdCB1cGRhdGVkUHJvamVjdEl0ZW0gPSBjcmVhdGVQcm9qZWN0SXRlbShwcm9qZWN0KTtcclxuICBwcm9qZWN0SXRlbXNDb250YWluZXIuaW5zZXJ0QmVmb3JlKHVwZGF0ZWRQcm9qZWN0SXRlbSwgcHJvamVjdEl0ZW1Ub1VwZGF0ZSk7XHJcbiAgcHJvamVjdEl0ZW1zQ29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2plY3RJdGVtVG9VcGRhdGUpO1xyXG4gIHJldHVybiB1cGRhdGVkUHJvamVjdEl0ZW07XHJcbn07XHJcblxyXG5jb25zdCByZW1vdmVQcm9qZWN0RnJvbVNpZGViYXIgPSAocHJvamVjdCkgPT4ge1xyXG4gIGNvbnN0IGluZGV4ID0gZ2V0UHJvamVjdHMoKS5pbmRleE9mKHByb2plY3QpO1xyXG4gIGNvbnN0IHByb2plY3RJdGVtVG9SZW1vdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtaXRlbVwiKVtpbmRleF07XHJcbiAgY29uc3QgcHJvamVjdEl0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcInByb2plY3QtaXRlbXMtY29udGFpbmVyXCJcclxuICApO1xyXG4gIHByb2plY3RJdGVtc0NvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qZWN0SXRlbVRvUmVtb3ZlKTtcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxpemVUYXNrcyA9IChwcm9qZWN0KSA9PiB7XHJcbiAgY29uc3QgdGFza3MgPSBbXTtcclxuICBmb3IgKGNvbnN0IG9iamVjdCBpbiBwcm9qZWN0LnRhc2tzKSB7XHJcbiAgICBjb25zdCB0YXNrID0gdGFza0ZhY3RvcnkoXHJcbiAgICAgIG9iamVjdC5uYW1lLFxyXG4gICAgICBvYmplY3QuZGVzY3JpcHRpb24sXHJcbiAgICAgIG9iamVjdC5kdWVEYXRlLFxyXG4gICAgICBvYmplY3QucHJpb3JpdHksXHJcbiAgICAgIG9iamVjdC5zdGF0dXMsXHJcbiAgICAgIHByb2plY3RcclxuICAgICk7XHJcbiAgICB0YXNrcy5wdXNoKHRhc2spO1xyXG4gIH1cclxuICBwcm9qZWN0LnRhc2tzID0gdGFza3M7XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGNyZWF0ZVNpZGViYXIsXHJcbiAgdG9nZ2xlQWN0aXZlSXRlbSxcclxuICByZW1vdmVQcm9qZWN0RnJvbVNpZGViYXIsXHJcbiAgdXBkYXRlUHJvamVjdENvdW50LFxyXG4gIHVwZGF0ZVByb2plY3RJdGVtLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBwYXJzZUlTTyB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5pbXBvcnQgRWRpdEljb24gZnJvbSBcIi4uL2Fzc2V0cy9lZGl0LnN2Z1wiO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tIFwiLi4vYXNzZXRzL2RlbGV0ZS5zdmdcIjtcclxuaW1wb3J0IHsgcmVtb3ZlVGFza0l0ZW0gfSBmcm9tIFwiLi9wcm9qZWN0LWNvbnRlbnRcIjtcclxuaW1wb3J0IHsgdHJpZ2dlclRhc2tFZGl0TW9kYWwgfSBmcm9tIFwiLi9lZGl0LW1vZGFsXCI7XHJcbmltcG9ydCB7IHVwZGF0ZVByb2plY3RDb3VudCB9IGZyb20gXCIuL3NpZGViYXJcIjtcclxuaW1wb3J0IHsgdXBkYXRlUHJvamVjdHMgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBnZXRQcm9qZWN0cyB9IGZyb20gXCIuLi9jb250cm9sbGVycy9wcm9qZWN0LWNvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZVRhc2tJdGVtID0gKHRhc2ssIHByb2plY3QpID0+IHtcclxuICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZChcInRhc2staXRlbVwiKTtcclxuICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKGBwcmlvcml0eS0ke3Rhc2sucHJpb3JpdHkudG9Mb3dlckNhc2UoKX1gKTtcclxuXHJcbiAgLy8gVGFzayBTdGF0dXNcclxuICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gIGNoZWNrYm94LmlkID0gXCJ0YXNrLWNoZWNrYm94XCI7XHJcbiAgY2hlY2tib3gubmFtZSA9IFwidGFzay1jaGVja2JveFwiO1xyXG4gIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrLnN0YXR1cztcclxuXHJcbiAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHRhc2suY2hhbmdlU3RhdHVzKCk7XHJcbiAgICBjb25zdCBwcmlvcml0eSA9IHRhc2sucHJpb3JpdHk7XHJcbiAgICBtYXJrQXNDb21wbGV0ZSh0YXNrSXRlbSwgcHJpb3JpdHkpO1xyXG4gIH0pO1xyXG5cclxuICB0YXNrSXRlbS5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcblxyXG4gIC8vIFRhc2sgTmFtZVxyXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBuYW1lLmNsYXNzTmFtZSA9IFwidGFzay1uYW1lXCI7XHJcbiAgbmFtZS50ZXh0Q29udGVudCA9IHRhc2submFtZTtcclxuICB0YXNrSXRlbS5hcHBlbmRDaGlsZChuYW1lKTtcclxuXHJcbiAgLy8gVGFzayBEYXRlXHJcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGRhdGUuY2xhc3NOYW1lID0gXCJ0YXNrLWRhdGVcIjtcclxuICBkYXRlLnRleHRDb250ZW50ID0gcGFyc2VJU08odGFzay5kdWVEYXRlLCBcInl5eXktTU0tZGRcIik7XHJcbiAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcblxyXG4gIC8vIEVkaXQgQnV0dG9uXHJcbiAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgZWRpdEJ1dHRvbi5jbGFzc05hbWUgPSBcInRhc2stZWRpdC1idXR0b25cIjtcclxuXHJcbiAgY29uc3QgZWRpdEljb24gPSBuZXcgSW1hZ2UoKTtcclxuICBlZGl0SWNvbi5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcclxuICBlZGl0SWNvbi5zcmMgPSBFZGl0SWNvbjtcclxuICBlZGl0QnV0dG9uLmFwcGVuZENoaWxkKGVkaXRJY29uKTtcclxuXHJcbiAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgdHJpZ2dlclRhc2tFZGl0TW9kYWwodGFzaywgcHJvamVjdCk7XHJcbiAgICB1cGRhdGVQcm9qZWN0cyhnZXRQcm9qZWN0cygpKTtcclxuICB9KTtcclxuXHJcbiAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XHJcblxyXG4gIC8vIERlbGV0ZSBCdXR0b25cclxuICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSBcInRhc2stZGVsZXRlLWJ1dHRvblwiO1xyXG5cclxuICBjb25zdCBkZWxldGVJY29uID0gbmV3IEltYWdlKCk7XHJcbiAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcclxuICBkZWxldGVJY29uLnNyYyA9IERlbGV0ZUljb247XHJcbiAgZGVsZXRlQnV0dG9uLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xyXG5cclxuICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHByb2plY3QucmVtb3ZlVGFzayh0YXNrKTtcclxuICAgIHJlbW92ZVRhc2tJdGVtKHRhc2tJdGVtKTtcclxuICAgIHVwZGF0ZVByb2plY3RzKGdldFByb2plY3RzKCkpO1xyXG4gICAgdXBkYXRlUHJvamVjdENvdW50KHByb2plY3QsIGZhbHNlKTtcclxuICB9KTtcclxuXHJcbiAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuXHJcbiAgcmV0dXJuIHRhc2tJdGVtO1xyXG59O1xyXG5cclxuY29uc3QgbWFya0FzQ29tcGxldGUgPSAodGFza0l0ZW0sIHByaW9yaXR5KSA9PiB7XHJcbiAgdGFza0l0ZW0uY2xhc3NMaXN0LnRvZ2dsZShgcHJpb3JpdHktJHtwcmlvcml0eS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gIHRhc2tJdGVtLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZWRcIik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUYXNrSXRlbTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9