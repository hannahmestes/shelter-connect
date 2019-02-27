(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-selection-user-selection-module"],{

/***/ "./src/app/pages/user-selection/user-selection.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/user-selection/user-selection.module.ts ***!
  \***************************************************************/
/*! exports provided: UserSelectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSelectionPageModule", function() { return UserSelectionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_selection_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-selection.page */ "./src/app/pages/user-selection/user-selection.page.ts");







var routes = [
    {
        path: '',
        component: _user_selection_page__WEBPACK_IMPORTED_MODULE_6__["UserSelectionPage"]
    }
];
var UserSelectionPageModule = /** @class */ (function () {
    function UserSelectionPageModule() {
    }
    UserSelectionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_user_selection_page__WEBPACK_IMPORTED_MODULE_6__["UserSelectionPage"]]
        })
    ], UserSelectionPageModule);
    return UserSelectionPageModule;
}());



/***/ }),

/***/ "./src/app/pages/user-selection/user-selection.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/user-selection/user-selection.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>user-selection</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/user-selection/user-selection.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/user-selection/user-selection.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItc2VsZWN0aW9uL3VzZXItc2VsZWN0aW9uLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/user-selection/user-selection.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/user-selection/user-selection.page.ts ***!
  \*************************************************************/
/*! exports provided: UserSelectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSelectionPage", function() { return UserSelectionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserSelectionPage = /** @class */ (function () {
    function UserSelectionPage() {
    }
    UserSelectionPage.prototype.ngOnInit = function () {
    };
    UserSelectionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-selection',
            template: __webpack_require__(/*! ./user-selection.page.html */ "./src/app/pages/user-selection/user-selection.page.html"),
            styles: [__webpack_require__(/*! ./user-selection.page.scss */ "./src/app/pages/user-selection/user-selection.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserSelectionPage);
    return UserSelectionPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-user-selection-user-selection-module.js.map