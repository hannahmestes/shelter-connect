(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-adopter-browsing-browsing-module"],{

/***/ "./src/app/pages/adopter/browsing/browsing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/adopter/browsing/browsing.module.ts ***!
  \***********************************************************/
/*! exports provided: BrowsingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowsingPageModule", function() { return BrowsingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _browsing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./browsing.page */ "./src/app/pages/adopter/browsing/browsing.page.ts");







var routes = [
    {
        path: '',
        component: _browsing_page__WEBPACK_IMPORTED_MODULE_6__["BrowsingPage"]
    }
];
var BrowsingPageModule = /** @class */ (function () {
    function BrowsingPageModule() {
    }
    BrowsingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_browsing_page__WEBPACK_IMPORTED_MODULE_6__["BrowsingPage"]]
        })
    ], BrowsingPageModule);
    return BrowsingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/adopter/browsing/browsing.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/adopter/browsing/browsing.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>browsing</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/adopter/browsing/browsing.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/adopter/browsing/browsing.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fkb3B0ZXIvYnJvd3NpbmcvYnJvd3NpbmcucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/adopter/browsing/browsing.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/adopter/browsing/browsing.page.ts ***!
  \*********************************************************/
/*! exports provided: BrowsingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowsingPage", function() { return BrowsingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BrowsingPage = /** @class */ (function () {
    function BrowsingPage() {
    }
    BrowsingPage.prototype.ngOnInit = function () {
    };
    BrowsingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-browsing',
            template: __webpack_require__(/*! ./browsing.page.html */ "./src/app/pages/adopter/browsing/browsing.page.html"),
            styles: [__webpack_require__(/*! ./browsing.page.scss */ "./src/app/pages/adopter/browsing/browsing.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BrowsingPage);
    return BrowsingPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-adopter-browsing-browsing-module.js.map