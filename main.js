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
}

body,
p {
  margin: 0;
}

.container {
  min-height: 100vh;
  display: grid;
  grid-template: 1fr 10fr / 1fr 6fr;
}

#add-project-button,
#add-task-button {
  align-self: flex-end;
  display: flex;
  align-items: center;
  font-size: 1rem;
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

/* || Task Item */

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

.close-icon {
  width: 25px;
  height: 25px;
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

.hidden {
  visibility: hidden;
}
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA,sBAAsB;;AAEtB;EACE,sBAAsB;EACtB,4BAA4B;EAC5B,wBAAwB;EACxB,0BAA0B;EAC1B,+BAA+B;EAC/B,0BAA0B;AAC5B;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;;EAEE,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,iCAAiC;AACnC;;AAEA;;EAEE,oBAAoB;EACpB,aAAa;EACb,mBAAmB;EACnB,eAAe;AACjB;;AAEA,cAAc;AACd;EACE,mBAAmB;EACnB,aAAa;EACb,qCAAqC;EACrC,wCAAwC;EACxC,8BAA8B;AAChC;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA,eAAe;;AAEf;EACE,wCAAwC;EACxC,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,aAAa;AACf;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,SAAS;EACT,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;AACA,oBAAoB;AACpB;EACE,aAAa;EACb,SAAS;EACT,sBAAsB;EACtB,wBAAwB;EACxB,yBAAyB;EACzB,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA,uBAAuB;;AAEvB,iBAAiB;;AAEjB,aAAa;;AAEb;EACE,uBAAuB;EACvB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,mBAAmB;EACnB,aAAa;EACb,UAAU;EACV,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,qCAAqC;EACrC,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,qBAAqB;EACrB,oBAAoB;EACpB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;EACX,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,yCAAyC;EACzC,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,2CAA2C;AAC7C;;AAEA,oFAAoF;AACpF;EACE,eAAe;EACf,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,8BAA8B;EAC9B,0BAA0B;EAC1B,UAAU;AACZ;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["/* || General Styles */\r\n\r\n:root {\r\n  --primary-color: white;\r\n  --secondary-color: lightgray;\r\n  --completed-color: green;\r\n  --high-priority-color: red;\r\n  --medium-priority-color: orange;\r\n  --low-priority-color: blue;\r\n}\r\n\r\nbody {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbody,\r\np {\r\n  margin: 0;\r\n}\r\n\r\n.container {\r\n  min-height: 100vh;\r\n  display: grid;\r\n  grid-template: 1fr 10fr / 1fr 6fr;\r\n}\r\n\r\n#add-project-button,\r\n#add-task-button {\r\n  align-self: flex-end;\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 1rem;\r\n}\r\n\r\n/* || Header */\r\nheader {\r\n  grid-column: span 2;\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  background-color: var(--secondary-color);\r\n  border-bottom: 2px solid black;\r\n}\r\n\r\n#menu-button {\r\n  justify-self: start;\r\n  margin-left: 2rem;\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n}\r\n\r\n/* || Sidebar */\r\n\r\n#sidebar {\r\n  background-color: var(--secondary-color);\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  padding: 1rem;\r\n}\r\n\r\n#project-items-header,\r\n.project-item-name {\r\n  font-size: 2rem;\r\n}\r\n\r\nhr {\r\n  border: 1px solid black;\r\n  margin: 0;\r\n  width: 100%;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.hidden {\r\n  visibility: hidden;\r\n}\r\n/* || Project Item */\r\n.project-item {\r\n  display: flex;\r\n  gap: 1rem;\r\n  -moz-user-select: none;\r\n  -khtml-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.project-item.active {\r\n  background-color: var(--primary-color);\r\n}\r\n\r\n.num-tasks-container {\r\n  align-self: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: green;\r\n  height: 25px;\r\n  width: 25px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.num-tasks {\r\n  font-size: 1rem;\r\n}\r\n\r\n/* || Project Content */\r\n\r\n/* || Task Item */\r\n\r\n/* || Modal */\r\n\r\n.modal {\r\n  background-color: white;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border-radius: 10px;\r\n  padding: 1rem;\r\n  z-index: 2;\r\n  display: grid;\r\n  place-items: center;\r\n}\r\n\r\n.header-container {\r\n  display: grid;\r\n  align-items: center;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.form-header {\r\n  grid-column: 2;\r\n  text-align: center;\r\n  margin: 0;\r\n}\r\n\r\n.close-icon {\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n\r\n.header-container button {\r\n  grid-column: 3;\r\n  justify-self: end;\r\n  background-color: red;\r\n  border-radius: 1vmin;\r\n  border: 2px solid black;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\nlabel {\r\n  display: block;\r\n}\r\n\r\ninput[type=\"text\"],\r\ntextarea {\r\n  border-radius: 5px;\r\n  min-height: 1.5rem;\r\n  width: 100%;\r\n  font-size: 1rem;\r\n  border: 1px solid black;\r\n}\r\n\r\ntextarea {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  resize: none;\r\n}\r\n\r\n.submit-button {\r\n  background-color: green;\r\n  color: white;\r\n  align-self: center;\r\n  padding: 1rem 3rem;\r\n  font-size: 1rem;\r\n  border: none;\r\n  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n/* Source: https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/ */\r\n#overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  backdrop-filter: blur(3px);\r\n  z-index: 1;\r\n}\r\n\r\n.hidden {\r\n  visibility: hidden;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony export */   removeProjectItem: () => (/* binding */ removeProjectItem)
/* harmony export */ });
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project */ "./src/models/project.js");


