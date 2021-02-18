(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_IT_courier_1_plugin_js"],{

/***/ "./src/IT/courier_1/brt_req_body.js":
/*!******************************************!*\
  !*** ./src/IT/courier_1/brt_req_body.js ***!
  \******************************************/
/*! namespace exports */
/*! export getCreateBody [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getDeleteBody [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCreateBody": () => /* binding */ getCreateBody,
/* harmony export */   "getDeleteBody": () => /* binding */ getDeleteBody
/* harmony export */ });
var DEBUG = true;
var body = {
  "account": {
    "userID": 1020103,
    "password": "brt1452st"
  },
  "createData": {
    "network": "",
    "departureDepot": 131,
    "senderCustomerCode": 1020103,
    "deliveryFreightTypeCode": "DAP",
    "consigneeCompanyName": "Life365 Italy",
    "consigneeAddress": "fgfgfhf",
    "consigneeZIPCode": "47121",
    "consigneeCity": "Forli",
    "consigneeCountryAbbreviationISOAlpha2": "IT",
    "cashOnDelivery": 0,
    "isCODMandatory": "0",
    "codPaymentType": "",
    "codCurrency": "EUR",
    "numericSenderReference": 448,
    "numberOfParcels": 20,
    "weightKG": 1
  },
  "isLabelRequired": 1,
  "labelParameters": {
    "outputType": "PDF",
    "offsetX": 0,
    "offsetY": 0,
    "isBorderRequired": "N",
    "isLogoRequired": "N",
    "isBarcodeControlRowRequired": "N"
  }
};
var deleteReqBody = {
  "account": {
    "userID": 1020103,
    "password": "brt1452st"
  },
  "deleteData": {
    "senderCustomerCode": 1020103,
    "numericSenderReference": -1
  }
};

function getDeleteBody() {
  return JSON.parse(JSON.stringify(deleteReqBody));
}

function getCreateBody() {
  return JSON.parse(JSON.stringify(body));
}



/***/ }),

/***/ "./src/IT/courier_1/create_spedition.js":
/*!**********************************************!*\
  !*** ./src/IT/courier_1/create_spedition.js ***!
  \**********************************************/
/*! namespace exports */
/*! export shipOrder [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shipOrder": () => /* binding */ shipOrder
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _brt_req_body__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./brt_req_body */ "./src/IT/courier_1/brt_req_body.js");
/* harmony import */ var _procedures_procedure__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../procedures/procedure */ "./src/procedures/procedure.js");
;








var API_AND_PRINT_PROC_NAME = 'courier_1' + 'LABEL_ORDER' + '_API_and_print';
var LIFE365_SYSTEM_PROC_NAME = 'courier_1' + 'LABEL_ORDER' + '_UPDATE_OUR_SYSTEM';
var ENCOURAGEMENT = 'The request will be saved and done as soon as possible';
var SYSTEM_ERROR = {
  code: 1,
  msg: 'System error. ' + ENCOURAGEMENT
};
var REQUEST_ERROR = {
  code: 2,
  msg: 'App cannot contact the system. Check yuor connection! ' + ENCOURAGEMENT
};
var MAX_ADDITION = 10;
var DEBUG = true;

function shipOrder(order, isAddition, box, jwt, wh_user_id, c_p_e_BRT_API, c_p_e_PRINTER, c_p_c_UPDATE_SYSTEM, c_p_e_UPDATE_SYSTEM) {
  var createBody = (0,_brt_req_body__WEBPACK_IMPORTED_MODULE_7__.getCreateBody)();
  createBody['createData']['departureDepot'] = order['departureDepot'];
  createBody['createData']['consigneeCompanyName'] = order['sender'];
  createBody['createData']['consigneeAddress'] = order['address'];
  createBody['createData']['consigneeZIPCode'] = order['zipCode'];
  createBody['createData']['consigneeCity'] = order['city']; //check cash on delivery

  if (order['isCODMandatory']) {
    createBody['createData']['cashOnDelivery'] = order['total'];
    createBody['createData']['IsCODMandatory'] = "1";
    createBody['createData']['codPaymentType'] = order['isCheck'] ? 'OM' : "";
  }

  var nSR = getNumericSenderReference(isAddition, order);
  var shipment_weight = getShipmentWeight(isAddition, order);
  createBody['createData']['numericSenderReference'] = nSR;
  createBody['createData']['weightKG'] = shipment_weight;
  createBody['createData']['numberOfParcels'] = !isAddition ? box['current'] : box['toAdd'];
  checkPrinterServiceActive().then(function (res) {
    var API_and_print = new _procedures_procedure__WEBPACK_IMPORTED_MODULE_8__.Procedure('courier_1', API_AND_PRINT_PROC_NAME, {
      saveProcedure: false
    }, function () {
      updateOurSystem(nSR, box, order, shipment_weight, wh_user_id, jwt, isAddition, c_p_c_UPDATE_SYSTEM, c_p_c_UPDATE_SYSTEM);
    }, function (procedure, error) {
      if (procedure.currentStep == 0) {
        c_p_e_BRT_API(error);
      } else {
        console.log('--- errore di stampa ---');
        c_p_e_PRINTER(error);
      }
    });
    API_and_print.addProcedureSteps([{
      f: function f(params) {
        return new Promise(function (resolve, reject) {
          fetch("https://api.brt.it/rest/v1/shipments/shipment", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': 'https://api.brt.it',
              'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
            },
            body: JSON.stringify(params.body)
          }).then(function (res) {
            if (res.ok) {
              res.json().then(function (data) {
                if (data['createResponse']['executionMessage']['code'] >= 0) {
                  resolve(data);
                } else {
                  console.log('else ', data['createResponse']['executionMessage']['codeDesc']);
                  console.log(data);
                  updateOurSystem(nSRs_deleted, order, undefined, jwt, c_p_e_UPDATE_SYSTEM, c_p_c_UPDATE_SYSTEM);
                  c_f_e_BRT_API("".concat(data['createResponse']['executionMessage']['codeDesc'], ", ").concat(data['deleteResponse']['executionMessage']['message']));
                }
              }).catch(function (err) {
                console.log('errore parsing json');
                reject(err);
              });
            }
          }).catch(function (err) {
            console.log('--- BRT non raggiungibile ---');
            reject(err);
          });
        });
      },
      params: {
        body: createBody
      },
      isAsync: true
    }, {
      f: function f(params, prev_step_res) {
        return new Promise(function (resolve, reject) {
          console.log('--- PRINTING ---', prev_step_res);
          var data = prev_step_res;
          console.log('---- DATI ----');
          console.log(data);
          var b = {
            label: data['createResponse']['labels']['label'],
            startingBox: isAddition ? order['box_n'] : 0,
            orderId: params.orderId
          };
          console.log(b);
          fetch('http://localhost:5001/label_writer_450/printPDF', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(b)
          }).then(function (res) {
            console.log('RISULTATO STAMPA', res);

            if (res.ok) {
              resolve();
            } else {
              console.log('sbagliata stampa');
              reject();
            }
          }).catch(function (err) {
            console.log('stampa sbagliata');
            reject(err);
          });
        });
      },
      params: {
        orderId: order['id']
      },
      isAsync: true
    }]);
    API_and_print.execute();
  }).catch(function (err) {
    console.log(err);
    c_p_e_PRINTER('PRINTER SERVICE NOT ACTIVE');
  });
}

function checkPrinterServiceActive() {
  return new Promise(function (resolve, reject) {
    fetch('http://localhost:5001/label_writer_450/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (res) {
      if (res.ok) {
        resolve();
      } else {
        reject();
      }
    }).catch(function (err) {
      return reject(err);
    });
  });
}

function updateOurSystem(nSR, box, order, weight, wh_user_id, jwt, isAddition, c_p_e_UPDATE_SYSTEM, c_p_c_UPDATE_SYSTEM) {
  console.log('---- Procedura di aggiornamento dei nostri sistemi ----');
  var shipment_data = createNewShipmentData(order, nSR, weight, box, isAddition);
  var logistic_state = !isAddition ? 'LABELLED' : undefined;
  console.log('errore aggiornamento sistemi funzione', c_p_e_UPDATE_SYSTEM);
  var life365_system = new _procedures_procedure__WEBPACK_IMPORTED_MODULE_8__.Procedure('courier_1', LIFE365_SYSTEM_PROC_NAME, {
    redo_from_the_beginnign: false
  }, function () {
    console.log('PROCEDURA TERMINATA CORRETTAMENTE');
    c_p_c_UPDATE_SYSTEM();
  }, function (procedure, error) {
    console.log('PROCEDURA CON ERRORE');
    console.log(c_p_e_UPDATE_SYSTEM);
    c_p_e_UPDATE_SYSTEM();
  });
  new _procedures_procedure__WEBPACK_IMPORTED_MODULE_8__.Procedure();
  var life365_system_steps = [{
    f: function f(params) {
      return new Promise(function (resolve, reject) {
        var body = {
          box_n: params.box_n,
          shipment_data: params.shipment_data
        };

        if (params.logistic_state != undefined) {
          body['logistic_state'] = params.logistic_state;
        }

        console.log('BODY');
        console.log(body); //const request = !params.DEBUG || params.DEBUG == undefined ? `${params.orderEdit.replace("-1", params.order_id)}?jwt=${params.jwt}` : `${params.orderEdit.replace("-1", params.order_id)}/debug?jwt=${params.jwt}`

        var request = "".concat(params.orderEdit.replace("-1", params.order_id), "?jwt=").concat(params.jwt);
        var method = 'PUT';
        var headers = {
          'Content-Type': 'application/json'
        };
        new Promise(function (resol, rej) {
          fetch(request, {
            method: method,
            headers: headers,
            body: JSON.stringify(body)
          }).then(function (respose) {
            if (respose.ok) {
              console.log('--- Setted order', params.logistic_state, ' ---');
              resol();
            } else {
              rej(err);
            }
          }).catch(function (error) {
            console.log(error);
            rej();
          });
        }).then(function (res) {
          return resolve();
        }).catch(function (err) {
          return reject(err);
        });
      });
    },
    params: {
      order_id: order['id'],
      box_n: !isAddition ? box['current'] : order['box_n'] + box['toAdd'],
      jwt: jwt,
      orderEdit: ORDER_EDIT,
      shipment_data: shipment_data,
      logistic_state: logistic_state,
      SYSTEM_ERROR: SYSTEM_ERROR,
      REQUEST_ERROR: REQUEST_ERROR,
      DEBUG: false
    },
    isAsync: true,
    redo: {
      time: 3,
      timeout: 200
    }
  }]; //chiedi a Gianca se tutte le volte che viene fatta un'operazione bisogna settare l'utente

  if (wh_user_id != undefined) {
    life365_system_steps.push({
      f: function f(params) {
        return new Promise(function (resolve, reject) {
          //const request = !params.DEBUG ? `${params.SET_WHO_MAKE_THE_DELIVERY}?jwt=${params.jwt}` : `${params.SET_WHO_MAKE_THE_DELIVERY}/debug?jwt=${params.jwt}`
          var request = "".concat(params.SET_WHO_MAKE_THE_DELIVERY, "?jwt=").concat(params.jwt);
          var method = 'POST';
          var headers = {
            'Content-Type': 'application/json'
          };
          var body = {
            user: params.wh_user_id,
            order_id: params.order_id
          };
          return new Promise(function (resol, rej) {
            fetch(request, {
              method: method,
              headers: headers,
              body: JSON.stringify(body)
            }).then(function (respose) {
              if (respose.ok) {
                console.log('---- Setted who make deliver ---');
                resol();
              } else {
                rej(params.SYSTEM_ERROR);
              }
            }).catch(function () {
              rej(params.REQUEST_ERROR);
            });
          }).then(function (res) {
            return resolve();
          }).catch(function (err) {
            return reject(err);
          });
        });
      },
      params: {
        wh_user_id: wh_user_id,
        SET_WHO_MAKE_THE_DELIVERY: SET_WHO_MAKE_THE_DELIVERY,
        order_id: order['id'],
        jwt: jwt,
        SYSTEM_ERROR: SYSTEM_ERROR,
        REQUEST_ERROR: REQUEST_ERROR,
        DEBUG: false
      },
      isAsync: true,
      redo: {
        time: 3,
        timeout: 200
      }
    });
  }

  if (!isAddition) {
    life365_system_steps.push({
      f: function f(params) {
        return new Promise(function (resolve, reject) {
          console.log('--- set order IN-TRANSIT ---');
          var body = {
            logistic_state: params.logistic_state
          }; //const request = !params.DEBUG || params.DEBUG == undefined ? `${params.orderEdit.replace("-1", params.order_id)}?jwt=${params.jwt}` : `${params.orderEdit.replace("-1", params.order_id)}/debug?jwt=${params.jwt}`

          var request = "".concat(params.orderEdit.replace("-1", params.order_id), "?jwt=").concat(params.jwt);
          var method = 'PUT';
          var headers = {
            'Content-Type': 'application/json'
          };
          new Promise(function (resol, rej) {
            fetch(request, {
              method: method,
              headers: headers,
              body: JSON.stringify(body)
            }).then(function (respose) {
              if (respose.ok) {
                console.log('--- Setted order', params.logistic_state, ' ---');
                resol();
              } else {
                rej();
              }
            }).catch(function (error) {
              console.log(error);
              rej();
            });
          }).then(function (res) {
            return resolve();
          }).catch(function (err) {
            return reject(err);
          });
        });
      },
      params: {
        order_id: order['id'],
        jwt: jwt,
        orderEdit: ORDER_EDIT,
        logistic_state: 'IN-TRANSIT',
        SYSTEM_ERROR: SYSTEM_ERROR,
        REQUEST_ERROR: REQUEST_ERROR,
        DEBUG: false
      },
      isAsync: true,
      redo: {
        time: 3,
        timeout: 200
      }
    });
  }

  life365_system.addProcedureSteps(life365_system_steps);
  life365_system.execute();
}

function getNumericSenderReference(isAddition, order) {
  if (DEBUG) {
    var nsrls = window.localStorage.getItem('numericSenderReference');

    if (nsrls != undefined) {
      nsrls = parseInt(nsrls);
      var id = nsrls;
      nsrls = nsrls + 1;
      window.localStorage.setItem('numericSenderReference', nsrls);

      if (!isAddition) {
        return id * MAX_ADDITION;
      } else {
        var prev_addition = order['shipment_data']['BRT'].length - 1;
        return order['shipment_data']['BRT'][0]['nSR'] * MAX_ADDITION + prev_addition + 1;
      }
    } else {
      window.localStorage.setItem('numericSenderReference', 13);
      return 13;
    }
  } else {
    if (!isAddition) {
      return order['id'] * MAX_ADDITION;
    } else {
      var _prev_addition = order['shipment_data']['BRT'].length - 1;

      return order['id'] * MAX_ADDITION + _prev_addition + 1;
    }
  }
}

var DEBUG_w = true;

function getShipmentWeight(isAddition, order) {
  if (DEBUG_w) return 1;

  if (!isAddition) {
    console.log('order weight', order['weight']);
    return order['weight'];
  } else {
    var prev_shipment_weight = 0;
    order['shipment_data']['BRT'].forEach(function (sd) {
      prev_shipment_weight += sd['weight'];
    });
    console.log('order weight addition', order['weight'] - prev_shipment_weight);
    return order['weight'] - prev_shipment_weight;
  }
}

function createNewShipmentData(order, nSR, weight, box, isAddition) {
  var result = {
    BRT: []
  };

  if (order['shipment_data'] != null && order['shipment_data'] != undefined) {
    result = order['shipment_data'];
    if (order['shipment_data']['BRT'] == undefined) result['BRT'] = [];
  }

  result['BRT'].push({
    nSR: nSR,
    weight: weight,
    box_n: !isAddition ? box['current'] : box['toAdd'],
    date: Date.now()
  });
  return result;
}



/***/ }),

/***/ "./src/IT/courier_1/edit.js":
/*!**********************************!*\
  !*** ./src/IT/courier_1/edit.js ***!
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
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils */ "./src/IT/utils.js");
/* harmony import */ var _undo_delivery__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./undo_delivery */ "./src/IT/courier_1/undo_delivery.js");
/* harmony import */ var _create_spedition__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./create_spedition */ "./src/IT/courier_1/create_spedition.js");
;














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var ADD_BOX_BTN_ID = 'add_box_btn_id';
var ADD_BOX_BTN_LABEL = 'Add boxes';
var REPRINT_BTN_ID = 'reprint_btn_id';
var REPRINT_BTN_LABEL = 'Reprint labels';
var UNDO_BTN_ID = 'undo_btn_id';
var UNDO_BTN_LABEL = 'Undo Order';
var ADD_BOX_INPUT_ID = 'add_box_input';

