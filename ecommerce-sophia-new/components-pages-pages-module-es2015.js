(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-pages-pages-module"],{

/***/ "/+o5":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/wishlist/wishlist.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-breadcrumb [title]=\"'Wishlist'\" [breadcrumb]=\"'Wishlist'\"></app-breadcrumb>\r\n<div class=\"container\">\r\n  <div class=\"cart-wrapper sec-padding\">\r\n\r\n\r\n<div fxLayout=\"column\" fxLayoutAlign=\"space-around center\" *ngIf=\"!wishlistItems.length\">\r\n  <mat-chip-list>\r\n      <mat-chip color=\"warn\" selected=\"true\">YOU HAVE NO ITEMS IN YOUR WISHLIST.</mat-chip>\r\n  </mat-chip-list>\r\n  <div>\r\n    <a [routerLink]=\"['/home/one']\" routerLinkActive=\"router-link-active\"   mat-raised-button color=\"primary\" class=\"btn-project mt-20\">Continue shopping</a>\r\n  </div>\r\n\r\n</div>\r\n\r\n<mat-card *ngIf=\"wishlistItems.length\"  class=\"p-0\">\r\n\r\n  <div class=\"mat-table cart-table\">\r\n    <div class=\"mat-header-row\">\r\n      <div class=\"mat-header-cell\">Product</div>\r\n      <div class=\"mat-header-cell\">Name</div>\r\n      <div class=\"mat-header-cell\">Price</div>\r\n      <div class=\"mat-header-cell text-center\">\r\n        <div class=\"px-1\">\r\n          <button mat-raised-button color=\"warn\" >Clear All</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngFor=\"let item of wishlistItems\"  class=\"mat-row\">\r\n      <div class=\"mat-cell\"><img [src]=\"item.pictures[0].small\"></div>\r\n      <div class=\"mat-cell\"><a  class=\"product-name\">{{item.name}}</a></div>\r\n      <div class=\"mat-cell price\">{{item.price | number : '1.2-2'}}</div>\r\n\r\n      <div class=\"mat-cell text-center\">\r\n        <div class=\"p-1\">\r\n              <mat-icon class=\"close\" (click)=\"removeItem(item)\">close</mat-icon>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"mat-row\">\r\n      <div class=\"mat-cell\"><a [routerLink]=\"['/home/one']\" routerLinkActive=\"router-link-active\"  mat-raised-button color=\"primary\" class=\"btn-project\">Continue shopping</a></div>\r\n      <div class=\"mat-cell\"></div>\r\n      <div class=\"mat-cell\"></div>\r\n\r\n\r\n      <div class=\"mat-cell text-center\"><a [routerLink]=\"['/pages/checkout']\" routerLinkActive=\"router-link-active\" mat-raised-button color=\"primary\" class=\"btn-project\">Proceed To Checkout</a></div>\r\n    </div>\r\n  </div>\r\n\r\n</mat-card>\r\n</div>\r\n</div>\r\n");

/***/ }),

/***/ "0Jpg":
/*!***********************************************************************!*\
  !*** ./src/app/components/pages/error-page/error-page.component.sass ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci1wYWdlLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "0UxC":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/my-account/my-account.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-breadcrumb [title]=\"'My Account'\" [breadcrumb]=\"'My Account'\"></app-breadcrumb>\r\n\r\n<div class=\"my-account sec-padding\">\r\n  <div class=\"container\">\r\n      <mat-card fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"start start\"  class=\"p-0\">\r\n          <div class=\"my-account-wrap p-0\" fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"start start\" >\r\n              <div class=\"login-wrapper pr-50\" fxFlex=\"100\" fxFlex.gt-md=\"50\" fxFlex.md=\"50\">\r\n                  <div class=\"title\">\r\n                    <h3>Login</h3>\r\n                  </div>\r\n                  <form fxLayout=\"row wrap\">\r\n                      <div  fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n                          <mat-form-field class=\"w-100\">\r\n                              <input matInput placeholder=\"Username or email address (required)\" #name=\"ngModel\" ngModel name=\"name\" required>\r\n                              <mat-error *ngIf=\"name.invalid\">Please enter a valid message</mat-error>\r\n                            </mat-form-field>\r\n                      </div>\r\n                      <div  fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n                          <mat-form-field class=\"w-100\">\r\n                              <input matInput placeholder=\"Password (required)\" #email=\"ngModel\" ngModel name=\"email\" required>\r\n                              <mat-error *ngIf=\"email.invalid\">Please enter a valid message</mat-error>\r\n                            </mat-form-field>\r\n                      </div>\r\n                      <div class=\"button-wrap\" fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n                          <button class=\"btn-project\" mat-raised-button color=\"primary\" type=\"submit\">Log in</button>\r\n                        </div>\r\n                      </form>\r\n                </div>\r\n                <div class=\"register-wrapper pr-15\" fxFlex=\"100\" fxFlex.gt-md=\"50\" fxFlex.md=\"50\">\r\n                    <div class=\"title\">\r\n                        <h3>Register</h3>\r\n                      </div>\r\n                      <div class=\"register-body\">\r\n                        <p>Create new account today to reap the benefits of a personalized shopping experience.</p>\r\n                        <form fxLayout=\"row wrap\">\r\n                            <div  fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n                                <mat-form-field class=\"w-100\">\r\n                                    <input matInput placeholder=\"Username or email address (required)\" #name=\"ngModel\" ngModel name=\"name\" required>\r\n                                    <mat-error *ngIf=\"name.invalid\">Please enter a valid message</mat-error>\r\n                                  </mat-form-field>\r\n                            </div>\r\n\r\n                            <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>\r\n                            <div class=\"button-wrap\" fxFlex=\"100\" fxFlex.gt-sm=\"100\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n                                <button class=\"btn-project\" mat-raised-button color=\"primary\" type=\"submit\">Register</button>\r\n                              </div>\r\n                            </form>\r\n                      </div>\r\n                  </div>\r\n        </div>\r\n      </mat-card>\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "7+Mb":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/error-page/error-page.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"error sec-padding\">\r\n  <div class=\"container\">\r\n     <div class=\"page404\">\r\n        Oops! Error 404\r\n     </div>\r\n     <div class=\"not-found\">\r\n        Page Not Found\r\n     </div>\r\n     <div class=\"error_description\">\r\n       <p>We can't seem to find the page you're looking for.</p>\r\n     </div>\r\n     <button mat-raised-button color=\"primary\">BACK TO HOME</button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "7/l4":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/wishlist/wishlist.component.ts ***!
  \*****************************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_wishlist_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./wishlist.component.html */ "/+o5");
/* harmony import */ var _wishlist_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wishlist.component.sass */ "H39S");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/cart.service */ "bjOM");
/* harmony import */ var _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/wishlist.service */ "m4vo");







let WishlistComponent = class WishlistComponent {
    constructor(cartService, wishlistService) {
        this.cartService = cartService;
        this.wishlistService = wishlistService;
        this.product = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
        this.wishlistItems = [];
        this.product = this.wishlistService.getProducts();
        this.product.subscribe(products => this.wishlistItems = products);
    }
    ngOnInit() {
    }
    // Add to cart
    addToCart(product, quantity = 1) {
        if (quantity > 0)
            this.cartService.addToCart(product, quantity);
        this.wishlistService.removeFromWishlist(product);
    }
    // Remove from wishlist
    removeItem(product) {
        this.wishlistService.removeFromWishlist(product);
    }
};
WishlistComponent.ctorParameters = () => [
    { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] },
    { type: _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_6__["WishlistService"] }
];
WishlistComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-wishlist',
        template: _raw_loader_wishlist_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_wishlist_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"], _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_6__["WishlistService"]])
], WishlistComponent);



/***/ }),