let projects = [];

const getProjects = () => {
  return projects;
};

const addProjectItem = (name, description) => {
  const newProject = (0,_models_project__WEBPACK_IMPORTED_MODULE_0__["default"])(name, description, []);
  projects.push(newProject);
  console.log(projects);
  return newProject;
};

const removeProjectItem = (project) => {
  const index = projects.indexOf(project);
  projects.splice(index, 1);
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






const initializeWebpage = () => {
  const container = document.createElement("div");
  container.className = "container";
  document.body.appendChild(container);

  container.appendChild((0,_ui_header__WEBPACK_IMPORTED_MODULE_0__["default"])());
  container.appendChild((0,_ui_sidebar__WEBPACK_IMPORTED_MODULE_1__.createSidebar)());
  container.appendChild((0,_ui_project_content__WEBPACK_IMPORTED_MODULE_2__.createProjectContainer)());
  document.body.appendChild((0,_ui_modal__WEBPACK_IMPORTED_MODULE_3__.createProjectModal)());
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

  function getNumTasks() {
    return tasks.length;
  }

  function getName() {
    return name;
  }

  function getDescription() {
    return description;
  }

  function getTasks() {
    return tasks;
  }
  return {
    addTask,
    removeTask,
    getNumTasks,
    getName,
    getDescription,
    getTasks,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectFactory);


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
/* harmony export */   createProjectModal: () => (/* binding */ createProjectModal),
/* harmony export */   triggerProjectModal: () => (/* binding */ triggerProjectModal)
/* harmony export */ });
/* harmony import */ var _controllers_project_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/project-controller */ "./src/controllers/project-controller.js");
/* harmony import */ var _project_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-content */ "./src/ui/project-content.js");
/* harmony import */ var _project_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-item */ "./src/ui/project-item.js");
/* harmony import */ var _assets_close_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/close.svg */ "./src/assets/close.svg");





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
  closeIcon.className = "close-icon";
  closeIcon.src = _assets_close_svg__WEBPACK_IMPORTED_MODULE_3__;

  closeButton.addEventListener("click", () => {
    document.getElementById("project-name").value = "";
    document.getElementById("project-description").value = "";
    toggleModal(projectModal);
  });

  closeButton.appendChild(closeIcon);
  headerContainer.appendChild(closeButton);

  const overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.classList.add("hidden");

  projectModal.appendChild(headerContainer);
  projectModal.appendChild(createProjectForm());

  document.body.appendChild(projectModal);
  document.body.appendChild(overlay);

  return projectModal;
};