var Card = function Card(props) {
  var nBoxToAdd = react__WEBPACK_IMPORTED_MODULE_14__.useRef(null);
  var currentBox = react__WEBPACK_IMPORTED_MODULE_14__.useRef(null);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_14__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      doingSomeOperation = _React$useState2[0],
      setDoingSomeOperation = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_14__.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      needCorrection = _React$useState4[0],
      setNeedCorrection = _React$useState4[1];

  react__WEBPACK_IMPORTED_MODULE_14__.useEffect(function () {
    currentBox.current.value = props['order']['box_n'];
    nBoxToAdd.current.focus();
  });

  var disableButtons = function disableButtons() {
    document.getElementById(ADD_BOX_BTN_ID).setAttribute("disabled", "disabled");
    document.getElementById(REPRINT_BTN_ID).setAttribute("disabled", "disabled");
    document.getElementById(UNDO_BTN_ID).setAttribute("disabled", "disabled");
  };

  function handleStartingOperation(params) {
    setDoingSomeOperation(true);
    disableButtons();
  }

  function handleEndingOperation(params) {
    setDoingSomeOperation(false);
  }

  function handleAddBoxInputOk() {
    setNeedCorrection(false);
    document.getElementById(ADD_BOX_INPUT_ID).classList.remove("is-invalid");
  }

  function handleAddBoxInputNotOk() {
    setNeedCorrection(true);
    document.getElementById(ADD_BOX_INPUT_ID).classList.add("is-invalid");
  }

  function checkInput() {
    console.log('n box value > 0', nBoxToAdd.current.value > 0);
    return nBoxToAdd.current.value > 0;
  }

  var undoDeliver = function undoDeliver(e) {
    e.preventDefault();
    handleStartingOperation();
    var nSRs = props['order']['shipment_data']['BRT'].map(function (s) {
      return s['nSR'];
    });
    console.log('---- UNDO ----');
    console.log(nSRs);
    (0,_undo_delivery__WEBPACK_IMPORTED_MODULE_16__.undoDelivery)(nSRs, props['order'], props['token']['jwt'], closeBRTAPIProcedureError, closeProcedureErrorUpdateSystem, closeProcedureCorrectlyUpdateSystem, 0, function () {});
  };

  function addBoxes(e) {
    e.preventDefault();

    if (checkInput()) {
      if (needCorrection) {
        handleAddBoxInputOk();
      }

      handleStartingOperation();
      var wh_user_id = SET_WHO_MAKE_THE_DELIVERY ? props['wh_user_id'] : undefined;
      var box = {
        current: parseInt(currentBox.current.value),
        toAdd: parseInt(nBoxToAdd.current.value)
      };
      (0,_create_spedition__WEBPACK_IMPORTED_MODULE_17__.shipOrder)(props['order'], true, box, props['token']['jwt'], wh_user_id, closeBRTAPIProcedureError, closePrinterProcedureError, closeProcedureCorrectlyUpdateSystem, closeProcedureErrorUpdateSystem);
    } else {
      handleAddBoxInputNotOk();
    }
  }

  var closeBRTAPIProcedureError = function closeBRTAPIProcedureError(err) {
    var API_ERROR = "ERROR IN BRT COMMUNICATION: " + err;
    props['showError'](API_ERROR);
    handleEndingOperation();
  };

  var closePrinterProcedureError = function closePrinterProcedureError(err) {
    var PRINT_ERROR = "ERROR_PRINTING: " + err;
    props['showError'](PRINT_ERROR);
    handleEndingOperation();
  };

  var closeProcedureCorrectlyUpdateSystem = function closeProcedureCorrectlyUpdateSystem() {
    window.location.reload();
  };

  var closeProcedureErrorUpdateSystem = function closeProcedureErrorUpdateSystem() {//Procedure is saved and do in the next future
  };

  function reprint(e) {
    e.preventDefault();
    var CAN_T_REPRINT_THE_LABEL = "CAN'T REPRINT THE LABEL";
    handleStartingOperation();
    fetch('http://localhost:5001/label_writer_450/reprintPDF', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        orderId: props['order']['id']
      })
    }).then(function (respose) {
      if (respose.ok) {
        window.location.reload();
      } else {
        props['showError'](CAN_T_REPRINT_THE_LABEL);
        handleEndingOperation();
      }
    }).catch(function (err) {
      console.log('ERRORE DI FETCH');
      props['showError'](CAN_T_REPRINT_THE_LABEL + err);
      handleEndingOperation();
    });
  }

  var toPrint = props['info'] != null ? "".concat(props['info']['order_state'], " on ").concat(props['info']['order_date_change']) : "";
  if (props['info']['order_state'] == 'DELIVERED') toPrint = toPrint + " with ".concat(props['order']['box_n'], " packages");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("p", null, toPrint), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("form", {
    id: "print_form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("div", {
    className: "form-row container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("div", {
    className: "col-md-2 mt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("label", null, "Current boxes", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("input", {
    type: "number",
    min: "0",
    style: {
      height: '100%'
    },
    step: "1",
    className: "form-control",
    placeholder: " Curr boxes ".concat(props['order']['box_n'], " "),
    ref: currentBox,
    disabled: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("div", {
    className: "col-md-2 mt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("label", null, " Box to add", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("input", {
    type: "number",
    min: "0",
    style: {
      height: '100%'
    },
    step: "1",
    className: "form-control",
    id: ADD_BOX_INPUT_ID,
    ref: nBoxToAdd
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("div", {
    className: "col-md-2 mt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("button", {
    id: ADD_BOX_BTN_ID,
    type: "submit",
    className: "btn btn-primary btn-block",
    style: {
      height: "100%"
    },
    onClick: addBoxes
  }, ADD_BOX_BTN_LABEL)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("div", {
    className: "col-md-2 mt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("button", {
    id: REPRINT_BTN_ID,
    type: "submit",
    className: "btn btn-primary btn-block",
    style: {
      height: "100%"
    },
    onClick: reprint
  }, REPRINT_BTN_LABEL)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("div", {
    className: "col-md-2 mt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("button", {
    id: UNDO_BTN_ID,
    type: "button",
    className: "btn btn-danger btn-block",
    style: {
      height: "100%"
    },
    onClick: undoDeliver
  }, UNDO_BTN_LABEL)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("div", {
    className: "text-center col-md-2 mt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("div", {
    className: "spinner-border text-secondary ",
    style: doingSomeOperation ? {} : {
      display: "none"
    },
    role: "status"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("span", {
    className: "sr-only"
  }, "Loading..."))))));
};



/***/ }),

/***/ "./src/IT/courier_1/label.js":
/*!***********************************!*\
  !*** ./src/IT/courier_1/label.js ***!
  \***********************************/
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
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _create_spedition__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./create_spedition */ "./src/IT/courier_1/create_spedition.js");
;











function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var BUTTON_LABEL = "Print label";
var BUTTON_ID = "submit_button";
var BOX_ID = "input_box_id";

var Card = function Card(props) {
  var nPackagesInput = react__WEBPACK_IMPORTED_MODULE_11__.useRef(null);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_11__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      doingSomeOperation = _React$useState2[0],
      setDoingSomeOperation = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_11__.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      needCorrection = _React$useState4[0],
      setNeedCorrection = _React$useState4[1];

  react__WEBPACK_IMPORTED_MODULE_11__.useEffect(function () {
    nPackagesInput.current.focus();
    console.log(document.getElementById(BOX_ID));
  });

  var disableButtons = function disableButtons() {
    document.getElementById(BUTTON_ID).setAttribute("disabled", "disabled");
  };

  var label = function label(e) {
    e.preventDefault();

    if (checkInput()) {
      if (needCorrection) {
        handleAddBoxInputOk();
      }

      handleStartingOperation();
      var wh_user_id = SET_WHO_MAKE_THE_DELIVERY ? props['wh_user_id'] : undefined;
      var box = {
        current: parseInt(nPackagesInput.current.value)
      };
      (0,_create_spedition__WEBPACK_IMPORTED_MODULE_12__.shipOrder)(props['order'], false, box, props['token']['jwt'], wh_user_id, closeBRTAPIProcedureError, closePrinterProcedureError, closeProcedureCorrectlyUpdateSystem, closeProcedureErrorUpdateSystem);
    } else {
      console.log('Non si etichetta');
      handleAddBoxInputNotOk();
    }
  };

  function checkInput() {
    return nPackagesInput.current.value > 0;
  }

  function handleAddBoxInputOk() {
    setNeedCorrection(false);
    document.getElementById(BOX_ID).classList.remove("is-invalid");
  }

  function handleAddBoxInputNotOk() {
    setNeedCorrection(true);
    document.getElementById(BOX_ID).classList.add("is-invalid");
  }

  function handleStartingOperation(params) {
    setDoingSomeOperation(true);
    disableButtons();
  }

  function handleEndingOperation(params) {
    setDoingSomeOperation(false);
  }

  var closeBRTAPIProcedureError = function closeBRTAPIProcedureError(err) {
    var API_ERROR = "ERROR IN BRT COMMUNICATION" + err;
    props['showError'](API_ERROR);
    handleEndingOperation();
  };

  var closePrinterProcedureError = function closePrinterProcedureError(err) {
    var PRINT_ERROR = "ERROR_PRINTING: " + err;
    props['showError'](PRINT_ERROR);
    handleEndingOperation();
  };

  var closeProcedureCorrectlyUpdateSystem = function closeProcedureCorrectlyUpdateSystem() {//window.location.reload();
  };

  var closeProcedureErrorUpdateSystem = function closeProcedureErrorUpdateSystem() {//Procedure is saved and do in the next future
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__.createElement("form", {
    id: "print_form",
    onSubmit: label
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__.createElement("div", {
    className: "form-row container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__.createElement("div", {
    className: "col-md-2 mt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__.createElement("input", {
    id: BOX_ID,
    type: "number",
    min: "0",
    step: "1",
    className: "form-control",
    placeholder: "Boxes",
    ref: nPackagesInput
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__.createElement("div", {
    className: "col-md-3 mt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__.createElement("button", {
    id: BUTTON_ID,
    type: "submit",
    className: "btn btn-primary btn-block"
  }, BUTTON_LABEL)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__.createElement("div", {
    className: "col-md-3 mt-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__.createElement("div", {
    className: "text-center col-md-1 mt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__.createElement("div", {
    className: "spinner-border text-secondary ",
    style: doingSomeOperation ? {} : {
      display: "none"
    },
    role: "status"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__.createElement("span", {
    className: "sr-only"
  }, "Loading..."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__.createElement("div", {
    className: "col-md-3 mt-1"
  })));
};



/***/ }),

/***/ "./src/IT/courier_1/plugin.js":
/*!************************************!*\
  !*** ./src/IT/courier_1/plugin.js ***!
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
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils */ "./src/IT/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./label */ "./src/IT/courier_1/label.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./edit */ "./src/IT/courier_1/edit.js");
/* harmony import */ var _procedures_procedure__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../procedures/procedure */ "./src/procedures/procedure.js");
;














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var LOGO = "https://static.life365.eu/common/template-02/images/courier/logo_brt.jpg";
var COURIER = "BRT";
var LABEL_ORDER_PROC_NAME = 'LABEL_ORDER';
var SET_BOXES_PROC_NAME = 'SET_BOXES';
var UNDO_LABEL_PROC_NAME = 'UNDO_LABEL';
var PLUGIN_STATE = {
  EMPTY: 0,
  EDIT: 1,
  LABEL: 2
};

var PluginCard = function PluginCard(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_14__.useState(null),
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
    _utils__WEBPACK_IMPORTED_MODULE_15__.default.getCurrentStateDateChange(props['order']['id'], props['token']['jwt']).then(function (res) {
      setInfo(res['info']);

      if (_utils__WEBPACK_IMPORTED_MODULE_15__.default.canDeliverOrder(props['order']['logistic_state'])) {
        setPluginState(PLUGIN_STATE.LABEL);
      } else if (_utils__WEBPACK_IMPORTED_MODULE_15__.default.canEditOrder(props['order']['logistic_state'])) {
        setPluginState(PLUGIN_STATE.EDIT);
        setBoxNState(props['order']['box_n']);
      } else {
        setPluginState(PLUGIN_STATE.EMPTY);
      }
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
  }, COURIER), pluginState == PLUGIN_STATE.EDIT && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(_edit__WEBPACK_IMPORTED_MODULE_18__.Card, {
    order: _utils__WEBPACK_IMPORTED_MODULE_16__.default.parseOrder(props['order']),
    token: props['token'],
    info: info,
    showError: props['showError'],
    box_n: box_n_state,
    wh_user_id: props['wh_user_id']
  }), pluginState == PLUGIN_STATE.LABEL && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(_label__WEBPACK_IMPORTED_MODULE_17__.Card, {
    order: _utils__WEBPACK_IMPORTED_MODULE_16__.default.parseOrder(props['order']),
    token: props['token'],
    wh_user_id: props['wh_user_id'],
    showError: props['showError']
  }), pluginState == PLUGIN_STATE.EMPTY && info != null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("p", null, "".concat(info['order_state'], " on ").concat(info['order_date_change'])) : null))));
};

function redoProcedure(jwt) {
  var savedProcedures = (0,_procedures_procedure__WEBPACK_IMPORTED_MODULE_19__.getSavedProcedures)('courier_1');

  var _loop = function _loop(i) {
    var p = savedProcedures[i];
    var b = new _procedures_procedure__WEBPACK_IMPORTED_MODULE_19__.Procedure(p.app_id, p.proc_name, {
      redo_from_beginning: true,
      saveProcedure: true
    }, function () {
      console.log("--- ".concat(p.app_id, " ").concat(p.proc_name, " done ---"));
    }, function () {
      console.log("--- error in ".concat(p.app_id, " ").concat(p.proc_name, " ---"));
    });
    p.steps.forEach(function (s) {
      s.params.jwt = jwt;
      s.params.DEBUG = false;
    });
    b.addProcedureSteps(p.steps);
    b.execute();
  };

  for (var i = 0; i < savedProcedures.length; i++) {
    _loop(i);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  PluginCard: PluginCard,
  redoProcedure: redoProcedure
});

/***/ }),

/***/ "./src/IT/courier_1/undo_delivery.js":
/*!*******************************************!*\
  !*** ./src/IT/courier_1/undo_delivery.js ***!
  \*******************************************/
/*! namespace exports */
/*! export undoDelivery [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "undoDelivery": () => /* binding */ undoDelivery
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils */ "./src/IT/utils.js");
/* harmony import */ var _brt_req_body__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./brt_req_body */ "./src/IT/courier_1/brt_req_body.js");
/* harmony import */ var _procedures_procedure__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../procedures/procedure */ "./src/procedures/procedure.js");
;











function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var undo_label_proc_name = 'UNDO_LABEL_PROC_NAME';
var SYSTEM_ERROR = {
  code: 1,
  msg: 'System error. ' + ENCOURAGEMENT
};
var REQUEST_ERROR = {
  code: 2,
  msg: 'App cannot contact the system. Check yuor connection! ' + ENCOURAGEMENT
};
var ENCOURAGEMENT = 'The request will be saved and done as soon as possible';
var nSRs_deleted = [];