/***/ "8T1/":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/checkout/checkout.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-breadcrumb [title]=\"'Checkout'\" [breadcrumb]=\"'Checkout'\"></app-breadcrumb>\r\n\r\n<div class=\"container\">\r\n  <div class=\"checkout sec-padding\">\r\n      <div fxLayout=\"row wrap\" class=\"\">\r\n          <div class=\"billing-details  pr-15\" fxFlex=\"100\" fxFlex.gt-md=\"50\" fxFlex.md=\"50\">\r\n            <div class=\"header-title\">\r\n                <h2>Billing Details</h2>\r\n            </div>\r\n\r\n              <form fxLayout=\"row wrap\">\r\n                  <div  fxFlex=\"100\" fxFlex.gt-md=\"50\" fxFlex.md=\"50\" class=\"mt-20 pr-5\" ngClass.sm=\"mt-10\" ngClass.xs=\"mt-10\">\r\n                      <mat-form-field class=\"w-100\">\r\n                          <input matInput placeholder=\"First name (required)\" #name=\"ngModel\" ngModel name=\"name\" required>\r\n                          <mat-error *ngIf=\"name.invalid\">Please enter a valid message</mat-error>\r\n                        </mat-form-field>\r\n                  </div>\r\n                  <div  fxFlex=\"100\" fxFlex.gt-md=\"50\" fxFlex.md=\"50\" class=\"pl-5 mt-20\" ngClass.sm=\"mt-10\" ngClass.xs=\"mt-10\">\r\n                      <mat-form-field class=\"w-100\">\r\n                          <input matInput placeholder=\"Last name (required)\" #email=\"ngModel\" ngModel name=\"email\" required>\r\n                          <mat-error *ngIf=\"email.invalid\">Please enter a valid message</mat-error>\r\n                        </mat-form-field>\r\n                  </div>\r\n                  <div  fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"mt-20\" ngClass.sm=\"mt-10\" ngClass.xs=\"mt-10\">\r\n                      <mat-form-field class=\"w-100\">\r\n                          <input matInput placeholder=\"Company name (optional)\" #subject=\"ngModel\" ngModel name=\"subject\">\r\n                        </mat-form-field>\r\n                  </div>\r\n                  <div  fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"mt-20\" ngClass.sm=\"mt-10\" ngClass.xs=\"mt-10\">\r\n                      <mat-form-field class=\"w-100\">\r\n                          <input matInput placeholder=\"Address\" #address=\"ngModel\" ngModel name=\"address\">\r\n                          <mat-error *ngIf=\"address.invalid\">Please enter a valid message</mat-error>\r\n                        </mat-form-field>\r\n                  </div>\r\n                  <div  fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"mt-20\" ngClass.sm=\"mt-10\" ngClass.xs=\"mt-10\">\r\n                      <mat-form-field class=\"w-100\">\r\n                          <input matInput placeholder=\"Town/city\" #town=\"ngModel\" ngModel name=\"town/city\">\r\n                          <mat-error *ngIf=\"town.invalid\">Please enter a valid message</mat-error>\r\n                        </mat-form-field>\r\n                  </div>\r\n                  <div  fxFlex=\"100\" fxFlex.gt-md=\"50\" fxFlex.md=\"50\" class=\"mt-20 pr-5\" ngClass.sm=\"mt-10\" ngClass.xs=\"mt-10\">\r\n                      <mat-form-field class=\"w-100\">\r\n                          <input matInput placeholder=\"State / Country (required)\" #state=\"ngModel\" ngModel name=\"state\" required>\r\n                          <mat-error *ngIf=\"state.invalid\">Please enter a valid message</mat-error>\r\n                        </mat-form-field>\r\n                  </div>\r\n                  <div  fxFlex=\"100\" fxFlex.gt-md=\"50\" fxFlex.md=\"50\" class=\"pl-5 mt-20\" ngClass.sm=\"mt-10\" ngClass.xs=\"mt-10\">\r\n                      <mat-form-field class=\"w-100\">\r\n                          <input matInput placeholder=\"Postcode / zip (required)\" #postcode=\"ngModel\" ngModel name=\"postcode\" required>\r\n                          <mat-error *ngIf=\"postcode.invalid\">Please enter a valid message</mat-error>\r\n                        </mat-form-field>\r\n                  </div>\r\n                  <div  fxFlex=\"100\" fxFlex.gt-md=\"50\" fxFlex.md=\"50\" class=\"mt-20 pr-5\" ngClass.sm=\"mt-10\" ngClass.xs=\"mt-10\">\r\n                      <mat-form-field class=\"w-100\">\r\n                          <input matInput placeholder=\"Email Address (required)\" #email=\"ngModel\" ngModel name=\"email\" required>\r\n                          <mat-error *ngIf=\"email.invalid\">Please enter a valid message</mat-error>\r\n                        </mat-form-field>\r\n                  </div>\r\n                  <div  fxFlex=\"100\" fxFlex.gt-md=\"50\" fxFlex.md=\"50\" class=\"pl-5 mt-20\" ngClass.sm=\"mt-10\" ngClass.xs=\"mt-10\">\r\n                      <mat-form-field class=\"w-100\">\r\n                          <input matInput placeholder=\"Phone (required)\" #phone=\"ngModel\" ngModel name=\"phone\" required>\r\n                          <mat-error *ngIf=\"phone.invalid\">Please enter a valid message</mat-error>\r\n                        </mat-form-field>\r\n                  </div>\r\n                  <div class=\"add-info\">\r\n                    <h3>Additional information</h3>\r\n                    <p class=\"text-muted\">Order notes (optional)</p>\r\n\r\n                  </div>\r\n                  <div  fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"mt-20\" ngClass.sm=\"mt-10\" ngClass.xs=\"mt-10\">\r\n                      <mat-form-field class=\"w-100\">\r\n                          <textarea placeholder=\"Post content\" matInput rows=\"4\" ngModel name=\"content\"></textarea>\r\n                        </mat-form-field>\r\n                  </div>\r\n                  <div class=\"button-wrap\" fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n                      <button class=\"btn-project\" mat-raised-button  color=\"primary\" type=\"submit\">Submit Review</button>\r\n                    </div>\r\n                  </form>\r\n          </div>\r\n          <div class=\"mainOrder-wrapper pl-15\" fxFlex=\"100\" fxFlex.gt-md=\"50\" fxFlex.md=\"50\">\r\n            <div class=\"main-order \" >\r\n              <div class=\"order-box\">\r\n                  <div class=\"title-box\">\r\n                      <div>Product <span class=\"tl-amount\"> Total</span></div>\r\n                  </div>\r\n                  <ul class=\"price-list\" *ngIf='buyProducts.length'>\r\n                    <li *ngFor=\"let item of buyProducts\">\r\n                       {{ item.product.name }} × {{ item.quantity }}\r\n                      <span>\r\n                       {{ item.product.price * item.quantity | currency:productService?.currency:'symbol' }}\r\n                        </span>\r\n                    </li>\r\n                </ul>\r\n                <ul class=\"quantity\" *ngIf='buyProducts.length <= 0'>\r\n                  <li class=\"empty-checkout\"> There are no products in cart </li>\r\n                 </ul>\r\n                <ul class=\"total-amount\">\r\n                  <li>\r\n                    Subtotal <span class=\"amount\">{{ getTotal() | async | currency:productService?.currency:'symbol'}}</span>\r\n                  </li>\r\n                  <li *ngIf='buyProducts.length'>\r\n                    Shipping\r\n                   <div class=\"shipping\">\r\n                      <div class=\"shopping-option\">\r\n                        <mat-radio-group>\r\n                          <mat-radio-button *ngFor=\"let payment of payments\" [value]=\"payment\">{{payment}}</mat-radio-button>\r\n                        </mat-radio-group>\r\n                      </div>\r\n\r\n                   </div>\r\n                  </li>\r\n              </ul>\r\n              <ul class=\"total\">\r\n                <li>Total <span class=\"count\">{{ getTotal() | async | currency:productService?.currency:'symbol'}}</span></li>\r\n            </ul>\r\n            <div class=\"paymentFinal\">\r\n              <mat-radio-group>\r\n                <mat-radio-button fxLayout=\"column\" *ngFor=\"let payment of paymantWay\" [value]=\"payment\">{{payment}}</mat-radio-button>\r\n              </mat-radio-group>\r\n            </div>\r\n            <div class=\"order\">\r\n              <button class=\"btn-project\" mat-raised-button color=\"primary\" type=\"submit\">PLACE ORDER</button>\r\n            </div>\r\n               </div>\r\n          </div>\r\n          </div>\r\n\r\n       </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "E2My":
/*!***********************************************************************!*\
  !*** ./src/app/components/pages/my-account/my-account.component.sass ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1hY2NvdW50LmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "E5HE":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/checkout/checkout.component.ts ***!
  \*****************************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_checkout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./checkout.component.html */ "8T1/");
