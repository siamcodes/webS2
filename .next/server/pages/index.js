(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Product.js":
/*!*******************************!*\
  !*** ./components/Product.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Product; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ "./data.js");

var _jsxFileName = "D:\\code\\webS2\\components\\Product.js";


function Product() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row row-cols-1 row-cols-md-4 g-4",
      children: _data__WEBPACK_IMPORTED_MODULE_2__.default.products.map(p => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: p.photo,
            className: "card-img-top",
            alt: "..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              className: "card-title",
              children: p.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "card-text",
              children: p.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              className: "btn btn-primary",
              children: "Go somewhere"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Slide.js":
/*!*****************************!*\
  !*** ./components/Slide.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Slide; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\code\\webS2\\components\\Slide.js";

function Slide() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "carouselExampleCaptions",
      className: "carousel slide",
      "data-bs-ride": "carousel",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "carousel-indicators",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "button",
          "data-bs-target": "#carouselExampleCaptions",
          "data-bs-slide-to": 0,
          className: "active",
          "aria-current": "true",
          "aria-label": "Slide 1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "button",
          "data-bs-target": "#carouselExampleCaptions",
          "data-bs-slide-to": 1,
          "aria-label": "Slide 2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "button",
          "data-bs-target": "#carouselExampleCaptions",
          "data-bs-slide-to": 2,
          "aria-label": "Slide 3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "carousel-inner",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "carousel-item active",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "../images/pic1.jpg",
            className: "d-block w-100",
            alt: "..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "carousel-caption d-none d-md-block",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              children: "First slide label"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: "Some representative placeholder content for the first slide."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "carousel-item",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "../images/pic2.jpg",
            className: "d-block w-100 ",
            alt: "..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "carousel-caption d-none d-md-block",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              children: "Second slide label"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: "Some representative placeholder content for the second slide."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "carousel-item",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "../images/pic3.jpg",
            className: "d-block w-100",
            alt: "..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "carousel-caption d-none d-md-block",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              children: "Third slide label"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: "Some representative placeholder content for the third slide."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "carousel-control-prev",
        type: "button",
        "data-bs-target": "#carouselExampleCaptions",
        "data-bs-slide": "prev",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "carousel-control-prev-icon",
          "aria-hidden": "true"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "visually-hidden",
          children: "Previous"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "carousel-control-next",
        type: "button",
        "data-bs-target": "#carouselExampleCaptions",
        "data-bs-slide": "next",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "carousel-control-next-icon",
          "aria-hidden": "true"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "visually-hidden",
          children: "Next"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  products: [{
    name: "เสื้อเชิร์ต",
    description: "ใว้สวมใส่",
    price: 250,
    stock: 20,
    photo: "../images/pic1.jpg"
  }, {
    name: "รองเท้า",
    description: "ใว้สวมใส่",
    price: 1000,
    stock: 50,
    photo: "../images/pic2.jpg"
  }, {
    name: "กางเกง",
    description: "ใว้สวมใส่",
    price: 500,
    stock: 50,
    photo: "../images/pic3.jpg"
  }, {
    name: "กางเกง",
    description: "ใว้สวมใส่",
    price: 500,
    stock: 50,
    photo: "../images/pic4.jpg"
  }, {
    name: "กางเกง",
    description: "ใว้สวมใส่",
    price: 500,
    stock: 50,
    photo: "../images/pic5.png"
  }, {
    name: "กางเกง",
    description: "ใว้สวมใส่",
    price: 500,
    stock: 50,
    photo: "../images/pic6.png"
  }, {
    name: "กางเกง",
    description: "ใว้สวมใส่",
    price: 500,
    stock: 50,
    photo: "../images/pic7.jpg"
  }, {
    name: "กางเกง",
    description: "ใว้สวมใส่",
    price: 500,
    stock: 50,
    photo: "../images/pic8.jpg"
  }, {
    name: "กางเกง",
    description: "ใว้สวมใส่",
    price: 500,
    stock: 50,
    photo: "../images/pic9.jpg"
  }]
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ index; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Slide */ "./components/Slide.js");
/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Product */ "./components/Product.js");

var _jsxFileName = "D:\\code\\webS2\\pages\\index.js";



