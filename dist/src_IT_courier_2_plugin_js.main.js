(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_IT_courier_2_plugin_js"],{

/***/ "./src/IT/courier_2/deliver.js":
/*!*************************************!*\
  !*** ./src/IT/courier_2/deliver.js ***!
  \*************************************/
/*! namespace exports */
/*! export Card [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => /* binding */ Card
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/IT/utils.js");
;

var BUTTON_LABEL = "Deliver";
var BUTTON_ID = "submit_button";
var DONE_MESSAGE = "Order delivered succesfully. Good job!";
var CHECK_IF_IS_DELIVERED_TIMEOUT = 2000;

var Card = function Card(props) {
  var nPackagesInput = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    nPackagesInput.current.focus();
  });

  var deliver = function deliver(e) {
    e.preventDefault();
    document.getElementById(BUTTON_ID).disable = true;
    deliverProcedure(nPackagesInput.current.value, 0);
  };

  var wasteTimeSyncronously = function wasteTimeSyncronously(time_to_waste) {
    var start = Date.now();
    console.log('waste time');

    while (Date.now() - start <= time_to_waste) {}
  };

  var deliverProcedure = function deliverProcedure(n_box, step) {
    if (step == 0) {
      _utils__WEBPACK_IMPORTED_MODULE_1__.default.setOrderInTransit(props['order']['id'], n_box, props['token']['jwt']).then(function () {
        deliverProcedure(n_box, step + 1);
      }).catch(function (err) {
        closeProcedureError(err.msg, step);
      });
    }

    if (step == 1) {
      _utils__WEBPACK_IMPORTED_MODULE_1__.default.checkIfOrderIsInTransit(props['order']['id'], props['token']['jwt']).then(function (res) {
        console.log('checkIfOrderIsInTransit ', res);

        if (res.res) {
          deliverProcedure(n_box, step + 1);
        } else {
          wasteTimeSyncronously(CHECK_IF_IS_DELIVERED_TIMEOUT);
          deliverProcedure(n_box, step);
        }
      }).catch(function (err) {
        closeProcedureError(err.msg, step);
      });
    }

    if (step == 2) {
      _utils__WEBPACK_IMPORTED_MODULE_1__.default.setOrderDelivered(props['order']['id'], n_box, props['token']['jwt']).then(function () {
        if (USE_WAREHOUSE_WORKER_LOGIN) {
          deliverProcedure(n_box, step + 1);
        } else {
          closeProcedureCorrectly();
        }
      }).catch(function (err) {
        closeProcedureError(err.msg, step);
      });
    }

    if (step == 3) {
      _utils__WEBPACK_IMPORTED_MODULE_1__.default.setWhoMakeDelivery(props['wh_user_id'], props['order']['id'], props['token']['jwt']).then(function () {
        closeProcedureCorrectly();
      }).catch(function (err) {
        closeProcedureError(err.msg, step, step);
      });
    }
  };

  var closeProcedureCorrectly = function closeProcedureCorrectly() {
    window.alert(DONE_MESSAGE);
    window.location.reload();
  };

  var closeProcedureError = function closeProcedureError(msg, step) {
    alert(msg);
    _utils__WEBPACK_IMPORTED_MODULE_1__.default.saveProcedure('2', props['deliver_order_proc_name'], {
      order_id: props['order']['id'],
      box_n: nPackagesInput.current.value,
      user: props['wh_user_id'],
      step: step
    });
    window.location.reload();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    id: "print_form",
    onSubmit: deliver
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-row container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-2 mt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "number",
    min: "0",
    step: "1",
    className: "form-control",
    id: "colli",
    placeholder: "Default 0",
    ref: nPackagesInput
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-2 mt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    id: BUTTON_ID,
    type: "submit",
    className: "btn btn-primary btn-block"
  }, BUTTON_LABEL))));
};



/***/ }),

/***/ "./src/IT/courier_2/edit.js":
/*!**********************************!*\
  !*** ./src/IT/courier_2/edit.js ***!
  \**********************************/
/*! namespace exports */
/*! export Card [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => /* binding */ Card
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/IT/utils.js");
;


var SET_BOX_BTN_ID = 'set_box_btn_id';
var SET_BOX_BTN_LABEL = 'Set boxes';
var UNDO_BTN_ID = 'undo_btn_id';
var UNDO_BTN_LABEL = 'Undo Order';

var Card = function Card(props) {
  var nBoxToSet = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
    nBoxToSet.current.focus();
  });

  var disableButtons = function disableButtons() {
    document.getElementById(SET_BOX_BTN_ID).disable = true;
    document.getElementById(UNDO_BTN_ID).disable = true;
  };

  var setBoxes = function setBoxes(e) {
    e.preventDefault();
    disableButtons();
    var final_box_n = nBoxToSet.current.value;
    var step = 0;
    _utils__WEBPACK_IMPORTED_MODULE_2__.default.setOrderDelivered(props['order']['id'], final_box_n, props['token']['jwt']).then(function (res) {
      step++;
      _utils__WEBPACK_IMPORTED_MODULE_2__.default.setWhoMakeDelivery(props['wh_user_id'], props['order']['id'], props['token']['jwt']).then(function () {
        closeProcedureCorrectly();
      }).catch(function (err) {
        console.log('step in catch ', step);
        closeProcedureError(err.msg, step, final_box_n);
      });
    }).catch(function (err) {
      closeProcedureError(err.msg, step, final_box_n);
    });
  };

  var closeProcedureCorrectly = function closeProcedureCorrectly() {
    var DONE_MESSAGE = "Order ".concat(props['order']['id'], " modified succesfully. Set ").concat(nBoxToSet.current.value, " box. Good job!");
    alert(DONE_MESSAGE);
    window.location.reload();
  };

  var closeProcedureError = function closeProcedureError(msg, step, box_n) {
    alert(msg + step + box_n);
    _utils__WEBPACK_IMPORTED_MODULE_2__.default.saveProcedure('2', props['set_boxes_proc_name'], {
      order_id: props['order']['id'],
      box_n: box_n,
      user: props['wh_user_id'],
      step: step
    });
    window.location.reload();
  };

  var undoDeliver = function undoDeliver() {
    disableButtons();
    _utils__WEBPACK_IMPORTED_MODULE_2__.default.undoDeliver(props['order']['id'], props['token']['jwt']).then(function () {
      var DONE_MESSAGE = "Order ".concat(props['order']['id'], " undo succesfully. Good job!");
      alert(DONE_MESSAGE);
      window.location.reload();
    }).catch(function (err) {
      _utils__WEBPACK_IMPORTED_MODULE_2__.default.saveProcedure('2', props['undo_deliver_proc_name'], {
        order_id: props['order']['id']
      });
      alert(err.msg);
      window.location.reload();
    });
  };

  var toPrint = "".concat(props['info']['order_state'], " on ").concat(props['info']['order_date_change']);
  if (props['info']['order_state'] == 'DELIVERED') toPrint = toPrint + " with ".concat(props['order']['box_n'], " packages");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, toPrint), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("form", {
    id: "print_form",
    onSubmit: setBoxes
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "form-row container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col-md-6 mt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    type: "number",
    min: "0",
    step: "1",
    className: "form-control",
    id: "colli",
    placeholder: " Curr boxes ".concat(props['order']['box_n'], " "),
    ref: nBoxToSet
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col-md-2 mt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    id: SET_BOX_BTN_ID,
    type: "submit",
    className: "btn btn-primary btn-block"
  }, SET_BOX_BTN_LABEL)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col-md-2 mt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    id: UNDO_BTN_ID,
    type: "button",
    className: "btn btn-danger btn-block",
    onClick: undoDeliver
  }, UNDO_BTN_LABEL)))));
};



/***/ }),

/***/ "./src/IT/courier_2/plugin.js":
/*!************************************!*\
  !*** ./src/IT/courier_2/plugin.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils */ "./src/IT/utils.js");
/* harmony import */ var _deliver__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./deliver */ "./src/IT/courier_2/deliver.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./edit */ "./src/IT/courier_2/edit.js");
;














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var LOGO = "https://static.life365.eu/common/template-02/images/favicon.ico";
var COURIER = "Withdrowal from warehouse ";
var DELIVER_ORDER_PROC_NAME = 'DELIVER_ORDER';
var SET_BOXES_PROC_NAME = 'SET_BOXES';
var UNDO_DELIVER_PROC_NAME = 'UNDO_DELIVER';
var PLUGIN_STATE = {
  EMPTY: 0,
  EDIT: 1,
  DELIVER: 2
};