/* harmony import */ var _checkout_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout.component.sass */ "O51X");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/cart.service */ "bjOM");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/product.service */ "6MrQ");







let CheckoutComponent = class CheckoutComponent {
    constructor(cartService, productService) {
        this.cartService = cartService;
        this.productService = productService;
        this.cartItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
        this.buyProducts = [];
        this.payments = ['Create an Account?', 'Flat Rate'];
        this.paymantWay = ['Direct Bank Transfer', 'PayPal'];
    }
    ngOnInit() {
        this.cartItems = this.cartService.getItems();
        this.cartItems.subscribe(products => this.buyProducts = products);
        this.getTotal().subscribe(amount => this.amount = amount);
    }
    getTotal() {
        return this.cartService.getTotalAmount();
    }
};
CheckoutComponent.ctorParameters = () => [
    { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: _shared_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] }
];
CheckoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkout',
        template: _raw_loader_checkout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkout_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"], _shared_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]])
], CheckoutComponent);



/***/ }),

/***/ "Ep5P":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/about-us/about-us.component.ts ***!
  \*****************************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_about_us_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./about-us.component.html */ "WnII");
/* harmony import */ var _about_us_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us.component.sass */ "GOP7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let AboutUsComponent = class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutUsComponent.ctorParameters = () => [];
AboutUsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-about-us',
        template: _raw_loader_about_us_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_about_us_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AboutUsComponent);



/***/ }),

/***/ "Fe98":
/*!*******************************************************!*\
  !*** ./src/app/components/pages/faq/faq.component.ts ***!
  \*******************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_faq_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./faq.component.html */ "sjvs");
/* harmony import */ var _faq_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq.component.sass */ "rpgz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let FaqComponent = class FaqComponent {
    constructor() { }
    ngOnInit() {
    }
};
FaqComponent.ctorParameters = () => [];
FaqComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-faq',
        template: _raw_loader_faq_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_faq_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], FaqComponent);



/***/ }),

/***/ "G8qM":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/error-page/error-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_error_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./error-page.component.html */ "7+Mb");
/* harmony import */ var _error_page_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-page.component.sass */ "0Jpg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let ErrorPageComponent = class ErrorPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
ErrorPageComponent.ctorParameters = () => [];
ErrorPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-error-page',
        template: _raw_loader_error_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_error_page_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ErrorPageComponent);



/***/ }),

/***/ "GLl4":
/*!***************************************************************!*\
  !*** ./src/app/components/pages/contact/contact.component.ts ***!
  \***************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contact.component.html */ "ONj+");
/* harmony import */ var _contact_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.component.sass */ "czJW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent.ctorParameters = () => [];
ContactComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contact',
        template: _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contact_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ContactComponent);



/***/ }),

/***/ "GOP7":
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/about-us/about-us.component.sass ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC11cy5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "H39S":
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/wishlist/wishlist.component.sass ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aXNobGlzdC5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "KIXn":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/my-account/my-account.component.ts ***!
  \*********************************************************************/
/*! exports provided: MyAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountComponent", function() { return MyAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_my_account_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./my-account.component.html */ "0UxC");
/* harmony import */ var _my_account_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-account.component.sass */ "E2My");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let MyAccountComponent = class MyAccountComponent {
    constructor() { }
    ngOnInit() {
    }
};
MyAccountComponent.ctorParameters = () => [];
MyAccountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-my-account',
        template: _raw_loader_my_account_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_account_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], MyAccountComponent);



/***/ }),

