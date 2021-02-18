(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_IT_TEMPLATE_plugin_js"],{

/***/ "./src/IT/TEMPLATE/plugin.js":
/*!***********************************!*\
  !*** ./src/IT/TEMPLATE/plugin.js ***!
  \***********************************/
/*! namespace exports */
/*! export PluginCard [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginCard": () => /* binding */ PluginCard
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
;

var N_PACKAGES = "Packages";
var BUTTON_ACTION_1 = "Deliver";
var BUTTON_ACTION_2 = "Give Courier";
var LOGO = _utils__WEBPACK_IMPORTED_MODULE_1__.default.getAssetsURL("TEMPLATE", "todo.jpg");
var COURIER = "TEMPLATE";

var PluginCard = function PluginCard(props) {
  var nPackagesInput = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);

  var closeOrder = function closeOrder(e) {
    e.preventDefault();
    alert('---- close order TEMPLATE ----');
    window.location.reload();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "media"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "align-self-start mr-3",
    src: LOGO,
    alt: "Courier logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "media-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "mt-0"
  }, COURIER), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Oooops... We don't have a plugin for this courier! Plese check our rules if you want became a developer!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    id: "print_form",
    onSubmit: closeOrder
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-row container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "number",
    className: "form-control",
    id: "colli",
    placeholder: N_PACKAGES,
    ref: nPackagesInput
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    className: "btn btn-primary btn-block"
  }, BUTTON_ACTION_1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    className: "btn btn-primary btn-block"
  }, BUTTON_ACTION_2)))))))));
};



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9JVC9URU1QTEFURS9wbHVnaW4uanMiXSwibmFtZXMiOlsiTl9QQUNLQUdFUyIsIkJVVFRPTl9BQ1RJT05fMSIsIkJVVFRPTl9BQ1RJT05fMiIsIkxPR08iLCJVdGlscyIsIkNPVVJJRVIiLCJQbHVnaW5DYXJkIiwicHJvcHMiLCJuUGFja2FnZXNJbnB1dCIsIlJlYWN0IiwiY2xvc2VPcmRlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHLFVBQW5CO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLFNBQXhCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGNBQXhCO0FBQ0EsSUFBTUMsSUFBSSxHQUFHQyx3REFBQSxDQUFtQixVQUFuQixFQUErQixVQUEvQixDQUFiO0FBRUEsSUFBTUMsT0FBTyxHQUFHLFVBQWhCOztBQUdBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQVVDLEtBQVYsRUFBaUI7QUFDaEMsTUFBTUMsY0FBYyxHQUFHQyx5Q0FBQSxDQUFhLElBQWIsQ0FBdkI7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBVUMsQ0FBVixFQUFhO0FBQzVCQSxLQUFDLENBQUNDLGNBQUY7QUFDQUMsU0FBSyxDQUFDLGdDQUFELENBQUw7QUFDQUMsVUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQjtBQUVILEdBTEQ7O0FBTUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBdUMsT0FBRyxFQUFFYixJQUE1QztBQUFrRCxPQUFHLEVBQUM7QUFBdEQsSUFESixlQUVJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQUFzQkUsT0FBdEIsQ0FESixlQUVJLDJFQUNJLHVLQURKLGVBRUk7QUFBTSxNQUFFLEVBQUMsWUFBVDtBQUFzQixZQUFRLEVBQUVLO0FBQWhDLGtCQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLGFBQVMsRUFBQyxjQUEvQjtBQUE4QyxNQUFFLEVBQUMsT0FBakQ7QUFBeUQsZUFBVyxFQUFFVixVQUF0RTtBQUFrRixPQUFHLEVBQUVRO0FBQXZGLElBREosQ0FESixlQUlJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUM7QUFBaEMsS0FBNkRQLGVBQTdELENBREosQ0FKSixlQU9JO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUM7QUFBaEMsS0FBNkRDLGVBQTdELENBREosQ0FQSixDQURKLENBRkosQ0FGSixDQUZKLENBREosQ0FESixDQURKO0FBNEJILENBckNEIiwiZmlsZSI6InNyY19JVF9URU1QTEFURV9wbHVnaW5fanMubWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBVdGlscyBmcm9tICcuLi8uLi91dGlscydcclxuXHJcbmNvbnN0IE5fUEFDS0FHRVMgPSBcIlBhY2thZ2VzXCJcclxuY29uc3QgQlVUVE9OX0FDVElPTl8xID0gXCJEZWxpdmVyXCJcclxuY29uc3QgQlVUVE9OX0FDVElPTl8yID0gXCJHaXZlIENvdXJpZXJcIlxyXG5jb25zdCBMT0dPID0gVXRpbHMuZ2V0QXNzZXRzVVJMKFwiVEVNUExBVEVcIiwgXCJ0b2RvLmpwZ1wiKVxyXG5cclxuY29uc3QgQ09VUklFUiA9IFwiVEVNUExBVEVcIlxyXG5cclxuXHJcbmNvbnN0IFBsdWdpbkNhcmQgPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgIGNvbnN0IG5QYWNrYWdlc0lucHV0ID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGNsb3NlT3JkZXIgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBhbGVydCgnLS0tLSBjbG9zZSBvcmRlciBURU1QTEFURSAtLS0tJylcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImFsaWduLXNlbGYtc3RhcnQgbXItM1wiIHNyYz17TE9HT30gYWx0PVwiQ291cmllciBsb2dvXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtdC0wXCI+e0NPVVJJRVJ9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk9vb29wcy4uLiBXZSBkb24ndCBoYXZlIGEgcGx1Z2luIGZvciB0aGlzIGNvdXJpZXIhIFBsZXNlIGNoZWNrIG91ciBydWxlcyBpZiB5b3Ugd2FudCBiZWNhbWUgYSBkZXZlbG9wZXIhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJwcmludF9mb3JtXCIgb25TdWJtaXQ9e2Nsb3NlT3JkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1yb3cgY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJjb2xsaVwiIHBsYWNlaG9sZGVyPXtOX1BBQ0tBR0VTfSByZWY9e25QYWNrYWdlc0lucHV0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiPntCVVRUT05fQUNUSU9OXzF9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCI+e0JVVFRPTl9BQ1RJT05fMn08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IFBsdWdpbkNhcmQgfSJdLCJzb3VyY2VSb290IjoiIn0=