const triggerProjectModal = () => {
  const projectModal = document.getElementById("project-modal");
  toggleModal(projectModal);

  const projectForm = document.getElementById("project-form");
  projectForm.onsubmit = (event) => {
    const name = document.getElementById("project-name").value;
    const description = document.getElementById("project-description").value;
    const newProject = (0,_controllers_project_controller__WEBPACK_IMPORTED_MODULE_0__.addProjectItem)(name, description);

    const projectItemsContainer = document.getElementById(
      "project-items-container"
    );
    projectItemsContainer.appendChild((0,_project_item__WEBPACK_IMPORTED_MODULE_2__["default"])(newProject));
    (0,_project_content__WEBPACK_IMPORTED_MODULE_1__.loadProject)(newProject);
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
  descriptionInput.maxLength = 1000;
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

const createTaskModal = () => {};

const toggleModal = (modal) => {
  const overlay = document.getElementById("overlay");
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
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
/* harmony export */   loadProject: () => (/* binding */ loadProject)
/* harmony export */ });
/* harmony import */ var _controllers_project_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/project-controller */ "./src/controllers/project-controller.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ "./src/ui/sidebar.js");



const createProjectContainer = () => {
  const projectContainer = document.createElement("div");
  projectContainer.id = "project-container";

  const projectContent = document.createElement("div");

  projectContainer.appendChild(loadProject((0,_controllers_project_controller__WEBPACK_IMPORTED_MODULE_0__.getProjects)()[0]));
  (0,_sidebar__WEBPACK_IMPORTED_MODULE_1__.toggleActiveItem)(document.querySelector(".project-item")); // Set General as initial active project
  return projectContainer;
};

const loadProject = (project) => {
  const projectContent = document.createElement("div");
  projectContent.id = "project-content";

  const contentHeader = document.createElement("div");
  contentHeader.id = "content-header";

  const projectName = document.createElement("h2");
  projectName.className = "project-name";
  projectName.textContent = project.getName();

  const projectDescription = document.createElement("p");
  projectDescription.className = "project-description";
  projectDescription.textContent = project.getDescription();

  const editButton = document.createElement("button");
  editButton.classList = "project-edit-button";
  editButton.textContent = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.classList = "project-delete-button";
  deleteButton.textContent = "Delete";

  contentHeader.appendChild(projectName);
  contentHeader.appendChild(editButton);
  contentHeader.appendChild(projectDescription);
  contentHeader.appendChild(deleteButton);

  projectContent.appendChild(contentHeader);

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
  projectContainer.appendChild(loadProject(project));
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
  projectName.textContent = project.getName();

  const numTasksContainer = document.createElement("div");
  numTasksContainer.className = "num-tasks-container";

  const numTasks = document.createElement("p");
  numTasks.className = "num-tasks";
  numTasks.textContent = project.getNumTasks();
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
/* harmony export */   toggleActiveItem: () => (/* binding */ toggleActiveItem)
/* harmony export */ });
/* harmony import */ var _assets_add_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/add.svg */ "./src/assets/add.svg");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/ui/modal.js");
/* harmony import */ var _project_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-item */ "./src/ui/project-item.js");
/* harmony import */ var _controllers_project_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/project-controller */ "./src/controllers/project-controller.js");
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/project */ "./src/models/project.js");