/***/ "O51X":
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/checkout/checkout.component.sass ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja291dC5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "ONj+":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/contact/contact.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-breadcrumb [title]=\"'Contactanos'\" [breadcrumb]=\"'Contactanos'\"></app-breadcrumb>\r\n\r\n<div class=\"contact-page sec-padding\">\r\n  <div class=\"container\">\r\n  \r\n  <mat-card>\r\n    <div class=\"col-lg-7 map\">\r\n      <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1950.9014734820437!2d-75.19644908609263!3d-12.057075058610497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1635009960574!5m2!1ses-419!2spe\" allowfullscreen></iframe>\r\n  </div>\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"start start\" class=\"mt-20\">\r\n      <div fxFlex=\"100\"   fxFlex.gt-sm=\"60\" class=\"left-info-panel\">\r\n    \r\n        <div class=\"title\">\r\n            <h3>Contactanos</h3>\r\n        </div>\r\n  \r\n         <ul>\r\n           <li>\r\n              <i class=\"material-icons\">home </i>\r\n              <br>\r\n            <h4>Direccion</h4>\r\n            <br>\r\n           <p class=\"text-muted\">Jr. San Carlos 365 - San Carlos</p>\r\n           </li>\r\n           <li>\r\n              <i class=\"material-icons\">call </i>\r\n              <br>\r\n            <h4>Telefono</h4>\r\n            <br>\r\n            <p class=\"text-muted\">967682083</p>\r\n           </li>\r\n           <li>\r\n              <i class=\"material-icons\">email </i>\r\n              <br>\r\n            <h4>Email</h4>\r\n            <br>\r\n            <p class=\" text-muted text-muted\">tien.contactoperu@gmail.com</p>\r\n           </li>\r\n         </ul>\r\n      </div>\r\n      <div fxFlex=\"100\"   fxFlex.gt-sm=\"60\" class=\"contact-form\">\r\n          <div class=\"title\">\r\n              <h3>Contactanos</h3>\r\n          </div>\r\n          <form fxLayout=\"row wrap\">\r\n            <div  fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n                <mat-form-field class=\"w-100\">\r\n                    <input matInput placeholder=\"Tu nombre es (requerido)\" #name=\"ngModel\" ngModel name=\"name\" required>\r\n                    <mat-error *ngIf=\"name.invalid\">Por favor ingrese un nombre</mat-error>\r\n                  </mat-form-field>\r\n            </div>\r\n            <div  fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n                <mat-form-field class=\"w-100\">\r\n                    <input matInput placeholder=\"Tu Email es (requerido)\" #email=\"ngModel\" ngModel name=\"email\" required>\r\n                    <mat-error *ngIf=\"email.invalid\">Por favor ingrese un email</mat-error>\r\n                  </mat-form-field>\r\n            </div>\r\n            <div  fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n                <mat-form-field class=\"w-100\">\r\n                    <input matInput placeholder=\"Asunto\" #subject=\"ngModel\" ngModel name=\"subject\" required>\r\n                    <mat-error *ngIf=\"subject.invalid\">Por favor ingrese un asunto</mat-error>\r\n                  </mat-form-field>\r\n            </div>\r\n            <div  fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n                <mat-form-field class=\"w-100\">\r\n                    <textarea placeholder=\"Mensaje\" matInput rows=\"6\" ngModel name=\"content\" required></textarea>\r\n                  </mat-form-field>\r\n            </div>\r\n            <div class=\"button-wrap\" fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n                <button class=\"btn-project\" mat-raised-button color=\"primary\" type=\"submit\">Send</button>\r\n              </div>\r\n            </form>\r\n      </div>\r\n    </div>\r\n    \r\n  </mat-card>\r\n</div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "PJJn":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/reviews/reviews.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-breadcrumb [title]=\"'Testimonials'\" [breadcrumb]=\"'Testimonials'\"></app-breadcrumb>\r\n\r\n<div class=\"sec-padding\">\r\n    <div class=\"container\">\r\n        <div fxLayout=\"row wrap\" class=\"testimonials-component\" >\r\n            \r\n            <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\" >\r\n              <mat-card class=\"light-block\" fxLayout=\"column\"  fxLayoutAlign=\"start center\" >\r\n                <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" appearance=\"circle\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n                <ngx-skeleton-loader\r\n                *ngIf=\"!contentLoaded\"\r\n                  count=\"2\"\r\n                  [theme]=\"{ 'border-radius': '0', width: '250px', height: '15px' }\"\r\n                ></ngx-skeleton-loader>\r\n                <div *ngIf=\"contentLoaded\" class=\"reviewer\"><img src=\"assets/images/avatars/1.png\" alt=\"\"></div>\r\n                <div *ngIf=\"contentLoaded\" class=\"content text-center\">\r\n                 \r\n                  <div  class=\"text-muted m-0 text\">Who loves or pursues or desires\r\n                    to obtain pain of itself, because it\r\n                    can procure great pleasure.</div>\r\n                    <p class=\"name\" *ngIf=\"contentLoaded\">Michael Miller</p>\r\n                </div>\r\n              </mat-card>\r\n            </div>\r\n            <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\" >\r\n                <mat-card class=\"light-block\" fxLayout=\"column\"  fxLayoutAlign=\"start center\" >\r\n                  <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" appearance=\"circle\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n                  <ngx-skeleton-loader\r\n                  *ngIf=\"!contentLoaded\"\r\n                    count=\"2\"\r\n                    [theme]=\"{ 'border-radius': '0', width: '250px', height: '15px' }\"\r\n                  ></ngx-skeleton-loader>\r\n                  <div *ngIf=\"contentLoaded\" class=\"reviewer\"><img src=\"assets/images/avatars/2.png\" alt=\"\"></div>\r\n                  <div *ngIf=\"contentLoaded\" class=\"content text-center\">\r\n                   \r\n                    <div  class=\"text-muted m-0 text\">Who loves or pursues or desires\r\n                      to obtain pain of itself, because it\r\n                      can procure great pleasure.</div>\r\n                      <p class=\"name\" *ngIf=\"contentLoaded\">Michael Miller</p>\r\n                  </div>\r\n                </mat-card>\r\n              </div>\r\n              <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\" >\r\n                <mat-card class=\"light-block\" fxLayout=\"column\"  fxLayoutAlign=\"start center\" >\r\n                  <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" appearance=\"circle\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n                  <ngx-skeleton-loader\r\n                  *ngIf=\"!contentLoaded\"\r\n                    count=\"2\"\r\n                    [theme]=\"{ 'border-radius': '0', width: '250px', height: '15px' }\"\r\n                  ></ngx-skeleton-loader>\r\n                  <div *ngIf=\"contentLoaded\" class=\"reviewer\"><img src=\"assets/images/avatars/3.png\" alt=\"\"></div>\r\n                  <div *ngIf=\"contentLoaded\" class=\"content text-center\">\r\n                   \r\n                    <div  class=\"text-muted m-0 text\">Who loves or pursues or desires\r\n                      to obtain pain of itself, because it\r\n                      can procure great pleasure.</div>\r\n                      <p class=\"name\" *ngIf=\"contentLoaded\">Michael Miller</p>\r\n                  </div>\r\n                </mat-card>\r\n              </div>\r\n              <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\" >\r\n                <mat-card class=\"light-block\" fxLayout=\"column\"  fxLayoutAlign=\"start center\" >\r\n                  <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" appearance=\"circle\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n                  <ngx-skeleton-loader\r\n                  *ngIf=\"!contentLoaded\"\r\n                    count=\"2\"\r\n                    [theme]=\"{ 'border-radius': '0', width: '250px', height: '15px' }\"\r\n                  ></ngx-skeleton-loader>\r\n                  <div *ngIf=\"contentLoaded\" class=\"reviewer\"><img src=\"assets/images/avatars/4.png\" alt=\"\"></div>\r\n                  <div *ngIf=\"contentLoaded\" class=\"content text-center\">\r\n                   \r\n                    <div  class=\"text-muted m-0 text\">Who loves or pursues or desires\r\n                      to obtain pain of itself, because it\r\n                      can procure great pleasure.</div>\r\n                      <p class=\"name\" *ngIf=\"contentLoaded\">Michael Miller</p>\r\n                  </div>\r\n                </mat-card>\r\n               \r\n              </div>\r\n          </div>\r\n          <div fxLayout=\"row wrap\" class=\"testimonials-component\" >\r\n            <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\" >\r\n                <mat-card class=\"light-block\" fxLayout=\"column\"  fxLayoutAlign=\"start center\" >\r\n                  <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" appearance=\"circle\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n                  <ngx-skeleton-loader\r\n                  *ngIf=\"!contentLoaded\"\r\n                    count=\"2\"\r\n                    [theme]=\"{ 'border-radius': '0', width: '250px', height: '15px' }\"\r\n                  ></ngx-skeleton-loader>\r\n                  <div *ngIf=\"contentLoaded\" class=\"reviewer\"><img src=\"assets/images/avatars/5.png\" alt=\"\"></div>\r\n                  <div *ngIf=\"contentLoaded\" class=\"content text-center\">\r\n                   \r\n                    <div  class=\"text-muted m-0 text\">Who loves or pursues or desires\r\n                      to obtain pain of itself, because it\r\n                      can procure great pleasure.</div>\r\n                      <p class=\"name\" *ngIf=\"contentLoaded\">Michael Miller</p>\r\n                  </div>\r\n                </mat-card>\r\n              </div>\r\n              <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\" >\r\n                <mat-card class=\"light-block\" fxLayout=\"column\"  fxLayoutAlign=\"start center\" >\r\n                  <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" appearance=\"circle\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n                  <ngx-skeleton-loader\r\n                  *ngIf=\"!contentLoaded\"\r\n                    count=\"2\"\r\n                    [theme]=\"{ 'border-radius': '0', width: '250px', height: '15px' }\"\r\n                  ></ngx-skeleton-loader>\r\n                  <div *ngIf=\"contentLoaded\" class=\"reviewer\"><img src=\"assets/images/avatars/5.png\" alt=\"\"></div>\r\n                  <div *ngIf=\"contentLoaded\" class=\"content text-center\">\r\n                   \r\n                    <div  class=\"text-muted m-0 text\">Who loves or pursues or desires\r\n                      to obtain pain of itself, because it\r\n                      can procure great pleasure.</div>\r\n                      <p class=\"name\" *ngIf=\"contentLoaded\">Michael Miller</p>\r\n                  </div>\r\n                </mat-card>\r\n              </div>\r\n              <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\" >\r\n                <mat-card class=\"light-block\" fxLayout=\"column\"  fxLayoutAlign=\"start center\" >\r\n                  <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" appearance=\"circle\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n                  <ngx-skeleton-loader\r\n                  *ngIf=\"!contentLoaded\"\r\n                    count=\"2\"\r\n                    [theme]=\"{ 'border-radius': '0', width: '250px', height: '15px' }\"\r\n                  ></ngx-skeleton-loader>\r\n                  <div *ngIf=\"contentLoaded\" class=\"reviewer\"><img src=\"assets/images/avatars/5.png\" alt=\"\"></div>\r\n                  <div *ngIf=\"contentLoaded\" class=\"content text-center\">\r\n                   \r\n                    <div  class=\"text-muted m-0 text\">Who loves or pursues or desires\r\n                      to obtain pain of itself, because it\r\n                      can procure great pleasure.</div>\r\n                      <p class=\"name\" *ngIf=\"contentLoaded\">Michael Miller</p>\r\n                  </div>\r\n                </mat-card>\r\n              </div>\r\n              <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\" >\r\n                <mat-card class=\"light-block\" fxLayout=\"column\"  fxLayoutAlign=\"start center\" >\r\n                  <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" appearance=\"circle\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n                  <ngx-skeleton-loader\r\n                  *ngIf=\"!contentLoaded\"\r\n                    count=\"2\"\r\n                    [theme]=\"{ 'border-radius': '0', width: '250px', height: '15px' }\"\r\n                  ></ngx-skeleton-loader>\r\n                  <div *ngIf=\"contentLoaded\" class=\"reviewer\"><img src=\"assets/images/avatars/5.png\" alt=\"\"></div>\r\n                  <div *ngIf=\"contentLoaded\" class=\"content text-center\">\r\n                   \r\n                    <div  class=\"text-muted m-0 text\">Who loves or pursues or desires\r\n                      to obtain pain of itself, because it\r\n                      can procure great pleasure.</div>\r\n                      <p class=\"name\" *ngIf=\"contentLoaded\">Michael Miller</p>\r\n                  </div>\r\n                </mat-card>\r\n              </div>\r\n          </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "WOLP":
/*!**********************************************************!*\
  !*** ./src/app/components/pages/pages-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart/cart.component */ "myFx");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkout/checkout.component */ "E5HE");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "GLl4");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "7/l4");
/* harmony import */ var _compare_compare_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./compare/compare.component */ "iMJl");
/* harmony import */ var _my_account_my_account_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-account/my-account.component */ "KIXn");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about-us/about-us.component */ "Ep5P");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./faq/faq.component */ "Fe98");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./error-page/error-page.component */ "G8qM");
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reviews/reviews.component */ "Zbuv");
/* harmony import */ var _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./order-success/order-success.component */ "w8cA");














