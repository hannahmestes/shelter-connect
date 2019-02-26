(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-adopter-likes-likes-module"],{

/***/ "./src/app/pages/adopter/likes/likes.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/adopter/likes/likes.module.ts ***!
  \*****************************************************/
/*! exports provided: LikesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikesPageModule", function() { return LikesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _likes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./likes.page */ "./src/app/pages/adopter/likes/likes.page.ts");







var routes = [
    {
        path: '',
        component: _likes_page__WEBPACK_IMPORTED_MODULE_6__["LikesPage"]
    }
];
var LikesPageModule = /** @class */ (function () {
    function LikesPageModule() {
    }
    LikesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_likes_page__WEBPACK_IMPORTED_MODULE_6__["LikesPage"]]
        })
    ], LikesPageModule);
    return LikesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/adopter/likes/likes.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/adopter/likes/likes.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>likes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/adopter/likes/likes.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/adopter/likes/likes.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fkb3B0ZXIvbGlrZXMvbGlrZXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/adopter/likes/likes.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/adopter/likes/likes.page.ts ***!
  \***************************************************/
/*! exports provided: LikesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikesPage", function() { return LikesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LikesPage = /** @class */ (function () {
    function LikesPage() {
    }
    LikesPage.prototype.ngOnInit = function () {
    };
    LikesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-likes',
            template: __webpack_require__(/*! ./likes.page.html */ "./src/app/pages/adopter/likes/likes.page.html"),
            styles: [__webpack_require__(/*! ./likes.page.scss */ "./src/app/pages/adopter/likes/likes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LikesPage);
    return LikesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-adopter-likes-likes-module.js.map