const createSidebar = () => {
  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";

  const generalItem = (0,_models_project__WEBPACK_IMPORTED_MODULE_4__["default"])("General", "", []);
  (0,_controllers_project_controller__WEBPACK_IMPORTED_MODULE_3__.addProjectItem)("General", "");

  const projectItemsContainer = document.createElement("div");
  projectItemsContainer.id = "project-items-container";

  const projectItemsHeader = document.createElement("p");
  projectItemsHeader.id = "project-items-header";
  projectItemsHeader.textContent = "Projects";
  projectItemsContainer.appendChild(projectItemsHeader);

  const itemsContainerUnderline = document.createElement("hr");
  projectItemsContainer.appendChild(itemsContainerUnderline);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sNEZBQTRGLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sYUFBYSxjQUFjLFlBQVksS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFX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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrREFBYTtBQUNqQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJPO0FBQ007QUFDQztBQUNvQjtBQUNwQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDJEQUFjO0FBQ3BDLEVBQUUsK0VBQWM7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDRDQUFPO0FBQ3ZCO0FBQ0E7QUFDQSxJQUFJLDJEQUFtQjtBQUN2QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix5REFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRyb2xsZXJzL3Byb2plY3QtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpL21vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS9wcm9qZWN0LWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpL3Byb2plY3QtaXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdWkvc2lkZWJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogfHwgR2VuZXJhbCBTdHlsZXMgKi9cclxuXHJcbjpyb290IHtcclxuICAtLXByaW1hcnktY29sb3I6IHdoaXRlO1xyXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgLS1jb21wbGV0ZWQtY29sb3I6IGdyZWVuO1xyXG4gIC0taGlnaC1wcmlvcml0eS1jb2xvcjogcmVkO1xyXG4gIC0tbWVkaXVtLXByaW9yaXR5LWNvbG9yOiBvcmFuZ2U7XHJcbiAgLS1sb3ctcHJpb3JpdHktY29sb3I6IGJsdWU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5ib2R5LFxyXG5wIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDEwZnIgLyAxZnIgNmZyO1xyXG59XHJcblxyXG4jYWRkLXByb2plY3QtYnV0dG9uLFxyXG4jYWRkLXRhc2stYnV0dG9uIHtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4vKiB8fCBIZWFkZXIgKi9cclxuaGVhZGVyIHtcclxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuI21lbnUtYnV0dG9uIHtcclxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xyXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogfHwgU2lkZWJhciAqL1xyXG5cclxuI3NpZGViYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMXJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4jcHJvamVjdC1pdGVtcy1oZWFkZXIsXHJcbi5wcm9qZWN0LWl0ZW0tbmFtZSB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG5ociB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4vKiB8fCBQcm9qZWN0IEl0ZW0gKi9cclxuLnByb2plY3QtaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDFyZW07XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWl0ZW0uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuLm51bS10YXNrcy1jb250YWluZXIge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLm51bS10YXNrcyB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4vKiB8fCBQcm9qZWN0IENvbnRlbnQgKi9cclxuXHJcbi8qIHx8IFRhc2sgSXRlbSAqL1xyXG5cclxuLyogfHwgTW9kYWwgKi9cclxuXHJcbi5tb2RhbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgei1pbmRleDogMjtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uZm9ybS1oZWFkZXIge1xyXG4gIGdyaWQtY29sdW1uOiAyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jbG9zZS1pY29uIHtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGFpbmVyIGJ1dHRvbiB7XHJcbiAgZ3JpZC1jb2x1bW46IDM7XHJcbiAganVzdGlmeS1zZWxmOiBlbmQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDF2bWluO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG50ZXh0YXJlYSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEuNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICByZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFyZW0gM3JlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi8qIFNvdXJjZTogaHR0cHM6Ly93d3cuZnJlZWNvZGVjYW1wLm9yZy9uZXdzL2hvdy10by1idWlsZC1hLW1vZGFsLXdpdGgtamF2YXNjcmlwdC8gKi9cclxuI292ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxzQkFBc0I7O0FBRXRCO0VBQ0Usc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLCtCQUErQjtFQUMvQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7O0VBRUUsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixpQ0FBaUM7QUFDbkM7O0FBRUE7O0VBRUUsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyx3Q0FBd0M7RUFDeEMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLGVBQWU7O0FBRWY7RUFDRSx3Q0FBd0M7RUFDeEMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsU0FBUztFQUNULFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQSxvQkFBb0I7QUFDcEI7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSx1QkFBdUI7O0FBRXZCLGlCQUFpQjs7QUFFakIsYUFBYTs7QUFFYjtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWiwyQ0FBMkM7QUFDN0M7O0FBRUEsb0ZBQW9GO0FBQ3BGO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHx8IEdlbmVyYWwgU3R5bGVzICovXFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1wcmltYXJ5LWNvbG9yOiB3aGl0ZTtcXHJcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiBsaWdodGdyYXk7XFxyXFxuICAtLWNvbXBsZXRlZC1jb2xvcjogZ3JlZW47XFxyXFxuICAtLWhpZ2gtcHJpb3JpdHktY29sb3I6IHJlZDtcXHJcXG4gIC0tbWVkaXVtLXByaW9yaXR5LWNvbG9yOiBvcmFuZ2U7XFxyXFxuICAtLWxvdy1wcmlvcml0eS1jb2xvcjogYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSxcXHJcXG5wIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlOiAxZnIgMTBmciAvIDFmciA2ZnI7XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdC1idXR0b24sXFxyXFxuI2FkZC10YXNrLWJ1dHRvbiB7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB8fCBIZWFkZXIgKi9cXHJcXG5oZWFkZXIge1xcclxcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuI21lbnUtYnV0dG9uIHtcXHJcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxyXFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIHx8IFNpZGViYXIgKi9cXHJcXG5cXHJcXG4jc2lkZWJhciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1pdGVtcy1oZWFkZXIsXFxyXFxuLnByb2plY3QtaXRlbS1uYW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaHIge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG4vKiB8fCBQcm9qZWN0IEl0ZW0gKi9cXHJcXG4ucHJvamVjdC1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pdGVtLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm51bS10YXNrcy1jb250YWluZXIge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5udW0tdGFza3Mge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB8fCBQcm9qZWN0IENvbnRlbnQgKi9cXHJcXG5cXHJcXG4vKiB8fCBUYXNrIEl0ZW0gKi9cXHJcXG5cXHJcXG4vKiB8fCBNb2RhbCAqL1xcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0taGVhZGVyIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtaWNvbiB7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1jb250YWluZXIgYnV0dG9uIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAzO1xcclxcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxdm1pbjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEuNXJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0LWJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gM3JlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbi8qIFNvdXJjZTogaHR0cHM6Ly93d3cuZnJlZWNvZGVjYW1wLm9yZy9uZXdzL2hvdy10by1idWlsZC1hLW1vZGFsLXdpdGgtamF2YXNjcmlwdC8gKi9cXHJcXG4jb3ZlcmxheSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcHJvamVjdEZhY3RvcnkgZnJvbSBcIi4uL21vZGVscy9wcm9qZWN0XCI7XHJcblxyXG5sZXQgcHJvamVjdHMgPSBbXTtcclxuXHJcbmNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xyXG4gIHJldHVybiBwcm9qZWN0cztcclxufTtcclxuXHJcbmNvbnN0IGFkZFByb2plY3RJdGVtID0gKG5hbWUsIGRlc2NyaXB0aW9uKSA9PiB7XHJcbiAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KG5hbWUsIGRlc2NyaXB0aW9uLCBbXSk7XHJcbiAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcclxuICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XHJcbiAgcmV0dXJuIG5ld1Byb2plY3Q7XHJcbn07XHJcblxyXG5jb25zdCByZW1vdmVQcm9qZWN0SXRlbSA9IChwcm9qZWN0KSA9PiB7XHJcbiAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5pbmRleE9mKHByb2plY3QpO1xyXG4gIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBhZGRQcm9qZWN0SXRlbSwgZ2V0UHJvamVjdHMsIHJlbW92ZVByb2plY3RJdGVtIH07XHJcbiIsImltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vdWkvaGVhZGVyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVNpZGViYXIgfSBmcm9tIFwiLi91aS9zaWRlYmFyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RDb250YWluZXIgfSBmcm9tIFwiLi91aS9wcm9qZWN0LWNvbnRlbnRcIjtcclxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdE1vZGFsIH0gZnJvbSBcIi4vdWkvbW9kYWxcIjtcclxuaW1wb3J0IFwiLi9jc3Mvc3R5bGUuY3NzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsaXplV2VicGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcImNvbnRhaW5lclwiO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlU2lkZWJhcigpKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdENvbnRhaW5lcigpKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RNb2RhbCgpKTtcclxufTtcclxuXHJcbmluaXRpYWxpemVXZWJwYWdlKCk7XHJcbiIsImNvbnN0IHByb2plY3RGYWN0b3J5ID0gKG5hbWUsIGRlc2NyaXB0aW9uLCB0YXNrcykgPT4ge1xyXG4gIGZ1bmN0aW9uIGFkZFRhc2sobmV3VGFzaykge1xyXG4gICAgdGFza3MucHVzaChuZXdUYXNrKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZVRhc2sodGFza1RvUmVtb3ZlKSB7XHJcbiAgICBjb25zdCBpbmRleE9mVGFzayA9IHRhc2tzLmluZGV4T2YodGFza1RvUmVtb3ZlKTtcclxuICAgIHRhc2tzLnNwbGljZShpbmRleE9mVGFzaywgMSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXROdW1UYXNrcygpIHtcclxuICAgIHJldHVybiB0YXNrcy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXROYW1lKCkge1xyXG4gICAgcmV0dXJuIG5hbWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXREZXNjcmlwdGlvbigpIHtcclxuICAgIHJldHVybiBkZXNjcmlwdGlvbjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFRhc2tzKCkge1xyXG4gICAgcmV0dXJuIHRhc2tzO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgYWRkVGFzayxcclxuICAgIHJlbW92ZVRhc2ssXHJcbiAgICBnZXROdW1UYXNrcyxcclxuICAgIGdldE5hbWUsXHJcbiAgICBnZXREZXNjcmlwdGlvbixcclxuICAgIGdldFRhc2tzLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0RmFjdG9yeTtcclxuIiwiaW1wb3J0IE1lbnVJY29uIGZyb20gXCIuLi9hc3NldHMvbWVudS5zdmdcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG5cclxuICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBtZW51QnV0dG9uLmlkID0gXCJtZW51LWJ1dHRvblwiO1xyXG4gIGNvbnN0IG1lbnVJY29uID0gbmV3IEltYWdlKCk7XHJcbiAgbWVudUljb24uc3JjID0gTWVudUljb247XHJcblxyXG4gIG1lbnVCdXR0b24uYXBwZW5kQ2hpbGQobWVudUljb24pO1xyXG5cclxuICBjb25zdCBhcHBOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGFwcE5hbWUudGV4dENvbnRlbnQgPSBcIlRvRG9MaXN0XCI7XHJcblxyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoYXBwTmFtZSk7XHJcblxyXG4gIHJldHVybiBoZWFkZXI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIZWFkZXI7XHJcbiIsImltcG9ydCB7IGFkZFByb2plY3RJdGVtIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL3Byb2plY3QtY29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBsb2FkUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3QtY29udGVudFwiO1xyXG5pbXBvcnQgY3JlYXRlUHJvamVjdEl0ZW0gZnJvbSBcIi4vcHJvamVjdC1pdGVtXCI7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIi4uL2Fzc2V0cy9jbG9zZS5zdmdcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZVByb2plY3RNb2RhbCA9ICgpID0+IHtcclxuICBjb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHByb2plY3RNb2RhbC5pZCA9IFwicHJvamVjdC1tb2RhbFwiO1xyXG4gIHByb2plY3RNb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XHJcbiAgcHJvamVjdE1vZGFsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcblxyXG4gIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiaGVhZGVyLWNvbnRhaW5lclwiO1xyXG5cclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgaGVhZGVyLmNsYXNzTmFtZSA9IFwiZm9ybS1oZWFkZXJcIjtcclxuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkFkZCBhIFByb2plY3RcIjtcclxuICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNsb3NlQnV0dG9uLmlkID0gXCJwcm9qZWN0LWNsb3NlLWJ1dHRvblwiO1xyXG4gIGNvbnN0IGNsb3NlSWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gIGNsb3NlSWNvbi5jbGFzc05hbWUgPSBcImNsb3NlLWljb25cIjtcclxuICBjbG9zZUljb24uc3JjID0gQ2xvc2VJY29uO1xyXG5cclxuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWVcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWRlc2NyaXB0aW9uXCIpLnZhbHVlID0gXCJcIjtcclxuICAgIHRvZ2dsZU1vZGFsKHByb2plY3RNb2RhbCk7XHJcbiAgfSk7XHJcblxyXG4gIGNsb3NlQnV0dG9uLmFwcGVuZENoaWxkKGNsb3NlSWNvbik7XHJcbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcclxuXHJcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgb3ZlcmxheS5pZCA9IFwib3ZlcmxheVwiO1xyXG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuXHJcbiAgcHJvamVjdE1vZGFsLmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lcik7XHJcbiAgcHJvamVjdE1vZGFsLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RGb3JtKCkpO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHByb2plY3RNb2RhbCk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcclxuXHJcbiAgcmV0dXJuIHByb2plY3RNb2RhbDtcclxufTtcclxuXHJcbmNvbnN0IHRyaWdnZXJQcm9qZWN0TW9kYWwgPSAoKSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW1vZGFsXCIpO1xyXG4gIHRvZ2dsZU1vZGFsKHByb2plY3RNb2RhbCk7XHJcblxyXG4gIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWZvcm1cIik7XHJcbiAgcHJvamVjdEZvcm0ub25zdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGFkZFByb2plY3RJdGVtKG5hbWUsIGRlc2NyaXB0aW9uKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0SXRlbXNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJwcm9qZWN0LWl0ZW1zLWNvbnRhaW5lclwiXHJcbiAgICApO1xyXG4gICAgcHJvamVjdEl0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RJdGVtKG5ld1Byb2plY3QpKTtcclxuICAgIGxvYWRQcm9qZWN0KG5ld1Byb2plY3QpO1xyXG4gICAgcHJvamVjdEZvcm0ucmVzZXQoKTtcclxuICAgIHRvZ2dsZU1vZGFsKHByb2plY3RNb2RhbCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVQcm9qZWN0Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gIHByb2plY3RGb3JtLmlkID0gXCJwcm9qZWN0LWZvcm1cIjtcclxuXHJcbiAgLy8gTmFtZVxyXG4gIGNvbnN0IG5hbWVJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgbmFtZUlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgbmFtZUlucHV0TGFiZWwuZm9yID0gXCJwcm9qZWN0LW5hbWVcIjtcclxuICBuYW1lSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBOYW1lXCI7XHJcblxyXG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBuYW1lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gIG5hbWVJbnB1dC5uYW1lID0gXCJwcm9qZWN0LW5hbWVcIjtcclxuICBuYW1lSW5wdXQuaWQgPSBcInByb2plY3QtbmFtZVwiO1xyXG4gIG5hbWVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XHJcblxyXG4gIG5hbWVJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lSW5wdXRMYWJlbCk7XHJcbiAgbmFtZUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XHJcbiAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobmFtZUlucHV0Q29udGFpbmVyKTtcclxuXHJcbiAgLy8gRGVzY3JpcHRpb25cclxuICBjb25zdCBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbklucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgZGVzY3JpcHRpb25JbnB1dExhYmVsLmZvciA9IFwicHJvamVjdC1kZXNjcmlwdGlvblwiO1xyXG4gIGRlc2NyaXB0aW9uSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcclxuXHJcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICBkZXNjcmlwdGlvbklucHV0Lm5hbWUgPSBcInByb2plY3QtZGVzY3JpcHRpb25cIjtcclxuICBkZXNjcmlwdGlvbklucHV0LmlkID0gXCJwcm9qZWN0LWRlc2NyaXB0aW9uXCI7XHJcbiAgZGVzY3JpcHRpb25JbnB1dC5yb3dzID0gMTA7XHJcbiAgZGVzY3JpcHRpb25JbnB1dC5jb2xzID0gNTA7XHJcbiAgZGVzY3JpcHRpb25JbnB1dC5tYXhMZW5ndGggPSAxMDAwO1xyXG4gIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBcIlR5cGUgYSBtZXNzYWdlLi4uXCI7XHJcblxyXG4gIGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dExhYmVsKTtcclxuICBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xyXG4gIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIpO1xyXG5cclxuICAvLyBBZGQgUHJvamVjdCBCdXR0b25cclxuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBhZGRQcm9qZWN0QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xyXG4gIGFkZFByb2plY3RCdXR0b24uY2xhc3NOYW1lID0gXCJzdWJtaXQtYnV0dG9uXCI7XHJcbiAgYWRkUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIjtcclxuICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcclxuXHJcbiAgcmV0dXJuIHByb2plY3RGb3JtO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlVGFza01vZGFsID0gKCkgPT4ge307XHJcblxyXG5jb25zdCB0b2dnbGVNb2RhbCA9IChtb2RhbCkgPT4ge1xyXG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIik7XHJcbiAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxuICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbn07XHJcblxyXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0TW9kYWwsIHRyaWdnZXJQcm9qZWN0TW9kYWwgfTtcclxuIiwiaW1wb3J0IHsgZ2V0UHJvamVjdHMgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvcHJvamVjdC1jb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IHRvZ2dsZUFjdGl2ZUl0ZW0gfSBmcm9tIFwiLi9zaWRlYmFyXCI7XHJcblxyXG5jb25zdCBjcmVhdGVQcm9qZWN0Q29udGFpbmVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHByb2plY3RDb250YWluZXIuaWQgPSBcInByb2plY3QtY29udGFpbmVyXCI7XHJcblxyXG4gIGNvbnN0IHByb2plY3RDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkUHJvamVjdChnZXRQcm9qZWN0cygpWzBdKSk7XHJcbiAgdG9nZ2xlQWN0aXZlSXRlbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaXRlbVwiKSk7IC8vIFNldCBHZW5lcmFsIGFzIGluaXRpYWwgYWN0aXZlIHByb2plY3RcclxuICByZXR1cm4gcHJvamVjdENvbnRhaW5lcjtcclxufTtcclxuXHJcbmNvbnN0IGxvYWRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcclxuICBjb25zdCBwcm9qZWN0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJvamVjdENvbnRlbnQuaWQgPSBcInByb2plY3QtY29udGVudFwiO1xyXG5cclxuICBjb25zdCBjb250ZW50SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb250ZW50SGVhZGVyLmlkID0gXCJjb250ZW50LWhlYWRlclwiO1xyXG5cclxuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBwcm9qZWN0TmFtZS5jbGFzc05hbWUgPSBcInByb2plY3QtbmFtZVwiO1xyXG4gIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXROYW1lKCk7XHJcblxyXG4gIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHByb2plY3REZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBcInByb2plY3QtZGVzY3JpcHRpb25cIjtcclxuICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldERlc2NyaXB0aW9uKCk7XHJcblxyXG4gIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGVkaXRCdXR0b24uY2xhc3NMaXN0ID0gXCJwcm9qZWN0LWVkaXQtYnV0dG9uXCI7XHJcbiAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xyXG5cclxuICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QgPSBcInByb2plY3QtZGVsZXRlLWJ1dHRvblwiO1xyXG4gIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XHJcblxyXG4gIGNvbnRlbnRIZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xyXG4gIGNvbnRlbnRIZWFkZXIuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XHJcbiAgY29udGVudEhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pO1xyXG4gIGNvbnRlbnRIZWFkZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuXHJcbiAgcHJvamVjdENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudEhlYWRlcik7XHJcblxyXG4gIHJldHVybiBwcm9qZWN0Q29udGVudDtcclxufTtcclxuXHJcbmNvbnN0IGNsZWFyQ29udGVudCA9ICgpID0+IHtcclxuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWNvbnRhaW5lclwiKTtcclxuICBwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbn07XHJcblxyXG5jb25zdCBjaGFuZ2VQcm9qZWN0ID0gKHByb2plY3RJdGVtLCBwcm9qZWN0KSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1jb250YWluZXJcIik7XHJcbiAgY2xlYXJDb250ZW50KCk7XHJcbiAgdG9nZ2xlQWN0aXZlSXRlbShwcm9qZWN0SXRlbSk7XHJcbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkUHJvamVjdChwcm9qZWN0KSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0Q29udGFpbmVyLCBsb2FkUHJvamVjdCwgY2xlYXJDb250ZW50LCBjaGFuZ2VQcm9qZWN0IH07XHJcbiIsImltcG9ydCB7IGxvYWRQcm9qZWN0LCBjbGVhckNvbnRlbnQsIGNoYW5nZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0LWNvbnRlbnRcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZVByb2plY3RJdGVtID0gKHByb2plY3QpID0+IHtcclxuICBjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJvamVjdEl0ZW0uY2xhc3NOYW1lID0gXCJwcm9qZWN0LWl0ZW1cIjtcclxuXHJcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwcm9qZWN0TmFtZS5jbGFzc05hbWUgPSBcInByb2plY3QtaXRlbS1uYW1lXCI7XHJcbiAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKTtcclxuXHJcbiAgY29uc3QgbnVtVGFza3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG51bVRhc2tzQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwibnVtLXRhc2tzLWNvbnRhaW5lclwiO1xyXG5cclxuICBjb25zdCBudW1UYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIG51bVRhc2tzLmNsYXNzTmFtZSA9IFwibnVtLXRhc2tzXCI7XHJcbiAgbnVtVGFza3MudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE51bVRhc2tzKCk7XHJcbiAgbnVtVGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQobnVtVGFza3MpO1xyXG5cclxuICBwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XHJcbiAgcHJvamVjdEl0ZW0uYXBwZW5kQ2hpbGQobnVtVGFza3NDb250YWluZXIpO1xyXG5cclxuICBwcm9qZWN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY2hhbmdlUHJvamVjdChwcm9qZWN0SXRlbSwgcHJvamVjdCk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBwcm9qZWN0SXRlbTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb2plY3RJdGVtO1xyXG4iLCJpbXBvcnQgQWRkSWNvbiBmcm9tIFwiLi4vYXNzZXRzL2FkZC5zdmdcIjtcclxuaW1wb3J0IHsgdHJpZ2dlclByb2plY3RNb2RhbCB9IGZyb20gXCIuL21vZGFsXCI7XHJcbmltcG9ydCBjcmVhdGVQcm9qZWN0SXRlbSBmcm9tIFwiLi9wcm9qZWN0LWl0ZW1cIjtcclxuaW1wb3J0IHsgYWRkUHJvamVjdEl0ZW0gfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvcHJvamVjdC1jb250cm9sbGVyXCI7XHJcbmltcG9ydCBwcm9qZWN0RmFjdG9yeSBmcm9tIFwiLi4vbW9kZWxzL3Byb2plY3RcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZVNpZGViYXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2lkZWJhci5pZCA9IFwic2lkZWJhclwiO1xyXG5cclxuICBjb25zdCBnZW5lcmFsSXRlbSA9IHByb2plY3RGYWN0b3J5KFwiR2VuZXJhbFwiLCBcIlwiLCBbXSk7XHJcbiAgYWRkUHJvamVjdEl0ZW0oXCJHZW5lcmFsXCIsIFwiXCIpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0SXRlbXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHByb2plY3RJdGVtc0NvbnRhaW5lci5pZCA9IFwicHJvamVjdC1pdGVtcy1jb250YWluZXJcIjtcclxuXHJcbiAgY29uc3QgcHJvamVjdEl0ZW1zSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgcHJvamVjdEl0ZW1zSGVhZGVyLmlkID0gXCJwcm9qZWN0LWl0ZW1zLWhlYWRlclwiO1xyXG4gIHByb2plY3RJdGVtc0hlYWRlci50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcclxuICBwcm9qZWN0SXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW1zSGVhZGVyKTtcclxuXHJcbiAgY29uc3QgaXRlbXNDb250YWluZXJVbmRlcmxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XHJcbiAgcHJvamVjdEl0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1zQ29udGFpbmVyVW5kZXJsaW5lKTtcclxuXHJcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgYWRkUHJvamVjdEJ1dHRvbi5pZCA9IFwiYWRkLXByb2plY3QtYnV0dG9uXCI7XHJcbiAgY29uc3QgYWRkSWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gIGFkZEljb24uc3JjID0gQWRkSWNvbjtcclxuICBhZGRQcm9qZWN0QnV0dG9uLmFwcGVuZENoaWxkKGFkZEljb24pO1xyXG4gIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHRyaWdnZXJQcm9qZWN0TW9kYWwoKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgYWRkUHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBhZGRQcm9qZWN0VGV4dC50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIjtcclxuICBhZGRQcm9qZWN0QnV0dG9uLmFwcGVuZENoaWxkKGFkZFByb2plY3RUZXh0KTtcclxuXHJcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0SXRlbShnZW5lcmFsSXRlbSkpO1xyXG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW1zQ29udGFpbmVyKTtcclxuICBzaWRlYmFyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xyXG5cclxuICByZXR1cm4gc2lkZWJhcjtcclxufTtcclxuXHJcbmNvbnN0IHRvZ2dsZUFjdGl2ZUl0ZW0gPSAocHJvamVjdEl0ZW0pID0+IHtcclxuICBjb25zdCBhbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1pdGVtXCIpO1xyXG4gIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XHJcbiAgcHJvamVjdEl0ZW0uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVNpZGViYXIsIHRvZ2dsZUFjdGl2ZUl0ZW0gfTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9