const routes = [
    {
        path: '',
        children: [
            { path: 'about', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__["AboutUsComponent"] },
            { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"] },
            { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_4__["CheckoutComponent"] },
            { path: 'faq', component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_10__["FaqComponent"] },
            { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
            { path: 'wishlist', component: _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_6__["WishlistComponent"] },
            { path: 'compare', component: _compare_compare_component__WEBPACK_IMPORTED_MODULE_7__["CompareComponent"] },
            { path: 'my-account', component: _my_account_my_account_component__WEBPACK_IMPORTED_MODULE_8__["MyAccountComponent"] },
            { path: 'error', component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_11__["ErrorPageComponent"] },
            { path: 'testimonials', component: _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_12__["ReviewsComponent"] },
            { path: 'order-success', component: _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_13__["OrderSuccessComponent"] }
        ]
    }
];
let PagesRoutingModule = class PagesRoutingModule {
};
PagesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PagesRoutingModule);



/***/ }),

/***/ "WnII":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/about-us/about-us.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-breadcrumb [title]=\"'Nosotros'\" [breadcrumb]=\"'Nosotros'\"></app-breadcrumb>\r\n<!-- section start -->\r\n<div class=\"about-us-wrapper\">\r\n  <div class=\"container\">\r\n    <div class=\"about-section sec-padding\" fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"left-info-panel\">\r\n      <img src=\"assets/images/about-us/aboutUs.jpg\" alt=\"\">\r\n      </div>\r\n      <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"left-info-panel\">\r\n         <div class=\"about-us-intro\">\r\n             <h2>Tiendas TienPeru</h2>\r\n             <p>Somos una tienda online dedicada a la venta de tecnologìa y accesorios de moda\r\n               para hombres y mujeres. Hemos marcado tendencia los ultimos años con nuestros productos,\r\n               ya que cuentan con la mejor calidad y durabilidad.\r\n             </p>\r\n             <div class=\"accordions\">\r\n             <mat-accordion>\r\n                <mat-expansion-panel>\r\n                  <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>How to become our partner</h4>\r\n                    </mat-panel-title>\r\n                  </mat-expansion-panel-header>\r\n                  <p>Nulla ac accumsan urna. Praesent id leo ut velit tempor gravida. Nulla facilisi. Nam blandit rhoncus lectus, eu euismod diam rhoncus et.\r\n                      In sollicitudin bibendum odio, at tristique purus elementum sit amet. Integer vulputate, justo at lacinia suscipit, erat nibh interdum augue, sit amet hendrerit neque ipsum at eros.</p>\r\n                </mat-expansion-panel>\r\n                <mat-expansion-panel>\r\n                    <mat-expansion-panel-header>\r\n                      <mat-panel-title>\r\n                          <h4>Sell your products here</h4>\r\n                      </mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n                    <p>Nulla ac accumsan urna. Praesent id leo ut velit tempor gravida.\r\n                      In sollicitudin bibendum odio, at tristique purus elementum sit amet. Integer vulputate, justo at lacinia suscipit, erat nibh interdum augue, sit amet hendrerit neque ipsum at eros.</p>\r\n                  </mat-expansion-panel>\r\n                  <mat-expansion-panel>\r\n                      <mat-expansion-panel-header>\r\n                        <mat-panel-title>\r\n                            <h4>Awesome quality</h4>\r\n                        </mat-panel-title>\r\n                      </mat-expansion-panel-header>\r\n                      <p>Nulla ac accumsan urna. Praesent id leo ut velit tempor gravida. Nulla facilisi. Nam blandit rhoncus lectus, eu euismod diam rhoncus et.\r\n                          In sollicitudin bibendum odio, at tristique purus elementum sit amet. </p>\r\n                    </mat-expansion-panel>\r\n\r\n              </mat-accordion>\r\n            </div>\r\n         </div>\r\n          </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"our-values sec-padding\">\r\n      <div class=\"container\">\r\n        <div class=\"title-wrapper\">\r\n          <h2>Our Great Services </h2>\r\n          <p>Boldman has 10+ years of experience with providing wide area of specialty services works listed below.\r\n            </p>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" class=\"box-wraper\">\r\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"box\">\r\n              <div class=\"content\">\r\n                <div class=\"icon-box\">\r\n                    <i class=\"material-icons\">\r\n                        done_all\r\n                        </i>\r\n                </div>\r\n                  <h4>Pure quality</h4>\r\n                  <p>Praesent id leo ut velit tempor gravida. Nam blandit rhoncus lectus, eu euismod diam</p>\r\n              </div>\r\n             </div>\r\n             <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"box\">\r\n                <div class=\"content\">\r\n                  <div class=\"icon-box\">\r\n                      <i class=\"material-icons\">\r\n                          build\r\n                          </i>\r\n                  </div>\r\n                    <h4>Free service</h4>\r\n                    <p>Praesent id leo ut velit tempor gravida. Nam blandit rhoncus lectus, eu euismod diam</p>\r\n                </div>\r\n               </div>\r\n               <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"box\">\r\n                  <div class=\"content\">\r\n                    <div class=\"icon-box\">\r\n                        <i class=\"material-icons\">\r\n                            local_shipping\r\n                            </i>\r\n                    </div>\r\n                      <h4>Home delivery</h4>\r\n                      <p>Praesent id leo ut velit tempor gravida. Nam blandit rhoncus lectus, eu euismod diam</p>\r\n                  </div>\r\n                 </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"our-team sec-padding\">\r\n      <div class=\"container\">\r\n        <div class=\"title-wrapper\">\r\n          <h2>Our Experts </h2>\r\n          <p>Our development opt in to the projects they genuinely want to work on,<br>committing wholeheartedly to delivering.\r\n            </p>\r\n        </div>\r\n        <div class=\"team-members\" fxLayout=\"row\" fxLayout.lt-sm=\"column\">\r\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"item\">\r\n                <div class=\"single-team-member\">\r\n                    <div class=\"img-box\"><img src=\"assets/images/about-us/t1.jpg\" alt=\"Awesome Image\">\r\n                      <div class=\"overlay\">\r\n                        <div class=\"box\">\r\n                          <div class=\"content\">\r\n                            <ul class=\"social list-inline text-center\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\">\r\n                              <mat-toolbar color=\"primary\" class=\"social list-inline text-center\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\">\r\n                         \r\n                                <li><a href=\"\"><i class=\"fa fa-facebook-f\"></i></a></li>\r\n                                <li><a href=\"\"><i class=\"fa fa-linkedin\"></i></a></li>\r\n                                <li><a href=\"\"><i class=\"fa fa-instagram\"></i></a></li>\r\n                                <li><a href=\"\"><i class=\"fa fa-twitter\"></i></a></li>\r\n                             \r\n                            </mat-toolbar >\r\n                            </ul>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"text-box\">\r\n                      <h4>Peter Simons</h4>\r\n                      <p>CEO &amp; Founder</p>\r\n                    </div>\r\n                  </div>\r\n            </div>\r\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"item\">\r\n              <div class=\"single-team-member\">\r\n                  <div class=\"img-box\"><img src=\"assets/images/about-us/t2.jpg\" alt=\"Awesome Image\">\r\n                    <div class=\"overlay\">\r\n                      <div class=\"box\">\r\n                        <div class=\"content\">\r\n                          <ul class=\"social list-inline text-center\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\">\r\n                            <mat-toolbar color=\"primary\" class=\"social list-inline text-center\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\">\r\n                       \r\n                              <li><a href=\"\"><i class=\"fa fa-facebook-f\"></i></a></li>\r\n                              <li><a href=\"\"><i class=\"fa fa-linkedin\"></i></a></li>\r\n                              <li><a href=\"\"><i class=\"fa fa-instagram\"></i></a></li>\r\n                              <li><a href=\"\"><i class=\"fa fa-twitter\"></i></a></li>\r\n                           \r\n                          </mat-toolbar >\r\n                          </ul>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"text-box\">\r\n                    <h4>Peter Simons</h4>\r\n                    <p>CEO &amp; Founder</p>\r\n                  </div>\r\n                </div>\r\n          </div>\r\n          <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"item\">\r\n            <div class=\"single-team-member\">\r\n                <div class=\"img-box\"><img src=\"assets/images/about-us/t3.jpg\" alt=\"Awesome Image\">\r\n                  <div class=\"overlay\">\r\n                    <div class=\"box\">\r\n                      <div class=\"content\">\r\n                        <ul class=\"social list-inline text-center\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\">\r\n                          <mat-toolbar color=\"primary\" class=\"social list-inline text-center\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\">\r\n                     \r\n                            <li><a href=\"\"><i class=\"fa fa-facebook-f\"></i></a></li>\r\n                            <li><a href=\"\"><i class=\"fa fa-linkedin\"></i></a></li>\r\n                            <li><a href=\"\"><i class=\"fa fa-instagram\"></i></a></li>\r\n                            <li><a href=\"\"><i class=\"fa fa-twitter\"></i></a></li>\r\n                         \r\n                        </mat-toolbar >\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"text-box\">\r\n                  <h4>Peter Simons</h4>\r\n                  <p>CEO &amp; Founder</p>\r\n                </div>\r\n              </div>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"item\">\r\n          <div class=\"single-team-member\">\r\n              <div class=\"img-box\"><img src=\"assets/images/about-us/t4.jpg\" alt=\"Awesome Image\">\r\n                <div class=\"overlay\">\r\n                  <div class=\"box\">\r\n                    <div class=\"content\">\r\n                      <ul class=\"social list-inline text-center\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\">\r\n                        <mat-toolbar color=\"primary\" class=\"social list-inline text-center\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\">\r\n                   \r\n                          <li><a href=\"\"><i class=\"fa fa-facebook-f\"></i></a></li>\r\n                          <li><a href=\"\"><i class=\"fa fa-linkedin\"></i></a></li>\r\n                          <li><a href=\"\"><i class=\"fa fa-instagram\"></i></a></li>\r\n                          <li><a href=\"\"><i class=\"fa fa-twitter\"></i></a></li>\r\n                       \r\n                      </mat-toolbar >\r\n                      </ul>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"text-box\">\r\n                <h4>Peter Simons</h4>\r\n                <p>CEO &amp; Founder</p>\r\n              </div>\r\n            </div>\r\n      </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "Z8vV":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/reviews/reviews.component.sass ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXZpZXdzLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "Zbuv":
/*!***************************************************************!*\
  !*** ./src/app/components/pages/reviews/reviews.component.ts ***!
  \***************************************************************/
