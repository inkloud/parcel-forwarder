(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_ES_courier_8_plugin_js"],{

/***/ "./src/ES/courier_8/plugin.js":
/*!************************************!*\
  !*** ./src/ES/courier_8/plugin.js ***!
  \************************************/
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
var COURIER = "CORREOS";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9FUy9jb3VyaWVyXzgvcGx1Z2luLmpzIl0sIm5hbWVzIjpbIk5fUEFDS0FHRVMiLCJCVVRUT05fQUNUSU9OXzEiLCJCVVRUT05fQUNUSU9OXzIiLCJMT0dPIiwiVXRpbHMiLCJDT1VSSUVSIiwiUGx1Z2luQ2FyZCIsInByb3BzIiwiblBhY2thZ2VzSW5wdXQiLCJSZWFjdCIsImNsb3NlT3JkZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBRyxVQUFuQjtBQUNBLElBQU1DLGVBQWUsR0FBRyxTQUF4QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxjQUF4QjtBQUNBLElBQU1DLElBQUksR0FBR0Msd0RBQUEsQ0FBbUIsVUFBbkIsRUFBK0IsVUFBL0IsQ0FBYjtBQUVBLElBQU1DLE9BQU8sR0FBRyxTQUFoQjs7QUFHQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFVQyxLQUFWLEVBQWlCO0FBQ2hDLE1BQU1DLGNBQWMsR0FBR0MseUNBQUEsQ0FBYSxJQUFiLENBQXZCOztBQUVBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQVVDLENBQVYsRUFBYTtBQUM1QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FDLFNBQUssQ0FBQyxnQ0FBRCxDQUFMO0FBQ0FDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEI7QUFFSCxHQUxEOztBQU1BLHNCQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQXVDLE9BQUcsRUFBRWIsSUFBNUM7QUFBa0QsT0FBRyxFQUFDO0FBQXRELElBREosZUFFSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FBc0JFLE9BQXRCLENBREosZUFFSSwyRUFDSSx1S0FESixlQUVJO0FBQU0sTUFBRSxFQUFDLFlBQVQ7QUFBc0IsWUFBUSxFQUFFSztBQUFoQyxrQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixhQUFTLEVBQUMsY0FBL0I7QUFBOEMsTUFBRSxFQUFDLE9BQWpEO0FBQXlELGVBQVcsRUFBRVYsVUFBdEU7QUFBa0YsT0FBRyxFQUFFUTtBQUF2RixJQURKLENBREosZUFJSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBUyxFQUFDO0FBQWhDLEtBQTZEUCxlQUE3RCxDQURKLENBSkosZUFPSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBUyxFQUFDO0FBQWhDLEtBQTZEQyxlQUE3RCxDQURKLENBUEosQ0FESixDQUZKLENBRkosQ0FGSixDQURKLENBREosQ0FESjtBQTRCSCxDQXJDRCIsImZpbGUiOiJzcmNfRVNfY291cmllcl84X3BsdWdpbl9qcy5tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFV0aWxzIGZyb20gJy4uLy4uL3V0aWxzJ1xyXG5cclxuY29uc3QgTl9QQUNLQUdFUyA9IFwiUGFja2FnZXNcIlxyXG5jb25zdCBCVVRUT05fQUNUSU9OXzEgPSBcIkRlbGl2ZXJcIlxyXG5jb25zdCBCVVRUT05fQUNUSU9OXzIgPSBcIkdpdmUgQ291cmllclwiXHJcbmNvbnN0IExPR08gPSBVdGlscy5nZXRBc3NldHNVUkwoXCJURU1QTEFURVwiLCBcInRvZG8uanBnXCIpXHJcblxyXG5jb25zdCBDT1VSSUVSID0gXCJDT1JSRU9TXCJcclxuXHJcblxyXG5jb25zdCBQbHVnaW5DYXJkID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICBjb25zdCBuUGFja2FnZXNJbnB1dCA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuXHJcbiAgICBjb25zdCBjbG9zZU9yZGVyID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgYWxlcnQoJy0tLS0gY2xvc2Ugb3JkZXIgVEVNUExBVEUgLS0tLScpXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhbGlnbi1zZWxmLXN0YXJ0IG1yLTNcIiBzcmM9e0xPR099IGFsdD1cIkNvdXJpZXIgbG9nb1wiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibXQtMFwiPntDT1VSSUVSfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Pb29vcHMuLi4gV2UgZG9uJ3QgaGF2ZSBhIHBsdWdpbiBmb3IgdGhpcyBjb3VyaWVyISBQbGVzZSBjaGVjayBvdXIgcnVsZXMgaWYgeW91IHdhbnQgYmVjYW1lIGEgZGV2ZWxvcGVyITwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwicHJpbnRfZm9ybVwiIG9uU3VibWl0PXtjbG9zZU9yZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcm93IGNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiY29sbGlcIiBwbGFjZWhvbGRlcj17Tl9QQUNLQUdFU30gcmVmPXtuUGFja2FnZXNJbnB1dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIj57QlVUVE9OX0FDVElPTl8xfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiPntCVVRUT05fQUNUSU9OXzJ9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBQbHVnaW5DYXJkIH0iXSwic291cmNlUm9vdCI6IiJ9