function undoDelivery(nSRs, order, jwt, c_f_e_BRT_API, c_p_e_UPDATE_SYSTEM, c_p_c_UPDATE_SYSTEM, i, half_proc_done) {
  console.log('--- UNDO FUnction ----');
  var deleteBody = (0,_brt_req_body__WEBPACK_IMPORTED_MODULE_12__.getDeleteBody)();
  var first_elem = nSRs[i];
  deleteBody["deleteData"]["numericSenderReference"] = first_elem;
  fetch("https://api.brt.it/rest/v1/shipments/delete", {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(deleteBody)
  }).then(function (res) {
    if (res.ok) {
      res.json().then(function (data) {
        if (data['deleteResponse']['executionMessage']['code'] >= 0) {
          nSRs_deleted.push(first_elem);
          console.log('--- RISPOSTA DI brt ---');

          if (nSRs.length == nSRs_deleted.length) {
            console.log('Aggiorniamo il sistema TUTTO');
            _utils__WEBPACK_IMPORTED_MODULE_11__.default.getOrderStateHistory(order['id'], jwt).then(function (prev_states) {
              updateOurSystem(nSRs_deleted, order, prev_states[2]['order_state'], jwt, c_p_e_UPDATE_SYSTEM, c_p_c_UPDATE_SYSTEM);
            });
          } else {
            undoDelivery(nSRs, order, jwt, c_f_e_BRT_API, c_p_e_UPDATE_SYSTEM, c_p_c_UPDATE_SYSTEM, i + 1, half_proc_done);
          }
        } else {
          console.log('else ', data['deleteResponse']['executionMessage']['codeDesc']);
          console.log(data);
          updateOurSystem(nSRs_deleted, order, undefined, jwt, c_p_e_UPDATE_SYSTEM, half_proc_done);
          c_f_e_BRT_API("".concat(data['deleteResponse']['executionMessage']['codeDesc'], ", ").concat(data['deleteResponse']['executionMessage']['message']));
        }
      }).catch(function (err) {
        console.log('catch', err);
        updateOurSystem(nSRs_deleted, order, undefined, jwt, c_p_e_UPDATE_SYSTEM, half_proc_done);
        c_f_e_BRT_API(err);
      });
    }
  }).catch(function (err) {
    console.log(err);
    reject(err);
  });
}

function updateOurSystem(_x, _x2, _x3, _x4, _x5, _x6) {
  return _updateOurSystem.apply(this, arguments);
}

function _updateOurSystem() {
  _updateOurSystem = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(nSRs, order, prev_state, jwt, c_p_e_UPDATE_SYSTEM, c_p_c_UPDATE_SYSTEM) {
    var box_n, shipment_data, life365_system, life365_system_steps;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('---- Update our system procedure ----');
            box_n = getBox_n(nSRs, order);
            shipment_data = createNewShipmentData(nSRs, order);
            life365_system = new _procedures_procedure__WEBPACK_IMPORTED_MODULE_13__.Procedure('courier_1', undo_label_proc_name, {
              redo_from_the_beginnign: false
            }, function () {
              c_p_c_UPDATE_SYSTEM();
            }, function (procedure, error) {
              c_p_e_UPDATE_SYSTEM();
            });
            life365_system_steps = [{
              f: function f(params) {
                return new Promise(function (resolve, reject) {
                  var body = {
                    box_n: params.box_n,
                    shipment_data: params.shipment_data
                  };

                  if (params.logistic_state != undefined) {
                    console.log('STATO LOGISTICO SETTATO ', params.logistic_state);
                    body['logistic_state'] = params.logistic_state;
                  }

                  var request = !params.DEBUG || params.DEBUG == undefined ? "".concat(params.orderEdit.replace("-1", params.order_id), "?jwt=").concat(params.jwt) : "".concat(params.orderEdit.replace("-1", params.order_id), "/debug?jwt=").concat(params.jwt);
                  var method = 'PUT';
                  var headers = {
                    'Content-Type': 'application/json'
                  };
                  new Promise(function (resol, rej) {
                    fetch(request, {
                      method: method,
                      headers: headers,
                      body: JSON.stringify(body)
                    }).then(function (respose) {
                      if (respose.ok) {
                        console.log('--- Setted order', params.logistic_state, ' ---');
                        resol();
                      } else {
                        rej();
                      }
                    }).catch(function (error) {
                      console.log(error);
                      rej();
                    });
                  }).then(function (res) {
                    return resolve();
                  }).catch(function (err) {
                    return reject(err);
                  });
                });
              },
              params: {
                order_id: order['id'],
                //use this only if we have to delete shipping separately
                //  order['box_n'] - (order['shipment_data']['BRT'].filter(s => s['nSR'] == nSR)[0]['box'])
                box_n: box_n,
                jwt: jwt,
                orderEdit: ORDER_EDIT,
                shipment_data: shipment_data,
                logistic_state: prev_state,
                SYSTEM_ERROR: SYSTEM_ERROR,
                REQUEST_ERROR: REQUEST_ERROR,
                DEBUG: false
              },
              isAsync: true,
              redo: {
                time: 3,
                timeout: 200
              }
            }];
            life365_system.addProcedureSteps(life365_system_steps);
            life365_system.execute();

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _updateOurSystem.apply(this, arguments);
}

function createNewShipmentData(nSRs, order) {
  console.log('nSRs', nSRs);
  var result = order['shipment_data'];
  result['BRT'] = order['shipment_data']['BRT'].filter(function (s) {
    return !nSRs.includes(s['nSR']);
  });
  console.log('result ', result);
  return result;
}

function getBox_n(nSRs, order) {
  var result = order['box_n'];
  order['shipment_data']['BRT'].filter(function (s) {
    console.log(s, 'incluso negli nRSs?', nSRs.includes(s['nSR']));
    return nSRs.includes(s['nSR']);
  }).forEach(function (s) {
    result = result - s['box_n'];
    console.log('result', result);
  });
  return result;
}



/***/ }),

/***/ "./src/procedures/procedure.js":
/*!*************************************!*\
  !*** ./src/procedures/procedure.js ***!
  \*************************************/
/*! namespace exports */
/*! export Procedure [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getSavedProcedures [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Procedure": () => /* binding */ Procedure,
/* harmony export */   "getSavedProcedures": () => /* binding */ getSavedProcedures
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.last-index-of */ "./node_modules/core-js/modules/es.array.last-index-of.js");
/* harmony import */ var core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__);
;