/*! exports provided: ReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function() { return ReviewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reviews_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reviews.component.html */ "PJJn");
/* harmony import */ var _reviews_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reviews.component.sass */ "Z8vV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let ReviewsComponent = class ReviewsComponent {
    constructor() {
        this.contentLoaded = false;
    }
    ngOnInit() {
        setTimeout(() => {
            this.contentLoaded = true;
        }, 3000);
    }
};
ReviewsComponent.ctorParameters = () => [];
ReviewsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reviews',
        template: _raw_loader_reviews_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reviews_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ReviewsComponent);



/***/ }),

/***/ "cDJd":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/compare/compare.component.sass ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYXJlLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "czJW":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/contact/contact.component.sass ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "hw+Z":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/cart/cart.component.sass ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "iFLu":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/compare/compare.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-breadcrumb [title]=\"'Compare'\" [breadcrumb]=\"'Compare'\"></app-breadcrumb>\r\n\r\n\r\n <div class=\"compare-component sec-padding\">\r\n  <div class=\"container\">\r\n\r\n\r\n   <div  class=\"p-0\">\r\n      <div class=\"col-sm-12 empty-cart-cls text-center\" *ngIf=\"!products.length\">\r\n          <img src=\"assets/images/backet-01.png\" class=\"img-fluid mb-4\" >\r\n            <h3 class=\"mb-5\"><strong>Compare List is Empty</strong></h3>\r\n            <h4>Explore more shortlist some items.</h4>\r\n      </div>\r\n     <div class=\"table-responsive\" *ngIf=\"products.length\">\r\n        <table class=\"table\">\r\n\r\n            <thead>\r\n            <tr class=\"th-compare\">\r\n                <td>Action</td>\r\n                <th class=\"item-row\" *ngFor=\"let product of products\">\r\n                  <a (click)=\"removeItem(product)\"><i class=\"material-icons\">highlight_off</i></a>\r\n                </th>\r\n            </tr>\r\n            </thead>\r\n            <tbody id=\"table-compare\">\r\n            <!-- Product Name -->\r\n            <tr>\r\n                <th class=\"product-name\">Product Name</th>\r\n                <td class=\"grid-link__title\" *ngFor=\"let product of products\">{{product.name}}</td>\r\n            </tr>\r\n             <!-- Product Price -->\r\n             <tr>\r\n                <th class=\"product-name\">Product Price</th>\r\n                <td class=\"grid-link__title\" *ngFor=\"let product of products\">{{product.price | number : '1.2-2'}}</td>\r\n            </tr>\r\n            <!-- Product Image -->\r\n            <tr>\r\n                <th class=\"product-name \">Product Image</th>\r\n                <td class=\"item-row\" *ngFor=\"let product of products\">\r\n                    <img [src]=\"product.pictures[0].small\" width=\"185\" class=\"featured-image\">\r\n\r\n                </td>\r\n            </tr>\r\n            <!-- Product Description -->\r\n            <tr>\r\n                <th class=\"product-name\">Product Description</th>\r\n                <td class=\"item-row\" *ngFor=\"let product of products\">\r\n                    <p class=\"description-compare\">{{product.shortDetails}}</p>\r\n                </td>\r\n            </tr>\r\n            <!-- Product Availability -->\r\n            <tr>\r\n                <th class=\"product-name\"> Availability </th>\r\n                <td class=\"available-stock\" *ngFor=\"let product of products\">\r\n                    <p> Available In stock </p>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n     </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  </div>\r\n");

/***/ }),

/***/ "iMJl":
/*!***************************************************************!*\
  !*** ./src/app/components/pages/compare/compare.component.ts ***!
  \***************************************************************/
/*! exports provided: CompareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareComponent", function() { return CompareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_compare_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./compare.component.html */ "iFLu");
/* harmony import */ var _compare_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compare.component.sass */ "cDJd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/product.service */ "6MrQ");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/cart.service */ "bjOM");







let CompareComponent = class CompareComponent {
    constructor(productService, cartService) {
        this.productService = productService;
        this.cartService = cartService;
        this.product = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
        this.products = [];
    }
    ngOnInit() {
        this.product = this.productService.getComapreProducts();
        this.product.subscribe(products => this.products = products);
        console.log(this.product);
    }
    // Add to cart
    addToCart(product, quantity = 1) {
        this.cartService.addToCart(product, quantity);
    }
    // Remove from compare list
    removeItem(product) {
        this.productService.removeFromCompare(product);
    }
};
CompareComponent.ctorParameters = () => [
    { type: _shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] }
];
CompareComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-compare',
        template: _raw_loader_compare_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_compare_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"], _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]])
], CompareComponent);



/***/ }),

/***/ "idyo":
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/order-success/order-success.component.sass ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1zdWNjZXNzLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "myFx":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/cart/cart.component.ts ***!
  \*********************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cart_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cart.component.html */ "zYmd");
/* harmony import */ var _cart_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.component.sass */ "hw+Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/cart.service */ "bjOM");






let CartComponent = class CartComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.cartItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
        this.shoppingCartItems = [];
    }
    ngOnInit() {
        this.cartItems = this.cartService.getItems();
        this.cartItems.subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
    }
    // Remove cart items
    removeItem(item) {
        this.cartService.removeFromCart(item);
    }
    // Increase Product Quantity
    increment(product, quantity = 1) {
        this.cartService.updateCartQuantity(product, quantity);
    }
    // Decrease Product Quantity
    decrement(product, quantity = -1) {
        this.cartService.updateCartQuantity(product, quantity);
    }
    // Get Total
    getTotal() {
        return this.cartService.getTotalAmount();
    }
};
CartComponent.ctorParameters = () => [
    { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] }
];
CartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cart',
        template: _raw_loader_cart_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cart_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]])
], CartComponent);



/***/ }),