function index() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Slide__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Product__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJzMi8uL2NvbXBvbmVudHMvUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly93ZWJzMi8uL2NvbXBvbmVudHMvU2xpZGUuanMiLCJ3ZWJwYWNrOi8vd2ViczIvLi9kYXRhLmpzIiwid2VicGFjazovL3dlYnMyLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2ViczIvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3dlYnMyL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiUHJvZHVjdCIsImRhdGEiLCJwIiwicGhvdG8iLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJTbGlkZSIsInByb2R1Y3RzIiwicHJpY2UiLCJzdG9jayIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxHQUFtQjtBQUM5QixzQkFDSTtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLGtDQUFmO0FBQUEsZ0JBQ0tDLHVEQUFBLENBQWtCQyxDQUFDLGlCQUNoQjtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQUEsa0NBQ0k7QUFBSyxlQUFHLEVBQUVBLENBQUMsQ0FBQ0MsS0FBWjtBQUFtQixxQkFBUyxFQUFDLGNBQTdCO0FBQTRDLGVBQUcsRUFBQztBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBSyxxQkFBUyxFQUFDLFdBQWY7QUFBQSxvQ0FDSTtBQUFJLHVCQUFTLEVBQUMsWUFBZDtBQUFBLHdCQUE0QkQsQ0FBQyxDQUFDRTtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBRyx1QkFBUyxFQUFDLFdBQWI7QUFBQSx3QkFBMEJGLENBQUMsQ0FBQ0c7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSixlQUdJO0FBQUcsa0JBQUksRUFBQyxHQUFS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QUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVFILEM7Ozs7Ozs7Ozs7O0FDYkQsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZGF0YSBmcm9tICcuLi9kYXRhJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3QoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1jb2xzLTEgcm93LWNvbHMtbWQtNCBnLTRcIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhLnByb2R1Y3RzLm1hcChwID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cC5waG90b30gY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgYWx0PVwiLi4uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57cC5uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e3AuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+R28gc29tZXdoZXJlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGlkZSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImNhcm91c2VsRXhhbXBsZUNhcHRpb25zXCIgY2xhc3NOYW1lPVwiY2Fyb3VzZWwgc2xpZGVcIiBkYXRhLWJzLXJpZGU9XCJjYXJvdXNlbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1icy10YXJnZXQ9XCIjY2Fyb3VzZWxFeGFtcGxlQ2FwdGlvbnNcIiBkYXRhLWJzLXNsaWRlLXRvPXswfSBjbGFzc05hbWU9XCJhY3RpdmVcIiBhcmlhLWN1cnJlbnQ9XCJ0cnVlXCIgYXJpYS1sYWJlbD1cIlNsaWRlIDFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRhdGEtYnMtdGFyZ2V0PVwiI2Nhcm91c2VsRXhhbXBsZUNhcHRpb25zXCIgZGF0YS1icy1zbGlkZS10bz17MX0gYXJpYS1sYWJlbD1cIlNsaWRlIDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRhdGEtYnMtdGFyZ2V0PVwiI2Nhcm91c2VsRXhhbXBsZUNhcHRpb25zXCIgZGF0YS1icy1zbGlkZS10bz17Mn0gYXJpYS1sYWJlbD1cIlNsaWRlIDNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pdGVtIGFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2ltYWdlcy9waWMxLmpwZ1wiIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIiBhbHQ9XCIuLi5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWNhcHRpb24gZC1ub25lIGQtbWQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5GaXJzdCBzbGlkZSBsYWJlbDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Tb21lIHJlcHJlc2VudGF0aXZlIHBsYWNlaG9sZGVyIGNvbnRlbnQgZm9yIHRoZSBmaXJzdCBzbGlkZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2ltYWdlcy9waWMyLmpwZ1wiIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDAgXCIgYWx0PVwiLi4uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jYXB0aW9uIGQtbm9uZSBkLW1kLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+U2Vjb25kIHNsaWRlIGxhYmVsPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNvbWUgcmVwcmVzZW50YXRpdmUgcGxhY2Vob2xkZXIgY29udGVudCBmb3IgdGhlIHNlY29uZCBzbGlkZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2ltYWdlcy9waWMzLmpwZ1wiIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIiBhbHQ9XCIuLi5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWNhcHRpb24gZC1ub25lIGQtbWQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5UaGlyZCBzbGlkZSBsYWJlbDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Tb21lIHJlcHJlc2VudGF0aXZlIHBsYWNlaG9sZGVyIGNvbnRlbnQgZm9yIHRoZSB0aGlyZCBzbGlkZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtcHJldlwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWJzLXRhcmdldD1cIiNjYXJvdXNlbEV4YW1wbGVDYXB0aW9uc1wiIGRhdGEtYnMtc2xpZGU9XCJwcmV2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZpc3VhbGx5LWhpZGRlblwiPlByZXZpb3VzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWJzLXRhcmdldD1cIiNjYXJvdXNlbEV4YW1wbGVDYXB0aW9uc1wiIGRhdGEtYnMtc2xpZGU9XCJuZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZpc3VhbGx5LWhpZGRlblwiPk5leHQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvZHVjdHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwi4LmA4Liq4Li34LmJ4Lit4LmA4LiK4Li04Lij4LmM4LiVXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIuC5g+C4p+C5ieC4quC4p+C4oeC5g+C4quC5iFwiLFxyXG4gICAgICAgICAgICBwcmljZTogMjUwLFxyXG4gICAgICAgICAgICBzdG9jazogMjAsXHJcbiAgICAgICAgICAgIHBob3RvOiBcIi4uL2ltYWdlcy9waWMxLmpwZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwi4Lij4Lit4LiH4LmA4LiX4LmJ4LiyXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIuC5g+C4p+C5ieC4quC4p+C4oeC5g+C4quC5iFwiLFxyXG4gICAgICAgICAgICBwcmljZTogMTAwMCxcclxuICAgICAgICAgICAgc3RvY2s6IDUwLFxyXG4gICAgICAgICAgICBwaG90bzogXCIuLi9pbWFnZXMvcGljMi5qcGdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIuC4geC4suC4h+C5gOC4geC4h1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCLguYPguKfguYnguKrguKfguKHguYPguKrguYhcIixcclxuICAgICAgICAgICAgcHJpY2U6IDUwMCxcclxuICAgICAgICAgICAgc3RvY2s6IDUwLFxyXG4gICAgICAgICAgICBwaG90bzogXCIuLi9pbWFnZXMvcGljMy5qcGdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIuC4geC4suC4h+C5gOC4geC4h1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCLguYPguKfguYnguKrguKfguKHguYPguKrguYhcIixcclxuICAgICAgICAgICAgcHJpY2U6IDUwMCxcclxuICAgICAgICAgICAgc3RvY2s6IDUwLFxyXG4gICAgICAgICAgICBwaG90bzogXCIuLi9pbWFnZXMvcGljNC5qcGdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIuC4geC4suC4h+C5gOC4geC4h1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCLguYPguKfguYnguKrguKfguKHguYPguKrguYhcIixcclxuICAgICAgICAgICAgcHJpY2U6IDUwMCxcclxuICAgICAgICAgICAgc3RvY2s6IDUwLFxyXG4gICAgICAgICAgICBwaG90bzogXCIuLi9pbWFnZXMvcGljNS5wbmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIuC4geC4suC4h+C5gOC4geC4h1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCLguYPguKfguYnguKrguKfguKHguYPguKrguYhcIixcclxuICAgICAgICAgICAgcHJpY2U6IDUwMCxcclxuICAgICAgICAgICAgc3RvY2s6IDUwLFxyXG4gICAgICAgICAgICBwaG90bzogXCIuLi9pbWFnZXMvcGljNi5wbmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIuC4geC4suC4h+C5gOC4geC4h1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCLguYPguKfguYnguKrguKfguKHguYPguKrguYhcIixcclxuICAgICAgICAgICAgcHJpY2U6IDUwMCxcclxuICAgICAgICAgICAgc3RvY2s6IDUwLFxyXG4gICAgICAgICAgICBwaG90bzogXCIuLi9pbWFnZXMvcGljNy5qcGdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIuC4geC4suC4h+C5gOC4geC4h1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCLguYPguKfguYnguKrguKfguKHguYPguKrguYhcIixcclxuICAgICAgICAgICAgcHJpY2U6IDUwMCxcclxuICAgICAgICAgICAgc3RvY2s6IDUwLFxyXG4gICAgICAgICAgICBwaG90bzogXCIuLi9pbWFnZXMvcGljOC5qcGdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIuC4geC4suC4h+C5gOC4geC4h1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCLguYPguKfguYnguKrguKfguKHguYPguKrguYhcIixcclxuICAgICAgICAgICAgcHJpY2U6IDUwMCxcclxuICAgICAgICAgICAgc3RvY2s6IDUwLFxyXG4gICAgICAgICAgICBwaG90bzogXCIuLi9pbWFnZXMvcGljOS5qcGdcIlxyXG4gICAgICAgIH0sXHJcbiAgICBdXHJcblxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2xpZGUgZnJvbSAnLi4vY29tcG9uZW50cy9TbGlkZSc7XHJcbmltcG9ydCBQcm9kdWN0ICAgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPFNsaWRlIC8+XHJcblxyXG4gICAgICAgICAgICA8UHJvZHVjdC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==