var PluginCard = function PluginCard(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_14__.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      info = _React$useState2[0],
      setInfo = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_14__.useState(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      box_n_state = _React$useState4[0],
      setBoxNState = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_14__.useState(PLUGIN_STATE.EMPTY),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      pluginState = _React$useState6[0],
      setPluginState = _React$useState6[1];

  react__WEBPACK_IMPORTED_MODULE_14__.useEffect(function () {
    _utils__WEBPACK_IMPORTED_MODULE_15__.default.canDeliverOrder_OLD(props['order']['id'], props['token']['jwt']).then(function (res) {
      var state = res['res'] ? PLUGIN_STATE.DELIVER : PLUGIN_STATE.EDIT; //let state = PLUGIN_STATE.EDIT

      setPluginState(state);
      setBoxNState(res['box_n']);
      setInfo(res['info']);
    }).catch(function (err) {
      alert(err);
      window.location.reload();
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("div", {
    className: "media"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("img", {
    className: "align-self-start mr-3",
    src: LOGO,
    alt: "Courier logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("div", {
    className: "media-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("h5", {
    className: "mt-0"
  }, COURIER), pluginState == PLUGIN_STATE.EDIT && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(_edit__WEBPACK_IMPORTED_MODULE_17__.Card, {
    order: props['order'],
    token: props['token'],
    info: info,
    set_boxes_proc_name: SET_BOXES_PROC_NAME,
    undo_deliver_proc_name: UNDO_DELIVER_PROC_NAME,
    box_n: box_n_state,
    wh_user_id: props['wh_user_id']
  }), pluginState == PLUGIN_STATE.DELIVER && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(_deliver__WEBPACK_IMPORTED_MODULE_16__.Card, {
    order: props['order'],
    token: props['token'],
    wh_user_id: props['wh_user_id'],
    deliver_order_proc_name: DELIVER_ORDER_PROC_NAME
  })))));
};

var REDO_PROCEDURE_OK = 'PROCEDURE procedure DONE WITH DATA data';
var CANT_DO_PROCEDURE_WITH_SAVE = 'CANT DO PROCEDURE procedure WITH DATA data. SAVING';
/**
 * 1- Questa cosa a mio avviso merita un modulo a parte
 * 2- Bisogna decidere se queste procedure hanno o no una modalità
 * di esecuzione che non prevede interleaving tra di esse
 * Nel caso non siano atomiche bisogna dire ai magazzinieri che si devono 
 * fidare non ci saranno problemie le richieste saranno fatte in qualsiasi caso
 * Nel caso siano atomiche c'è un lavoro di progettazione da fare
 * @param {*} procedure_name 
 * @param {*} procedure_data 
 * @param {*} jwt 
 */

var redoProcedure = function redoProcedure(procedure_name, procedure_data, jwt) {
  console.log("Plugin ".concat(COURIER, " procedure: ").concat(procedure_name, " ").concat(procedure_data));
  var order_id = procedure_data.order_id;
  console.log('Order id ' + order_id);
  var box_n = procedure_data.box_n;
  var user = procedure_data.user;
  var step = procedure_data.step;

  var closeProcedureCorrectly = function closeProcedureCorrectly(procedure_name, procedure_data) {
    var toPrint = REDO_PROCEDURE_OK.replace('procedure', procedure_name).replace('data', procedure_data);
    console.log(toPrint);
  };

  var closeProcedureError = function closeProcedureError(plugin_id, procedure_name, procedure_data, err) {
    var toPrint = CANT_DO_PROCEDURE_WITH_SAVE.replace('procedure', procedure_name).replace('data', procedure_data);
    _utils__WEBPACK_IMPORTED_MODULE_15__.default.saveProcedure(plugin_id, procedure_name, procedure_data);
    console.log(toPrint);
    console.log(err);
  };

  var doAnotherStep = function doAnotherStep(procedure_name, procedure_data, jwt) {
    procedure_data.step++;
    redoProcedure(procedure_name, procedure_data, jwt);
  };

  _utils__WEBPACK_IMPORTED_MODULE_15__.default.canDeliverOrder_OLD(order_id, jwt).then(function (res) {
    switch (procedure_name) {
      case DELIVER_ORDER_PROC_NAME:
        if (res['res'] && step == 0) {
          _utils__WEBPACK_IMPORTED_MODULE_15__.default.setOrderInTransit(order_id, box_n, jwt).then(function () {
            doAnotherStep(procedure_name, procedure_data, jwt);
          }).catch(function (err) {
            closeProcedureError('2', procedure_name, procedure_data, err);
          });
        }

        if (step == 1) {
          _utils__WEBPACK_IMPORTED_MODULE_15__.default.setOrderDelivered(order_id, box_n, jwt).then(function () {
            if (USE_WAREHOUSE_WORKER_LOGIN) {
              doAnotherStep(procedure_name, procedure_data, jwt);
            } else {
              closeProcedureCorrectly(procedure_name, procedure_data);
            }
          }).catch(function (err) {
            closeProcedureError('2', procedure_name, procedure_data, err);
          });
        }

        if (step == 2) {
          console.log('-------------- aggiornamento del log -----------');
          _utils__WEBPACK_IMPORTED_MODULE_15__.default.setWhoMakeDelivery(user, order_id, jwt).then(function () {
            closeProcedureCorrectly(procedure_name, procedure_data);
          }).catch(function (err) {
            closeProcedureError('2', procedure_name, procedure_data, err);
          });
        }

        break;

      case SET_BOXES_PROC_NAME:
        //stopped if order is not already delivered
        if (!res['res']) {
          console.log('---- step : ', step, ' procedure name ', procedure_name);

          if (step == 0) {
            _utils__WEBPACK_IMPORTED_MODULE_15__.default.setOrderDelivered(order_id, box_n, jwt).then(function () {
              doAnotherStep(procedure_name, procedure_data, jwt);
            }).catch(function (err) {
              closeProcedureError('2', procedure_name, procedure_data, err);
            });
          } else if (step == 1) {
            _utils__WEBPACK_IMPORTED_MODULE_15__.default.setWhoMakeDelivery(user, order_id, jwt).then(function () {
              closeProcedureCorrectly(procedure_name, procedure_data);
            }).catch(function (err) {
              closeProcedureError('2', procedure_name, procedure_data, err);
            });
          }
        }

        break;

      case UNDO_DELIVER_PROC_NAME:
        if (!res['res']) {
          _utils__WEBPACK_IMPORTED_MODULE_15__.default.undoDeliver(order_id, jwt).then(function () {
            var toPrint = REDO_PROCEDURE_OK.replace('procedure', procedure_name).replace('data', procedure_data);
            console.log(toPrint);
          }).catch(function (err) {
            var toPrint = CANT_DO_PROCEDURE_WITH_SAVE.replace('procedure', procedure_name).replace('data', procedure_data);
            _utils__WEBPACK_IMPORTED_MODULE_15__.default.saveProcedure('2', procedure_name, procedure_data);
            console.log(toPrint);
            console.log(err);
          });
        }

        break;

      default:
        console.log('PROCEDURE UNKNOW');
        break;
    }
  }).catch(function (err) {
    var toPrint = CANT_DO_PROCEDURE_WITH_SAVE.replace('procedure', procedure_name).replace('data', procedure_data);
    _utils__WEBPACK_IMPORTED_MODULE_15__.default.saveProcedure('2', procedure_name, procedure_data);
    console.log(toPrint);
    console.log(err);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  PluginCard: PluginCard,
  redoProcedure: redoProcedure
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9JVC9jb3VyaWVyXzIvZGVsaXZlci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9JVC9jb3VyaWVyXzIvZWRpdC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9JVC9jb3VyaWVyXzIvcGx1Z2luLmpzIl0sIm5hbWVzIjpbIkJVVFRPTl9MQUJFTCIsIkJVVFRPTl9JRCIsIkRPTkVfTUVTU0FHRSIsIkNIRUNLX0lGX0lTX0RFTElWRVJFRF9USU1FT1VUIiwiQ2FyZCIsInByb3BzIiwiblBhY2thZ2VzSW5wdXQiLCJSZWFjdCIsImN1cnJlbnQiLCJmb2N1cyIsImRlbGl2ZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGlzYWJsZSIsImRlbGl2ZXJQcm9jZWR1cmUiLCJ2YWx1ZSIsIndhc3RlVGltZVN5bmNyb25vdXNseSIsInRpbWVfdG9fd2FzdGUiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJjb25zb2xlIiwibG9nIiwibl9ib3giLCJzdGVwIiwiSXRhVXRpbHMiLCJ0aGVuIiwiY2F0Y2giLCJlcnIiLCJjbG9zZVByb2NlZHVyZUVycm9yIiwibXNnIiwicmVzIiwiVVNFX1dBUkVIT1VTRV9XT1JLRVJfTE9HSU4iLCJjbG9zZVByb2NlZHVyZUNvcnJlY3RseSIsIndpbmRvdyIsImFsZXJ0IiwibG9jYXRpb24iLCJyZWxvYWQiLCJvcmRlcl9pZCIsImJveF9uIiwidXNlciIsIlNFVF9CT1hfQlROX0lEIiwiU0VUX0JPWF9CVE5fTEFCRUwiLCJVTkRPX0JUTl9JRCIsIlVORE9fQlROX0xBQkVMIiwibkJveFRvU2V0IiwiZGlzYWJsZUJ1dHRvbnMiLCJzZXRCb3hlcyIsImZpbmFsX2JveF9uIiwidW5kb0RlbGl2ZXIiLCJ0b1ByaW50IiwiTE9HTyIsIkNPVVJJRVIiLCJERUxJVkVSX09SREVSX1BST0NfTkFNRSIsIlNFVF9CT1hFU19QUk9DX05BTUUiLCJVTkRPX0RFTElWRVJfUFJPQ19OQU1FIiwiUExVR0lOX1NUQVRFIiwiRU1QVFkiLCJFRElUIiwiREVMSVZFUiIsIlBsdWdpbkNhcmQiLCJpbmZvIiwic2V0SW5mbyIsImJveF9uX3N0YXRlIiwic2V0Qm94TlN0YXRlIiwicGx1Z2luU3RhdGUiLCJzZXRQbHVnaW5TdGF0ZSIsInN0YXRlIiwiUkVET19QUk9DRURVUkVfT0siLCJDQU5UX0RPX1BST0NFRFVSRV9XSVRIX1NBVkUiLCJyZWRvUHJvY2VkdXJlIiwicHJvY2VkdXJlX25hbWUiLCJwcm9jZWR1cmVfZGF0YSIsImp3dCIsInJlcGxhY2UiLCJwbHVnaW5faWQiLCJkb0Fub3RoZXJTdGVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBLElBQU1BLFlBQVksR0FBRyxTQUFyQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxlQUFsQjtBQUNBLElBQU1DLFlBQVksR0FBRyx3Q0FBckI7QUFDQSxJQUFNQyw2QkFBNkIsR0FBRyxJQUF0Qzs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFVQyxLQUFWLEVBQWlCO0FBQzFCLE1BQU1DLGNBQWMsR0FBR0MseUNBQUEsQ0FBYSxJQUFiLENBQXZCO0FBRUFBLDhDQUFBLENBQWdCLFlBQVk7QUFDeEJELGtCQUFjLENBQUNFLE9BQWYsQ0FBdUJDLEtBQXZCO0FBQ0gsR0FGRDs7QUFJQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFVQyxDQUFWLEVBQWE7QUFDekJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxZQUFRLENBQUNDLGNBQVQsQ0FBd0JiLFNBQXhCLEVBQW1DYyxPQUFuQyxHQUE2QyxJQUE3QztBQUNBQyxvQkFBZ0IsQ0FBQ1YsY0FBYyxDQUFDRSxPQUFmLENBQXVCUyxLQUF4QixFQUErQixDQUEvQixDQUFoQjtBQUNILEdBSkQ7O0FBTUEsTUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFTQyxhQUFULEVBQXVCO0FBQ2pELFFBQU1DLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxHQUFMLEVBQWQ7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWjs7QUFDQSxXQUFNSCxJQUFJLENBQUNDLEdBQUwsS0FBYUYsS0FBYixJQUFzQkQsYUFBNUIsRUFBMEMsQ0FBRTtBQUMvQyxHQUpEOztBQU1BLE1BQU1ILGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBVVMsS0FBVixFQUFpQkMsSUFBakIsRUFBdUI7QUFDNUMsUUFBSUEsSUFBSSxJQUFJLENBQVosRUFBZTtBQUNYQyxtRUFBQSxDQUEyQnRCLEtBQUssQ0FBQyxPQUFELENBQUwsQ0FBZSxJQUFmLENBQTNCLEVBQWlEb0IsS0FBakQsRUFBd0RwQixLQUFLLENBQUMsT0FBRCxDQUFMLENBQWUsS0FBZixDQUF4RCxFQUErRXVCLElBQS9FLENBQW9GLFlBQU07QUFDdEZaLHdCQUFnQixDQUFDUyxLQUFELEVBQVFDLElBQUksR0FBRyxDQUFmLENBQWhCO0FBQ0gsT0FGRCxFQUVHRyxLQUZILENBRVMsVUFBQUMsR0FBRyxFQUFJO0FBQ1pDLDJCQUFtQixDQUFDRCxHQUFHLENBQUNFLEdBQUwsRUFBVU4sSUFBVixDQUFuQjtBQUNILE9BSkQ7QUFLSDs7QUFFRCxRQUFJQSxJQUFJLElBQUksQ0FBWixFQUFlO0FBQ1hDLHlFQUFBLENBQWlDdEIsS0FBSyxDQUFDLE9BQUQsQ0FBTCxDQUFlLElBQWYsQ0FBakMsRUFBdURBLEtBQUssQ0FBQyxPQUFELENBQUwsQ0FBZSxLQUFmLENBQXZELEVBQThFdUIsSUFBOUUsQ0FBbUYsVUFBQ0ssR0FBRCxFQUFTO0FBQ3hGVixlQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWixFQUF3Q1MsR0FBeEM7O0FBQ0EsWUFBR0EsR0FBRyxDQUFDQSxHQUFQLEVBQVc7QUFDUGpCLDBCQUFnQixDQUFDUyxLQUFELEVBQVFDLElBQUksR0FBRyxDQUFmLENBQWhCO0FBQ0gsU0FGRCxNQUVPO0FBQ0hSLCtCQUFxQixDQUFDZiw2QkFBRCxDQUFyQjtBQUNBYSwwQkFBZ0IsQ0FBQ1MsS0FBRCxFQUFRQyxJQUFSLENBQWhCO0FBQ0g7QUFDSixPQVJELEVBUUdHLEtBUkgsQ0FRUyxVQUFBQyxHQUFHLEVBQUk7QUFDWkMsMkJBQW1CLENBQUNELEdBQUcsQ0FBQ0UsR0FBTCxFQUFVTixJQUFWLENBQW5CO0FBQ0gsT0FWRDtBQVdIOztBQUVELFFBQUlBLElBQUksSUFBSSxDQUFaLEVBQWU7QUFDWEMsbUVBQUEsQ0FBMkJ0QixLQUFLLENBQUMsT0FBRCxDQUFMLENBQWUsSUFBZixDQUEzQixFQUFpRG9CLEtBQWpELEVBQXdEcEIsS0FBSyxDQUFDLE9BQUQsQ0FBTCxDQUFlLEtBQWYsQ0FBeEQsRUFBK0V1QixJQUEvRSxDQUFvRixZQUFNO0FBQ3RGLFlBQUlNLDBCQUFKLEVBQWdDO0FBQzVCbEIsMEJBQWdCLENBQUNTLEtBQUQsRUFBUUMsSUFBSSxHQUFHLENBQWYsQ0FBaEI7QUFDSCxTQUZELE1BRU87QUFDSFMsaUNBQXVCO0FBQzFCO0FBQ0osT0FORCxFQU1HTixLQU5ILENBTVMsVUFBQUMsR0FBRyxFQUFJO0FBQ1pDLDJCQUFtQixDQUFDRCxHQUFHLENBQUNFLEdBQUwsRUFBVU4sSUFBVixDQUFuQjtBQUNILE9BUkQ7QUFTSDs7QUFFRCxRQUFJQSxJQUFJLElBQUksQ0FBWixFQUFlO0FBQ1hDLG9FQUFBLENBQTRCdEIsS0FBSyxDQUFDLFlBQUQsQ0FBakMsRUFBaURBLEtBQUssQ0FBQyxPQUFELENBQUwsQ0FBZSxJQUFmLENBQWpELEVBQXVFQSxLQUFLLENBQUMsT0FBRCxDQUFMLENBQWUsS0FBZixDQUF2RSxFQUE4RnVCLElBQTlGLENBQW1HLFlBQU07QUFDckdPLCtCQUF1QjtBQUMxQixPQUZELEVBRUdOLEtBRkgsQ0FFUyxVQUFBQyxHQUFHLEVBQUk7QUFDWkMsMkJBQW1CLENBQUNELEdBQUcsQ0FBQ0UsR0FBTCxFQUFVTixJQUFWLEVBQWdCQSxJQUFoQixDQUFuQjtBQUNILE9BSkQ7QUFLSDtBQUNKLEdBMUNEOztBQTZDQSxNQUFNUyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLEdBQVk7QUFFeENDLFVBQU0sQ0FBQ0MsS0FBUCxDQUFhbkMsWUFBYjtBQUNBa0MsVUFBTSxDQUFDRSxRQUFQLENBQWdCQyxNQUFoQjtBQUNILEdBSkQ7O0FBTUEsTUFBTVIsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFVQyxHQUFWLEVBQWVOLElBQWYsRUFBcUI7QUFDN0NXLFNBQUssQ0FBQ0wsR0FBRCxDQUFMO0FBQ0FMLDZEQUFBLENBQXVCLEdBQXZCLEVBQTRCdEIsS0FBSyxDQUFDLHlCQUFELENBQWpDLEVBQThEO0FBQzFEbUMsY0FBUSxFQUFFbkMsS0FBSyxDQUFDLE9BQUQsQ0FBTCxDQUFlLElBQWYsQ0FEZ0Q7QUFFMURvQyxXQUFLLEVBQUVuQyxjQUFjLENBQUNFLE9BQWYsQ0FBdUJTLEtBRjRCO0FBRzFEeUIsVUFBSSxFQUFFckMsS0FBSyxDQUFDLFlBQUQsQ0FIK0M7QUFJMURxQixVQUFJLEVBQUVBO0FBSm9ELEtBQTlEO0FBTUFVLFVBQU0sQ0FBQ0UsUUFBUCxDQUFnQkMsTUFBaEI7QUFDSCxHQVREOztBQVdBLHNCQUNJO0FBQU0sTUFBRSxFQUFDLFlBQVQ7QUFBc0IsWUFBUSxFQUFFN0I7QUFBaEMsa0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsT0FBRyxFQUFDLEdBQXpCO0FBQTZCLFFBQUksRUFBQyxHQUFsQztBQUFzQyxhQUFTLEVBQUMsY0FBaEQ7QUFBK0QsTUFBRSxFQUFDLE9BQWxFO0FBQTBFLGVBQVcsRUFBQyxXQUF0RjtBQUFrRyxPQUFHLEVBQUVKO0FBQXZHLElBREosQ0FESixlQUlJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBUSxNQUFFLEVBQUVMLFNBQVo7QUFBdUIsUUFBSSxFQUFDLFFBQTVCO0FBQXFDLGFBQVMsRUFBQztBQUEvQyxLQUE0RUQsWUFBNUUsQ0FESixDQUpKLENBREosQ0FESjtBQWFILENBOUZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFFQSxJQUFNMkMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLElBQU1DLGlCQUFpQixHQUFHLFdBQTFCO0FBRUEsSUFBTUMsV0FBVyxHQUFHLGFBQXBCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLFlBQXZCOztBQUVBLElBQU0xQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFVQyxLQUFWLEVBQWlCO0FBQzFCLE1BQU0wQyxTQUFTLEdBQUd4Qyx5Q0FBQSxDQUFhLElBQWIsQ0FBbEI7QUFFQUEsOENBQUEsQ0FBZ0IsWUFBWTtBQUN4QndDLGFBQVMsQ0FBQ3ZDLE9BQVYsQ0FBa0JDLEtBQWxCO0FBQ0gsR0FGRDs7QUFLQSxNQUFNdUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFZO0FBQy9CbkMsWUFBUSxDQUFDQyxjQUFULENBQXdCNkIsY0FBeEIsRUFBd0M1QixPQUF4QyxHQUFrRCxJQUFsRDtBQUNBRixZQUFRLENBQUNDLGNBQVQsQ0FBd0IrQixXQUF4QixFQUFxQzlCLE9BQXJDLEdBQStDLElBQS9DO0FBRUgsR0FKRDs7QUFNQSxNQUFNa0MsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBVXRDLENBQVYsRUFBYTtBQUMxQkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FvQyxrQkFBYztBQUNkLFFBQU1FLFdBQVcsR0FBR0gsU0FBUyxDQUFDdkMsT0FBVixDQUFrQlMsS0FBdEM7QUFDQSxRQUFJUyxJQUFJLEdBQUcsQ0FBWDtBQUNBQyxpRUFBQSxDQUEyQnRCLEtBQUssQ0FBQyxPQUFELENBQUwsQ0FBZSxJQUFmLENBQTNCLEVBQWlENkMsV0FBakQsRUFBOEQ3QyxLQUFLLENBQUMsT0FBRCxDQUFMLENBQWUsS0FBZixDQUE5RCxFQUFxRnVCLElBQXJGLENBQTBGLFVBQUFLLEdBQUcsRUFBSTtBQUN6RlAsVUFBSTtBQUNKQyxvRUFBQSxDQUE0QnRCLEtBQUssQ0FBQyxZQUFELENBQWpDLEVBQWlEQSxLQUFLLENBQUMsT0FBRCxDQUFMLENBQWUsSUFBZixDQUFqRCxFQUF1RUEsS0FBSyxDQUFDLE9BQUQsQ0FBTCxDQUFlLEtBQWYsQ0FBdkUsRUFBOEZ1QixJQUE5RixDQUFtRyxZQUFNO0FBQ3JHTywrQkFBdUI7QUFDMUIsT0FGRCxFQUVHTixLQUZILENBRVMsVUFBQUMsR0FBRyxFQUFJO0FBQ1pQLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCRSxJQUE5QjtBQUNBSywyQkFBbUIsQ0FBQ0QsR0FBRyxDQUFDRSxHQUFMLEVBQVVOLElBQVYsRUFBZ0J3QixXQUFoQixDQUFuQjtBQUNILE9BTEQ7QUFNSCxLQVJMLEVBUU9yQixLQVJQLENBUWEsVUFBQUMsR0FBRyxFQUFJO0FBQ2JDLHlCQUFtQixDQUFDRCxHQUFHLENBQUNFLEdBQUwsRUFBVU4sSUFBVixFQUFnQndCLFdBQWhCLENBQW5CO0FBQ0YsS0FWTDtBQVdILEdBaEJEOztBQWtCQSxNQUFNZix1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLEdBQVc7QUFDdkMsUUFBTWpDLFlBQVksbUJBQVlHLEtBQUssQ0FBQyxPQUFELENBQUwsQ0FBZSxJQUFmLENBQVosd0NBQThEMEMsU0FBUyxDQUFDdkMsT0FBVixDQUFrQlMsS0FBaEYsb0JBQWxCO0FBQ0FvQixTQUFLLENBQUNuQyxZQUFELENBQUw7QUFDQWtDLFVBQU0sQ0FBQ0UsUUFBUCxDQUFnQkMsTUFBaEI7QUFDSCxHQUpEOztBQU1BLE1BQU1SLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBVUMsR0FBVixFQUFlTixJQUFmLEVBQXFCZSxLQUFyQixFQUE0QjtBQUNwREosU0FBSyxDQUFDTCxHQUFHLEdBQUdOLElBQU4sR0FBYWUsS0FBZCxDQUFMO0FBQ0FkLDZEQUFBLENBQXVCLEdBQXZCLEVBQTRCdEIsS0FBSyxDQUFDLHFCQUFELENBQWpDLEVBQTBEO0FBQ3REbUMsY0FBUSxFQUFFbkMsS0FBSyxDQUFDLE9BQUQsQ0FBTCxDQUFlLElBQWYsQ0FENEM7QUFFdERvQyxXQUFLLEVBQUVBLEtBRitDO0FBR3REQyxVQUFJLEVBQUVyQyxLQUFLLENBQUMsWUFBRCxDQUgyQztBQUl0RHFCLFVBQUksRUFBRUE7QUFKZ0QsS0FBMUQ7QUFNQVUsVUFBTSxDQUFDRSxRQUFQLENBQWdCQyxNQUFoQjtBQUNILEdBVEQ7O0FBV0EsTUFBTVksV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBWTtBQUM1Qkgsa0JBQWM7QUFDZHJCLDJEQUFBLENBQXFCdEIsS0FBSyxDQUFDLE9BQUQsQ0FBTCxDQUFlLElBQWYsQ0FBckIsRUFBMkNBLEtBQUssQ0FBQyxPQUFELENBQUwsQ0FBZSxLQUFmLENBQTNDLEVBQ0t1QixJQURMLENBQ1UsWUFBTTtBQUNSLFVBQU0xQixZQUFZLG1CQUFZRyxLQUFLLENBQUMsT0FBRCxDQUFMLENBQWUsSUFBZixDQUFaLGlDQUFsQjtBQUNBZ0MsV0FBSyxDQUFDbkMsWUFBRCxDQUFMO0FBQ0FrQyxZQUFNLENBQUNFLFFBQVAsQ0FBZ0JDLE1BQWhCO0FBQ0gsS0FMTCxFQU1LVixLQU5MLENBTVcsVUFBQUMsR0FBRyxFQUFJO0FBQ1ZILCtEQUFBLENBQXVCLEdBQXZCLEVBQTRCdEIsS0FBSyxDQUFDLHdCQUFELENBQWpDLEVBQTZEO0FBQ3pEbUMsZ0JBQVEsRUFBRW5DLEtBQUssQ0FBQyxPQUFELENBQUwsQ0FBZSxJQUFmO0FBRCtDLE9BQTdEO0FBR0FnQyxXQUFLLENBQUNQLEdBQUcsQ0FBQ0UsR0FBTCxDQUFMO0FBQ0FJLFlBQU0sQ0FBQ0UsUUFBUCxDQUFnQkMsTUFBaEI7QUFDSCxLQVpMO0FBYUgsR0FmRDs7QUFpQkEsTUFBSWEsT0FBTyxhQUFNL0MsS0FBSyxDQUFDLE1BQUQsQ0FBTCxDQUFjLGFBQWQsQ0FBTixpQkFBeUNBLEtBQUssQ0FBQyxNQUFELENBQUwsQ0FBYyxtQkFBZCxDQUF6QyxDQUFYO0FBQ0EsTUFBSUEsS0FBSyxDQUFDLE1BQUQsQ0FBTCxDQUFjLGFBQWQsS0FBZ0MsV0FBcEMsRUFBaUQrQyxPQUFPLEdBQUdBLE9BQU8sbUJBQVkvQyxLQUFLLENBQUMsT0FBRCxDQUFMLENBQWUsT0FBZixDQUFaLGNBQWpCO0FBRWpELHNCQUNJLDJFQUNJLDREQUFJK0MsT0FBSixDQURKLGVBR0k7QUFBTSxNQUFFLEVBQUMsWUFBVDtBQUFzQixZQUFRLEVBQUVIO0FBQWhDLGtCQUVJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLE9BQUcsRUFBQyxHQUF6QjtBQUE2QixRQUFJLEVBQUMsR0FBbEM7QUFBc0MsYUFBUyxFQUFDLGNBQWhEO0FBQStELE1BQUUsRUFBQyxPQUFsRTtBQUEwRSxlQUFXLHdCQUFpQjVDLEtBQUssQ0FBQyxPQUFELENBQUwsQ0FBZSxPQUFmLENBQWpCLE1BQXJGO0FBQWtJLE9BQUcsRUFBRTBDO0FBQXZJLElBREosQ0FESixlQUlJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBUSxNQUFFLEVBQUVKLGNBQVo7QUFBNEIsUUFBSSxFQUFDLFFBQWpDO0FBQTBDLGFBQVMsRUFBQztBQUFwRCxLQUFpRkMsaUJBQWpGLENBREosQ0FKSixlQU9JO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBUSxNQUFFLEVBQUVDLFdBQVo7QUFBeUIsUUFBSSxFQUFDLFFBQTlCO0FBQXVDLGFBQVMsRUFBQywwQkFBakQ7QUFBNEUsV0FBTyxFQUFFTTtBQUFyRixLQUFtR0wsY0FBbkcsQ0FESixDQVBKLENBRkosQ0FISixDQURKO0FBcUJILENBMUZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTU8sSUFBSSxHQUFHLGlFQUFiO0FBQ0EsSUFBTUMsT0FBTyxHQUFHLDRCQUFoQjtBQUNBLElBQU1DLHVCQUF1QixHQUFHLGVBQWhDO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcsV0FBNUI7QUFDQSxJQUFNQyxzQkFBc0IsR0FBRyxjQUEvQjtBQUNBLElBQU1DLFlBQVksR0FBRztBQUFFQyxPQUFLLEVBQUUsQ0FBVDtBQUFZQyxNQUFJLEVBQUUsQ0FBbEI7QUFBcUJDLFNBQU8sRUFBRTtBQUE5QixDQUFyQjs7QUFFQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFVekQsS0FBVixFQUFpQjtBQUFBLHdCQUNSRSw0Q0FBQSxDQUFlLEVBQWYsQ0FEUTtBQUFBO0FBQUEsTUFDekJ3RCxJQUR5QjtBQUFBLE1BQ25CQyxPQURtQjs7QUFBQSx5QkFFSXpELDRDQUFBLENBQWUsQ0FBZixDQUZKO0FBQUE7QUFBQSxNQUV6QjBELFdBRnlCO0FBQUEsTUFFWkMsWUFGWTs7QUFBQSx5QkFHTTNELDRDQUFBLENBQWVtRCxZQUFZLENBQUNDLEtBQTVCLENBSE47QUFBQTtBQUFBLE1BR3pCUSxXQUh5QjtBQUFBLE1BR1pDLGNBSFk7O0FBS2hDN0QsK0NBQUEsQ0FBZ0IsWUFBWTtBQUN4Qm9CLG9FQUFBLENBQTZCdEIsS0FBSyxDQUFDLE9BQUQsQ0FBTCxDQUFlLElBQWYsQ0FBN0IsRUFBbURBLEtBQUssQ0FBQyxPQUFELENBQUwsQ0FBZSxLQUFmLENBQW5ELEVBQ0t1QixJQURMLENBQ1UsVUFBQUssR0FBRyxFQUFJO0FBQ1QsVUFBTW9DLEtBQUssR0FBR3BDLEdBQUcsQ0FBQyxLQUFELENBQUgsR0FBYXlCLFlBQVksQ0FBQ0csT0FBMUIsR0FBb0NILFlBQVksQ0FBQ0UsSUFBL0QsQ0FEUyxDQUVUOztBQUNBUSxvQkFBYyxDQUFDQyxLQUFELENBQWQ7QUFDQUgsa0JBQVksQ0FBQ2pDLEdBQUcsQ0FBQyxPQUFELENBQUosQ0FBWjtBQUNBK0IsYUFBTyxDQUFDL0IsR0FBRyxDQUFDLE1BQUQsQ0FBSixDQUFQO0FBRUgsS0FSTCxFQVFPSixLQVJQLENBUWEsVUFBQ0MsR0FBRCxFQUFTO0FBQ2RPLFdBQUssQ0FBQ1AsR0FBRCxDQUFMO0FBQ0FNLFlBQU0sQ0FBQ0UsUUFBUCxDQUFnQkMsTUFBaEI7QUFDSCxLQVhMO0FBYUgsR0FkRCxFQWNHLEVBZEg7QUFnQkEsc0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBdUMsT0FBRyxFQUFFYyxJQUE1QztBQUFrRCxPQUFHLEVBQUM7QUFBdEQsSUFESixlQUVJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQUFzQkMsT0FBdEIsQ0FESixFQUVLYSxXQUFXLElBQUlULFlBQVksQ0FBQ0UsSUFBNUIsaUJBQW9DLGtEQUFDLHdDQUFEO0FBQU0sU0FBSyxFQUFFdkQsS0FBSyxDQUFDLE9BQUQsQ0FBbEI7QUFBNkIsU0FBSyxFQUFFQSxLQUFLLENBQUMsT0FBRCxDQUF6QztBQUFvRCxRQUFJLEVBQUUwRCxJQUExRDtBQUFnRSx1QkFBbUIsRUFBRVAsbUJBQXJGO0FBQTBHLDBCQUFzQixFQUFFQyxzQkFBbEk7QUFBMEosU0FBSyxFQUFFUSxXQUFqSztBQUE4SyxjQUFVLEVBQUU1RCxLQUFLLENBQUMsWUFBRDtBQUEvTCxJQUZ6QyxFQUdLOEQsV0FBVyxJQUFJVCxZQUFZLENBQUNHLE9BQTVCLGlCQUF1QyxrREFBQywyQ0FBRDtBQUFTLFNBQUssRUFBRXhELEtBQUssQ0FBQyxPQUFELENBQXJCO0FBQWdDLFNBQUssRUFBRUEsS0FBSyxDQUFDLE9BQUQsQ0FBNUM7QUFBdUQsY0FBVSxFQUFFQSxLQUFLLENBQUMsWUFBRCxDQUF4RTtBQUF3RiwyQkFBdUIsRUFBRWtEO0FBQWpILElBSDVDLENBRkosQ0FESixDQURKLENBREo7QUFjSCxDQW5DRDs7QUFxQ0EsSUFBTWUsaUJBQWlCLEdBQUcseUNBQTFCO0FBQ0EsSUFBTUMsMkJBQTJCLEdBQUcsb0RBQXBDO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQVVDLGNBQVYsRUFBMEJDLGNBQTFCLEVBQTBDQyxHQUExQyxFQUErQztBQUNqRXBELFNBQU8sQ0FBQ0MsR0FBUixrQkFBc0I4QixPQUF0Qix5QkFBNENtQixjQUE1QyxjQUE4REMsY0FBOUQ7QUFDQSxNQUFNbEMsUUFBUSxHQUFHa0MsY0FBYyxDQUFDbEMsUUFBaEM7QUFDQWpCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQWNnQixRQUExQjtBQUNBLE1BQU1DLEtBQUssR0FBR2lDLGNBQWMsQ0FBQ2pDLEtBQTdCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHZ0MsY0FBYyxDQUFDaEMsSUFBNUI7QUFDQSxNQUFNaEIsSUFBSSxHQUFHZ0QsY0FBYyxDQUFDaEQsSUFBNUI7O0FBRUEsTUFBTVMsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixDQUFVc0MsY0FBVixFQUEwQkMsY0FBMUIsRUFBMEM7QUFDdEUsUUFBTXRCLE9BQU8sR0FBR2tCLGlCQUFpQixDQUFDTSxPQUFsQixDQUEwQixXQUExQixFQUF1Q0gsY0FBdkMsRUFBdURHLE9BQXZELENBQStELE1BQS9ELEVBQXVFRixjQUF2RSxDQUFoQjtBQUNBbkQsV0FBTyxDQUFDQyxHQUFSLENBQVk0QixPQUFaO0FBQ0gsR0FIRDs7QUFLQSxNQUFNckIsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFVOEMsU0FBVixFQUFxQkosY0FBckIsRUFBcUNDLGNBQXJDLEVBQXFENUMsR0FBckQsRUFBMEQ7QUFDbEYsUUFBTXNCLE9BQU8sR0FBR21CLDJCQUEyQixDQUFDSyxPQUE1QixDQUFvQyxXQUFwQyxFQUFpREgsY0FBakQsRUFBaUVHLE9BQWpFLENBQXlFLE1BQXpFLEVBQWlGRixjQUFqRixDQUFoQjtBQUNBL0MsOERBQUEsQ0FBdUJrRCxTQUF2QixFQUFrQ0osY0FBbEMsRUFBa0RDLGNBQWxEO0FBQ0FuRCxXQUFPLENBQUNDLEdBQVIsQ0FBWTRCLE9BQVo7QUFDQTdCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTSxHQUFaO0FBQ0gsR0FMRDs7QUFPQSxNQUFNZ0QsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFVTCxjQUFWLEVBQTBCQyxjQUExQixFQUEwQ0MsR0FBMUMsRUFBK0M7QUFDakVELGtCQUFjLENBQUNoRCxJQUFmO0FBQ0E4QyxpQkFBYSxDQUFDQyxjQUFELEVBQWlCQyxjQUFqQixFQUFpQ0MsR0FBakMsQ0FBYjtBQUNILEdBSEQ7O0FBS0FoRCxrRUFBQSxDQUE2QmEsUUFBN0IsRUFBdUNtQyxHQUF2QyxFQUE0Qy9DLElBQTVDLENBQWlELFVBQUFLLEdBQUcsRUFBSTtBQUNwRCxZQUFRd0MsY0FBUjtBQUVJLFdBQUtsQix1QkFBTDtBQUNJLFlBQUl0QixHQUFHLENBQUMsS0FBRCxDQUFILElBQWNQLElBQUksSUFBSSxDQUExQixFQUE2QjtBQUN6QkMsd0VBQUEsQ0FBMkJhLFFBQTNCLEVBQXFDQyxLQUFyQyxFQUE0Q2tDLEdBQTVDLEVBQ0svQyxJQURMLENBQ1UsWUFBTTtBQUNSa0QseUJBQWEsQ0FBQ0wsY0FBRCxFQUFpQkMsY0FBakIsRUFBaUNDLEdBQWpDLENBQWI7QUFDSCxXQUhMLEVBR085QyxLQUhQLENBR2EsVUFBQUMsR0FBRyxFQUFJO0FBQ1pDLCtCQUFtQixDQUFDLEdBQUQsRUFBTTBDLGNBQU4sRUFBc0JDLGNBQXRCLEVBQXNDNUMsR0FBdEMsQ0FBbkI7QUFDSCxXQUxMO0FBTUg7O0FBRUQsWUFBSUosSUFBSSxJQUFJLENBQVosRUFBZTtBQUNYQyx3RUFBQSxDQUEyQmEsUUFBM0IsRUFBcUNDLEtBQXJDLEVBQTRDa0MsR0FBNUMsRUFDSy9DLElBREwsQ0FDVSxZQUFNO0FBQ1IsZ0JBQUlNLDBCQUFKLEVBQWdDO0FBQzVCNEMsMkJBQWEsQ0FBQ0wsY0FBRCxFQUFpQkMsY0FBakIsRUFBaUNDLEdBQWpDLENBQWI7QUFDSCxhQUZELE1BRU87QUFDSHhDLHFDQUF1QixDQUFDc0MsY0FBRCxFQUFpQkMsY0FBakIsQ0FBdkI7QUFDSDtBQUNKLFdBUEwsRUFPTzdDLEtBUFAsQ0FPYSxVQUFBQyxHQUFHLEVBQUk7QUFDWkMsK0JBQW1CLENBQUMsR0FBRCxFQUFNMEMsY0FBTixFQUFzQkMsY0FBdEIsRUFBc0M1QyxHQUF0QyxDQUFuQjtBQUNILFdBVEw7QUFVSDs7QUFDRCxZQUFJSixJQUFJLElBQUksQ0FBWixFQUFlO0FBQ1hILGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxrREFBWjtBQUNBRyx5RUFBQSxDQUE0QmUsSUFBNUIsRUFBa0NGLFFBQWxDLEVBQTRDbUMsR0FBNUMsRUFBaUQvQyxJQUFqRCxDQUFzRCxZQUFNO0FBQ3hETyxtQ0FBdUIsQ0FBQ3NDLGNBQUQsRUFBaUJDLGNBQWpCLENBQXZCO0FBQ0gsV0FGRCxFQUVHN0MsS0FGSCxDQUVTLFVBQUFDLEdBQUcsRUFBSTtBQUNaQywrQkFBbUIsQ0FBQyxHQUFELEVBQU0wQyxjQUFOLEVBQXNCQyxjQUF0QixFQUFzQzVDLEdBQXRDLENBQW5CO0FBQ0gsV0FKRDtBQUtIOztBQUVEOztBQUVKLFdBQUswQixtQkFBTDtBQUVJO0FBQ0EsWUFBSSxDQUFDdkIsR0FBRyxDQUFDLEtBQUQsQ0FBUixFQUFpQjtBQUNiVixpQkFBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QkUsSUFBNUIsRUFBa0Msa0JBQWxDLEVBQXNEK0MsY0FBdEQ7O0FBQ0EsY0FBSS9DLElBQUksSUFBSSxDQUFaLEVBQWU7QUFDWEMsMEVBQUEsQ0FBMkJhLFFBQTNCLEVBQXFDQyxLQUFyQyxFQUE0Q2tDLEdBQTVDLEVBQWlEL0MsSUFBakQsQ0FBc0QsWUFBTTtBQUN4RGtELDJCQUFhLENBQUNMLGNBQUQsRUFBaUJDLGNBQWpCLEVBQWlDQyxHQUFqQyxDQUFiO0FBQ0gsYUFGRCxFQUVHOUMsS0FGSCxDQUVTLFVBQUFDLEdBQUcsRUFBSTtBQUNaQyxpQ0FBbUIsQ0FBQyxHQUFELEVBQU0wQyxjQUFOLEVBQXNCQyxjQUF0QixFQUFzQzVDLEdBQXRDLENBQW5CO0FBQ0gsYUFKRDtBQUtILFdBTkQsTUFNTyxJQUFJSixJQUFJLElBQUksQ0FBWixFQUFlO0FBQ2xCQywyRUFBQSxDQUE0QmUsSUFBNUIsRUFBa0NGLFFBQWxDLEVBQTRDbUMsR0FBNUMsRUFBaUQvQyxJQUFqRCxDQUFzRCxZQUFNO0FBQ3hETyxxQ0FBdUIsQ0FBQ3NDLGNBQUQsRUFBaUJDLGNBQWpCLENBQXZCO0FBQ0gsYUFGRCxFQUVHN0MsS0FGSCxDQUVTLFVBQUFDLEdBQUcsRUFBSTtBQUNaQyxpQ0FBbUIsQ0FBQyxHQUFELEVBQU0wQyxjQUFOLEVBQXNCQyxjQUF0QixFQUFzQzVDLEdBQXRDLENBQW5CO0FBQ0gsYUFKRDtBQUtIO0FBQ0o7O0FBQ0Q7O0FBRUosV0FBSzJCLHNCQUFMO0FBQ0ksWUFBSSxDQUFDeEIsR0FBRyxDQUFDLEtBQUQsQ0FBUixFQUFpQjtBQUNiTixrRUFBQSxDQUFxQmEsUUFBckIsRUFBK0JtQyxHQUEvQixFQUNLL0MsSUFETCxDQUNVLFlBQU07QUFDUixnQkFBTXdCLE9BQU8sR0FBR2tCLGlCQUFpQixDQUFDTSxPQUFsQixDQUEwQixXQUExQixFQUF1Q0gsY0FBdkMsRUFBdURHLE9BQXZELENBQStELE1BQS9ELEVBQXVFRixjQUF2RSxDQUFoQjtBQUNBbkQsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZNEIsT0FBWjtBQUNILFdBSkwsRUFLS3ZCLEtBTEwsQ0FLVyxVQUFBQyxHQUFHLEVBQUk7QUFDVixnQkFBTXNCLE9BQU8sR0FBR21CLDJCQUEyQixDQUFDSyxPQUE1QixDQUFvQyxXQUFwQyxFQUFpREgsY0FBakQsRUFBaUVHLE9BQWpFLENBQXlFLE1BQXpFLEVBQWlGRixjQUFqRixDQUFoQjtBQUNBL0Msc0VBQUEsQ0FBdUIsR0FBdkIsRUFBNEI4QyxjQUE1QixFQUE0Q0MsY0FBNUM7QUFDQW5ELG1CQUFPLENBQUNDLEdBQVIsQ0FBWTRCLE9BQVo7QUFDQTdCLG1CQUFPLENBQUNDLEdBQVIsQ0FBWU0sR0FBWjtBQUNILFdBVkw7QUFXSDs7QUFDRDs7QUFFSjtBQUNJUCxlQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtBQUNBO0FBMUVSO0FBNEVILEdBN0VELEVBNkVHSyxLQTdFSCxDQTZFUyxVQUFBQyxHQUFHLEVBQUk7QUFDWixRQUFNc0IsT0FBTyxHQUFHbUIsMkJBQTJCLENBQUNLLE9BQTVCLENBQW9DLFdBQXBDLEVBQWlESCxjQUFqRCxFQUFpRUcsT0FBakUsQ0FBeUUsTUFBekUsRUFBaUZGLGNBQWpGLENBQWhCO0FBQ0EvQyw4REFBQSxDQUF1QixHQUF2QixFQUE0QjhDLGNBQTVCLEVBQTRDQyxjQUE1QztBQUNBbkQsV0FBTyxDQUFDQyxHQUFSLENBQVk0QixPQUFaO0FBQ0E3QixXQUFPLENBQUNDLEdBQVIsQ0FBWU0sR0FBWjtBQUNILEdBbEZEO0FBc0ZILENBL0dEOztBQWlIQSxpRUFBZTtBQUFFZ0MsWUFBVSxFQUFWQSxVQUFGO0FBQWNVLGVBQWEsRUFBYkE7QUFBZCxDQUFmLEUiLCJmaWxlIjoic3JjX0lUX2NvdXJpZXJfMl9wbHVnaW5fanMubWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJdGFVdGlscyBmcm9tICcuLi91dGlscydcclxuXHJcblxyXG5jb25zdCBCVVRUT05fTEFCRUwgPSBcIkRlbGl2ZXJcIlxyXG5jb25zdCBCVVRUT05fSUQgPSBcInN1Ym1pdF9idXR0b25cIlxyXG5jb25zdCBET05FX01FU1NBR0UgPSBcIk9yZGVyIGRlbGl2ZXJlZCBzdWNjZXNmdWxseS4gR29vZCBqb2IhXCJcclxuY29uc3QgQ0hFQ0tfSUZfSVNfREVMSVZFUkVEX1RJTUVPVVQgPSAyMDAwXHJcblxyXG5jb25zdCBDYXJkID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICBjb25zdCBuUGFja2FnZXNJbnB1dCA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG5QYWNrYWdlc0lucHV0LmN1cnJlbnQuZm9jdXMoKVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBkZWxpdmVyID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoQlVUVE9OX0lEKS5kaXNhYmxlID0gdHJ1ZVxyXG4gICAgICAgIGRlbGl2ZXJQcm9jZWR1cmUoblBhY2thZ2VzSW5wdXQuY3VycmVudC52YWx1ZSwgMClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB3YXN0ZVRpbWVTeW5jcm9ub3VzbHkgPSBmdW5jdGlvbih0aW1lX3RvX3dhc3RlKXtcclxuICAgICAgICBjb25zdCBzdGFydCA9IERhdGUubm93KClcclxuICAgICAgICBjb25zb2xlLmxvZygnd2FzdGUgdGltZScpXHJcbiAgICAgICAgd2hpbGUoRGF0ZS5ub3coKSAtIHN0YXJ0IDw9IHRpbWVfdG9fd2FzdGUpe31cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWxpdmVyUHJvY2VkdXJlID0gZnVuY3Rpb24gKG5fYm94LCBzdGVwKSB7XHJcbiAgICAgICAgaWYgKHN0ZXAgPT0gMCkge1xyXG4gICAgICAgICAgICBJdGFVdGlscy5zZXRPcmRlckluVHJhbnNpdChwcm9wc1snb3JkZXInXVsnaWQnXSwgbl9ib3gsIHByb3BzWyd0b2tlbiddWydqd3QnXSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkZWxpdmVyUHJvY2VkdXJlKG5fYm94LCBzdGVwICsgMSlcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNsb3NlUHJvY2VkdXJlRXJyb3IoZXJyLm1zZywgc3RlcClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGVwID09IDEpIHtcclxuICAgICAgICAgICAgSXRhVXRpbHMuY2hlY2tJZk9yZGVySXNJblRyYW5zaXQocHJvcHNbJ29yZGVyJ11bJ2lkJ10sIHByb3BzWyd0b2tlbiddWydqd3QnXSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2hlY2tJZk9yZGVySXNJblRyYW5zaXQgJywgcmVzKVxyXG4gICAgICAgICAgICAgICAgaWYocmVzLnJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsaXZlclByb2NlZHVyZShuX2JveCwgc3RlcCArIDEpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdhc3RlVGltZVN5bmNyb25vdXNseShDSEVDS19JRl9JU19ERUxJVkVSRURfVElNRU9VVClcclxuICAgICAgICAgICAgICAgICAgICBkZWxpdmVyUHJvY2VkdXJlKG5fYm94LCBzdGVwKVxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNsb3NlUHJvY2VkdXJlRXJyb3IoZXJyLm1zZywgc3RlcClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGVwID09IDIpIHtcclxuICAgICAgICAgICAgSXRhVXRpbHMuc2V0T3JkZXJEZWxpdmVyZWQocHJvcHNbJ29yZGVyJ11bJ2lkJ10sIG5fYm94LCBwcm9wc1sndG9rZW4nXVsnand0J10pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKFVTRV9XQVJFSE9VU0VfV09SS0VSX0xPR0lOKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsaXZlclByb2NlZHVyZShuX2JveCwgc3RlcCArIDEpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlUHJvY2VkdXJlQ29ycmVjdGx5KClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNsb3NlUHJvY2VkdXJlRXJyb3IoZXJyLm1zZywgc3RlcClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGVwID09IDMpIHtcclxuICAgICAgICAgICAgSXRhVXRpbHMuc2V0V2hvTWFrZURlbGl2ZXJ5KHByb3BzWyd3aF91c2VyX2lkJ10sIHByb3BzWydvcmRlciddWydpZCddLCBwcm9wc1sndG9rZW4nXVsnand0J10pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VQcm9jZWR1cmVDb3JyZWN0bHkoKVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VQcm9jZWR1cmVFcnJvcihlcnIubXNnLCBzdGVwLCBzdGVwKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgY2xvc2VQcm9jZWR1cmVDb3JyZWN0bHkgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hbGVydChET05FX01FU1NBR0UpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zZVByb2NlZHVyZUVycm9yID0gZnVuY3Rpb24gKG1zZywgc3RlcCkge1xyXG4gICAgICAgIGFsZXJ0KG1zZylcclxuICAgICAgICBJdGFVdGlscy5zYXZlUHJvY2VkdXJlKCcyJywgcHJvcHNbJ2RlbGl2ZXJfb3JkZXJfcHJvY19uYW1lJ10sIHtcclxuICAgICAgICAgICAgb3JkZXJfaWQ6IHByb3BzWydvcmRlciddWydpZCddLFxyXG4gICAgICAgICAgICBib3hfbjogblBhY2thZ2VzSW5wdXQuY3VycmVudC52YWx1ZSxcclxuICAgICAgICAgICAgdXNlcjogcHJvcHNbJ3doX3VzZXJfaWQnXSxcclxuICAgICAgICAgICAgc3RlcDogc3RlcFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gaWQ9XCJwcmludF9mb3JtXCIgb25TdWJtaXQ9e2RlbGl2ZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcm93IGNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMiBtdC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49XCIwXCIgc3RlcD1cIjFcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImNvbGxpXCIgcGxhY2Vob2xkZXI9XCJEZWZhdWx0IDBcIiByZWY9e25QYWNrYWdlc0lucHV0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yIG10LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPXtCVVRUT05fSUR9IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCI+e0JVVFRPTl9MQUJFTH08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBDYXJkIH0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSXRhVXRpbHMgZnJvbSAnLi4vdXRpbHMnXHJcblxyXG5jb25zdCBTRVRfQk9YX0JUTl9JRCA9ICdzZXRfYm94X2J0bl9pZCdcclxuY29uc3QgU0VUX0JPWF9CVE5fTEFCRUwgPSAnU2V0IGJveGVzJ1xyXG5cclxuY29uc3QgVU5ET19CVE5fSUQgPSAndW5kb19idG5faWQnXHJcbmNvbnN0IFVORE9fQlROX0xBQkVMID0gJ1VuZG8gT3JkZXInXHJcblxyXG5jb25zdCBDYXJkID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICBjb25zdCBuQm94VG9TZXQgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBuQm94VG9TZXQuY3VycmVudC5mb2N1cygpXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBjb25zdCBkaXNhYmxlQnV0dG9ucyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChTRVRfQk9YX0JUTl9JRCkuZGlzYWJsZSA9IHRydWVcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChVTkRPX0JUTl9JRCkuZGlzYWJsZSA9IHRydWVcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0Qm94ZXMgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBkaXNhYmxlQnV0dG9ucygpXHJcbiAgICAgICAgY29uc3QgZmluYWxfYm94X24gPSBuQm94VG9TZXQuY3VycmVudC52YWx1ZVxyXG4gICAgICAgIGxldCBzdGVwID0gMFxyXG4gICAgICAgIEl0YVV0aWxzLnNldE9yZGVyRGVsaXZlcmVkKHByb3BzWydvcmRlciddWydpZCddLCBmaW5hbF9ib3hfbiwgcHJvcHNbJ3Rva2VuJ11bJ2p3dCddKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdGVwKytcclxuICAgICAgICAgICAgICAgIEl0YVV0aWxzLnNldFdob01ha2VEZWxpdmVyeShwcm9wc1snd2hfdXNlcl9pZCddLCBwcm9wc1snb3JkZXInXVsnaWQnXSwgcHJvcHNbJ3Rva2VuJ11bJ2p3dCddKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZVByb2NlZHVyZUNvcnJlY3RseSgpXHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGVwIGluIGNhdGNoICcsIHN0ZXApXHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VQcm9jZWR1cmVFcnJvcihlcnIubXNnLCBzdGVwLCBmaW5hbF9ib3hfbilcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgIGNsb3NlUHJvY2VkdXJlRXJyb3IoZXJyLm1zZywgc3RlcCwgZmluYWxfYm94X24pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xvc2VQcm9jZWR1cmVDb3JyZWN0bHkgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBET05FX01FU1NBR0UgPSBgT3JkZXIgJHtwcm9wc1snb3JkZXInXVsnaWQnXX0gbW9kaWZpZWQgc3VjY2VzZnVsbHkuIFNldCAke25Cb3hUb1NldC5jdXJyZW50LnZhbHVlfSBib3guIEdvb2Qgam9iIWBcclxuICAgICAgICBhbGVydChET05FX01FU1NBR0UpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zZVByb2NlZHVyZUVycm9yID0gZnVuY3Rpb24gKG1zZywgc3RlcCwgYm94X24pIHtcclxuICAgICAgICBhbGVydChtc2cgKyBzdGVwICsgYm94X24pXHJcbiAgICAgICAgSXRhVXRpbHMuc2F2ZVByb2NlZHVyZSgnMicsIHByb3BzWydzZXRfYm94ZXNfcHJvY19uYW1lJ10sIHtcclxuICAgICAgICAgICAgb3JkZXJfaWQ6IHByb3BzWydvcmRlciddWydpZCddLFxyXG4gICAgICAgICAgICBib3hfbjogYm94X24sXHJcbiAgICAgICAgICAgIHVzZXI6IHByb3BzWyd3aF91c2VyX2lkJ10sXHJcbiAgICAgICAgICAgIHN0ZXA6IHN0ZXBcclxuICAgICAgICB9KVxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1bmRvRGVsaXZlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkaXNhYmxlQnV0dG9ucygpXHJcbiAgICAgICAgSXRhVXRpbHMudW5kb0RlbGl2ZXIocHJvcHNbJ29yZGVyJ11bJ2lkJ10sIHByb3BzWyd0b2tlbiddWydqd3QnXSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgRE9ORV9NRVNTQUdFID0gYE9yZGVyICR7cHJvcHNbJ29yZGVyJ11bJ2lkJ119IHVuZG8gc3VjY2VzZnVsbHkuIEdvb2Qgam9iIWBcclxuICAgICAgICAgICAgICAgIGFsZXJ0KERPTkVfTUVTU0FHRSk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgSXRhVXRpbHMuc2F2ZVByb2NlZHVyZSgnMicsIHByb3BzWyd1bmRvX2RlbGl2ZXJfcHJvY19uYW1lJ10sIHtcclxuICAgICAgICAgICAgICAgICAgICBvcmRlcl9pZDogcHJvcHNbJ29yZGVyJ11bJ2lkJ10sXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyLm1zZylcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdG9QcmludCA9IGAke3Byb3BzWydpbmZvJ11bJ29yZGVyX3N0YXRlJ119IG9uICR7cHJvcHNbJ2luZm8nXVsnb3JkZXJfZGF0ZV9jaGFuZ2UnXX1gXHJcbiAgICBpZiAocHJvcHNbJ2luZm8nXVsnb3JkZXJfc3RhdGUnXSA9PSAnREVMSVZFUkVEJykgdG9QcmludCA9IHRvUHJpbnQgKyBgIHdpdGggJHtwcm9wc1snb3JkZXInXVsnYm94X24nXX0gcGFja2FnZXNgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cD57dG9QcmludH08L3A+XHJcblxyXG4gICAgICAgICAgICA8Zm9ybSBpZD1cInByaW50X2Zvcm1cIiBvblN1Ym1pdD17c2V0Qm94ZXN9PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1yb3cgY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBtdC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMFwiIHN0ZXA9XCIxXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJjb2xsaVwiIHBsYWNlaG9sZGVyPXtgIEN1cnIgYm94ZXMgJHtwcm9wc1snb3JkZXInXVsnYm94X24nXX0gYH0gcmVmPXtuQm94VG9TZXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMiBtdC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9e1NFVF9CT1hfQlROX0lEfSB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiPntTRVRfQk9YX0JUTl9MQUJFTH08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yIG10LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD17VU5ET19CVE5fSUR9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4tYmxvY2tcIiBvbkNsaWNrPXt1bmRvRGVsaXZlcn0+e1VORE9fQlROX0xBQkVMfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgeyBDYXJkIH0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSXRhVXRpbHMgZnJvbSAnLi4vdXRpbHMnXHJcbmltcG9ydCB7IENhcmQgYXMgRGVsaXZlciB9IGZyb20gXCIuL2RlbGl2ZXJcIjtcclxuaW1wb3J0IHsgQ2FyZCBhcyBFZGl0IH0gZnJvbSBcIi4vZWRpdFwiO1xyXG5cclxuY29uc3QgTE9HTyA9IFwiaHR0cHM6Ly9zdGF0aWMubGlmZTM2NS5ldS9jb21tb24vdGVtcGxhdGUtMDIvaW1hZ2VzL2Zhdmljb24uaWNvXCJcclxuY29uc3QgQ09VUklFUiA9IFwiV2l0aGRyb3dhbCBmcm9tIHdhcmVob3VzZSBcIlxyXG5jb25zdCBERUxJVkVSX09SREVSX1BST0NfTkFNRSA9ICdERUxJVkVSX09SREVSJ1xyXG5jb25zdCBTRVRfQk9YRVNfUFJPQ19OQU1FID0gJ1NFVF9CT1hFUydcclxuY29uc3QgVU5ET19ERUxJVkVSX1BST0NfTkFNRSA9ICdVTkRPX0RFTElWRVInXHJcbmNvbnN0IFBMVUdJTl9TVEFURSA9IHsgRU1QVFk6IDAsIEVESVQ6IDEsIERFTElWRVI6IDIgfVxyXG5cclxuY29uc3QgUGx1Z2luQ2FyZCA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgY29uc3QgW2luZm8sIHNldEluZm9dID0gUmVhY3QudXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtib3hfbl9zdGF0ZSwgc2V0Qm94TlN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbcGx1Z2luU3RhdGUsIHNldFBsdWdpblN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKFBMVUdJTl9TVEFURS5FTVBUWSlcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIEl0YVV0aWxzLmNhbkRlbGl2ZXJPcmRlcl9PTEQocHJvcHNbJ29yZGVyJ11bJ2lkJ10sIHByb3BzWyd0b2tlbiddWydqd3QnXSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gcmVzWydyZXMnXSA/IFBMVUdJTl9TVEFURS5ERUxJVkVSIDogUExVR0lOX1NUQVRFLkVESVRcclxuICAgICAgICAgICAgICAgIC8vbGV0IHN0YXRlID0gUExVR0lOX1NUQVRFLkVESVRcclxuICAgICAgICAgICAgICAgIHNldFBsdWdpblN0YXRlKHN0YXRlKVxyXG4gICAgICAgICAgICAgICAgc2V0Qm94TlN0YXRlKHJlc1snYm94X24nXSlcclxuICAgICAgICAgICAgICAgIHNldEluZm8ocmVzWydpbmZvJ10pXHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChlcnIpXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhbGlnbi1zZWxmLXN0YXJ0IG1yLTNcIiBzcmM9e0xPR099IGFsdD1cIkNvdXJpZXIgbG9nb1wiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibXQtMFwiPntDT1VSSUVSfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwbHVnaW5TdGF0ZSA9PSBQTFVHSU5fU1RBVEUuRURJVCAmJiA8RWRpdCBvcmRlcj17cHJvcHNbJ29yZGVyJ119IHRva2VuPXtwcm9wc1sndG9rZW4nXX0gaW5mbz17aW5mb30gc2V0X2JveGVzX3Byb2NfbmFtZT17U0VUX0JPWEVTX1BST0NfTkFNRX0gdW5kb19kZWxpdmVyX3Byb2NfbmFtZT17VU5ET19ERUxJVkVSX1BST0NfTkFNRX0gYm94X249e2JveF9uX3N0YXRlfSB3aF91c2VyX2lkPXtwcm9wc1snd2hfdXNlcl9pZCddfT48L0VkaXQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGx1Z2luU3RhdGUgPT0gUExVR0lOX1NUQVRFLkRFTElWRVIgJiYgPERlbGl2ZXIgb3JkZXI9e3Byb3BzWydvcmRlciddfSB0b2tlbj17cHJvcHNbJ3Rva2VuJ119IHdoX3VzZXJfaWQ9e3Byb3BzWyd3aF91c2VyX2lkJ119IGRlbGl2ZXJfb3JkZXJfcHJvY19uYW1lPXtERUxJVkVSX09SREVSX1BST0NfTkFNRX0gPjwvRGVsaXZlcj59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IFJFRE9fUFJPQ0VEVVJFX09LID0gJ1BST0NFRFVSRSBwcm9jZWR1cmUgRE9ORSBXSVRIIERBVEEgZGF0YSdcclxuY29uc3QgQ0FOVF9ET19QUk9DRURVUkVfV0lUSF9TQVZFID0gJ0NBTlQgRE8gUFJPQ0VEVVJFIHByb2NlZHVyZSBXSVRIIERBVEEgZGF0YS4gU0FWSU5HJ1xyXG5cclxuXHJcblxyXG4vKipcclxuICogMS0gUXVlc3RhIGNvc2EgYSBtaW8gYXZ2aXNvIG1lcml0YSB1biBtb2R1bG8gYSBwYXJ0ZVxyXG4gKiAyLSBCaXNvZ25hIGRlY2lkZXJlIHNlIHF1ZXN0ZSBwcm9jZWR1cmUgaGFubm8gbyBubyB1bmEgbW9kYWxpdMOgXHJcbiAqIGRpIGVzZWN1emlvbmUgY2hlIG5vbiBwcmV2ZWRlIGludGVybGVhdmluZyB0cmEgZGkgZXNzZVxyXG4gKiBOZWwgY2FzbyBub24gc2lhbm8gYXRvbWljaGUgYmlzb2duYSBkaXJlIGFpIG1hZ2F6emluaWVyaSBjaGUgc2kgZGV2b25vIFxyXG4gKiBmaWRhcmUgbm9uIGNpIHNhcmFubm8gcHJvYmxlbWllIGxlIHJpY2hpZXN0ZSBzYXJhbm5vIGZhdHRlIGluIHF1YWxzaWFzaSBjYXNvXHJcbiAqIE5lbCBjYXNvIHNpYW5vIGF0b21pY2hlIGMnw6ggdW4gbGF2b3JvIGRpIHByb2dldHRhemlvbmUgZGEgZmFyZVxyXG4gKiBAcGFyYW0geyp9IHByb2NlZHVyZV9uYW1lIFxyXG4gKiBAcGFyYW0geyp9IHByb2NlZHVyZV9kYXRhIFxyXG4gKiBAcGFyYW0geyp9IGp3dCBcclxuICovXHJcbmNvbnN0IHJlZG9Qcm9jZWR1cmUgPSBmdW5jdGlvbiAocHJvY2VkdXJlX25hbWUsIHByb2NlZHVyZV9kYXRhLCBqd3QpIHtcclxuICAgIGNvbnNvbGUubG9nKGBQbHVnaW4gJHtDT1VSSUVSfSBwcm9jZWR1cmU6ICR7cHJvY2VkdXJlX25hbWV9ICR7cHJvY2VkdXJlX2RhdGF9YClcclxuICAgIGNvbnN0IG9yZGVyX2lkID0gcHJvY2VkdXJlX2RhdGEub3JkZXJfaWRcclxuICAgIGNvbnNvbGUubG9nKCdPcmRlciBpZCAnICsgb3JkZXJfaWQpXHJcbiAgICBjb25zdCBib3hfbiA9IHByb2NlZHVyZV9kYXRhLmJveF9uXHJcbiAgICBjb25zdCB1c2VyID0gcHJvY2VkdXJlX2RhdGEudXNlclxyXG4gICAgY29uc3Qgc3RlcCA9IHByb2NlZHVyZV9kYXRhLnN0ZXBcclxuXHJcbiAgICBjb25zdCBjbG9zZVByb2NlZHVyZUNvcnJlY3RseSA9IGZ1bmN0aW9uIChwcm9jZWR1cmVfbmFtZSwgcHJvY2VkdXJlX2RhdGEpIHtcclxuICAgICAgICBjb25zdCB0b1ByaW50ID0gUkVET19QUk9DRURVUkVfT0sucmVwbGFjZSgncHJvY2VkdXJlJywgcHJvY2VkdXJlX25hbWUpLnJlcGxhY2UoJ2RhdGEnLCBwcm9jZWR1cmVfZGF0YSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0b1ByaW50KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3NlUHJvY2VkdXJlRXJyb3IgPSBmdW5jdGlvbiAocGx1Z2luX2lkLCBwcm9jZWR1cmVfbmFtZSwgcHJvY2VkdXJlX2RhdGEsIGVycikge1xyXG4gICAgICAgIGNvbnN0IHRvUHJpbnQgPSBDQU5UX0RPX1BST0NFRFVSRV9XSVRIX1NBVkUucmVwbGFjZSgncHJvY2VkdXJlJywgcHJvY2VkdXJlX25hbWUpLnJlcGxhY2UoJ2RhdGEnLCBwcm9jZWR1cmVfZGF0YSlcclxuICAgICAgICBJdGFVdGlscy5zYXZlUHJvY2VkdXJlKHBsdWdpbl9pZCwgcHJvY2VkdXJlX25hbWUsIHByb2NlZHVyZV9kYXRhKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvUHJpbnQpXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRvQW5vdGhlclN0ZXAgPSBmdW5jdGlvbiAocHJvY2VkdXJlX25hbWUsIHByb2NlZHVyZV9kYXRhLCBqd3QpIHtcclxuICAgICAgICBwcm9jZWR1cmVfZGF0YS5zdGVwKytcclxuICAgICAgICByZWRvUHJvY2VkdXJlKHByb2NlZHVyZV9uYW1lLCBwcm9jZWR1cmVfZGF0YSwgand0KVxyXG4gICAgfVxyXG5cclxuICAgIEl0YVV0aWxzLmNhbkRlbGl2ZXJPcmRlcl9PTEQob3JkZXJfaWQsIGp3dCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAocHJvY2VkdXJlX25hbWUpIHtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgREVMSVZFUl9PUkRFUl9QUk9DX05BTUU6XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzWydyZXMnXSAmJiBzdGVwID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBJdGFVdGlscy5zZXRPcmRlckluVHJhbnNpdChvcmRlcl9pZCwgYm94X24sIGp3dClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9Bbm90aGVyU3RlcChwcm9jZWR1cmVfbmFtZSwgcHJvY2VkdXJlX2RhdGEsIGp3dClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlUHJvY2VkdXJlRXJyb3IoJzInLCBwcm9jZWR1cmVfbmFtZSwgcHJvY2VkdXJlX2RhdGEsIGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RlcCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgSXRhVXRpbHMuc2V0T3JkZXJEZWxpdmVyZWQob3JkZXJfaWQsIGJveF9uLCBqd3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChVU0VfV0FSRUhPVVNFX1dPUktFUl9MT0dJTikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvQW5vdGhlclN0ZXAocHJvY2VkdXJlX25hbWUsIHByb2NlZHVyZV9kYXRhLCBqd3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlUHJvY2VkdXJlQ29ycmVjdGx5KHByb2NlZHVyZV9uYW1lLCBwcm9jZWR1cmVfZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlUHJvY2VkdXJlRXJyb3IoJzInLCBwcm9jZWR1cmVfbmFtZSwgcHJvY2VkdXJlX2RhdGEsIGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzdGVwID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0gYWdnaW9ybmFtZW50byBkZWwgbG9nIC0tLS0tLS0tLS0tJylcclxuICAgICAgICAgICAgICAgICAgICBJdGFVdGlscy5zZXRXaG9NYWtlRGVsaXZlcnkodXNlciwgb3JkZXJfaWQsIGp3dCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlUHJvY2VkdXJlQ29ycmVjdGx5KHByb2NlZHVyZV9uYW1lLCBwcm9jZWR1cmVfZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVByb2NlZHVyZUVycm9yKCcyJywgcHJvY2VkdXJlX25hbWUsIHByb2NlZHVyZV9kYXRhLCBlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgU0VUX0JPWEVTX1BST0NfTkFNRTpcclxuXHJcbiAgICAgICAgICAgICAgICAvL3N0b3BwZWQgaWYgb3JkZXIgaXMgbm90IGFscmVhZHkgZGVsaXZlcmVkXHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc1sncmVzJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLSBzdGVwIDogJywgc3RlcCwgJyBwcm9jZWR1cmUgbmFtZSAnLCBwcm9jZWR1cmVfbmFtZSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RlcCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEl0YVV0aWxzLnNldE9yZGVyRGVsaXZlcmVkKG9yZGVyX2lkLCBib3hfbiwgand0KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvQW5vdGhlclN0ZXAocHJvY2VkdXJlX25hbWUsIHByb2NlZHVyZV9kYXRhLCBqd3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVByb2NlZHVyZUVycm9yKCcyJywgcHJvY2VkdXJlX25hbWUsIHByb2NlZHVyZV9kYXRhLCBlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGVwID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSXRhVXRpbHMuc2V0V2hvTWFrZURlbGl2ZXJ5KHVzZXIsIG9yZGVyX2lkLCBqd3QpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VQcm9jZWR1cmVDb3JyZWN0bHkocHJvY2VkdXJlX25hbWUsIHByb2NlZHVyZV9kYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VQcm9jZWR1cmVFcnJvcignMicsIHByb2NlZHVyZV9uYW1lLCBwcm9jZWR1cmVfZGF0YSwgZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcblxyXG4gICAgICAgICAgICBjYXNlIFVORE9fREVMSVZFUl9QUk9DX05BTUU6XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc1sncmVzJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICBJdGFVdGlscy51bmRvRGVsaXZlcihvcmRlcl9pZCwgand0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b1ByaW50ID0gUkVET19QUk9DRURVUkVfT0sucmVwbGFjZSgncHJvY2VkdXJlJywgcHJvY2VkdXJlX25hbWUpLnJlcGxhY2UoJ2RhdGEnLCBwcm9jZWR1cmVfZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvUHJpbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9QcmludCA9IENBTlRfRE9fUFJPQ0VEVVJFX1dJVEhfU0FWRS5yZXBsYWNlKCdwcm9jZWR1cmUnLCBwcm9jZWR1cmVfbmFtZSkucmVwbGFjZSgnZGF0YScsIHByb2NlZHVyZV9kYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRhVXRpbHMuc2F2ZVByb2NlZHVyZSgnMicsIHByb2NlZHVyZV9uYW1lLCBwcm9jZWR1cmVfZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvUHJpbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQUk9DRURVUkUgVU5LTk9XJylcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9QcmludCA9IENBTlRfRE9fUFJPQ0VEVVJFX1dJVEhfU0FWRS5yZXBsYWNlKCdwcm9jZWR1cmUnLCBwcm9jZWR1cmVfbmFtZSkucmVwbGFjZSgnZGF0YScsIHByb2NlZHVyZV9kYXRhKVxyXG4gICAgICAgIEl0YVV0aWxzLnNhdmVQcm9jZWR1cmUoJzInLCBwcm9jZWR1cmVfbmFtZSwgcHJvY2VkdXJlX2RhdGEpXHJcbiAgICAgICAgY29uc29sZS5sb2codG9QcmludClcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICB9KVxyXG5cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7IFBsdWdpbkNhcmQsIHJlZG9Qcm9jZWR1cmUgfTsiXSwic291cmNlUm9vdCI6IiJ9