/***/ "nshy":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/order-success/order-success.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"succesfull-message\" fxLayout=\"column\">\r\n    <span class=\"material-icons\">\r\n        check_circle\r\n        </span>\r\n    <h2>THANK YOU</h2>\r\n<p>Payment Is Successfully Processed And Your Order Is On The Way</p>\r\n<p>Transaction ID:FT7GYJBHL98RFGHYG87</p>\r\n</div>\r\n<div class=\"container\">\r\n    <div class=\"order-success sec-padding\">\r\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between start\"  class=\"\">\r\n            <div class=\"billing-details  pr-15\" fxFlex=\"100\" fxFlex.gt-md=\"45\" fxFlex.md=\"45\">\r\n              <div class=\"header-title\">\r\n                  <h3>Order Details</h3>\r\n              </div>  \r\n              <div class=\"product-order-details mb-30\" fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"start center\">\r\n                  <div class=\"order-img\" fxFlex=\"25\">\r\n                    <img src=\"assets/images/product/small/headphone1/headphone1.png\" alt=\"\" class=\"img-fluid\">\r\n                  </div>\r\n                  <div class=\"order-name \" fxFlex=\"25\">\r\n                      <p class=\"order-name mt-5\">Product Name</p>\r\n                      <span>Headset Perro</span>\r\n                  </div>\r\n                  <div class=\"order-quantity\" fxFlex=\"25\">\r\n                      <p>Quantity</p>\r\n                      <span>1</span>\r\n                  </div>\r\n                  <div class=\"order-price\" fxFlex=\"25\">\r\n                      <p>Price</p>\r\n                      <span>$78.00</span>\r\n                  </div>\r\n              </div>  \r\n              <ul class=\"price-list mb-30\">\r\n                <div class=\"header-title\">\r\n                    <h3>Summary of payments</h3>\r\n                </div>  \r\n                <li>\r\n                 <p>Refunds</p>  <span class=\"amount\">$0.00</span>\r\n                </li>\r\n                <li>\r\n                    <p>Balance</p>  <span class=\"amount\">$10.00</span>\r\n                   </li>\r\n                \r\n            </ul>\r\n            <ul class=\"price-list mb-30\">\r\n                <div class=\"header-title\">\r\n                    <h3>Eligible ID</h3>\r\n                </div>  \r\n                <li>\r\n                 <p>VGHF687YGTU7FTY7</p>  \r\n                </li>\r\n         \r\n                \r\n            </ul>\r\n            <ul class=\"price-list mb-20\">\r\n                <div class=\"header-title\">\r\n                    <h3>Payment method used</h3>\r\n                </div>  \r\n                <li *ngFor=\"let payment of paymantWay\">\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <mat-radio-group  >\r\n                            <mat-radio-button fxLayout=\"column\" [value]=\"payment\"></mat-radio-button> \r\n                          </mat-radio-group>\r\n                          <img [src]=\"payment.image\" alt=\"\">\r\n                          <p>{{payment.title}}</p>\r\n                    </div>\r\n                    <span>{{payment.card}}</span>\r\n                    \r\n                </li>\r\n         \r\n                \r\n            </ul>\r\n            <div class=\"order\">\r\n                <button class=\"btn-project\" mat-raised-button color=\"primary\" type=\"submit\">PROCEED TO PAYMENT</button>\r\n              </div>\r\n            </div>\r\n            <div class=\"mainOrder-wrapper pl-15\" fxFlex=\"100\" fxFlex.gt-md=\"40\" fxFlex.md=\"40\">\r\n              <div class=\"main-order \" >\r\n                <div class=\"order-box\">\r\n                    <div class=\"title-box\">\r\n                        <div>Order Recap </div>\r\n                    </div>\r\n                    <ul class=\"price-list\" >\r\n                      <li >\r\n                        <p>Contracted price</p> \r\n                        <span>\r\n                         $187.00\r\n                          </span>\r\n                      </li>\r\n                      <li >\r\n                        <p>Amount towards deductible</p>\r\n                       <span>\r\n                        $0.00\r\n                         </span>\r\n                     </li>\r\n                     <li >\r\n                        <p> Coinsurance (0%)</p>\r\n                       <span>\r\n                        +$0.00\r\n                         </span>\r\n                     </li>\r\n                     <li >\r\n                        <p> Copayment</p>\r\n                       <span>\r\n                        +$35.00\r\n                         </span>\r\n                     </li>\r\n                  </ul>\r\n                 \r\n                  <ul class=\"price-list\">\r\n                    <li>\r\n                     <p>Toatal deductible,<br>Coinsurance and Copay</p>  <span class=\"amount\">$50.00</span>\r\n                    </li>\r\n                    <li>\r\n                        <p>Maximum out-of-pocket on<br>Insurance policy<br>(not reached)</p>  <span class=\"amount\">$5000.00</span>\r\n                       </li>\r\n                    \r\n                </ul>\r\n                <ul class=\"price-list\">\r\n                    <li>\r\n                     <p>Insurance Responsibility</p>  <span class=\"amount\">$53.00</span>\r\n                    </li>\r\n                    <li>\r\n                        <p>Patient Balance</p>  <span class=\"amount\">$13.55</span>\r\n                       </li>\r\n                    \r\n                </ul>\r\n                <ul class=\"total\">\r\n                  <li>Total <span class=\"count\">$102.00</span></li>\r\n              </ul>\r\n              \r\n                 </div>\r\n            </div>\r\n            </div>\r\n  \r\n         </div>\r\n      </div>\r\n  </div>\r\n  ");

/***/ }),

/***/ "rpgz":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/faq/faq.component.sass ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXEuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "sFyk":
/*!**************************************************!*\
  !*** ./src/app/components/pages/pages.module.ts ***!
  \**************************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart/cart.component */ "myFx");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "GLl4");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "7/l4");
/* harmony import */ var _compare_compare_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./compare/compare.component */ "iMJl");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkout/checkout.component */ "E5HE");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages-routing.module */ "WOLP");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "hGdz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _my_account_my_account_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./my-account/my-account.component */ "KIXn");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./faq/faq.component */ "Fe98");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about-us/about-us.component */ "Ep5P");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./error-page/error-page.component */ "G8qM");
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./reviews/reviews.component */ "Zbuv");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-skeleton-loader */ "WzhS");
/* harmony import */ var _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./order-success/order-success.component */ "w8cA");


















let PagesModule = class PagesModule {
};
PagesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_8__["PagesRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_16__["NgxSkeletonLoaderModule"]
        ],
        declarations: [
            _cart_cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"],
            _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_5__["WishlistComponent"],
            _compare_compare_component__WEBPACK_IMPORTED_MODULE_6__["CompareComponent"],
            _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_7__["CheckoutComponent"],
            _my_account_my_account_component__WEBPACK_IMPORTED_MODULE_11__["MyAccountComponent"],
            _faq_faq_component__WEBPACK_IMPORTED_MODULE_12__["FaqComponent"],
            _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_13__["AboutUsComponent"],
            _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_14__["ErrorPageComponent"],
            _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_15__["ReviewsComponent"],
            _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_17__["OrderSuccessComponent"]
        ]
    })
], PagesModule);



/***/ }),