function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//manca di aggiungere il redo single step in sync step
var Procedure = /*#__PURE__*/function () {
  function Procedure(app_id, procedure_name, options, procedureEndCallback, procedureNotWorkCallback) {
    _classCallCheck(this, Procedure);

    this.canAddAnotherStep = false;
    this.steps = [];
    this.currentStep = 0;
    this.app_id = app_id;
    this.procedure_name = procedure_name;
    if (options == undefined) options = {};
    this.options = {
      saveProcedure: options.saveProcedure != undefined ? options.saveProcedure : true,
      redo_from_beginning: options.redo_from_beginning != undefined ? options.redo_from_beginning : true
    };
    if (procedureEndCallback != undefined) this.procedureEndCallback = procedureEndCallback;else this.procedureEndCallback = function () {};

    if (procedureNotWorkCallback != undefined) {
      this.procedureNotWorkCallback = procedureNotWorkCallback;
    } else {
      this.procedureNotWorkCallback = function () {};
    }
  }
  /**
  * Add a procedure steps 
  */


  _createClass(Procedure, [{
    key: "addProcedureSteps",
    value: function addProcedureSteps(steps) {
      this.steps = steps;
    }
    /**
     * Execute a procedure
     */

  }, {
    key: "execute",
    value: function execute() {
      try {
        if (this.steps.length - this.currentStep > 0) {
          var isAsync = this.steps[this.currentStep].isAsync;

          if (isAsync) {
            this.doAnotherAsyncStep();
          } else {
            this.doAnotherSyncStep();
          }
        } else {
          this.procedureEndCallback(this);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, {
    key: "doAnotherSyncStep",
    value: function doAnotherSyncStep() {
      try {
        var f = this.steps[this.currentStep].f;
        var params = this.steps[this.currentStep].params;
        f(params);
        this.currentStep++;
        this.execute();
      } catch (error) {
        if (this.options.saveProcedure) {
          this.saveProcedure();
        }

        this.procedureNotWorkCallback(this, error);
      }
    }
  }, {
    key: "doAnotherAsyncStep",
    value: function doAnotherAsyncStep() {
      var _this = this;

      var f = this.steps[this.currentStep].f;
      var params = this.steps[this.currentStep].params;
      var prev_step_res = this.steps[this.currentStep].prev_step_res;
      var redo = this.steps[this.currentStep].redo;
      var time = redo != undefined ? this.steps[this.currentStep].redo.time : undefined;
      var timeout = redo != undefined ? this.steps[this.currentStep].redo.timeout : undefined;
      f(params, prev_step_res).then(function (res) {
        _this.currentStep++;

        if (_this.steps[_this.currentStep] != undefined) {
          _this.steps[_this.currentStep].prev_step_res = res;
        }

        _this.execute();
      }).catch(function (err) {
        if (redo != undefined && time > 0) {
          setTimeout(function () {
            console.log('time ', time);
            _this.steps[_this.currentStep].redo.time--;

            _this.doAnotherAsyncStep();
          }, timeout);
        } else {
          if (_this.options.saveProcedure) {
            _this.saveProcedure();
          }

          _this.procedureNotWorkCallback(_this, err);
        }
      });
    }
  }, {
    key: "saveProcedure",
    value: function saveProcedure() {
      var _this2 = this;

      var procedure_saved_on = Date.now();
      var id = "".concat(this.app_id, "_").concat(this.procedure_name, "_").concat(procedure_saved_on);
      console.log('Saving procedure', id);
      var stepsStringified = [];
      var redo_from_beginning = this.options.redo_from_beginning;
      var c = 0;
      this.steps.forEach(function (s) {
        if (redo_from_beginning || c >= _this2.currentStep) {
          var toStringFunction = s.f.toString();
          var bodyString = toStringFunction.slice(toStringFunction.indexOf("{") + 1, toStringFunction.lastIndexOf("}"));
          var step_to_save = {
            f: bodyString,
            params: s.params,
            isAsync: s.isAsync
          };
          stepsStringified.push(step_to_save);
        }

        c++;
      });
      var item = JSON.stringify({
        app_id: this.app_id,
        proc_name: this.procedure_name,
        steps: stepsStringified
      });
      window.localStorage.setItem(id, item);
    }
  }]);

  return Procedure;
}();

var getSavedProcedures = function getSavedProcedures(application_id) {
  var keys = Object.keys(window.localStorage);
  var proc = [];
  var pattern = new RegExp(application_id);
  keys.forEach(function (k) {
    if (k.match(pattern) != null) {
      var proc_string = window.localStorage.getItem(k);
      var parsed_proc = JSON.parse(proc_string);
      parsed_proc.steps.forEach(function (s) {
        s.f = new Function('params', s.f);
      });
      proc.push(parsed_proc);
      window.localStorage.removeItem(k);
    }
  });
  return proc;
};



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9JVC9jb3VyaWVyXzEvYnJ0X3JlcV9ib2R5LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL0lUL2NvdXJpZXJfMS9jcmVhdGVfc3BlZGl0aW9uLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL0lUL2NvdXJpZXJfMS9lZGl0LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL0lUL2NvdXJpZXJfMS9sYWJlbC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9JVC9jb3VyaWVyXzEvcGx1Z2luLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL0lUL2NvdXJpZXJfMS91bmRvX2RlbGl2ZXJ5LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3Byb2NlZHVyZXMvcHJvY2VkdXJlLmpzIl0sIm5hbWVzIjpbIkRFQlVHIiwiYm9keSIsImRlbGV0ZVJlcUJvZHkiLCJnZXREZWxldGVCb2R5IiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZ2V0Q3JlYXRlQm9keSIsIkFQSV9BTkRfUFJJTlRfUFJPQ19OQU1FIiwiTElGRTM2NV9TWVNURU1fUFJPQ19OQU1FIiwiRU5DT1VSQUdFTUVOVCIsIlNZU1RFTV9FUlJPUiIsImNvZGUiLCJtc2ciLCJSRVFVRVNUX0VSUk9SIiwiTUFYX0FERElUSU9OIiwic2hpcE9yZGVyIiwib3JkZXIiLCJpc0FkZGl0aW9uIiwiYm94Iiwiand0Iiwid2hfdXNlcl9pZCIsImNfcF9lX0JSVF9BUEkiLCJjX3BfZV9QUklOVEVSIiwiY19wX2NfVVBEQVRFX1NZU1RFTSIsImNfcF9lX1VQREFURV9TWVNURU0iLCJjcmVhdGVCb2R5IiwiblNSIiwiZ2V0TnVtZXJpY1NlbmRlclJlZmVyZW5jZSIsInNoaXBtZW50X3dlaWdodCIsImdldFNoaXBtZW50V2VpZ2h0IiwiY2hlY2tQcmludGVyU2VydmljZUFjdGl2ZSIsInRoZW4iLCJyZXMiLCJBUElfYW5kX3ByaW50IiwiUHJvY2VkdXJlIiwic2F2ZVByb2NlZHVyZSIsInVwZGF0ZU91clN5c3RlbSIsInByb2NlZHVyZSIsImVycm9yIiwiY3VycmVudFN0ZXAiLCJjb25zb2xlIiwibG9nIiwiYWRkUHJvY2VkdXJlU3RlcHMiLCJmIiwicGFyYW1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJvayIsImpzb24iLCJkYXRhIiwiblNSc19kZWxldGVkIiwidW5kZWZpbmVkIiwiY19mX2VfQlJUX0FQSSIsImNhdGNoIiwiZXJyIiwiaXNBc3luYyIsInByZXZfc3RlcF9yZXMiLCJiIiwibGFiZWwiLCJzdGFydGluZ0JveCIsIm9yZGVySWQiLCJleGVjdXRlIiwid2VpZ2h0Iiwic2hpcG1lbnRfZGF0YSIsImNyZWF0ZU5ld1NoaXBtZW50RGF0YSIsImxvZ2lzdGljX3N0YXRlIiwibGlmZTM2NV9zeXN0ZW0iLCJyZWRvX2Zyb21fdGhlX2JlZ2lubmlnbiIsImxpZmUzNjVfc3lzdGVtX3N0ZXBzIiwiYm94X24iLCJyZXF1ZXN0Iiwib3JkZXJFZGl0IiwicmVwbGFjZSIsIm9yZGVyX2lkIiwicmVzb2wiLCJyZWoiLCJyZXNwb3NlIiwiT1JERVJfRURJVCIsInJlZG8iLCJ0aW1lIiwidGltZW91dCIsInB1c2giLCJTRVRfV0hPX01BS0VfVEhFX0RFTElWRVJZIiwidXNlciIsIm5zcmxzIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlSW50IiwiaWQiLCJzZXRJdGVtIiwicHJldl9hZGRpdGlvbiIsImxlbmd0aCIsIkRFQlVHX3ciLCJwcmV2X3NoaXBtZW50X3dlaWdodCIsImZvckVhY2giLCJzZCIsInJlc3VsdCIsIkJSVCIsImRhdGUiLCJEYXRlIiwibm93IiwiQUREX0JPWF9CVE5fSUQiLCJBRERfQk9YX0JUTl9MQUJFTCIsIlJFUFJJTlRfQlROX0lEIiwiUkVQUklOVF9CVE5fTEFCRUwiLCJVTkRPX0JUTl9JRCIsIlVORE9fQlROX0xBQkVMIiwiQUREX0JPWF9JTlBVVF9JRCIsIkNhcmQiLCJwcm9wcyIsIm5Cb3hUb0FkZCIsIlJlYWN0IiwiY3VycmVudEJveCIsImRvaW5nU29tZU9wZXJhdGlvbiIsInNldERvaW5nU29tZU9wZXJhdGlvbiIsIm5lZWRDb3JyZWN0aW9uIiwic2V0TmVlZENvcnJlY3Rpb24iLCJjdXJyZW50IiwidmFsdWUiLCJmb2N1cyIsImRpc2FibGVCdXR0b25zIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNldEF0dHJpYnV0ZSIsImhhbmRsZVN0YXJ0aW5nT3BlcmF0aW9uIiwiaGFuZGxlRW5kaW5nT3BlcmF0aW9uIiwiaGFuZGxlQWRkQm94SW5wdXRPayIsImNsYXNzTGlzdCIsInJlbW92ZSIsImhhbmRsZUFkZEJveElucHV0Tm90T2siLCJhZGQiLCJjaGVja0lucHV0IiwidW5kb0RlbGl2ZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJuU1JzIiwibWFwIiwicyIsInVuZG9EZWxpdmVyeSIsImNsb3NlQlJUQVBJUHJvY2VkdXJlRXJyb3IiLCJjbG9zZVByb2NlZHVyZUVycm9yVXBkYXRlU3lzdGVtIiwiY2xvc2VQcm9jZWR1cmVDb3JyZWN0bHlVcGRhdGVTeXN0ZW0iLCJhZGRCb3hlcyIsInRvQWRkIiwiY2xvc2VQcmludGVyUHJvY2VkdXJlRXJyb3IiLCJBUElfRVJST1IiLCJQUklOVF9FUlJPUiIsImxvY2F0aW9uIiwicmVsb2FkIiwicmVwcmludCIsIkNBTl9UX1JFUFJJTlRfVEhFX0xBQkVMIiwidG9QcmludCIsImhlaWdodCIsImRpc3BsYXkiLCJCVVRUT05fTEFCRUwiLCJCVVRUT05fSUQiLCJCT1hfSUQiLCJuUGFja2FnZXNJbnB1dCIsIkxPR08iLCJDT1VSSUVSIiwiTEFCRUxfT1JERVJfUFJPQ19OQU1FIiwiU0VUX0JPWEVTX1BST0NfTkFNRSIsIlVORE9fTEFCRUxfUFJPQ19OQU1FIiwiUExVR0lOX1NUQVRFIiwiRU1QVFkiLCJFRElUIiwiTEFCRUwiLCJQbHVnaW5DYXJkIiwiaW5mbyIsInNldEluZm8iLCJib3hfbl9zdGF0ZSIsInNldEJveE5TdGF0ZSIsInBsdWdpblN0YXRlIiwic2V0UGx1Z2luU3RhdGUiLCJJdGFVdGlscyIsImFsZXJ0IiwiR2VuZXJhbFV0aWxzIiwicmVkb1Byb2NlZHVyZSIsInNhdmVkUHJvY2VkdXJlcyIsImdldFNhdmVkUHJvY2VkdXJlcyIsImkiLCJwIiwiYXBwX2lkIiwicHJvY19uYW1lIiwicmVkb19mcm9tX2JlZ2lubmluZyIsInN0ZXBzIiwidW5kb19sYWJlbF9wcm9jX25hbWUiLCJoYWxmX3Byb2NfZG9uZSIsImRlbGV0ZUJvZHkiLCJmaXJzdF9lbGVtIiwicHJldl9zdGF0ZXMiLCJwcmV2X3N0YXRlIiwiZ2V0Qm94X24iLCJmaWx0ZXIiLCJpbmNsdWRlcyIsInByb2NlZHVyZV9uYW1lIiwib3B0aW9ucyIsInByb2NlZHVyZUVuZENhbGxiYWNrIiwicHJvY2VkdXJlTm90V29ya0NhbGxiYWNrIiwiY2FuQWRkQW5vdGhlclN0ZXAiLCJkb0Fub3RoZXJBc3luY1N0ZXAiLCJkb0Fub3RoZXJTeW5jU3RlcCIsInNldFRpbWVvdXQiLCJwcm9jZWR1cmVfc2F2ZWRfb24iLCJzdGVwc1N0cmluZ2lmaWVkIiwiYyIsInRvU3RyaW5nRnVuY3Rpb24iLCJ0b1N0cmluZyIsImJvZHlTdHJpbmciLCJzbGljZSIsImluZGV4T2YiLCJsYXN0SW5kZXhPZiIsInN0ZXBfdG9fc2F2ZSIsIml0ZW0iLCJhcHBsaWNhdGlvbl9pZCIsImtleXMiLCJPYmplY3QiLCJwcm9jIiwicGF0dGVybiIsIlJlZ0V4cCIsImsiLCJtYXRjaCIsInByb2Nfc3RyaW5nIiwicGFyc2VkX3Byb2MiLCJGdW5jdGlvbiIsInJlbW92ZUl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxLQUFLLEdBQUcsSUFBZDtBQUNBLElBQU1DLElBQUksR0FBRztBQUNULGFBQVc7QUFDUCxjQUFVLE9BREg7QUFFUCxnQkFBWTtBQUZMLEdBREY7QUFLVCxnQkFBYztBQUNWLGVBQVcsRUFE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QUFJLENBQUN6SCxPQUFMLENBQWEsVUFBQThILENBQUMsRUFBSTtBQUNkLFFBQUlBLENBQUMsQ0FBQ0MsS0FBRixDQUFRSCxPQUFSLEtBQW9CLElBQXhCLEVBQThCO0FBQzFCLFVBQUlJLFdBQVcsR0FBRzFJLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEJzSSxDQUE1QixDQUFsQjtBQUNBLFVBQUlHLFdBQVcsR0FBR2pPLElBQUksQ0FBQ0MsS0FBTCxDQUFXK04sV0FBWCxDQUFsQjtBQUNBQyxpQkFBVyxDQUFDdEMsS0FBWixDQUFrQjNGLE9BQWxCLENBQTBCLFVBQUMyQyxDQUFELEVBQU87QUFDN0JBLFNBQUMsQ0FBQ25HLENBQUYsR0FBTSxJQUFJMEwsUUFBSixDQUFhLFFBQWIsRUFBdUJ2RixDQUFDLENBQUNuRyxDQUF6QixDQUFOO0FBQ0gsT0FGRDtBQUdBbUwsVUFBSSxDQUFDekksSUFBTCxDQUFVK0ksV0FBVjtBQUNBM0ksWUFBTSxDQUFDQyxZQUFQLENBQW9CNEksVUFBcEIsQ0FBK0JMLENBQS9CO0FBQ0g7QUFDSixHQVZEO0FBV0EsU0FBT0gsSUFBUDtBQUNILENBaEJEIiwiZmlsZSI6InNyY19JVF9jb3VyaWVyXzFfcGx1Z2luX2pzLm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBERUJVRyA9IHRydWVcclxuY29uc3QgYm9keSA9IHtcclxuICAgIFwiYWNjb3VudFwiOiB7XHJcbiAgICAgICAgXCJ1c2VySURcIjogMTAyMDEwMyxcclxuICAgICAgICBcInBhc3N3b3JkXCI6IFwiYnJ0MTQ1MnN0XCJcclxuICAgIH0sXHJcbiAgICBcImNyZWF0ZURhdGFcIjoge1xyXG4gICAgICAgIFwibmV0d29ya1wiOiBcIlwiLFxyXG4gICAgICAgIFwiZGVwYXJ0dXJlRGVwb3RcIjogMTMxLFxyXG4gICAgICAgIFwic2VuZGVyQ3VzdG9tZXJDb2RlXCI6IDEwMjAxMDMsXHJcbiAgICAgICAgXCJkZWxpdmVyeUZyZWlnaHRUeXBlQ29kZVwiOiBcIkRBUFwiLFxyXG4gICAgICAgIFwiY29uc2lnbmVlQ29tcGFueU5hbWVcIjogXCJMaWZlMzY1IEl0YWx5XCIsXHJcbiAgICAgICAgXCJjb25zaWduZWVBZGRyZXNzXCI6IFwiZmdmZ2ZoZlwiLFxyXG4gICAgICAgIFwiY29uc2lnbmVlWklQQ29kZVwiOiBcIjQ3MTIxXCIsXHJcbiAgICAgICAgXCJjb25zaWduZWVDaXR5XCI6IFwiRm9ybGlcIixcclxuXHJcbiAgICAgICAgXCJjb25zaWduZWVDb3VudHJ5QWJicmV2aWF0aW9uSVNPQWxwaGEyXCI6IFwiSVRcIixcclxuICAgICAgICBcImNhc2hPbkRlbGl2ZXJ5XCI6IDAsXHJcbiAgICAgICAgXCJpc0NPRE1hbmRhdG9yeVwiOiBcIjBcIixcclxuICAgICAgICBcImNvZFBheW1lbnRUeXBlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2RDdXJyZW5jeVwiOiBcIkVVUlwiLFxyXG4gICAgICAgIFwibnVtZXJpY1NlbmRlclJlZmVyZW5jZVwiOiA0NDgsXHJcbiAgICAgICAgXCJudW1iZXJPZlBhcmNlbHNcIjogMjAsXHJcbiAgICAgICAgXCJ3ZWlnaHRLR1wiOiAxXHJcbiAgICB9LFxyXG4gICAgXCJpc0xhYmVsUmVxdWlyZWRcIjogMSxcclxuICAgIFwibGFiZWxQYXJhbWV0ZXJzXCI6IHtcclxuICAgICAgICBcIm91dHB1dFR5cGVcIjogXCJQREZcIixcclxuICAgICAgICBcIm9mZnNldFhcIjogMCxcclxuICAgICAgICBcIm9mZnNldFlcIjogMCxcclxuICAgICAgICBcImlzQm9yZGVyUmVxdWlyZWRcIjogXCJOXCIsXHJcbiAgICAgICAgXCJpc0xvZ29SZXF1aXJlZFwiOiBcIk5cIixcclxuICAgICAgICBcImlzQmFyY29kZUNvbnRyb2xSb3dSZXF1aXJlZFwiOiBcIk5cIlxyXG5cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZGVsZXRlUmVxQm9keSA9IHtcclxuICAgIFwiYWNjb3VudFwiOiB7XHJcbiAgICAgICAgXCJ1c2VySURcIjogMTAyMDEwMyxcclxuICAgICAgICBcInBhc3N3b3JkXCI6IFwiYnJ0MTQ1MnN0XCJcclxuICAgIH0sXHJcbiAgICBcImRlbGV0ZURhdGFcIjoge1xyXG4gICAgICAgIFwic2VuZGVyQ3VzdG9tZXJDb2RlXCI6IDEwMjAxMDMsXHJcbiAgICAgICAgXCJudW1lcmljU2VuZGVyUmVmZXJlbmNlXCI6IC0xXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERlbGV0ZUJvZHkoKSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkZWxldGVSZXFCb2R5KSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldENyZWF0ZUJvZHkoKSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShib2R5KSlcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGdldENyZWF0ZUJvZHksXHJcbiAgICBnZXREZWxldGVCb2R5LFxyXG59IiwiaW1wb3J0IHsgZ2V0Q3JlYXRlQm9keSB9IGZyb20gXCIuL2JydF9yZXFfYm9keVwiO1xyXG5pbXBvcnQgeyBQcm9jZWR1cmUgfSBmcm9tIFwiLi4vLi4vcHJvY2VkdXJlcy9wcm9jZWR1cmVcIjtcclxuXHJcbmNvbnN0IEFQSV9BTkRfUFJJTlRfUFJPQ19OQU1FID0gJ2NvdXJpZXJfMScgKyAnTEFCRUxfT1JERVInICsgJ19BUElfYW5kX3ByaW50J1xyXG5jb25zdCBMSUZFMzY1X1NZU1RFTV9QUk9DX05BTUUgPSAnY291cmllcl8xJyArICdMQUJFTF9PUkRFUicgKyAnX1VQREFURV9PVVJfU1lTVEVNJ1xyXG5cclxuY29uc3QgRU5DT1VSQUdFTUVOVCA9ICdUaGUgcmVxdWVzdCB3aWxsIGJlIHNhdmVkIGFuZCBkb25lIGFzIHNvb24gYXMgcG9zc2libGUnXHJcbmNvbnN0IFNZU1RFTV9FUlJPUiA9IHsgY29kZTogMSwgbXNnOiAnU3lzdGVtIGVycm9yLiAnICsgRU5DT1VSQUdFTUVOVCB9XHJcbmNvbnN0IFJFUVVFU1RfRVJST1IgPSB7IGNvZGU6IDIsIG1zZzogJ0FwcCBjYW5ub3QgY29udGFjdCB0aGUgc3lzdGVtLiBDaGVjayB5dW9yIGNvbm5lY3Rpb24hICcgKyBFTkNPVVJBR0VNRU5UIH1cclxuXHJcbmNvbnN0IE1BWF9BRERJVElPTiA9IDEwXHJcbmNvbnN0IERFQlVHID0gdHJ1ZVxyXG5cclxuZnVuY3Rpb24gc2hpcE9yZGVyKG9yZGVyLCBpc0FkZGl0aW9uLCBib3gsIGp3dCwgd2hfdXNlcl9pZCwgY19wX2VfQlJUX0FQSSwgY19wX2VfUFJJTlRFUiwgY19wX2NfVVBEQVRFX1NZU1RFTSwgY19wX2VfVVBEQVRFX1NZU1RFTSkge1xyXG4gICAgbGV0IGNyZWF0ZUJvZHkgPSBnZXRDcmVhdGVCb2R5KClcclxuICAgICAgICBjcmVhdGVCb2R5WydjcmVhdGVEYXRhJ11bJ2RlcGFydHVyZURlcG90J10gPSBvcmRlclsnZGVwYXJ0dXJlRGVwb3QnXVxyXG4gICAgICAgIGNyZWF0ZUJvZHlbJ2NyZWF0ZURhdGEnXVsnY29uc2lnbmVlQ29tcGFueU5hbWUnXSA9IG9yZGVyWydzZW5kZXInXVxyXG4gICAgICAgIGNyZWF0ZUJvZHlbJ2NyZWF0ZURhdGEnXVsnY29uc2lnbmVlQWRkcmVzcyddID0gb3JkZXJbJ2FkZHJlc3MnXVxyXG4gICAgICAgIGNyZWF0ZUJvZHlbJ2NyZWF0ZURhdGEnXVsnY29uc2lnbmVlWklQQ29kZSddID0gb3JkZXJbJ3ppcENvZGUnXVxyXG4gICAgICAgIGNyZWF0ZUJvZHlbJ2NyZWF0ZURhdGEnXVsnY29uc2lnbmVlQ2l0eSddID0gb3JkZXJbJ2NpdHknXVxyXG5cclxuICAgICAgICAvL2NoZWNrIGNhc2ggb24gZGVsaXZlcnlcclxuICAgICAgICBpZiAob3JkZXJbJ2lzQ09ETWFuZGF0b3J5J10pIHtcclxuICAgICAgICAgICAgY3JlYXRlQm9keVsnY3JlYXRlRGF0YSddWydjYXNoT25EZWxpdmVyeSddID0gb3JkZXJbJ3RvdGFsJ11cclxuICAgICAgICAgICAgY3JlYXRlQm9keVsnY3JlYXRlRGF0YSddWydJc0NPRE1hbmRhdG9yeSddID0gXCIxXCJcclxuICAgICAgICAgICAgY3JlYXRlQm9keVsnY3JlYXRlRGF0YSddWydjb2RQYXltZW50VHlwZSddID0gb3JkZXJbJ2lzQ2hlY2snXSA/ICdPTScgOiBcIlwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBuU1IgPSBnZXROdW1lcmljU2VuZGVyUmVmZXJlbmNlKGlzQWRkaXRpb24sIG9yZGVyKVxyXG4gICAgICAgIGNvbnN0IHNoaXBtZW50X3dlaWdodCA9IGdldFNoaXBtZW50V2VpZ2h0KGlzQWRkaXRpb24sIG9yZGVyKVxyXG5cclxuICAgICAgICBjcmVhdGVCb2R5WydjcmVhdGVEYXRhJ11bJ251bWVyaWNTZW5kZXJSZWZlcmVuY2UnXSA9IG5TUlxyXG4gICAgICAgIGNyZWF0ZUJvZHlbJ2NyZWF0ZURhdGEnXVsnd2VpZ2h0S0cnXSA9IHNoaXBtZW50X3dlaWdodFxyXG5cclxuICAgICAgICBjcmVhdGVCb2R5WydjcmVhdGVEYXRhJ11bJ251bWJlck9mUGFyY2VscyddID0gIWlzQWRkaXRpb24gPyBib3hbJ2N1cnJlbnQnXSA6IGJveFsndG9BZGQnXVxyXG4gICAgXHJcbiAgICAgICAgY2hlY2tQcmludGVyU2VydmljZUFjdGl2ZSgpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBjb25zdCBBUElfYW5kX3ByaW50ID0gbmV3IFByb2NlZHVyZSgnY291cmllcl8xJywgQVBJX0FORF9QUklOVF9QUk9DX05BTUUsXHJcbiAgICAgICAgICAgIHsgc2F2ZVByb2NlZHVyZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlT3VyU3lzdGVtKG5TUiwgYm94LCBvcmRlciwgc2hpcG1lbnRfd2VpZ2h0LCB3aF91c2VyX2lkLCBqd3QsIGlzQWRkaXRpb24sIGNfcF9jX1VQREFURV9TWVNURU0sIGNfcF9jX1VQREFURV9TWVNURU0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChwcm9jZWR1cmUsIGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvY2VkdXJlLmN1cnJlbnRTdGVwID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjX3BfZV9CUlRfQVBJKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLSBlcnJvcmUgZGkgc3RhbXBhIC0tLScpXHJcbiAgICAgICAgICAgICAgICAgICAgY19wX2VfUFJJTlRFUihlcnJvcilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIEFQSV9hbmRfcHJpbnQuYWRkUHJvY2VkdXJlU3RlcHMoW3tcclxuICAgICAgICAgICAgZjogKHBhcmFtcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmJydC5pdC9yZXN0L3YxL3NoaXBtZW50cy9zaGlwbWVudGAsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJ2h0dHBzOi8vYXBpLmJydC5pdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcyc6ICdHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBPUFRJT05TJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMuYm9keSlcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhWydjcmVhdGVSZXNwb25zZSddWydleGVjdXRpb25NZXNzYWdlJ11bJ2NvZGUnXSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZWxzZSAnLCBkYXRhWydjcmVhdGVSZXNwb25zZSddWydleGVjdXRpb25NZXNzYWdlJ11bJ2NvZGVEZXNjJ10gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlT3VyU3lzdGVtKG5TUnNfZGVsZXRlZCwgb3JkZXIsIHVuZGVmaW5lZCwgand0LCBjX3BfZV9VUERBVEVfU1lTVEVNLCBjX3BfY19VUERBVEVfU1lTVEVNKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjX2ZfZV9CUlRfQVBJKGAke2RhdGFbJ2NyZWF0ZVJlc3BvbnNlJ11bJ2V4ZWN1dGlvbk1lc3NhZ2UnXVsnY29kZURlc2MnXX0sICR7ZGF0YVsnZGVsZXRlUmVzcG9uc2UnXVsnZXhlY3V0aW9uTWVzc2FnZSddWydtZXNzYWdlJ119YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3JlIHBhcnNpbmcganNvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tIEJSVCBub24gcmFnZ2l1bmdpYmlsZSAtLS0nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYXJhbXM6IHsgYm9keTogY3JlYXRlQm9keSB9LFxyXG4gICAgICAgICAgICBpc0FzeW5jOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmOiAocGFyYW1zLCBwcmV2X3N0ZXBfcmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0gUFJJTlRJTkcgLS0tJywgcHJldl9zdGVwX3JlcylcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcHJldl9zdGVwX3Jlc1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tIERBVEkgLS0tLScpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogZGF0YVsnY3JlYXRlUmVzcG9uc2UnXVsnbGFiZWxzJ11bJ2xhYmVsJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0aW5nQm94OiBpc0FkZGl0aW9uID8gb3JkZXJbJ2JveF9uJ10gOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcklkOiBwYXJhbXMub3JkZXJJZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhiKVxyXG4gICAgICAgICAgICAgICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDEvbGFiZWxfd3JpdGVyXzQ1MC9wcmludFBERicsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUklTVUxUQVRPIFNUQU1QQScsIHJlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2JhZ2xpYXRhIHN0YW1wYScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0YW1wYSBzYmFnbGlhdGEnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGFyYW1zOiB7b3JkZXJJZDogb3JkZXJbJ2lkJ10gfSxcclxuICAgICAgICAgICAgaXNBc3luYzogdHJ1ZSxcclxuICAgICAgICB9XSlcclxuICAgICAgICBBUElfYW5kX3ByaW50LmV4ZWN1dGUoKVxyXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgY19wX2VfUFJJTlRFUignUFJJTlRFUiBTRVJWSUNFIE5PVCBBQ1RJVkUnKVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tQcmludGVyU2VydmljZUFjdGl2ZSgpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS9sYWJlbF93cml0ZXJfNDUwLycsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7IHJlamVjdCgpIH1cclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4gcmVqZWN0KGVycikpXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVPdXJTeXN0ZW0oblNSLCBib3gsIG9yZGVyLCB3ZWlnaHQsIHdoX3VzZXJfaWQsIGp3dCwgaXNBZGRpdGlvbiwgY19wX2VfVVBEQVRFX1NZU1RFTSwgY19wX2NfVVBEQVRFX1NZU1RFTSkge1xyXG4gICAgY29uc29sZS5sb2coJy0tLS0gUHJvY2VkdXJhIGRpIGFnZ2lvcm5hbWVudG8gZGVpIG5vc3RyaSBzaXN0ZW1pIC0tLS0nKVxyXG4gICAgY29uc3Qgc2hpcG1lbnRfZGF0YSA9IGNyZWF0ZU5ld1NoaXBtZW50RGF0YShvcmRlciwgblNSLCB3ZWlnaHQsIGJveCwgaXNBZGRpdGlvbilcclxuICAgIGNvbnN0IGxvZ2lzdGljX3N0YXRlID0gIWlzQWRkaXRpb24gPyAnTEFCRUxMRUQnIDogdW5kZWZpbmVkXHJcbiAgICBjb25zb2xlLmxvZygnZXJyb3JlIGFnZ2lvcm5hbWVudG8gc2lzdGVtaSBmdW56aW9uZScsIGNfcF9lX1VQREFURV9TWVNURU0pXHJcbiAgICBjb25zdCBsaWZlMzY1X3N5c3RlbSA9IG5ldyBQcm9jZWR1cmUoJ2NvdXJpZXJfMScsIExJRkUzNjVfU1lTVEVNX1BST0NfTkFNRSxcclxuICAgICAgICB7IHJlZG9fZnJvbV90aGVfYmVnaW5uaWduOiBmYWxzZSB9LFxyXG4gICAgICAgICgpID0+IHsgY29uc29sZS5sb2coJ1BST0NFRFVSQSBURVJNSU5BVEEgQ09SUkVUVEFNRU5URScpOyBjX3BfY19VUERBVEVfU1lTVEVNKCkgfSxcclxuICAgICAgICAocHJvY2VkdXJlLCBlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUFJPQ0VEVVJBIENPTiBFUlJPUkUnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY19wX2VfVVBEQVRFX1NZU1RFTSkgXHJcbiAgICAgICAgICAgIGNfcF9lX1VQREFURV9TWVNURU0oKVxyXG4gICAgICAgIH1cclxuICAgIClcclxuXHJcbiAgICBuZXcgUHJvY2VkdXJlKClcclxuXHJcbiAgICBsZXQgbGlmZTM2NV9zeXN0ZW1fc3RlcHMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmOiAocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveF9uOiBwYXJhbXMuYm94X24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBtZW50X2RhdGE6IHBhcmFtcy5zaGlwbWVudF9kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmxvZ2lzdGljX3N0YXRlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5Wydsb2dpc3RpY19zdGF0ZSddID0gcGFyYW1zLmxvZ2lzdGljX3N0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCT0RZJylcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhib2R5KVxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc3QgcmVxdWVzdCA9ICFwYXJhbXMuREVCVUcgfHwgcGFyYW1zLkRFQlVHID09IHVuZGVmaW5lZCA/IGAke3BhcmFtcy5vcmRlckVkaXQucmVwbGFjZShcIi0xXCIsIHBhcmFtcy5vcmRlcl9pZCl9P2p3dD0ke3BhcmFtcy5qd3R9YCA6IGAke3BhcmFtcy5vcmRlckVkaXQucmVwbGFjZShcIi0xXCIsIHBhcmFtcy5vcmRlcl9pZCl9L2RlYnVnP2p3dD0ke3BhcmFtcy5qd3R9YFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBgJHtwYXJhbXMub3JkZXJFZGl0LnJlcGxhY2UoXCItMVwiLCBwYXJhbXMub3JkZXJfaWQpfT9qd3Q9JHtwYXJhbXMuand0fWBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXRob2QgPSAnUFVUJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sLCByZWopID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2gocmVxdWVzdCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbigocmVzcG9zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3Bvc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tIFNldHRlZCBvcmRlcicsIHBhcmFtcy5sb2dpc3RpY19zdGF0ZSwgJyAtLS0nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlaigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzb2x2ZSgpKS5jYXRjaChlcnIgPT4gcmVqZWN0KGVycikpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIG9yZGVyX2lkOiBvcmRlclsnaWQnXSxcclxuICAgICAgICAgICAgICAgIGJveF9uOiAhaXNBZGRpdGlvbiA/IGJveFsnY3VycmVudCddIDogb3JkZXJbJ2JveF9uJ10gKyBib3hbJ3RvQWRkJ10sXHJcbiAgICAgICAgICAgICAgICBqd3Q6IGp3dCxcclxuICAgICAgICAgICAgICAgIG9yZGVyRWRpdDogT1JERVJfRURJVCxcclxuICAgICAgICAgICAgICAgIHNoaXBtZW50X2RhdGE6IHNoaXBtZW50X2RhdGEsXHJcbiAgICAgICAgICAgICAgICBsb2dpc3RpY19zdGF0ZTogbG9naXN0aWNfc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBTWVNURU1fRVJST1I6IFNZU1RFTV9FUlJPUixcclxuICAgICAgICAgICAgICAgIFJFUVVFU1RfRVJST1I6IFJFUVVFU1RfRVJST1IsXHJcbiAgICAgICAgICAgICAgICBERUJVRzogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaXNBc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgcmVkbzogeyB0aW1lOiAzLCB0aW1lb3V0OiAyMDAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxuXHJcbiAgICAvL2NoaWVkaSBhIEdpYW5jYSBzZSB0dXR0ZSBsZSB2b2x0ZSBjaGUgdmllbmUgZmF0dGEgdW4nb3BlcmF6aW9uZSBiaXNvZ25hIHNldHRhcmUgbCd1dGVudGVcclxuICAgIGlmICh3aF91c2VyX2lkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGxpZmUzNjVfc3lzdGVtX3N0ZXBzLnB1c2goXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGY6IChwYXJhbXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zdCByZXF1ZXN0ID0gIXBhcmFtcy5ERUJVRyA/IGAke3BhcmFtcy5TRVRfV0hPX01BS0VfVEhFX0RFTElWRVJZfT9qd3Q9JHtwYXJhbXMuand0fWAgOiBgJHtwYXJhbXMuU0VUX1dIT19NQUtFX1RIRV9ERUxJVkVSWX0vZGVidWc/and0PSR7cGFyYW1zLmp3dH1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBgJHtwYXJhbXMuU0VUX1dIT19NQUtFX1RIRV9ERUxJVkVSWX0/and0PSR7cGFyYW1zLmp3dH1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1ldGhvZCA9ICdQT1NUJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyOiBwYXJhbXMud2hfdXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyX2lkOiBwYXJhbXMub3JkZXJfaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sLCByZWopID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKHJlcXVlc3QsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChyZXNwb3NlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3Bvc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0gU2V0dGVkIHdobyBtYWtlIGRlbGl2ZXIgLS0tJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2woKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlaihwYXJhbXMuU1lTVEVNX0VSUk9SKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWoocGFyYW1zLlJFUVVFU1RfRVJST1IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiByZXNvbHZlKCkpLmNhdGNoKGVyciA9PiByZWplY3QoZXJyKSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoX3VzZXJfaWQ6IHdoX3VzZXJfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgU0VUX1dIT19NQUtFX1RIRV9ERUxJVkVSWTogU0VUX1dIT19NQUtFX1RIRV9ERUxJVkVSWSxcclxuICAgICAgICAgICAgICAgICAgICBvcmRlcl9pZDogb3JkZXJbJ2lkJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgand0OiBqd3QsXHJcbiAgICAgICAgICAgICAgICAgICAgU1lTVEVNX0VSUk9SOiBTWVNURU1fRVJST1IsXHJcbiAgICAgICAgICAgICAgICAgICAgUkVRVUVTVF9FUlJPUjogUkVRVUVTVF9FUlJPUixcclxuICAgICAgICAgICAgICAgICAgICBERUJVRzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpc0FzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcmVkbzogeyB0aW1lOiAzLCB0aW1lb3V0OiAyMDAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghaXNBZGRpdGlvbikge1xyXG4gICAgICAgIGxpZmUzNjVfc3lzdGVtX3N0ZXBzLnB1c2goe1xyXG4gICAgICAgICAgICBmOiAocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0gc2V0IG9yZGVyIElOLVRSQU5TSVQgLS0tJylcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dpc3RpY19zdGF0ZTogcGFyYW1zLmxvZ2lzdGljX3N0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc3QgcmVxdWVzdCA9ICFwYXJhbXMuREVCVUcgfHwgcGFyYW1zLkRFQlVHID09IHVuZGVmaW5lZCA/IGAke3BhcmFtcy5vcmRlckVkaXQucmVwbGFjZShcIi0xXCIsIHBhcmFtcy5vcmRlcl9pZCl9P2p3dD0ke3BhcmFtcy5qd3R9YCA6IGAke3BhcmFtcy5vcmRlckVkaXQucmVwbGFjZShcIi0xXCIsIHBhcmFtcy5vcmRlcl9pZCl9L2RlYnVnP2p3dD0ke3BhcmFtcy5qd3R9YFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBgJHtwYXJhbXMub3JkZXJFZGl0LnJlcGxhY2UoXCItMVwiLCBwYXJhbXMub3JkZXJfaWQpfT9qd3Q9JHtwYXJhbXMuand0fWBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXRob2QgPSAnUFVUJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sLCByZWopID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2gocmVxdWVzdCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbigocmVzcG9zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3Bvc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tIFNldHRlZCBvcmRlcicsIHBhcmFtcy5sb2dpc3RpY19zdGF0ZSwgJyAtLS0nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlaigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzb2x2ZSgpKS5jYXRjaChlcnIgPT4gcmVqZWN0KGVycikpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIG9yZGVyX2lkOiBvcmRlclsnaWQnXSxcclxuICAgICAgICAgICAgICAgIGp3dDogand0LFxyXG4gICAgICAgICAgICAgICAgb3JkZXJFZGl0OiBPUkRFUl9FRElULFxyXG4gICAgICAgICAgICAgICAgbG9naXN0aWNfc3RhdGU6ICdJTi1UUkFOU0lUJyxcclxuICAgICAgICAgICAgICAgIFNZU1RFTV9FUlJPUjogU1lTVEVNX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgUkVRVUVTVF9FUlJPUjogUkVRVUVTVF9FUlJPUixcclxuICAgICAgICAgICAgICAgIERFQlVHOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpc0FzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICByZWRvOiB7IHRpbWU6IDMsIHRpbWVvdXQ6IDIwMCB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGxpZmUzNjVfc3lzdGVtLmFkZFByb2NlZHVyZVN0ZXBzKGxpZmUzNjVfc3lzdGVtX3N0ZXBzKVxyXG4gICAgbGlmZTM2NV9zeXN0ZW0uZXhlY3V0ZSgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE51bWVyaWNTZW5kZXJSZWZlcmVuY2UoaXNBZGRpdGlvbiwgb3JkZXIpIHtcclxuICAgIGlmIChERUJVRykge1xyXG4gICAgICAgIGxldCBuc3JscyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbnVtZXJpY1NlbmRlclJlZmVyZW5jZScpXHJcbiAgICAgICAgaWYgKG5zcmxzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBuc3JscyA9IHBhcnNlSW50KG5zcmxzKVxyXG4gICAgICAgICAgICBsZXQgaWQgPSBuc3Jsc1xyXG4gICAgICAgICAgICBuc3JscyA9IG5zcmxzICsgMVxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ251bWVyaWNTZW5kZXJSZWZlcmVuY2UnLCBuc3JscylcclxuICAgICAgICAgICAgaWYgKCFpc0FkZGl0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaWQgKiBNQVhfQURESVRJT05cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZfYWRkaXRpb24gPSBvcmRlclsnc2hpcG1lbnRfZGF0YSddWydCUlQnXS5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3JkZXJbJ3NoaXBtZW50X2RhdGEnXVsnQlJUJ11bMF1bJ25TUiddICogTUFYX0FERElUSU9OICsgcHJldl9hZGRpdGlvbiArIDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbnVtZXJpY1NlbmRlclJlZmVyZW5jZScsIDEzKVxyXG4gICAgICAgICAgICByZXR1cm4gMTNcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghaXNBZGRpdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gb3JkZXJbJ2lkJ10gKiBNQVhfQURESVRJT05cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBwcmV2X2FkZGl0aW9uID0gb3JkZXJbJ3NoaXBtZW50X2RhdGEnXVsnQlJUJ10ubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICByZXR1cm4gb3JkZXJbJ2lkJ10gKiBNQVhfQURESVRJT04gKyBwcmV2X2FkZGl0aW9uICsgMVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5jb25zdCBERUJVR193ID0gdHJ1ZVxyXG5mdW5jdGlvbiBnZXRTaGlwbWVudFdlaWdodChpc0FkZGl0aW9uLCBvcmRlcikge1xyXG4gICAgaWYoREVCVUdfdykgcmV0dXJuIDFcclxuICAgIGlmICghaXNBZGRpdGlvbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvcmRlciB3ZWlnaHQnLCBvcmRlclsnd2VpZ2h0J10pXHJcbiAgICAgICAgcmV0dXJuIG9yZGVyWyd3ZWlnaHQnXVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgcHJldl9zaGlwbWVudF93ZWlnaHQgPSAwXHJcbiAgICAgICAgb3JkZXJbJ3NoaXBtZW50X2RhdGEnXVsnQlJUJ10uZm9yRWFjaChzZCA9PiB7XHJcbiAgICAgICAgICAgIHByZXZfc2hpcG1lbnRfd2VpZ2h0ICs9IHNkWyd3ZWlnaHQnXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvcmRlciB3ZWlnaHQgYWRkaXRpb24nLCAob3JkZXJbJ3dlaWdodCddIC0gcHJldl9zaGlwbWVudF93ZWlnaHQpKVxyXG4gICAgICAgIHJldHVybiBvcmRlclsnd2VpZ2h0J10gLSBwcmV2X3NoaXBtZW50X3dlaWdodFxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOZXdTaGlwbWVudERhdGEob3JkZXIsIG5TUiwgd2VpZ2h0LCBib3gsIGlzQWRkaXRpb24pIHtcclxuICAgIGxldCByZXN1bHQgPSB7QlJUOltdfVxyXG4gICAgaWYgKG9yZGVyWydzaGlwbWVudF9kYXRhJ10gIT0gbnVsbCAmJiBvcmRlclsnc2hpcG1lbnRfZGF0YSddICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJlc3VsdCA9IG9yZGVyWydzaGlwbWVudF9kYXRhJ11cclxuICAgICAgICBpZiAob3JkZXJbJ3NoaXBtZW50X2RhdGEnXVsnQlJUJ10gPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXN1bHRbJ0JSVCddID0gW11cclxuICAgIH1cclxuICAgIHJlc3VsdFsnQlJUJ10ucHVzaCh7XHJcbiAgICAgICAgblNSOiBuU1IsXHJcbiAgICAgICAgd2VpZ2h0OiB3ZWlnaHQsXHJcbiAgICAgICAgYm94X246ICFpc0FkZGl0aW9uID8gYm94WydjdXJyZW50J10gOiBib3hbJ3RvQWRkJ10sXHJcbiAgICAgICAgZGF0ZTogRGF0ZS5ub3coKVxyXG4gICAgfSlcclxuICAgIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuZXhwb3J0IHsgc2hpcE9yZGVyIH0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSXRhVXRpbHMgZnJvbSAnLi4vdXRpbHMnXHJcbmltcG9ydCB7IHVuZG9EZWxpdmVyeSB9IGZyb20gXCIuL3VuZG9fZGVsaXZlcnlcIjtcclxuaW1wb3J0IHsgc2hpcE9yZGVyIH0gZnJvbSBcIi4vY3JlYXRlX3NwZWRpdGlvblwiO1xyXG5cclxuY29uc3QgQUREX0JPWF9CVE5fSUQgPSAnYWRkX2JveF9idG5faWQnXHJcbmNvbnN0IEFERF9CT1hfQlROX0xBQkVMID0gJ0FkZCBib3hlcydcclxuXHJcbmNvbnN0IFJFUFJJTlRfQlROX0lEID0gJ3JlcHJpbnRfYnRuX2lkJ1xyXG5jb25zdCBSRVBSSU5UX0JUTl9MQUJFTCA9ICdSZXByaW50IGxhYmVscydcclxuXHJcbmNvbnN0IFVORE9fQlROX0lEID0gJ3VuZG9fYnRuX2lkJ1xyXG5jb25zdCBVTkRPX0JUTl9MQUJFTCA9ICdVbmRvIE9yZGVyJ1xyXG5cclxuY29uc3QgQUREX0JPWF9JTlBVVF9JRCA9ICdhZGRfYm94X2lucHV0J1xyXG5cclxuY29uc3QgQ2FyZCA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgY29uc3QgbkJveFRvQWRkID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgY3VycmVudEJveCA9IFJlYWN0LnVzZVJlZihudWxsKVxyXG4gICAgY29uc3QgW2RvaW5nU29tZU9wZXJhdGlvbiwgc2V0RG9pbmdTb21lT3BlcmF0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW25lZWRDb3JyZWN0aW9uLCBzZXROZWVkQ29ycmVjdGlvbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGN1cnJlbnRCb3guY3VycmVudC52YWx1ZSA9IHByb3BzWydvcmRlciddWydib3hfbiddXHJcbiAgICAgICAgbkJveFRvQWRkLmN1cnJlbnQuZm9jdXMoKVxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgY29uc3QgZGlzYWJsZUJ1dHRvbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoQUREX0JPWF9CVE5fSUQpLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIilcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChSRVBSSU5UX0JUTl9JRCkuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFVORE9fQlROX0lEKS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU3RhcnRpbmdPcGVyYXRpb24ocGFyYW1zKSB7XHJcbiAgICAgICAgc2V0RG9pbmdTb21lT3BlcmF0aW9uKHRydWUpXHJcbiAgICAgICAgZGlzYWJsZUJ1dHRvbnMoKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUVuZGluZ09wZXJhdGlvbihwYXJhbXMpIHtcclxuICAgICAgICBzZXREb2luZ1NvbWVPcGVyYXRpb24oZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQWRkQm94SW5wdXRPaygpIHtcclxuICAgICAgICBzZXROZWVkQ29ycmVjdGlvbihmYWxzZSlcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChBRERfQk9YX0lOUFVUX0lEKS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaW52YWxpZFwiKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUFkZEJveElucHV0Tm90T2soKSB7XHJcbiAgICAgICAgc2V0TmVlZENvcnJlY3Rpb24odHJ1ZSlcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChBRERfQk9YX0lOUFVUX0lEKS5jbGFzc0xpc3QuYWRkKFwiaXMtaW52YWxpZFwiKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrSW5wdXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ24gYm94IHZhbHVlID4gMCcsIG5Cb3hUb0FkZC5jdXJyZW50LnZhbHVlID4gMClcclxuICAgICAgICByZXR1cm4gbkJveFRvQWRkLmN1cnJlbnQudmFsdWUgPiAwXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IHVuZG9EZWxpdmVyID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBoYW5kbGVTdGFydGluZ09wZXJhdGlvbigpXHJcbiAgICAgICAgY29uc3QgblNScyA9IHByb3BzWydvcmRlciddWydzaGlwbWVudF9kYXRhJ11bJ0JSVCddLm1hcChzID0+IHNbJ25TUiddKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tIFVORE8gLS0tLScpXHJcbiAgICAgICAgY29uc29sZS5sb2coblNScylcclxuICAgICAgICB1bmRvRGVsaXZlcnkoblNScywgcHJvcHNbJ29yZGVyJ10sIHByb3BzWyd0b2tlbiddWydqd3QnXSwgY2xvc2VCUlRBUElQcm9jZWR1cmVFcnJvciwgY2xvc2VQcm9jZWR1cmVFcnJvclVwZGF0ZVN5c3RlbSwgY2xvc2VQcm9jZWR1cmVDb3JyZWN0bHlVcGRhdGVTeXN0ZW0sIDAsICgpID0+IHt9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEJveGVzKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBpZihjaGVja0lucHV0KCkpe1xyXG4gICAgICAgICAgICBpZihuZWVkQ29ycmVjdGlvbil7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVBZGRCb3hJbnB1dE9rKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoYW5kbGVTdGFydGluZ09wZXJhdGlvbigpXHJcbiAgICAgICAgICAgIGNvbnN0IHdoX3VzZXJfaWQgPSBTRVRfV0hPX01BS0VfVEhFX0RFTElWRVJZID8gcHJvcHNbJ3doX3VzZXJfaWQnXSA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICBjb25zdCBib3ggPSB7IGN1cnJlbnQ6IHBhcnNlSW50KGN1cnJlbnRCb3guY3VycmVudC52YWx1ZSksIHRvQWRkOiBwYXJzZUludChuQm94VG9BZGQuY3VycmVudC52YWx1ZSkgfVxyXG4gICAgICAgICAgICBzaGlwT3JkZXIocHJvcHNbJ29yZGVyJ10sIHRydWUsIGJveCwgcHJvcHNbJ3Rva2VuJ11bJ2p3dCddLCB3aF91c2VyX2lkLCBjbG9zZUJSVEFQSVByb2NlZHVyZUVycm9yLCBjbG9zZVByaW50ZXJQcm9jZWR1cmVFcnJvciwgY2xvc2VQcm9jZWR1cmVDb3JyZWN0bHlVcGRhdGVTeXN0ZW0sIGNsb3NlUHJvY2VkdXJlRXJyb3JVcGRhdGVTeXN0ZW0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGFuZGxlQWRkQm94SW5wdXROb3RPaygpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBjbG9zZUJSVEFQSVByb2NlZHVyZUVycm9yID0gZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgIGNvbnN0IEFQSV9FUlJPUiA9IFwiRVJST1IgSU4gQlJUIENPTU1VTklDQVRJT046IFwiICsgZXJyXHJcbiAgICAgICAgcHJvcHNbJ3Nob3dFcnJvciddKEFQSV9FUlJPUilcclxuICAgICAgICBoYW5kbGVFbmRpbmdPcGVyYXRpb24oKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3NlUHJpbnRlclByb2NlZHVyZUVycm9yID0gZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgIGNvbnN0IFBSSU5UX0VSUk9SID0gXCJFUlJPUl9QUklOVElORzogXCIgKyBlcnJcclxuICAgICAgICBwcm9wc1snc2hvd0Vycm9yJ10oUFJJTlRfRVJST1IpXHJcbiAgICAgICAgaGFuZGxlRW5kaW5nT3BlcmF0aW9uKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zZVByb2NlZHVyZUNvcnJlY3RseVVwZGF0ZVN5c3RlbSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xvc2VQcm9jZWR1cmVFcnJvclVwZGF0ZVN5c3RlbSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL1Byb2NlZHVyZSBpcyBzYXZlZCBhbmQgZG8gaW4gdGhlIG5leHQgZnV0dXJlXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVwcmludChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc3QgQ0FOX1RfUkVQUklOVF9USEVfTEFCRUwgPSBcIkNBTidUIFJFUFJJTlQgVEhFIExBQkVMXCJcclxuXHJcbiAgICAgICAgaGFuZGxlU3RhcnRpbmdPcGVyYXRpb24oKVxyXG4gICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDEvbGFiZWxfd3JpdGVyXzQ1MC9yZXByaW50UERGJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG9yZGVySWQ6IHByb3BzWydvcmRlciddWydpZCddIH0pXHJcbiAgICAgICAgfSkudGhlbigocmVzcG9zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wc1snc2hvd0Vycm9yJ10oQ0FOX1RfUkVQUklOVF9USEVfTEFCRUwpXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVFbmRpbmdPcGVyYXRpb24oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1JFIERJIEZFVENIJylcclxuICAgICAgICAgICAgcHJvcHNbJ3Nob3dFcnJvciddKENBTl9UX1JFUFJJTlRfVEhFX0xBQkVMICsgZXJyKVxyXG4gICAgICAgICAgICBoYW5kbGVFbmRpbmdPcGVyYXRpb24oKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRvUHJpbnQgPSBwcm9wc1snaW5mbyddICE9IG51bGwgPyBgJHtwcm9wc1snaW5mbyddWydvcmRlcl9zdGF0ZSddfSBvbiAke3Byb3BzWydpbmZvJ11bJ29yZGVyX2RhdGVfY2hhbmdlJ119YCA6IFwiXCJcclxuICAgIGlmIChwcm9wc1snaW5mbyddWydvcmRlcl9zdGF0ZSddID09ICdERUxJVkVSRUQnKSB0b1ByaW50ID0gdG9QcmludCArIGAgd2l0aCAke3Byb3BzWydvcmRlciddWydib3hfbiddfSBwYWNrYWdlc2BcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLWZsdWlkJz5cclxuICAgICAgICAgICAgPHA+e3RvUHJpbnR9PC9wPlxyXG4gICAgICAgICAgICA8Zm9ybSBpZD1cInByaW50X2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1yb3cgY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMiBtdC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5DdXJyZW50IGJveGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMFwiIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnIH19IHN0ZXA9XCIxXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgIHBsYWNlaG9sZGVyPXtgIEN1cnIgYm94ZXMgJHtwcm9wc1snb3JkZXInXVsnYm94X24nXX0gYH0gcmVmPXtjdXJyZW50Qm94fSBkaXNhYmxlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTIgbXQtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+IEJveCB0byBhZGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49XCIwXCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScgfX0gc3RlcD1cIjFcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD17QUREX0JPWF9JTlBVVF9JRH0gcmVmPXtuQm94VG9BZGR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMiBtdC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9e0FERF9CT1hfQlROX0lEfSB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiIHN0eWxlPXt7aGVpZ2h0OlwiMTAwJVwifX0gb25DbGljaz17YWRkQm94ZXN9PntBRERfQk9YX0JUTl9MQUJFTH08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yIG10LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD17UkVQUklOVF9CVE5fSUR9IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIgc3R5bGU9e3toZWlnaHQ6XCIxMDAlXCJ9fSBvbkNsaWNrPXtyZXByaW50fT57UkVQUklOVF9CVE5fTEFCRUx9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMiBtdC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9e1VORE9fQlROX0lEfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLWJsb2NrXCIgc3R5bGU9e3toZWlnaHQ6XCIxMDAlXCJ9fSBvbkNsaWNrPXt1bmRvRGVsaXZlcn0+e1VORE9fQlROX0xBQkVMfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgY29sLW1kLTIgbXQtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItYm9yZGVyIHRleHQtc2Vjb25kYXJ5IFwiIHN0eWxlPXtkb2luZ1NvbWVPcGVyYXRpb24gPyB7fSA6IHsgZGlzcGxheTogXCJub25lXCIgfX0gcm9sZT1cInN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCB7IENhcmQgfSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHNoaXBPcmRlciB9IGZyb20gXCIuL2NyZWF0ZV9zcGVkaXRpb25cIjtcclxuXHJcblxyXG5jb25zdCBCVVRUT05fTEFCRUwgPSBcIlByaW50IGxhYmVsXCJcclxuY29uc3QgQlVUVE9OX0lEID0gXCJzdWJtaXRfYnV0dG9uXCJcclxuXHJcbmNvbnN0IEJPWF9JRCA9IFwiaW5wdXRfYm94X2lkXCJcclxuXHJcblxyXG5jb25zdCBDYXJkID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICBjb25zdCBuUGFja2FnZXNJbnB1dCA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFtkb2luZ1NvbWVPcGVyYXRpb24sIHNldERvaW5nU29tZU9wZXJhdGlvbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtuZWVkQ29ycmVjdGlvbiwgc2V0TmVlZENvcnJlY3Rpb25dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBuUGFja2FnZXNJbnB1dC5jdXJyZW50LmZvY3VzKClcclxuICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChCT1hfSUQpKVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBkaXNhYmxlQnV0dG9ucyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChCVVRUT05fSUQpLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIilcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsYWJlbCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgaWYgKGNoZWNrSW5wdXQoKSkge1xyXG4gICAgICAgICAgICBpZiAobmVlZENvcnJlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZUFkZEJveElucHV0T2soKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhhbmRsZVN0YXJ0aW5nT3BlcmF0aW9uKClcclxuICAgICAgICAgICAgY29uc3Qgd2hfdXNlcl9pZCA9IFNFVF9XSE9fTUFLRV9USEVfREVMSVZFUlkgPyBwcm9wc1snd2hfdXNlcl9pZCddIDogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIGNvbnN0IGJveCA9IHsgY3VycmVudDogcGFyc2VJbnQoblBhY2thZ2VzSW5wdXQuY3VycmVudC52YWx1ZSkgfVxyXG4gICAgICAgICAgICBzaGlwT3JkZXIocHJvcHNbJ29yZGVyJ10sIGZhbHNlLCBib3gsIHByb3BzWyd0b2tlbiddWydqd3QnXSwgd2hfdXNlcl9pZCwgY2xvc2VCUlRBUElQcm9jZWR1cmVFcnJvciwgY2xvc2VQcmludGVyUHJvY2VkdXJlRXJyb3IsIGNsb3NlUHJvY2VkdXJlQ29ycmVjdGx5VXBkYXRlU3lzdGVtLCBjbG9zZVByb2NlZHVyZUVycm9yVXBkYXRlU3lzdGVtKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOb24gc2kgZXRpY2hldHRhJylcclxuICAgICAgICAgICAgaGFuZGxlQWRkQm94SW5wdXROb3RPaygpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja0lucHV0KCkge1xyXG4gICAgICAgIHJldHVybiBuUGFja2FnZXNJbnB1dC5jdXJyZW50LnZhbHVlID4gMCBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVBZGRCb3hJbnB1dE9rKCkge1xyXG4gICAgICAgIHNldE5lZWRDb3JyZWN0aW9uKGZhbHNlKVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKEJPWF9JRCkuY2xhc3NMaXN0LnJlbW92ZShcImlzLWludmFsaWRcIilcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVBZGRCb3hJbnB1dE5vdE9rKCkge1xyXG4gICAgICAgIHNldE5lZWRDb3JyZWN0aW9uKHRydWUpXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoQk9YX0lEKS5jbGFzc0xpc3QuYWRkKFwiaXMtaW52YWxpZFwiKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVN0YXJ0aW5nT3BlcmF0aW9uKHBhcmFtcykge1xyXG4gICAgICAgIHNldERvaW5nU29tZU9wZXJhdGlvbih0cnVlKVxyXG4gICAgICAgIGRpc2FibGVCdXR0b25zKClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVFbmRpbmdPcGVyYXRpb24ocGFyYW1zKSB7XHJcbiAgICAgICAgc2V0RG9pbmdTb21lT3BlcmF0aW9uKGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3NlQlJUQVBJUHJvY2VkdXJlRXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgY29uc3QgQVBJX0VSUk9SID0gXCJFUlJPUiBJTiBCUlQgQ09NTVVOSUNBVElPTlwiICsgZXJyXHJcbiAgICAgICAgcHJvcHNbJ3Nob3dFcnJvciddKEFQSV9FUlJPUilcclxuICAgICAgICBoYW5kbGVFbmRpbmdPcGVyYXRpb24oKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3NlUHJpbnRlclByb2NlZHVyZUVycm9yID0gZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgIGNvbnN0IFBSSU5UX0VSUk9SID0gXCJFUlJPUl9QUklOVElORzogXCIgKyBlcnJcclxuICAgICAgICBwcm9wc1snc2hvd0Vycm9yJ10oUFJJTlRfRVJST1IpXHJcbiAgICAgICAgaGFuZGxlRW5kaW5nT3BlcmF0aW9uKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zZVByb2NlZHVyZUNvcnJlY3RseVVwZGF0ZVN5c3RlbSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zZVByb2NlZHVyZUVycm9yVXBkYXRlU3lzdGVtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vUHJvY2VkdXJlIGlzIHNhdmVkIGFuZCBkbyBpbiB0aGUgbmV4dCBmdXR1cmVcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIGlkPVwicHJpbnRfZm9ybVwiIG9uU3VibWl0PXtsYWJlbH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1yb3cgY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yIG10LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9e0JPWF9JRH0gdHlwZT1cIm51bWJlclwiIG1pbj1cIjBcIiBzdGVwPVwiMVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiQm94ZXNcIiByZWY9e25QYWNrYWdlc0lucHV0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zIG10LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPXtCVVRUT05fSUR9IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCI+e0JVVFRPTl9MQUJFTH08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMyBtdC0xXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGNvbC1tZC0xIG10LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItYm9yZGVyIHRleHQtc2Vjb25kYXJ5IFwiIHN0eWxlPXtkb2luZ1NvbWVPcGVyYXRpb24gPyB7fSA6IHsgZGlzcGxheTogXCJub25lXCIgfX0gcm9sZT1cInN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMyBtdC0xXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IENhcmQgfSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJdGFVdGlscyBmcm9tICcuLi91dGlscydcclxuaW1wb3J0IEdlbmVyYWxVdGlscyBmcm9tICcuLi8uLi91dGlscydcclxuaW1wb3J0IHsgQ2FyZCBhcyBMYWJlbCB9IGZyb20gXCIuL2xhYmVsXCI7XHJcbmltcG9ydCB7IENhcmQgYXMgRWRpdCB9IGZyb20gXCIuL2VkaXRcIjtcclxuaW1wb3J0IHsgUHJvY2VkdXJlLCBnZXRTYXZlZFByb2NlZHVyZXMgfSBmcm9tIFwiLi4vLi4vcHJvY2VkdXJlcy9wcm9jZWR1cmVcIjtcclxuXHJcbmNvbnN0IExPR08gPSBcImh0dHBzOi8vc3RhdGljLmxpZmUzNjUuZXUvY29tbW9uL3RlbXBsYXRlLTAyL2ltYWdlcy9jb3VyaWVyL2xvZ29fYnJ0LmpwZ1wiXHJcbmNvbnN0IENPVVJJRVIgPSBcIkJSVFwiXHJcbmNvbnN0IExBQkVMX09SREVSX1BST0NfTkFNRSA9ICdMQUJFTF9PUkRFUidcclxuY29uc3QgU0VUX0JPWEVTX1BST0NfTkFNRSA9ICdTRVRfQk9YRVMnXHJcbmNvbnN0IFVORE9fTEFCRUxfUFJPQ19OQU1FID0gJ1VORE9fTEFCRUwnXHJcbmNvbnN0IFBMVUdJTl9TVEFURSA9IHsgRU1QVFk6IDAsIEVESVQ6IDEsIExBQkVMOiAyIH1cclxuXHJcbmNvbnN0IFBsdWdpbkNhcmQgPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgIGNvbnN0IFtpbmZvLCBzZXRJbmZvXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbYm94X25fc3RhdGUsIHNldEJveE5TdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW3BsdWdpblN0YXRlLCBzZXRQbHVnaW5TdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZShQTFVHSU5fU1RBVEUuRU1QVFkpXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBJdGFVdGlscy5nZXRDdXJyZW50U3RhdGVEYXRlQ2hhbmdlKHByb3BzWydvcmRlciddWydpZCddLCBwcm9wc1sndG9rZW4nXVsnand0J10pXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRJbmZvKHJlc1snaW5mbyddKVxyXG4gICAgICAgICAgICAgICAgaWYgKEl0YVV0aWxzLmNhbkRlbGl2ZXJPcmRlcihwcm9wc1snb3JkZXInXVsnbG9naXN0aWNfc3RhdGUnXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQbHVnaW5TdGF0ZShQTFVHSU5fU1RBVEUuTEFCRUwpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKEl0YVV0aWxzLmNhbkVkaXRPcmRlcihwcm9wc1snb3JkZXInXVsnbG9naXN0aWNfc3RhdGUnXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQbHVnaW5TdGF0ZShQTFVHSU5fU1RBVEUuRURJVClcclxuICAgICAgICAgICAgICAgICAgICBzZXRCb3hOU3RhdGUocHJvcHNbJ29yZGVyJ11bJ2JveF9uJ10pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBsdWdpblN0YXRlKFBMVUdJTl9TVEFURS5FTVBUWSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChlcnIpXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImFsaWduLXNlbGYtc3RhcnQgbXItM1wiIHNyYz17TE9HT30gYWx0PVwiQ291cmllciBsb2dvXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtdC0wXCI+e0NPVVJJRVJ9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3BsdWdpblN0YXRlID09IFBMVUdJTl9TVEFURS5FRElUICYmIDxFZGl0IG9yZGVyPXtHZW5lcmFsVXRpbHMucGFyc2VPcmRlcihwcm9wc1snb3JkZXInXSl9IHRva2VuPXtwcm9wc1sndG9rZW4nXX0gaW5mbz17aW5mb30gc2hvd0Vycm9yPXtwcm9wc1snc2hvd0Vycm9yJ119IGJveF9uPXtib3hfbl9zdGF0ZX0gd2hfdXNlcl9pZD17cHJvcHNbJ3doX3VzZXJfaWQnXX0+PC9FZGl0Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3BsdWdpblN0YXRlID09IFBMVUdJTl9TVEFURS5MQUJFTCAmJiA8TGFiZWwgb3JkZXI9e0dlbmVyYWxVdGlscy5wYXJzZU9yZGVyKHByb3BzWydvcmRlciddKX0gdG9rZW49e3Byb3BzWyd0b2tlbiddfSB3aF91c2VyX2lkPXtwcm9wc1snd2hfdXNlcl9pZCddfSBzaG93RXJyb3I9e3Byb3BzWydzaG93RXJyb3InXX0gPjwvTGFiZWw+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGx1Z2luU3RhdGUgPT0gUExVR0lOX1NUQVRFLkVNUFRZICYmIGluZm8gIT0gbnVsbCA/IDxwPntgJHtpbmZvWydvcmRlcl9zdGF0ZSddfSBvbiAke2luZm9bJ29yZGVyX2RhdGVfY2hhbmdlJ119YH08L3A+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gcmVkb1Byb2NlZHVyZShqd3QpIHtcclxuICAgIGNvbnN0IHNhdmVkUHJvY2VkdXJlcyA9IGdldFNhdmVkUHJvY2VkdXJlcygnY291cmllcl8xJylcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2F2ZWRQcm9jZWR1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHAgPSBzYXZlZFByb2NlZHVyZXNbaV1cclxuICAgICAgICBsZXQgYiA9IG5ldyBQcm9jZWR1cmUocC5hcHBfaWQsIHAucHJvY19uYW1lLFxyXG4gICAgICAgICAgICB7IHJlZG9fZnJvbV9iZWdpbm5pbmc6IHRydWUsIHNhdmVQcm9jZWR1cmU6IHRydWUgfSxcclxuICAgICAgICAgICAgKCkgPT4geyBjb25zb2xlLmxvZyhgLS0tICR7cC5hcHBfaWR9ICR7cC5wcm9jX25hbWV9IGRvbmUgLS0tYCkgfSwgKCkgPT4geyBjb25zb2xlLmxvZyhgLS0tIGVycm9yIGluICR7cC5hcHBfaWR9ICR7cC5wcm9jX25hbWV9IC0tLWApIH0pXHJcbiAgICAgICAgcC5zdGVwcy5mb3JFYWNoKHMgPT4ge1xyXG4gICAgICAgICAgICBzLnBhcmFtcy5qd3QgPSBqd3RcclxuICAgICAgICAgICAgcy5wYXJhbXMuREVCVUcgPSBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYi5hZGRQcm9jZWR1cmVTdGVwcyhwLnN0ZXBzKVxyXG4gICAgICAgIGIuZXhlY3V0ZSgpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHsgUGx1Z2luQ2FyZCwgcmVkb1Byb2NlZHVyZSB9OyIsImltcG9ydCAqIGFzIEl0YVV0aWxzIGZyb20gXCIuLi91dGlsc1wiO1xyXG5pbXBvcnQgeyBnZXREZWxldGVCb2R5IH0gZnJvbSBcIi4vYnJ0X3JlcV9ib2R5XCI7XHJcbmltcG9ydCB7IFByb2NlZHVyZSB9IGZyb20gXCIuLi8uLi9wcm9jZWR1cmVzL3Byb2NlZHVyZVwiO1xyXG5cclxuY29uc3QgdW5kb19sYWJlbF9wcm9jX25hbWUgPSAnVU5ET19MQUJFTF9QUk9DX05BTUUnXHJcbmNvbnN0IFNZU1RFTV9FUlJPUiA9IHsgY29kZTogMSwgbXNnOiAnU3lzdGVtIGVycm9yLiAnICsgRU5DT1VSQUdFTUVOVCB9XHJcbmNvbnN0IFJFUVVFU1RfRVJST1IgPSB7IGNvZGU6IDIsIG1zZzogJ0FwcCBjYW5ub3QgY29udGFjdCB0aGUgc3lzdGVtLiBDaGVjayB5dW9yIGNvbm5lY3Rpb24hICcgKyBFTkNPVVJBR0VNRU5UIH1cclxuY29uc3QgRU5DT1VSQUdFTUVOVCA9ICdUaGUgcmVxdWVzdCB3aWxsIGJlIHNhdmVkIGFuZCBkb25lIGFzIHNvb24gYXMgcG9zc2libGUnXHJcblxyXG5jb25zdCBuU1JzX2RlbGV0ZWQgPSBbXVxyXG5mdW5jdGlvbiB1bmRvRGVsaXZlcnkoblNScywgb3JkZXIsIGp3dCwgY19mX2VfQlJUX0FQSSwgY19wX2VfVVBEQVRFX1NZU1RFTSwgY19wX2NfVVBEQVRFX1NZU1RFTSwgaSwgaGFsZl9wcm9jX2RvbmUpIHtcclxuICAgIGNvbnNvbGUubG9nKCctLS0gVU5ETyBGVW5jdGlvbiAtLS0tJylcclxuICAgIGxldCBkZWxldGVCb2R5ID0gZ2V0RGVsZXRlQm9keSgpXHJcbiAgICBsZXQgZmlyc3RfZWxlbSA9IG5TUnNbaV1cclxuICAgIGRlbGV0ZUJvZHlbXCJkZWxldGVEYXRhXCJdW1wibnVtZXJpY1NlbmRlclJlZmVyZW5jZVwiXSA9IGZpcnN0X2VsZW1cclxuXHJcbiAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYnJ0Lml0L3Jlc3QvdjEvc2hpcG1lbnRzL2RlbGV0ZWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRlbGV0ZUJvZHkpXHJcbiAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgIHJlcy5qc29uKCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhWydkZWxldGVSZXNwb25zZSddWydleGVjdXRpb25NZXNzYWdlJ11bJ2NvZGUnXSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgblNSc19kZWxldGVkLnB1c2goZmlyc3RfZWxlbSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tIFJJU1BPU1RBIERJIGJydCAtLS0nKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuU1JzLmxlbmd0aCA9PSBuU1JzX2RlbGV0ZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBZ2dpb3JuaWFtbyBpbCBzaXN0ZW1hIFRVVFRPJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEl0YVV0aWxzLmRlZmF1bHQuZ2V0T3JkZXJTdGF0ZUhpc3Rvcnkob3JkZXJbJ2lkJ10sIGp3dCkudGhlbihwcmV2X3N0YXRlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVPdXJTeXN0ZW0oblNSc19kZWxldGVkLCBvcmRlciwgcHJldl9zdGF0ZXNbMl1bJ29yZGVyX3N0YXRlJ10sIGp3dCwgY19wX2VfVVBEQVRFX1NZU1RFTSwgY19wX2NfVVBEQVRFX1NZU1RFTSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRvRGVsaXZlcnkoblNScywgb3JkZXIsIGp3dCwgY19mX2VfQlJUX0FQSSwgY19wX2VfVVBEQVRFX1NZU1RFTSwgY19wX2NfVVBEQVRFX1NZU1RFTSwgaSArIDEsIGhhbGZfcHJvY19kb25lKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vsc2UgJywgZGF0YVsnZGVsZXRlUmVzcG9uc2UnXVsnZXhlY3V0aW9uTWVzc2FnZSddWydjb2RlRGVzYyddICk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVPdXJTeXN0ZW0oblNSc19kZWxldGVkLCBvcmRlciwgdW5kZWZpbmVkLCBqd3QsIGNfcF9lX1VQREFURV9TWVNURU0sIGhhbGZfcHJvY19kb25lKVxyXG4gICAgICAgICAgICAgICAgICAgIGNfZl9lX0JSVF9BUEkoYCR7ZGF0YVsnZGVsZXRlUmVzcG9uc2UnXVsnZXhlY3V0aW9uTWVzc2FnZSddWydjb2RlRGVzYyddfSwgJHtkYXRhWydkZWxldGVSZXNwb25zZSddWydleGVjdXRpb25NZXNzYWdlJ11bJ21lc3NhZ2UnXX1gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhdGNoJywgZXJyKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZU91clN5c3RlbShuU1JzX2RlbGV0ZWQsIG9yZGVyLCB1bmRlZmluZWQsIGp3dCwgY19wX2VfVVBEQVRFX1NZU1RFTSwgaGFsZl9wcm9jX2RvbmUpXHJcbiAgICAgICAgICAgICAgICBjX2ZfZV9CUlRfQVBJKGVycilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgfSlcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlT3VyU3lzdGVtKG5TUnMsIG9yZGVyLCBwcmV2X3N0YXRlLCBqd3QsIGNfcF9lX1VQREFURV9TWVNURU0sIGNfcF9jX1VQREFURV9TWVNURU0pIHtcclxuICAgIGNvbnNvbGUubG9nKCctLS0tIFVwZGF0ZSBvdXIgc3lzdGVtIHByb2NlZHVyZSAtLS0tJylcclxuICAgIGNvbnN0IGJveF9uID0gZ2V0Qm94X24oblNScywgb3JkZXIpXHJcbiAgICBjb25zdCBzaGlwbWVudF9kYXRhID0gY3JlYXRlTmV3U2hpcG1lbnREYXRhKG5TUnMsIG9yZGVyKVxyXG5cclxuICAgIGNvbnN0IGxpZmUzNjVfc3lzdGVtID0gbmV3IFByb2NlZHVyZSgnY291cmllcl8xJywgdW5kb19sYWJlbF9wcm9jX25hbWUsXHJcbiAgICAgICAgeyByZWRvX2Zyb21fdGhlX2JlZ2lubmlnbjogZmFsc2UgfSxcclxuICAgICAgICAoKSA9PiB7IGNfcF9jX1VQREFURV9TWVNURU0oKSB9LFxyXG4gICAgICAgIChwcm9jZWR1cmUsIGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNfcF9lX1VQREFURV9TWVNURU0oKVxyXG4gICAgICAgIH1cclxuICAgIClcclxuXHJcbiAgICBsZXQgbGlmZTM2NV9zeXN0ZW1fc3RlcHMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmOiAocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveF9uOiBwYXJhbXMuYm94X24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBtZW50X2RhdGE6IHBhcmFtcy5zaGlwbWVudF9kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5sb2dpc3RpY19zdGF0ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NUQVRPIExPR0lTVElDTyBTRVRUQVRPICcsIHBhcmFtcy5sb2dpc3RpY19zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlbJ2xvZ2lzdGljX3N0YXRlJ10gPSBwYXJhbXMubG9naXN0aWNfc3RhdGVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSAhcGFyYW1zLkRFQlVHIHx8IHBhcmFtcy5ERUJVRyA9PSB1bmRlZmluZWQgPyBgJHtwYXJhbXMub3JkZXJFZGl0LnJlcGxhY2UoXCItMVwiLCBwYXJhbXMub3JkZXJfaWQpfT9qd3Q9JHtwYXJhbXMuand0fWAgOiBgJHtwYXJhbXMub3JkZXJFZGl0LnJlcGxhY2UoXCItMVwiLCBwYXJhbXMub3JkZXJfaWQpfS9kZWJ1Zz9qd3Q9JHtwYXJhbXMuand0fWBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXRob2QgPSAnUFVUJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sLCByZWopID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2gocmVxdWVzdCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbigocmVzcG9zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3Bvc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tIFNldHRlZCBvcmRlcicsIHBhcmFtcy5sb2dpc3RpY19zdGF0ZSwgJyAtLS0nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlaigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzb2x2ZSgpKS5jYXRjaChlcnIgPT4gcmVqZWN0KGVycikpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIG9yZGVyX2lkOiBvcmRlclsnaWQnXSxcclxuICAgICAgICAgICAgICAgIC8vdXNlIHRoaXMgb25seSBpZiB3ZSBoYXZlIHRvIGRlbGV0ZSBzaGlwcGluZyBzZXBhcmF0ZWx5XHJcbiAgICAgICAgICAgICAgICAvLyAgb3JkZXJbJ2JveF9uJ10gLSAob3JkZXJbJ3NoaXBtZW50X2RhdGEnXVsnQlJUJ10uZmlsdGVyKHMgPT4gc1snblNSJ10gPT0gblNSKVswXVsnYm94J10pXHJcbiAgICAgICAgICAgICAgICBib3hfbjogYm94X24sXHJcbiAgICAgICAgICAgICAgICBqd3Q6IGp3dCxcclxuICAgICAgICAgICAgICAgIG9yZGVyRWRpdDogT1JERVJfRURJVCxcclxuICAgICAgICAgICAgICAgIHNoaXBtZW50X2RhdGE6IHNoaXBtZW50X2RhdGEsXHJcbiAgICAgICAgICAgICAgICBsb2dpc3RpY19zdGF0ZTogcHJldl9zdGF0ZSxcclxuICAgICAgICAgICAgICAgIFNZU1RFTV9FUlJPUjogU1lTVEVNX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgUkVRVUVTVF9FUlJPUjogUkVRVUVTVF9FUlJPUixcclxuICAgICAgICAgICAgICAgIERFQlVHOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpc0FzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICByZWRvOiB7IHRpbWU6IDMsIHRpbWVvdXQ6IDIwMCB9XHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG4gICAgbGlmZTM2NV9zeXN0ZW0uYWRkUHJvY2VkdXJlU3RlcHMobGlmZTM2NV9zeXN0ZW1fc3RlcHMpXHJcbiAgICBsaWZlMzY1X3N5c3RlbS5leGVjdXRlKClcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmV3U2hpcG1lbnREYXRhKG5TUnMsIG9yZGVyKSB7XHJcbiAgICBjb25zb2xlLmxvZygnblNScycsIG5TUnMpXHJcbiAgICBjb25zdCByZXN1bHQgPSBvcmRlclsnc2hpcG1lbnRfZGF0YSddXHJcbiAgICByZXN1bHRbJ0JSVCddID0gb3JkZXJbJ3NoaXBtZW50X2RhdGEnXVsnQlJUJ10uZmlsdGVyKHMgPT4gIW5TUnMuaW5jbHVkZXMoc1snblNSJ10pKVxyXG4gICAgY29uc29sZS5sb2coJ3Jlc3VsdCAnLCByZXN1bHQpXHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEJveF9uKG5TUnMsIG9yZGVyKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gb3JkZXJbJ2JveF9uJ11cclxuICAgIG9yZGVyWydzaGlwbWVudF9kYXRhJ11bJ0JSVCddLmZpbHRlcihzID0+IHsgY29uc29sZS5sb2cocywgJ2luY2x1c28gbmVnbGkgblJTcz8nLCBuU1JzLmluY2x1ZGVzKHNbJ25TUiddKSk7IHJldHVybiBuU1JzLmluY2x1ZGVzKHNbJ25TUiddKSB9KS5mb3JFYWNoKHMgPT4ge1xyXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdCAtIHNbJ2JveF9uJ11cclxuICAgICAgICBjb25zb2xlLmxvZygncmVzdWx0JywgcmVzdWx0KVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICB1bmRvRGVsaXZlcnksXHJcbn1cclxuIiwiLy9tYW5jYSBkaSBhZ2dpdW5nZXJlIGlsIHJlZG8gc2luZ2xlIHN0ZXAgaW4gc3luYyBzdGVwXHJcblxyXG5cclxuY2xhc3MgUHJvY2VkdXJlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhcHBfaWQsIHByb2NlZHVyZV9uYW1lLCBvcHRpb25zLCBwcm9jZWR1cmVFbmRDYWxsYmFjaywgcHJvY2VkdXJlTm90V29ya0NhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5jYW5BZGRBbm90aGVyU3RlcCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zdGVwcyA9IFtdXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RlcCA9IDBcclxuICAgICAgICB0aGlzLmFwcF9pZCA9IGFwcF9pZFxyXG4gICAgICAgIHRoaXMucHJvY2VkdXJlX25hbWUgPSBwcm9jZWR1cmVfbmFtZVxyXG4gICAgICAgIGlmIChvcHRpb25zID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgb3B0aW9ucyA9IHt9XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xyXG4gICAgICAgICAgICBzYXZlUHJvY2VkdXJlOiBvcHRpb25zLnNhdmVQcm9jZWR1cmUgIT0gdW5kZWZpbmVkID8gb3B0aW9ucy5zYXZlUHJvY2VkdXJlIDogdHJ1ZSxcclxuICAgICAgICAgICAgcmVkb19mcm9tX2JlZ2lubmluZzogb3B0aW9ucy5yZWRvX2Zyb21fYmVnaW5uaW5nICE9IHVuZGVmaW5lZCA/IG9wdGlvbnMucmVkb19mcm9tX2JlZ2lubmluZyA6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm9jZWR1cmVFbmRDYWxsYmFjayAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMucHJvY2VkdXJlRW5kQ2FsbGJhY2sgPSBwcm9jZWR1cmVFbmRDYWxsYmFja1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5wcm9jZWR1cmVFbmRDYWxsYmFjayA9ICgpID0+IHsgfVxyXG4gICAgICAgIGlmIChwcm9jZWR1cmVOb3RXb3JrQ2FsbGJhY2sgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2VkdXJlTm90V29ya0NhbGxiYWNrID0gcHJvY2VkdXJlTm90V29ya0NhbGxiYWNrXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZWR1cmVOb3RXb3JrQ2FsbGJhY2sgPSAoKSA9PiB7IH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBBZGQgYSBwcm9jZWR1cmUgc3RlcHMgXHJcbiAgICAqL1xyXG4gICAgYWRkUHJvY2VkdXJlU3RlcHMoc3RlcHMpIHtcclxuICAgICAgICB0aGlzLnN0ZXBzID0gc3RlcHNcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4ZWN1dGUgYSBwcm9jZWR1cmVcclxuICAgICAqL1xyXG4gICAgZXhlY3V0ZSgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGVwcy5sZW5ndGggLSB0aGlzLmN1cnJlbnRTdGVwID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlzQXN5bmMgPSB0aGlzLnN0ZXBzW3RoaXMuY3VycmVudFN0ZXBdLmlzQXN5bmNcclxuICAgICAgICAgICAgICAgIGlmIChpc0FzeW5jKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb0Fub3RoZXJBc3luY1N0ZXAoKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvQW5vdGhlclN5bmNTdGVwKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2VkdXJlRW5kQ2FsbGJhY2sodGhpcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRvQW5vdGhlclN5bmNTdGVwKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGYgPSB0aGlzLnN0ZXBzW3RoaXMuY3VycmVudFN0ZXBdLmZcclxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gdGhpcy5zdGVwc1t0aGlzLmN1cnJlbnRTdGVwXS5wYXJhbXNcclxuICAgICAgICAgICAgZihwYXJhbXMpXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN0ZXArK1xyXG4gICAgICAgICAgICB0aGlzLmV4ZWN1dGUoKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2F2ZVByb2NlZHVyZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlUHJvY2VkdXJlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnByb2NlZHVyZU5vdFdvcmtDYWxsYmFjayh0aGlzLCBlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9Bbm90aGVyQXN5bmNTdGVwKCkge1xyXG4gICAgICAgIGNvbnN0IGYgPSB0aGlzLnN0ZXBzW3RoaXMuY3VycmVudFN0ZXBdLmZcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB0aGlzLnN0ZXBzW3RoaXMuY3VycmVudFN0ZXBdLnBhcmFtc1xyXG4gICAgICAgIGNvbnN0IHByZXZfc3RlcF9yZXMgPSB0aGlzLnN0ZXBzW3RoaXMuY3VycmVudFN0ZXBdLnByZXZfc3RlcF9yZXNcclxuICAgICAgICBjb25zdCByZWRvID0gdGhpcy5zdGVwc1t0aGlzLmN1cnJlbnRTdGVwXS5yZWRvXHJcbiAgICAgICAgY29uc3QgdGltZSA9IHJlZG8gIT0gdW5kZWZpbmVkID8gdGhpcy5zdGVwc1t0aGlzLmN1cnJlbnRTdGVwXS5yZWRvLnRpbWUgOiB1bmRlZmluZWRcclxuICAgICAgICBjb25zdCB0aW1lb3V0ID0gcmVkbyAhPSB1bmRlZmluZWQgPyB0aGlzLnN0ZXBzW3RoaXMuY3VycmVudFN0ZXBdLnJlZG8udGltZW91dCA6IHVuZGVmaW5lZFxyXG4gICAgICAgIGYocGFyYW1zLCBwcmV2X3N0ZXBfcmVzKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RlcCsrXHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RlcHNbdGhpcy5jdXJyZW50U3RlcF0gIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RlcHNbdGhpcy5jdXJyZW50U3RlcF0ucHJldl9zdGVwX3JlcyA9IHJlc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZXhlY3V0ZSgpXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBpZihyZWRvICE9IHVuZGVmaW5lZCAmJiB0aW1lID4gMCl7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGltZSAnLCB0aW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcHNbdGhpcy5jdXJyZW50U3RlcF0ucmVkby50aW1lIC0tXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb0Fub3RoZXJBc3luY1N0ZXAoKSAgIFxyXG4gICAgICAgICAgICAgICAgfSwgdGltZW91dCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNhdmVQcm9jZWR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVQcm9jZWR1cmUoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZWR1cmVOb3RXb3JrQ2FsbGJhY2sodGhpcywgZXJyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzYXZlUHJvY2VkdXJlKCkge1xyXG4gICAgICAgIGNvbnN0IHByb2NlZHVyZV9zYXZlZF9vbiA9IERhdGUubm93KClcclxuICAgICAgICBjb25zdCBpZCA9IGAke3RoaXMuYXBwX2lkfV8ke3RoaXMucHJvY2VkdXJlX25hbWV9XyR7cHJvY2VkdXJlX3NhdmVkX29ufWBcclxuICAgICAgICBjb25zb2xlLmxvZygnU2F2aW5nIHByb2NlZHVyZScsIGlkKVxyXG4gICAgICAgIGNvbnN0IHN0ZXBzU3RyaW5naWZpZWQgPSBbXVxyXG4gICAgICAgIGxldCByZWRvX2Zyb21fYmVnaW5uaW5nID0gdGhpcy5vcHRpb25zLnJlZG9fZnJvbV9iZWdpbm5pbmdcclxuICAgICAgICBsZXQgYyA9IDBcclxuICAgICAgICB0aGlzLnN0ZXBzLmZvckVhY2gocyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZWRvX2Zyb21fYmVnaW5uaW5nIHx8IGMgPj0gdGhpcy5jdXJyZW50U3RlcCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvU3RyaW5nRnVuY3Rpb24gPSBzLmYudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgbGV0IGJvZHlTdHJpbmcgPSB0b1N0cmluZ0Z1bmN0aW9uLnNsaWNlKHRvU3RyaW5nRnVuY3Rpb24uaW5kZXhPZihcIntcIikgKyAxLCB0b1N0cmluZ0Z1bmN0aW9uLmxhc3RJbmRleE9mKFwifVwiKSlcclxuICAgICAgICAgICAgICAgIGxldCBzdGVwX3RvX3NhdmUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZjogYm9keVN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHMucGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzQXN5bmM6IHMuaXNBc3luY1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3RlcHNTdHJpbmdpZmllZC5wdXNoKHN0ZXBfdG9fc2F2ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjKytcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBpdGVtID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBhcHBfaWQ6IHRoaXMuYXBwX2lkLFxyXG4gICAgICAgICAgICBwcm9jX25hbWU6IHRoaXMucHJvY2VkdXJlX25hbWUsXHJcbiAgICAgICAgICAgIHN0ZXBzOiBzdGVwc1N0cmluZ2lmaWVkXHJcbiAgICAgICAgfSlcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oaWQsIGl0ZW0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgZ2V0U2F2ZWRQcm9jZWR1cmVzID0gZnVuY3Rpb24gKGFwcGxpY2F0aW9uX2lkKSB7XHJcbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHdpbmRvdy5sb2NhbFN0b3JhZ2UpXHJcbiAgICBjb25zdCBwcm9jID0gW11cclxuICAgIGNvbnN0IHBhdHRlcm4gPSBuZXcgUmVnRXhwKGFwcGxpY2F0aW9uX2lkKVxyXG4gICAga2V5cy5mb3JFYWNoKGsgPT4ge1xyXG4gICAgICAgIGlmIChrLm1hdGNoKHBhdHRlcm4pICE9IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IHByb2Nfc3RyaW5nID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGspXHJcbiAgICAgICAgICAgIGxldCBwYXJzZWRfcHJvYyA9IEpTT04ucGFyc2UocHJvY19zdHJpbmcpXHJcbiAgICAgICAgICAgIHBhcnNlZF9wcm9jLnN0ZXBzLmZvckVhY2goKHMpID0+IHtcclxuICAgICAgICAgICAgICAgIHMuZiA9IG5ldyBGdW5jdGlvbigncGFyYW1zJywgcy5mKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBwcm9jLnB1c2gocGFyc2VkX3Byb2MpXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gcHJvY1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHtcclxuICAgIFByb2NlZHVyZSxcclxuICAgIGdldFNhdmVkUHJvY2VkdXJlc1xyXG59XHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=