/***/ "sjvs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/faq/faq.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-breadcrumb [title]=\"'Faq'\" [breadcrumb]=\"'Faq'\"></app-breadcrumb>\r\n\r\n<div class=\"faq sec-padding\">\r\n  <div class=\"container\">\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"start start\"  class=\"p-0\">\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"questions\">\r\n            <div class=\"faq-wrap\">\r\n                <mat-accordion>\r\n                    <mat-expansion-panel>\r\n                      <mat-expansion-panel-header>\r\n                        <mat-panel-title>\r\n                            <span>What is do i have to tell you a few lorem?</span>\r\n                        </mat-panel-title>\r\n                      </mat-expansion-panel-header>\r\n                      <p>\r\n                          Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do eiusmod tempor exercitationemut labore. Love life’s sweetest reward Let it flow it floats back to you.\r\n                        </p>\r\n                    </mat-expansion-panel>\r\n                    <mat-expansion-panel>\r\n                        <mat-expansion-panel-header>\r\n                          <mat-panel-title>\r\n                              <span>What is do i have to tell you a few lorem?</span>\r\n                          </mat-panel-title>\r\n                        </mat-expansion-panel-header>\r\n                        <p>\r\n                            Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do eiusmod tempor exercitationemut labore. Love life’s sweetest reward Let it flow it floats back to you.\r\n                          </p>\r\n                      </mat-expansion-panel>\r\n                      <mat-expansion-panel>\r\n                          <mat-expansion-panel-header>\r\n                            <mat-panel-title>\r\n                                <span>What is do i have to tell you a few lorem?</span>\r\n                            </mat-panel-title>\r\n                          </mat-expansion-panel-header>\r\n                          <p>\r\n                              Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do eiusmod tempor exercitationemut labore. Love life’s sweetest reward Let it flow it floats back to you.\r\n                            </p>\r\n                        </mat-expansion-panel>\r\n                        <mat-expansion-panel>\r\n                            <mat-expansion-panel-header>\r\n                              <mat-panel-title>\r\n                                  <span>What is do i have to tell you a few lorem?</span>\r\n                              </mat-panel-title>\r\n                            </mat-expansion-panel-header>\r\n                            <p>\r\n                                Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do eiusmod tempor exercitationemut labore. Love life’s sweetest reward Let it flow it floats back to you.\r\n                              </p>\r\n                          </mat-expansion-panel>\r\n                  </mat-accordion>\r\n            </div>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"faq-form\">\r\n            <div class=\"text-wrap\">\r\n              <div class=\"title\">\r\n                  <h3>Our Management</h3>\r\n              </div>\r\n                <p>Business analytics (BA) is the practice of iterative, methodical exploration of an\r\n                    organization's data with emphasis on statistical analysis.</p>\r\n                    <form fxLayout=\"row wrap\">\r\n                        <div  fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n                            <mat-form-field class=\"w-100\">\r\n                                <input matInput placeholder=\"Your Name (required)\" #name=\"ngModel\" ngModel name=\"name\" required>\r\n                                <mat-error *ngIf=\"name.invalid\">Please enter a valid message</mat-error>\r\n                              </mat-form-field>\r\n                        </div>\r\n                        <div  fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n                            <mat-form-field class=\"w-100\">\r\n                                <input matInput placeholder=\"Your Email (required)\" #email=\"ngModel\" ngModel name=\"email\" required>\r\n                                <mat-error *ngIf=\"email.invalid\">Please enter a valid message</mat-error>\r\n                              </mat-form-field>\r\n                        </div>\r\n                        <div  fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n                            <mat-form-field class=\"w-100\">\r\n                                <input matInput placeholder=\"Subject\" #subject=\"ngModel\" ngModel name=\"subject\" required>\r\n                                <mat-error *ngIf=\"subject.invalid\">Please enter a valid message</mat-error>\r\n                              </mat-form-field>\r\n                        </div>\r\n\r\n                        <div class=\"button-wrap\" fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n                            <button class=\"btn-project\" mat-raised-button color=\"primary\" type=\"submit\">GET A QUOTE</button>\r\n                          </div>\r\n                        </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "w8cA":
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/order-success/order-success.component.ts ***!
  \***************************************************************************/
/*! exports provided: OrderSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSuccessComponent", function() { return OrderSuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_order_success_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./order-success.component.html */ "nshy");
/* harmony import */ var _order_success_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-success.component.sass */ "idyo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let OrderSuccessComponent = class OrderSuccessComponent {
    constructor() {
        this.paymantWay = [
            { title: 'Visa Debit Card', image: 'assets/images/flags/visa.png', card: '******6766' },
            { title: 'Mastercard Office', image: 'assets/images/flags/master.png', card: '******6766' },
        ];
    }
    ngOnInit() {
    }
};
OrderSuccessComponent.ctorParameters = () => [];
OrderSuccessComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order-success',
        template: _raw_loader_order_success_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_success_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], OrderSuccessComponent);



/***/ }),

/***/ "zYmd":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/cart/cart.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-breadcrumb [title]=\"'Carrito'\" [breadcrumb]=\"'Carrito'\"></app-breadcrumb>\r\n\r\n<div class=\"container\">\r\n  <div class=\"cart-wrapper sec-padding\">\r\n     <div fxLayout=\"column\" fxLayoutAlign=\"space-around center\" *ngIf=\"!shoppingCartItems.length\">\r\n        <mat-chip-list>\r\n           <mat-chip color=\"warn\" selected=\"true\">No tienes productos en tu carrito de compra.</mat-chip>\r\n        </mat-chip-list>\r\n        <div>\r\n           <a  mat-raised-button color=\"primary\" class=\"btn-project mt-20\">Continuar comprando</a>\r\n        </div>\r\n     </div>\r\n     <mat-card *ngIf=\"shoppingCartItems.length\"  class=\"p-0\">\r\n        <div class=\"mat-table cart-table\">\r\n           <div class=\"mat-header-row\">\r\n              <div class=\"mat-header-cell\">Producto</div>\r\n              <div class=\"mat-header-cell\">Nombre</div>\r\n              <div class=\"mat-header-cell\">Precio</div>\r\n              <div class=\"mat-header-cell\">Cantidad</div>\r\n              <div class=\"mat-header-cell\">Total</div>\r\n              <div class=\"mat-header-cell\">Accion</div>\r\n           </div>\r\n           <div *ngFor=\"let item of shoppingCartItems\"  class=\"mat-row\">\r\n              <div class=\"mat-cell\"><img [src]=\"item.product.pictures[0].small\"></div>\r\n              <div class=\"mat-cell\"><a  class=\"product-name\">{{item.product.name}}</a></div>\r\n              <div class=\"mat-cell price\">{{item.product.price | number : '1.2-2'}}</div>\r\n              <div class=\"mat-cell text-muted\">\r\n                 <div fxLayout=\"row\" fxLayout.xs=\"column\"  class=\"text-muted\">\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n                       <button mat-icon-button matTooltip=\"Remove\" (click)=\"decrement(item.product)\">\r\n                          <mat-icon>remove</mat-icon>\r\n                       </button>\r\n                       <input type=\"text\" name=\"quantity\"  [(ngModel)]=\"item.quantity\" disabled class=\"form-control input-number\">\r\n                       <button mat-icon-button matTooltip=\"Add\" (click)=\"increment(item.product)\">\r\n                          <mat-icon>add</mat-icon>\r\n                       </button>\r\n                    </div>\r\n                    <!-- <div *ngIf=\"type!='wish'\">\r\n                       <button mat-icon-button matTooltip=\"Add to wishlist\" (click)=\"addToWishList(product)\"><mat-icon>favorite</mat-icon></button>\r\n                       <button mat-icon-button matTooltip=\"Add to cart\" *ngIf=\"product?.availibilityCount > 0\" (click)=\"addToCart(product)\"><mat-icon>shopping_cart</mat-icon></button>\r\n                       <button mat-icon-button matTooltip=\"Add to compare\" (click)=\"addToCompare(product)\"><mat-icon>compare</mat-icon></button>\r\n                       <button *ngIf=\"type!='all'\" mat-icon-button matTooltip=\"Quick view\" (click)=\"openProductDialog(product)\"><mat-icon>remove_red_eye</mat-icon></button>\r\n                       </div> -->\r\n                 </div>\r\n              </div>\r\n              <div class=\"mat-cell total\">{{item.product.price * item.quantity | number : '1.2-2' }}</div>\r\n              <div class=\"mat-cell text-center\">\r\n                 <div class=\"p-1\">\r\n                    <mat-icon (click)=\"removeItem(item)\">close</mat-icon>\r\n                 </div>\r\n              </div>\r\n           </div>\r\n           <div class=\"mat-row\">\r\n              <div class=\"mat-cell\"><a  mat-raised-button color=\"primary\"  class=\"btn-project\" [routerLink]=\"['/home/one']\" routerLinkActive=\"router-link-active\" >Continuar comprando</a></div>\r\n              <div class=\"mat-cell\"></div>\r\n              <div class=\"mat-cell\"></div>\r\n              <div class=\"mat-cell text-right\">\r\n                 <div fxLayout=\"column\" fxLayoutAlign=\"center end\" class=\"grand-total px-2\">\r\n                    <span class=\"new-price\">Total: {{getTotal()  | async | currency:productsService?.currency:'symbol'}}</span>\r\n                 </div>\r\n              </div>\r\n              <div class=\"mat-cell text-center\"><a mat-raised-button color=\"primary\"  class=\"btn-project\" [routerLink]=\"['/pages/checkout']\" routerLinkActive=\"router-link-active\" >Proceder a Pagar</a></div>\r\n           </div>\r\n        </div>\r\n     </mat-card>\r\n  </div>\r\n</div>\r\n");

/***/ })

}]);
//# sourceMappingURL=components-pages-pages-module-es2015.js.map