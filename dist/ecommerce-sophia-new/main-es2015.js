(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+G06":
/*!************************************************!*\
  !*** ./src/app/components/shop/shop.module.ts ***!
  \************************************************/
/*! exports provided: ShopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopModule", function() { return ShopModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "R777");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _main_carousel_main_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-carousel/main-carousel.component */ "ZLB0");
/* harmony import */ var _food_main_carousel_food_main_carousel_food_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./food/main-carousel-food/main-carousel-food.component */ "7nMn");
/* harmony import */ var _industrial_main_carousel_industrial_main_carousel_industrial_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./industrial/main-carousel-industrial/main-carousel-industrial.component */ "a8iJ");
/* harmony import */ var _products_price_price_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products/price/price.component */ "bS0m");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products/products.component */ "hXOG");
/* harmony import */ var _products_product_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./products/product/product.component */ "MKUL");
/* harmony import */ var _products_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products/product-details/product-details.component */ "B8Cg");
/* harmony import */ var _products_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products/product-dialog/product-dialog.component */ "5Tg0");
/* harmony import */ var _products_product_left_sidebar_product_left_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./products/product-left-sidebar/product-left-sidebar.component */ "Jspa");
/* harmony import */ var _products_product_vertical_product_vertical_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./products/product-vertical/product-vertical.component */ "B9uv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _shop_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shop-routing.module */ "n8/k");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/shared.module */ "hGdz");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-swiper-wrapper */ "S8NE");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout */ "u9T3");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-pagination */ "xkgV");
/* harmony import */ var _home_two_home_two_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home-two/home-two.component */ "BSd3");
/* harmony import */ var _home_three_home_three_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./home-three/home-three.component */ "zkm0");
/* harmony import */ var _widgets_brands_brands_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./widgets/brands/brands.component */ "ip/5");
/* harmony import */ var _widgets_categories_categories_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./widgets/categories/categories.component */ "zb6/");
/* harmony import */ var _widgets_popular_products_popular_products_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./widgets/popular-products/popular-products.component */ "/tXQ");
/* harmony import */ var _home_four_home_four_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./home-four/home-four.component */ "u5eQ");
/* harmony import */ var _products_product_details_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./products/product-details/product-zoom/product-zoom.component */ "hnp9");
/* harmony import */ var _products_product_details_food_product_zoom_food_product_zoom_food_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./products/product-details-food/product-zoom-food/product-zoom-food.component */ "g/WC");
/* harmony import */ var _products_product_details_centered_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./products/product-details-centered/product-zoom/product-zoom.component */ "viOG");
/* harmony import */ var _home_five_home_five_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./home-five/home-five.component */ "2UAY");
/* harmony import */ var _products_product_no_sidebar_product_no_sidebar_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./products/product-no-sidebar/product-no-sidebar.component */ "41q4");
/* harmony import */ var _products_product_right_sidebar_product_right_sidebar_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./products/product-right-sidebar/product-right-sidebar.component */ "2pAx");
/* harmony import */ var _industrial_industrial_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./industrial/industrial.component */ "o+aM");
/* harmony import */ var _food_food_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./food/food.component */ "QJCp");
/* harmony import */ var _products_product_two_product_two_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./products/product-two/product-two.component */ "Tqn1");
/* harmony import */ var _products_product_details_food_product_details_food_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./products/product-details-food/product-details-food.component */ "x8rr");
/* harmony import */ var _furniture_furniture_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./furniture/furniture.component */ "vG90");
/* harmony import */ var _widgets_categories_furniture_categories_furniture_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./widgets/categories-furniture/categories-furniture.component */ "UOqT");
/* harmony import */ var _home_decor_home_decor_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./home-decor/home-decor.component */ "GpRW");
/* harmony import */ var _products_product_carousel_four_product_carousel_four_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./products/product-carousel-four/product-carousel-four.component */ "FOO7");
/* harmony import */ var _products_product_carousel_three_product_carousel_three_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./products/product-carousel-three/product-carousel-three.component */ "NYAJ");
/* harmony import */ var _products_product_carousel_product_carousel_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./products/product-carousel/product-carousel.component */ "n21o");
/* harmony import */ var _products_product_carousel_two_product_carousel_two_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./products/product-carousel-two/product-carousel-two.component */ "/Lxz");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ngx-skeleton-loader */ "WzhS");
/* harmony import */ var _products_product_vertical_food_product_vertical_food_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./products/product-vertical-food/product-vertical-food.component */ "ot2N");
/* harmony import */ var _products_product_details_left_product_details_left_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./products/product-details-left/product-details-left.component */ "2pvF");
/* harmony import */ var _products_product_details_centered_product_details_centered_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./products/product-details-centered/product-details-centered.component */ "gLO+");















































let ShopModule = class ShopModule {
};
ShopModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
            _main_carousel_main_carousel_component__WEBPACK_IMPORTED_MODULE_4__["MainCarouselComponent"],
            _food_main_carousel_food_main_carousel_food_component__WEBPACK_IMPORTED_MODULE_5__["MainCarouselComponentFood"],
            _industrial_main_carousel_industrial_main_carousel_industrial_component__WEBPACK_IMPORTED_MODULE_6__["MainCarouselIndustrialComponent"],
            _products_products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"],
            _products_price_price_component__WEBPACK_IMPORTED_MODULE_7__["PriceComponent"],
            _products_product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"],
            _products_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_10__["ProductDetailsComponent"],
            _products_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ProductDialogComponent"],
            _products_product_left_sidebar_product_left_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["ProductLeftSidebarComponent"],
            _products_product_vertical_product_vertical_component__WEBPACK_IMPORTED_MODULE_13__["ProductVerticalComponent"],
            _home_two_home_two_component__WEBPACK_IMPORTED_MODULE_20__["HomeTwoComponent"],
            _home_three_home_three_component__WEBPACK_IMPORTED_MODULE_21__["HomeThreeComponent"],
            _widgets_brands_brands_component__WEBPACK_IMPORTED_MODULE_22__["BrandsComponent"],
            _widgets_categories_categories_component__WEBPACK_IMPORTED_MODULE_23__["CategoriesComponent"],
            _widgets_popular_products_popular_products_component__WEBPACK_IMPORTED_MODULE_24__["PopularProductsComponent"],
            _home_four_home_four_component__WEBPACK_IMPORTED_MODULE_25__["HomeFourComponent"],
            _products_product_details_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_26__["ProductZoomComponent"],
            _products_product_details_food_product_zoom_food_product_zoom_food_component__WEBPACK_IMPORTED_MODULE_27__["ProductZoomFoodComponent"],
            _products_product_details_centered_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_28__["ProductZoomCenteredComponent"],
            _home_five_home_five_component__WEBPACK_IMPORTED_MODULE_29__["HomeFiveComponent"],
            _products_product_no_sidebar_product_no_sidebar_component__WEBPACK_IMPORTED_MODULE_30__["ProductNoSidebarComponent"],
            _products_product_right_sidebar_product_right_sidebar_component__WEBPACK_IMPORTED_MODULE_31__["ProductRightSidebarComponent"],
            _industrial_industrial_component__WEBPACK_IMPORTED_MODULE_32__["IndustrialComponent"],
            _food_food_component__WEBPACK_IMPORTED_MODULE_33__["FoodComponent"],
            _products_product_two_product_two_component__WEBPACK_IMPORTED_MODULE_34__["ProductTwoComponent"],
            _products_product_details_food_product_details_food_component__WEBPACK_IMPORTED_MODULE_35__["ProductDetailsFoodComponent"],
            _furniture_furniture_component__WEBPACK_IMPORTED_MODULE_36__["FurnitureComponent"],
            _widgets_categories_furniture_categories_furniture_component__WEBPACK_IMPORTED_MODULE_37__["CategoriesFurnitureComponent"],
            _home_decor_home_decor_component__WEBPACK_IMPORTED_MODULE_38__["HomeDecorComponent"],
            _products_product_carousel_four_product_carousel_four_component__WEBPACK_IMPORTED_MODULE_39__["ProductCarouselFourComponent"],
            _products_product_carousel_three_product_carousel_three_component__WEBPACK_IMPORTED_MODULE_40__["ProductCarouselThreeComponent"],
            _products_product_carousel_product_carousel_component__WEBPACK_IMPORTED_MODULE_41__["ProductCarouselComponent"],
            _products_product_carousel_two_product_carousel_two_component__WEBPACK_IMPORTED_MODULE_42__["ProductCarouselTwoComponent"],
            _products_product_vertical_food_product_vertical_food_component__WEBPACK_IMPORTED_MODULE_44__["ProductVerticalFoodComponent"],
            _products_product_details_left_product_details_left_component__WEBPACK_IMPORTED_MODULE_45__["ProductDetailsLeftComponent"],
            _products_product_details_centered_product_details_centered_component__WEBPACK_IMPORTED_MODULE_46__["ProductDetailsCenteredComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
            _shop_routing_module__WEBPACK_IMPORTED_MODULE_15__["ShopRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_17__["SwiperModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__["FlexLayoutModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_19__["NgxPaginationModule"],
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_43__["NgxSkeletonLoaderModule"]
            // NgxImageZoomModule.forRoot() // <-- Add this line
        ],
        exports: [
            _products_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ProductDialogComponent"],
            _products_product_details_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_26__["ProductZoomComponent"],
            _products_product_details_food_product_zoom_food_product_zoom_food_component__WEBPACK_IMPORTED_MODULE_27__["ProductZoomFoodComponent"],
            _products_product_details_centered_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_28__["ProductZoomCenteredComponent"]
        ],
        entryComponents: [
            _products_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ProductDialogComponent"],
            _products_product_details_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_26__["ProductZoomComponent"],
            _products_product_details_centered_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_28__["ProductZoomCenteredComponent"]
        ],
    })
], ShopModule);



/***/ }),

/***/ "//EV":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header-six/header-six.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n<div class=\"container\">\r\n    <div class=\"header-six\">\r\n        <div class=\"header-wrapper\"  fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <div class=\"logo\" [routerLink]=\"['/home/one']\" routerLinkActive=\"router-link-active\" >\r\n              <img src=\"./../../../../assets/images/logo-white.png\" alt=\"\">\r\n  \r\n            </div>\r\n            <div fxLayout=\"row\">\r\n                <app-menu></app-menu>\r\n                <app-shopping-widgets-three [shoppingCartItems]=\"shoppingCartItems\"></app-shopping-widgets-three>\r\n            </div>\r\n  \r\n          </div>\r\n    </div>\r\n  \r\n  \r\n  </div>\r\n  \r\n  ");

/***/ }),

/***/ "/4Wo":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/sidebar/sidebar.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<a mat-list-item  [ngStyle]=\"{'padding-left': (depth * 12) + 'px'}\" class=\"menu-list-item\" (click)=\"onItemSelected(item)\"\r\n[ngClass]=\"{'active': item.route ? router.isActive(item.route, true): false, 'expanded': expanded}\">\r\n  {{item.displayName}}\r\n  <span fxFlex *ngIf=\"item.children && item.children.length\">\r\n      <span fxFlex></span>\r\n      <mat-icon [@indicatorRotate]=\"expanded ? 'expanded': 'collapsed'\">\r\n        expand_more\r\n      </mat-icon>\r\n    </span>\r\n</a>\r\n<div *ngIf=\"expanded\">\r\n    <app-sidebar *ngFor=\"let child of item.children\" [item]=\"child\" [depth]=\"depth+1\">\r\n    </app-sidebar>\r\n  </div>\r\n\r\n");

/***/ }),

/***/ "/Lxz":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-carousel-two/product-carousel-two.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ProductCarouselTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCarouselTwoComponent", function() { return ProductCarouselTwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_carousel_two_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-carousel-two.component.html */ "Dmma");
/* harmony import */ var _product_carousel_two_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-carousel-two.component.sass */ "AaWP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/shared/services/cart.service */ "bjOM");
/* harmony import */ var src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/shared/services/product.service */ "6MrQ");
/* harmony import */ var src_app_components_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/shared/services/wishlist.service */ "m4vo");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _products_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../products/product-dialog/product-dialog.component */ "5Tg0");










let ProductCarouselTwoComponent = class ProductCarouselTwoComponent {
    constructor(cartService, productsService, wishlistService, dialog, router) {
        this.cartService = cartService;
        this.productsService = productsService;
        this.wishlistService = wishlistService;
        this.dialog = dialog;
        this.router = router;
        this.onOpenProductDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.product = [];
        this.config = {};
        this.contentLoaded = false;
    }
    //  @ViewChild(SwiperDirective) directiveRef: SwiperDirective;
    ngOnInit() {
        console.log(this.product);
        setTimeout(() => {
            this.contentLoaded = true;
        }, 3000);
    }
    ngAfterViewInit() {
        this.config = {
            observer: true,
            slidesPerView: 5,
            spaceBetween: 16,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            breakpoints: {
                480: {
                    slidesPerView: 1
                },
                740: {
                    slidesPerView: 2,
                },
                960: {
                    slidesPerView: 3,
                },
                1280: {
                    slidesPerView: 4,
                },
            }
        };
    }
    // Add to cart
    addToCart(product, quantity = 1) {
        this.cartService.addToCart(product, quantity);
        console.log(product, quantity);
    }
    // Add to wishlist
    addToWishlist(product) {
        this.wishlistService.addToWishlist(product);
    }
    // Add to compare
    addToCompare(product) {
        this.productsService.addToCompare(product);
    }
    openProductDialog(product) {
        let dialogRef = this.dialog.open(_products_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ProductDialogComponent"], {
            data: product,
            panelClass: 'product-dialog',
        });
        dialogRef.afterClosed().subscribe(product => {
            if (product) {
                this.router.navigate(['/products', product.id, product.name]);
            }
        });
    }
};
ProductCarouselTwoComponent.ctorParameters = () => [
    { type: src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: src_app_components_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_6__["WishlistService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
ProductCarouselTwoComponent.propDecorators = {
    onOpenProductDialog: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['product',] }]
};
ProductCarouselTwoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-carousel-two',
        template: _raw_loader_product_carousel_two_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_carousel_two_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"], src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"], src_app_components_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_6__["WishlistService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], ProductCarouselTwoComponent);



/***/ }),

/***/ "/X96":
/*!***************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-dialog/product-dialog.component.sass ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWRpYWxvZy5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "/tXQ":
/*!****************************************************************************************!*\
  !*** ./src/app/components/shop/widgets/popular-products/popular-products.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PopularProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularProductsComponent", function() { return PopularProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_popular_products_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./popular-products.component.html */ "H7iV");
/* harmony import */ var _popular_products_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popular-products.component.sass */ "LpHt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/shared/services/product.service */ "6MrQ");





let PopularProductsComponent = class PopularProductsComponent {
    constructor(productService) {
        this.productService = productService;
        this.product = {};
    }
    ngOnInit() {
        this.productService.getProducts().subscribe(product => this.products = product);
    }
};
PopularProductsComponent.ctorParameters = () => [
    { type: src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }
];
PopularProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-popular-products',
        template: _raw_loader_popular_products_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_popular_products_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]])
], PopularProductsComponent);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\AndreuAyaipoma\Documents\tiendaWordpress\src\main.ts */"zUnb");


/***/ }),

/***/ "0UTT":
/*!*********************************************************************!*\
  !*** ./src/app/components/color-options/color-options.component.ts ***!
  \*********************************************************************/
/*! exports provided: ColorOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorOptionsComponent", function() { return ColorOptionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_color_options_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./color-options.component.html */ "LiD8");
/* harmony import */ var _color_options_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color-options.component.sass */ "PHvw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _components_shared_services_color_option_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/shared/services/color-option.service */ "jhFw");





let ColorOptionsComponent = class ColorOptionsComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.showOptions = false;
        this.layoutsidebar = false;
        this.show = false;
        this.buttonName = 'Dark';
        this.settings = this.appSettings.settings;
    }
    changeTheme(theme) {
        this.settings.theme = theme;
    }
    // Is active 
    isActive(menuItem) {
        return this.activeItem === menuItem;
    }
    // Set Theme color
    customizeThemeColor(event) {
        document.documentElement.style.setProperty('--theme-deafult', event.target.value);
    }
    // Sidebar Toggle
    layoutSidebarToggle() {
        this.layoutsidebar = !this.layoutsidebar;
    }
    customizeLayoutDark() {
        document.body.classList.toggle('dark');
        this.show = !this.show;
        // CHANGE THE NAME OF THE BUTTON.
        if (this.show)
            this.buttonName = "Light";
        else
            this.buttonName = "Dark";
    }
};
ColorOptionsComponent.ctorParameters = () => [
    { type: _components_shared_services_color_option_service__WEBPACK_IMPORTED_MODULE_4__["AppSettings"] }
];
ColorOptionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-color-options',
        template: _raw_loader_color_options_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_color_options_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_components_shared_services_color_option_service__WEBPACK_IMPORTED_MODULE_4__["AppSettings"]])
], ColorOptionsComponent);



/***/ }),

/***/ "0nda":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/shopping-widgets-two/shopping-widgets-two.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <div class=\"commerce-buttons\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n\r\n    <button mat-button class=\"flex-row-button mat-button\" fxLayoutAlign=\"space-between center\" [matMenuTriggerFor]=\"menu\">\r\n      <div class=\"mat-button-wrapper\">\r\n        <div class=\"\" >\r\n          <mat-icon class=\"mat-icon-lg mat-icon material-icons\">local_grocery_store</mat-icon>\r\n          <span class=\"cart-count-wrapper\">{{shoppingCartItems.length}}</span>\r\n        </div>\r\n            <div class=\"top-cart\">\r\n                <span>{{ getTotal() | async | currency:productService?.currency:'symbol' }}</span>\r\n            </div>\r\n      </div>\r\n    </button>\r\n    <mat-menu class=\"spCard-main\"  #menu=\"matMenu\"> \r\n      <div class=\"spCard-dropdown\">\r\n        <div class=\"card-list-title\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n           <a [routerLink]=\"['/pages/cart']\" routerLinkActive=\"router-link-active\" ><p>CHECK CARD</p></a>\r\n            <p>{{shoppingCartItems.length}} ITEM</p>\r\n        </div>\r\n            <mat-divider></mat-divider>\r\n            <p class=\"woo-message\" *ngIf=\"!shoppingCartItems.length\">Please add product<p>\r\n\r\n            <div class=\"new-product\" fxLayout=\"column\" *ngIf=\"shoppingCartItems.length\">\r\n              <div class=\"item\" fxLayout=\"row\" fxLayoutAlign=\"start start\" *ngFor=\"let item of shoppingCartItems\">\r\n                  <div class=\"product\">\r\n                      <img [src]=\"item.product.pictures[0].small\" alt=\"\">\r\n                     </div>\r\n                    <div class=\"desc\">\r\n                      <p>{{item.product.name}}</p>\r\n                      <span>{{item.quantity}} X {{item.product.price}}</span>\r\n                     </div>\r\n                     <div class=\"close-circle\">\r\n                        <a (click)=\"removeItem(item)\"><i class=\"material-icons\">\r\n                            delete\r\n                            </i></a>\r\n                      </div>\r\n              </div>\r\n              <mat-divider></mat-divider>\r\n              <div class=\"total\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                  <p class=\"text-muted\">Subtotal: </p>\r\n                  <span>{{ getTotal() | async | currency:productService?.currency:'symbol' }}</span>\r\n                </div>\r\n            </div>\r\n      </div>\r\n </mat-menu>\r\n  </div>\r\n\r\n");

/***/ }),

/***/ "1HO4":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/shop/widgets/categories-furniture/categories-furniture.component.sass ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWVzLWZ1cm5pdHVyZS5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "1HtE":
/*!************************************************************************************!*\
  !*** ./src/app/components/shared/banner-promotion/banner-promotion.component.sass ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYW5uZXItcHJvbW90aW9uLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "1Ptl":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/categories-menu/categories-menu.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"category-contant\">\r\n  <ul fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"space-evenly center\">\r\n      <li fxLayout=\"column\"><a class=\"no-brd\" [routerLink]=\"['/home/products/all']\"><i class=\"material-icons\">dehaze</i>Show All</a></li>\r\n      <li fxLayout=\"column\"><a [routerLink]=\"['/home/products/Headphones']\"><i class=\"material-icons\">headset</i> Headphones</a></li>\r\n      <li fxLayout=\"column\"><a [routerLink]=\"['/home/products/Laptops']\"><i class=\"material-icons\">laptop</i>Laptops</a></li>\r\n      <li><a [routerLink]=\"['/home/products/Smartphones']\"><i class=\"material-icons\">smartphone</i>Smart Phones</a></li>\r\n      <li><a [routerLink]=\"['/home/products/Cameras']\"><i class=\"material-icons\">photo_camera</i>Cameras</a></li>\r\n      <li><a [routerLink]=\"['/home/products/Tv & Audio']\"><i class=\"material-icons\">tv</i>Tv & Audio</a></li>\r\n      <li><a [routerLink]=\"['/home/products/Watches']\"><i class=\"material-icons\">watch</i>Watches</a></li>\r\n  </ul>\r\n</div>\r\n");

/***/ }),

/***/ "1Toy":
/*!************************************************************************!*\
  !*** ./src/app/components/shared/footer-two/footer-two.component.sass ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXItdHdvLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "2UAY":
/*!******************************************************************!*\
  !*** ./src/app/components/shop/home-five/home-five.component.ts ***!
  \******************************************************************/
/*! exports provided: HomeFiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeFiveComponent", function() { return HomeFiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_five_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home-five.component.html */ "xl9Y");
/* harmony import */ var _home_five_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-five.component.sass */ "D3FB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/product.service */ "6MrQ");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/cart.service */ "bjOM");






let HomeFiveComponent = class HomeFiveComponent {
    constructor(productService, cartService) {
        this.productService = productService;
        this.cartService = cartService;
        this.shoppingCartItems = [];
        this.contentLoaded = false;
        this.slides = [
            { title: 'Huge sale', subtitle: 'Up to 70%', image: 'assets/images/carousel/banner1.jpg' },
            { title: 'Biggest discount', subtitle: 'Check the promotion', image: 'assets/images/carousel/banner2.jpg' },
            { title: 'Biggest sale', subtitle: 'Dont miss it', image: 'assets/images/carousel/banner3.jpg' },
            { title: 'Our best products', subtitle: 'Special selection', image: 'assets/images/carousel/banner4.jpg' },
            { title: 'Massive sale', subtitle: 'Only for today', image: 'assets/images/carousel/banner5.jpg' }
        ];
        // Collection banner
        this.discount = [{
                image: 'assets/images/product/tablet_bn.png',
                title: 'Tablets, Smartphones and more',
                subtitle: 'Sale up to 30%',
            }, {
                image: 'assets/images/product/camera_bn.png',
                title: 'New Cameras Collection',
                subtitle: 'Sale up to 30%',
            }];
    }
    ngOnInit() {
        this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
        this.productService.getProducts()
            .subscribe((product) => {
            this.products = product;
        });
        setTimeout(() => {
            this.contentLoaded = true;
        }, 3000);
    }
};
HomeFiveComponent.ctorParameters = () => [
    { type: _shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] }
];
HomeFiveComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home-five',
        template: _raw_loader_home_five_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_five_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]])
], HomeFiveComponent);



/***/ }),

/***/ "2pAx":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-right-sidebar/product-right-sidebar.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ProductRightSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRightSidebarComponent", function() { return ProductRightSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_right_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-right-sidebar.component.html */ "wzT1");
/* harmony import */ var _product_right_sidebar_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-right-sidebar.component.sass */ "Y4OL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/shared/services/product.service */ "6MrQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");






let ProductRightSidebarComponent = class ProductRightSidebarComponent {
    constructor(productService, route) {
        this.productService = productService;
        this.route = route;
        this.sidenavOpen = true;
        this.sortByOrder = ''; // sorting
        this.tagsFilters = [];
        this.viewType = 'grid';
        this.viewCol = 25;
        this.colorFilters = [];
        this.items = [];
        this.allItems = [];
        this.products = [];
        this.tags = [];
        this.colors = [];
        this.route.params.subscribe((params) => {
            const category = params['category'];
            this.productService.getProductByCategory(category).subscribe(products => {
                this.allItems = products;
                this.products = products.slice(0.8);
                this.getTags(products);
                this.getColors(products);
            });
        });
    }
    // Get current product tags
    getTags(products) {
        var uniqueBrands = [];
        var itemBrand = Array();
        products.map((product, index) => {
            if (product.tags) {
                product.tags.map((tag) => {
                    const index = uniqueBrands.indexOf(tag);
                    if (index === -1)
                        uniqueBrands.push(tag);
                });
            }
        });
        for (var i = 0; i < uniqueBrands.length; i++) {
            itemBrand.push({ brand: uniqueBrands[i] });
        }
        this.tags = itemBrand;
    }
    // Get current product colors
    getColors(products) {
        var uniqueColors = [];
        var itemColor = Array();
        products.map((product, index) => {
            if (product.colors) {
                product.colors.map((color) => {
                    const index = uniqueColors.indexOf(color);
                    if (index === -1)
                        uniqueColors.push(color);
                });
            }
        });
        for (var i = 0; i < uniqueColors.length; i++) {
            itemColor.push({ color: uniqueColors[i] });
        }
        this.colors = itemColor;
    }
    ngOnInit() {
    }
    changeViewType(viewType, viewCol) {
        this.viewType = viewType;
        this.viewCol = viewCol;
    }
    // Animation Effect fadeIn
    fadeIn() {
        this.animation = 'fadeIn';
    }
    // Animation Effect fadeOut
    fadeOut() {
        this.animation = 'fadeOut';
    }
    // Update tags filter
    updateTagFilters(tags) {
        this.tagsFilters = tags;
        this.animation == 'fadeOut' ? this.fadeIn() : this.fadeOut(); // animation
    }
    // sorting type ASC / DESC / A-Z / Z-A etc.
    onChangeSorting(val) {
        this.sortByOrder = val;
        this.animation == 'fadeOut' ? this.fadeIn() : this.fadeOut(); // animation
    }
    // Initialize filetr Items
    filterItems() {
        return this.items.filter((item) => {
            const Colors = this.colorFilters.reduce((prev, curr) => {
                if (item.colors) {
                    if (item.colors.includes(curr.color)) {
                        return prev && true;
                    }
                }
            }, true);
            const Tags = this.tagsFilters.reduce((prev, curr) => {
                if (item.tags) {
                    if (item.tags.includes(curr)) {
                        return prev && true;
                    }
                }
            }, true);
            return Colors && Tags; // return true
        });
    }
    onPageChanged(event) {
        this.page = event;
        this.allItems;
        window.scrollTo(0, 0);
    }
    // Update price filter
    //   public updatePriceFilters(price: any) {
    //     let items: any[] = [];
    //     this.products.filter((item: Product) => {
    //         if (item.price >= price[0] && item.price <= price[1] )  {
    //            items.push(item); // push in array
    //         }
    //     });
    //     this.items = items;
    // }
    // Update price filter
    updatePriceFilters(price) {
        console.log(price);
        console.log(this.products);
        this.allItems = this.products.filter((item) => {
            return item.price >= price.priceFrom && item.price <= price.priceTo;
        });
        console.log(this.products);
    }
    onBrendsChanged(newBrend) {
        console.log(newBrend);
        this.allItems = newBrend === 'all' ? this.products : this.products.filter(item => item.brand === newBrend);
        console.log(this.allItems);
    }
};
ProductRightSidebarComponent.ctorParameters = () => [
    { type: src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
ProductRightSidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-right-sidebar',
        template: _raw_loader_product_right_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_right_sidebar_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
], ProductRightSidebarComponent);



/***/ }),

/***/ "2pvF":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-details-left/product-details-left.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ProductDetailsLeftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsLeftComponent", function() { return ProductDetailsLeftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_details_left_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-details-left.component.html */ "vEIM");
/* harmony import */ var _product_details_left_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-details-left.component.sass */ "jVAY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let ProductDetailsLeftComponent = class ProductDetailsLeftComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProductDetailsLeftComponent.ctorParameters = () => [];
ProductDetailsLeftComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-details-left',
        template: _raw_loader_product_details_left_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_details_left_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ProductDetailsLeftComponent);



/***/ }),

/***/ "2rU4":
/*!********************************************************************!*\
  !*** ./src/app/components/shop/home-four/home-four.component.sass ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWZvdXIuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "3S7B":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/banners/banners.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"banners-container\" fxLayout=\"column\" fxLayout.gt-sm=\"row\" *ngIf=\"banners.length > 0\">\r\n\r\n  <div class=\"sec-padding\" fxLayout=\"row\" fxLayout.gt-sm=\"column\" fxLayout.xs=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"baners\">\r\n     <div class=\"baner first\"  [ngStyle]=\"getBgImage(0)\">\r\n        <ngx-skeleton-loader\r\n        *ngIf=\"!contentLoaded\"\r\n          count=\"1\"\r\n          [theme]=\"{ width: '100%', 'border-radius': '0', height: '100%' }\"\r\n        ></ngx-skeleton-loader>\r\n       <div class=\"info\" *ngIf=\"contentLoaded\">\r\n           <div class=\"text-box\">\r\n               <h4>{{getBanner(0).title}}</h4>\r\n               <p>{{getBanner(0).subtitle}}</p>\r\n               <a href=\"#\">Shop Now</a>\r\n           </div>\r\n       </div>\r\n     </div>\r\n   </div>\r\n   <div fxLayout=\"row\" fxLayout.gt-sm=\"column\" fxLayout.xs=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"60\">\r\n       <div class=\"bn-wrap\" fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxFlexOrder=\"2\" fxFlexOrder.gt-sm=\"1\" fxFlex=\"50\" fxFlex.gt-sm=\"33\">\r\n           <div class=\"baner seccond\" fxFlex [ngStyle]=\"getBgImage(1)\">\r\n            <ngx-skeleton-loader\r\n            *ngIf=\"!contentLoaded\"\r\n              count=\"1\"\r\n              [theme]=\"{ width: '100%', 'border-radius': '0', height: '100%' }\"\r\n            ></ngx-skeleton-loader>\r\n               <div class=\"info\" *ngIf=\"contentLoaded\">\r\n                   <div class=\"text-box w-50\" fxLayout=\"column\" >\r\n                       <h4>{{getBanner(1).title}}</h4>\r\n                      <p>{{getBanner(1).subtitle}}</p>\r\n               <a href=\"#\">Shop Now</a>\r\n                   </div>\r\n               </div>\r\n           </div>\r\n           <div class=\"baner seccond pd-xs\" fxFlex [ngStyle]=\"getBgImage(2)\">\r\n            <ngx-skeleton-loader\r\n            *ngIf=\"!contentLoaded\"\r\n              count=\"1\"\r\n              [theme]=\"{ width: '100%', 'border-radius': '0', height: '100%' }\"\r\n            ></ngx-skeleton-loader>\r\n               <div class=\"info\" *ngIf=\"contentLoaded\">\r\n                   <div class=\"text-box w-50\" fxLayout=\"column\" >\r\n                       <h4>{{getBanner(2).title}}</h4>\r\n                      <p>{{getBanner(2).subtitle}}</p>\r\n               <a href=\"#\">Shop Now</a>\r\n                   </div>\r\n               </div>\r\n           </div>\r\n       </div>\r\n       <div class=\"baner seccond mg-xs-0\" fxFlexOrder=\"1\" fxFlexOrder.gt-sm=\"2\" fxFlex=\"50\" fxFlex.gt-sm=\"100\" [ngStyle]=\"getBgImage(3)\">\r\n        <ngx-skeleton-loader\r\n        *ngIf=\"!contentLoaded\"\r\n          count=\"1\"\r\n          [theme]=\"{ width: '100%', 'border-radius': '0', height: '100%'}\"\r\n        ></ngx-skeleton-loader>\r\n           <div class=\"info\" *ngIf=\"contentLoaded\">\r\n               <div class=\"text-box w-50 pt-40 \" fxLayout=\"column\" >\r\n                   <h4 class=\"big-title\">{{getBanner(3).title}}</h4>\r\n                  <p>{{getBanner(3).subtitle}}</p>\r\n           <a mat-raised-button color=\"primary\" class=\"big-price\">$66.99</a>\r\n               </div>\r\n           </div>\r\n       </div>\r\n   </div>\r\n </div>\r\n\r\n");

/***/ }),

/***/ "3dZ2":
/*!**********************************************************************!*\
  !*** ./src/app/components/shared/header-six/header-six.component.ts ***!
  \**********************************************************************/
/*! exports provided: HeaderSixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSixComponent", function() { return HeaderSixComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_six_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header-six.component.html */ "//EV");
/* harmony import */ var _header_six_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-six.component.sass */ "oUM7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cart.service */ "bjOM");





let HeaderSixComponent = class HeaderSixComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.currencies = ['USD', 'EUR'];
        this.flags = [
            { name: 'English', image: 'assets/images/flags/gb.svg' },
            { name: 'German', image: 'assets/images/flags/de.svg' },
            { name: 'French', image: 'assets/images/flags/fr.svg' },
            { name: 'Russian', image: 'assets/images/flags/ru.svg' },
            { name: 'Turkish', image: 'assets/images/flags/tr.svg' }
        ];
        this.shoppingCartItems = [];
        this.cartService.getItems().subscribe(shoppingCartItems => {
            this.shoppingCartItems = shoppingCartItems;
        });
    }
    ngOnInit() {
    }
};
HeaderSixComponent.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }
];
HeaderSixComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header-six',
        template: _raw_loader_header_six_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_six_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]])
], HeaderSixComponent);



/***/ }),

/***/ "4+Ld":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.sass ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "41q4":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-no-sidebar/product-no-sidebar.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ProductNoSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductNoSidebarComponent", function() { return ProductNoSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_no_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-no-sidebar.component.html */ "xV2V");
/* harmony import */ var _product_no_sidebar_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-no-sidebar.component.sass */ "Ni+x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/shared/services/product.service */ "6MrQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");






let ProductNoSidebarComponent = class ProductNoSidebarComponent {
    constructor(productService, route) {
        this.productService = productService;
        this.route = route;
        this.sidenavOpen = true;
        this.sortByOrder = ''; // sorting
        this.tagsFilters = [];
        this.viewType = 'grid';
        this.viewCol = 25;
        this.colorFilters = [];
        this.items = [];
        this.allItems = [];
        this.products = [];
        this.tags = [];
        this.colors = [];
        this.route.params.subscribe((params) => {
            const category = params['category'];
            this.productService.getProductByCategory(category).subscribe(products => {
                this.allItems = products;
                this.products = products.slice(0.8);
                this.getTags(products);
                this.getColors(products);
            });
        });
    }
    // Get current product tags
    getTags(products) {
        var uniqueBrands = [];
        var itemBrand = Array();
        products.map((product, index) => {
            if (product.tags) {
                product.tags.map((tag) => {
                    const index = uniqueBrands.indexOf(tag);
                    if (index === -1)
                        uniqueBrands.push(tag);
                });
            }
        });
        for (var i = 0; i < uniqueBrands.length; i++) {
            itemBrand.push({ brand: uniqueBrands[i] });
        }
        this.tags = itemBrand;
    }
    // Get current product colors
    getColors(products) {
        var uniqueColors = [];
        var itemColor = Array();
        products.map((product, index) => {
            if (product.colors) {
                product.colors.map((color) => {
                    const index = uniqueColors.indexOf(color);
                    if (index === -1)
                        uniqueColors.push(color);
                });
            }
        });
        for (var i = 0; i < uniqueColors.length; i++) {
            itemColor.push({ color: uniqueColors[i] });
        }
        this.colors = itemColor;
    }
    ngOnInit() {
    }
    changeViewType(viewType, viewCol) {
        this.viewType = viewType;
        this.viewCol = viewCol;
    }
    // Animation Effect fadeIn
    fadeIn() {
        this.animation = 'fadeIn';
    }
    // Animation Effect fadeOut
    fadeOut() {
        this.animation = 'fadeOut';
    }
    // Update tags filter
    updateTagFilters(tags) {
        this.tagsFilters = tags;
        this.animation == 'fadeOut' ? this.fadeIn() : this.fadeOut(); // animation
    }
    // sorting type ASC / DESC / A-Z / Z-A etc.
    onChangeSorting(val) {
        this.sortByOrder = val;
        this.animation == 'fadeOut' ? this.fadeIn() : this.fadeOut(); // animation
    }
    // Initialize filetr Items
    filterItems() {
        return this.items.filter((item) => {
            const Colors = this.colorFilters.reduce((prev, curr) => {
                if (item.colors) {
                    if (item.colors.includes(curr.color)) {
                        return prev && true;
                    }
                }
            }, true);
            const Tags = this.tagsFilters.reduce((prev, curr) => {
                if (item.tags) {
                    if (item.tags.includes(curr)) {
                        return prev && true;
                    }
                }
            }, true);
            return Colors && Tags; // return true
        });
    }
    onPageChanged(event) {
        this.page = event;
        this.allItems;
        window.scrollTo(0, 0);
    }
    // Update price filter
    //   public updatePriceFilters(price: any) {
    //     let items: any[] = [];
    //     this.products.filter((item: Product) => {
    //         if (item.price >= price[0] && item.price <= price[1] )  {
    //            items.push(item); // push in array
    //         }
    //     });
    //     this.items = items;
    // }
    // Update price filter
    updatePriceFilters(price) {
        console.log(price);
        console.log(this.products);
        this.allItems = this.products.filter((item) => {
            return item.price >= price.priceFrom && item.price <= price.priceTo;
        });
        console.log(this.products);
    }
    onBrendsChanged(newBrend) {
        console.log(newBrend);
        this.allItems = newBrend === 'all' ? this.products : this.products.filter(item => item.brand === newBrend);
        console.log(this.allItems);
    }
};
ProductNoSidebarComponent.ctorParameters = () => [
    { type: src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
ProductNoSidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-no-sidebar',
        template: _raw_loader_product_no_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_no_sidebar_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
], ProductNoSidebarComponent);



/***/ }),

/***/ "4C+6":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/services/resolver.service.ts ***!
  \****************************************************************/
/*! exports provided: Resolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resolver", function() { return Resolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.service */ "6MrQ");




let Resolver = class Resolver {
    constructor(router, productService) {
        this.router = router;
        this.productService = productService;
        this.product = {};
    }
    // Resolver
    resolve(route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(resolve, 1000));
            this.productService.getProductBySlug(route.params.slug).subscribe(product => {
                if (!product) { // When product is empty redirect 404
                    this.router.navigateByUrl('/pages/404', { skipLocationChange: true });
                }
                else {
                    this.product = product;
                }
            });
            return this.product;
        });
    }
};
Resolver.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }
];
Resolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
], Resolver);



/***/ }),

/***/ "4sON":
/*!************************************************************************************************!*\
  !*** ./src/app/components/shared/shopping-widgets-three/shopping-widgets-three.component.sass ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wcGluZy13aWRnZXRzLXRocmVlLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "5T6c":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "/4Wo");
/* harmony import */ var _sidebar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.component.scss */ "a7ud");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _sidebar_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar-menu.service */ "pA5D");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "GS7A");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");







let SidebarComponent = class SidebarComponent {
    constructor(sidenavMenuService, router) {
        this.sidenavMenuService = sidenavMenuService;
        this.router = router;
        if (this.depth === undefined) {
            this.depth = 0;
        }
    }
    ngOnInit() {
        this.sidenavMenuService.currentUrl.subscribe((url) => {
            if (this.item.route && url) {
                // console.log(`Checking '/${this.item.route}' against '${url}'`);
                this.expanded = url.indexOf(`/${this.item.route}`) === 0;
                // this.ariaExpanded = this.expanded;
                // console.log(`${this.item.route} is expanded: ${this.expanded}`);
            }
        });
    }
    onItemSelected(item) {
        if (!item.children || !item.children.length) {
            this.router.navigate([item.route]);
        }
        if (item.children && item.children.length) {
            this.expanded = !this.expanded;
        }
    }
};
SidebarComponent.ctorParameters = () => [
    { type: _sidebar_menu_service__WEBPACK_IMPORTED_MODULE_4__["SidebarMenuService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
SidebarComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    depth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sidebar',
        template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('indicatorRotate', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'rotate(0deg)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'rotate(180deg)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('225ms cubic-bezier(0.4,0.0,0.2,1)')),
            ])
        ],
        styles: [_sidebar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_4__["SidebarMenuService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], SidebarComponent);



/***/ }),

/***/ "5Tg0":
/*!*************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-dialog/product-dialog.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProductDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDialogComponent", function() { return ProductDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-dialog.component.html */ "SB/d");
/* harmony import */ var _product_dialog_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-dialog.component.sass */ "/X96");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/shared/services/product.service */ "6MrQ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var src_app_modals_product_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modals/product.model */ "akXh");
/* harmony import */ var src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/shared/services/cart.service */ "bjOM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");









let ProductDialogComponent = class ProductDialogComponent {
    constructor(router, productsService, cartService, dialogRef, product) {
        this.router = router;
        this.productsService = productsService;
        this.cartService = cartService;
        this.dialogRef = dialogRef;
        this.product = product;
        this.products = [];
        this.counter = 1;
        this.variantImage = '';
        this.selectedColor = '';
        this.selectedSize = '';
    }
    ngOnInit() {
        this.productsService.getProducts().subscribe(product => this.products = product);
    }
    addToCart(product, quantity) {
        if (quantity == 0)
            return false;
        this.cartService.addToCart(product, parseInt(quantity));
    }
    close() {
        this.dialogRef.close();
    }
    increment() {
        this.counter += 1;
    }
    decrement() {
        if (this.counter > 1) {
            this.counter -= 1;
        }
    }
    // Add to cart
    buyNow() {
        this.router.navigate(['/home/product', this.product.id]);
        this.close();
    }
};
ProductDialogComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
    { type: src_app_modals_product_model__WEBPACK_IMPORTED_MODULE_6__["Product"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
];
ProductDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-dialog',
        template: _raw_loader_product_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_dialog_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], src_app_modals_product_model__WEBPACK_IMPORTED_MODULE_6__["Product"]])
], ProductDialogComponent);



/***/ }),

/***/ "5XXD":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-details-centered/product-details-centered.component.sass ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbHMtY2VudGVyZWQuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "5nr3":
/*!**************************************************************************!*\
  !*** ./src/app/components/shared/header-four/header-four.component.sass ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXItZm91ci5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "6Lcu":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer-two/footer-two.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer-two sec-padding\">\r\n    <div class=\"container\">\r\n        <div class=\"footer-wrapper\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between start\">\r\n          <div fxFlex=\"100\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"50\" class=\"footer-widget about-widget\"><a class=\"logo\" href=\"index.html\"><img src=\"assets/images/logo-white.png\" alt=\"Awesome Image\"></a>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada fringilla sem, at dictum lectus ultricies quis. Etiam eu bibendum orci. Aliquam erat volutpat.</p>\r\n            <div class=\"link\"><a href=\"#\">MORE ABOUT US</a> </div>\r\n          </div>\r\n\r\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"23\" fxFlex.sm=\"50\" ngClass.xs=\"mt-2\" class=\"footer-widget links-widget links-widget-pac\">\r\n              <div class=\"title\">\r\n                <h5>Services</h5>\r\n              </div>\r\n              <div class=\"row\">\r\n                  <ul>\r\n                    <li><a href=\"#\">Hotel Growth</a></li>\r\n                    <li><a href=\"#\">Hotel Loan</a></li>\r\n                    <li><a href=\"#\">Financial Planning</a></li>\r\n                    <li><a href=\"#\">Insurance Consulting</a></li>\r\n                    <li><a href=\"#\">Retirenment Planing</a></li>\r\n                    <li><a href=\"#\">Tax Planing</a></li>\r\n                  </ul>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          <div fxFlex=\"100\" fxFlex.gt-sm=\"23\" fxFlex.sm=\"50\" ngClass.xs=\"mt-2\" class=\"footer-widget subscribe-widget\">\r\n            <div class=\"title\">\r\n              <h5>Subscribe Newsletter</h5>\r\n            </div>\r\n            <form action=\"#\">\r\n              <p>Get latest updates and offers.</p>\r\n              <div fxLayout=\"column\" class=\"newsletter-widget\">\r\n                <input type=\"text\" placeholder=\"Enter your email address\">\r\n                <button mat-raised-button color=\"primary\" type=\"submit\" class=\"ped-btn-footer\">SUBSCRIBE US</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n\r\n\r\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"23\" fxFlex.sm=\"50\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\" class=\"footer-widget subscribe-widget\">\r\n              <div class=\"title\">\r\n                <h5>Contact Us</h5>\r\n              </div>\r\n              <div fxLayout=\"row\" class=\"tel-box\">\r\n                <button color=\"primary\" mat-icon-button aria-label=\"Example icon-button with a heart icon\">\r\n                <div class=\"icon\"><i class=\"fa fa-map-marker\"></i></div>\r\n              </button>\r\n                <div class=\"text\">\r\n                  <p>Apple St, New York, NY 10012, USA</p>\r\n                </div>\r\n              </div>\r\n              <div fxLayout=\"row\" class=\"tel-box\">\r\n                <button color=\"primary\" mat-icon-button aria-label=\"Example icon-button with a heart icon\">\r\n                <div class=\"icon\"><i class=\"fa fa-phone\"></i></div>\r\n              </button>\r\n                <div class=\"text\">\r\n                  <p>( 018) 65 524 8503  /  (125) 954 7854</p>\r\n                </div>\r\n              </div>\r\n              <div fxLayout=\"row\" class=\"tel-box\">\r\n                <button color=\"primary\" mat-icon-button aria-label=\"Example icon-button with a heart icon\"> <div class=\"icon\"><i class=\"fa fa-envelope\"></i></div></button>\r\n                <div class=\"text\">\r\n                  <p><a href=\"#\">contact@lamarena.com</a></p>\r\n                </div>\r\n              </div>\r\n\r\n              <ul fxLayout=\"row\" class=\"social list-inline\">\r\n              \r\n                <li>\r\n                  <button color=\"primary\" mat-icon-button aria-label=\"Example icon-button with a heart icon\">\r\n                   <i color=\"primary\" class=\"fa fa-facebook\"></i>\r\n                 </button>\r\n               </li> \r\n               <li>\r\n                 <button color=\"primary\" mat-icon-button aria-label=\"Example icon-button with a heart icon\">\r\n                   <i class=\"fa fa-linkedin\"></i>\r\n                </button>\r\n              </li> \r\n              <li>\r\n               <button color=\"primary\" mat-icon-button aria-label=\"Example icon-button with a heart icon\">\r\n                 <i class=\"fa fa-twitter\"></i>\r\n              </button>\r\n            </li> \r\n            <li>\r\n             <button color=\"primary\" mat-icon-button aria-label=\"Example icon-button with a heart icon\">\r\n               <i class=\"fa fa-google-plus\"></i>\r\n            </button>\r\n          </li> \r\n               </ul>\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n    </div>\r\n  </footer>\r\n");

/***/ }),

/***/ "6MrQ":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/services/product.service.ts ***!
  \***************************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






// Get product from Localstorage
let products = JSON.parse(localStorage.getItem("compareItem")) || [];
let ProductService = class ProductService {
    constructor(httpClient, snackBar) {
        this.httpClient = httpClient;
        this.snackBar = snackBar;
        this.currency = 'S/.';
        this.catalogMode = false;
        this._url = "assets/data/";
        this.url = "assets/data/banners.json";
        this.compareProducts = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.compareProducts.subscribe(products => products = products);
    }
    products() {
        return this.httpClient.get('assets/data/products.json');
    }
    banners() {
        return this.httpClient.get(this.url);
    }
    // Get Banners
    getBanners() {
        return this.banners();
    }
    // Get Banners
    getProducts() {
        return this.products();
    }
    // Get Products By Id
    getProduct(id) {
        return this.products().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(items => {
            return items.find((item) => { return item.id === id; });
        }));
        // return this.products.find(product=> product.id === id);
        // return this.httpClient.get<Product>(this._url + 'product-' + id + '.json');
    }
    /*
---------------------------------------------
----------  Compare Product  ----------------
---------------------------------------------
*/
    // Get Compare Products
    getComapreProducts() {
        const itemsStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            observer.next(products);
            observer.complete();
        });
        return itemsStream;
    }
    // If item is aleready added In compare
    hasProduct(product) {
        const item = products.find(item => item.id === product.id);
        return item !== undefined;
    }
    // Get Products By Slug
    getProductBySlug(slug) {
        return this.products().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(items => {
            return items.find((item) => {
                return item.name.replace(' ', '-') === slug;
            });
        }));
    }
    // Add to compare
    addToCompare(product) {
        let message, status;
        var item = false;
        if (this.hasProduct(product)) {
            item = products.filter(item => item.id === product.id)[0];
            const index = products.indexOf(item);
            this.snackBar.open('The product  ' + product.name + ' already added to comparison list.', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
        }
        else {
            if (products.length < 4)
                products.push(product);
            message = 'The product ' + product.name + ' has been added to comparison list.';
            status = 'success';
            this.snackBar.open(message, '×', { panelClass: [status], verticalPosition: 'top', duration: 3000 });
        }
        localStorage.setItem("compareItem", JSON.stringify(products));
        return item;
    }
    // Removed Product
    removeFromCompare(product) {
        if (product === undefined) {
            return;
        }
        const index = products.indexOf(product);
        products.splice(index, 1);
        localStorage.setItem("compareItem", JSON.stringify(products));
    }
    // Get Products By category
    getProductByCategory(category) {
        return this.products().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(items => items.filter((item) => {
            if (category == 'all')
                return item;
            else
                return item.category === category;
        })));
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
ProductService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
], ProductService);



/***/ }),

/***/ "6Uxs":
/*!**************************************************************************!*\
  !*** ./src/app/components/shared/header-seven/header-seven.component.ts ***!
  \**************************************************************************/
/*! exports provided: HeaderSevenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSevenComponent", function() { return HeaderSevenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_seven_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header-seven.component.html */ "XxZA");
/* harmony import */ var _header_seven_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-seven.component.sass */ "ceUZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cart.service */ "bjOM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");






let HeaderSevenComponent = class HeaderSevenComponent {
    constructor(cartService, router) {
        this.cartService = cartService;
        this.router = router;
        this.currencies = ['USD', 'EUR'];
        this.flags = [
            { name: 'English', image: 'assets/images/flags/gb.svg' },
            { name: 'German', image: 'assets/images/flags/de.svg' },
            { name: 'French', image: 'assets/images/flags/fr.svg' },
            { name: 'Russian', image: 'assets/images/flags/ru.svg' },
            { name: 'Turkish', image: 'assets/images/flags/tr.svg' }
        ];
        this.shoppingCartItems = [];
        this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                this.url = event.url;
            }
        });
    }
    ngOnInit() {
        this.currency = this.currencies[0];
        this.flag = this.flags[0];
    }
    changeCurrency(currency) {
        this.currency = currency;
    }
    changeLang(flag) {
        this.flag = flag;
    }
};
HeaderSevenComponent.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
HeaderSevenComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header-seven',
        template: _raw_loader_header_seven_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_seven_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], HeaderSevenComponent);



/***/ }),

/***/ "6ZaP":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product/product.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"product-item\"  >\r\n  <mat-card fxLayout=\"column\">\r\n    <div class=\"product-img\">\r\n        <a class=\"product-link\" [routerLink]=\"['/home/product', product.id]\">\r\n          <img [src]=\"product.pictures[0].big\" alt=\"\">\r\n       </a>\r\n       <div class=\"icons\" fxLayout=\"column\">\r\n         <a (click)=\"addToWishlist(product)\" class=\"hvr-icon-pulse-shrink\"><mat-icon class=\"hvr-icon mat-icon-lg mat-icon material-icons mr-10\">favorite_border</mat-icon></a>\r\n         <a (click)=\"openProductDialog(product)\" class=\"hvr-icon-pulse-shrink\"><mat-icon class=\"hvr-icon\">remove_red_eye</mat-icon></a>\r\n         <a (click)=\"addToCompare(product)\" class=\"hvr-icon-pulse-shrink\"><mat-icon class=\"hvr-icon\">cached</mat-icon></a>\r\n        </div>\r\n    </div>\r\n     <div class=\"product-info-wrapper\">\r\n        <span class=\"category\">{{product.category}}</span>\r\n        <div class=\"title-wrap\">\r\n           <h4>{{product.name}}</h4>\r\n        </div>\r\n        <div class=\"stars\">\r\n           <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n           <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n           <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n           <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n           <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n        </div>\r\n        <div class=\"price-wrap\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n         <p>{{product.price | currency:productsService?.currency:'symbol'}}</p>\r\n        <a (click)=\"addToCart(product)\" ><mat-icon class=\"mat-icon-lg mat-icon material-icons\">shopping_cart</mat-icon></a>\r\n        </div>\r\n     </div>\r\n  </mat-card>\r\n</div>\r\n");

/***/ }),

/***/ "7FT3":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-left-sidebar/product-left-sidebar.component.sass ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "7ekq":
/*!**********************************************************************!*\
  !*** ./src/app/components/shared/header-two/header-two.component.ts ***!
  \**********************************************************************/
/*! exports provided: HeaderTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTwoComponent", function() { return HeaderTwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_two_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header-two.component.html */ "SKlU");
/* harmony import */ var _header_two_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-two.component.sass */ "RgMK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cart.service */ "bjOM");





let HeaderTwoComponent = class HeaderTwoComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.currencies = ['USD', 'EUR'];
        this.flags = [
            { name: 'English', image: 'assets/images/flags/gb.svg' },
            { name: 'German', image: 'assets/images/flags/de.svg' },
            { name: 'French', image: 'assets/images/flags/fr.svg' },
            { name: 'Russian', image: 'assets/images/flags/ru.svg' },
            { name: 'Turkish', image: 'assets/images/flags/tr.svg' }
        ];
        this.shoppingCartItems = [];
        this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
    }
    ngOnInit() {
        this.currency = this.currencies[0];
        this.flag = this.flags[0];
    }
    changeCurrency(currency) {
        this.currency = currency;
    }
    changeLang(flag) {
        this.flag = flag;
    }
};
HeaderTwoComponent.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }
];
HeaderTwoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header-two',
        template: _raw_loader_header_two_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_two_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]])
], HeaderTwoComponent);



/***/ }),

/***/ "7l+H":
/*!**********************************************************************************!*\
  !*** ./src/app/components/shared/categories-menu/categories-menu.component.sass ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWVzLW1lbnUuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "7nMn":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/shop/food/main-carousel-food/main-carousel-food.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MainCarouselComponentFood */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainCarouselComponentFood", function() { return MainCarouselComponentFood; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_main_carousel_food_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./main-carousel-food.component.html */ "MsEn");
/* harmony import */ var _main_carousel_food_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-carousel-food.component.sass */ "IZXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let MainCarouselComponentFood = class MainCarouselComponentFood {
    constructor() {
        this.slides = [];
        this.contentLoaded = false;
        this.config = {};
        this.pagination = {
            el: '.swiper-pagination',
            clickable: true
        };
    }
    ngOnInit() {
        setTimeout(() => {
            this.contentLoaded = true;
        }, 3000);
    }
    ngAfterViewInit() {
        this.config = {
            slidesPerView: 1,
            spaceBetween: 0,
            initialSlide: 5,
            keyboard: true,
            navigation: true,
            pagination: this.pagination,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false
            },
            speed: 500,
            effect: "slide"
        };
    }
};
MainCarouselComponentFood.ctorParameters = () => [];
MainCarouselComponentFood.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['slides',] }]
};
MainCarouselComponentFood = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-main-carousel-food',
        template: _raw_loader_main_carousel_food_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_main_carousel_food_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], MainCarouselComponentFood);



/***/ }),

/***/ "8Zt6":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/banners-four/banners-four.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"banners-container\" fxLayout=\"column\" fxLayout.gt-sm=\"row\" *ngIf=\"banners.length > 0\">\r\n    <ngx-skeleton-loader\r\n    *ngIf=\"!contentLoaded\"\r\n      [theme]=\"{ 'border-radius': '0', height: '165px', width: '413px'  }\"\r\n      count=\"3\"\r\n    ></ngx-skeleton-loader>\r\n                <div *ngIf=\"contentLoaded\" class=\"baner seccond four\" fxFlex [ngStyle]=\"getBgImage(1)\">\r\n                    \r\n                    <div  class=\"info\" >\r\n                        <div class=\"text-box w-50\" fxLayout=\"column\" >\r\n                            <h4>{{getBanner(1).title}}</h4>\r\n                           <p>{{getBanner(1).subtitle}}</p>\r\n                    <a href=\"#\">Shop Now</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"contentLoaded\" class=\"baner seccond pd-xs four\" fxFlex [ngStyle]=\"getBgImage(2)\">\r\n                    <div class=\"info\" >\r\n                        <div class=\"text-box w-50\" fxLayout=\"column\" >\r\n                            <h4>{{getBanner(2).title}}</h4>\r\n                           <p>{{getBanner(2).subtitle}}</p>\r\n                    <a href=\"#\">Shop Now</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"contentLoaded\" class=\"baner seccond pd-xs four\" fxFlex [ngStyle]=\"getBgImage(2)\">\r\n                        <div class=\"info\" >\r\n                            <div class=\"text-box w-50\" fxLayout=\"column\" >\r\n                                <h4>{{getBanner(2).title}}</h4>\r\n                               <p>{{getBanner(2).subtitle}}</p>\r\n                        <a href=\"#\">Shop Now</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n            </div>\r\n\r\n");

/***/ }),

/***/ "92MC":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/price/price.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"price-slider\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"text-muted\">\r\n      <span>From: <b>${{priceFrom}}</b></span>\r\n      <span>To: <b>${{priceTo}}</b></span>\r\n  </div>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"filter-price\">\r\n      <mat-slider (change)=\"priceFilter()\" color=\"primary\" max=\"2000\" min=\"1\" thumb-label=\"true\" [(ngModel)]=\"priceFrom\"></mat-slider>\r\n      <mat-slider (change)=\"priceFilter()\" color=\"warn\" max=\"2000\" min=\"1\" thumb-label=\"true\" [(ngModel)]=\"priceTo\"></mat-slider>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "9EQA":
/*!*************************************************************************!*\
  !*** ./src/app/components/shop/products/product/product.component.sass ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "9gv1":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header-five/header-five.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"home-header-five\">\r\n    <div class=\"container\" >\r\n      <div class=\"header-wrapper\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutGap=\"20px\" fxLayoutAlign=\"space-between center\" >\r\n          <div class=\"phone-wrap\" fxLayout=\"row\">\r\n              <div class=\"info-text mr-10\">\r\n                  <p>Helpline:</p>\r\n                   <span>02(981)336 111</span>\r\n                </div>\r\n                <div class=\"info-text\">\r\n                    <p>Helpline:</p>\r\n                     <span>02(981)336 222</span>\r\n                  </div>\r\n          </div>\r\n  \r\n          <div class=\"logo\">\r\n              <a [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\" ><img src=\"assets/images/logo-01.png\"></a>\r\n          </div>\r\n          <div class=\"thm-button\">\r\n              <button mat-raised-button color=\"primary\">REQUEST A QUOTE</button>\r\n          </div>\r\n  \r\n  \r\n      </div>\r\n  \r\n  \r\n    </div>\r\n  </div>\r\n  <div class=\"menu-wraper-five\">\r\n      <div class=\"container\">\r\n          <div class=\"menu-container\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" >\r\n          \r\n                <app-menu></app-menu>\r\n                <div class=\"call-bucket-wrap\" fxLayout=\"row\" fxLayout.sm=\"row\" fxLayoutAlign=\"center center\" >\r\n          \r\n                        <div class=\"main-menu-wrapper-2\" fxLayout=\"row\"  fxLayoutAlign=\"space-between center\" >\r\n                            <mat-toolbar class=\"top-navbar top menu\">\r\n                                <div fxflexoffset.gt-sm=\"10\"  fxFlex class=\"search-form\">\r\n                                    <mat-form-field appearance=\"legacy\">\r\n                                        <mat-label>Legacy form field</mat-label>\r\n                                        <input matInput placeholder=\"Search\">\r\n                                        <i class=\"material-icons\">\r\n                                            search\r\n                                            </i>\r\n                                      </mat-form-field>\r\n                                   </div>\r\n                                   <div class=\"devider2\">\r\n          \r\n                                   </div>\r\n                              <app-shopping-widgets [shoppingCartItems]=\"shoppingCartItems\"></app-shopping-widgets>\r\n                            </mat-toolbar>\r\n                          </div>\r\n                      </div>\r\n            </div>\r\n          \r\n          </div> \r\n  </div>\r\n  \r\n  \r\n  ");

/***/ }),

/***/ "9sKH":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-carousel-four/product-carousel-four.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"product-item-3 swiper-container\" [swiper]=\"config\" >\r\n    <div class=\"swiper-wrapper h-100\">\r\n        <div *ngFor=\"let product of product\" class=\"swiper-slide\">\r\n            <mat-card fxLayout=\"column\">\r\n               <ngx-skeleton-loader\r\n              *ngIf=\"!contentLoaded\"\r\n                count=\"1\"\r\n                [theme]=\"{ width: '180px', 'border-radius': '0', height: '180px' }\"\r\n              ></ngx-skeleton-loader>\r\n                <div *ngIf=\"contentLoaded\" class=\"product-img\">\r\n                    <a class=\"product-link\" [routerLink]=\"['/home/product', product.id]\">\r\n                      <img [src]=\"product.pictures[0].big\" alt=\"\">\r\n                   </a>\r\n                   \r\n                         <div class=\"content\">\r\n                            <mat-toolbar color=\"primary\" class=\"icons\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\">\r\n                               <a (click)=\"addToWishlist(product)\" class=\"hvr-icon-pulse-shrink\"><mat-icon class=\"hvr-icon mat-icon-lg mat-icon material-icons mr-10\">favorite_border</mat-icon></a>\r\n                               <a (click)=\"openProductDialog(product)\" class=\"hvr-icon-pulse-shrink\"><mat-icon class=\"hvr-icon\">remove_red_eye</mat-icon></a>\r\n                               <a (click)=\"addToCompare(product)\" class=\"hvr-icon-pulse-shrink\"><mat-icon class=\"hvr-icon\">cached</mat-icon></a>\r\n                            </mat-toolbar>\r\n                         </div>\r\n                      \r\n                </div>\r\n                 <div class=\"product-info-wrapper\">\r\n                  <ngx-skeleton-loader\r\n                  *ngIf=\"!contentLoaded\"\r\n                    count=\"2\"\r\n                    [theme]=\"{ 'border-radius': '0', height: '20px' }\"\r\n                  ></ngx-skeleton-loader>\r\n                    <span *ngIf=\"contentLoaded\" class=\"category\">{{product.category}}</span>\r\n                    <div *ngIf=\"contentLoaded\" class=\"title-wrap\">\r\n                       <h4>{{product.name}}</h4>\r\n                    </div>\r\n                    <div *ngIf=\"contentLoaded\" class=\"stars\">\r\n                       <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                       <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                       <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                       <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                       <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                    </div>\r\n                    <div *ngIf=\"contentLoaded\" class=\"price-wrap\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                     <p>${{product.price | number : '1.2-2'}}</p>\r\n                    <button (click)=\"addToCart(product)\" mat-mini-fab color=\"primary\"><mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-lg mat-icon material-icons\">shopping_cart</mat-icon></button>\r\n                    </div>\r\n                    \r\n                 </div>\r\n              </mat-card>\r\n        </div>\r\n \r\n    </div>\r\n    <button mat-mini-fab class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n    <button mat-mini-fab class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button>\r\n  </div>\r\n \r\n ");

/***/ }),

/***/ "AZwa":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container fullscreen>\r\n    <mat-sidenav [opened]=\"false\" mode=\"over\"  #start  class=\"sidenav\">\r\n        <button mat-icon-button color=\"warn\" class=\"close\" (click)=\"start.close()\">\r\n          <mat-icon color=\"warn\">close</mat-icon>\r\n        </button>\r\n        <div class=\"divider\"></div>\r\n        <div class=\"sidebar-items\" fxLayout=\"column\" >\r\n            <app-sidebar *ngFor=\"let item of navItems\" [item]=\"item\"></app-sidebar>\r\n        </div>\r\n    </mat-sidenav>\r\n    <mat-toolbar  *ngIf=\"url !== '/home/furniture' && url !== '/home/home-decor' && url !== '/home/food'\" class=\"main-topbar \"  [ngClass]=\"{'topbar_four': url == '/home/four' }\"\r\n   > \r\n      <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"top-bar container\" >\r\n              <span fxHide=\"false\" fxHide.gt-sm   >\r\n                  <button mat-icon-button (click)=\"start.toggle()\">\r\n                      <mat-icon>menu</mat-icon>\r\n                  </button>\r\n                </span>\r\n            <div class=\"widgets-left\" fxLayout=\"row\">\r\n            </div>\r\n            <div class=\"widgets-left\" fxLayout=\"row\">\r\n              <div class=\"widget-text\">\r\n                <a fxShow=\"false\" fxShow.gt-xs [routerLink]=\"['/pages/wishlist']\" routerLinkActive=\"router-link-active\" ><mat-icon class=\"mat-icon-lg mat-icon material-icons mr-10\">favorite_border</mat-icon> DESEADOS</a>\r\n              </div>\r\n              <div class=\"widget-text\">\r\n                <a fxShow=\"false\" fxShow.gt-xs [routerLink]=\"['/pages/compare']\" routerLinkActive=\"router-link-active\" ><mat-icon>cached</mat-icon>COMPARAR</a>\r\n              </div>\r\n              <div class=\"widget-text\">\r\n                  <a fxShow=\"false\" fxShow.gt-xs [routerLink]=\"['/pages/my-account']\" routerLinkActive=\"router-link-active\" ><mat-icon>person</mat-icon>MI CUENTA</a>\r\n                </div>\r\n            </div>\r\n      </mat-toolbar-row>\r\n    </mat-toolbar>\r\n    <mat-toolbar *ngIf=\"url == '/home/furniture'  && router.url.includes('furniture') || url == '/home/home-decor' || router.url.includes('home-decor')\" class=\"main-topbar-furniture\" [ngClass]=\"{topbar_furniture: url == '/home/furniture' }\">\r\n      <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"top-bar container\" >\r\n              <span fxHide=\"false\" fxHide.gt-sm   >\r\n                  <button mat-icon-button (click)=\"start.toggle()\">\r\n                      <mat-icon>menu</mat-icon>\r\n                  </button>\r\n                </span>\r\n            <div fxLayout=\"row\" class=\"welcome-message\">\r\n              <div class=\"widget-text\">\r\n                <a mat-button [matMenuTriggerFor]=\"currencyMenu\" #currencyMenuTrigger=\"matMenuTrigger\">\r\n                  {{currency}}<mat-icon class=\"mat-icon-sm caret cur-icon\">arrow_drop_down</mat-icon>\r\n                </a>\r\n                <mat-menu #currencyMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\" class=\"app-dropdown\">\r\n                  <span>\r\n                      <button mat-menu-item *ngFor=\"let cur of currencies\" (click)=\"changeCurrency(cur)\">\r\n                          <span>{{cur}}</span>\r\n                      </button>\r\n                  </span>\r\n              </mat-menu>\r\n              </div>\r\n              <div class=\"widget-text\">\r\n                <a mat-button [matMenuTriggerFor]=\"langMenu\" #langMenuTrigger=\"matMenuTrigger\">\r\n                  <img [src]=\"flag.image\" width=\"18\">\r\n                  <span fxShow=\"false\" fxShow.gt-sm class=\"flag-menu-title\">{{flag.name}}</span>\r\n                  <mat-icon class=\"mat-icon-sm caret cur-icon\">arrow_drop_down</mat-icon>\r\n              </a>\r\n              <mat-menu #langMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\" class=\"app-dropdown\">\r\n                  <span>\r\n                      <button mat-menu-item *ngFor=\"let flag of flags\" (click)=\"changeLang(flag)\">\r\n                          <img [src]=\"flag.image\" width=\"18\"> {{flag.name}}\r\n                      </button>\r\n                  </span>\r\n              </mat-menu>\r\n              </div>\r\n            </div>\r\n            <div class=\"company-email\">\r\n              <p> +01 23456789  sophia@domain.com</p>\r\n            </div>\r\n      </mat-toolbar-row>\r\n    </mat-toolbar>\r\n  <app-header-seven class=\"home-header-seven \" [ngClass]=\"{'header-decor': url == '/home/home-decor'}\" *ngIf=\"url == '/home/furniture'  || router.url.includes('furniture') || url == '/home/home-decor' || router.url.includes('home-decor')\" ></app-header-seven>\r\n  <app-header-six *ngIf=\"url == '/home/food'  || router.url.includes('food') \"></app-header-six>\r\n  <app-header *ngIf=\" url == '/' || router.url.includes('pages')  || router.url.includes('blog') || router.url.includes('product')\"></app-header>\r\n  <app-header-two *ngIf=\"url == '/home/two' || url == '/home/product/food' \"></app-header-two>\r\n  <app-header-three *ngIf=\"url == '/home/four' || url == '/home/four'\"></app-header-three>\r\n  <app-header-four *ngIf=\"url == '/home/five' || url == '/home/five'\"></app-header-four>\r\n  <app-header-five *ngIf=\"url == '/home/industrial' || url == '/home/industrial'\"></app-header-five>\r\n  \r\n  <router-outlet></router-outlet>\r\n  <app-footer *ngIf=\"url != '/home/five'\"></app-footer>\r\n</mat-sidenav-container>");

/***/ }),

/***/ "AaWP":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-carousel-two/product-carousel-two.component.sass ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWNhcm91c2VsLXR3by5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "ArGO":
/*!*********************************************************************!*\
  !*** ./src/app/components/shop/products/price/price.component.sass ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmljZS5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "As72":
/*!**************************************************************************!*\
  !*** ./src/app/components/shared/header-five/header-five.component.sass ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXItZml2ZS5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B8Cg":
/*!***************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-details/product-details.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-details.component.html */ "Ywm1");
/* harmony import */ var _product_details_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-details.component.sass */ "D02f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/shared/services/product.service */ "6MrQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/shared/services/cart.service */ "bjOM");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-swiper-wrapper */ "S8NE");
/* harmony import */ var _product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-zoom/product-zoom.component */ "hnp9");










let ProductDetailsComponent = class ProductDetailsComponent {
    constructor(route, productsService, dialog, router, cartService) {
        this.route = route;
        this.productsService = productsService;
        this.dialog = dialog;
        this.router = router;
        this.cartService = cartService;
        this.config = {};
        this.onOpenProductDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.product = {};
        this.products = [];
        this.counter = 1;
        this.bigProductImageIndex = 0;
        this.route.params.subscribe(params => {
            const id = +params['id'];
            this.productsService.getProduct(id).subscribe(product => this.product = product);
        });
    }
    ngOnInit() {
        this.productsService.getProducts().subscribe(product => this.products = product);
        this.getRelatedProducts();
    }
    ngAfterViewInit() {
        this.config = {
            observer: true,
            slidesPerView: 3,
            spaceBetween: 10,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            breakpoints: {
                480: {
                    slidesPerView: 1
                },
                740: {
                    slidesPerView: 2,
                },
                960: {
                    slidesPerView: 3,
                },
                1280: {
                    slidesPerView: 3,
                },
            }
        };
    }
    openProductDialog(product, bigProductImageIndex) {
        let dialogRef = this.dialog.open(_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_9__["ProductZoomComponent"], {
            data: { product, index: bigProductImageIndex },
            panelClass: 'product-dialog',
        });
        dialogRef.afterClosed().subscribe(product => {
            if (product) {
                this.router.navigate(['/products', product.id, product.name]);
            }
        });
    }
    selectImage(index) {
        console.log(this.product);
        console.log(index);
        this.bigProductImageIndex = index;
    }
    increment() {
        this.counter += 1;
    }
    decrement() {
        if (this.counter > 1) {
            this.counter -= 1;
        }
    }
    getRelatedProducts() {
        this.productsService.getProducts()
            .subscribe((product) => {
            this.products = product;
        });
    }
    // Add to cart
    addToCart(product, quantity) {
        if (quantity == 0)
            return false;
        this.cartService.addToCart(product, parseInt(quantity));
    }
    // Add to cart
    buyNow(product, quantity) {
        if (quantity > 0)
            this.cartService.addToCart(product, parseInt(quantity));
        this.router.navigate(['/pages/checkout']);
    }
    onMouseMove(e) {
        if (window.innerWidth >= 1280) {
            var image, offsetX, offsetY, x, y, zoomer;
            image = e.currentTarget;
            offsetX = e.offsetX;
            offsetY = e.offsetY;
            x = offsetX / image.offsetWidth * 100;
            y = offsetY / image.offsetHeight * 100;
            zoomer = this.zoomViewer.nativeElement.children[0];
            if (zoomer) {
                zoomer.style.backgroundPosition = x + '% ' + y + '%';
                zoomer.style.display = "block";
                zoomer.style.height = image.height + 'px';
                zoomer.style.width = image.width + 'px';
            }
        }
    }
    onMouseLeave(event) {
        this.zoomViewer.nativeElement.children[0].style.display = "none";
    }
    openZoomViewer() {
        this.dialog.open(_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_9__["ProductZoomComponent"], {
            data: this.zoomImage,
            panelClass: 'zoom-dialog'
        });
    }
};
ProductDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"] }
];
ProductDetailsComponent.propDecorators = {
    onOpenProductDialog: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    zoomViewer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['zoomViewer', { static: true },] }],
    directiveRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_8__["SwiperDirective"], { static: true },] }]
};
ProductDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-details',
        template: _raw_loader_product_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_details_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"]])
], ProductDetailsComponent);



/***/ }),

/***/ "B9uv":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-vertical/product-vertical.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ProductVerticalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductVerticalComponent", function() { return ProductVerticalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_vertical_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-vertical.component.html */ "PN7s");
/* harmony import */ var _product_vertical_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-vertical.component.sass */ "jHYg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/shared/services/product.service */ "6MrQ");





let ProductVerticalComponent = class ProductVerticalComponent {
    constructor(productService) {
        this.productService = productService;
        this.contentLoaded = false;
    }
    ngOnInit() {
        this.productService.getProducts()
            .subscribe(product => this.products = product);
        setTimeout(() => {
            this.contentLoaded = true;
        }, 3000);
    }
};
ProductVerticalComponent.ctorParameters = () => [
    { type: src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }
];
ProductVerticalComponent.propDecorators = {
    products: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ProductVerticalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-vertical',
        template: _raw_loader_product_vertical_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_vertical_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]])
], ProductVerticalComponent);



/***/ }),

/***/ "BSd3":
/*!****************************************************************!*\
  !*** ./src/app/components/shop/home-two/home-two.component.ts ***!
  \****************************************************************/
/*! exports provided: HomeTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTwoComponent", function() { return HomeTwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_two_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home-two.component.html */ "Hhop");
/* harmony import */ var _home_two_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-two.component.sass */ "C4p+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/product.service */ "6MrQ");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/cart.service */ "bjOM");






let HomeTwoComponent = class HomeTwoComponent {
    constructor(productService, cartService) {
        this.productService = productService;
        this.cartService = cartService;
        this.contentLoaded = false;
        this.banners = [];
        this.shoppingCartItems = [];
        this.wishlistItems = [];
        this.slides = [
            { title: 'Huge sale', subtitle: 'Up to 70%', image: 'assets/images/carousel/banner1.jpg' },
            { title: 'Biggest discount', subtitle: 'Check the promotion', image: 'assets/images/carousel/banner2.jpg' },
            { title: 'Biggest sale', subtitle: 'Dont miss it', image: 'assets/images/carousel/banner3.jpg' },
            { title: 'Our best products', subtitle: 'Special selection', image: 'assets/images/carousel/banner4.jpg' },
            { title: 'Massive sale', subtitle: 'Only for today', image: 'assets/images/carousel/banner5.jpg' }
        ];
    }
    ngOnInit() {
        this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
        this.productService.getProducts()
            .subscribe((product) => {
            this.products = product;
        });
        this.productService.getBanners()
            .subscribe(data => this.banners = data);
        setTimeout(() => {
            this.contentLoaded = true;
        }, 3000);
    }
};
HomeTwoComponent.ctorParameters = () => [
    { type: _shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] }
];
HomeTwoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home-two',
        template: _raw_loader_home_two_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_two_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]])
], HomeTwoComponent);



/***/ }),

/***/ "BhY8":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/shop/industrial/main-carousel-industrial/main-carousel-industrial.component.sass ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLWNhcm91c2VsLWluZHVzdHJpYWwuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "BqSI":
/*!**********************************************************!*\
  !*** ./src/app/components/shop/home/home.component.sass ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "C4p+":
/*!******************************************************************!*\
  !*** ./src/app/components/shop/home-two/home-two.component.sass ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXR3by5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "CLaU":
/*!**********************************************************************!*\
  !*** ./src/app/components/shop/home-decor/home-decor.component.sass ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWRlY29yLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "CVEe":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/products.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  products works!\r\n</p>\r\n");

/***/ }),

/***/ "CyaJ":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/home/home.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <ngx-skeleton-loader\r\n            *ngIf=\"!contentLoaded\"\r\n              [theme]=\"{ 'border-radius': '0', height: '550px'  }\"\r\n              count=\"1\"\r\n            ></ngx-skeleton-loader>\r\n  <app-main-carousel *ngIf=\"contentLoaded\" [slides]=\"slides\"></app-main-carousel>\r\n</div>\r\n\r\n<div class=\"home-1-wrap\">\r\n\r\n  <div class=\"container\">\r\n      <div fxLayout=\"row wrap\" class=\"info-bar\" >\r\n        \r\n        <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\" >\r\n          <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\" >\r\n            <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" appearance=\"circle\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n            <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg  m-0\" *ngIf=\"contentLoaded\">card_giftcard</mat-icon>\r\n            <div class=\"content\">\r\n              <ngx-skeleton-loader\r\n              *ngIf=\"!contentLoaded\"\r\n                count=\"2\"\r\n                [theme]=\"{ 'border-radius': '0', width: '100px', height: '15px' }\"\r\n              ></ngx-skeleton-loader>\r\n              <p *ngIf=\"contentLoaded\">BONUS PLUS</p>\r\n              <span *ngIf=\"contentLoaded\" class=\"text-muted m-0\">Get a bonus plus for buying more that three products</span>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n        <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n          <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n            <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" appearance=\"circle\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n            <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg  m-0\" *ngIf=\"contentLoaded\">local_shipping</mat-icon>\r\n            <div class=\"content\">\r\n              <ngx-skeleton-loader\r\n              *ngIf=\"!contentLoaded\"\r\n                count=\"2\"\r\n                [theme]=\"{ 'border-radius': '0', width: '100px', height: '15px' }\"\r\n              ></ngx-skeleton-loader>\r\n              <p *ngIf=\"contentLoaded\">FREE SHIPPING</p>\r\n              <span class=\"text-muted m-0\" *ngIf=\"contentLoaded\">Free shipping on all orders over $99</span>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n        <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n          <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n            <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" appearance=\"circle\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n            <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg m-0\" *ngIf=\"contentLoaded\">monetization_on</mat-icon>\r\n            <div class=\"content\">\r\n              <ngx-skeleton-loader\r\n              *ngIf=\"!contentLoaded\"\r\n                count=\"2\"\r\n                [theme]=\"{ 'border-radius': '0', width: '100px', height: '15px' }\"\r\n              ></ngx-skeleton-loader>\r\n              <p *ngIf=\"contentLoaded\">MONEY BACK GUARANTEE</p>\r\n              <span *ngIf=\"contentLoaded\" class=\"text-muted m-0\">100% money back guarantee</span>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n        <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n          <mat-card class=\"light-block no-bd\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n            <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" appearance=\"circle\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n            <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg m-0\" *ngIf=\"contentLoaded\">history</mat-icon>\r\n            <div class=\"content\">\r\n              <ngx-skeleton-loader\r\n              *ngIf=\"!contentLoaded\"\r\n                count=\"2\"\r\n                [theme]=\"{ 'border-radius': '0', width: '100px', height: '15px' }\"\r\n              ></ngx-skeleton-loader>\r\n              <p *ngIf=\"contentLoaded\">ONLINE SUPPORT 24/7</p>\r\n              <span *ngIf=\"contentLoaded\" class=\"text-muted m-0\">Call us: 02 3555 65454 55</span>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n      <div class=\"products-industrial sec-padding\">\r\n          <mat-tab-group>\r\n\r\n            <mat-tab  label=\"FEATURED PRODUCTS\">\r\n\r\n                     <app-product-carousel [product]=\"products | slice:0:8\"></app-product-carousel>\r\n\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"LATEST PRODUCTS\">\r\n\r\n                    <app-product-carousel [product]=\"products | slice:0:14\"></app-product-carousel>\r\n\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"ON SALE PRODUCTS\">\r\n\r\n                      <app-product-carousel [product]=\"products | slice:14:22\"></app-product-carousel>\r\n\r\n            </mat-tab>\r\n\r\n          </mat-tab-group>\r\n        </div>\r\n      <app-banners [banners]=\"banners\"></app-banners>\r\n    </div>\r\n    <app-product-vertical [products]=\"products\"></app-product-vertical>\r\n</div>\r\n");

/***/ }),

/***/ "D02f":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-details/product-details.component.sass ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "D1h0":
/*!**************************************************************************!*\
  !*** ./src/app/components/shared/blog-section/blog-section.component.ts ***!
  \**************************************************************************/
/*! exports provided: BlogSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogSectionComponent", function() { return BlogSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_blog_section_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./blog-section.component.html */ "cI5o");
/* harmony import */ var _blog_section_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog-section.component.sass */ "sxMe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let BlogSectionComponent = class BlogSectionComponent {
    constructor() {
        this.contentLoaded = false;
    }
    ngOnInit() {
        setTimeout(() => {
            this.contentLoaded = true;
        }, 3000);
    }
};
BlogSectionComponent.ctorParameters = () => [];
BlogSectionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-blog-section',
        template: _raw_loader_blog_section_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_blog_section_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], BlogSectionComponent);



/***/ }),

/***/ "D3FB":
/*!********************************************************************!*\
  !*** ./src/app/components/shop/home-five/home-five.component.sass ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWZpdmUuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "DawS":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-details/product-zoom/product-zoom.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"product-dialog\">\r\n\r\n  <div class=\"close-btn-outer\">\r\n    <button mat-mini-fab color=\"warn\" (click)=\"close()\"><mat-icon>close</mat-icon></button>\r\n  </div>\r\n  <div mat-dialog-content>\r\n    <div fxLayout=\"row wrap\" >\r\n        <div>\r\n            <div class=\"swiper-container h-100\">\r\n                <div class=\"swiper-wrapper\">\r\n                  <img [src]=\"product.pictures[selectedProductImageIndex].big\" alt=\"\" class=\"img-fluid\">\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  </div>\r\n");

/***/ }),

/***/ "Dmma":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-carousel-two/product-carousel-two.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"product-item-2 swiper-container\" [swiper]=\"config\" >\r\n    <div class=\"swiper-wrapper h-100\">\r\n        <div *ngFor=\"let product of product\" class=\"swiper-slide\">\r\n            <mat-card fxLayout=\"column\">\r\n               <ngx-skeleton-loader\r\n              *ngIf=\"!contentLoaded\"\r\n                count=\"1\"\r\n                [theme]=\"{ width: '180px', 'border-radius': '0', height: '180px' }\"\r\n              ></ngx-skeleton-loader>\r\n                <div class=\"product-img\" *ngIf=\"contentLoaded\">\r\n                    <a class=\"product-link\" [routerLink]=\"['/home/product', product.id]\">\r\n                      <img [src]=\"product.pictures[0].big\" alt=\"\">\r\n                   </a>\r\n                   <div class=\"icons\" fxLayout=\"column\">\r\n                    <a (click)=\"addToWishlist(product)\" class=\"hvr-icon-pulse-shrink\"><mat-icon class=\"hvr-icon mat-icon-lg mat-icon material-icons mr-10\">favorite_border</mat-icon></a>\r\n                    <a (click)=\"openProductDialog(product)\" class=\"hvr-icon-pulse-shrink\"><mat-icon class=\"hvr-icon\">remove_red_eye</mat-icon></a>\r\n                    <a (click)=\"addToCompare(product)\" class=\"hvr-icon-pulse-shrink\"><mat-icon class=\"hvr-icon\">cached</mat-icon></a>\r\n                   </div>\r\n               \r\n                </div>\r\n                 <div class=\"product-info-wrapper\">\r\n                  <ngx-skeleton-loader\r\n                  *ngIf=\"!contentLoaded\"\r\n                    count=\"2\"\r\n                    [theme]=\"{ 'border-radius': '0', height: '20px' }\"\r\n                  ></ngx-skeleton-loader>\r\n                    <span class=\"category\" *ngIf=\"contentLoaded\">{{product.category}}</span>\r\n                    <div class=\"title-wrap\" *ngIf=\"contentLoaded\">\r\n                       <h4>{{product.name}}</h4>\r\n                    </div>\r\n                    <div class=\"stars\" *ngIf=\"contentLoaded\">\r\n                       <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                       <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                       <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                       <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                       <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                    </div>\r\n                    <div *ngIf=\"contentLoaded\" class=\"price-wrap\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                     <p>${{product.price | number : '1.2-2'}}</p>\r\n                    <a (click)=\"addToCart(product)\" ><mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-lg mat-icon material-icons\">shopping_cart</mat-icon></a>\r\n                    </div>\r\n                    \r\n                 </div>\r\n              </mat-card>\r\n        </div>\r\n \r\n    </div>\r\n    <button mat-mini-fab class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n    <button mat-mini-fab class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button>\r\n  </div>\r\n \r\n ");

/***/ }),

/***/ "EaNY":
/*!**********************************************************************!*\
  !*** ./src/app/components/shared/breadcrumb/breadcrumb.component.ts ***!
  \**********************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_breadcrumb_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./breadcrumb.component.html */ "kqla");
/* harmony import */ var _breadcrumb_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breadcrumb.component.sass */ "JDxA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let BreadcrumbComponent = class BreadcrumbComponent {
    constructor() { }
    ngOnInit() {
    }
};
BreadcrumbComponent.ctorParameters = () => [];
BreadcrumbComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    breadcrumb: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
BreadcrumbComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-breadcrumb',
        template: _raw_loader_breadcrumb_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_breadcrumb_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], BreadcrumbComponent);



/***/ }),

/***/ "F5+V":
/*!**********************************************************************!*\
  !*** ./src/app/components/shop/widgets/brands/brands.component.sass ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmFuZHMuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "FOO7":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-carousel-four/product-carousel-four.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ProductCarouselFourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCarouselFourComponent", function() { return ProductCarouselFourComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_carousel_four_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-carousel-four.component.html */ "9sKH");
/* harmony import */ var _product_carousel_four_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-carousel-four.component.sass */ "ZWR3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _products_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../products/product-dialog/product-dialog.component */ "5Tg0");
/* harmony import */ var src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/shared/services/cart.service */ "bjOM");
/* harmony import */ var src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/shared/services/product.service */ "6MrQ");
/* harmony import */ var src_app_components_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/shared/services/wishlist.service */ "m4vo");










let ProductCarouselFourComponent = class ProductCarouselFourComponent {
    constructor(dialog, router, cartService, productService, wishlistService) {
        this.dialog = dialog;
        this.router = router;
        this.cartService = cartService;
        this.productService = productService;
        this.wishlistService = wishlistService;
        this.contentLoaded = false;
        this.onOpenProductDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.product = [];
        this.config = {};
    }
    ngOnInit() {
        setTimeout(() => {
            this.contentLoaded = true;
        }, 3000);
    }
    ngAfterViewInit() {
        this.config = {
            observer: true,
            slidesPerView: 5,
            spaceBetween: 16,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: true,
            preloadImages: false,
            lazy: true,
            breakpoints: {
                480: {
                    slidesPerView: 1
                },
                740: {
                    slidesPerView: 2,
                },
                960: {
                    slidesPerView: 3,
                },
                1280: {
                    slidesPerView: 4,
                },
            }
        };
    }
    openProductDialog(product) {
        let dialogRef = this.dialog.open(_products_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ProductDialogComponent"], {
            data: product,
            panelClass: 'product-dialog',
        });
        dialogRef.afterClosed().subscribe(product => {
            if (product) {
                this.router.navigate(['/products', product.id, product.name]);
            }
        });
    }
    // Add to cart
    addToCart(product, quantity = 1) {
        this.cartService.addToCart(product, quantity);
        console.log(product, quantity);
    }
    // Add to wishlist
    addToWishlist(product) {
        this.wishlistService.addToWishlist(product);
    }
    // Add to compare
    addToCompare(product) {
        this.productService.addToCompare(product);
    }
};
ProductCarouselFourComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"] },
    { type: src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"] },
    { type: src_app_components_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_9__["WishlistService"] }
];
ProductCarouselFourComponent.propDecorators = {
    onOpenProductDialog: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['product',] }]
};
ProductCarouselFourComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-carousel-four',
        template: _raw_loader_product_carousel_four_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_carousel_four_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"], src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"], src_app_components_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_9__["WishlistService"]])
], ProductCarouselFourComponent);



/***/ }),

/***/ "FezY":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "M9yH");
/* harmony import */ var _footer_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.sass */ "4+Ld");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "G9J/":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-details/product-zoom/product-zoom.component.sass ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LXpvb20uY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "Gn07":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.sass ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "GpRW":
/*!********************************************************************!*\
  !*** ./src/app/components/shop/home-decor/home-decor.component.ts ***!
  \********************************************************************/
/*! exports provided: HomeDecorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeDecorComponent", function() { return HomeDecorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_decor_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home-decor.component.html */ "VcBL");
/* harmony import */ var _home_decor_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-decor.component.sass */ "CLaU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/product.service */ "6MrQ");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/cart.service */ "bjOM");






let HomeDecorComponent = class HomeDecorComponent {
    constructor(productService, cartService) {
        this.productService = productService;
        this.cartService = cartService;
        this.contentLoaded = false;
        this.banners = [];
        this.shoppingCartItems = [];
        this.wishlistItems = [];
        this.slides = [
            { title: 'Huge sale', subtitle: 'Up to 70%', image: 'assets/images/carousel/decor/banner1.jpg' },
            { title: 'Biggest discount', subtitle: 'Check the promotion', image: 'assets/images/carousel/decor/banner2.jpg' },
            { title: 'Biggest sale', subtitle: 'Dont miss it', image: 'assets/images/carousel/decor/banner3.jpg' },
            { title: 'Our best products', subtitle: 'Special selection', image: 'assets/images/carousel/decor/banner4.jpg' },
        ];
        this.baners = [
            {
                "title": "Headphone",
                "subtitle": "Best bluetoot speakers ever. Don't miss it.",
                "image": "assets/images/background/baner_green.jpg"
            },
            {
                "title": "Multimedia",
                "subtitle1": ["Headphones", "Laptops", "Ipads", "smartphones", "Usb"],
                "image": "assets/images/product/baners-decor/tablet.png"
            },
            { "title": "Cosmetics",
                "subtitle": ["Headphones", "Laptops", "Ipads", "smartphones", "Usb"],
                "image": "assets/images/product/baners-decor/cosmetics.png" },
            { "title": "Home decors", "subtitle": ["Headphones", "Laptops", "Ipads", "smartphones", "Usb"
                ],
                "image": "assets/images/product/baners-decor/home.png"
            },
            {
                "title": "Electrics",
                "subtitle": ["Headphones", "Laptops", "Ipads", "smartphones", "Usb"],
                "image": "assets/images/product/baners-decor/electrics.png"
            }
        ];
    }
    ngOnInit() {
        this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
        this.productService.getProducts()
            .subscribe((product) => {
            this.products = product.filter(item => item.type == 'decor');
        });
        this.productService.getBanners()
            .subscribe(data => this.banners = data);
        document.documentElement.style.setProperty('--theme-deafult', '#28b88d');
        setTimeout(() => {
            this.contentLoaded = true;
        }, 3000);
    }
    getBanner(index) {
        return this.baners[index];
    }
    getBgImage(index) {
        let bgImage = {
            'background-image': index != null ? "url(" + this.baners[index].image + ")" : "url(https://via.placeholder.com/600x400/ff0000/fff/)"
        };
        return bgImage;
    }
};
HomeDecorComponent.ctorParameters = () => [
    { type: _shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] }
];
HomeDecorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home-decor',
        template: _raw_loader_home_decor_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_decor_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]])
], HomeDecorComponent);



/***/ }),

/***/ "GqsX":
/*!**********************************************************!*\
  !*** ./src/app/components/shared/menu/menu.component.ts ***!
  \**********************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./menu.component.html */ "MJ2i");
/* harmony import */ var _menu_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.component.sass */ "PDd9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let MenuComponent = class MenuComponent {
    constructor() { }
    ngOnInit() {
    }
    openMegaMenu() {
        let pane = document.getElementsByClassName('cdk-overlay-pane');
        [].forEach.call(pane, function (el) {
            if (el.children.length > 0) {
                if (el.children[0].classList.contains('mega-menu')) {
                    el.classList.add('mega-menu-pane');
                }
            }
        });
    }
};
MenuComponent.ctorParameters = () => [];
MenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu',
        template: _raw_loader_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], MenuComponent);



/***/ }),

/***/ "H7iV":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/widgets/popular-products/popular-products.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div fxLayout=\"column\" class=\"popular-products\" ngClass.gt-md=\"m-0\">\r\n    <div class=\"title-header\">\r\n        <h4 class=\"title\">POPULAR PRODUCTS</h4>\r\n    </div>\r\n      <mat-list class=\"reviews\">\r\n         <mat-list-item class=\"content\"  *ngFor=\"let product of products | slice:0:3\">\r\n          <div class=\"media\">  <a [routerLink]=\"['/home/left-sidebar/product', product.id]\">\r\n              <img class=\"img-fluid\" [src]=\"product.pictures[0].big\" alt=\"\">\r\n            </a>\r\n          </div>\r\n             <div class=\"info align-self-center\">\r\n               <a [routerLink]=\"['/home/left-sidebar/product', product.id]\"><h5>{{product.name}}</h5></a>\r\n               <div class=\"stars\">\r\n                  <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                  <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                  <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                  <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                  <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n               </div>\r\n               <p class=\"price\" *ngIf=\"!productsService?.catalogMode\">{{product.price | currency:productsService?.currency:'symbol'}}</p>\r\n             </div>\r\n          </mat-list-item>\r\n      </mat-list>\r\n  </div>\r\n");

/***/ }),

/***/ "Hhop":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/home-two/home-two.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"carousel-2\">\r\n    <div class=\"container ctn-box\"  >\r\n      <div class=\"\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\">\r\n          <div class=\"slider-categories\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.md=\"40\">\r\n              <div class=\"categories-wrap\" >\r\n                <ngx-skeleton-loader\r\n                *ngIf=\"!contentLoaded\"\r\n                  [theme]=\"{ 'border-radius': '0', height: '461px'  }\"\r\n                  count=\"1\"\r\n                ></ngx-skeleton-loader>\r\n                  <div *ngIf=\"contentLoaded\" class=\"title\"> TOP CATEGORIES</div>\r\n                    <app-categories *ngIf=\"contentLoaded\"></app-categories>\r\n                    <div *ngIf=\"contentLoaded\" class=\"btn-sale\">\r\n                        <button mat-raised-button color=\"primary\">USE THE DISCOUNT - 60% OFF</button>\r\n                    </div>\r\n                    </div>\r\n          </div>\r\n          <div class=\"carousel-2-wrapper\" fxLayout.sm=\"column\" fxFlex=\"100\" fxFlex.gt-md=\"75\" fxFlex.md=\"60\" fxFlex.sm=\"100\">\r\n            <ngx-skeleton-loader\r\n            *ngIf=\"!contentLoaded\"\r\n              [theme]=\"{ 'border-radius': '0', height: '461px'  }\"\r\n              count=\"1\"\r\n            ></ngx-skeleton-loader>\r\n              <app-main-carousel *ngIf=\"contentLoaded\" [slides]=\"slides\"></app-main-carousel>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"home-2-wrap\">\r\n      <div class=\"info-bar2-wrap\">\r\n          <div class=\"container\">\r\n            <div fxLayout=\"row wrap\" class=\"info-bar\" >\r\n        \r\n              <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\" >\r\n                <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\" >\r\n                  <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" appearance=\"circle\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n                  <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg  m-0\" *ngIf=\"contentLoaded\">card_giftcard</mat-icon>\r\n                  <div class=\"content\">\r\n                    <ngx-skeleton-loader\r\n                    *ngIf=\"!contentLoaded\"\r\n                      count=\"2\"\r\n                      [theme]=\"{ 'border-radius': '0', height: '15px' }\"\r\n                    ></ngx-skeleton-loader>\r\n                    <p *ngIf=\"contentLoaded\">BONUS PLUS</p>\r\n                    <span *ngIf=\"contentLoaded\" class=\"text-muted m-0\">Get a bonus plus for buying more that three products</span>\r\n                  </div>\r\n                </mat-card>\r\n              </div>\r\n              <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n                <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                  <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" appearance=\"circle\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n                  <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg  m-0\" *ngIf=\"contentLoaded\">local_shipping</mat-icon>\r\n                  <div class=\"content\">\r\n                    <ngx-skeleton-loader\r\n                    *ngIf=\"!contentLoaded\"\r\n                      count=\"2\"\r\n                      [theme]=\"{ 'border-radius': '0', height: '15px' }\"\r\n                    ></ngx-skeleton-loader>\r\n                    <p *ngIf=\"contentLoaded\">FREE SHIPPING</p>\r\n                    <span class=\"text-muted m-0\" *ngIf=\"contentLoaded\">Free shipping on all orders over $99</span>\r\n                  </div>\r\n                </mat-card>\r\n              </div>\r\n              <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n                <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                  <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" appearance=\"circle\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n                  <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg m-0\" *ngIf=\"contentLoaded\">monetization_on</mat-icon>\r\n                  <div class=\"content\">\r\n                    <ngx-skeleton-loader\r\n                    *ngIf=\"!contentLoaded\"\r\n                      count=\"2\"\r\n                      [theme]=\"{ 'border-radius': '0', height: '15px' }\"\r\n                    ></ngx-skeleton-loader>\r\n                    <p *ngIf=\"contentLoaded\">MONEY BACK GUARANTEE</p>\r\n                    <span *ngIf=\"contentLoaded\" class=\"text-muted m-0\">100% money back guarantee</span>\r\n                  </div>\r\n                </mat-card>\r\n              </div>\r\n              <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n                <mat-card class=\"light-block no-bd\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                  <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" appearance=\"circle\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n                  <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg m-0\" *ngIf=\"contentLoaded\">history</mat-icon>\r\n                  <div class=\"content\">\r\n                    <ngx-skeleton-loader\r\n                    *ngIf=\"!contentLoaded\"\r\n                      count=\"2\"\r\n                      [theme]=\"{  'border-radius': '0', height: '15px' }\"\r\n                    ></ngx-skeleton-loader>\r\n                    <p *ngIf=\"contentLoaded\">ONLINE SUPPORT 24/7</p>\r\n                    <span *ngIf=\"contentLoaded\" class=\"text-muted m-0\">Call us: 02 3555 65454 55</span>\r\n                  </div>\r\n                </mat-card>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"products sec-padding\">\r\n            <div class=\"container\">\r\n                <mat-tab-group>\r\n\r\n                    <mat-tab  label=\"FEATURED PRODUCTS\">\r\n\r\n                             <app-product-carousel-two [product]=\"products | slice:0:5\"></app-product-carousel-two>\r\n\r\n\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"LATEST PRODUCTS\">\r\n\r\n                            <app-product-carousel-two [product]=\"products | slice:5:13\"></app-product-carousel-two>\r\n\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"ON SALE PRODUCTS\">\r\n\r\n                              <app-product-carousel-two [product]=\"products | slice:13:22\"></app-product-carousel-two>\r\n\r\n                    </mat-tab>\r\n\r\n                  </mat-tab-group>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"banners-wrap\">\r\n              <div class=\"container\">\r\n                  <app-banners [banners]=\"banners\"></app-banners>\r\n              </div>\r\n          </div>\r\n          <div class=\"products-vertical-wrap\">\r\n              <div class=\"container\">\r\n                  <app-product-vertical [products]=\"products\"></app-product-vertical>\r\n              </div>\r\n          </div>\r\n  </div>\r\n");

/***/ }),

/***/ "IGvG":
/*!**************************************************************************!*\
  !*** ./src/app/components/shared/banners-four/banners-four.component.ts ***!
  \**************************************************************************/
/*! exports provided: BannersFourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannersFourComponent", function() { return BannersFourComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_banners_four_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./banners-four.component.html */ "8Zt6");
/* harmony import */ var _banners_four_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banners-four.component.sass */ "UoWu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let BannersFourComponent = class BannersFourComponent {
    constructor() {
        this.banners = [];
        this.contentLoaded = false;
    }
    ngOnInit() {
        setTimeout(() => {
            this.contentLoaded = true;
        }, 3000);
    }
    getBanner(index) {
        return this.banners[index];
    }
    getBgImage(index) {
        let bgImage = {
            'background-image': index != null ? "url(" + this.banners[index].image + ")" : "url(https://via.placeholder.com/600x400/ff0000/fff/)"
        };
        return bgImage;
    }
};
BannersFourComponent.ctorParameters = () => [];
BannersFourComponent.propDecorators = {
    banners: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['banners',] }]
};
BannersFourComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-banners-four',
        template: _raw_loader_banners_four_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_banners_four_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], BannersFourComponent);



/***/ }),

/***/ "IURz":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_main_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./main.component.html */ "AZwa");
/* harmony import */ var _main_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.component.sass */ "Gn07");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/cart.service */ "bjOM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_sidebar_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/sidebar/sidebar-menu.service */ "pA5D");







let MainComponent = class MainComponent {
    constructor(router, cartService, sidenavMenuService) {
        this.router = router;
        this.cartService = cartService;
        this.sidenavMenuService = sidenavMenuService;
        this.currencies = ['SOLES', 'EUR'];
        this.flags = [
            { name: 'English', image: 'assets/images/flags/gb.svg' },
            { name: 'German', image: 'assets/images/flags/de.svg' },
            { name: 'French', image: 'assets/images/flags/fr.svg' },
            { name: 'Russian', image: 'assets/images/flags/ru.svg' },
            { name: 'Turkish', image: 'assets/images/flags/tr.svg' }
        ];
        this.shoppingCartItems = [];
        this.banners = [];
        this.wishlistItems = [];
        this.navItems = [
            {
                displayName: 'Home',
                iconName: 'recent_actors',
                children: [
                    {
                        displayName: 'Home-1',
                        iconName: 'group',
                        route: '/home/one'
                    },
                    {
                        displayName: 'Home-2',
                        iconName: 'speaker_notes',
                        route: '/home/two',
                    },
                    {
                        displayName: 'Home-3',
                        iconName: 'feedback',
                        route: '/home/three'
                    }
                ]
            },
            {
                displayName: 'Products',
                iconName: 'feedback',
                route: '/home/products/all'
            },
            {
                displayName: 'Shop',
                iconName: 'movie_filter',
                children: [
                    {
                        displayName: 'Computers',
                        iconName: 'group',
                        children: [
                            {
                                displayName: 'Laptops',
                                iconName: 'person',
                                route: 'michael-prentice',
                            },
                            {
                                displayName: 'Cables',
                                iconName: 'person',
                                route: 'stephen-fluin',
                            },
                            {
                                displayName: 'Monitors',
                                iconName: 'person',
                                route: 'mike-brocchi',
                            },
                            {
                                displayName: 'Tablets',
                                iconName: 'person',
                                route: 'mike-brocchi',
                            },
                            {
                                displayName: 'Headsets',
                                iconName: 'person',
                                route: 'mike-brocchi',
                            }
                        ]
                    },
                    {
                        displayName: 'Tv & Audio',
                        iconName: 'speaker_notes',
                        children: [
                            {
                                displayName: 'Tv',
                                iconName: 'star_rate',
                                route: 'material-design'
                            },
                            {
                                displayName: 'Audio',
                                iconName: 'star_rate',
                                route: 'what-up-web'
                            },
                            {
                                displayName: 'Video',
                                iconName: 'star_rate',
                                route: 'my-ally-cli'
                            },
                            {
                                displayName: 'Dvd',
                                iconName: 'star_rate',
                                route: 'become-angular-tailer'
                            }
                        ]
                    },
                    {
                        displayName: 'Phones',
                        iconName: 'feedback',
                        children: [
                            {
                                displayName: 'Mobile phones',
                                iconName: 'star_rate',
                                route: 'material-design'
                            },
                            {
                                displayName: 'Power Bank',
                                iconName: 'star_rate',
                                route: 'what-up-web'
                            },
                            {
                                displayName: 'Memory Cards',
                                iconName: 'star_rate',
                                route: 'my-ally-cli'
                            },
                            {
                                displayName: 'Accesories',
                                iconName: 'star_rate',
                                route: 'become-angular-tailer'
                            }
                        ]
                    },
                    {
                        displayName: 'Electronics',
                        iconName: 'feedback',
                        children: [
                            {
                                displayName: 'Washing Machines',
                                iconName: 'star_rate',
                                route: 'material-design'
                            },
                            {
                                displayName: 'Water heater',
                                iconName: 'star_rate',
                                route: 'what-up-web'
                            },
                            {
                                displayName: 'Cookers',
                                iconName: 'star_rate',
                                route: 'my-ally-cli'
                            },
                            {
                                displayName: 'Cold stores',
                                iconName: 'star_rate',
                                route: 'become-angular-tailer'
                            }
                        ]
                    }
                ]
            },
            {
                displayName: 'Blog',
                iconName: 'report_problem',
                children: [
                    {
                        displayName: 'Blog List',
                        iconName: 'group',
                        route: '/blog/blog-list'
                    },
                    {
                        displayName: 'Blog Columns',
                        iconName: 'speaker_notes',
                        route: '/blog/blog-column',
                    },
                    {
                        displayName: 'Blog Details',
                        iconName: 'feedback',
                        route: '/blog/blog-details'
                    }
                ]
            },
            {
                displayName: 'Pages',
                iconName: 'report_problem',
                children: [
                    {
                        displayName: 'About Us',
                        iconName: 'group',
                        route: '/pages/about'
                    },
                    {
                        displayName: 'FAQ',
                        iconName: 'speaker_notes',
                        route: '/pages/faq',
                    },
                    {
                        displayName: 'Contact',
                        iconName: 'feedback',
                        route: '/pages/contact'
                    },
                    {
                        displayName: 'Wishlist',
                        iconName: 'group',
                        route: '/pages/wishlist'
                    },
                    {
                        displayName: 'Compare',
                        iconName: 'speaker_notes',
                        route: '/pages/compare',
                    },
                    {
                        displayName: 'Checkout',
                        iconName: 'feedback',
                        route: '/pages/checkout'
                    },
                    {
                        displayName: 'Cart',
                        iconName: 'group',
                        route: '/pages/cart'
                    },
                    {
                        displayName: 'My Account',
                        iconName: 'speaker_notes',
                        route: '/pages/my-account',
                    },
                    {
                        displayName: '404',
                        iconName: 'feedback',
                        route: '/pages/error'
                    }
                ]
            },
            {
                displayName: 'Contact',
                iconName: 'feedback',
                route: '/pages/contact'
            }
        ];
        this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                this.url = event.url;
            }
        });
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.currency = this.currencies[0];
        this.flag = this.flags[0];
    }
    changeCurrency(currency) {
        this.currency = currency;
    }
    changeLang(flag) {
        this.flag = flag;
    }
};
MainComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: _shared_sidebar_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_6__["SidebarMenuService"] }
];
MainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-main',
        template: _raw_loader_main_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_main_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"], _shared_sidebar_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_6__["SidebarMenuService"]])
], MainComponent);



/***/ }),

/***/ "IZXK":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/shop/food/main-carousel-food/main-carousel-food.component.sass ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLWNhcm91c2VsLWZvb2QuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "If/8":
/*!*********************************************************************************!*\
  !*** ./src/app/components/shop/products/product-two/product-two.component.sass ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LXR3by5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "J0Os":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-details-food/product-details-food.component.sass ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbHMtZm9vZC5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "JDxA":
/*!************************************************************************!*\
  !*** ./src/app/components/shared/breadcrumb/breadcrumb.component.sass ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmVhZGNydW1iLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "JWct":
/*!********************************************************************************!*\
  !*** ./src/app/components/shared/categories-menu/categories-menu.component.ts ***!
  \********************************************************************************/
/*! exports provided: CategoriesMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesMenuComponent", function() { return CategoriesMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_categories_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./categories-menu.component.html */ "1Ptl");
/* harmony import */ var _categories_menu_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories-menu.component.sass */ "7l+H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let CategoriesMenuComponent = class CategoriesMenuComponent {
    constructor() { }
    ngOnInit() {
    }
};
CategoriesMenuComponent.ctorParameters = () => [];
CategoriesMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-categories-menu',
        template: _raw_loader_categories_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_categories_menu_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], CategoriesMenuComponent);



/***/ }),

/***/ "Jspa":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-left-sidebar/product-left-sidebar.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ProductLeftSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductLeftSidebarComponent", function() { return ProductLeftSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_left_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-left-sidebar.component.html */ "Wxyi");
/* harmony import */ var _product_left_sidebar_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-left-sidebar.component.sass */ "7FT3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/shared/services/product.service */ "6MrQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");






let ProductLeftSidebarComponent = class ProductLeftSidebarComponent {
    constructor(productService, route) {
        this.productService = productService;
        this.route = route;
        this.sidenavOpen = true;
        this.sortByOrder = ''; // sorting
        this.tagsFilters = [];
        this.viewType = 'grid';
        this.viewCol = 25;
        this.colorFilters = [];
        this.items = [];
        this.allItems = [];
        this.products = [];
        this.tags = [];
        this.colors = [];
        this.route.params.subscribe((params) => {
            const category = params['category'];
            this.productService.getProductByCategory(category).subscribe(products => {
                this.allItems = products;
                this.products = products.slice(0.8);
                this.getTags(products);
                this.getColors(products);
            });
        });
    }
    // Get current product tags
    getTags(products) {
        var uniqueBrands = [];
        var itemBrand = Array();
        products.map((product, index) => {
            if (product.tags) {
                product.tags.map((tag) => {
                    const index = uniqueBrands.indexOf(tag);
                    if (index === -1)
                        uniqueBrands.push(tag);
                });
            }
        });
        for (var i = 0; i < uniqueBrands.length; i++) {
            itemBrand.push({ brand: uniqueBrands[i] });
        }
        this.tags = itemBrand;
    }
    // Get current product colors
    getColors(products) {
        var uniqueColors = [];
        var itemColor = Array();
        products.map((product, index) => {
            if (product.colors) {
                product.colors.map((color) => {
                    const index = uniqueColors.indexOf(color);
                    if (index === -1)
                        uniqueColors.push(color);
                });
            }
        });
        for (var i = 0; i < uniqueColors.length; i++) {
            itemColor.push({ color: uniqueColors[i] });
        }
        this.colors = itemColor;
    }
    ngOnInit() {
    }
    changeViewType(viewType, viewCol) {
        this.viewType = viewType;
        this.viewCol = viewCol;
    }
    // Animation Effect fadeIn
    fadeIn() {
        this.animation = 'fadeIn';
    }
    // Animation Effect fadeOut
    fadeOut() {
        this.animation = 'fadeOut';
    }
    // Update tags filter
    updateTagFilters(tags) {
        this.tagsFilters = tags;
        this.animation == 'fadeOut' ? this.fadeIn() : this.fadeOut(); // animation
    }
    // sorting type ASC / DESC / A-Z / Z-A etc.
    onChangeSorting(val) {
        this.sortByOrder = val;
        this.animation == 'fadeOut' ? this.fadeIn() : this.fadeOut(); // animation
    }
    // Initialize filetr Items
    filterItems() {
        return this.items.filter((item) => {
            const Colors = this.colorFilters.reduce((prev, curr) => {
                if (item.colors) {
                    if (item.colors.includes(curr.color)) {
                        return prev && true;
                    }
                }
            }, true);
            const Tags = this.tagsFilters.reduce((prev, curr) => {
                if (item.tags) {
                    if (item.tags.includes(curr)) {
                        return prev && true;
                    }
                }
            }, true);
            return Colors && Tags; // return true
        });
    }
    onPageChanged(event) {
        this.page = event;
        this.allItems;
        window.scrollTo(0, 0);
    }
    // Update price filter
    //   public updatePriceFilters(price: any) {
    //     let items: any[] = [];
    //     this.products.filter((item: Product) => {
    //         if (item.price >= price[0] && item.price <= price[1] )  {
    //            items.push(item); // push in array
    //         }
    //     });
    //     this.items = items;
    // }
    // Update price filter
    updatePriceFilters(price) {
        console.log(price);
        console.log(this.products);
        this.allItems = this.products.filter((item) => {
            return item.price >= price.priceFrom && item.price <= price.priceTo;
        });
        console.log(this.products);
    }
    onBrendsChanged(newBrend) {
        console.log(newBrend);
        this.allItems = newBrend === 'all' ? this.products : this.products.filter(item => item.brand === newBrend);
        console.log(this.allItems);
    }
};
ProductLeftSidebarComponent.ctorParameters = () => [
    { type: src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
ProductLeftSidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-left-sidebar',
        template: _raw_loader_product_left_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_left_sidebar_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
], ProductLeftSidebarComponent);



/***/ }),

/***/ "Kz4r":
/*!************************************************************************!*\
  !*** ./src/app/components/shared/header-four/header-four.component.ts ***!
  \************************************************************************/
/*! exports provided: HeaderFourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderFourComponent", function() { return HeaderFourComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_four_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header-four.component.html */ "uKwF");
/* harmony import */ var _header_four_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-four.component.sass */ "5nr3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cart.service */ "bjOM");





let HeaderFourComponent = class HeaderFourComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.currencies = ['USD', 'EUR'];
        this.flags = [
            { name: 'English', image: 'assets/images/flags/gb.svg' },
            { name: 'German', image: 'assets/images/flags/de.svg' },
            { name: 'French', image: 'assets/images/flags/fr.svg' },
            { name: 'Russian', image: 'assets/images/flags/ru.svg' },
            { name: 'Turkish', image: 'assets/images/flags/tr.svg' }
        ];
        this.shoppingCartItems = [];
        this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
    }
    ngOnInit() {
        this.currency = this.currencies[0];
        this.flag = this.flags[0];
    }
    changeCurrency(currency) {
        this.currency = currency;
    }
    changeLang(flag) {
        this.flag = flag;
    }
};
HeaderFourComponent.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }
];
HeaderFourComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header-four',
        template: _raw_loader_header_four_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_four_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]])
], HeaderFourComponent);



/***/ }),

/***/ "LiD8":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/color-options/color-options.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"color-options transition\" [ngClass]=\"{'show': showOptions}\">\r\n    <div class=\"card-title-text\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\r\n        <h4 class=\"fw-500\">Configuration</h4>\r\n        <button class=\"card-control\" mat-icon-button href=\"javascript:void(0)\" (click)=\"showOptions = !showOptions\">\r\n            <mat-icon>close</mat-icon>\r\n        </button>\r\n    </div>\r\n    <div class=\"configuration-content\">\r\n        <div class=\"setting-contant\">\r\n            <h6 _ngcontent-oma-c131=\"\" class=\"title text-muted\">Layout Type</h6>\r\n            <div class=\"dark-light\" (click)=\"customizeLayoutDark()\">\r\n                <div class=\"theme-layout-version\"  >{{buttonName}}</div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"setting-contant\" [class.opensubmenu]=\"isActive('color option')\">\r\n            <h6 _ngcontent-oma-c131=\"\" class=\"title text-muted\">Theme Colors</h6>\r\n            <ul class=\"color-box\">\r\n                <li>\r\n                    <input id=\"colorPicker1\" type=\"color\" value=\"#28b88d\" name=\"Background\"\r\n                        (change)=\"customizeThemeColor($event)\">\r\n                    <span>theme deafult color</span>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"setting-contant\">\r\n            <h6 _ngcontent-oma-c131=\"\" class=\"title text-muted\">Shop Style</h6>\r\n            <div class=\"products-preview-box-wrapper\" fxLayout=\"row\">\r\n                <div class=\"item\" fxFlex=\"50\">\r\n                    <div class=\"products1\"><img src=\"assets/images/preview/products2.jpg\"></div>\r\n                    <div class=\"demo-text\">\r\n                        <h5>Left sidebar</h5>\r\n                        <div class=\"btn-preview\" role=\"group\" aria-label=\"Basic example\">\r\n                            <a [routerLink]=\"['/home/products/all/left-sidebar']\" class=\"btn new-tab-btn\">\r\n                                Preview\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"item\" fxFlex=\"50\">\r\n                    <div class=\"products2\"><img src=\"assets/images/preview/products1.jpg\"></div>\r\n                    <div class=\"demo-text\">\r\n                        <h5>Right sidebar</h5>\r\n                        <div class=\"btn-preview\" role=\"group\" aria-label=\"Basic example\">\r\n                            <a [routerLink]=\"['/home/products/all/right-sidebar']\" class=\"btn new-tab-btn\">\r\n                                Preview\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n            </div>\r\n            <div class=\"products-preview-box-wrapper\" fxLayout=\"row\">\r\n                <div class=\"item\" fxFlex=\"50\">\r\n                    <div class=\"products3\"><img src=\"assets/images/preview/products3.jpg\"></div>\r\n                    <div class=\"demo-text\">\r\n                        <h5>No sidebar</h5>\r\n                        <div class=\"btn-preview\" role=\"group\" aria-label=\"Basic example\">\r\n                            <a [routerLink]=\"['/home/products/all/no-sidebar']\" class=\"btn new-tab-btn\">\r\n                                Preview\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <a href=\"javascript:void(0)\">\r\n        <div (click)=\"showOptions = !showOptions\" class=\"options-icon\">\r\n            <mat-icon>settings</mat-icon>\r\n        </div>\r\n    </a>\r\n\r\n    <!-- <mat-card fxLayout=\"column\" fxLayoutAlign=\"space-between center\"> \r\n        <span class=\"skin-icon yellow\" (click)=\"changeTheme('yellow')\"></span>  \r\n        <span class=\"skin-icon orange\" (click)=\"changeTheme('orange')\"></span>  \r\n        <span class=\"skin-icon green\" (click)=\"changeTheme('green')\"></span> \r\n        <span class=\"skin-icon blue\" (click)=\"changeTheme('blue')\"></span>\r\n        <span class=\"skin-icon red\" (click)=\"changeTheme('red')\"></span> \r\n        <span class=\"skin-icon pink\" (click)=\"changeTheme('pink')\"></span> \r\n        <span class=\"skin-icon purple\" (click)=\"changeTheme('purple')\"></span>\r\n        <span class=\"skin-icon grey\" (click)=\"changeTheme('grey')\"></span>  \r\n        \r\n\r\n    \r\n    </mat-card> -->\r\n</div> ");

/***/ }),

/***/ "LpHt":
/*!******************************************************************************************!*\
  !*** ./src/app/components/shop/widgets/popular-products/popular-products.component.sass ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3B1bGFyLXByb2R1Y3RzLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "M9yH":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer sec-padding\">\r\n  <div class=\"container\">\r\n    <div class=\"footer-wrapper\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between start\">\r\n      <div fxFlex=\"100\" fxFlex.gt-sm=\"20\" fxFlex.sm=\"50\" class=\"footer-widget about-widget\"><a class=\"logo\" href=\"index.html\"><img src=\"assets/images/logo-tien3.png\" style=\"height: 46px;width: 140px;\"></a>\r\n        <div class=\"link\"><a href=\"#/pages/about\">Mas Acerca de Nosotros</a> </div>\r\n      </div>\r\n      \r\n      <div fxFlex=\"100\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"50\" ngClass.xs=\"mt-2\" class=\"footer-widget subscribe-widget\">\r\n        <div class=\"title\">\r\n          <h5>Suscribete</h5>\r\n        </div>\r\n        <form action=\"#\">\r\n          <p>Unete a la comunidad para recibir promociones exclusivas, lanzamientos de productos y mucho mas.</p>\r\n          <div fxLayout=\"column\" class=\"newsletter-widget\">\r\n            <input type=\"text\" placeholder=\"Ingresa tu correo electronico\">\r\n            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"ped-btn-footer\">SUSCRIBETE</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n      <div fxFlex=\"100\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"50\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\" class=\"footer-widget subscribe-widget\">\r\n        <div class=\"title\">\r\n          <h5>Contactanos</h5>\r\n        </div>\r\n        <div fxLayout=\"row\" class=\"tel-box\">\r\n          <div class=\"icon\"><i class=\"fa fa-map-marker\"></i></div>\r\n          <div class=\"text\">\r\n            <p>Jr. San Carlos Nª 350 - San Carlos</p>\r\n          </div>\r\n        </div>\r\n        <div fxLayout=\"row\" class=\"tel-box\">\r\n          <div class=\"icon\"><i class=\"fa fa-phone\"></i></div>\r\n          <div class=\"text\">\r\n            <p>967682083</p>\r\n          </div>\r\n        </div>\r\n        <div fxLayout=\"row\" class=\"tel-box\">\r\n          <div class=\"icon\"><i class=\"fa fa-envelope\"></i></div>\r\n          <div class=\"text\">\r\n            <p><a href=\"#\">tien.contactoperu@gmail.com</a></p>\r\n          </div>\r\n        </div>\r\n\r\n        <ul fxLayout=\"row\" class=\"social list-inline\">\r\n          <li><a href=\"https://instagram.com/tienperu\"><i class=\"fa fa-instagram\"></i></a></li>\r\n          <li><a href=\"https://facebook.com/TienPeru\"><i class=\"fa fa-facebook\"></i></a></li>\r\n          <li><a href=\"https://vm.tiktok.com/ZM8DYLno3\"><i class=\"fab fa-tiktok\"></i></a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>");

/***/ }),

/***/ "MJ2i":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/menu/menu.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar-row fxHide fxShow.gt-sm class=\"container\" fxLayout=\"row\"  fxLayout.xs=\"row\" fxLayoutAlign=\"space-between center\">\r\n  <div class=\"main-menu\" fxLayout=\"row\" fxHide fxShow.gt-sm>\r\n    <a mat-button class=\"mat-button\" [routerLink]=\"['/']\">Inicio</a>\r\n    <a  [matMenuTriggerFor]=\"products\" routerLinkActive=\"router-link-active\"  mat-button class=\"mat-button\">Productos<mat-icon class=\"caret\">arrow_drop_down</mat-icon></a>\r\n    <mat-menu #products=\"matMenu\" [overlapTrigger]=\"false\" class=\"app-dropdown\">\r\n      <a mat-menu-item [routerLink]=\"['/home/products/all/left-sidebar']\" routerLinkActive=\"router-link-active\" >Categorìa 1</a>\r\n      <a mat-menu-item [routerLink]=\"['/home/products/all/right-sidebar']\" routerLinkActive=\"router-link-active\">Categorìa 3</a>\r\n      <a mat-menu-item [routerLink]=\"['/home/products/all/no-sidebar']\" routerLinkActive=\"router-link-active\">Categorìa 2</a>\r\n    </mat-menu>\r\n      <a  mat-button [matMenuTriggerFor]=\"pages\" class=\"mat-button\">Pàginas<mat-icon class=\"caret\">arrow_drop_down</mat-icon></a>\r\n    <mat-menu #pages=\"matMenu\" [overlapTrigger]=\"false\" class=\"app-dropdown\">\r\n      <a [routerLink]=\"['/pages/about']\" mat-menu-item>Nosotros</a>\r\n      <a mat-menu-item [routerLink]=\"['/pages/faq']\" >FAQ</a>\r\n    </mat-menu>\r\n    <a [routerLink]=\"['/pages/contact']\" routerLinkActive=\"router-link-active\"   mat-button class=\"mat-button\">Contacto</a>\r\n  </div>\r\n</mat-toolbar-row>");

/***/ }),

/***/ "MKUL":
/*!***********************************************************************!*\
  !*** ./src/app/components/shop/products/product/product.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product.component.html */ "6ZaP");
/* harmony import */ var _product_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.component.sass */ "9EQA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/shared/services/cart.service */ "bjOM");
/* harmony import */ var src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/shared/services/product.service */ "6MrQ");
/* harmony import */ var src_app_components_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/shared/services/wishlist.service */ "m4vo");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_modals_product_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modals/product.model */ "akXh");
/* harmony import */ var _product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../product-dialog/product-dialog.component */ "5Tg0");











let ProductComponent = class ProductComponent {
    constructor(cartService, productsService, wishlistService, dialog, router) {
        this.cartService = cartService;
        this.productsService = productsService;
        this.wishlistService = wishlistService;
        this.dialog = dialog;
        this.router = router;
        this.onOpenProductDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
    }
    // Add to cart
    addToCart(product, quantity = 1) {
        this.cartService.addToCart(product, quantity);
        console.log(product, quantity);
    }
    // Add to wishlist
    addToWishlist(product) {
        this.wishlistService.addToWishlist(product);
    }
    // Add to compare
    addToCompare(product) {
        this.productsService.addToCompare(product);
    }
    openProductDialog(product) {
        let dialogRef = this.dialog.open(_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ProductDialogComponent"], {
            data: product,
            panelClass: 'product-dialog',
        });
        dialogRef.afterClosed().subscribe(product => {
            if (product) {
                this.router.navigate(['/products', product.id, product.name]);
            }
        });
    }
};
ProductComponent.ctorParameters = () => [
    { type: src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: src_app_components_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_6__["WishlistService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
ProductComponent.propDecorators = {
    onOpenProductDialog: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product',
        template: _raw_loader_product_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"], src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"], src_app_components_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_6__["WishlistService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], ProductComponent);



/***/ }),

/***/ "MsEn":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/food/main-carousel-food/main-carousel-food.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-skeleton-loader *ngIf=\"!contentLoaded\" [theme]=\"{ 'border-radius': '0', height: '761px'  }\" count=\"1\">\r\n</ngx-skeleton-loader>\r\n<div *ngIf=\"contentLoaded\" class=\"main-slider-food\">\r\n  <div class=\"swiper-container h-100\" [swiper]=\"config\">\r\n    <div class=\"swiper-wrapper h-100\">\r\n      <div *ngFor=\"let slide of slides\" class=\"swiper-slide\">\r\n\r\n        <div [attr.data-background]=\"slide.image\" class=\"slide-item swiper-lazy\">\r\n          <div class=\"container sl-wrap\">\r\n            <div class=\"swiper-lazy-preloader swiper-lazy-preloader-white\"></div>\r\n\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center left\" class=\"content\">\r\n              <h1>{{slide.title}}</h1>\r\n              <p>{{slide.subtitle}}</p>\r\n              <button mat-raised-button color=\"primary\">See more</button>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"swiper-pagination white\"></div>\r\n    <button mat-mini-fab color=\"primary\" class=\"swiper-button-prev swipe-arrow\">\r\n      <mat-icon>keyboard_arrow_left</mat-icon>\r\n    </button>\r\n    <button mat-mini-fab color=\"primary\" class=\"swiper-button-next swipe-arrow\">\r\n      <mat-icon>keyboard_arrow_right</mat-icon>\r\n    </button>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "MsKc":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/widgets/brands/brands.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"brands-items\">\r\n    <mat-radio-group\r\n    (change)=\"brendSelect($event)\"\r\n    aria-labelledby=\"example-radio-group-label\"\r\n    class=\"example-radio-group\">\r\n    <mat-radio-button fxLayout=\"row\" class=\"example-radio-button\" *ngFor=\"let brand of brands\" [value]=\"brand\" multiple>\r\n      {{brand}}\r\n    </mat-radio-button>\r\n  </mat-radio-group>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "Msd6":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/banners/banners.component.ts ***!
  \****************************************************************/
/*! exports provided: BannersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannersComponent", function() { return BannersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_banners_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./banners.component.html */ "3S7B");
/* harmony import */ var _banners_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banners.component.sass */ "vEwb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let BannersComponent = class BannersComponent {
    constructor() {
        this.banners = [];
        this.contentLoaded = false;
    }
    ngOnInit() {
        setTimeout(() => {
            this.contentLoaded = true;
        }, 3000);
    }
    getBanner(index) {
        return this.banners[index];
    }
    getBgImage(index) {
        let bgImage = {
            'background-image': index != null ? "url(" + this.banners[index].image + ")" : "url(https://via.placeholder.com/600x400/ff0000/fff/)"
        };
        return bgImage;
    }
};
BannersComponent.ctorParameters = () => [];
BannersComponent.propDecorators = {
    banners: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['banners',] }]
};
BannersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-banners',
        template: _raw_loader_banners_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_banners_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], BannersComponent);



/***/ }),

/***/ "NFbc":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-two/product-two.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"food-product-section\">\r\n    <div class=\"back-img1\">\r\n        <img src=\"assets/images/background/welcome_image1-min.png\" alt=\"\">\r\n    </div>\r\n    <div class=\"back-img2\">\r\n        <img src=\"assets/images/background/welcome_image2-min.png\" alt=\"\">\r\n    </div>\r\n    <div class=\"back-img3\">\r\n        <img src=\"assets/images/background/welcome_image3-min.png\" alt=\"\">\r\n    </div>\r\n    <div class=\"product-wrap sec-padding\">\r\n        <div class=\"container\">\r\n            <div class=\"head-title\">\r\n                <ngx-skeleton-loader\r\n                *ngIf=\"!contentLoaded\"\r\n                  [theme]=\"{ 'border-radius': '0', height: '20px'  }\"\r\n                  count=\"2\"\r\n                ></ngx-skeleton-loader>\r\n                <h3 *ngIf=\"contentLoaded\">Our Products</h3>\r\n                <p  *ngIf=\"contentLoaded\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has<br>been\r\n                    the industry's standard dummy text ever since the 1200s,</p>\r\n            </div>\r\n            <div class=\"prod-menu\">\r\n                <ngx-skeleton-loader\r\n                *ngIf=\"!contentLoaded\"\r\n                  [theme]=\"{ 'border-radius': '0', height: '20px'  }\"\r\n                  count=\"1\"\r\n                ></ngx-skeleton-loader>\r\n                <ul *ngIf=\"contentLoaded\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n                    <li fxLayout=\"column\" (click)=\"filterProducts('all')\">\r\n                        <div class=\"icon\">\r\n                            <svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                                viewBox=\"0 0 100 100\">\r\n                                <title>Untitled-1</title>\r\n                                <path\r\n                                    d=\"M83.71,26.87c.56-5.39.59-12.45-2.51-15.46-1.12-1.09-3.12-2.11-6.27-.77-3.52,1.49-7.3,6.28-11.51,14.6-.81-2.38-1.82-4-3-4.72A3.37,3.37,0,0,0,59.15,20a10,10,0,0,0-.34-.94,7.1,7.1,0,0,0-2.74-3.47,5.19,5.19,0,0,0-2.93-.73c-.15-1.37-.62-3.11-2-3.8S48,11.24,47,12c-1.12-.72-3-1.63-4.78-.95-1.3.51-2.15,1.71-2.54,3.57a8.6,8.6,0,0,0-4.44,3.5,6.21,6.21,0,0,0-.77,3.69,6.41,6.41,0,0,0-4,2.1c-1.24,1.52-1.55,3.62-.93,6.25a11.66,11.66,0,0,0-1.38,5.88,8.79,8.79,0,0,0-4.84-2.33c-.19,0-.46-.09-.54-.12a1.39,1.39,0,1,0-1,2.61,5.6,5.6,0,0,0,1,.24,6,6,0,0,1,3.72,1.9l-.65.25L24.69,39c-4.93,1.9-5.64,7-5.32,9.55l2.94,36.56A7.44,7.44,0,0,0,29.69,92H71a7.44,7.44,0,0,0,7.38-6.81L81.3,48.55v-.21a.13.13,0,0,1,0-.06s0-.05,0-.07,0,0,0-.06,0,0,0-.08a260263751678.81,260263751678.81,0,0,0,0-.12.14.14,0,0,1,0-.07l0-.05,0-.07,0,0,0-.06,0,0,0-.06,0,0a.12.12,0,0,0-.05,0s0,0,0-.05l0,0-.06,0,0,0-.06,0-.06,0-.06,0-.06,0-.06,0-.07,0h-.06l-.08,0h-.29c-.34,0-.66,0-1,0A90.19,90.19,0,0,0,83.71,26.87ZM76,13.2c1.89-.8,2.76-.27,3.24.2C81,15.09,81.62,20,80.94,26.58a87.5,87.5,0,0,1-5.27,21.21c-.47.19-.89.39-1.3.59a9.41,9.41,0,0,1-8.64,0l-.24-.11h0l0,0a11,11,0,0,0-5.24-1.18,11.86,11.86,0,0,0-3,.34c.68-1.93,1.54-4.25,2.51-6.75v0c.67-1.72,1.37-3.44,2.08-5.13.83-2,1.67-3.87,2.5-5.65C69.91,17.81,73.77,14.15,76,13.2ZM45.9,27.52a.5.5,0,0,1-.53-.75.52.52,0,0,1,.31-.21l8.24-1.84H54a.5.5,0,0,1,.26.08.46.46,0,0,1,.22.31.5.5,0,0,1-.36.58h0l-8.19,1.82Zm.38,6.19a4.09,4.09,0,0,0,1.45-3.58V30l5.77-1.29,0,.09a4.1,4.1,0,0,0,2.68,2.78,3.6,3.6,0,0,1,2.27,1.62c0,.09.16.43.56,1.69-.6,1.42-1.18,2.87-1.75,4.31L51.77,42.3A9.89,9.89,0,0,1,47,43.58H45.41c-.57-6.08-.63-7.28-.63-7.51A3.68,3.68,0,0,1,46.28,33.71Zm-.41,14.6q0-.75-.15-1.47l0-.47H47a12.77,12.77,0,0,0,6.18-1.64l2.57-1.46c-.8,2.16-1.47,4.07-2,5.54a8,8,0,0,1-3.4.63,8.52,8.52,0,0,1-4.33-1ZM32.35,30c-.55-2-.46-3.42.25-4.31,1.08-1.33,3.39-1.2,3.41-1.2A1.37,1.37,0,0,0,37.2,24a1.43,1.43,0,0,0,.24-1.28,3.89,3.89,0,0,1,.18-3.17,6.3,6.3,0,0,1,3.58-2.47,1.4,1.4,0,0,0,1-1.19c.15-1.21.5-2,.94-2.2.68-.27,2.14.51,2.93,1.17a1.4,1.4,0,0,0,1.83,0c1.3-1.17,1.87-1.2,1.94-1.19.35.26.58,1.77.52,2.85a1.38,1.38,0,0,0,.53,1.18,1.4,1.4,0,0,0,1.28.23,2.75,2.75,0,0,1,2.39.13c1.33.8,2,2.92,2.09,3.67a1.39,1.39,0,0,0,1.72,1.12.59.59,0,0,1,.5.08c.37.23,1.61,1.35,2.65,6.18q-.49,1.08-1,2.19a6.67,6.67,0,0,0-3.52-2.35A1.32,1.32,0,0,1,56.2,28l-.08-.28a3.31,3.31,0,0,0,1.11-3.24A3.27,3.27,0,0,0,53.32,22l-8.24,1.83a3.27,3.27,0,0,0-.14,6.36l0,.23a1.33,1.33,0,0,1-.48,1.14,6,6,0,0,0-2.5,4.5c0,.14,0,.43.15,2.2-.53-.76-1.12-1.54-1.78-2.35-2-2.49-4.2-2.61-5.67-2.27a9.2,9.2,0,0,0-3.64,2l-.13.1a8.82,8.82,0,0,1,1.25-4.58A1.36,1.36,0,0,0,32.35,30ZM25.69,41.64l1.13-.43c1.05-.41,1.75-.67,2.33-.94a8.77,8.77,0,0,0,1.55-.87h0c.49-.34,1-.76,1.86-1.41l.2-.16c2.13-1.7,3.7-2.27,5.42-.14a21.3,21.3,0,0,1,4.36,7.68,14.48,14.48,0,0,1,.39,1.8h0v.11a12.39,12.39,0,0,0-2.48-.22,11.1,11.1,0,0,0-5.54,1.33,8.51,8.51,0,0,1-4.32,1,8.52,8.52,0,0,1-4.33-1,10.88,10.88,0,0,0-4.17-1.27A5.8,5.8,0,0,1,25.69,41.64ZM75.58,84.91A4.63,4.63,0,0,1,71,89.16H29.69a4.65,4.65,0,0,1-4.61-4.25l-2.81-35a8.75,8.75,0,0,1,2.81,1,11.08,11.08,0,0,0,5.54,1.34,11.07,11.07,0,0,0,5.53-1.34,8.52,8.52,0,0,1,4.33-1.05,8.08,8.08,0,0,1,3.48.66H44l.78.36a11.08,11.08,0,0,0,5.54,1.34,10.89,10.89,0,0,0,5.12-1.14l.41-.19a8.4,8.4,0,0,1,4.32-1.06,8.21,8.21,0,0,1,4,.89l.06,0,.29.14a12.14,12.14,0,0,0,11.07,0,12.14,12.14,0,0,1,1.57-.67h0a6.48,6.48,0,0,1,1.21-.28Z\" />\r\n                                <path\r\n                                    d=\"M70.24,27.24l.21,0a1.39,1.39,0,0,0,1.37-1.19,1.88,1.88,0,0,1,1.93-1.73c3.1.09,3.58-.07,5.66-2l.17-.16a1.39,1.39,0,1,0-1.87-2.06l-.18.16a6,6,0,0,1-1.47,1.16,7.69,7.69,0,0,1-2.22.08,4.67,4.67,0,0,0-4.77,4.1A1.39,1.39,0,0,0,70.24,27.24Z\" />\r\n                                <path\r\n                                    d=\"M66.23,37a1.42,1.42,0,0,0,.63.15,1.39,1.39,0,0,0,1.24-.75s1.23-2.31,3.17-2.17a6.25,6.25,0,0,0,5.84-2.15c.22-.21.45-.44.72-.68A1.39,1.39,0,0,0,76,29.35c-.29.26-.55.51-.78.73-1.26,1.21-1.6,1.53-3.71,1.38-3.78-.27-5.76,3.52-5.85,3.68A1.4,1.4,0,0,0,66.23,37Z\" />\r\n                                <path\r\n                                    d=\"M72.61,38.85l-.78.73c-1.27,1.21-1.61,1.54-3.71,1.38-3.79-.26-5.77,3.52-5.85,3.69a1.38,1.38,0,0,0,.61,1.86,1.31,1.31,0,0,0,.63.16,1.42,1.42,0,0,0,1.24-.75s1.24-2.31,3.17-2.18c3.18.23,4.24-.62,5.83-2.15l.73-.68a1.39,1.39,0,0,0-1.87-2.06Z\" />\r\n                                <path d=\"M31.15,77.71h7.94a1.4,1.4,0,0,0,0-2.79H31.15a1.4,1.4,0,0,0,0,2.79Z\" />\r\n                                <path d=\"M44.65,80.65H31.15a1.4,1.4,0,0,0,0,2.79h13.5a1.4,1.4,0,0,0,0-2.79Z\" />\r\n                            </svg>\r\n                        </div>\r\n                        <div class=\"text\">\r\n                            <p>Show all</p>\r\n                        </div>\r\n                    </li>\r\n\r\n                    <li fxLayout=\"column\" (click)=\"filterProducts('Butter & Eggs')\">\r\n                        <div class=\"icon\"><svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                                viewBox=\"0 0 100 100\">\r\n                                <defs>\r\n                                    <style>\r\n                                        .cls-1 {\r\n                                            fill: none;\r\n                                            stroke: #231f20;\r\n                                            stroke-linecap: round;\r\n                                            stroke-linejoin: round;\r\n                                            stroke-width: 4px;\r\n                                        }\r\n                                    </style>\r\n                                </defs>\r\n                                <title>fruit</title>\r\n                                <path class=\"cls-1\"\r\n                                    d=\"M86.35,63.47A39,39,0,1,0,12,57.73,26.14,26.14,0,0,0,49.53,88.26,39,39,0,0,0,86.35,63.47Z\" />\r\n                                <path class=\"cls-1\"\r\n                                    d=\"M31.66,42.66a19.07,19.07,0,1,1,10.82,24.7A19.07,19.07,0,0,1,31.66,42.66Z\" />\r\n                                <path class=\"cls-1\" d=\"M38.57,48.07a10,10,0,0,1,6.29-8.57\" />\r\n                            </svg></div>\r\n                        <div class=\"text\">\r\n                            <p>Butter & Eggs</p>\r\n                        </div>\r\n                    </li>\r\n                    <li fxLayout=\"column\" (click)=\"filterProducts('Fruits')\">\r\n                        <div class=\"icon\">\r\n                            <svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                                viewBox=\"0 0 100 100\">\r\n                                <defs>\r\n                                    <style>\r\n                                        .cls-1 {\r\n                                            fill: none;\r\n                                            stroke: #231f20;\r\n                                            stroke-linecap: round;\r\n                                            stroke-linejoin: round;\r\n                                            stroke-width: 4px;\r\n                                        }\r\n                                    </style>\r\n                                </defs>\r\n                                <title>Untitled-1</title>\r\n                                <path class=\"cls-1\"\r\n                                    d=\"M80.65,46.58C80.65,66.52,59,87.51,52.24,88S23.82,66.52,23.82,46.58,36.55,23,52.24,23,80.65,26.63,80.65,46.58Z\" />\r\n                                <line class=\"cls-1\" x1=\"45.3\" y1=\"17.45\" x2=\"48.34\" y2=\"22.08\" />\r\n                                <line class=\"cls-1\" x1=\"35.59\" y1=\"19.14\" x2=\"45.75\" y2=\"22.87\" />\r\n                                <line class=\"cls-1\" x1=\"59.18\" y1=\"17.45\" x2=\"56.13\" y2=\"22.08\" />\r\n                                <line class=\"cls-1\" x1=\"68.89\" y1=\"19.14\" x2=\"58.73\" y2=\"22.87\" />\r\n                                <line class=\"cls-1\" x1=\"52.24\" y1=\"21.51\" x2=\"52.24\" y2=\"10\" />\r\n                                <line class=\"cls-1\" x1=\"34.46\" y1=\"44.21\" x2=\"34.46\" y2=\"44.89\" />\r\n                                <line class=\"cls-1\" x1=\"46.31\" y1=\"44.21\" x2=\"46.31\" y2=\"44.89\" />\r\n                                <line class=\"cls-1\" x1=\"58.16\" y1=\"44.21\" x2=\"58.16\" y2=\"44.89\" />\r\n                                <line class=\"cls-1\" x1=\"70.01\" y1=\"44.21\" x2=\"70.01\" y2=\"44.89\" />\r\n                                <line class=\"cls-1\" x1=\"40.39\" y1=\"54.9\" x2=\"40.39\" y2=\"55.57\" />\r\n                                <line class=\"cls-1\" x1=\"52.24\" y1=\"54.9\" x2=\"52.24\" y2=\"55.57\" />\r\n                                <line class=\"cls-1\" x1=\"64.09\" y1=\"54.9\" x2=\"64.09\" y2=\"55.57\" />\r\n                                <line class=\"cls-1\" x1=\"46.31\" y1=\"65.57\" x2=\"46.31\" y2=\"66.25\" />\r\n                                <line class=\"cls-1\" x1=\"58.16\" y1=\"65.57\" x2=\"58.16\" y2=\"66.25\" />\r\n                                <line class=\"cls-1\" x1=\"52.24\" y1=\"76.25\" x2=\"52.24\" y2=\"76.93\" />\r\n                                <line class=\"cls-1\" x1=\"40.39\" y1=\"33.54\" x2=\"40.39\" y2=\"34.21\" />\r\n                                <line class=\"cls-1\" x1=\"52.24\" y1=\"33.54\" x2=\"52.24\" y2=\"34.21\" />\r\n                                <line class=\"cls-1\" x1=\"64.09\" y1=\"33.54\" x2=\"64.09\" y2=\"34.21\" />\r\n                            </svg>\r\n                        </div>\r\n                        <div class=\"text\">\r\n                            <p>Fruits</p>\r\n                        </div>\r\n                    </li>\r\n                    <li fxLayout=\"column\" (click)=\"filterProducts('Cheese')\">\r\n                        <div class=\"icon\">\r\n                            <svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                                viewBox=\"0 0 100 100\">\r\n                                <defs>\r\n                                    <style>\r\n                                        .cls-1,\r\n                                        .cls-2 {\r\n                                            fill: none;\r\n                                            stroke: #231f20;\r\n                                            stroke-linejoin: round;\r\n                                            stroke-width: 4px;\r\n                                        }\r\n\r\n                                        .cls-2 {\r\n                                            stroke-linecap: round;\r\n                                        }\r\n                                    </style>\r\n                                </defs>\r\n                                <title>www</title>\r\n                                <path class=\"cls-1\" d=\"M13.6,35.82,55.27,20S80.82,20.61,86,35.82\" />\r\n                                <path class=\"cls-1\"\r\n                                    d=\"M55.57,35.82a4.85,4.85,0,0,1-9.59,0H13.6v14.1h.2a6.9,6.9,0,1,1,0,13.79h-.2V79.92H62.7a7.3,7.3,0,0,1,14.54,0H86V35.82Z\" />\r\n                                <circle class=\"cls-1\" cx=\"41.99\" cy=\"60.25\" r=\"4.87\" />\r\n                                <path class=\"cls-1\"\r\n                                    d=\"M71.59,49.71A3.25,3.25,0,1,1,74.84,53,3.26,3.26,0,0,1,71.59,49.71Z\" />\r\n                                <path class=\"cls-2\" d=\"M65.92,27.76a6.07,6.07,0,0,1-2.89.6c-1.94,0-3.5-.61-3.5-1.37\" />\r\n                            </svg>\r\n                        </div>\r\n                        <div class=\"text\">\r\n                            <p>Cheese</p>\r\n                        </div>\r\n                    </li>\r\n                    <li fxLayout=\"column\" (click)=\"filterProducts('Vegetables')\">\r\n                        <div class=\"icon\">\r\n                            <svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                                viewBox=\"0 0 100 100\">\r\n                                <defs>\r\n                                    <style>\r\n                                        .cls-1 {\r\n                                            fill: none;\r\n                                            stroke: #231f20;\r\n                                            stroke-linecap: round;\r\n                                            stroke-linejoin: round;\r\n                                            stroke-width: 4px;\r\n                                        }\r\n                                    </style>\r\n                                </defs>\r\n                                <title>qqqq</title>\r\n                                <path class=\"cls-1\"\r\n                                    d=\"M64.18,49.55c-8.46,17-27.59,42.25-33.7,39.22s3.11-33.2,11.57-50.22S55,24.08,61.12,27.12,72.65,32.53,64.18,49.55Z\" />\r\n                                <path class=\"cls-1\" d=\"M55.2,9.24s5.24,7.19,2.16,15.08\" />\r\n                                <path class=\"cls-1\" d=\"M78.58,20.86s-8.9.16-13.33,7.39\" />\r\n                                <line class=\"cls-1\" x1=\"64.95\" y1=\"18.52\" x2=\"67.46\" y2=\"13.48\" />\r\n                                <line class=\"cls-1\" x1=\"44.28\" y1=\"35.73\" x2=\"49.94\" y2=\"38.54\" />\r\n                                <line class=\"cls-1\" x1=\"55.36\" y1=\"52.95\" x2=\"60.2\" y2=\"55.36\" />\r\n                                <line class=\"cls-1\" x1=\"34.67\" y1=\"59.21\" x2=\"38.41\" y2=\"61.07\" />\r\n                                <line class=\"cls-1\" x1=\"42.17\" y1=\"76.03\" x2=\"44.93\" y2=\"77.4\" />\r\n                            </svg>\r\n                        </div>\r\n                        <div class=\"text\">\r\n                            <p>Vegetables</p>\r\n                        </div>\r\n                    </li>\r\n                    <li fxLayout=\"column\" (click)=\"filterProducts('Milk')\">\r\n                        <div class=\"icon\">\r\n                            <svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                                viewBox=\"0 0 100 100\">\r\n                                <defs>\r\n                                    <style>\r\n                                        .cls-1 {\r\n                                            fill: none;\r\n                                            stroke: #231f20;\r\n                                            stroke-linecap: round;\r\n                                            stroke-linejoin: round;\r\n                                            stroke-width: 4px;\r\n                                        }\r\n                                    </style>\r\n                                </defs>\r\n                                <title>mmm</title>\r\n                                <rect class=\"cls-1\" x=\"21.69\" y=\"45.5\" width=\"57.71\" height=\"43.58\" />\r\n                                <line class=\"cls-1\" x1=\"59.14\" y1=\"46.48\" x2=\"59.14\" y2=\"88.69\" />\r\n                                <line class=\"cls-1\" x1=\"59.08\" y1=\"45.53\" x2=\"69.26\" y2=\"25.98\" />\r\n                                <polyline class=\"cls-1\" points=\"79.43 45.53 69.25 25.98 31.88 25.98 21.69 45.53\" />\r\n                                <polyline class=\"cls-1\" points=\"31.62 25.64 31.62 14 69.42 14 69.42 25.64\" />\r\n                            </svg>\r\n                        </div>\r\n                        <div class=\"text\">\r\n                            <p>Milk</p>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"product-wrapper\">\r\n\r\n                <div class=\"product-box\" *ngFor=\"let product of products | slice:0:8\">\r\n                    <div class=\"product-item\">\r\n\r\n                        <mat-card fxLayout=\"column\">\r\n                            <ngx-skeleton-loader\r\n                            *ngIf=\"!contentLoaded\"\r\n                                count=\"1\"\r\n                                [theme]=\"{ width: '180px', 'border-radius': '0', height: '180px' }\"\r\n                            ></ngx-skeleton-loader>\r\n                            <div *ngIf=\"contentLoaded\" class=\"product-img\" [routerLink]=\"['/home/product/food', product.id]\">\r\n                                <a class=\"product-link\">\r\n                                    <img [src]=\"product.pictures[0].big\" alt=\"\">\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"product-info-wrapper\">\r\n                                <ngx-skeleton-loader\r\n                                *ngIf=\"!contentLoaded\"\r\n                                    count=\"2\"\r\n                                    [theme]=\"{ 'border-radius': '0', height: '20px' }\"\r\n                                ></ngx-skeleton-loader>\r\n                                <span *ngIf=\"contentLoaded\" class=\"category\"></span>\r\n                                <div *ngIf=\"contentLoaded\" class=\"title-wrap\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                    <h4 [routerLink]=\"['/home/fruit, fruit.id']\">{{product.name}}</h4>\r\n                                    <p>{{product.price}}$/kg</p>\r\n                                </div>\r\n\r\n                                <div *ngIf=\"contentLoaded\" class=\"stars\" fxLayout=\"row\">\r\n                                    <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate\r\n                                    </mat-icon>\r\n                                    <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate\r\n                                    </mat-icon>\r\n                                    <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate\r\n                                    </mat-icon>\r\n                                    <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate\r\n                                    </mat-icon>\r\n                                    <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate\r\n                                    </mat-icon>\r\n                                </div>\r\n                                <div *ngIf=\"contentLoaded\" class=\"btn-wrap\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                    <p (click)=\"showMore(product)\" class=\"view-more\"> View\r\n                                        {{ product.state === 'small' ? 'more' : 'less'}}</p>\r\n                                    <div class=\"bucket\">\r\n                                        <a (click)=\"addToCart(product)\">\r\n                                            <mat-icon color=\"primary\" class=\"mat-icon-lg mat-icon material-icons\">\r\n                                                shopping_cart</mat-icon>\r\n                                        </a>\r\n                                    </div> \r\n                                </div>\r\n                                <div class=\"details-products\">\r\n                                    <div class=\"more-info\" [@myAnimation]=\"product.state\">\r\n                                        <p>{{product.shortDetails}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"icons\" fxLayout=\"column\">\r\n                                    <a (click)=\"addToWishlist(product)\" class=\"ic-1\">\r\n                                        <mat-icon class=\"mat-icon-lg mat-icon material-icons mr-10\">favorite_border\r\n                                        </mat-icon>\r\n                                    </a>\r\n                                    <a (click)=\"openProductDialog(product)\" class=\"ic-2\">\r\n                                        <mat-icon>remove_red_eye</mat-icon>\r\n                                    </a>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </mat-card>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "NYAJ":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-carousel-three/product-carousel-three.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ProductCarouselThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCarouselThreeComponent", function() { return ProductCarouselThreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_carousel_three_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-carousel-three.component.html */ "elE4");
/* harmony import */ var _product_carousel_three_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-carousel-three.component.sass */ "gBNm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/shared/services/cart.service */ "bjOM");
/* harmony import */ var src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/shared/services/product.service */ "6MrQ");
/* harmony import */ var src_app_components_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/shared/services/wishlist.service */ "m4vo");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _products_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../products/product-dialog/product-dialog.component */ "5Tg0");










let ProductCarouselThreeComponent = class ProductCarouselThreeComponent {
    constructor(cartService, productsService, wishlistService, dialog, router) {
        this.cartService = cartService;
        this.productsService = productsService;
        this.wishlistService = wishlistService;
        this.dialog = dialog;
        this.router = router;
        this.contentLoaded = false;
        this.onOpenProductDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.product = [];
        this.config = {};
    }
    // @ViewChild(SwiperDirective) directiveRef: SwiperDirective;
    ngOnInit() {
        setTimeout(() => {
            this.contentLoaded = true;
        }, 3000);
    }
    ngAfterViewInit() {
        this.config = {
            observer: true,
            slidesPerView: 4,
            spaceBetween: 16,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            breakpoints: {
                480: {
                    slidesPerView: 1
                },
                740: {
                    slidesPerView: 2,
                },
                960: {
                    slidesPerView: 3,
                },
                1280: {
                    slidesPerView: 4,
                },
            }
        };
    }
    // Add to cart
    addToCart(product, quantity = 1) {
        this.cartService.addToCart(product, quantity);
        console.log(product, quantity);
    }
    // Add to wishlist
    addToWishlist(product) {
        this.wishlistService.addToWishlist(product);
    }
    // Add to compare
    addToCompare(product) {
        this.productsService.addToCompare(product);
    }
    openProductDialog(product) {
        let dialogRef = this.dialog.open(_products_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ProductDialogComponent"], {
            data: product,
            panelClass: 'product-dialog',
        });
        dialogRef.afterClosed().subscribe(product => {
            if (product) {
                this.router.navigate(['/products', product.id, product.name]);
            }
        });
    }
};
ProductCarouselThreeComponent.ctorParameters = () => [
    { type: src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: src_app_components_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_6__["WishlistService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
ProductCarouselThreeComponent.propDecorators = {
    onOpenProductDialog: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['product',] }]
};
ProductCarouselThreeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-carousel-three',
        template: _raw_loader_product_carousel_three_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_carousel_three_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"], src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"], src_app_components_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_6__["WishlistService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], ProductCarouselThreeComponent);



/***/ }),

/***/ "Ni+x":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-no-sidebar/product-no-sidebar.component.sass ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LW5vLXNpZGViYXIuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "OGiV":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/widgets/categories/categories.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"category-contant\">\r\n    <ul>\r\n        <li><a class=\"no-brd\" [routerLink]=\"['/home/products/all/left-sidebar']\">Show All</a></li>\r\n        <li><a [routerLink]=\"['/home/products/Headphones/left-sidebar']\">Headphones</a></li>\r\n        <li><a [routerLink]=\"['/home/products/Laptops/left-sidebar']\">Laptops</a></li>\r\n        <li><a [routerLink]=\"['/home/products/Smartphones/left-sidebar']\">Smart Phones</a></li>\r\n        <li><a [routerLink]=\"['/home/products/Cameras/left-sidebar']\">Cameras</a></li>\r\n        <li><a [routerLink]=\"['/home/products/Tv & Audio/left-sidebar']\">Tv & Audio</a></li>\r\n        <li><a [routerLink]=\"['/home/products/Watches/left-sidebar']\">Watches</a></li>\r\n    </ul>\r\n</div>");

/***/ }),

/***/ "OiT4":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-carousel/product-carousel.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"product-item-1 swiper-container\" [swiper]=\"config\" >\r\n    <div class=\"swiper-wrapper h-100\">\r\n        <div *ngFor=\"let product of product\" class=\"swiper-slide\">\r\n            <mat-card fxLayout=\"column\">\r\n                <div fxLayout=\"column\">\r\n                    <ngx-skeleton-loader\r\n                    *ngIf=\"!contentLoaded\"\r\n                    count=\"1\"\r\n                    [theme]=\"{ width: '180px', 'border-radius': '0', height: '180px' }\"\r\n                    ></ngx-skeleton-loader>\r\n                    <ngx-skeleton-loader\r\n                        *ngIf=\"!contentLoaded\"\r\n                            count=\"2\"\r\n                            [theme]=\"{ 'border-radius': '0', height: '20px', width: '180px'  }\"\r\n                        ></ngx-skeleton-loader>\r\n                </div>\r\n                \r\n                <div class=\"product-img\" *ngIf=\"contentLoaded\">\r\n                    <a class=\"product-link\" [routerLink]=\"['/home/product', product.id]\">\r\n                      <img [src]=\"product.pictures[0].big\" alt=\"\">\r\n                   </a>\r\n                </div>\r\n                <div class=\"product-info-wrapper\">\r\n                    \r\n                    <span class=\"category\" *ngIf=\"contentLoaded\">{{product.category}}</span>\r\n                    <div class=\"title-wrap\" *ngIf=\"contentLoaded\">\r\n                        <h4>{{product.name}}</h4>\r\n                    </div>\r\n \r\n                    <div *ngIf=\"contentLoaded\" class=\"price-wrap\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                        <div class=\"stars\">\r\n                            <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                            <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                            <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                            <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                            <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                        </div>\r\n                        <p>S/.{{product.price | number : '1.2-2'}}</p>\r\n                    </div>\r\n                    <div *ngIf=\"contentLoaded\" class=\"btn-wrap\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                        <a (click)=\"addToCart(product)\" mat-raised-button color=\"primary\">Agregar <mat-icon class=\"mat-icon-lg mat-icon material-icons\">shopping_cart</mat-icon></a>\r\n                    </div>\r\n \r\n                    <div class=\"icons\" fxLayout=\"column\">\r\n                        <a (click)=\"addToWishlist(product)\"><mat-icon class=\"mat-icon-lg mat-icon material-icons mr-10\">favorite_border</mat-icon></a>\r\n                        <a (click)=\"openProductDialog(product)\"><mat-icon>remove_red_eye</mat-icon></a>\r\n                        <a (click)=\"addToCompare(product)\"><mat-icon>cached</mat-icon></a>\r\n                    </div>\r\n                </div>\r\n            </mat-card>\r\n        </div>\r\n \r\n    </div>\r\n    <button mat-mini-fab class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n    <button mat-mini-fab class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button>\r\n</div>");

/***/ }),

/***/ "Oy/N":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/food/food.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Home slider start-->\r\n<app-main-carousel-food [slides]=\"slides\"></app-main-carousel-food>\r\n<!-- Home slider end-->\r\n<!-- Product section start-->\r\n<app-product-two [products]=\"products\"></app-product-two>\r\n<!-- Product section end-->\r\n<!-- Our galery start-->\r\n<ngx-skeleton-loader\r\n                                *ngIf=\"!contentLoaded\"\r\n                                    count=\"1\"\r\n                                    [theme]=\"{ 'border-radius': '0', height: '800px' }\"\r\n                                ></ngx-skeleton-loader>\r\n<div *ngIf=\"contentLoaded\" class=\"popular-recipes-box\" style=\"background: url(assets/images/background/background.jpg);\">\r\n    <div class=\"container\"></div>\r\n       <div class=\"recipes-contain\">\r\n          <div class=\"head-title\">\r\n              <h3>Our Industry</h3>\r\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has<br>been the industry's standard dummy text ever since the 1500s,</p>\r\n              <button mat-raised-button color=\"primary\" [routerLink]=\"['/pages/about']\" routerLinkActive=\"router-link-active\" >See more</button>\r\n            </div>\r\n            <section class=\"gallery\">\r\n              <div class=\"container-fluid\">\r\n                          <section class=\"gallery-section\">\r\n                              <figure class=\"gallery__item gallery__item--1\" *ngFor=\"let bg of blog\">\r\n                                  <!-- <a (click)=\"openProductDialog(product, bigProductImageIndex)\"  class=\"tt-gallery-1\"> -->\r\n                                    <a   class=\"tt-gallery-1\">\r\n                                      <img [src]=\"bg.image \" alt=\"Gallery image 1\" class=\"gallery__img\">\r\n                                    </a>\r\n                               </figure>\r\n                          </section>\r\n              </div>\r\n          </section>\r\n       </div>\r\n    \r\n  </div>\r\n<!-- Our galery ends-->\r\n<!-- About products start-->\r\n<div class=\"about-products\">\r\n    <div class=\"container\">\r\n       <div class=\"about-products-wrap\" fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"space-around center\">\r\n      <div class=\"left\" fxFlex=\"100\" fxFlex.gt-md=\"50\" fxFlex.md=\"50\">\r\n        <ngx-skeleton-loader\r\n                                *ngIf=\"!contentLoaded\"\r\n                                    count=\"3\"\r\n                                    [theme]=\"{ 'border-radius': '0', height: '20px' }\"\r\n                                ></ngx-skeleton-loader>\r\n        <div  *ngIf=\"contentLoaded\" class=\"text\">\r\n          <h3>Our Products</h3>\r\n          <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 1700s,</span>\r\n          <p>Pellentesque ac finibus orci. Mauris eu nibh sed libero mollis pellentesque et in est. Donec vel vehicula dui. Cras tincidunt, orci a suscipit sagittis, sapien tortor aliquam ipsum, nec sodales ante enim ut dui. </p>\r\n          <button class=\"btn-project\" mat-raised-button color=\"primary\" type=\"submit\" [routerLink]=\"['/home/products/all']\" routerLinkActive=\"router-link-active\" >See more</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"right\" fxFlex=\"100\" fxFlex.gt-md=\"50\" fxFlex.md=\"50\" >\r\n        <ngx-skeleton-loader\r\n          *ngIf=\"!contentLoaded\"\r\n            count=\"1\"\r\n            [theme]=\"{ 'border-radius': '0', height: '400px' }\"\r\n             ></ngx-skeleton-loader>\r\n        <div class=\"img-wrap\" *ngIf=\"contentLoaded\">\r\n          <img src=\"assets/images/background/fruit2.png\" alt=\"\">\r\n        </div>\r\n      </div>\r\n       </div>\r\n    </div>\r\n  </div>\r\n<!-- About products end-->\r\n<!-- Vertical products start-->\r\n<app-product-vertical-food [products]=\"products\"></app-product-vertical-food>\r\n<!-- Vertical products end-->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n\r\n");

/***/ }),

/***/ "PDd9":
/*!************************************************************!*\
  !*** ./src/app/components/shared/menu/menu.component.sass ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "PHvw":
/*!***********************************************************************!*\
  !*** ./src/app/components/color-options/color-options.component.sass ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xvci1vcHRpb25zLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "PN7s":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-vertical/product-vertical.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n<div class=\"vertical-products sec-padding\">\r\n  <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"start start\" class=\"p-0\">\r\n      <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"product-panel\">\r\n        <div class=\"widget-column\">\r\n            <div class=\"title\">\r\n                <h4 class=\"widget-title\">Featured Products</h4>\r\n              </div>\r\n              <ul class=\"product-list\">\r\n                <li *ngFor=\"let product of products | slice:0:3 \" fxLayout=\"row\">\r\n                  <div class=\"media-image\">\r\n                    <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n\r\n                    <a *ngIf=\"contentLoaded\" [routerLink]=\"['/home/product', product.id]\"><img [src]=\"product.pictures[0].big\" class=\"small\" alt=\"\"> </a>\r\n                  </div>\r\n                  <div class=\"media-body\">\r\n                    <ngx-skeleton-loader\r\n              *ngIf=\"!contentLoaded\"\r\n                count=\"3\"\r\n                [theme]=\"{ width: '170px', 'border-radius': '0', height: '15px' }\"\r\n              ></ngx-skeleton-loader>\r\n                    <a *ngIf=\"contentLoaded\" [routerLink]=\"['/home/product', product.id]\"><span>{{product.name}}</span></a>\r\n                    <div *ngIf=\"contentLoaded\" class=\"stars\">\r\n                        <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                        <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                        <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                        <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                        <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                     </div>\r\n                     <p *ngIf=\"contentLoaded\" class=\"price\">{{product.price | number : '1.2-2' }}</p>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"product-panel\">\r\n          <div class=\"widget-column\">\r\n              <div class=\"title\">\r\n                  <h4 class=\"widget-title\">Top Selling Products</h4>\r\n                </div>\r\n                <ul class=\"product-list\">\r\n                  <li *ngFor=\"let product of products | slice:6:9 \" fxLayout=\"row\">\r\n                    <div class=\"media-image\">\r\n                      <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n                      <a *ngIf=\"contentLoaded\" [routerLink]=\"['/home/product', product.id]\"><img [src]=\"product.pictures[0].big\" class=\"small\" alt=\"\"> </a>\r\n                    </div>\r\n                    <div class=\"media-body\">\r\n                      <ngx-skeleton-loader\r\n              *ngIf=\"!contentLoaded\"\r\n                count=\"3\"\r\n                [theme]=\"{ width: '170px', 'border-radius': '0', height: '15px' }\"\r\n              ></ngx-skeleton-loader>\r\n                      <a *ngIf=\"contentLoaded\" [routerLink]=\"['/home/product', product.id]\"><span>{{product.name}}</span></a>\r\n                      <div *ngIf=\"contentLoaded\" class=\"stars\">\r\n                          <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                          <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                          <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                          <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                          <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                       </div>\r\n                       <p *ngIf=\"contentLoaded\" class=\"price\">{{product.price | number : '1.2-2'}}</p>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n          </div>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"product-panel\">\r\n            <div class=\"widget-column\">\r\n                <div class=\"title\">\r\n                    <h4 class=\"widget-title\">Hot Offer</h4>\r\n                  </div>\r\n                  <ul class=\"product-list\">\r\n                    <li *ngFor=\"let product of products | slice:9:12 \" fxLayout=\"row\">\r\n                      <div class=\"media-image\">\r\n                        <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n                        <a *ngIf=\"contentLoaded\"><img [routerLink]=\"['/home/product', product.id]\" [src]=\"product.pictures[0].big\" class=\"small\" alt=\"\"> </a>\r\n                      </div>\r\n                      <div class=\"media-body\">\r\n                        <ngx-skeleton-loader\r\n                        *ngIf=\"!contentLoaded\"\r\n                          count=\"3\"\r\n                          [theme]=\"{ width: '170px', 'border-radius': '0', height: '15px' }\"\r\n                        ></ngx-skeleton-loader>\r\n                       <a *ngIf=\"contentLoaded\" [routerLink]=\"['/home/product', product.id]\"><span>{{product.name}}</span></a>\r\n                        <div *ngIf=\"contentLoaded\" class=\"stars\">\r\n                            <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                            <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                            <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                            <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                            <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                         </div>\r\n                         <p *ngIf=\"contentLoaded\" class=\"price\">{{product.price | number : '1.2-2'}}</p>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n            </div>\r\n          </div>\r\n  </div>\r\n</div>\r\n</div>");

/***/ }),

/***/ "PgFM":
/*!************************************************************************!*\
  !*** ./src/app/components/shared/header-five/header-five.component.ts ***!
  \************************************************************************/
/*! exports provided: HeaderFiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderFiveComponent", function() { return HeaderFiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_five_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header-five.component.html */ "9gv1");
/* harmony import */ var _header_five_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-five.component.sass */ "As72");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cart.service */ "bjOM");





let HeaderFiveComponent = class HeaderFiveComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.currencies = ['USD', 'EUR'];
        this.flags = [
            { name: 'English', image: 'assets/images/flags/gb.svg' },
            { name: 'German', image: 'assets/images/flags/de.svg' },
            { name: 'French', image: 'assets/images/flags/fr.svg' },
            { name: 'Russian', image: 'assets/images/flags/ru.svg' },
            { name: 'Turkish', image: 'assets/images/flags/tr.svg' }
        ];
        this.shoppingCartItems = [];
        this.cartService.getItems().subscribe(shoppingCartItems => {
            this.shoppingCartItems = shoppingCartItems;
        });
    }
    ngOnInit() {
    }
};
HeaderFiveComponent.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }
];
HeaderFiveComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header-five',
        template: _raw_loader_header_five_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_five_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]])
], HeaderFiveComponent);



/***/ }),

/***/ "Pt9B":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/shopping-widgets-three/shopping-widgets-three.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"widgets-three\">\r\n    <div class=\"bucket\">\r\n      <button mat-button fxLayout=\"row\" class=\"flex-row-button mat-button\" fxLayoutAlign=\"space-between center\" [matMenuTriggerFor]=\"menu\">\r\n\r\n              <div class=\"mat-button-wrapper\" >\r\n                <svg color=\"primary\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -36 512.001 512\"><path d=\"m256 219.988281c5.519531 0 10-4.480469 10-10s-4.480469-10-10-10-10 4.480469-10 10 4.480469 10 10 10zm0 0\"/><path d=\"m472 139.988281h-59.136719l-90.96875-125.152343c-8.171875-14.003907-26.171875-18.988282-40.46875-11.070313-14.492187 8.050781-19.703125 26.304687-11.648437 40.800781.230468.410156.484375.804688.769531 1.179688l71.351563 94.242187h-171.796876l71.351563-94.242187c.28125-.375.539063-.769532.769531-1.179688 8.035156-14.460937 2.882813-32.730468-11.660156-40.808594-14.265625-7.902343-32.265625-2.921874-40.453125 11.070313l-90.972656 125.160156h-59.136719c-22.054688 0-40 17.945313-40 40 0 17.394531 11.289062 32.539063 27.191406 37.898438 1.695313 1.3125 3.8125 2.101562 6.117188 2.101562.460937 0 .894531.027344 1.347656.089844 4.304688.578125 7.714844 3.84375 8.496094 8.117187l34.019531 187.164063c2.597656 14.269531 15.011719 24.628906 29.519531 24.628906h298.617188c14.507812 0 26.921875-10.359375 29.519531-24.632812l34.019531-187.15625c.78125-4.277344 4.195313-7.542969 8.515625-8.121094.4375-.0625.871094-.089844 1.328125-.089844 2.320313 0 4.453125-.796875 6.148438-2.125 15.914062-5.394531 27.160156-20.511719 27.160156-37.875 0-22.054687-17.945312-40-40-40zm-185.011719-105.660156c-2.285156-4.730469-.511719-10.492187 4.136719-13.070313 4.839844-2.683593 10.941406-.953124 13.609375 3.855469.195313.359375.417969.703125.65625 1.03125l82.746094 113.84375h-21.15625zm-80.378906-8.179687c.238281-.328126.453125-.667969.652344-1.019532 2.675781-4.8125 8.78125-6.546875 13.601562-3.878906 4.65625 2.585938 6.4375 8.339844 4.148438 13.078125l-79.992188 105.660156h-21.15625zm265.390625 173.839843h-176c-5.523438 0-10 4.476563-10 10 0 5.523438 4.476562 9.898438 10 9.898438h154.398438c-.523438 1.492187-.9375 3.039062-1.226563 4.632812l-34.023437 187.257813c-.863282 4.757812-5.003907 8.210937-9.839844 8.210937h-298.617188c-4.839844 0-8.976562-3.453125-9.84375-8.207031l-34.019531-187.164062c-.289063-1.59375-.703125-3.140626-1.226563-4.628907h154.398438c5.523438 0 10-4.476562 10-10 0-5.523437-4.476562-10-10-10h-176c-11.121094 0-20-9.0625-20-20 0-11.027343 8.972656-20 20-20h432c11.027344 0 20 8.972657 20 20 0 11.105469-9.085938 20-20 20zm0 0\"/><path d=\"m256 249.988281c-16.542969 0-30 13.457031-30 30v80c0 16.542969 13.457031 30 30 30s30-13.457031 30-30v-80c0-16.574219-13.425781-30-30-30zm10 110c0 5.515625-4.484375 10-10 10s-10-4.484375-10-10v-80c0-5.515625 4.484375-10 10-10 5.519531 0 10 4.480469 10 10zm0 0\"/><path d=\"m356 389.988281c16.542969 0 30-13.457031 30-30v-80c0-16.574219-13.425781-30-30-30-16.542969 0-30 13.457031-30 30v80c0 16.542969 13.457031 30 30 30zm-10-110c0-5.515625 4.484375-10 10-10 5.519531 0 10 4.480469 10 10v80c0 5.515625-4.484375 10-10 10s-10-4.484375-10-10zm0 0\"/><path d=\"m156 249.988281c-16.542969 0-30 13.457031-30 30v80c0 16.542969 13.457031 30 30 30s30-13.457031 30-30v-80c0-16.574219-13.425781-30-30-30zm10 110c0 5.515625-4.484375 10-10 10s-10-4.484375-10-10v-80c0-5.515625 4.484375-10 10-10 5.519531 0 10 4.476563 10 10zm0 0\"/></svg>\r\n                <span class=\"cart-count-wrapper\">{{shoppingCartItems.length}}</span>\r\n                  <!-- <span class=\"cart-count-wrapper\">{{shoppingCartItems.length}}</span> -->\r\n                </div>\r\n                <!-- <div class=\"top-cart\">\r\n                    <span>{{ getTotal() | async | currency:productService?.currency:'symbol' }}</span>\r\n                </div> -->\r\n        </button>\r\n        <mat-menu class=\"spCard-main\"  #menu=\"matMenu\">\r\n            <div class=\"spCard-dropdown\">\r\n              <div class=\"card-list-title\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n                 <a [routerLink]=\"['/pages/cart']\" routerLinkActive=\"router-link-active\" ><p>CHECK CARD</p></a>\r\n                  <p>{{shoppingCartItems.length}} ITEM</p>\r\n              </div>\r\n                  <mat-divider></mat-divider>\r\n                  <p class=\"woo-message\" *ngIf=\"!shoppingCartItems.length\">Please add product<p>\r\n\r\n                  <div class=\"new-product\" fxLayout=\"column\" *ngIf=\"shoppingCartItems.length\">\r\n                    <div class=\"item\" fxLayout=\"row\" fxLayoutAlign=\"start start\" *ngFor=\"let item of shoppingCartItems\">\r\n                        <div class=\"product\">\r\n                            <img [src]=\"item.product.pictures\" alt=\"\">\r\n                           </div>\r\n                          <div class=\"desc\">\r\n                            <p>{{item.product.name}}</p>\r\n                            <span>{{item.quantity}}kg X {{item.product.price}}$</span>\r\n                           </div>\r\n                           <div class=\"close-circle\">\r\n                              <a (click)=\"removeItem(item)\"><i class=\"material-icons\">\r\n                                  delete\r\n                                  </i></a>\r\n                            </div>\r\n                    </div>\r\n                    <mat-divider></mat-divider>\r\n                    <div class=\"total\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                        <p class=\"text-muted\">Subtotal: </p>\r\n                        <span>{{ getTotal() | async | currency:productService?.currency:'symbol' }}</span>\r\n                      </div>\r\n                  </div>\r\n            </div>\r\n       </mat-menu>\r\n    </div>\r\n  </div>\r\n");

/***/ }),

/***/ "Q8sr":
/*!****************************************************************************!*\
  !*** ./src/app/components/shared/header-three/header-three.component.sass ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXItdGhyZWUuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "QJCp":
/*!********************************************************!*\
  !*** ./src/app/components/shop/food/food.component.ts ***!
  \********************************************************/
/*! exports provided: FoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodComponent", function() { return FoodComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_food_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./food.component.html */ "Oy/N");
/* harmony import */ var _food_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food.component.sass */ "kfy9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/shared/services/cart.service */ "bjOM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/product.service */ "6MrQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/wishlist.service */ "m4vo");









let FoodComponent = class FoodComponent {
    constructor(productService, wishlistService, cartService, dialog, router) {
        this.productService = productService;
        this.wishlistService = wishlistService;
        this.cartService = cartService;
        this.dialog = dialog;
        this.router = router;
        this.onOpenProductDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.shoppingCartItems = [];
        this.contentLoaded = false;
        this.slides = [
            { title: 'THE BEST CHOICE IS HERE', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/food/banner1.jpg' },
            { title: 'Biggest discount', subtitle: 'Check the promotion', image: 'assets/images/carousel/food/banner2.jpg' },
            { title: 'Biggest sale', subtitle: 'Dont miss it', image: 'assets/images/carousel/food/banner3.jpg' },
        ];
        this.blog = [{
                image: 'assets/images/galery/gal-1.jpeg',
                date: '25 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/galery/gal-2.jpeg',
                date: '26 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/galery/gal-3.jpeg',
                date: '27 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/galery/gal-5.jpeg',
                date: '28 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/galery/gal-6.jpeg',
                date: '28 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/galery/gal-7.jpeg',
                date: '28 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/galery/gal-8.jpeg',
                date: '28 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/galery/gal-9.jpeg',
                date: '28 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }];
    }
    ngOnInit() {
        this.productService.getProducts()
            .subscribe((product) => {
            this.products = product.filter(item => item.type == 'food');
        });
        setTimeout(() => {
            this.contentLoaded = true;
        }, 3000);
    }
};
FoodComponent.ctorParameters = () => [
    { type: _shared_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] },
    { type: _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_8__["WishlistService"] },
    { type: src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
FoodComponent.propDecorators = {
    onOpenProductDialog: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
FoodComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-food',
        template: _raw_loader_food_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_food_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"], _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_8__["WishlistService"], src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], FoodComponent);



/***/ }),

/***/ "QLHP":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.sass ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "QjOo":
/*!********************************************************************!*\
  !*** ./src/app/components/shop/furniture/furniture.component.sass ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdXJuaXR1cmUuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "QlS8":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/home-three/home-three.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"carousel-3\">\r\n   \r\n    <div class=\"container ctn-box\"  >\r\n      <div class=\"\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\">\r\n          <div class=\"carousel-2-wrapper\" fxLayout.sm=\"column\" fxFlex=\"100\" fxFlex.gt-md=\"70\" fxFlex.md=\"60\" fxFlex.sm=\"100\">\r\n            <ngx-skeleton-loader\r\n            *ngIf=\"!contentLoaded\"\r\n              [theme]=\"{ 'border-radius': '0', height: '461px'  }\"\r\n              count=\"1\"\r\n            ></ngx-skeleton-loader>\r\n              <app-main-carousel *ngIf=\"contentLoaded\"  [slides]=\"slides\"></app-main-carousel>\r\n          </div>\r\n          <div class=\"slider-categories\" fxFlex=\"100\" fxFlex.gt-md=\"30\" fxFlex.md=\"40\">\r\n           \r\n             <div  class=\"carousel-banners-wrapper\" fxLayout=\"column\">\r\n             \r\n               <div   *ngFor=\"let bn of discount\" class=\"carousel-banner mb-15\">\r\n                  <div class=\"baner seccond\">\r\n                    <ngx-skeleton-loader\r\n                    *ngIf=\"!contentLoaded\"\r\n                      [theme]=\"{ 'border-radius': '0', height: '223px'  }\"\r\n                      count=\"1\"\r\n                    ></ngx-skeleton-loader>\r\n                      <div *ngIf=\"contentLoaded\" fxLayout=\"row\" fxLayout.xs=\"column\" class=\"info\" >\r\n                        \r\n                        <div fxFlex=\"100\" fxFlex.gt-md=\"50\" class=\"bn-img\"><img [src]=\"bn.image\" alt=\"\"> </div>\r\n                          <div fxFlex=\"100\" fxFlex.gt-md=\"50\" class=\"text-box w-50\" fxLayout=\"column\" >\r\n                              <h4>{{bn.title}}</h4>\r\n                             <p>{{bn.subtitle}}.</p>\r\n                      <button mat-button color=\"primary\">Shop Now</button>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n               </div>\r\n\r\n             </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"home-3-wrap\">\r\n      <div class=\"container \">\r\n        <div class=\"home-main-wrapper\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\">\r\n          <div fxFlex=\"100\" fxFlex.gt-md=\"23\" fxFlex.md=\"40\" class=\"home3-sidebar\">\r\n              <div class=\"categories-wrap\" >\r\n                <ngx-skeleton-loader\r\n              *ngIf=\"!contentLoaded\"\r\n                count=\"1\"\r\n                [theme]=\"{ 'border-radius': '0', height: '350px' }\"\r\n              ></ngx-skeleton-loader>\r\n                  <div *ngIf=\"contentLoaded\" class=\"title\"> TOP CATEGORIES</div>\r\n                    <app-categories *ngIf=\"contentLoaded\"></app-categories>\r\n                    <div *ngIf=\"contentLoaded\" class=\"btn-sale\">\r\n                        <button mat-raised-button color=\"primary\">USE THE DISCOUNT - 60% OFF</button>\r\n                    </div>\r\n               </div>\r\n               <div class=\"brands\">\r\n                <ngx-skeleton-loader\r\n                *ngIf=\"!contentLoaded\"\r\n                  count=\"1\"\r\n                  [theme]=\"{ 'border-radius': '0', height: '250px' }\"\r\n                ></ngx-skeleton-loader>\r\n                  <div *ngIf=\"contentLoaded\"  class=\"title-header\"><h4  class=\"title\">BRANDS</h4></div>\r\n                  <div *ngIf=\"contentLoaded\" class=\"brand-logos\">\r\n                    <div class=\"brand-item\">\r\n                      <a href=\"#\">\r\n                        <img src=\"assets/images/brands/brand-1.png\" alt=\"\">\r\n                      </a>\r\n                    </div>\r\n                    <div class=\"brand-item\">\r\n                        <a href=\"#\">\r\n                          <img src=\"assets/images/brands/brand-2.png\" alt=\"\">\r\n                        </a>\r\n                      </div>\r\n                      <div class=\"brand-item\">\r\n                          <a href=\"#\">\r\n                            <img src=\"assets/images/brands/brand-3.png\" alt=\"\">\r\n                          </a>\r\n                        </div>\r\n                        <div class=\"brand-item\">\r\n                            <a href=\"#\">\r\n                              <img src=\"assets/images/brands/brand-4.png\" alt=\"\">\r\n                            </a>\r\n                          </div>\r\n                          <div class=\"brand-item\">\r\n                              <a href=\"#\">\r\n                                <img src=\"assets/images/brands/brand-5.png\" alt=\"\">\r\n                              </a>\r\n                            </div>\r\n                            <div class=\"brand-item\">\r\n                                <a href=\"#\">\r\n                                  <img src=\"assets/images/brands/brand-1.png\" alt=\"\">\r\n                                </a>\r\n                              </div>\r\n                  </div>\r\n               </div>\r\n               <mat-toolbar color=\"primary\" >\r\n                <ngx-skeleton-loader\r\n                *ngIf=\"!contentLoaded\"\r\n                  count=\"1\"\r\n                  [theme]=\"{ 'border-radius': '0', height: '200px' }\"\r\n                ></ngx-skeleton-loader>\r\n                <div *ngIf=\"contentLoaded\" class=\"sale-widget\">\r\n                   <span class=\"sale-widget1\">\r\n                      BIG SALLE\r\n                  </span>\r\n                  <span class=\"sale-widget2\">\r\n                     DO NOT MISS IT!\r\n                 </span>\r\n                  <span class=\"discount\">60</span>\r\n                  <div class=\"percent\">\r\n                    <span>%</span>off\r\n                  </div>\r\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nects.</p>\r\n                </div>\r\n                 <mat-toolbar-row>\r\n                  \r\n                 </mat-toolbar-row>\r\n             \r\n              </mat-toolbar> \r\n               <div class=\"subscribe-widget\">\r\n                <ngx-skeleton-loader\r\n                *ngIf=\"!contentLoaded\"\r\n                  count=\"1\"\r\n                  [theme]=\"{ 'border-radius': '0', height: '260px' }\"\r\n                ></ngx-skeleton-loader>\r\n                  <span *ngIf=\"contentLoaded\">NEWSLETTER</span>\r\n                  <p *ngIf=\"contentLoaded\">Get all the latest information on Events, Sales and Offers.</p>\r\n                  <div *ngIf=\"contentLoaded\" class=\"form\">\r\n                      <div fxLayout=\"column\" class=\"newsletter-widget\">\r\n                          <input type=\"text\" placeholder=\"Enter your email address\">\r\n                          <button type=\"submit\" mat-raised-button color=\"primary\" class=\"ped-btn-footer\">SUBSCRIBE US</button>\r\n                        </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n                <div fxFlex=\"100\"   fxFlex.gt-md=\"77\" fxFlex.md=\"60\" fxFlex.sm=\"100\" class=\"main-home3-wrapper\">\r\n                  <div fxLayout=\"row wrap\" class=\"info-bar pb-0\" >\r\n        \r\n                    <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\" >\r\n                      <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\" >\r\n                        <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" appearance=\"circle\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n                        <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg  m-0\" *ngIf=\"contentLoaded\">card_giftcard</mat-icon>\r\n                        <div class=\"content\">\r\n                          <ngx-skeleton-loader\r\n                          *ngIf=\"!contentLoaded\"\r\n                            count=\"2\"\r\n                            [theme]=\"{ width: '140px', 'border-radius': '0', height: '15px' }\"\r\n                          ></ngx-skeleton-loader>\r\n                          <p *ngIf=\"contentLoaded\">BONUS PLUS</p>\r\n                          <span *ngIf=\"contentLoaded\" class=\"text-muted m-0\">Get a bonus plus for buying more that three products</span>\r\n                        </div>\r\n                      </mat-card>\r\n                    </div>\r\n                    <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n                      <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                        <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" appearance=\"circle\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n                        <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg  m-0\" *ngIf=\"contentLoaded\">local_shipping</mat-icon>\r\n                        <div class=\"content\">\r\n                          <ngx-skeleton-loader\r\n                          *ngIf=\"!contentLoaded\"\r\n                            count=\"2\"\r\n                            [theme]=\"{ width: '140px', 'border-radius': '0', height: '15px' }\"\r\n                          ></ngx-skeleton-loader>\r\n                          <p *ngIf=\"contentLoaded\">FREE SHIPPING</p>\r\n                          <span class=\"text-muted m-0\" *ngIf=\"contentLoaded\">Free shipping on all orders over $99</span>\r\n                        </div>\r\n                      </mat-card>\r\n                    </div>\r\n                    <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n                      <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                        <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" appearance=\"circle\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n                        <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg m-0\" *ngIf=\"contentLoaded\">monetization_on</mat-icon>\r\n                        <div class=\"content\">\r\n                          <ngx-skeleton-loader\r\n                          *ngIf=\"!contentLoaded\"\r\n                            count=\"2\"\r\n                            [theme]=\"{ width: '140px', 'border-radius': '0', height: '15px' }\"\r\n                          ></ngx-skeleton-loader>\r\n                          <p *ngIf=\"contentLoaded\">MONEY BACK GUARANTEE</p>\r\n                          <span *ngIf=\"contentLoaded\" class=\"text-muted m-0\">100% money back guarantee</span>\r\n                        </div>\r\n                      </mat-card>\r\n                    </div>\r\n                    <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n                      <mat-card class=\"light-block no-bd\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                        <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" appearance=\"circle\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n                        <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg m-0\" *ngIf=\"contentLoaded\">history</mat-icon>\r\n                        <div class=\"content\">\r\n                          <ngx-skeleton-loader\r\n                          *ngIf=\"!contentLoaded\"\r\n                            count=\"2\"\r\n                            [theme]=\"{ width: '140px', 'border-radius': '0', height: '15px' }\"\r\n                          ></ngx-skeleton-loader>\r\n                          <p *ngIf=\"contentLoaded\">ONLINE SUPPORT 24/7</p>\r\n                          <span *ngIf=\"contentLoaded\" class=\"text-muted m-0\">Call us: 02 3555 65454 55</span>\r\n                        </div>\r\n                      </mat-card>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"products sec-padding prod-three\">\r\n                    <h3>POPULAR ITEMS</h3>\r\n                          <mat-tab-group>\r\n\r\n                              <mat-tab  label=\"FEATURED PRODUCTS\">\r\n\r\n                                       <app-product-carousel-three [product]=\"products | slice:0:8\"></app-product-carousel-three>\r\n\r\n\r\n                              </mat-tab>\r\n\r\n                              <mat-tab label=\"LATEST PRODUCTS\">\r\n\r\n                                      <app-product-carousel-three [product]=\"products | slice:5:13\"></app-product-carousel-three>\r\n\r\n                              </mat-tab>\r\n\r\n                              <mat-tab label=\"ON SALE PRODUCTS\">\r\n\r\n                                        <app-product-carousel-three [product]=\"products | slice:13:22\"></app-product-carousel-three>\r\n\r\n                              </mat-tab>\r\n\r\n                            </mat-tab-group>\r\n\r\n\r\n                    </div>\r\n                    <div class=\"home3-banner-wrap\">\r\n                      <ngx-skeleton-loader\r\n                          *ngIf=\"!contentLoaded\"\r\n                            count=\"1\"\r\n                            [theme]=\"{  'border-radius': '0', height: '194px' }\"\r\n                         ></ngx-skeleton-loader>\r\n                        <div class=\"banner\" *ngIf=\"contentLoaded\">\r\n                          \r\n                          <div fxLayout=\"column\" class=\"text-wrap\" >\r\n                              <span class=\"subtitle\">CHECK THE PURE QUALITY</span>\r\n                              <span class=\"main\">EXCLUSIVE CLASS</span>\r\n                              <a href=\"#\">Shop Now</a>\r\n                          </div>\r\n\r\n                          <img src=\"assets/images/bg/hom3-banner.jpg\" alt=\"\">\r\n                        </div>\r\n                    </div>\r\n                    <app-product-vertical [products]=\"products\"></app-product-vertical>\r\n                </div>\r\n         </div>\r\n        </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "R777":
/*!********************************************************!*\
  !*** ./src/app/components/shop/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "CyaJ");
/* harmony import */ var _home_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.sass */ "BqSI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/product.service */ "6MrQ");





let HomeComponent = class HomeComponent {
    constructor(productService) {
        this.productService = productService;
        this.contentLoaded = false;
        this.banners = [];
        this.slides = [
            { title: 'Huge sale', subtitle: 'Up to 70%', image: 'assets/images/carousel/banner1.jpg' },
            { title: 'Biggest discount', subtitle: 'Check the promotion', image: 'assets/images/carousel/banner2.jpg' },
            { title: 'Biggest sale', subtitle: 'Dont miss it', image: 'assets/images/carousel/banner3.jpg' },
            { title: 'Our best products', subtitle: 'Special selection', image: 'assets/images/carousel/banner4.jpg' },
            { title: 'Massive sale', subtitle: 'Only for today', image: 'assets/images/carousel/banner5.jpg' }
        ];
    }
    ngOnInit() {
        this.productService.getBanners()
            .subscribe(data => this.banners = data);
        this.productService.getProducts()
            .subscribe((product) => {
            this.products = product;
        });
        setTimeout(() => {
            this.contentLoaded = true;
        }, 3000);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }
];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]])
], HomeComponent);



/***/ }),

/***/ "RDHc":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/main-carousel/main-carousel.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-slider\">\r\n  <div class=\"swiper-container h-100\" [swiper]=\"config\">\r\n    <div class=\"swiper-wrapper h-100\">\r\n      <div *ngFor=\"let slide of slides\" class=\"swiper-slide\" >\r\n        <div [attr.data-background]=\"slide.image\" class=\"slide-item swiper-lazy\">\r\n          <div class=\"container sl-wrap\">\r\n            <div class=\"swiper-lazy-preloader swiper-lazy-preloader-white\"></div>\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center left\" class=\"content\">\r\n              <h1 style=\"color: white !important\">{{slide.title}}</h1>\r\n              <h3 style=\"color: white !important\">{{slide.subtitle}}</h3>\r\n              <button mat-raised-button color=\"primary\">Comprar Ahora</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"swiper-pagination white\"></div>\r\n    <button mat-mini-fab color=\"primary\" class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n    <button mat-mini-fab color=\"primary\" class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "RgMK":
/*!************************************************************************!*\
  !*** ./src/app/components/shared/header-two/header-two.component.sass ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXItdHdvLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "SB/d":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-dialog/product-dialog.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"product-dialog\">\r\n\r\n  <div class=\"close-btn-outer\">\r\n    <button mat-mini-fab color=\"warn\" (click)=\"close()\"><mat-icon>close</mat-icon></button>\r\n  </div>\r\n  <div mat-dialog-content>\r\n    <div fxLayout=\"row wrap\" >\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n            <div class=\"swiper-container h-100\">\r\n                <div class=\"swiper-wrapper\">\r\n                  <img [src]=\"product.pictures[0].big\" alt=\"\" class=\"img-fluid\">\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" ngClass.gt-sm=\"px-2 m-0\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\r\n          <div class=\"product-right\">\r\n              <div class=\"product-details\">\r\n                  <h2 class=\"mb-10\">{{product.name}}</h2>\r\n                <h4 class=\"mb-10\" ><del>{{product.salePrice | currency:productsService?.currency:'symbol'}}</del><span>{{product.discount}}% off</span></h4>\r\n                <h3 class=\"price mb-10\">{{product.price | currency:productsService?.currency:'symbol' }}</h3>\r\n                <div class=\"discription\">\r\n                  <p class=\"bold\">Product details</p>\r\n                  <p class=\"text-muted productDescription\">{{product.description}}</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"py-1 mt-15\">\r\n                <p>\r\n                  <span class=\"text-muted fw-500\">Avalibility: </span>\r\n                <span class=\"avalibility\" *ngIf=\"counter <= product.stock\"><span>In Stock</span></span>\r\n                <span class=\"avalibility\" *ngIf=\"counter > product.stock\"><span class=\"red\">Out of Stock</span></span>\r\n              </p>\r\n            </div>\r\n            <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" >\r\n              <div class=\"quantity mt-15\">\r\n                <span class=\"text-muted fw-500\">Quantity</span>\r\n                <div fxLayout=\"row\" fxLayout.xs=\"column\"  class=\"text-muted mt-15\">\r\n                  <div fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n                      <button mat-icon-button matTooltip=\"Remove\" (click)=\"decrement()\"><mat-icon>remove</mat-icon></button>\r\n                      <input type=\"text\" name=\"quantity\" value=\"{{counter}}\" class=\"form-control input-number\">\r\n                      <button mat-icon-button matTooltip=\"Add\" (click)=\"increment()\"><mat-icon>add</mat-icon></button>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"buttons mt-40\">\r\n              <mat-icon mat-stroked-button color=\"primary\" (click)=\"addToCart(product, counter)\" class=\"mat-icon-lg mat-icon material-icons\">shopping_cart</mat-icon>\r\n              <mat-icon mat-stroked-button color=\"primary\" (click)=\"buyNow()\" class=\"hvr-icon\">remove_red_eye</mat-icon>\r\n          </div>\r\n            </div>\r\n            \r\n          </div>\r\n\r\n\r\n\r\n        </div>\r\n    </div>\r\n  </div>\r\n\r\n  </div>\r\n");

/***/ }),

/***/ "SKlU":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header-two/header-two.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"home-header-2\">\r\n    <div class=\"container\"fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutGap=\"20px\" fxlayoutalign=\"space-between center\">\r\n      <div class=\"logo\">\r\n          <a [routerLink]=\"['/home/one']\" routerLinkActive=\"router-link-active\" ><img src=\"assets/images/logo-01.png\"></a>\r\n      </div>\r\n      <div fxflexoffset.gt-sm=\"10\"  fxFlex class=\"search-form\">\r\n       <form class=\"search-form\" fxLayout=\"row\">\r\n         <div class=\"form-wrap\">\r\n            <input type=\"text\" placeholder=\"Type to search...\">\r\n            <button class=\"btn-search\" type=\"submit\">Search</button>\r\n         </div>\r\n       </form>\r\n      </div>\r\n      <div class=\"call-bucket-wrap\" fxLayout=\"row\" fxLayout.sm=\"row\" fxLayoutAlign=\"center center\" >\r\n        <div class=\"info-message-icon\"  fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n          <div class=\"icon\"  fxLayout=\"row\" >\r\n              <mat-icon class=\"mat-icon-lg mat-icon material-icons\">call</mat-icon>\r\n          </div>\r\n            <div class=\"info-text\">\r\n              <p>Helpline:</p>\r\n               <span>02(981)336 111</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"main-menu-wrapper-2\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" >\r\n            <mat-toolbar class=\"top-navbar top menu\">\r\n              <app-shopping-widgets-two [shoppingCartItems]=\"shoppingCartItems\"></app-shopping-widgets-two>\r\n            </mat-toolbar>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div fxShow=\"false\" fxShow.gt-sm class=\"menu-container2\">\r\n   \r\n    <app-menu></app-menu>\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n");

/***/ }),

/***/ "SjMf":
/*!****************************************************************************************!*\
  !*** ./src/app/components/shared/categories-section/categories-section.component.sass ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWVzLXNlY3Rpb24uY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _components_shared_services_color_option_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/shared/services/color-option.service */ "jhFw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");







let AppComponent = class AppComponent {
    constructor(spinner, appSettings, router) {
        this.spinner = spinner;
        this.appSettings = appSettings;
        this.router = router;
        this.title = 'TienPeru';
        this.settings = this.appSettings.settings;
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]) {
                this.url = event.url;
            }
        });
    }
    ngOnInit() {
        /** spinner starts on init */
        this.spinner.show();
        setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
        }, 5000);
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
        document.documentElement.style.setProperty('--theme-deafult', '#28b88d');
    }
};
AppComponent.ctorParameters = () => [
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
    { type: _components_shared_services_color_option_service__WEBPACK_IMPORTED_MODULE_5__["AppSettings"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"], _components_shared_services_color_option_service__WEBPACK_IMPORTED_MODULE_5__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], AppComponent);



/***/ }),

/***/ "Tqn1":
/*!*******************************************************************************!*\
  !*** ./src/app/components/shop/products/product-two/product-two.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProductTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTwoComponent", function() { return ProductTwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_two_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-two.component.html */ "NFbc");
/* harmony import */ var _product_two_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-two.component.sass */ "If/8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/shared/services/cart.service */ "bjOM");
/* harmony import */ var src_app_components_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/shared/services/wishlist.service */ "m4vo");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../product-dialog/product-dialog.component */ "5Tg0");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ "GS7A");










let ProductTwoComponent = class ProductTwoComponent {
    constructor(wishlistService, cartService, dialog, router) {
        this.wishlistService = wishlistService;
        this.cartService = cartService;
        this.dialog = dialog;
        this.router = router;
        this.onOpenProductDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.product = [];
        this.contentLoaded = false;
        this.showMore = (product) => product.state = product.state === 'small' ? 'large' : 'small';
    }
    ngOnChanges(changes) {
        if (changes.products && changes.products.currentValue && changes.products.currentValue.length) {
            this.defaultFruits = this.products;
        }
    }
    ngOnInit() {
        setTimeout(() => {
            this.contentLoaded = true;
        }, 3000);
    }
    // Add to cart
    addToCart(product, quantity = 1) {
        this.cartService.addToCart(product, quantity);
    }
    openProductDialog(product) {
        let dialogRef = this.dialog.open(_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ProductDialogComponent"], {
            data: product,
            panelClass: 'product-dialog',
        });
        dialogRef.afterClosed().subscribe(product => {
            if (product) {
                this.router.navigate(['/products', product.id, product.name]);
            }
        });
    }
    filterProducts(predicate) {
        if (predicate === 'all') {
            this.products = this.defaultFruits.filter(item => item.type == 'food');
        }
        else {
            this.products = this.defaultFruits.filter(product => product.category === predicate);
        }
    }
    // Add to wishlist
    addToWishlist(product) {
        this.wishlistService.addToWishlist(product);
    }
};
ProductTwoComponent.ctorParameters = () => [
    { type: src_app_components_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_5__["WishlistService"] },
    { type: src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
ProductTwoComponent.propDecorators = {
    onOpenProductDialog: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['product',] }],
    products: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ProductTwoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-two',
        template: _raw_loader_product_two_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('myAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('small', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ height: '0px' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ minHeight: '100px' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('small <=> large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('400ms ease-in'))
            ])
        ],
        styles: [_product_two_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_components_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_5__["WishlistService"], src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], ProductTwoComponent);



/***/ }),

/***/ "U46r":
/*!******************************************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-details-food/product-zoom-food/product-zoom-food.component.sass ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LXpvb20tZm9vZC5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "UDkM":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-details-food/product-details-food.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"food-details-wrap\">\r\n    <div class=\"header-title\" style=\"background: url(assets/images/background/header.jpg);\">\r\n        <div class=\"container\">\r\n            <div class=\"title\">\r\n                <h2>Product details</h2>\r\n                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br>Aenean commodo ligula eget dolor</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"details-wrapper sec-padding\" *ngIf=\"product\"\r\n        style=\"background: url(assets/images/background/download.svg);\">\r\n        <div class=\"container\" id=\"mainDIV\">\r\n            <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"80\">\r\n                <div fxLayout=\"row wrap\" fxFlex=\"100\" fxFlex.gt-md=\"100\" fxFlex.gt-sm=\"100\">\r\n                    <div fxFlex=\"100\" fxFlex.gt-md=\"50\" fxFlex.md=\"45\">\r\n                        <!-- <mat-card class=\"product-image\">\r\n                   <div *ngFor=\"let image of product.pictures\">\r\n                      <ngx-image-zoom   [thumbImage]=\"image\" [fullImage]=\"image\" zoomMode=\"hover\"\r\n                  ></ngx-image-zoom>\r\n                   </div>\r\n                </mat-card> -->\r\n                        <mat-card class=\"product-image\">\r\n                            <div>\r\n                                <button mat-icon-button fxHide=\"false\" fxHide.gt-md>\r\n                                    <mat-icon>fullscreen</mat-icon>\r\n                                </button>\r\n                                <img [src]=\"product.pictures[0].big\" />\r\n                            </div>\r\n                            <a (click)=\"openProductDialog(product, bigProductImageIndex)\">\r\n                                <mat-icon>zoom_in</mat-icon>\r\n                            </a>\r\n                        </mat-card>\r\n\r\n                    </div>\r\n                    <div fxFlex=\"100\" fxFlex.gt-md=\"50\" fxFlex.md=\"55\" ngClass.gt-sm=\"px-3 m-0\" ngClass.sm=\"mt-2\"\r\n                        ngClass.xs=\"mt-2\">\r\n\r\n                        <div class=\"product-right\">\r\n                            <div class=\"product-details\">\r\n                                <h2>{{product.name}}</h2>\r\n                                <h4 *ngIf=\"!productsService?.catalogMode\">\r\n                                    <del>{{product.salePrice | currency:productsService?.currency:'symbol'}}</del><span>{{product.discount}}%\r\n                                        off</span></h4>\r\n                                <h3 class=\"price\" *ngIf=\"!productsService?.catalogMode\">\r\n                                    {{product.price | currency:productsService?.currency:'symbol'}}</h3>\r\n                                <p class=\"text-muted description\">{{product.description}}</p>\r\n                            </div>\r\n                            <div class=\"py-1 mt-15 mb-15\">\r\n                                <p>\r\n                                    <span class=\"text-muted fw-500\">Avalibility: </span>\r\n                                    <span class=\"avalibility\" *ngIf=\"counter <= product.stock\"><span>In\r\n                                            Stock</span></span>\r\n                                    <span class=\"avalibility red\" *ngIf=\"counter > product.stock\"><span>Out of\r\n                                            Stock</span></span>\r\n                                </p>\r\n                            </div>\r\n                            <div class=\"quantity mb-15\">\r\n                                <div fxLayout=\"row\" fxLayout.xs=\"column\" class=\"text-muted mt-20\">\r\n                                    <div class=\"quantity-box\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n                                        <button mat-icon-button matTooltip=\"Remove\" (click)=\"decrement()\">\r\n                                            <mat-icon>remove</mat-icon>\r\n                                        </button>\r\n                                        <input type=\"text\" name=\"quantity\" value=\"{{counter}}\"\r\n                                            class=\"form-control input-number\">\r\n                                        <button mat-icon-button matTooltip=\"Add\" (click)=\"increment()\">\r\n                                            <mat-icon>add</mat-icon>\r\n                                        </button>\r\n                                    </div>\r\n                                    <div class=\"buttons \">\r\n                                        <button mat-raised-button color=\"primary\" class=\"btn-project mr-10\"\r\n                                            (click)=\"addToCart(product, counter)\">ADD TO CARD</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"social-icons\">\r\n                                <span class=\"text-muted fw-500 \">Share it: </span>\r\n                                <ul fxLayout=\"row\" class=\"social list-inline mt-15\">\r\n                                    <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\r\n                                    <li><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\r\n                                    <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\r\n                                    <li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\r\n                                </ul>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"review-wrapper\" fxFlex=\"100\" fxFlex.md=\"75\">\r\n\r\n                    <mat-tab-group [@.disabled]=\"true\" [selectedIndex]=\"0\">\r\n                        <mat-tab label=\"Description\">\r\n                            <div class=\"full-desc lh\">\r\n                                <p class=\"text-muted\">Lorem Ipsum is simply dummy text of the printing and typesetting\r\n                                    industry. Lorem Ipsum has been the industrys standard dummy text ever since the\r\n                                    1500s, when an unknown printer took a galley of type and scrambled it to make a type\r\n                                    specimen book. It has survived not only five centuries, but also the leap into\r\n                                    electronic typesetting, remaining essentially unchanged. It was popularised in the\r\n                                    1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more\r\n                                    recently with desktop publishing software like Aldus PageMaker including versions of\r\n                                    Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting\r\n                                    industry. </p>\r\n                            </div>\r\n                        </mat-tab>\r\n                        <mat-tab label=\"Details\">\r\n                            <div class=\"full-desc lh text-muted\">\r\n                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\r\n                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa\r\n                                    qui officia deserunt mollit anim id est laborum.</p>\r\n                                <ul class=\"px-2 mt-1\">\r\n                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\r\n                                    <li>Aenean vehicula, tortor gravida elementum tincidunt, justo lorem vestibulum ex,\r\n                                        eget egestas arcu tellus in magna. Vivamus gravida, ipsum vel luctus luctus,\r\n                                        nisi felis vestibulum est, nec interdum tellus leo quis tellus. Sed sit amet\r\n                                        convallis enim, in laoreet orci.</li>\r\n                                    <li>Donec et elit at nulla congue interdum sit amet varius erat.</li>\r\n                                    <li>Nulla sit amet risus pellentesque, dignissim massa ut, dignissim arcu.</li>\r\n                                    <li>Morbi dapibus ligula at faucibus tempus. Aenean vehicula, tortor gravida\r\n                                        elementum tincidunt, justo lorem vestibulum ex, eget egestas arcu tellus in\r\n                                        magna. Vivamus gravida, ipsum vel luctus luctus, nisi felis vestibulum est, nec\r\n                                        interdum tellus leo quis tellus. Sed sit amet convallis enim, in laoreet orci.\r\n                                    </li>\r\n                                    <li>Nunc sodales justo ut nisi euismod, quis condimentum leo varius.</li>\r\n                                </ul>\r\n                            </div>\r\n                        </mat-tab>\r\n                        <mat-tab label=\"Reviews\">\r\n                            <div class=\"full-desc lh\">\r\n                                <mat-list class=\"reviews\">\r\n                                    <mat-list-item class=\"content\">\r\n                                        <img matListAvatar [src]=\"'assets/images/avatars/avatar-1.png'\" alt=\"image\"\r\n                                            class=\"review-author\">\r\n                                        <p matLine fxLayoutAlign=\"start center\">\r\n                                            <span class=\"name\">Martina Solsker</span>\r\n                                        </p>\r\n                                        <p matLine class=\"text-muted\"><small>22 Mart, 2018 at 18:44</small></p>\r\n                                        <p matLine class=\"text\">Integer id eros et mi fringilla imperdiet. In dictum\r\n                                            turpis eget magna viverra condimentum. Ut malesuada interdum ultrices. Proin\r\n                                            tristique sem pellentesque, posuere dui in, maximus magna. Aenean vehicula,\r\n                                            tortor gravida elementum tincidunt, justo lorem vestibulum ex, eget egestas\r\n                                            arcu tellus in magna.</p>\r\n                                    </mat-list-item>\r\n                                    <mat-list-item class=\"content\">\r\n                                        <img matListAvatar [src]=\"'assets/images/avatars/avatar-2.png'\" alt=\"image\"\r\n                                            class=\"review-author\">\r\n                                        <p matLine fxLayoutAlign=\"start center\">\r\n                                            <span class=\"name\">Deni Aniston</span>\r\n                                        </p>\r\n                                        <p matLine class=\"text-muted\"><small>09 Octomber, 2018 at 12:22</small></p>\r\n                                        <p matLine class=\"text\">Nulla accumsan, lacus sed suscipit rutrum, turpis augue\r\n                                            accumsan metus, in accumsan urna mi vehicula lorem. Pellentesque semper nibh\r\n                                            vitae augue placerat finibus. Nulla sed porttitor nunc, quis tristique sem.\r\n                                            Quisque in varius nisl. Integer turpis lorem, ultricies sed sem nec, commodo\r\n                                            molestie arcu. Nulla finibus ex tortor, et suscipit magna semper\r\n                                            consectetur. Cras sit amet metus dui. Maecenas eget dui at ex varius\r\n                                            malesuada vel non felis.</p>\r\n                                    </mat-list-item>\r\n                                    <mat-list-item class=\"content\">\r\n                                        <img matListAvatar [src]=\"'assets/images/avatars/avatar-3.png'\" alt=\"image\"\r\n                                            class=\"review-author\">\r\n                                        <p matLine fxLayoutAlign=\"start center\">\r\n                                            <span class=\"name\">Simon Ladger</span>\r\n                                        </p>\r\n                                        <p matLine class=\"text-muted\"><small>14 December, 2018 at 2:10</small></p>\r\n                                        <p matLine class=\"text\">Pellentesque hendrerit vel turpis aliquam placerat.\r\n                                            Suspendisse ullamcorper congue feugiat. Etiam gravida metus ac massa posuere\r\n                                            venenatis. Pellentesque vehicula lobortis dolor, ac pretium dolor maximus\r\n                                            quis. Fusce vitae iaculis mauris, quis posuere ex. Mauris vitae convallis\r\n                                            nibh. Etiam eget enim at orci interdum maximus nec in ante.</p>\r\n                                    </mat-list-item>\r\n                                </mat-list>\r\n                                <div class=\"writte-reviews mt-40\">\r\n                                    <h3 class=\"mt-2\">LEAVE YOUR REVIEW</h3>\r\n                                    <div class=\"divider\"></div>\r\n                                    <p class=\"mt-2 text-muted\">Your email address will not be published. Required fields\r\n                                        are marked *</p>\r\n                                    <div class=\"rating\">\r\n                                        <h3 fxLayoutAlign=\"start center\" class=\"mt-2\">\r\n                                            <span>Your Rating:</span>\r\n                                            <button mat-icon-button matTooltip=\"Very Dissatisfied\"\r\n                                                matTooltipPosition=\"above\">\r\n                                                <mat-icon class=\"mat-icon-lg\">sentiment_very_dissatisfied</mat-icon>\r\n                                            </button>\r\n                                            <button mat-icon-button matTooltip=\"Dissatisfied\"\r\n                                                matTooltipPosition=\"above\">\r\n                                                <mat-icon class=\"mat-icon-lg\">sentiment_dissatisfied</mat-icon>\r\n                                            </button>\r\n                                            <button mat-icon-button matTooltip=\"Neutral\" matTooltipPosition=\"above\">\r\n                                                <mat-icon class=\"mat-icon-lg\">sentiment_neutral</mat-icon>\r\n                                            </button>\r\n                                            <button mat-icon-button matTooltip=\"Satisfied\" matTooltipPosition=\"above\">\r\n                                                <mat-icon class=\"mat-icon-lg\">sentiment_satisfied</mat-icon>\r\n                                            </button>\r\n                                            <button mat-icon-button matTooltip=\"Very Satisfied\"\r\n                                                matTooltipPosition=\"above\">\r\n                                                <mat-icon class=\"mat-icon-lg\">sentiment_very_satisfied</mat-icon>\r\n                                            </button>\r\n                                        </h3>\r\n                                    </div>\r\n\r\n                                    <form fxLayout=\"row wrap\">\r\n                                        <div fxFlex=\"100\" fxFlex.gt-md=\"50\" fxFlex.md=\"50\" class=\"mt-20 pr-5\"\r\n                                            ngClass.sm=\"mt-10\" ngClass.xs=\"mt-10\">\r\n                                            <mat-form-field class=\"w-100\">\r\n                                                <input matInput placeholder=\"Your Name (required)\" #name=\"ngModel\"\r\n                                                    ngModel name=\"name\" required>\r\n                                                <mat-error *ngIf=\"name.invalid\">Please enter a valid message</mat-error>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                        <div fxFlex=\"100\" fxFlex.gt-md=\"50\" fxFlex.md=\"50\" class=\"pl-5 mt-20\"\r\n                                            ngClass.sm=\"mt-10\" ngClass.xs=\"mt-10\">\r\n                                            <mat-form-field class=\"w-100\">\r\n                                                <input matInput placeholder=\"Your Email (required)\" #email=\"ngModel\"\r\n                                                    ngModel name=\"email\" required>\r\n                                                <mat-error *ngIf=\"email.invalid\">Please enter a valid message\r\n                                                </mat-error>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                        <div fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"mt-20\" ngClass.sm=\"mt-10\"\r\n                                            ngClass.xs=\"mt-10\">\r\n                                            <mat-form-field class=\"w-100\">\r\n                                                <input matInput placeholder=\"Subject\" #subject=\"ngModel\" ngModel\r\n                                                    name=\"subject\" required>\r\n                                                <mat-error *ngIf=\"subject.invalid\">Please enter a valid message\r\n                                                </mat-error>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                        <div fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"mt-20\" ngClass.sm=\"mt-10\"\r\n                                            ngClass.xs=\"mt-10\">\r\n                                            <mat-form-field class=\"w-100\">\r\n                                                <textarea placeholder=\"Post content\" matInput rows=\"6\" ngModel\r\n                                                    name=\"content\" required></textarea>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                        <div class=\"button-wrap\" fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"px-1\"\r\n                                            ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n                                            <button class=\"btn-project\" mat-raised-button color=\"accent\"\r\n                                                type=\"submit\">Submit Review</button>\r\n                                        </div>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                        </mat-tab>\r\n                    </mat-tab-group>\r\n\r\n                </div>\r\n\r\n\r\n\r\n\r\n\r\n            </div>\r\n            <div fxLayout=\"row wrap\" fxHide fxShow.gt-sm fxFlex=\"100\" fxFlex.gt-sm=\"22\">\r\n                <div fxFlex=\"100\">\r\n                    <div fxLayout=\"row wrap\" class=\"info-bar\" ngClass.gt-md=\"m-0\">\r\n                        <div fxFlex=\"100\">\r\n                            <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                <mat-icon class=\"mat-icon-xlg  m-0\">card_giftcard</mat-icon>\r\n                                <div class=\"content ml-10\">\r\n                                    <p>BONUS PLUS</p>\r\n                                    <span class=\"text-muted m-0\">Get a bonus plus for buying more that three\r\n                                        products</span>\r\n                                </div>\r\n                            </mat-card>\r\n                        </div>\r\n                        <div fxFlex=\"100\">\r\n                            <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                <mat-icon class=\"mat-icon-xlg  m-0\">local_shipping</mat-icon>\r\n                                <div class=\"content ml-10\">\r\n                                    <p>FREE SHIPPING</p>\r\n                                    <span class=\"text-muted m-0\">Free shipping on all orders over $99</span>\r\n                                </div>\r\n                            </mat-card>\r\n                        </div>\r\n                        <div fxFlex=\"100\" class=\"mt-16\">\r\n                            <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                <mat-icon class=\"mat-icon-xlg m-0\">monetization_on</mat-icon>\r\n                                <div class=\"content ml-10\">\r\n                                    <p>MONEY BACK GUARANTEE</p>\r\n                                    <span class=\"text-muted m-0\">100% money back guarantee</span>\r\n                                </div>\r\n                            </mat-card>\r\n                        </div>\r\n                        <div fxFlex=\"100\" class=\"mt-16\">\r\n                            <mat-card class=\"light-block no-border\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                <mat-icon class=\"mat-icon-xlg m-0\">history</mat-icon>\r\n                                <div class=\"content ml-10\">\r\n                                    <p>ONLINE SUPPORT 24/7</p>\r\n                                    <span class=\"text-muted m-0\">Call us: 02 3555 65454 55</span>\r\n                                </div>\r\n                            </mat-card>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"sale-widget\">\r\n                        <span class=\"sale-widget1\">\r\n                            BIG SALLE\r\n                        </span>\r\n                        <span class=\"sale-widget2\">\r\n                            DO NOT MISS IT!\r\n                        </span>\r\n                        <span class=\"discount\">60</span>\r\n                        <div class=\"percent\">\r\n                            <span>%</span>off\r\n                        </div>\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nects.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"products no-bg sec-padding\">\r\n            <div class=\"container\">\r\n                <div class=\"title\">\r\n                    <h4 class=\"widget-title\">Featured Products</h4>\r\n                </div>\r\n                <app-product-carousel [product]=\"products | slice:0:6\"></app-product-carousel>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "UOqT":
/*!************************************************************************************************!*\
  !*** ./src/app/components/shop/widgets/categories-furniture/categories-furniture.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CategoriesFurnitureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesFurnitureComponent", function() { return CategoriesFurnitureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_categories_furniture_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./categories-furniture.component.html */ "xf7L");
/* harmony import */ var _categories_furniture_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories-furniture.component.sass */ "1HO4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let CategoriesFurnitureComponent = class CategoriesFurnitureComponent {
    constructor() { }
    ngOnInit() {
    }
};
CategoriesFurnitureComponent.ctorParameters = () => [];
CategoriesFurnitureComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-categories-furniture',
        template: _raw_loader_categories_furniture_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_categories_furniture_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], CategoriesFurnitureComponent);



/***/ }),

/***/ "UoWu":
/*!****************************************************************************!*\
  !*** ./src/app/components/shared/banners-four/banners-four.component.sass ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYW5uZXJzLWZvdXIuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "UvXb":
/*!**********************************************************************************!*\
  !*** ./src/app/components/shared/banner-promotion/banner-promotion.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BannerPromotionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerPromotionComponent", function() { return BannerPromotionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_banner_promotion_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./banner-promotion.component.html */ "pLD3");
/* harmony import */ var _banner_promotion_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner-promotion.component.sass */ "1HtE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let BannerPromotionComponent = class BannerPromotionComponent {
    constructor() {
        this.contentLoaded = false;
    }
    ngOnInit() {
        setTimeout(() => {
            this.contentLoaded = true;
        }, 3000);
    }
};
BannerPromotionComponent.ctorParameters = () => [];
BannerPromotionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-banner-promotion',
        template: _raw_loader_banner_promotion_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_banner_promotion_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], BannerPromotionComponent);



/***/ }),

/***/ "VFLz":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header/header.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"home-header-yellow\" [ngClass]=\"settings.theme\" [ngClass]=\"{'yellow' : true}\">\r\n  <mat-toolbar color=\"primary\" class=\"kuro\" >\r\n    <mat-toolbar-row class=\"container\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutGap=\"20px\" fxlayoutalign=\"space-between center\">\r\n      <div class=\"logo\">\r\n        <a [routerLink]=\"['/home/four']\" routerLinkActive=\"router-link-active\" ><img src=\"assets/images/logo-tien1.jpg\"></a>\r\n      </div>\r\n      <div fxflexoffset.gt-sm=\"10\"  fxFlex class=\"search-form\">\r\n        <form class=\"search-form\" fxLayout=\"row\">\r\n          <div class=\"form-wrap\">\r\n            <input type=\"text\" placeholder=\"Type to searchssss...\">\r\n            <button class=\"btn-search\" type=\"submit\">Search</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"call-bucket-wrap\" fxLayout=\"row\" fxLayout.sm=\"row\" fxLayoutAlign=\"center center\" >\r\n        <div class=\"info-message-icon\"  fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n          <div class=\"icon\"  fxLayout=\"row\" >\r\n            <mat-icon class=\"mat-icon-lg mat-icon material-icons\">call</mat-icon>\r\n          </div>\r\n          <div class=\"info-text\">\r\n            <p>Helpline:</p>\r\n            <span>02(981)336 111</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"main-menu-wrapper-2\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" >\r\n          <mat-toolbar class=\"top-navbar top menu\">\r\n            <app-shopping-widgets [shoppingCartItems]=\"shoppingCartItems\"></app-shopping-widgets>\r\n          </mat-toolbar>\r\n        </div>\r\n      </div>\r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n</div>\r\n\r\n<div class=\"home-header\" [ngClass]=\"settings.theme\" >\r\n  <mat-toolbar color=\"primary\" class=\"kuro\" >\r\n    <mat-toolbar-row class=\"container\" fxLayout=\"column\" fxLayout.gt-sm=\"row\"   fxLayoutGap=\"20px\" fxlayoutalign=\"space-between center\">\r\n      <div class=\"logo\">\r\n        <a [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\" ><img src=\"assets/images/logo-tien4.png\" style=\"height: 46px;width: 140px;\"></a>\r\n      </div>\r\n      <div  fxflexoffset.gt-sm=\"10\"  fxFlex class=\"search-form\">\r\n        <form class=\"search-form\" fxLayout=\"row\">\r\n          <div class=\"form-wrap\">\r\n            <input type=\"text\" placeholder=\"Busca un producto\">\r\n            <button class=\"btn-search\" type=\"submit\">Buscar</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"call-bucket-wrap\" fxLayout=\"row\" fxLayout.sm=\"row\" fxLayoutAlign=\"center center\" >\r\n        <div class=\"info-message-icon\"  fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n          <div class=\"icon\"  fxLayout=\"row\" >\r\n            <mat-icon class=\"mat-icon-lg mat-icon material-icons\">call</mat-icon>\r\n          </div>\r\n          <div class=\"info-text\">\r\n            <p>Telefono:</p>\r\n            <span>967682083</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"main-menu-wrapper-2\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" >\r\n          <mat-toolbar class=\"top-navbar top menu\">\r\n            <app-shopping-widgets [shoppingCartItems]=\"shoppingCartItems\"></app-shopping-widgets>\r\n          </mat-toolbar>\r\n        </div>\r\n      </div>\r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n</div>\r\n<div class=\"menu-container1\">\r\n  <app-menu></app-menu>\r\n</div>");

/***/ }),

/***/ "VcBL":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/home-decor/home-decor.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Carousel section start-->\r\n<div class=\"carousel-home-decor\">\r\n    <div class=\"container\">\r\n        <div class=\"decor-menu\">\r\n            <app-menu></app-menu>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"carousel-2-wrapper\">\r\n        <ngx-skeleton-loader\r\n            *ngIf=\"!contentLoaded\"\r\n              count=\"1\"\r\n              [theme]=\"{ 'border-radius': '0', height: '551px' }\"\r\n            ></ngx-skeleton-loader>\r\n        <app-main-carousel *ngIf=\"contentLoaded\" [slides]=\"slides\"></app-main-carousel>\r\n        <div *ngIf=\"contentLoaded\" class=\"container \">\r\n            <div class=\"ctn-box\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\">\r\n                <div class=\"slider-categories\" fxFlex=\"100\" fxFlex.gt-md=\"100\" fxFlex.md=\"40\">\r\n                    <div class=\"categories-wrap\">\r\n                        <div class=\"title\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon>menu</mat-icon>\r\n                            <p>TOP CATEGORIES</p>\r\n                        </div>\r\n                        <app-categories-furniture></app-categories-furniture>\r\n                        <div class=\"btn-sale\">\r\n                            <button mat-raised-button color=\"primary\">USE THE DISCOUNT - 60% OFF</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Carousel section end-->\r\n\r\n<!-- Baners section start-->\r\n<div class=\"banners-wrap\">\r\n    <div class=\"container\">\r\n        <div class=\"banners-decor\" fxLayout=\"column\" fxLayout.gt-sm=\"row\" *ngIf=\"banners.length > 0\">\r\n            <div class=\"sec-padding\" fxHide.lt-md fxLayout=\"row\" fxLayout.gt-sm=\"column\" fxLayout.xs=\"column\"\r\n                fxFlex=\"100\" fxFlex.gt-sm=\"30\" class=\"baners\">\r\n                <ngx-skeleton-loader\r\n                    *ngIf=\"!contentLoaded\"\r\n                    count=\"1\"\r\n                    [theme]=\"{ 'border-radius': '0', height: '460px', width: '389px' }\"\r\n                    ></ngx-skeleton-loader>\r\n                <div *ngIf=\"contentLoaded\" class=\"baner first\" [ngStyle]=\"getBgImage(0)\">\r\n                    <div class=\"info\">\r\n                     \r\n                        <div class=\"text-box\">\r\n                            <span>{{getBanner(0).title}}</span>\r\n                            <h4>{{getBanner(0).subtitle}}</h4>\r\n                            <a href=\"#\">Check the new collection</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxFlex=\"100\" class=\"pd-20\">\r\n                <div class=\"bn-wrap\" fxLayout=\"column\" fxFlex=\"50\" fxFlex.gt-sm=\"50\">\r\n                    <div fxLayout=\"row\">\r\n                        <ngx-skeleton-loader\r\n                        *ngIf=\"!contentLoaded\"\r\n                        count=\"1\"\r\n                        [theme]=\"{ 'border-radius': '0', height: '200px', width: '200px', margin: '10px' }\"\r\n                        ></ngx-skeleton-loader>\r\n                        <ngx-skeleton-loader\r\n                        *ngIf=\"!contentLoaded\"\r\n                        count=\"3\"\r\n                        [theme]=\"{ 'border-radius': '0', height: '20px', width: '200px', margin: '10px' }\"\r\n                        ></ngx-skeleton-loader>\r\n                    </div>\r\n                    \r\n                    <div *ngIf=\"contentLoaded\" class=\"baner seccond media\" fxFlex [ngStyle]=\"getBgImage(1)\">\r\n                        <div class=\"info\">\r\n                            <div class=\"text-box \" fxLayout=\"column\">\r\n                                <h4>{{getBanner(1).title}}</h4>\r\n                                <p>{{getBanner(1).subtitle}}</p>\r\n                                <ul>\r\n                                    <li><a href=\"\">Headphones</a></li>\r\n                                    <li><a href=\"\">Laptops</a></li>\r\n                                    <li><a href=\"\">Ipads</a></li>\r\n                                    <li><a href=\"\">Smartphones</a></li>\r\n                                    <li><a href=\"\">Usb</a></li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div fxLayout=\"row\">\r\n                        <ngx-skeleton-loader\r\n                        *ngIf=\"!contentLoaded\"\r\n                        count=\"1\"\r\n                        [theme]=\"{ 'border-radius': '0', height: '200px', width: '200px', margin: '10px' }\"\r\n                        ></ngx-skeleton-loader>\r\n                        <ngx-skeleton-loader\r\n                        *ngIf=\"!contentLoaded\"\r\n                        count=\"3\"\r\n                        [theme]=\"{ 'border-radius': '0', height: '20px', width: '200px', margin: '10px' }\"\r\n                        ></ngx-skeleton-loader>\r\n                    </div>\r\n                    <div *ngIf=\"contentLoaded\" class=\"baner seccond cosmetics\" fxFlex [ngStyle]=\"getBgImage(2)\">\r\n                        <div class=\"info\">\r\n                            <div class=\"text-box \" fxLayout=\"column\">\r\n                                <h4>{{getBanner(2).title}}</h4>\r\n                                <ul>\r\n                                    <li><a href=\"\">Haircare</a></li>\r\n                                    <li><a href=\"\">Barber</a></li>\r\n                                    <li><a href=\"\">Leapstick</a></li>\r\n                                    <li><a href=\"\">Shampoo</a></li>\r\n                                    <li><a href=\"\">Creams</a></li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\" bn-wrap\" fxLayout=\"column\" fxFlex=\"50\" fxFlex.gt-sm=\"50\">\r\n                    <div fxLayout=\"row\">\r\n                        <ngx-skeleton-loader\r\n                        *ngIf=\"!contentLoaded\"\r\n                        count=\"1\"\r\n                        [theme]=\"{ 'border-radius': '0', height: '200px', width: '200px', margin: '10px' }\"\r\n                        ></ngx-skeleton-loader>\r\n                        <ngx-skeleton-loader\r\n                        *ngIf=\"!contentLoaded\"\r\n                        count=\"3\"\r\n                        [theme]=\"{ 'border-radius': '0', height: '20px', width: '200px', margin: '10px' }\"\r\n                        ></ngx-skeleton-loader>\r\n                    </div>\r\n                    <div *ngIf=\"contentLoaded\" class=\"baner seccond decors\" fxFlex [ngStyle]=\"getBgImage(3)\">\r\n                        <div class=\"info\">\r\n                            <div class=\"text-box \" fxLayout=\"column\">\r\n                                <h4>{{getBanner(3).title}}</h4>\r\n                                <ul>\r\n                                    <li><a href=\"\">Chairs</a></li>\r\n                                    <li><a href=\"\">Lambs</a></li>\r\n                                    <li><a href=\"\">Wall art</a></li>\r\n                                    <li><a href=\"\">Pictures</a></li>\r\n                                    <li><a href=\"\">Bedding</a></li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div fxLayout=\"row\">\r\n                        <ngx-skeleton-loader\r\n                        *ngIf=\"!contentLoaded\"\r\n                        count=\"1\"\r\n                        [theme]=\"{ 'border-radius': '0', height: '200px', width: '200px', margin: '10px' }\"\r\n                        ></ngx-skeleton-loader>\r\n                        <ngx-skeleton-loader\r\n                        *ngIf=\"!contentLoaded\"\r\n                        count=\"3\"\r\n                        [theme]=\"{ 'border-radius': '0', height: '20px', width: '200px', margin: '10px' }\"\r\n                        ></ngx-skeleton-loader>\r\n                    </div>\r\n                    <div *ngIf=\"contentLoaded\" class=\"baner seccond electrics\" fxFlex [ngStyle]=\"getBgImage(4)\">\r\n                        <div class=\"info\">\r\n                            <div class=\"text-box \" fxLayout=\"column\">\r\n                                <h4>{{getBanner(4).title}}</h4>\r\n                                <ul>\r\n                                    <li><a href=\"\">Headphones</a></li>\r\n                                    <li><a href=\"\">Laptops</a></li>\r\n                                    <li><a href=\"\">Ipads</a></li>\r\n                                    <li><a href=\"\">Smartphones</a></li>\r\n                                    <li><a href=\"\">Usb</a></li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Baners section start-->\r\n\r\n<!-- Product section start-->\r\n<div class=\"products products-furniture sec-padding\">\r\n    <div class=\"container\">\r\n        <h3>POPULAR ITEMS</h3>\r\n        <mat-tab-group>\r\n\r\n            <mat-tab label=\"FEATURED PRODUCTS\">\r\n\r\n                <app-product-carousel-four [product]=\"products | slice:0:5\"></app-product-carousel-four>\r\n\r\n\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"LATEST PRODUCTS\">\r\n\r\n                <app-product-carousel-four [product]=\"products | slice:5:13\"></app-product-carousel-four>\r\n\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"ON SALE PRODUCTS\">\r\n\r\n                <app-product-carousel-four [product]=\"products | slice:13:22\"></app-product-carousel-four>\r\n\r\n            </mat-tab>\r\n\r\n        </mat-tab-group>\r\n    </div>\r\n\r\n</div>\r\n<!-- Product section end-->\r\n\r\n<!-- Baner section start-->\r\n<section class=\"commercial-banners\" >\r\n    <div class=\"container\">\r\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutGap=\"15px\">\r\n            <!--Image Column-->\r\n            <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\r\n                <ngx-skeleton-loader\r\n                *ngIf=\"!contentLoaded\"\r\n                count=\"1\"\r\n                [theme]=\"{ 'border-radius': '0', height: '309px', margin: '10px', width: '642px' }\"\r\n                ></ngx-skeleton-loader>\r\n                <ngx-skeleton-loader\r\n                *ngIf=\"!contentLoaded\"\r\n                count=\"1\"\r\n                [theme]=\"{ 'border-radius': '0', height: '309px', margin: '10px', width: '642px' }\"\r\n                ></ngx-skeleton-loader>\r\n            </div>\r\n            \r\n            <div *ngIf=\"contentLoaded\" class=\"image-column\" fxFlex=\"50\" fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"space-between center\" >\r\n               \r\n                <div  class=\"\" fxFlex=\"50\">\r\n                    <span>BIG SALLE</span>\r\n                    <h3>Check our best<br>camera offer</h3>\r\n                    <a href=\"\">Check now</a>\r\n                </div>\r\n                <div *ngIf=\"contentLoaded\" class=\"img\" fxFlex=\"50\">\r\n                    <img src=\"assets/images/product/camera_bn.png\" alt=\"\">\r\n                </div>\r\n            </div>\r\n\r\n            <!--Content Column-->\r\n           \r\n            <div *ngIf=\"contentLoaded\" class=\"image-column\" fxFlex=\"50\" fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"space-between center\" >\r\n               \r\n                <div  class=\"\" fxFlex=\"50\">\r\n                    <span>BIG SALLE</span>\r\n                    <h3>Check our best<br>Chairs offer</h3>\r\n                    <a href=\"\">Check now</a>\r\n                </div>\r\n                <div *ngIf=\"contentLoaded\" class=\"img\" fxFlex=\"50\">\r\n                    <img src=\"assets/images/product/chair.png\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n</section>\r\n<!-- Baner section end-->\r\n\r\n<!-- Vertical products start-->\r\n<app-product-vertical [products]=\"products\"></app-product-vertical>\r\n<!-- Vertical products end-->");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sophia-app app\"  [ngClass]=\"settings.theme\" id=\"mainDIV\" style=\"height: 100vh;overflow: auto;\">\r\n    <!-- <ngx-spinner></ngx-spinner> -->\r\n    <app-color-options *ngIf=\"url != '/home'\"></app-color-options>\r\n<router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "WHro":
/*!******************************************************************************!*\
  !*** ./src/app/components/shop/widgets/categories/categories.component.sass ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWVzLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "WUKg":
/*!**************************************************************************!*\
  !*** ./src/app/components/shared/header-three/header-three.component.ts ***!
  \**************************************************************************/
/*! exports provided: HeaderThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderThreeComponent", function() { return HeaderThreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_three_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header-three.component.html */ "x4qe");
/* harmony import */ var _header_three_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-three.component.sass */ "Q8sr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cart.service */ "bjOM");





let HeaderThreeComponent = class HeaderThreeComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.currencies = ['USD', 'EUR'];
        this.flags = [
            { name: 'English', image: 'assets/images/flags/gb.svg' },
            { name: 'German', image: 'assets/images/flags/de.svg' },
            { name: 'French', image: 'assets/images/flags/fr.svg' },
            { name: 'Russian', image: 'assets/images/flags/ru.svg' },
            { name: 'Turkish', image: 'assets/images/flags/tr.svg' }
        ];
        this.shoppingCartItems = [];
        this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
    }
    ngOnInit() {
        this.currency = this.currencies[0];
        this.flag = this.flags[0];
    }
    changeCurrency(currency) {
        this.currency = currency;
    }
    changeLang(flag) {
        this.flag = flag;
    }
};
HeaderThreeComponent.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }
];
HeaderThreeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header-three',
        template: _raw_loader_header_three_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_three_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]])
], HeaderThreeComponent);



/***/ }),

/***/ "Wxyi":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-left-sidebar/product-left-sidebar.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-breadcrumb [title]=\"'Shop'\" [breadcrumb]=\"'Shop'\"></app-breadcrumb>\r\n\r\n<div class=\"left-sidebar-wrapper sec-padding\">\r\n  <div class=\"container\">\r\n    <div class=\"sidebar-wrapper\" fxLayout='row' fxLayout.lt-md=\"column\" >\r\n      <div fxFlex=\"25\" fxFlex.lt-sm=\"100\" class=\"filter-sidenav\" perfectScrollbar>\r\n        <div class=\"toggles-wrapper\" fxLayout=\"column\" fxLayout.lt-md=\"column\">\r\n          <div class=\"toggles\" fxFlex.lt-md=\"100\">\r\n            <mat-accordion>\r\n              <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                  <mat-panel-title>\r\n                      <span>Categorias</span>\r\n                  </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <app-categories></app-categories>\r\n              </mat-expansion-panel>\r\n              <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                  <mat-panel-title>\r\n                      <span>Brands</span>\r\n                  </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div class=\"brands\">\r\n                  <app-brands (brandChanged)=\"onBrendsChanged($event)\"></app-brands>\r\n                </div>\r\n              </mat-expansion-panel>\r\n              <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                  <mat-panel-title>\r\n                      <span>Precio</span>\r\n                  </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <app-price (priceFilters)=\"updatePriceFilters($event)\"></app-price>\r\n              </mat-expansion-panel>\r\n            </mat-accordion>\r\n          </div>\r\n          <div class=\"popular-products\" fxFlex.lt-md=\"100\">\r\n            <app-popular-products></app-popular-products>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"75\" fxFlex.lt-sm=\"100\" class=\"all-products\" ngClass.gt-sm=\"p-left\">\r\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" fxHide.lt-md=\"true\" class=\"filter-row mat-elevation-z1 text-muted\">\r\n            <mat-form-field appearance=\"legacy\">\r\n              <mat-label>Search product</mat-label>\r\n              <input matInput placeholder=\"Placeholder\">\r\n              <mat-icon matSuffix>search</mat-icon>\r\n            </mat-form-field>\r\n            <button *ngIf=\"!sidenavOpen\" mat-icon-button (click)=\"sidenav.toggle()\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <div >\r\n              <select (change)=\"onChangeSorting($event.target.value)\">\r\n                <option value=\"asc\">Ordenar Productos</option>\r\n                <option value=\"asc\">Orden ascendente</option>\r\n                <option value=\"desc\">Orden descendente</option>\r\n                <option value=\"a-z\">Alfabeticamente, A-Z</option>\r\n                <option value=\"z-a\">Alfabeticamente, Z-A</option>\r\n                <option value=\"low\">Precio, menor a mayor</option>\r\n                <option value=\"high\">Precio, mayor a menor</option>\r\n              </select>\r\n            </div>\r\n            <div>\r\n              <button mat-icon-button (click)=\"changeViewType('list', 100)\">\r\n                <mat-icon>view_list</mat-icon>\r\n              </button>\r\n              <button mat-icon-button (click)=\"changeViewType('list', 33.3)\">\r\n                <mat-icon>view_module</mat-icon>\r\n              </button>\r\n              <button mat-icon-button (click)=\"changeViewType('list', 25)\">\r\n                <mat-icon>view_comfy</mat-icon>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        <div [@Animation]=\"animation\" fxLayout=\"row wrap\" class=\"products-wrapper\">\r\n          <div *ngFor=\"let products of allItems | orderBy:sortByOrder | paginate: { itemsPerPage: 12, currentPage: page  }\" fxFlex=\"100\" [fxFlex.gt-sm]=\"viewCol\" fxFlex.sm=\"50\" class=\"col\">\r\n            <div class=\"product-box\">\r\n              <app-product [product]=\"products\"></app-product>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"products.length > 0\" fxLayout=\"row wrap \">\r\n          <div fxFlex=\"100\">\r\n            <mat-card class=\"p-0 text-center no-shadow\">\r\n              <pagination-controls class=\"product-pagination\" autoHide=\"true\" maxSize=\"5\" (pageChange)=\"onPageChanged($event)\"></pagination-controls>\r\n            </mat-card>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "XC3Q":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-details-centered/product-details-centered.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-breadcrumb [title]=\"product?.name\" [breadcrumb]=\"'Product'\"></app-breadcrumb>\r\n<div class=\"container\">\r\n   \r\n    <div class=\"details-wrapper sec-padding\" fxLayout='row' fxLayout.lt-md=\"column\">\r\n      \r\n       <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"80\">\r\n          <div fxLayout=\"row wrap\" fxFlex=\"100\" fxFlex.gt-md=\"100\" fxFlex.gt-sm=\"100\">\r\n              <div fxFlex=\"100\" fxFlex.gt-md=\"50\" fxFlex.md=\"45\">\r\n                  <!-- <mat-card class=\"product-image\">\r\n                     <div *ngFor=\"let image of product.pictures\">\r\n                        <ngx-image-zoom   [thumbImage]=\"image\" [fullImage]=\"image\" zoomMode=\"hover\"\r\n                    ></ngx-image-zoom>\r\n                     </div>\r\n                  </mat-card> -->\r\n                  <mat-card class=\"product-image\">\r\n                    <div>\r\n                       <button mat-icon-button  fxHide=\"false\" fxHide.gt-md>\r\n                          <mat-icon>fullscreen</mat-icon>\r\n                       </button>\r\n                       <img [src]=\"product.pictures[bigProductImageIndex].big\"/>\r\n                    </div>\r\n                    <a (click)=\"openProductDialog(product, bigProductImageIndex)\" style=\"cursor: pointer;\"><mat-icon>zoom_in</mat-icon></a>\r\n                 </mat-card>\r\n\r\n\r\n                <div class=\"small-carousel\">\r\n                    <div class=\"swiper-container\" [swiper]=\"config\">\r\n                        <div class=\"swiper-wrapper\">\r\n                            <div *ngFor=\"let image of product?.pictures; let i=index\" class=\"swiper-slide\">\r\n                                <mat-card (click)=\"selectImage(i)\" class=\"p-1\">\r\n                                    <img [src]=\"image.small\" class=\"swiper-lazy\"/>\r\n                                    <div class=\"swiper-lazy-preloader\"></div>\r\n                                </mat-card>\r\n                            </div>\r\n                        </div>\r\n                        <button mat-icon-button class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n                        <button mat-icon-button class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button>\r\n                    </div>\r\n                </div>\r\n               </div>\r\n               <div fxFlex=\"100\" fxFlex.gt-md=\"50\" fxFlex.md=\"55\" ngClass.gt-sm=\"px-3 m-0\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\r\n\r\n                  <div class=\"product-right text-center\">\r\n                     <div class=\"product-details text-center\">\r\n                        <h2>{{product.name}}</h2>\r\n                        <h4 class=\"text-center\" *ngIf=\"!productService?.catalogMode\"><del>{{product.salePrice | currency:productService?.currency:'symbol'}}</del><span>{{product.discount}}% off</span></h4>\r\n                        <h3 class=\"price text-center\" *ngIf=\"!productService?.catalogMode\">{{product.price | currency:productService?.currency:'symbol'}}</h3>\r\n                        <p class=\"text-muted description\">{{product.description}}</p>\r\n                     </div>\r\n                     <div class=\"py-1 mt-15\">\r\n                        <p>\r\n                           <span class=\"text-muted fw-500\">Avalibility: </span>\r\n                           <span class=\"avalibility\" *ngIf=\"counter <= product.stock\"><span>In Stock</span></span>\r\n                           <span class=\"avalibility\" *ngIf=\"counter > product.stock\"><span>Out of Stock</span></span>\r\n                        </p>\r\n                     </div>\r\n                     <div class=\"quantity\">\r\n                        <span class=\"text-muted fw-500\">Quantity</span>\r\n                        <div fxLayout=\"row\" fxLayout.xs=\"column\"  class=\"text-muted\" fxLayoutAlign=\"center center\">\r\n                           <div fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n                              <button mat-icon-button matTooltip=\"Remove\" (click)=\"decrement()\">\r\n                                 <mat-icon>remove</mat-icon>\r\n                              </button>\r\n                              <input type=\"text\" name=\"quantity\" value=\"{{counter}}\" class=\"form-control input-number\">\r\n                              <button mat-icon-button matTooltip=\"Add\" (click)=\"increment()\">\r\n                                 <mat-icon>add</mat-icon>\r\n                              </button>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"buttons mt-20\">\r\n                        <button mat-raised-button color=\"primary\" class=\"btn-project mr-10\" (click)=\"addToCart(product, counter)\">ADD TO CARD</button>\r\n                        <button mat-raised-button color=\"primary\" class=\"btn-project\" (click)=\"buyNow(product, counter)\">BUY NOW</button>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n          </div>\r\n\r\n          <div class=\"review-wrapper\" fxFlex=\"100\"  fxFlex.md=\"75\">\r\n            <mat-card>\r\n               <mat-tab-group [@.disabled]=\"true\" [selectedIndex]=\"0\">\r\n               <mat-tab label=\"Description\">\r\n                  <div class=\"full-desc lh\">\r\n                     <p class=\"text-muted\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n                  </div>\r\n               </mat-tab>\r\n               <mat-tab label=\"Details\">\r\n                  <div class=\"full-desc lh text-muted\">\r\n                     <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n                     <ul class=\"px-2 mt-1\">\r\n                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\r\n                        <li>Aenean vehicula, tortor gravida elementum tincidunt, justo lorem vestibulum ex, eget egestas arcu tellus in magna. Vivamus gravida, ipsum vel luctus luctus, nisi felis vestibulum est, nec interdum tellus leo quis tellus. Sed sit amet convallis enim, in laoreet orci.</li>\r\n                        <li>Donec et elit at nulla congue interdum sit amet varius erat.</li>\r\n                        <li>Nulla sit amet risus pellentesque, dignissim massa ut, dignissim arcu.</li>\r\n                        <li>Morbi dapibus ligula at faucibus tempus. Aenean vehicula, tortor gravida elementum tincidunt, justo lorem vestibulum ex, eget egestas arcu tellus in magna. Vivamus gravida, ipsum vel luctus luctus, nisi felis vestibulum est, nec interdum tellus leo quis tellus. Sed sit amet convallis enim, in laoreet orci.</li>\r\n                        <li>Nunc sodales justo ut nisi euismod, quis condimentum leo varius.</li>\r\n                     </ul>\r\n                  </div>\r\n               </mat-tab>\r\n               <mat-tab label=\"Reviews\">\r\n                  <div class=\"full-desc lh\">\r\n                     <mat-list class=\"reviews\">\r\n                        <mat-list-item class=\"content\">\r\n                           <img matListAvatar [src]=\"'assets/images/avatars/avatar-1.png'\" alt=\"image\" class=\"review-author\">\r\n                           <p matLine fxLayoutAlign=\"start center\">\r\n                              <span class=\"name\">Martina Solsker</span>\r\n                           </p>\r\n                           <p matLine class=\"text-muted\"><small>22 Mart, 2018 at 18:44</small></p>\r\n                           <p matLine class=\"text\">Integer id eros et mi fringilla imperdiet. In dictum turpis eget magna viverra condimentum. Ut malesuada interdum ultrices. Proin tristique sem pellentesque, posuere dui in, maximus magna. Aenean vehicula, tortor gravida elementum tincidunt, justo lorem vestibulum ex, eget egestas arcu tellus in magna.</p>\r\n                        </mat-list-item>\r\n                        <mat-list-item class=\"content\">\r\n                           <img matListAvatar [src]=\"'assets/images/avatars/avatar-2.png'\" alt=\"image\" class=\"review-author\">\r\n                           <p matLine fxLayoutAlign=\"start center\">\r\n                              <span class=\"name\">Deni Aniston</span>\r\n                           </p>\r\n                           <p matLine class=\"text-muted\"><small>09 Octomber, 2018 at 12:22</small></p>\r\n                           <p matLine class=\"text\">Nulla accumsan, lacus sed suscipit rutrum, turpis augue accumsan metus, in accumsan urna mi vehicula lorem. Pellentesque semper nibh vitae augue placerat finibus. Nulla sed porttitor nunc, quis tristique sem. Quisque in varius nisl. Integer turpis lorem, ultricies sed sem nec, commodo molestie arcu. Nulla finibus ex tortor, et suscipit magna semper consectetur. Cras sit amet metus dui. Maecenas eget dui at ex varius malesuada vel non felis.</p>\r\n                        </mat-list-item>\r\n                        <mat-list-item class=\"content\">\r\n                           <img matListAvatar [src]=\"'assets/images/avatars/avatar-3.png'\" alt=\"image\" class=\"review-author\">\r\n                           <p matLine fxLayoutAlign=\"start center\">\r\n                              <span class=\"name\">Simon Ladger</span>\r\n                           </p>\r\n                           <p matLine class=\"text-muted\"><small>14 December, 2018 at 2:10</small></p>\r\n                           <p matLine class=\"text\">Pellentesque hendrerit vel turpis aliquam placerat. Suspendisse ullamcorper congue feugiat. Etiam gravida metus ac massa posuere venenatis. Pellentesque vehicula lobortis dolor, ac pretium dolor maximus quis. Fusce vitae iaculis mauris, quis posuere ex. Mauris vitae convallis nibh. Etiam eget enim at orci interdum maximus nec in ante.</p>\r\n                        </mat-list-item>\r\n                     </mat-list>\r\n                     <div class=\"writte-reviews mt-40\">\r\n                        <h3 class=\"mt-2\">LEAVE YOUR REVIEW</h3>\r\n                        <div class=\"divider\"></div>\r\n                        <p class=\"mt-2 text-muted\">Your email address will not be published. Required fields are marked *</p>\r\n                        <h3 fxLayoutAlign=\"start center\" class=\"mt-2\">\r\n                           <span>Your Rating:</span>\r\n                           <button mat-icon-button matTooltip=\"Very Dissatisfied\" matTooltipPosition=\"above\">\r\n                              <mat-icon class=\"mat-icon-lg\">sentiment_very_dissatisfied</mat-icon>\r\n                           </button>\r\n                           <button mat-icon-button matTooltip=\"Dissatisfied\" matTooltipPosition=\"above\">\r\n                              <mat-icon class=\"mat-icon-lg\">sentiment_dissatisfied</mat-icon>\r\n                           </button>\r\n                           <button mat-icon-button matTooltip=\"Neutral\" matTooltipPosition=\"above\">\r\n                              <mat-icon class=\"mat-icon-lg\">sentiment_neutral</mat-icon>\r\n                           </button>\r\n                           <button mat-icon-button matTooltip=\"Satisfied\" matTooltipPosition=\"above\">\r\n                              <mat-icon class=\"mat-icon-lg\">sentiment_satisfied</mat-icon>\r\n                           </button>\r\n                           <button mat-icon-button matTooltip=\"Very Satisfied\" matTooltipPosition=\"above\">\r\n                              <mat-icon class=\"mat-icon-lg\">sentiment_very_satisfied</mat-icon>\r\n                           </button>\r\n                        </h3>\r\n                        <form fxLayout=\"row wrap\">\r\n                           <div  fxFlex=\"100\" fxFlex.gt-md=\"50\" fxFlex.md=\"50\" class=\"mt-20 pr-5\" ngClass.sm=\"mt-10\" ngClass.xs=\"mt-10\">\r\n                              <mat-form-field class=\"w-100\">\r\n                                 <input matInput placeholder=\"Your Name (required)\" #name=\"ngModel\" ngModel name=\"name\" required>\r\n                                 <mat-error *ngIf=\"name.invalid\">Please enter a valid message</mat-error>\r\n                              </mat-form-field>\r\n                           </div>\r\n                           <div  fxFlex=\"100\" fxFlex.gt-md=\"50\" fxFlex.md=\"50\" class=\"pl-5 mt-20\" ngClass.sm=\"mt-10\" ngClass.xs=\"mt-10\">\r\n                              <mat-form-field class=\"w-100\">\r\n                                 <input matInput placeholder=\"Your Email (required)\" #email=\"ngModel\" ngModel name=\"email\" required>\r\n                                 <mat-error *ngIf=\"email.invalid\">Please enter a valid message</mat-error>\r\n                              </mat-form-field>\r\n                           </div>\r\n                           <div  fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"mt-20\" ngClass.sm=\"mt-10\" ngClass.xs=\"mt-10\">\r\n                              <mat-form-field class=\"w-100\">\r\n                                 <input matInput placeholder=\"Subject\" #subject=\"ngModel\" ngModel name=\"subject\" required>\r\n                                 <mat-error *ngIf=\"subject.invalid\">Please enter a valid message</mat-error>\r\n                              </mat-form-field>\r\n                           </div>\r\n                           <div  fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"mt-20\" ngClass.sm=\"mt-10\" ngClass.xs=\"mt-10\">\r\n                              <mat-form-field class=\"w-100\">\r\n                                 <textarea placeholder=\"Post content\" matInput rows=\"6\" ngModel name=\"content\" required></textarea>\r\n                              </mat-form-field>\r\n                           </div>\r\n                           <div class=\"button-wrap\" fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n                              <button mat-raised-button color=\"primary\" class=\"btn-project\" type=\"submit\">Submit Review</button>\r\n                           </div>\r\n                        </form>\r\n                     </div>\r\n                  </div>\r\n               </mat-tab>\r\n               </mat-tab-group>\r\n            </mat-card>\r\n         </div>\r\n\r\n         <div class=\"products sec-padding\">\r\n            <div class=\"title\">\r\n                <h4 class=\"widget-title\">Featured Products</h4>\r\n              </div>\r\n          <app-product-carousel-three [product]=\"products | slice:0:6\"></app-product-carousel-three>\r\n         </div>\r\n       </div>\r\n       <div fxFlex=\"20\" fxFlex.lt-sm=\"100\" class=\"filter-sidenav\" perfectScrollbar>\r\n         <div class=\"toggles-wrapper\" fxLayout=\"column\" fxLayout.lt-md=\"column\">\r\n             <div class=\"toggles\" fxFlex.lt-md=\"100\">\r\n                 <mat-accordion>\r\n                     <mat-expansion-panel>\r\n                       <mat-expansion-panel-header>\r\n                         <mat-panel-title>\r\n                             <span>Categories</span>\r\n                         </mat-panel-title>\r\n                       </mat-expansion-panel-header>\r\n                   <app-categories></app-categories>\r\n                     </mat-expansion-panel>\r\n                     <mat-expansion-panel>\r\n                         <mat-expansion-panel-header>\r\n                           <mat-panel-title>\r\n                               <span>Brands</span>\r\n                           </mat-panel-title>\r\n                         </mat-expansion-panel-header>\r\n\r\n                         <div class=\"brands\">\r\n                            <app-brands></app-brands>\r\n                          </div>\r\n                       </mat-expansion-panel>\r\n                       <mat-expansion-panel>\r\n                           <mat-expansion-panel-header>\r\n                             <mat-panel-title>\r\n                                 <span>Price</span>\r\n                             </mat-panel-title>\r\n                           </mat-expansion-panel-header>\r\n\r\n                           <app-price></app-price>\r\n                         </mat-expansion-panel>\r\n                   </mat-accordion>\r\n             </div>\r\n                 <div class=\"popular-products\" fxFlex.lt-md=\"100\">\r\n                   <app-popular-products></app-popular-products>\r\n                 </div>\r\n         </div>\r\n\r\n         </div>\r\n\r\n    </div>\r\n    <!-- <div class=\"py-2 mt-2\">\r\n       <h2>Related Products</h2>\r\n       <div class=\"divider\"></div>\r\n       <app-products-carousel [products]=\"relatedProducts\"></app-products-carousel>\r\n       </div> -->\r\n\r\n\r\n");

/***/ }),

/***/ "XxZA":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header-seven/header-seven.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div >\r\n    <div class=\"container\"fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutGap=\"20px\" fxlayoutalign=\"space-between center\">\r\n      <div class=\"logo\">\r\n          <a href=\"\" [routerLink]=\"['/home/one']\" routerLinkActive=\"router-link-active\" ><img src=\"assets/images/logo-01.png\"></a>\r\n      </div>\r\n      <div fxflexoffset.gt-sm=\"10\"  fxFlex class=\"search-form\">\r\n       <form class=\"search-form\" fxLayout=\"row\">\r\n         <div class=\"form-wrap\">\r\n            <input type=\"text\" placeholder=\"Type to search...\">\r\n            <button class=\"btn-search\" mat-raised-button color=\"primary\" type=\"submit\">Search</button>\r\n         </div>\r\n       </form>\r\n      </div>\r\n      <div class=\"call-bucket-wrap\" fxLayout=\"row\" fxLayout.sm=\"row\" fxLayoutAlign=\"center center\" >\r\n        <div class=\"info-message-icon\"  fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n          <div class=\"widgets-left\" fxLayout=\"row\">\r\n            <div class=\"widget-text user\">\r\n              <a fxShow=\"false\" fxShow.gt-xs [routerLink]=\"['/pages/my-account']\" routerLinkActive=\"router-link-active\" ><mat-icon class=\"mat-icon-lg mat-icon material-icons mr-10\">perm_identity</mat-icon></a>\r\n            </div>\r\n            <div class=\"widget-text\">\r\n              <a fxShow=\"false\" fxShow.gt-xs [routerLink]=\"['/pages/wishlist']\" routerLinkActive=\"router-link-active\" ><mat-icon class=\"mat-icon-lg mat-icon material-icons mr-10\">favorite_border</mat-icon></a>\r\n            </div>\r\n            <div class=\"widget-text\">\r\n              <a fxShow=\"false\" fxShow.gt-xs [routerLink]=\"['/pages/compare']\" routerLinkActive=\"router-link-active\" ><mat-icon>cached</mat-icon></a>\r\n            </div>\r\n           \r\n          </div>\r\n        </div>\r\n        <div class=\"main-menu-wrapper-2\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" >\r\n            <mat-toolbar class=\"top-navbar top menu\">\r\n              <app-shopping-widgets-two [shoppingCartItems]=\"shoppingCartItems\"></app-shopping-widgets-two>\r\n            </mat-toolbar>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "Y4OL":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-right-sidebar/product-right-sidebar.component.sass ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LXJpZ2h0LXNpZGViYXIuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "Ywm1":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-details/product-details.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-breadcrumb [title]=\"product?.name\" [breadcrumb]=\"'Product'\"></app-breadcrumb>\r\n<div class=\"container\">\r\n  <div class=\"details-wrapper sec-padding\" >\r\n    <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"80\">\r\n      <div fxLayout=\"row wrap\" fxFlex=\"100\" fxFlex.gt-md=\"100\" fxFlex.gt-sm=\"100\">\r\n        <div fxFlex=\"100\" fxFlex.gt-md=\"50\" fxFlex.md=\"45\">\r\n            <!-- <mat-card class=\"product-image\">\r\n                <div *ngFor=\"let image of product.pictures\">\r\n                  <ngx-image-zoom   [thumbImage]=\"image\" [fullImage]=\"image\" zoomMode=\"hover\"\r\n              ></ngx-image-zoom>\r\n                </div>\r\n            </mat-card> -->\r\n          <mat-card class=\"product-image\">\r\n            <div>\r\n                <button mat-icon-button  fxHide=\"false\" fxHide.gt-md>\r\n                  <mat-icon>fullscreen</mat-icon>\r\n                </button>\r\n                <img [src]=\"product.pictures[bigProductImageIndex].big\"/>\r\n            </div>\r\n            <a (click)=\"openProductDialog(product, bigProductImageIndex)\" style=\"cursor: pointer;\"><mat-icon>zoom_in</mat-icon></a>\r\n          </mat-card>\r\n\r\n          <div class=\"small-carousel\">\r\n            <div class=\"swiper-container\" [swiper]=\"config\">\r\n              <div class=\"swiper-wrapper\">\r\n                <div *ngFor=\"let image of product?.pictures; let i=index\" class=\"swiper-slide\">\r\n                  <mat-card (click)=\"selectImage(i)\" class=\"p-1\">\r\n                      <img [src]=\"image.small\" class=\"swiper-lazy\"/>\r\n                      <div class=\"swiper-lazy-preloader\"></div>\r\n                  </mat-card>\r\n                </div>\r\n              </div>\r\n              <button mat-icon-button class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n              <button mat-icon-button class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div fxFlex=\"100\" fxFlex.gt-md=\"50\" fxFlex.md=\"55\" ngClass.gt-sm=\"px-3 m-0\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\r\n          <div class=\"product-right\">\r\n            <div class=\"product-details\">\r\n              <h2>{{product.name}}</h2>\r\n              <!-- <h4 *ngIf=\"!productsService?.catalogMode\"><del>{{product.salePrice | currency:productsService?.currency:'symbol'}}</del><span>{{product.discount}}% off</span></h4> -->\r\n              <h3 class=\"price\" *ngIf=\"!productsService?.catalogMode\">{{product.price | currency:productsService?.currency:'symbol'}}</h3>\r\n              <p class=\"text-muted description\">{{product.description}}</p>\r\n            </div>\r\n            <div class=\"py-1 mt-15\">\r\n              <p>\r\n                <span class=\"text-muted fw-500\">Disponibilidad: </span>\r\n                <span class=\"avalibility\" *ngIf=\"counter <= product.stock\"><span>En Stock</span></span>\r\n                <span class=\"avalibility\" *ngIf=\"counter > product.stock\"><span class=\"red\">Agotado</span></span>\r\n              </p>\r\n            </div>\r\n            <div class=\"quantity\">\r\n              <span class=\"text-muted fw-500\">Cantidad</span>\r\n              <div fxLayout=\"row\" fxLayout.xs=\"column\"  class=\"text-muted\">\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n                  <button mat-icon-button matTooltip=\"Remove\" (click)=\"decrement()\">\r\n                    <mat-icon>remove</mat-icon>\r\n                  </button>\r\n                  <input type=\"text\" name=\"quantity\" value=\"{{counter}}\" class=\"form-control input-number\">\r\n                  <button mat-icon-button matTooltip=\"Add\" (click)=\"increment()\">\r\n                    <mat-icon>add</mat-icon>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"buttons mt-20\">\r\n              <button mat-raised-button color=\"primary\" class=\"btn-project mr-10\" (click)=\"addToCart(product, counter)\">AGREGAR</button>\r\n              <button mat-raised-button color=\"primary\" class=\"btn-project\" (click)=\"buyNow(product, counter)\">COMPRAR AHORA</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"review-wrapper\" fxFlex=\"100\"  fxFlex.md=\"75\">\r\n        <mat-card>\r\n          <mat-tab-group [@.disabled]=\"true\" [selectedIndex]=\"0\">\r\n            <mat-tab label=\"Características\">\r\n              <div class=\"full-desc lh\">\r\n                <p *ngFor=\"let description of product?.features; let i=index\" class=\"text-muted\">{{ description }}</p>\r\n              </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"Especificaciones\">\r\n              <div class=\"full-desc lh text-muted\">\r\n                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n                <ul class=\"px-2 mt-1\">\r\n                  <li *ngFor=\"let item of product?.specifications; let i=index\">{{ item }}</li>\r\n                </ul>\r\n              </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"Reviews\">\r\n              <div class=\"full-desc lh\">\r\n                <ul class=\"px-2 mt-1\">\r\n                  <li *ngFor=\"let item of product?.functions; let i=index\">{{ item }}</li>\r\n                </ul>\r\n              </div>\r\n            </mat-tab>\r\n          </mat-tab-group>\r\n        </mat-card>\r\n      </div>\r\n\r\n      <div class=\"products sec-padding\">\r\n        <div class=\"title\">\r\n          <h4 class=\"widget-title\">Productos relacionaos</h4>\r\n        </div>\r\n        <app-product-carousel-three [product]=\"products | slice:0:6\"></app-product-carousel-three>\r\n      </div>\r\n    </div>\r\n    <div fxLayout=\"row wrap\" fxHide fxShow.gt-sm fxFlex=\"100\" fxFlex.gt-sm=\"22\">\r\n      <div fxFlex=\"100\"  >\r\n        <div fxLayout=\"row wrap\" class=\"info-bar\" ngClass.gt-md=\"m-0\">\r\n          <div fxFlex=\"100\" >\r\n            <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"mat-icon-xlg  m-0\">card_giftcard</mat-icon>\r\n                <div class=\"content ml-10\">\r\n                  <p>BONUS PLUS</p>\r\n                  <span class=\"text-muted m-0\">Obtén un bonus por la compra de 3 productos.</span>\r\n                </div>\r\n            </mat-card>\r\n          </div>\r\n          <div fxFlex=\"100\" >\r\n            <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"mat-icon-xlg  m-0\">local_shipping</mat-icon>\r\n                <div class=\"content ml-10\">\r\n                  <p>ENVÍO GRATIS</p>\r\n                  <span class=\"text-muted m-0\">Envío gratis por la compra de tus productos</span>\r\n                </div>\r\n            </mat-card>\r\n          </div>\r\n          <div fxFlex=\"100\"  class=\"mt-16\">\r\n            <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"mat-icon-xlg m-0\">monetization_on</mat-icon>\r\n                <div class=\"content ml-10\">\r\n                  <p>GARANTÍA DE DEVOLUCIÓN DE DINERO</p>\r\n                  <span class=\"text-muted m-0\">Política de devolución</span>\r\n                </div>\r\n            </mat-card>\r\n          </div>\r\n          <div fxFlex=\"100\"  class=\"mt-16\">\r\n            <mat-card class=\"light-block no-border\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"mat-icon-xlg m-0\">history</mat-icon>\r\n                <div class=\"content ml-10\">\r\n                  <p>SOPORTE ONLINE 24/7</p>\r\n                  <span class=\"text-muted m-0\">Llamanos al: 967682083</span>\r\n                </div>\r\n            </mat-card>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "Z2Ct":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/industrial/industrial.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <ngx-skeleton-loader\r\n              *ngIf=\"!contentLoaded\"\r\n                [theme]=\"{ 'border-radius': '0', height: '550px'  }\"\r\n                count=\"1\"\r\n              ></ngx-skeleton-loader>\r\n    <app-main-carousel *ngIf=\"contentLoaded\" [slides]=\"slides\"></app-main-carousel>\r\n  </div>\r\n<div class=\"industrial-home-wrap\">\r\n    <div class=\"products-industrial sec-padding\">\r\n        <div class=\"container\">\r\n            <mat-tab-group>\r\n\r\n                <mat-tab label=\"FEATURED PRODUCTS\">\r\n\r\n                    <app-product-carousel [product]=\"products | slice:0:8\"></app-product-carousel>\r\n\r\n                </mat-tab>\r\n\r\n                <mat-tab label=\"LATEST PRODUCTS\">\r\n\r\n                    <app-product-carousel [product]=\"products | slice:0:14\"></app-product-carousel>\r\n\r\n                </mat-tab>\r\n\r\n                <mat-tab label=\"ON SALE PRODUCTS\">\r\n\r\n                    <app-product-carousel [product]=\"products | slice:14:22\"></app-product-carousel>\r\n\r\n                </mat-tab>\r\n\r\n            </mat-tab-group>\r\n        </div>\r\n    </div>\r\n    <div class=\"categories sec-padding\">\r\n        <div class=\"container\">\r\n            <div class=\"title\">\r\n                <h3>BROWSE</h3>\r\n            </div>\r\n\r\n            <div class=\"categories-section sec-padding\" fxLayout=\"row\" fxLayout.lt-md=\"column\"\r\n                fxLayoutAlign=\"start start\" class=\"p-0\">\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"left-section\">\r\n                    <ngx-skeleton-loader\r\n                    *ngIf=\"!contentLoaded\"\r\n                      [theme]=\"{ 'border-radius': '0', height: '400px'  }\"\r\n                      count=\"1\"\r\n                    ></ngx-skeleton-loader>\r\n                    <div *ngIf=\"contentLoaded\" class=\"item mb-15\">\r\n                        <div class=\"product\">\r\n                            <img src=\"assets/images/category1.png\" alt=\"\">\r\n                        </div>\r\n                        <div class=\"product-info\">\r\n                            <h4><a href=\"\">Emergency & Exit Lights</a></h4>\r\n                            <ul>\r\n\r\n                                <li><a href=\"\">Central Battery Systems</a> </li>\r\n                                <li><a href=\"\">Central Monitoring Systems</a> </li>\r\n                                <li><a href=\"\">Emergency Lights</a> </li>\r\n                                <li><a href=\"\">Exit Lights</a> </li>\r\n                                <li><a href=\"\">LED Emergency Lights</a> </li>\r\n                                <li><a href=\"\">LED Exit Lights</a> </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"banerCo\" fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"start start\">\r\n                        <ngx-skeleton-loader\r\n                    *ngIf=\"!contentLoaded\"\r\n                      [theme]=\"{ 'border-radius': '0', height: '247px', width: '314px'  }\"\r\n                      count=\"1\"\r\n                    ></ngx-skeleton-loader>\r\n                        <div *ngIf=\"contentLoaded\" class=\"item mr-7 h\">\r\n                            <div class=\"product\">\r\n                                <img src=\"assets/images/category2.png\" alt=\"\">\r\n                            </div>\r\n                            <div class=\"product-info\">\r\n                                <h4><a href=\"\">Emergency & Exit Lights </a></h4>\r\n                                <ul>\r\n                                    <li><a href=\"\"> Fluorescent Battery Kits</a> </li>\r\n                                    <li><a href=\"\"> LED Battery Kits</a> </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                        <ngx-skeleton-loader\r\n                        *ngIf=\"!contentLoaded\"\r\n                          [theme]=\"{ 'border-radius': '0', height: '247px', width: '314px'  }\"\r\n                          count=\"1\"\r\n                        ></ngx-skeleton-loader>\r\n                        <div *ngIf=\"contentLoaded\" class=\"item ml-7 h\">\r\n                            <div class=\"product\">\r\n                                <img src=\"assets/images/category3.png\" alt=\"\">\r\n                            </div>\r\n                            <div class=\"product-info\">\r\n                                <h4><a href=\"\">LED Drivers\r\n                                    </a></h4>\r\n                                <ul>\r\n                                    <li><a href=\"\"> Constant Current</a> </li>\r\n                                    <li><a href=\"\"> Constant Voltage</a> </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"right-section\">\r\n                    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"start start\">\r\n                        <ngx-skeleton-loader\r\n                        *ngIf=\"!contentLoaded\"\r\n                          [theme]=\"{ 'border-radius': '0', height: '247px', width: '314px'  }\"\r\n                          count=\"1\"\r\n                        ></ngx-skeleton-loader>\r\n                        <div *ngIf=\"contentLoaded\" class=\"item mr-7 h\">\r\n                            <div class=\"product\">\r\n                                <img src=\"assets/images/category4.png\" alt=\"\">\r\n                            </div>\r\n                            <div class=\"product-info\">\r\n                                <h4><a href=\"\">LED Lighting\r\n                                    </a></h4>\r\n                                <ul>\r\n                                    <li><a href=\"\"> LED Downlights</a> </li>\r\n                                    <li><a href=\"\">LED Panels</a> </li>\r\n                                    <li><a href=\"\">LED Strips</a> </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                        <ngx-skeleton-loader\r\n                        *ngIf=\"!contentLoaded\"\r\n                          [theme]=\"{ 'border-radius': '0', height: '247px', width: '314px'  }\"\r\n                          count=\"1\"\r\n                        ></ngx-skeleton-loader>\r\n                        <div  *ngIf=\"contentLoaded\" class=\"item ml-7 h\">\r\n                            <div class=\"product\">\r\n                                <img src=\"assets/images/category5.png\" alt=\"\">\r\n                            </div>\r\n                            <div class=\"product-info\">\r\n                                <h4><a href=\"\">KNX</a></h4>\r\n                                <ul>\r\n                                    <li><a href=\"\"></a>KNX Dual Sensor</li>\r\n                                    <li><a href=\"\">KNX Power Supply</a> </li>\r\n                                    <li><a href=\"\">Line Coupler</a> </li>\r\n                                    <li><a href=\"\">Switching Actuators</a> </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <ngx-skeleton-loader\r\n                    *ngIf=\"!contentLoaded\"\r\n                      [theme]=\"{ 'border-radius': '0', height: '400px'  }\"\r\n                      count=\"1\"\r\n                    ></ngx-skeleton-loader>\r\n                    <div *ngIf=\"contentLoaded\" class=\"item mt-15\">\r\n                        <div class=\"product\">\r\n                            <img src=\"assets/images/category6.png\" alt=\"\">\r\n                        </div>\r\n                        <div class=\"product-info\">\r\n                            <h4><a href=\"\">Emergency & Exit Lights\r\n                                </a></h4>\r\n                            <ul>\r\n                                Damper Actuators\r\n                                <li><a href=\"\">Heating Cables</a> </li>\r\n                                <li><a href=\"\">Sensors</a> </li>\r\n                                <li><a href=\"\">Thermostats</a> </li>\r\n                                <li><a href=\"\">Transformers</a> </li>\r\n                                <li><a href=\"\">Valves & Actuators</a> </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"info-wrap-industrial sec-padding\">\r\n        <div class=\"container\">\r\n            <div fxLayout=\"row wrap\" class=\"info-bar\">\r\n                <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n                    <div class=\"light-block\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\r\n                        <ngx-skeleton-loader\r\n                        *ngIf=\"!contentLoaded\"\r\n                          [theme]=\"{ 'border-radius': '0', height: '74px', width: '74px'  }\"\r\n                          count=\"1\"\r\n                        ></ngx-skeleton-loader>\r\n                        <div class=\"icon\" *ngIf=\"contentLoaded\">\r\n                            \r\n                            <mat-icon  mat-stroked-button color=\"primary\" class=\"mat-icon-xlg  m-0\">card_giftcard\r\n                            </mat-icon>\r\n                        </div>\r\n                        <ngx-skeleton-loader\r\n                            *ngIf=\"!contentLoaded\"\r\n                              [theme]=\"{ 'border-radius': '0', height: '20px', width: '74px' }\"\r\n                              count=\"2\"\r\n                            ></ngx-skeleton-loader>\r\n                        <div *ngIf=\"contentLoaded\" class=\"content\">\r\n                            \r\n                            <p >BONUS PLUS</p>\r\n                            <span *ngIf=\"contentLoaded\" class=\"text-muted m-0\">Get a bonus plus for buying more that three products</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n                    <div class=\"light-block\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\r\n                        <ngx-skeleton-loader\r\n                        *ngIf=\"!contentLoaded\"\r\n                          [theme]=\"{ 'border-radius': '0', height: '74px', width: '74px'  }\"\r\n                          count=\"1\"\r\n                        ></ngx-skeleton-loader>\r\n                        <div *ngIf=\"contentLoaded\" class=\"icon\">\r\n                            <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg  m-0\">local_shipping\r\n                            </mat-icon>\r\n                        </div>\r\n                        <ngx-skeleton-loader\r\n                        *ngIf=\"!contentLoaded\"\r\n                          [theme]=\"{ 'border-radius': '0', height: '20px', width: '74px' }\"\r\n                          count=\"2\"\r\n                        ></ngx-skeleton-loader>\r\n                        <div *ngIf=\"contentLoaded\" class=\"content\">\r\n                            <p>FREE SHIPPING</p>\r\n                            <span class=\"text-muted m-0\">Free shipping on all orders over $99</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n                    <div class=\"light-block\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\r\n                        <ngx-skeleton-loader\r\n                        *ngIf=\"!contentLoaded\"\r\n                          [theme]=\"{ 'border-radius': '0', height: '74px', width: '74px'  }\"\r\n                          count=\"1\"\r\n                        ></ngx-skeleton-loader>\r\n                        <div *ngIf=\"contentLoaded\" class=\"icon\">\r\n                            <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg m-0\">monetization_on\r\n                            </mat-icon>\r\n                        </div>\r\n                        <ngx-skeleton-loader\r\n                        *ngIf=\"!contentLoaded\"\r\n                          [theme]=\"{ 'border-radius': '0', height: '20px', width: '74px' }\"\r\n                          count=\"2\"\r\n                        ></ngx-skeleton-loader>\r\n                        <div *ngIf=\"contentLoaded\" class=\"content\">\r\n                            <p>MONEY BACK GUARANTEE</p>\r\n                            <span class=\"text-muted m-0\">100% money back guarantee</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n                    <div class=\"light-block no-bd\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\r\n                        <ngx-skeleton-loader\r\n                        *ngIf=\"!contentLoaded\"\r\n                          [theme]=\"{ 'border-radius': '0', height: '74px', width: '74px'  }\"\r\n                          count=\"1\"\r\n                        ></ngx-skeleton-loader>\r\n                        <div *ngIf=\"contentLoaded\" class=\"icon\" appearance=\"outline\" color=\"primary\">\r\n                            <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg m-0\">history</mat-icon>\r\n                        </div>\r\n                        <ngx-skeleton-loader\r\n                        *ngIf=\"!contentLoaded\"\r\n                          [theme]=\"{ 'border-radius': '0', height: '20px', width: '74px' }\"\r\n                          count=\"2\"\r\n                        ></ngx-skeleton-loader>\r\n                        <div  *ngIf=\"contentLoaded\" class=\"content\">\r\n                            <p>ONLINE SUPPORT 24/7</p>\r\n                            <span class=\"text-muted m-0\">Call us: 02 3555 65454 55</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <ngx-skeleton-loader\r\n            *ngIf=\"!contentLoaded\"\r\n              [theme]=\"{ 'border-radius': '0', height: '100px' }\"\r\n              count=\"1\"\r\n            ></ngx-skeleton-loader>\r\n            <mat-toolbar *ngIf=\"contentLoaded\" color=\"primary\" class=\"subscribe\">\r\n               \r\n                <div  class=\"subscribe-wrap\">\r\n                    <div class=\"\">\r\n                        <p>Check for the existing products at the moment, and new discounts</p>\r\n                    </div>\r\n                    <div class=\"form-wrap\" fxLayout=\"row\">\r\n                        <div class=\"inputIc\"> <input type=\"text\" id=\"name\" name=\"name\"\r\n                                placeholder=\"Search for desired products\"></div>\r\n\r\n                        <button mat-raised-button color=\"primary\">SUBSCRIBE</button>\r\n                    </div>\r\n                </div>\r\n            </mat-toolbar>\r\n        </div>\r\n    </div>\r\n    <div class=\"blog-industrial-container sec-padding\">\r\n        <div class=\"container\">\r\n            <div class=\"section-title\">\r\n                <ngx-skeleton-loader\r\n            *ngIf=\"!contentLoaded\"\r\n              [theme]=\"{ 'border-radius': '0', height: '20px' }\"\r\n              count=\"2\"\r\n            ></ngx-skeleton-loader>\r\n                <h3  *ngIf=\"contentLoaded\">Latest news</h3>\r\n                <p  *ngIf=\"contentLoaded\">Business analytics (BA) is the practice of iterative, methodical exploration of an<br>\r\n                    organization's data with emphasis on statistical analysis.</p>\r\n            </div>\r\n            <div class=\"blog-wrapper\" fxLayout=\"column\" fxLayout.gt-sm=\"row\">\r\n                <div class=\"blog\" fxFlex>\r\n                    <div class=\"info\">\r\n                        <div class=\"text-box\" fxLayout=\"column\">\r\n                            <ngx-skeleton-loader\r\n                            *ngIf=\"!contentLoaded\"\r\n                            [theme]=\"{ 'border-radius': '0', height: '20px' }\"\r\n                            count=\"3\"\r\n                            ></ngx-skeleton-loader>\r\n                            <div *ngIf=\"contentLoaded\" class=\"brand\">Brand</div>\r\n                            <h4 *ngIf=\"contentLoaded\">How to improve your market</h4>\r\n                            <p *ngIf=\"contentLoaded\">Great pleasure to take a trivial example, which of us undertakes laborious.</p>\r\n                            <a *ngIf=\"contentLoaded\" href=\"#\">See More</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"blog\" fxFlex>\r\n                    <div class=\"info\">\r\n                        <div class=\"text-box\" fxLayout=\"column\">\r\n                            <ngx-skeleton-loader\r\n                            *ngIf=\"!contentLoaded\"\r\n                            [theme]=\"{ 'border-radius': '0', height: '20px' }\"\r\n                            count=\"3\"\r\n                            ></ngx-skeleton-loader>\r\n                            <div *ngIf=\"contentLoaded\" class=\"brand\">Brand</div>\r\n                            <h4 *ngIf=\"contentLoaded\">How to improve your market</h4>\r\n                            <p *ngIf=\"contentLoaded\">Great pleasure to take a trivial example, which of us undertakes laborious.</p>\r\n                            <a *ngIf=\"contentLoaded\" href=\"#\">See More</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"blog\" fxFlex>\r\n                    <div class=\"info\">\r\n                        <div class=\"text-box\" fxLayout=\"column\">\r\n                            <ngx-skeleton-loader\r\n                            *ngIf=\"!contentLoaded\"\r\n                            [theme]=\"{ 'border-radius': '0', height: '20px' }\"\r\n                            count=\"3\"\r\n                            ></ngx-skeleton-loader>\r\n                            <div *ngIf=\"contentLoaded\" class=\"brand\">Brand</div>\r\n                            <h4 *ngIf=\"contentLoaded\">How to improve your market</h4>\r\n                            <p *ngIf=\"contentLoaded\">Great pleasure to take a trivial example, which of us undertakes laborious.</p>\r\n                            <a *ngIf=\"contentLoaded\" href=\"#\">See More</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n</div>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _components_demo_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/demo/demo.component */ "xw5f");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var ngx_img_zoom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-img-zoom */ "Pld7");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-skeleton-loader */ "WzhS");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _components_shop_shop_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/shop/shop.module */ "+G06");
/* harmony import */ var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/shared/shared.module */ "hGdz");
/* harmony import */ var _components_color_options_color_options_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/color-options/color-options.component */ "0UTT");
















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_demo_demo_component__WEBPACK_IMPORTED_MODULE_7__["DemoComponent"],
            _components_main_main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"],
            _components_color_options_color_options_component__WEBPACK_IMPORTED_MODULE_15__["ColorOptionsComponent"]
        ],
        imports: [
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
            _components_shop_shop_module__WEBPACK_IMPORTED_MODULE_13__["ShopModule"],
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_10__["NgxSkeletonLoaderModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
            ngx_img_zoom__WEBPACK_IMPORTED_MODULE_9__["NgxImgZoomModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "ZLB0":
/*!**************************************************************************!*\
  !*** ./src/app/components/shop/main-carousel/main-carousel.component.ts ***!
  \**************************************************************************/
/*! exports provided: MainCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainCarouselComponent", function() { return MainCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_main_carousel_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./main-carousel.component.html */ "RDHc");
/* harmony import */ var _main_carousel_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-carousel.component.sass */ "iKZG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let MainCarouselComponent = class MainCarouselComponent {
    constructor() {
        this.slides = [];
        this.config = {};
        this.pagination = {
            el: '.swiper-pagination',
            clickable: true
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.config = {
            slidesPerView: 1,
            spaceBetween: 0,
            initialSlide: 5,
            keyboard: true,
            navigation: true,
            pagination: this.pagination,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false
            },
            speed: 500,
            effect: "slide"
        };
    }
};
MainCarouselComponent.ctorParameters = () => [];
MainCarouselComponent.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['slides',] }]
};
MainCarouselComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-main-carousel',
        template: _raw_loader_main_carousel_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_main_carousel_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], MainCarouselComponent);



/***/ }),

/***/ "ZTDE":
/*!**********************************************************************!*\
  !*** ./src/app/components/shared/footer-two/footer-two.component.ts ***!
  \**********************************************************************/
/*! exports provided: FooterTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterTwoComponent", function() { return FooterTwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_two_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer-two.component.html */ "6Lcu");
/* harmony import */ var _footer_two_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer-two.component.sass */ "1Toy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let FooterTwoComponent = class FooterTwoComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterTwoComponent.ctorParameters = () => [];
FooterTwoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer-two',
        template: _raw_loader_footer_two_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_two_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], FooterTwoComponent);



/***/ }),

/***/ "ZWR3":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-carousel-four/product-carousel-four.component.sass ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWNhcm91c2VsLWZvdXIuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "a/SU":
/*!************************************************************************************!*\
  !*** ./src/app/components/shared/blog-section-two/blog-section-two.component.sass ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLXNlY3Rpb24tdHdvLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "a7ud":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/sidebar/sidebar.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "a8iJ":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/shop/industrial/main-carousel-industrial/main-carousel-industrial.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: MainCarouselIndustrialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainCarouselIndustrialComponent", function() { return MainCarouselIndustrialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_main_carousel_industrial_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./main-carousel-industrial.component.html */ "rZKE");
/* harmony import */ var _main_carousel_industrial_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-carousel-industrial.component.sass */ "BhY8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let MainCarouselIndustrialComponent = class MainCarouselIndustrialComponent {
    constructor() {
        this.slides = [];
        this.config = {};
        this.pagination = {
            el: '.swiper-pagination',
            clickable: true
        };
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.config = {
            slidesPerView: 1,
            spaceBetween: 0,
            initialSlide: 5,
            keyboard: true,
            navigation: true,
            pagination: this.pagination,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false
            },
            speed: 500,
            effect: "slide"
        };
    }
};
MainCarouselIndustrialComponent.ctorParameters = () => [];
MainCarouselIndustrialComponent.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['slides',] }]
};
MainCarouselIndustrialComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-main-carousel-industrial',
        template: _raw_loader_main_carousel_industrial_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_main_carousel_industrial_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], MainCarouselIndustrialComponent);



/***/ }),

/***/ "akXh":
/*!*****************************************!*\
  !*** ./src/app/modals/product.model.ts ***!
  \*****************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
    constructor(id, name, price, salePrice, discount, pictures, type, shortDetails, description, features, specifications, functions, stock, state, newPro, brand, sale, category, tags, colors) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.type = type;
        this.salePrice = salePrice;
        this.discount = discount;
        this.pictures = pictures;
        this.shortDetails = shortDetails;
        this.description = description;
        this.features = features,
            this.specifications = specifications,
            this.functions = functions,
            this.stock = stock;
        this.newPro = newPro;
        this.brand = brand;
        this.sale = sale;
        this.category = category;
        this.tags = tags;
        this.colors = colors;
        this.state = state;
    }
}


/***/ }),

/***/ "bS0m":
/*!*******************************************************************!*\
  !*** ./src/app/components/shop/products/price/price.component.ts ***!
  \*******************************************************************/
/*! exports provided: PriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceComponent", function() { return PriceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_price_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./price.component.html */ "92MC");
/* harmony import */ var _price_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./price.component.sass */ "ArGO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let PriceComponent = class PriceComponent {
    constructor() {
        this.priceFrom = 750;
        this.priceTo = 1599;
        // Using Output EventEmitter
        this.priceFilters = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        // define min, max and range
        this.min = 100;
        this.max = 1000;
        this.range = [100, 1000];
    }
    ngOnInit() { }
    // rangeChanged
    priceChanged(event) {
        setInterval(() => {
            this.priceFilters.emit(event);
        }, 1000);
    }
    priceFilter() {
        this.priceFilters.emit({
            priceFrom: this.priceFrom,
            priceTo: this.priceTo
        });
    }
};
PriceComponent.ctorParameters = () => [];
PriceComponent.propDecorators = {
    priceFilters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PriceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-price',
        template: _raw_loader_price_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_price_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PriceComponent);



/***/ }),

/***/ "bhLI":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-vertical-food/product-vertical-food.component.sass ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LXZlcnRpY2FsLWZvb2QuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "bjOM":
/*!************************************************************!*\
  !*** ./src/app/components/shared/services/cart.service.ts ***!
  \************************************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");





// Get product from Localstorage
let products = JSON.parse(localStorage.getItem("cartItem")) || [];
let CartService = class CartService {
    constructor(snackBar) {
        this.snackBar = snackBar;
        // Array
        this.cartItems = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.cartItems.subscribe(products => products = products);
    }
    // Get Products
    getItems() {
        const itemsStream = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](observer => {
            observer.next(products);
            observer.complete();
        });
        return itemsStream;
    }
    // Add to cart
    addToCart(product, quantity) {
        let message, status;
        var item = false;
        // If Products exist
        let hasItem = products.find((items, index) => {
            if (items.product.id == product.id) {
                let qty = products[index].quantity + quantity;
                let stock = this.calculateStockCounts(products[index], quantity);
                if (qty != 0 && stock) {
                    products[index]['quantity'] = qty;
                    message = 'The product ' + product.name + ' has been added to cart.';
                    status = 'success';
                    this.snackBar.open(message, '×', { panelClass: [status], verticalPosition: 'top', duration: 3000 });
                }
                return true;
            }
        });
        // If Products does not exist (Add New Products)
        if (!hasItem) {
            item = { product: product, quantity: quantity };
            products.push(item);
            message = 'The product ' + product.name + ' has been added to cart.';
            status = 'success';
            this.snackBar.open(message, '×', { panelClass: [status], verticalPosition: 'top', duration: 3000 });
        }
        localStorage.setItem("cartItem", JSON.stringify(products));
        return item;
    }
    // Calculate Product stock Counts
    calculateStockCounts(product, quantity) {
        let message, status;
        let qty = product.quantity + quantity;
        let stock = product.product.stock;
        if (stock < qty) {
            // this.toastrService.error('You can not add more items than available. In stock '+ stock +' items.');
            this.snackBar.open('You can not choose more items than available. In stock ' + stock + ' items.', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
            return false;
        }
        return true;
    }
    // Removed in cart
    removeFromCart(item) {
        if (item === undefined)
            return false;
        const index = products.indexOf(item);
        products.splice(index, 1);
        localStorage.setItem("cartItem", JSON.stringify(products));
    }
    // Total amount
    getTotalAmount() {
        return this.cartItems.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((product) => {
            return products.reduce((prev, curr) => {
                return prev + curr.product.price * curr.quantity;
            }, 0);
        }));
    }
    // Update Cart Value
    updateCartQuantity(product, quantity) {
        return products.find((items, index) => {
            if (items.product.id == product.id) {
                let qty = products[index].quantity + quantity;
                let stock = this.calculateStockCounts(products[index], quantity);
                if (qty != 0 && stock)
                    products[index]['quantity'] = qty;
                localStorage.setItem("cartItem", JSON.stringify(products));
                return true;
            }
        });
    }
};
CartService.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
CartService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], CartService);



/***/ }),

/***/ "cI5o":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/blog-section/blog-section.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"blog-container\" fxLayout=\"column\" fxLayout.gt-sm=\"row\">\r\n    <div class=\"blog\" fxFlex>\r\n        <div class=\"info\">\r\n            <div class=\"img-box\">\r\n                <ngx-skeleton-loader *ngIf=\"!contentLoaded\" count=\"1\"\r\n                    [theme]=\"{ 'border-radius': '0', height: '233px' }\"></ngx-skeleton-loader>\r\n                <img *ngIf=\"contentLoaded\" src=\"assets/images/blog/b1.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"text-box\" fxLayout=\"column\">\r\n                <ngx-skeleton-loader *ngIf=\"!contentLoaded\" count=\"1\"\r\n                    [theme]=\"{ 'border-radius': '0', width: '64px', height: '64px' }\"></ngx-skeleton-loader>\r\n                <mat-toolbar *ngIf=\"contentLoaded\" color=\"primary\">\r\n\r\n                    <div class=\"date\">17 <br>June</div>\r\n                </mat-toolbar>\r\n                <ngx-skeleton-loader *ngIf=\"!contentLoaded\" count=\"2\"\r\n                    [theme]=\"{ 'border-radius': '0', height: '20px' }\"></ngx-skeleton-loader>\r\n                <h4 *ngIf=\"contentLoaded\">How to improve your market</h4>\r\n                <p *ngIf=\"contentLoaded\">Great pleasure to take a trivial example, which of us undertakes laborious.</p>\r\n                <a *ngIf=\"contentLoaded\" href=\"#\">See More</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"blog\" fxFlex>\r\n        <div class=\"info\">\r\n            <div class=\"img-box\">\r\n                <ngx-skeleton-loader *ngIf=\"!contentLoaded\" count=\"1\"\r\n                    [theme]=\"{ 'border-radius': '0', height: '233px' }\"></ngx-skeleton-loader>\r\n                <img *ngIf=\"contentLoaded\" src=\"assets/images/blog/b1.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"text-box\" fxLayout=\"column\">\r\n                <ngx-skeleton-loader *ngIf=\"!contentLoaded\" count=\"1\"\r\n                    [theme]=\"{ 'border-radius': '0', width: '64px', height: '64px' }\"></ngx-skeleton-loader>\r\n                <mat-toolbar *ngIf=\"contentLoaded\" color=\"primary\">\r\n\r\n                    <div class=\"date\">17 <br>June</div>\r\n                </mat-toolbar>\r\n                <ngx-skeleton-loader *ngIf=\"!contentLoaded\" count=\"2\"\r\n                    [theme]=\"{ 'border-radius': '0', height: '20px' }\"></ngx-skeleton-loader>\r\n                <h4 *ngIf=\"contentLoaded\">How to improve your market</h4>\r\n                <p *ngIf=\"contentLoaded\">Great pleasure to take a trivial example, which of us undertakes laborious.</p>\r\n                <a *ngIf=\"contentLoaded\" href=\"#\">See More</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"blog\" fxFlex>\r\n        <div class=\"info\">\r\n            <div class=\"img-box\">\r\n                <ngx-skeleton-loader *ngIf=\"!contentLoaded\" count=\"1\"\r\n                    [theme]=\"{ 'border-radius': '0', height: '233px' }\"></ngx-skeleton-loader>\r\n                <img *ngIf=\"contentLoaded\" src=\"assets/images/blog/b1.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"text-box\" fxLayout=\"column\">\r\n                <ngx-skeleton-loader *ngIf=\"!contentLoaded\" count=\"1\"\r\n                    [theme]=\"{ 'border-radius': '0', width: '64px', height: '64px' }\"></ngx-skeleton-loader>\r\n                <mat-toolbar *ngIf=\"contentLoaded\" color=\"primary\">\r\n\r\n                    <div class=\"date\">17 <br>June</div>\r\n                </mat-toolbar>\r\n                <ngx-skeleton-loader *ngIf=\"!contentLoaded\" count=\"2\"\r\n                    [theme]=\"{ 'border-radius': '0', height: '20px' }\"></ngx-skeleton-loader>\r\n                <h4 *ngIf=\"contentLoaded\">How to improve your market</h4>\r\n                <p *ngIf=\"contentLoaded\">Great pleasure to take a trivial example, which of us undertakes laborious.</p>\r\n                <a *ngIf=\"contentLoaded\" href=\"#\">See More</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "ceUZ":
/*!****************************************************************************!*\
  !*** ./src/app/components/shared/header-seven/header-seven.component.sass ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXItc2V2ZW4uY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "cf2G":
/*!**********************************************************************!*\
  !*** ./src/app/components/shop/home-three/home-three.component.sass ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXRocmVlLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "cvCz":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/shopping-widgets/shopping-widgets.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <div class=\"commerce-buttons\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n\r\n    <button mat-button class=\"flex-row-button mat-button\" fxLayoutAlign=\"space-between center\" [matMenuTriggerFor]=\"menu\">\r\n      <div class=\"mat-button-wrapper\">\r\n          <div class=\"\" >\r\n              <mat-icon class=\"mat-icon-lg mat-icon material-icons\">local_grocery_store</mat-icon>\r\n              <span class=\"cart-count-wrapper\">{{shoppingCartItems.length}}</span>\r\n            </div>\r\n            <div class=\"top-cart\">\r\n                <span>{{ getTotal() | async | currency:productService?.currency:'symbol' }}</span>\r\n            </div>\r\n      </div>\r\n    </button>\r\n    <mat-menu class=\"spCard-main\"  #menu=\"matMenu\"> \r\n      <div class=\"spCard-dropdown\">\r\n        <div class=\"card-list-title\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n           <a [routerLink]=\"['/pages/cart']\" routerLinkActive=\"router-link-active\" ><p>CHECK CARD</p></a>\r\n            <p>{{shoppingCartItems.length}} ITEM</p>\r\n        </div>\r\n            <mat-divider></mat-divider>\r\n            <p class=\"woo-message\" *ngIf=\"!shoppingCartItems.length\">Please add product<p>\r\n\r\n            <div class=\"new-product\" fxLayout=\"column\" *ngIf=\"shoppingCartItems.length\">\r\n              <div class=\"item\" fxLayout=\"row\" fxLayoutAlign=\"start start\" *ngFor=\"let item of shoppingCartItems\">\r\n                  <div class=\"product\">\r\n                      <!-- <img [src]=\"item.product.pictures[0].small\" alt=\"\"> -->\r\n                     </div>\r\n                    <div class=\"desc\">\r\n                      <p>{{item.product.name}}</p>\r\n                      <span>{{item.quantity}} X {{item.product.price}}</span>\r\n                     </div>\r\n                     <div class=\"close-circle\">\r\n                        <a (click)=\"removeItem(item)\"><i class=\"material-icons\">\r\n                            delete\r\n                            </i></a>\r\n                      </div>\r\n              </div>\r\n              <mat-divider></mat-divider>\r\n              <div class=\"total\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                  <p class=\"text-muted\">Subtotal: </p>\r\n                  <span>{{ getTotal() | async | currency:productService?.currency:'symbol' }}</span>\r\n                </div>\r\n            </div>\r\n      </div>\r\n </mat-menu>\r\n  </div>\r\n\r\n");

/***/ }),

/***/ "elE4":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-carousel-three/product-carousel-three.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"product-item-2 swiper-container\" [swiper]=\"config\" >\r\n    <div class=\"swiper-wrapper h-100\"> \r\n        <div *ngFor=\"let product of product\" class=\"swiper-slide\">\r\n            <mat-card fxLayout=\"column\">\r\n               <ngx-skeleton-loader\r\n              *ngIf=\"!contentLoaded\"\r\n                count=\"1\"\r\n                [theme]=\"{ width: '180px', 'border-radius': '0', height: '180px' }\"\r\n              ></ngx-skeleton-loader>\r\n                <div class=\"product-img\" *ngIf=\"contentLoaded\">\r\n                    <a class=\"product-link\" [routerLink]=\"['/home/product', product.id]\">\r\n                      <img [src]=\"product.pictures[0].big\" alt=\"\">\r\n                   </a>\r\n                   <div class=\"icons\" fxLayout=\"column\">\r\n                     <a (click)=\"addToWishlist(product)\" class=\"hvr-icon-pulse-shrink\"><mat-icon class=\"hvr-icon mat-icon-lg mat-icon material-icons mr-10\">favorite_border</mat-icon></a>\r\n                     <a (click)=\"openProductDialog(product)\" class=\"hvr-icon-pulse-shrink\"><mat-icon class=\"hvr-icon\">remove_red_eye</mat-icon></a>\r\n                     <a (click)=\"addToCompare(product)\" class=\"hvr-icon-pulse-shrink\"><mat-icon class=\"hvr-icon\">cached</mat-icon></a>\r\n                    </div>\r\n                </div>\r\n                 <div class=\"product-info-wrapper\">\r\n                  <ngx-skeleton-loader\r\n                  *ngIf=\"!contentLoaded\"\r\n                    count=\"2\"\r\n                    [theme]=\"{ 'border-radius': '0', height: '20px' }\"\r\n                  ></ngx-skeleton-loader>\r\n                    <span class=\"category\" *ngIf=\"contentLoaded\">{{product.category}}</span>\r\n                    <div class=\"title-wrap\" *ngIf=\"contentLoaded\">\r\n                       <h4>{{product.name}}</h4>\r\n                    </div>\r\n                    <div class=\"stars\" *ngIf=\"contentLoaded\">\r\n                       <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                       <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                       <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                       <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                       <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                    </div>\r\n                    <div *ngIf=\"contentLoaded\" class=\"price-wrap\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                     <p>S/.{{product.price | number : '1.2-2'}}</p>\r\n                     <a (click)=\"addToCart(product)\" ><mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-lg mat-icon material-icons\">shopping_cart</mat-icon></a>\r\n                  </div>\r\n                   \r\n                 </div>\r\n              </mat-card>\r\n        </div>\r\n\r\n    </div>\r\n    <button mat-mini-fab class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n    <button mat-mini-fab class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button>\r\n  </div>\r\n");

/***/ }),

/***/ "et+d":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-details-centered/product-zoom/product-zoom.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"product-dialog\">\r\n\r\n    <div class=\"close-btn-outer\">\r\n      <button mat-mini-fab color=\"warn\" (click)=\"close()\"><mat-icon>close</mat-icon></button>\r\n    </div>\r\n    <div mat-dialog-content>\r\n      <div fxLayout=\"row wrap\" >\r\n          <div>\r\n              <div class=\"swiper-container h-100\">\r\n                  <div class=\"swiper-wrapper\">\r\n                    <img [src]=\"product.pictures[selectedProductImageIndex].big\" alt=\"\" class=\"img-fluid\">\r\n                  </div>\r\n  \r\n              </div>\r\n          </div>\r\n  \r\n      </div>\r\n    </div>\r\n  \r\n    </div>\r\n  ");

/***/ }),

/***/ "g/WC":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-details-food/product-zoom-food/product-zoom-food.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: ProductZoomFoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductZoomFoodComponent", function() { return ProductZoomFoodComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_zoom_food_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-zoom-food.component.html */ "oo+z");
/* harmony import */ var _product_zoom_food_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-zoom-food.component.sass */ "U46r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");





let ProductZoomFoodComponent = class ProductZoomFoodComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.product = data.product;
        this.selectedProductImageIndex = data.index;
    }
    close() {
        this.dialogRef.close();
    }
};
ProductZoomFoodComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
];
ProductZoomFoodComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-zoom-food',
        template: _raw_loader_product_zoom_food_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_zoom_food_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
], ProductZoomFoodComponent);



/***/ }),

/***/ "gBNm":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-carousel-three/product-carousel-three.component.sass ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWNhcm91c2VsLXRocmVlLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "gFt2":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-vertical-food/product-vertical-food.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"vertical-products sec-padding\">\r\n      <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"start start\" class=\"p-0\">\r\n          <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"product-panel\">\r\n            <div class=\"widget-column\">\r\n                <div class=\"title\">\r\n                    <h4 class=\"widget-title\">Featured Products</h4>\r\n                  </div>\r\n                  <ul class=\"product-list\">\r\n                    <li *ngFor=\"let product of products | slice:0:3 \" fxLayout=\"row\">\r\n                      <div class=\"media-image\">\r\n                        <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n    \r\n                        <a *ngIf=\"contentLoaded\" [routerLink]=\"['/home/product', product.id]\"><img [src]=\"product.pictures[0].big\" class=\"small\" alt=\"\"> </a>\r\n                      </div>\r\n                      <div class=\"media-body\">\r\n                        <ngx-skeleton-loader\r\n                  *ngIf=\"!contentLoaded\"\r\n                    count=\"3\"\r\n                    [theme]=\"{ width: '170px', 'border-radius': '0', height: '15px' }\"\r\n                  ></ngx-skeleton-loader>\r\n                        <a *ngIf=\"contentLoaded\" [routerLink]=\"['/home/product', product.id]\"><span>{{product.name}}</span></a>\r\n                        <div *ngIf=\"contentLoaded\" class=\"stars\">\r\n                            <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                            <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                            <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                            <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                            <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                         </div>\r\n                         <p *ngIf=\"contentLoaded\" class=\"price\">{{product.price | number : '1.2-2' }}</p>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n            </div>\r\n          </div>\r\n          <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"product-panel\">\r\n              <div class=\"widget-column\">\r\n                  <div class=\"title\">\r\n                      <h4 class=\"widget-title\">Top Selling Products</h4>\r\n                    </div>\r\n                    <ul class=\"product-list\">\r\n                      <li *ngFor=\"let product of products | slice:6:9 \" fxLayout=\"row\">\r\n                        <div class=\"media-image\">\r\n                          <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n                          <a *ngIf=\"contentLoaded\" [routerLink]=\"['/home/product', product.id]\"><img [src]=\"product.pictures[0].big\" class=\"small\" alt=\"\"> </a>\r\n                        </div>\r\n                        <div class=\"media-body\">\r\n                          <ngx-skeleton-loader\r\n                  *ngIf=\"!contentLoaded\"\r\n                    count=\"3\"\r\n                    [theme]=\"{ width: '170px', 'border-radius': '0', height: '15px' }\"\r\n                  ></ngx-skeleton-loader>\r\n                          <a *ngIf=\"contentLoaded\" [routerLink]=\"['/home/product', product.id]\"><span>{{product.name}}</span></a>\r\n                          <div *ngIf=\"contentLoaded\" class=\"stars\">\r\n                              <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                              <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                           </div>\r\n                           <p *ngIf=\"contentLoaded\" class=\"price\">{{product.price | number : '1.2-2'}}</p>\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n              </div>\r\n            </div>\r\n            <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"product-panel\">\r\n                <div class=\"widget-column\">\r\n                    <div class=\"title\">\r\n                        <h4 class=\"widget-title\">Hot Offer</h4>\r\n                      </div>\r\n                      <ul class=\"product-list\">\r\n                        <li *ngFor=\"let product of products | slice:9:12 \" fxLayout=\"row\">\r\n                          <div class=\"media-image\">\r\n                            <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n                            <a *ngIf=\"contentLoaded\"><img [routerLink]=\"['/home/product', product.id]\" [src]=\"product.pictures[0].big\" class=\"small\" alt=\"\"> </a>\r\n                          </div>\r\n                          <div class=\"media-body\">\r\n                            <ngx-skeleton-loader\r\n                            *ngIf=\"!contentLoaded\"\r\n                              count=\"3\"\r\n                              [theme]=\"{ width: '170px', 'border-radius': '0', height: '15px' }\"\r\n                            ></ngx-skeleton-loader>\r\n                           <a *ngIf=\"contentLoaded\" [routerLink]=\"['/home/product', product.id]\"><span>{{product.name}}</span></a>\r\n                            <div *ngIf=\"contentLoaded\" class=\"stars\">\r\n                                <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                                <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                                <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                                <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                                <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                             </div>\r\n                             <p *ngIf=\"contentLoaded\" class=\"price\">{{product.price | number : '1.2-2'}}</p>\r\n                          </div>\r\n                        </li>\r\n                      </ul>\r\n                </div>\r\n              </div>\r\n      </div>\r\n    </div>\r\n    </div>");

/***/ }),

/***/ "gLO+":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-details-centered/product-details-centered.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ProductDetailsCenteredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsCenteredComponent", function() { return ProductDetailsCenteredComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_details_centered_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-details-centered.component.html */ "XC3Q");
/* harmony import */ var _product_details_centered_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-details-centered.component.sass */ "5XXD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/shared/services/product.service */ "6MrQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/shared/services/cart.service */ "bjOM");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-swiper-wrapper */ "S8NE");
/* harmony import */ var _product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-zoom/product-zoom.component */ "viOG");










let ProductDetailsCenteredComponent = class ProductDetailsCenteredComponent {
    constructor(route, router, productService, dialog, cartService) {
        // this.route.data.subscribe(response => {
        // console.log("🚀 ~ file: product-details-centered.component.ts ~ line 27 ~ ProductDetailsCenteredComponent ~ response", response)
        //   this.product = response.data
        // } );
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.dialog = dialog;
        this.cartService = cartService;
        this.products = [];
        this.config = {};
        this.bigProductImageIndex = 0;
        this.counter = 1;
        this.onOpenProductDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.product = {};
        // to get current params from route
        this.route.params.subscribe(params => {
            console.log("🚀 ~ file: product-details-centered.component.ts ~ line 32 ~ ProductDetailsCenteredComponent ~ params", params);
            if (params.slug) {
                // find product
                this.productService.getProductBySlug(params.slug).subscribe(res => {
                    console.log("🚀 ~ file: product-details-centered.component.ts ~ line 42 ~ ProductDetailsCenteredComponent ~ this.productService.getProductBySlug ~ res", res);
                    this.product = res;
                });
            }
        });
    }
    ngOnInit() {
        this.productService.getProducts().subscribe(product => this.products = product);
        this.getRelatedProducts();
    }
    ngAfterViewInit() {
        this.config = {
            observer: true,
            slidesPerView: 3,
            spaceBetween: 10,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            breakpoints: {
                480: {
                    slidesPerView: 1
                },
                740: {
                    slidesPerView: 2,
                },
                960: {
                    slidesPerView: 3,
                },
                1280: {
                    slidesPerView: 3,
                },
            }
        };
    }
    openProductDialog(product, bigProductImageIndex) {
        let dialogRef = this.dialog.open(_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_9__["ProductZoomCenteredComponent"], {
            data: { product, index: bigProductImageIndex },
            panelClass: 'product-dialog',
        });
        dialogRef.afterClosed().subscribe(product => {
            if (product) {
                this.router.navigate(['/products', product.id, product.name]);
            }
        });
    }
    selectImage(index) {
        console.log(this.product);
        console.log(index);
        this.bigProductImageIndex = index;
    }
    increment() {
        this.counter += 1;
    }
    decrement() {
        if (this.counter > 1) {
            this.counter -= 1;
        }
    }
    getRelatedProducts() {
        this.productService.getProducts()
            .subscribe((product) => {
            this.products = product;
        });
    }
    // Add to cart
    addToCart(product, quantity) {
        if (quantity == 0)
            return false;
        this.cartService.addToCart(product, parseInt(quantity));
    }
    // Add to cart
    buyNow(product, quantity) {
        if (quantity > 0)
            this.cartService.addToCart(product, parseInt(quantity));
        this.router.navigate(['/pages/checkout']);
    }
    onMouseMove(e) {
        if (window.innerWidth >= 1280) {
            var image, offsetX, offsetY, x, y, zoomer;
            image = e.currentTarget;
            offsetX = e.offsetX;
            offsetY = e.offsetY;
            x = offsetX / image.offsetWidth * 100;
            y = offsetY / image.offsetHeight * 100;
            zoomer = this.zoomViewer.nativeElement.children[0];
            if (zoomer) {
                zoomer.style.backgroundPosition = x + '% ' + y + '%';
                zoomer.style.display = "block";
                zoomer.style.height = image.height + 'px';
                zoomer.style.width = image.width + 'px';
            }
        }
    }
    onMouseLeave(event) {
        this.zoomViewer.nativeElement.children[0].style.display = "none";
    }
    openZoomViewer() {
        this.dialog.open(_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_9__["ProductZoomCenteredComponent"], {
            data: this.zoomImage,
            panelClass: 'zoom-dialog'
        });
    }
};
ProductDetailsCenteredComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"] }
];
ProductDetailsCenteredComponent.propDecorators = {
    onOpenProductDialog: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    zoomViewer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['zoomViewer', { static: true },] }],
    directiveRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_8__["SwiperDirective"], { static: true },] }]
};
ProductDetailsCenteredComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-details-centered',
        template: _raw_loader_product_details_centered_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_details_centered_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"]])
], ProductDetailsCenteredComponent);



/***/ }),

/***/ "hCS/":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/shared/shopping-widgets-three/shopping-widgets-three.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ShoppingWidgetsThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingWidgetsThreeComponent", function() { return ShoppingWidgetsThreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_shopping_widgets_three_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./shopping-widgets-three.component.html */ "Pt9B");
/* harmony import */ var _shopping_widgets_three_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-widgets-three.component.sass */ "4sON");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cart.service */ "bjOM");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/product.service */ "6MrQ");






let ShoppingWidgetsThreeComponent = class ShoppingWidgetsThreeComponent {
    constructor(cartService, productService) {
        this.cartService = cartService;
        this.productService = productService;
        this.shoppingCartItems = [];
    }
    ngOnInit() {
    }
    updateCurrency(curr) {
        this.productService.currency = curr;
    }
    removeItem(item) {
        this.cartService.removeFromCart(item);
    }
    getTotal() {
        return this.cartService.getTotalAmount();
    }
};
ShoppingWidgetsThreeComponent.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] }
];
ShoppingWidgetsThreeComponent.propDecorators = {
    shoppingCartItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ShoppingWidgetsThreeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-shopping-widgets-three',
        template: _raw_loader_shopping_widgets_three_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_shopping_widgets_three_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"], _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]])
], ShoppingWidgetsThreeComponent);



/***/ }),

/***/ "hGdz":
/*!****************************************************!*\
  !*** ./src/app/components/shared/shared.module.ts ***!
  \****************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_color_option_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/color-option.service */ "jhFw");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "u9T3");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "q7Ft");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/chips */ "f44v");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/radio */ "zQhy");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/slider */ "mPVK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./header/header.component */ "j/Fd");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./footer/footer.component */ "FezY");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./menu/menu.component */ "GqsX");
/* harmony import */ var _pipes_order_by_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pipes/order-by.pipe */ "jvIw");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/product.service */ "6MrQ");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/cart.service */ "bjOM");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "5T6c");
/* harmony import */ var _banners_banners_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./banners/banners.component */ "Msd6");
/* harmony import */ var _header_two_header_two_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./header-two/header-two.component */ "7ekq");
/* harmony import */ var _shopping_widgets_shopping_widgets_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shopping-widgets/shopping-widgets.component */ "uBKW");
/* harmony import */ var _header_three_header_three_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./header-three/header-three.component */ "WUKg");
/* harmony import */ var _banners_four_banners_four_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./banners-four/banners-four.component */ "IGvG");
/* harmony import */ var _blog_section_blog_section_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./blog-section/blog-section.component */ "D1h0");
/* harmony import */ var _banner_promotion_banner_promotion_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./banner-promotion/banner-promotion.component */ "UvXb");
/* harmony import */ var _header_four_header_four_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./header-four/header-four.component */ "Kz4r");
/* harmony import */ var _categories_menu_categories_menu_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./categories-menu/categories-menu.component */ "JWct");
/* harmony import */ var _categories_section_categories_section_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./categories-section/categories-section.component */ "pBa0");
/* harmony import */ var _footer_two_footer_two_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./footer-two/footer-two.component */ "ZTDE");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/badge */ "8Qe2");
/* harmony import */ var _shopping_widgets_two_shopping_widgets_two_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./shopping-widgets-two/shopping-widgets-two.component */ "jgt6");
/* harmony import */ var _header_five_header_five_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./header-five/header-five.component */ "PgFM");
/* harmony import */ var _blog_section_two_blog_section_two_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./blog-section-two/blog-section-two.component */ "rfhx");
/* harmony import */ var _header_six_header_six_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./header-six/header-six.component */ "3dZ2");
/* harmony import */ var _shopping_widgets_three_shopping_widgets_three_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./shopping-widgets-three/shopping-widgets-three.component */ "hCS/");
/* harmony import */ var _header_seven_header_seven_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./header-seven/header-seven.component */ "6Uxs");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ngx-skeleton-loader */ "WzhS");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "EaNY");



















































let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_24__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_25__["FooterComponent"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_26__["MenuComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_30__["SidebarComponent"],
            _pipes_order_by_pipe__WEBPACK_IMPORTED_MODULE_27__["OrderByPipe"],
            _banners_banners_component__WEBPACK_IMPORTED_MODULE_31__["BannersComponent"],
            _header_two_header_two_component__WEBPACK_IMPORTED_MODULE_32__["HeaderTwoComponent"],
            _shopping_widgets_shopping_widgets_component__WEBPACK_IMPORTED_MODULE_33__["ShoppingWidgetsComponent"],
            _header_three_header_three_component__WEBPACK_IMPORTED_MODULE_34__["HeaderThreeComponent"],
            _banners_four_banners_four_component__WEBPACK_IMPORTED_MODULE_35__["BannersFourComponent"],
            _blog_section_blog_section_component__WEBPACK_IMPORTED_MODULE_36__["BlogSectionComponent"],
            _banner_promotion_banner_promotion_component__WEBPACK_IMPORTED_MODULE_37__["BannerPromotionComponent"],
            _header_four_header_four_component__WEBPACK_IMPORTED_MODULE_38__["HeaderFourComponent"],
            _categories_menu_categories_menu_component__WEBPACK_IMPORTED_MODULE_39__["CategoriesMenuComponent"],
            _categories_section_categories_section_component__WEBPACK_IMPORTED_MODULE_40__["CategoriesSectionComponent"],
            _footer_two_footer_two_component__WEBPACK_IMPORTED_MODULE_41__["FooterTwoComponent"],
            _shopping_widgets_two_shopping_widgets_two_component__WEBPACK_IMPORTED_MODULE_43__["ShoppingWidgetsTwoComponent"],
            _header_five_header_five_component__WEBPACK_IMPORTED_MODULE_44__["HeaderFiveComponent"],
            _blog_section_two_blog_section_two_component__WEBPACK_IMPORTED_MODULE_45__["BlogSectionTwoComponent"],
            _header_six_header_six_component__WEBPACK_IMPORTED_MODULE_46__["HeaderSixComponent"],
            _shopping_widgets_three_shopping_widgets_three_component__WEBPACK_IMPORTED_MODULE_47__["ShoppingWidgetsThreeComponent"],
            _header_seven_header_seven_component__WEBPACK_IMPORTED_MODULE_48__["HeaderSevenComponent"],
            _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_50__["BreadcrumbComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_42__["MatBadgeModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDividerModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_49__["NgxSkeletonLoaderModule"]
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDividerModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _pipes_order_by_pipe__WEBPACK_IMPORTED_MODULE_27__["OrderByPipe"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_24__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_25__["FooterComponent"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_26__["MenuComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_30__["SidebarComponent"],
            _banners_banners_component__WEBPACK_IMPORTED_MODULE_31__["BannersComponent"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _header_two_header_two_component__WEBPACK_IMPORTED_MODULE_32__["HeaderTwoComponent"],
            _header_three_header_three_component__WEBPACK_IMPORTED_MODULE_34__["HeaderThreeComponent"],
            _header_four_header_four_component__WEBPACK_IMPORTED_MODULE_38__["HeaderFourComponent"],
            _shopping_widgets_shopping_widgets_component__WEBPACK_IMPORTED_MODULE_33__["ShoppingWidgetsComponent"],
            _banners_four_banners_four_component__WEBPACK_IMPORTED_MODULE_35__["BannersFourComponent"],
            _blog_section_blog_section_component__WEBPACK_IMPORTED_MODULE_36__["BlogSectionComponent"],
            _banner_promotion_banner_promotion_component__WEBPACK_IMPORTED_MODULE_37__["BannerPromotionComponent"],
            _categories_menu_categories_menu_component__WEBPACK_IMPORTED_MODULE_39__["CategoriesMenuComponent"],
            _categories_section_categories_section_component__WEBPACK_IMPORTED_MODULE_40__["CategoriesSectionComponent"],
            _footer_two_footer_two_component__WEBPACK_IMPORTED_MODULE_41__["FooterTwoComponent"],
            _header_five_header_five_component__WEBPACK_IMPORTED_MODULE_44__["HeaderFiveComponent"],
            _header_six_header_six_component__WEBPACK_IMPORTED_MODULE_46__["HeaderSixComponent"],
            _shopping_widgets_three_shopping_widgets_three_component__WEBPACK_IMPORTED_MODULE_47__["ShoppingWidgetsThreeComponent"],
            _header_seven_header_seven_component__WEBPACK_IMPORTED_MODULE_48__["HeaderSevenComponent"],
            _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_50__["BreadcrumbComponent"]
        ],
        providers: [
            _services_product_service__WEBPACK_IMPORTED_MODULE_28__["ProductService"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_29__["CartService"],
            _services_color_option_service__WEBPACK_IMPORTED_MODULE_4__["AppSettings"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "hXOG":
/*!****************************************************************!*\
  !*** ./src/app/components/shop/products/products.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_products_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./products.component.html */ "CVEe");
/* harmony import */ var _products_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.component.sass */ "xRdL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let ProductsComponent = class ProductsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProductsComponent.ctorParameters = () => [];
ProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-products',
        template: _raw_loader_products_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_products_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ProductsComponent);



/***/ }),

/***/ "hnp9":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-details/product-zoom/product-zoom.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ProductZoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductZoomComponent", function() { return ProductZoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_zoom_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-zoom.component.html */ "DawS");
/* harmony import */ var _product_zoom_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-zoom.component.sass */ "G9J/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/shared/services/product.service */ "6MrQ");






let ProductZoomComponent = class ProductZoomComponent {
    constructor(productsService, dialogRef, data) {
        this.productsService = productsService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.product = data.product;
        this.selectedProductImageIndex = data.index;
    }
    ngOnInit() {
    }
    close() {
        this.dialogRef.close();
    }
};
ProductZoomComponent.ctorParameters = () => [
    { type: src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
];
ProductZoomComponent.propDecorators = {
    zoomImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['zoomImage', { static: true },] }]
};
ProductZoomComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-zoom',
        template: _raw_loader_product_zoom_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        styles: [_product_zoom_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
], ProductZoomComponent);



/***/ }),

/***/ "iKZG":
/*!****************************************************************************!*\
  !*** ./src/app/components/shop/main-carousel/main-carousel.component.sass ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLWNhcm91c2VsLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "ip/5":
/*!********************************************************************!*\
  !*** ./src/app/components/shop/widgets/brands/brands.component.ts ***!
  \********************************************************************/
/*! exports provided: BrandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsComponent", function() { return BrandsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_brands_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./brands.component.html */ "MsKc");
/* harmony import */ var _brands_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brands.component.sass */ "F5+V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let BrandsComponent = class BrandsComponent {
    constructor() {
        // brands: string[] = ['all', 'Lenovo', 'Dell', 'Dell', 'Lg', 'Samsung'];
        this.brands = ['all', 'Brand-1', 'Brand-2', 'Brand-3', 'Brand-4', 'Brand-5'];
        this.brandChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
    }
    brendSelect(event) {
        this.brandChanged.emit(event.value);
    }
};
BrandsComponent.ctorParameters = () => [];
BrandsComponent.propDecorators = {
    brandChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
BrandsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-brands',
        template: _raw_loader_brands_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_brands_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], BrandsComponent);



/***/ }),

/***/ "j/Fd":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "VFLz");
/* harmony import */ var _header_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.sass */ "QLHP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cart.service */ "bjOM");
/* harmony import */ var _services_color_option_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/color-option.service */ "jhFw");






let HeaderComponent = class HeaderComponent {
    constructor(cartService, appSettings) {
        this.cartService = cartService;
        this.appSettings = appSettings;
        this.currencies = ['USD', 'EUR'];
        this.flags = [
            { name: 'English', image: 'assets/images/flags/gb.svg' },
            { name: 'German', image: 'assets/images/flags/de.svg' },
            { name: 'French', image: 'assets/images/flags/fr.svg' },
            { name: 'Russian', image: 'assets/images/flags/ru.svg' },
            { name: 'Turkish', image: 'assets/images/flags/tr.svg' }
        ];
        this.shoppingCartItems = [];
        this.settings = this.appSettings.settings;
        this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
    }
    ngOnInit() {
        this.currency = this.currencies[0];
        this.flag = this.flags[0];
    }
    changeCurrency(currency) {
        this.currency = currency;
    }
    changeLang(flag) {
        this.flag = flag;
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: _services_color_option_service__WEBPACK_IMPORTED_MODULE_5__["AppSettings"] }
];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"], _services_color_option_service__WEBPACK_IMPORTED_MODULE_5__["AppSettings"]])
], HeaderComponent);



/***/ }),

/***/ "jHYg":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-vertical/product-vertical.component.sass ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LXZlcnRpY2FsLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "jVAY":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-details-left/product-details-left.component.sass ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbHMtbGVmdC5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "jgt6":
/*!******************************************************************************************!*\
  !*** ./src/app/components/shared/shopping-widgets-two/shopping-widgets-two.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ShoppingWidgetsTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingWidgetsTwoComponent", function() { return ShoppingWidgetsTwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_shopping_widgets_two_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./shopping-widgets-two.component.html */ "0nda");
/* harmony import */ var _shopping_widgets_two_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-widgets-two.component.sass */ "vvX+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cart.service */ "bjOM");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/product.service */ "6MrQ");






let ShoppingWidgetsTwoComponent = class ShoppingWidgetsTwoComponent {
    constructor(cartService, productService) {
        this.cartService = cartService;
        this.productService = productService;
        this.shoppingCartItems = [];
    }
    ngOnInit() {
    }
    updateCurrency(curr) {
        this.productService.currency = curr;
    }
    removeItem(item) {
        this.cartService.removeFromCart(item);
    }
    getTotal() {
        return this.cartService.getTotalAmount();
    }
};
ShoppingWidgetsTwoComponent.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] }
];
ShoppingWidgetsTwoComponent.propDecorators = {
    shoppingCartItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ShoppingWidgetsTwoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-shopping-widgets-two',
        template: _raw_loader_shopping_widgets_two_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_shopping_widgets_two_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"], _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]])
], ShoppingWidgetsTwoComponent);



/***/ }),

/***/ "jhFw":
/*!********************************************************************!*\
  !*** ./src/app/components/shared/services/color-option.service.ts ***!
  \********************************************************************/
/*! exports provided: Settings, AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class Settings {
    constructor(name, theme, rtl) {
        this.name = name;
        this.theme = theme;
        this.rtl = rtl;
    }
}
let AppSettings = class AppSettings {
    constructor() {
        this.settings = new Settings('Sophia', // theme name
        'orange', // green, blue, red, pink, purple, grey
        false);
    }
};
AppSettings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppSettings);



/***/ }),

/***/ "jvIw":
/*!**********************************************************!*\
  !*** ./src/app/components/shared/pipes/order-by.pipe.ts ***!
  \**********************************************************/
/*! exports provided: OrderByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function() { return OrderByPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let OrderByPipe = class OrderByPipe {
    transform(array, val = 'desc') {
        if (!val || val.trim() == "") {
            return array;
        }
        //ascending
        if (val == 'asc') {
            return Array.from(array).sort((item1, item2) => {
                return this.orderByComparator(item1['id'], item2['id']);
            });
        }
        else if (val == 'desc') { // desc
            return Array.from(array).sort((item1, item2) => {
                return this.orderByComparator(item2['id'], item1['id']);
            });
        }
        else if (val == 'a-z') { // a-z
            return Array.from(array).sort((a, b) => {
                if (a['name'] < b['name']) {
                    return -1;
                }
                else if (a['name'] > b['name']) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
        else if (val == 'z-a') { // z-a
            return Array.from(array).sort((a, b) => {
                if (a['name'] > b['name']) {
                    return -1;
                }
                else if (a['name'] < b['name']) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
        else if (val == 'low') { // low to high
            return Array.from(array).sort((a, b) => {
                if (a['price'] < b['price']) {
                    return -1;
                }
                else if (a['price'] > b['price']) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
        else if (val == 'high') { // high to low
            return Array.from(array).sort((a, b) => {
                if (a['price'] > b['price']) {
                    return -1;
                }
                else if (a['price'] < b['price']) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
    }
    orderByComparator(a, b) {
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            //Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase())
                return -1;
            if (a.toLowerCase() > b.toLowerCase())
                return 1;
        }
        else {
            //Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0; //equal each other
    }
};
OrderByPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'orderBy'
    })
], OrderByPipe);



/***/ }),

/***/ "kfy9":
/*!**********************************************************!*\
  !*** ./src/app/components/shop/food/food.component.sass ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb29kLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "kqla":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/breadcrumb/breadcrumb.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- breadcrumb start -->\r\n<div class=\"breadcrumb-section\">\r\n    <div class=\"container\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\"  class=\"\">\r\n            <div class=\"breadcrumb-title  pr-15\" fxFlex=\"100\" fxFlex.gt-md=\"45\" fxFlex.md=\"45\">\r\n          <div class=\"page-title\">\r\n            <h4>{{ title }}</h4>\r\n          </div>\r\n        </div>\r\n        <div class=\"breadcrumb-path \" fxFlex=\"100\" fxFlex.gt-md=\"45\" fxFlex.md=\"45\">\r\n                <ol class=\"breadcrumb\" fxLayout=\"row\">\r\n                  <li class=\"breadcrumb-item-home\"><a [routerLink]=\"'/home/one'\">Home</a></li>\r\n                  <li class=\"breadcrumb-item\">/</li>\r\n                  <li class=\"breadcrumb-item-path active\" aria-current=\"page\">{{ breadcrumb }}</li>\r\n                </ol>\r\n        </div>\r\n          \r\n      \r\n    </div>\r\n    </div>\r\n  </div>\r\n  <!-- breadcrumb End -->");

/***/ }),

/***/ "lS6w":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-carousel/product-carousel.component.sass ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWNhcm91c2VsLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "m4vo":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/services/wishlist.service.ts ***!
  \****************************************************************/
/*! exports provided: WishlistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistService", function() { return WishlistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");




// Get product from Localstorage
let products = JSON.parse(localStorage.getItem("wishlistItem")) || [];
let WishlistService = class WishlistService {
    constructor(snackBar) {
        this.snackBar = snackBar;
        // wishlist array
        this.wishlistProducts = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    // Get  wishlist Products
    getProducts() {
        const itemsStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            observer.next(products);
            observer.complete();
        });
        return itemsStream;
    }
    // If item is aleready added In wishlist
    hasProduct(product) {
        const item = products.find(item => item.id === product.id);
        return item !== undefined;
    }
    // Add to wishlist
    addToWishlist(product) {
        let message, status;
        var item = false;
        if (this.hasProduct(product)) {
            item = products.filter(item => item.id === product.id)[0];
            const index = products.indexOf(item);
        }
        else {
            products.push(product);
        }
        message = 'The product ' + product.name + ' has been added to wishlist.';
        status = 'success';
        this.snackBar.open(message, '×', { panelClass: [status], verticalPosition: 'top', duration: 3000 });
        localStorage.setItem("wishlistItem", JSON.stringify(products));
        return item;
    }
    // Removed Product
    removeFromWishlist(product) {
        if (product === undefined) {
            return;
        }
        const index = products.indexOf(product);
        products.splice(index, 1);
        localStorage.setItem("wishlistItem", JSON.stringify(products));
    }
};
WishlistService.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
WishlistService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], WishlistService);



/***/ }),

/***/ "mVxA":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/categories-section/categories-section.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"categories-section\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutAlign=\"start start\"  class=\"p-0\">\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"left-section\">\r\n    <ngx-skeleton-loader\r\n            *ngIf=\"!contentLoaded\"\r\n              count=\"1\"\r\n              [theme]=\"{ 'border-radius': '0', height: '391px' }\"\r\n            ></ngx-skeleton-loader>\r\n      <div *ngIf=\"contentLoaded\" class=\"item mb-15\" >\r\n        <div class=\"product\">\r\n          <img src=\"assets/images/product/small/headphone1/headphone1.png\" alt=\"\">\r\n        </div>\r\n        <div class=\"product-info\">\r\n            <h4><a href=\"\">Headphones</a></h4>\r\n          <ul>\r\n              <li><a href=\"\">Brand 1</a> </li>\r\n              <li><a href=\"\">Brand 1</a> </li>\r\n              <li><a href=\"\">Brand 1</a> </li>\r\n              <li><a href=\"\">Brand 1</a> </li>\r\n              <li><a href=\"\">Brand 1</a> </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"start start\">\r\n        <ngx-skeleton-loader\r\n            *ngIf=\"!contentLoaded\"\r\n              count=\"1\"\r\n              [theme]=\"{ 'border-radius': '0', height: '260px', width: '314px' }\"\r\n            ></ngx-skeleton-loader>\r\n          <div *ngIf=\"contentLoaded\" class=\"item mr-7\" >\r\n              <div class=\"product\">\r\n                  <img src=\"assets/images/product/small/laptop1/laptop1.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"product-info\">\r\n                    <h4><a href=\"\">Laptops</a></h4>\r\n                  <ul>\r\n                      <li><a href=\"\">Brand 1</a> </li>\r\n                      <li><a href=\"\">Brand 1</a> </li>\r\n                      <li><a href=\"\">Brand 1</a> </li>\r\n                      <li><a href=\"\">Brand 1</a> </li>\r\n                      <li><a href=\"\">Brand 1</a> </li>\r\n                  </ul>\r\n                </div>\r\n          </div>\r\n          <ngx-skeleton-loader\r\n            *ngIf=\"!contentLoaded\"\r\n              count=\"1\"\r\n              [theme]=\"{ 'border-radius': '0', height: '260px', width: '314px' }\"\r\n            ></ngx-skeleton-loader>\r\n          <div *ngIf=\"contentLoaded\" class=\"item ml-7\" >\r\n            \r\n              <div  class=\"product\">\r\n                  <img src=\"assets/images/product/small/phone1/phone1.png\" alt=\"\">\r\n                </div>\r\n                <div *ngIf=\"contentLoaded\" class=\"product-info\">\r\n                  <h4><a href=\"\">Smart Phones</a></h4>\r\n                  <ul>\r\n                      <li><a href=\"\">Brand 1</a> </li>\r\n                      <li><a href=\"\">Brand 1</a> </li>\r\n                      <li><a href=\"\">Brand 1</a> </li>\r\n                      <li><a href=\"\">Brand 1</a> </li>\r\n                      <li><a href=\"\">Brand 1</a> </li>\r\n                  </ul>\r\n                </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"right-section\">\r\n      <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"start start\">\r\n        <ngx-skeleton-loader\r\n            *ngIf=\"!contentLoaded\"\r\n              count=\"1\"\r\n              [theme]=\"{ 'border-radius': '0', height: '260px', width: '314px' }\"\r\n            ></ngx-skeleton-loader>\r\n          <div  *ngIf=\"contentLoaded\" class=\"item mr-7\" >\r\n              <div class=\"product\">\r\n                  <img src=\"assets/images/product/small/photocamera1/steker.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"product-info\">\r\n                    <h4><a href=\"\">Cameras</a></h4>\r\n                  <ul>\r\n                      <li><a href=\"\">Brand 1</a> </li>\r\n                      <li><a href=\"\">Brand 1</a> </li>\r\n                      <li><a href=\"\">Brand 1</a> </li>\r\n                      <li><a href=\"\">Brand 1</a> </li>\r\n                      <li><a href=\"\">Brand 1</a> </li>\r\n                  </ul>\r\n                </div>\r\n          </div>\r\n          <ngx-skeleton-loader\r\n            *ngIf=\"!contentLoaded\"\r\n              count=\"1\"\r\n              [theme]=\"{ 'border-radius': '0', height: '260px', width: '314px' }\"\r\n            ></ngx-skeleton-loader>\r\n          <div *ngIf=\"contentLoaded\" class=\"item ml-7\" >\r\n              <div class=\"product\">\r\n                  <img src=\"assets/images/product/small/tv1/tv1.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"product-info\">\r\n                    <h4><a href=\"\">Tv & Audio</a></h4>\r\n                  <ul>\r\n                      <li><a href=\"\">Brand 1</a> </li>\r\n                      <li><a href=\"\">Brand 1</a> </li>\r\n                      <li><a href=\"\">Brand 1</a> </li>\r\n                      <li><a href=\"\">Brand 1</a> </li>\r\n                      <li><a href=\"\">Brand 1</a> </li>\r\n                  </ul>\r\n                </div>\r\n          </div>\r\n      </div>\r\n      <ngx-skeleton-loader\r\n      *ngIf=\"!contentLoaded\"\r\n        count=\"1\"\r\n        [theme]=\"{ 'border-radius': '0', height: '391px' }\"\r\n      ></ngx-skeleton-loader>\r\n      <div *ngIf=\"contentLoaded\" class=\"item mt-15\" >\r\n          <div class=\"product\">\r\n            <img src=\"assets/images/product/small/smartwatch1/Smartwatch1.png\" alt=\"\">\r\n          </div>\r\n          <div class=\"product-info\">\r\n              <h4><a href=\"\">Watches</a></h4>\r\n            <ul>\r\n              <li><a href=\"\">Brand 1</a> </li>\r\n              <li><a href=\"\">Brand 1</a> </li>\r\n              <li><a href=\"\">Brand 1</a> </li>\r\n              <li><a href=\"\">Brand 1</a> </li>\r\n              <li><a href=\"\">Brand 1</a> </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "n1DW":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/blog-section-two/blog-section-two.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>blog-section-two works!</p>\r\n");

/***/ }),

/***/ "n21o":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-carousel/product-carousel.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ProductCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCarouselComponent", function() { return ProductCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_carousel_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-carousel.component.html */ "OiT4");
/* harmony import */ var _product_carousel_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-carousel.component.sass */ "lS6w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _products_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../products/product-dialog/product-dialog.component */ "5Tg0");
/* harmony import */ var src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/shared/services/cart.service */ "bjOM");
/* harmony import */ var src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/shared/services/product.service */ "6MrQ");
/* harmony import */ var src_app_components_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/shared/services/wishlist.service */ "m4vo");










let ProductCarouselComponent = class ProductCarouselComponent {
    constructor(dialog, router, cartService, productService, wishlistService) {
        this.dialog = dialog;
        this.router = router;
        this.cartService = cartService;
        this.productService = productService;
        this.wishlistService = wishlistService;
        this.onOpenProductDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.product = [];
        this.config = {};
        this.contentLoaded = false;
    }
    ngOnInit() {
        setTimeout(() => {
            this.contentLoaded = true;
        }, 3000);
    }
    ngAfterViewInit() {
        this.config = {
            observer: true,
            slidesPerView: 4,
            spaceBetween: 16,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: true,
            preloadImages: false,
            lazy: true,
            breakpoints: {
                480: {
                    slidesPerView: 1
                },
                740: {
                    slidesPerView: 2,
                },
                960: {
                    slidesPerView: 3,
                },
                1280: {
                    slidesPerView: 4,
                },
            }
        };
    }
    openProductDialog(product) {
        let dialogRef = this.dialog.open(_products_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ProductDialogComponent"], {
            data: product,
            panelClass: 'product-dialog',
        });
        dialogRef.afterClosed().subscribe(product => {
            if (product) {
                this.router.navigate(['/products', product.id, product.name]);
            }
        });
    }
    // Add to cart
    addToCart(product, quantity = 1) {
        this.cartService.addToCart(product, quantity);
        console.log(product, quantity);
    }
    // Add to wishlist
    addToWishlist(product) {
        this.wishlistService.addToWishlist(product);
    }
    // Add to compare
    addToCompare(product) {
        this.productService.addToCompare(product);
    }
};
ProductCarouselComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"] },
    { type: src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"] },
    { type: src_app_components_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_9__["WishlistService"] }
];
ProductCarouselComponent.propDecorators = {
    onOpenProductDialog: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['product',] }]
};
ProductCarouselComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-carousel',
        template: _raw_loader_product_carousel_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_carousel_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"], src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"], src_app_components_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_9__["WishlistService"]])
], ProductCarouselComponent);



/***/ }),

/***/ "n8/k":
/*!********************************************************!*\
  !*** ./src/app/components/shop/shop-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ShopRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopRoutingModule", function() { return ShopRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _products_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/product-details/product-details.component */ "B8Cg");
/* harmony import */ var _products_product_left_sidebar_product_left_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/product-left-sidebar/product-left-sidebar.component */ "Jspa");
/* harmony import */ var _home_four_home_four_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-four/home-four.component */ "u5eQ");
/* harmony import */ var _products_product_right_sidebar_product_right_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/product-right-sidebar/product-right-sidebar.component */ "2pAx");
/* harmony import */ var _products_product_no_sidebar_product_no_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products/product-no-sidebar/product-no-sidebar.component */ "41q4");
/* harmony import */ var _industrial_industrial_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./industrial/industrial.component */ "o+aM");
/* harmony import */ var _food_food_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./food/food.component */ "QJCp");
/* harmony import */ var _products_product_details_food_product_details_food_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products/product-details-food/product-details-food.component */ "x8rr");
/* harmony import */ var _furniture_furniture_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./furniture/furniture.component */ "vG90");
/* harmony import */ var _home_decor_home_decor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home-decor/home-decor.component */ "GpRW");
/* harmony import */ var _products_product_details_centered_product_details_centered_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./products/product-details-centered/product-details-centered.component */ "gLO+");
/* harmony import */ var _shared_services_resolver_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/services/resolver.service */ "4C+6");















// Routes
const routes = [
    { path: '', component: _home_four_home_four_component__WEBPACK_IMPORTED_MODULE_5__["HomeFourComponent"] },
    { path: 'industrial', component: _industrial_industrial_component__WEBPACK_IMPORTED_MODULE_8__["IndustrialComponent"] },
    { path: 'food', component: _food_food_component__WEBPACK_IMPORTED_MODULE_9__["FoodComponent"] },
    { path: 'furniture', component: _furniture_furniture_component__WEBPACK_IMPORTED_MODULE_11__["FurnitureComponent"] },
    { path: 'home-decor', component: _home_decor_home_decor_component__WEBPACK_IMPORTED_MODULE_12__["HomeDecorComponent"] },
    { path: 'products/:category/left-sidebar', component: _products_product_left_sidebar_product_left_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["ProductLeftSidebarComponent"] },
    { path: 'products/:category/right-sidebar', component: _products_product_right_sidebar_product_right_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["ProductRightSidebarComponent"] },
    { path: 'products/:category/no-sidebar', component: _products_product_no_sidebar_product_no_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["ProductNoSidebarComponent"] },
    { path: 'product/:id', component: _products_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_3__["ProductDetailsComponent"] },
    { path: 'product/food/:id', component: _products_product_details_food_product_details_food_component__WEBPACK_IMPORTED_MODULE_10__["ProductDetailsFoodComponent"] },
    { path: 'product/product-center/:id', component: _products_product_details_centered_product_details_centered_component__WEBPACK_IMPORTED_MODULE_13__["ProductDetailsCenteredComponent"] },
    { path: 'product/product-center-name/:slug', component: _products_product_details_centered_product_details_centered_component__WEBPACK_IMPORTED_MODULE_13__["ProductDetailsCenteredComponent"], resolve: {
            data: _shared_services_resolver_service__WEBPACK_IMPORTED_MODULE_14__["Resolver"]
        } },
];
let ShopRoutingModule = class ShopRoutingModule {
};
ShopRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ShopRoutingModule);



/***/ }),

/***/ "nf4q":
/*!**********************************************************************!*\
  !*** ./src/app/components/shop/industrial/industrial.component.sass ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmR1c3RyaWFsLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "o+aM":
/*!********************************************************************!*\
  !*** ./src/app/components/shop/industrial/industrial.component.ts ***!
  \********************************************************************/
/*! exports provided: IndustrialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndustrialComponent", function() { return IndustrialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_industrial_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./industrial.component.html */ "Z2Ct");
/* harmony import */ var _industrial_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./industrial.component.sass */ "nf4q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/product.service */ "6MrQ");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/cart.service */ "bjOM");






let IndustrialComponent = class IndustrialComponent {
    constructor(productService, cartService) {
        this.productService = productService;
        this.cartService = cartService;
        this.banners = [];
        this.shoppingCartItems = [];
        this.contentLoaded = false;
        this.slides = [
            { title: 'THE BEST CHOICE IS HERE', subtitle: 'New Arrivals On Sale', image: 'assets/images/carousel/banner1.jpg' },
            { title: 'Biggest discount', subtitle: 'Check the promotion', image: 'assets/images/carousel/banner1.jpg' },
            { title: 'Biggest sale', subtitle: 'Dont miss it', image: 'assets/images/carousel/banner1.jpg' },
        ];
    }
    ngOnInit() {
        this.productService.getBanners()
            .subscribe(data => this.banners = data);
        this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
        this.productService.getProducts()
            .subscribe((product) => {
            this.products = product.filter(item => item.type == 'industrial');
        });
        setTimeout(() => {
            this.contentLoaded = true;
        }, 3000);
    }
};
IndustrialComponent.ctorParameters = () => [
    { type: _shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] }
];
IndustrialComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-industrial',
        template: _raw_loader_industrial_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_industrial_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]])
], IndustrialComponent);

// this.productService.getProducts()
// .subscribe(
//   (response => {
//   this.products = response.filter(item => item.type == 'industrial');
//   }
// )


/***/ }),

/***/ "oUM7":
/*!************************************************************************!*\
  !*** ./src/app/components/shared/header-six/header-six.component.sass ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXItc2l4LmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "oo+z":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-details-food/product-zoom-food/product-zoom-food.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"product-dialog\">\r\n\r\n    <div class=\"close-btn-outer\">\r\n      <button mat-mini-fab color=\"warn\" (click)=\"close()\"><mat-icon>close</mat-icon></button>\r\n    </div>\r\n    <div mat-dialog-content>\r\n      <div fxLayout=\"row wrap\" >\r\n          <div>\r\n              <div class=\"swiper-container h-100\">\r\n                  <div class=\"swiper-wrapper\">\r\n                    <img [src]=\"product.pictures\" alt=\"\" class=\"img-fluid\">\r\n                  </div>\r\n\r\n              </div>\r\n          </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    </div>\r\n");

/***/ }),

/***/ "ot2N":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-vertical-food/product-vertical-food.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ProductVerticalFoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductVerticalFoodComponent", function() { return ProductVerticalFoodComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_vertical_food_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-vertical-food.component.html */ "gFt2");
/* harmony import */ var _product_vertical_food_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-vertical-food.component.sass */ "bhLI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/shared/services/product.service */ "6MrQ");





let ProductVerticalFoodComponent = class ProductVerticalFoodComponent {
    constructor(productService) {
        this.productService = productService;
        this.contentLoaded = false;
    }
    ngOnInit() {
        this.productService.getProducts()
            .subscribe((product) => {
            this.products = product.filter(item => item.type == 'food');
        });
        setTimeout(() => {
            this.contentLoaded = true;
        }, 3000);
    }
};
ProductVerticalFoodComponent.ctorParameters = () => [
    { type: src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }
];
ProductVerticalFoodComponent.propDecorators = {
    products: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ProductVerticalFoodComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-vertical-food',
        template: _raw_loader_product_vertical_food_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_vertical_food_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]])
], ProductVerticalFoodComponent);



/***/ }),

/***/ "pA5D":
/*!*******************************************************************!*\
  !*** ./src/app/components/shared/sidebar/sidebar-menu.service.ts ***!
  \*******************************************************************/
/*! exports provided: SidebarMenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarMenuService", function() { return SidebarMenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");




let SidebarMenuService = class SidebarMenuService {
    constructor(router) {
        this.router = router;
        this.currentUrl = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](undefined);
    }
};
SidebarMenuService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SidebarMenuService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SidebarMenuService);



/***/ }),

/***/ "pBa0":
/*!**************************************************************************************!*\
  !*** ./src/app/components/shared/categories-section/categories-section.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CategoriesSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesSectionComponent", function() { return CategoriesSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_categories_section_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./categories-section.component.html */ "mVxA");
/* harmony import */ var _categories_section_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories-section.component.sass */ "SjMf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let CategoriesSectionComponent = class CategoriesSectionComponent {
    constructor() {
        this.contentLoaded = false;
    }
    ngOnInit() {
        setTimeout(() => {
            this.contentLoaded = true;
        }, 3000);
    }
};
CategoriesSectionComponent.ctorParameters = () => [];
CategoriesSectionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-categories-section',
        template: _raw_loader_categories_section_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_categories_section_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], CategoriesSectionComponent);



/***/ }),

/***/ "pLD3":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/banner-promotion/banner-promotion.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"banner-pro\">\r\n    <ngx-skeleton-loader\r\n                  *ngIf=\"!contentLoaded\"\r\n                    count=\"1\"\r\n                    [theme]=\"{  height: '442px' }\"\r\n                  ></ngx-skeleton-loader>\r\n    <img *ngIf=\"contentLoaded\" src=\"assets/images/background/banerce.png\" alt=\"\">\r\n</div>\r\n");

/***/ }),

/***/ "pSVm":
/*!*****************************************************!*\
  !*** ./src/app/components/demo/demo.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".demo-wrapper .demo-header {\n  background-image: url('demo-header-bg.jpg');\n  background-size: cover;\n  background-position: center;\n  padding: 116px 0 116px 0;\n}\n.demo-wrapper .demo-header .left-panel {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n.demo-wrapper .demo-header .left-panel .logo {\n  margin-bottom: 20px;\n}\n.demo-wrapper .demo-header .left-panel .text-intro h1 {\n  text-transform: capitalize;\n  color: #ef6c00;\n  line-height: 58px;\n}\n.demo-wrapper .demo-header .left-panel .text-intro h1 .powerful {\n  font-size: 37px;\n  font-weight: 300;\n  letter-spacing: 7px;\n  color: #fff;\n}\n.demo-wrapper .demo-header .left-panel .text-intro h1 .theme {\n  font-size: 38px;\n  font-weight: 300;\n  color: #fff;\n}\n.demo-wrapper .demo-header .left-panel .button .ped-btn {\n  border: 1px solid #ef6c00;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 700;\n  margin-top: 20px;\n  padding: 12px 10px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: all 0.4s ease 0s;\n  z-index: 222;\n  background: #ef6c00;\n  width: 175px;\n  border-radius: 3px;\n}\n.demo-wrapper .demo-header .left-panel ul {\n  display: flex;\n  justify-content: center;\n  margin-top: 15px;\n}\n.demo-wrapper .demo-header .left-panel ul li {\n  color: #fff;\n  margin-right: 7px;\n}\n.demo-wrapper .demo-header .left-panel ul li i {\n  margin-right: 5px;\n  font-size: 16px;\n}\n.demo-wrapper .demo-header .right-panel img {\n  width: 100%;\n  height: auto;\n}\n.demo-wrapper .demo-showcase.other-demos {\n  background-color: #f3f4f5 !important;\n}\n.demo-wrapper .demo-showcase.other-demos .demos .item .first {\n  box-shadow: 3px 4px 14px 0 rgba(0, 0, 0, 0.06);\n  border: none !important;\n}\n.demo-wrapper .demo-showcase .title {\n  text-align: center;\n  margin-bottom: 80px;\n}\n.demo-wrapper .demo-showcase .title h2 {\n  font-weight: 500;\n}\n.demo-wrapper .demo-showcase .title p {\n  margin-top: 15px;\n}\n.demo-wrapper .demo-showcase .demos .item {\n  margin-bottom: 50px;\n  position: relative;\n}\n.demo-wrapper .demo-showcase .demos .item img {\n  max-width: 100%;\n}\n.demo-wrapper .demo-showcase .demos .item .ped-btn {\n  border: 1px solid #ef6c00;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 700;\n  margin: 0 auto;\n  padding: 12px 10px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: all 0.4s ease 0s;\n  z-index: 222;\n  background: #ef6c00;\n  width: 160px;\n  border-radius: 3px;\n  position: absolute;\n  top: 47%;\n  left: 0;\n  right: 0;\n  z-index: 99999;\n  opacity: 0;\n  box-shadow: 2px 2px 24px -8px rgba(0, 0, 0, 0.59);\n}\n.demo-wrapper .demo-showcase .demos .item:hover .ped-btn {\n  opacity: 1;\n}\n.demo-wrapper .demo-showcase .demos .item .first {\n  background: #fff none repeat scroll 0 0;\n  margin-bottom: 0;\n  overflow: hidden;\n  position: relative;\n  width: auto;\n  z-index: 99;\n  border: 2px solid #F0F0F0;\n}\n.demo-wrapper .demo-showcase .demos .item .seccond {\n  margin-top: 10px;\n  display: inline-block;\n  width: 100%;\n  vertical-align: top;\n  text-align: center;\n}\n.demo-wrapper .demo-showcase .demos .item .seccond h4 {\n  font-weight: 600;\n}\n.demo-wrapper .demo-showcase .demos .item .sec {\n  margin: 0 auto !important;\n}\n.demo-wrapper .demo-showcase .demo-row-sec {\n  align-content: center;\n}\n.demo-wrapper .dashboard-view {\n  background: #242527;\n}\n.demo-wrapper .dashboard-view .title {\n  padding: 30px 40px 0 0;\n}\n.demo-wrapper .dashboard-view .title h2 {\n  color: #fff;\n}\n.demo-wrapper .dashboard-view .title p {\n  color: #fff;\n  line-height: 24px;\n  margin-top: 20px;\n}\n.demo-wrapper .dashboard-view .sophia-dash img {\n  max-width: 100%;\n  box-shadow: -2px 3px 16px -6px rgba(0, 0, 0, 0.75);\n}\n.demo-wrapper .dashboard-view ul {\n  margin-top: 20px;\n}\n.demo-wrapper .dashboard-view ul li {\n  display: flex;\n  align-items: center;\n  color: #fff;\n  line-height: 30px;\n}\n.demo-wrapper .dashboard-view ul li span {\n  margin-right: 5px;\n}\n.demo-wrapper .dashboard-view .button a {\n  border: 1px solid #ef6c00;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 700;\n  margin-top: 20px;\n  padding: 12px 10px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: all 0.4s ease 0s;\n  z-index: 222;\n  background: #ef6c00;\n  width: 175px;\n  border-radius: 3px;\n}\n.demo-wrapper .color-showcase {\n  background: #f3f4f5;\n}\n.demo-wrapper .color-showcase .title {\n  margin-bottom: 50px;\n}\n.demo-wrapper .color-showcase .title h2 {\n  text-align: center;\n}\n.demo-wrapper .color-showcase .demos .item {\n  margin: 0 auto;\n  position: relative;\n}\n.demo-wrapper .color-showcase .demos .item img {\n  max-width: 100%;\n}\n.demo-wrapper .color-showcase .demos .item .ped-btn {\n  border: 1px solid #ef6c00;\n  color: #333;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 700;\n  margin: 0 auto;\n  padding: 12px 10px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: all 0.4s ease 0s;\n  z-index: 222;\n  background: #ef6c00;\n  width: 160px;\n  border-radius: 3px;\n  position: absolute;\n  top: 47%;\n  left: 0;\n  right: 0;\n  z-index: 99999;\n  opacity: 0;\n}\n.demo-wrapper .color-showcase .demos .item:hover .ped-btn {\n  opacity: 1;\n}\n.demo-wrapper .color-showcase .demos .item.middle {\n  margin: 0 60px 40px 60px;\n}\n.demo-wrapper .color-showcase .demos .item .first {\n  margin-bottom: 0;\n  /* height: 490px; */\n  /* overflow: hidden; */\n  position: relative;\n  width: auto;\n  z-index: 99;\n  margin-right: 15px;\n}\n.demo-wrapper .color-showcase .demos .item .first img {\n  border: 2px solid #e6e6e6;\n}\n.demo-wrapper .color-showcase .demos .item .sec {\n  margin: 0 auto !important;\n}\n.demo-wrapper .color-showcase .demo-row-sec {\n  align-content: center;\n}\n.demo-wrapper .main-features .features-wrap .title {\n  text-align: center;\n  margin-bottom: 80px;\n}\n.demo-wrapper .main-features .features-wrap .title h2 {\n  font-weight: 400;\n}\n.demo-wrapper .main-features .features-wrap .features .row {\n  margin-bottom: 50px;\n}\n.demo-wrapper .main-features .features-wrap .features .row .feature-item {\n  padding: 0 20px 0 0;\n}\n.demo-wrapper .main-features .features-wrap .features .row .feature-item .icon-box {\n  display: inline-block;\n}\n.demo-wrapper .main-features .features-wrap .features .row .feature-item .text-box {\n  padding: 55px 0 0 25px;\n}\n.demo-wrapper .main-features .features-wrap .features .row .feature-item .text-box h4 {\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n.demo-wrapper .main-features .features-wrap .features .row .feature-item .text-box p {\n  color: #333;\n}\n@media (max-width: 959px) {\n  .demo-wrapper .demo-showcase .demos .item {\n    margin: 0 auto;\n  }\n}\n@media (max-width: 475px) {\n  .main-features .features-wrap .features .row {\n    margin-bottom: 0px !important;\n  }\n  .main-features .features-wrap .features .row .feature-item {\n    padding: 0;\n    margin-bottom: 30px;\n  }\n  .main-features .features-wrap .features .row .feature-item .icon-box img {\n    max-width: 100px;\n  }\n  .main-features .features-wrap .features .row .feature-item .text-box {\n    padding: 0px 0 0 18px !important;\n  }\n  .main-features .features-wrap .features .row .feature-item .text-box h4 {\n    font-size: 20px !important;\n    font-weight: 600;\n    margin-bottom: 10px;\n  }\n  .main-features .features-wrap .features .row .feature-item .text-box p {\n    color: #333;\n  }\n\n  .text-intro h1 .powerful {\n    font-size: 45px !important;\n  }\n\n  .demo-header {\n    margin: 0 !important;\n    padding: 100px 0 100px 0 !important;\n  }\n  .demo-header .left-panel {\n    margin-bottom: 20px !important;\n  }\n\n  .likeUs .theme-features {\n    width: 80% !important;\n    max-width: 100% !important;\n    padding: 26px !important;\n  }\n  .likeUs .title h2 {\n    font-size: 28px !important;\n    line-height: 33px !important;\n  }\n}\n.likeUs .theme-features {\n  margin: 0 auto;\n  background-color: #e8e8e8;\n  max-width: 540px;\n  padding: 1px;\n  border-radius: 6px;\n}\n.likeUs .theme-features .mat-card .item h2 {\n  font-weight: 400;\n  margin-bottom: 10px;\n}\n.likeUs .theme-features .mat-card .item ul {\n  margin-top: 17px;\n}\n.likeUs .theme-features .mat-card .item ul li {\n  margin-bottom: 10px;\n  font-weight: 600;\n}\n.likeUs .theme-features .mat-card .item ul li i {\n  margin-right: 5px;\n  font-size: 16px;\n}\n.likeUs .title {\n  text-align: center;\n  margin-top: 20px;\n}\n.likeUs .title h1 {\n  text-align: center;\n}\n.likeUs .stars {\n  margin-top: 20px;\n  color: #ef6c00;\n}\n.footer {\n  background: #222222;\n}\n.footer p {\n  color: #fff;\n  padding: 10px 0;\n  text-align: center;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkZW1vLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsMkNBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7QUFBSjtBQUNJO0VBQ0UsV0FBQTtFQUNGLFlBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFDRSxtQkFBQTtBQUVOO0FBQ007RUFDRSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNSO0FBQVE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFFVjtBQUNRO0VBQ0UsZUFBQTtFQUNOLGdCQUFBO0VBQ0EsV0FBQTtBQUNKO0FBSUU7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRk47QUFLQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNGLGdCQUFBO0FBSEE7QUFJRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQUZKO0FBR0k7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFETjtBQU9NO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFMUjtBQVVJO0VBQ0Usb0NBQUE7QUFSTjtBQVdVO0VBQ0UsOENBQUE7RUFDQSx1QkFBQTtBQVRaO0FBZUk7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBYk47QUFjTTtFQUNFLGdCQUFBO0FBWlI7QUFjTTtFQUNFLGdCQUFBO0FBWlI7QUFnQk07RUFDQyxtQkFBQTtFQUVDLGtCQUFBO0FBZlI7QUFnQlE7RUFDRSxlQUFBO0FBZFY7QUFpQlU7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBR2QsaURBQUE7QUFmQTtBQW1CVTtFQUNFLFVBQUE7QUFqQlo7QUF1QlE7RUFDRSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFyQlY7QUF1QlE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFyQlY7QUFzQlU7RUFDRSxnQkFBQTtBQXBCWjtBQXVCRztFQUNFLHlCQUFBO0FBckJMO0FBMEJJO0VBQ0UscUJBQUE7QUF4Qk47QUE2QkU7RUFDRSxtQkFBQTtBQTNCSjtBQTRCSTtFQUNFLHNCQUFBO0FBMUJOO0FBMkJJO0VBQ0UsV0FBQTtBQXpCTjtBQTJCSTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNGLGdCQUFBO0FBekJKO0FBNkJNO0VBQ0UsZUFBQTtFQUdSLGtEQUFBO0FBM0JBO0FBOEJJO0VBQ0UsZ0JBQUE7QUE1Qk47QUE2Qk07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUEzQlI7QUE0QlE7RUFDRSxpQkFBQTtBQTFCVjtBQStCTTtFQUNFLHlCQUFBO0VBQ0osV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUE3Qko7QUFpQ0U7RUFFSSxtQkFBQTtBQWhDTjtBQWtDSTtFQUNFLG1CQUFBO0FBaENOO0FBaUNNO0VBQ0Usa0JBQUE7QUEvQlI7QUFtQ007RUFDRSxjQUFBO0VBRUEsa0JBQUE7QUFsQ1I7QUFtQ1E7RUFDRSxlQUFBO0FBakNWO0FBb0NVO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQWxDZDtBQXNDVTtFQUNFLFVBQUE7QUFwQ1o7QUF1Q1E7RUFDRSx3QkFBQTtBQXJDVjtBQXVDUTtFQUNKLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQXJDSjtBQXdDSTtFQUNFLHlCQUFBO0FBdENOO0FBMkNHO0VBQ0UseUJBQUE7QUF6Q0w7QUE4Q0k7RUFDRSxxQkFBQTtBQTVDTjtBQW9EUTtFQUNDLGtCQUFBO0VBQ0EsbUJBQUE7QUFsRFQ7QUFtRFM7RUFDRSxnQkFBQTtBQWpEWDtBQXFEVTtFQUNFLG1CQUFBO0FBbkRaO0FBb0RZO0VBQ0UsbUJBQUE7QUFsRGQ7QUFtRGM7RUFDRSxxQkFBQTtBQWpEaEI7QUFvRGM7RUFDRSxzQkFBQTtBQWxEaEI7QUFtRGU7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWpEaEI7QUFtRGU7RUFDQSxXQUFBO0FBakRmO0FBMkVBO0VBSUk7SUFDRSxjQUFBO0VBM0VKO0FBQ0Y7QUFnRkE7RUFLVTtJQUNFLDZCQUFBO0VBbEZWO0VBbUZVO0lBQ0UsVUFBQTtJQUNBLG1CQUFBO0VBakZaO0VBbUZjO0lBQ0UsZ0JBQUE7RUFqRmhCO0VBcUZZO0lBQ0UsZ0NBQUE7RUFuRmQ7RUFvRmE7SUFDQywwQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUFsRmQ7RUFvRmE7SUFDQSxXQUFBO0VBbEZiOztFQThGSTtJQUNFLDBCQUFBO0VBM0ZOOztFQWtHQTtJQUNFLG9CQUFBO0lBQ0EsbUNBQUE7RUEvRkY7RUFnR0U7SUFDRSw4QkFBQTtFQTlGSjs7RUFvR0U7SUFDRSxxQkFBQTtJQUNBLDBCQUFBO0lBQ0Esd0JBQUE7RUFqR0o7RUFxR0k7SUFDRSwwQkFBQTtJQUVBLDRCQUFBO0VBcEdOO0FBQ0Y7QUF5R0U7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQXZHSjtBQTBHTztFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUF4R1Q7QUEwR087RUFDRSxnQkFBQTtBQXhHVDtBQXlHUztFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUF2R1g7QUF3R1c7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUF0R2I7QUE2R0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBM0dKO0FBNEdJO0VBQ0Usa0JBQUE7QUExR047QUE2R0U7RUFDQyxnQkFBQTtFQUNBLGNBQUE7QUEzR0g7QUE4R0E7RUFDRSxtQkFBQTtBQTNHRjtBQTRHRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQTFHSiIsImZpbGUiOiJkZW1vLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbW8td3JhcHBlciB7XHJcbiAgLmRlbW8taGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVtby9kZW1vLWhlYWRlci1iZy5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMTZweCAwIDExNnB4IDA7XHJcbiAgICAubGVmdC1wYW5lbCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLmxvZ28ge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLnRleHQtaW50cm8ge1xyXG4gICAgICBoMSB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgY29sb3I6ICNlZjZjMDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDU4cHg7XHJcbiAgICAgICAgLnBvd2VyZnVsIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzdweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogN3B4O1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAudGhlbWUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4uYnV0dG9uIHtcclxuICAucGVkLWJ0biB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZjZjMDA7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBwYWRkaW5nOiAxMnB4IDEwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcclxuICAgICAgei1pbmRleDogMjIyO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZWY2YzAwO1xyXG4gICAgICB3aWR0aDogMTc1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcbn1cclxudWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbm1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbGkge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgIGkge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4gICAgfVxyXG4gICAgLnJpZ2h0LXBhbmVsIHtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmRlbW8tc2hvd2Nhc2Uge1xyXG4gICAgJi5vdGhlci1kZW1vcyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjUgIWltcG9ydGFudDtcclxuICAgICAgLmRlbW9zIHtcclxuICAgICAgICAuaXRlbSB7XHJcbiAgICAgICAgICAuZmlyc3Qge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAzcHggNHB4IDE0cHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudGl0bGUge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbiAgICAgIGgyIHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgIH1cclxuICAgICB9XHJcbiAgICAuZGVtb3Mge1xyXG4gICAgICAuaXRlbSB7XHJcbiAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICBcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnBlZC1idG4ge1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZjZjMDA7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcclxuICAgICAgICAgICAgICB6LWluZGV4OiAyMjI7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VmNmMwMDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDQ3JTtcclxuICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDk5OTk5O1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDI0cHggLThweCByZ2JhKDAsMCwwLDAuNTkpO1xyXG4tbW96LWJveC1zaGFkb3c6IDJweCAycHggMjRweCAtOHB4IHJnYmEoMCwwLDAsMC41OSk7XHJcbmJveC1zaGFkb3c6IDJweCAycHggMjRweCAtOHB4IHJnYmEoMCwwLDAsMC41OSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgLnBlZC1idG4ge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLm1pZGRsZSB7XHJcbiAgICAgICAgLy8gIG1hcmdpbjogMCA2MHB4IDQwcHggNjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZpcnN0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNGMEYwRjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWNjb25kIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAuc2VjIHtcclxuICAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAuZGVtby1yb3ctc2VjIHtcclxuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAuaXRlbSB7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmRhc2hib2FyZC12aWV3IHtcclxuICAgIGJhY2tncm91bmQ6ICMyNDI1Mjc7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICBwYWRkaW5nOiAzMHB4IDQwcHggMCAwO1xyXG4gICAgaDIge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgLnNvcGhpYS1kYXNoIHtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMnB4IDNweCAxNnB4IC02cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuLW1vei1ib3gtc2hhZG93OiAtMnB4IDNweCAxNnB4IC02cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuYm94LXNoYWRvdzogLTJweCAzcHggMTZweCAtNnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHVsIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ1dHRvbiB7XHJcbiAgICAgIGEge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZjZjMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTJweCAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XHJcbiAgICB6LWluZGV4OiAyMjI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWY2YzAwO1xyXG4gICAgd2lkdGg6IDE3NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuICAuY29sb3Itc2hvd2Nhc2Uge1xyXG4gICBcclxuICAgICAgYmFja2dyb3VuZDogI2YzZjRmNTtcclxuICBcclxuICAgIC50aXRsZSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgIGgyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5kZW1vcyB7XHJcbiAgICAgIC5pdGVtIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5wZWQtYnRuIHtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWY2YzAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAxMHB4O1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMjIyO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZjZjMDA7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgdG9wOiA0NyU7XHJcbiAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICB6LWluZGV4OiA5OTk5OTtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIC5wZWQtYnRuIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi5taWRkbGUge1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDYwcHggNDBweCA2MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmlyc3Qge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIC8qIGhlaWdodDogNDkwcHg7ICovXHJcbiAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuXHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgI2U2ZTZlNjtcclxuICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgLnNlYyB7XHJcbiAgICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcclxuICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLmRlbW8tcm93LXNlYyB7XHJcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgLml0ZW0ge1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5tYWluLWZlYXR1cmVzIHtcclxuICAgIFxyXG4gICAgLmZlYXR1cmVzLXdyYXAge1xyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICAgICAgICAgaDIge1xyXG4gICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmZlYXR1cmVzIHtcclxuICAgICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgICAgICAuZmVhdHVyZS1pdGVtIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHggMCAwO1xyXG4gICAgICAgICAgICAgIC5pY29uLWJveCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAudGV4dC1ib3gge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNTVweCAwIDAgMjVweDtcclxuICAgICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgLmRlbW8td3JhcHBlciB7XHJcbiAgICAuZGVtby1zaG93Y2FzZSB7XHJcbiAgICAgIC5kZW1vcyB7XHJcbiAgICAgICAgLml0ZW0ubWlkZGxlIHtcclxuICAgICAgICAvLyAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIH1cclxuICAgICAgLml0ZW0ge1xyXG5cclxuICAgICAgICAvLyAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuXHJcbiAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOiA5NTlweCkge1xyXG4gIC5kZW1vLXdyYXBwZXIge1xyXG4gICAgLmRlbW8tc2hvd2Nhc2Uge1xyXG4gIC5kZW1vcyB7XHJcbiAgICAuaXRlbSB7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuICAgIH1cclxuICB9ICBcclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOiA0NzVweCkge1xyXG4gIC5tYWluLWZlYXR1cmVzIHtcclxuICAgIC5mZWF0dXJlcy13cmFwIHtcclxuXHJcbiAgICAgICAgLmZlYXR1cmVzIHtcclxuICAgICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLmZlYXR1cmUtaXRlbSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICAgIC5pY29uLWJveCB7XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnRleHQtYm94IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAwIDAgMThweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50ZXh0LWludHJvIHtcclxuICAgIGgxIHtcclxuXHJcbiAgICAgIC5wb3dlcmZ1bCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0NXB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRlbW8taGVhZGVyIHtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMTAwcHggMCAxMDBweCAwICFpbXBvcnRhbnQ7XHJcbiAgICAubGVmdC1wYW5lbCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5saWtlVXMge1xyXG5cclxuICAgIC50aGVtZS1mZWF0dXJlcyB7XHJcbiAgICAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmc6IDI2cHggIWltcG9ydGFudDtcclxuXHJcbiAgICB9XHJcbiAgICAudGl0bGUge1xyXG4gICAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLmxpa2VVcyB7XHJcbiAgLnRoZW1lLWZlYXR1cmVzIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcclxuICAgIG1heC13aWR0aDogNTQwcHg7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgIC5tYXQtY2FyZCB7XHJcbiAgICAgLml0ZW0ge1xyXG4gICAgICAgaDIge1xyXG4gICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgfVxyXG4gICAgICAgdWwge1xyXG4gICAgICAgICBtYXJnaW4tdG9wOiAxN3B4O1xyXG4gICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgICAgfVxyXG4gICB9XHJcbiAgfVxyXG4gIC50aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgaDEge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zdGFycyB7XHJcbiAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgIGNvbG9yOiAjZWY2YzAwO1xyXG4gIH1cclxufVxyXG4uZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMjIyMjIyO1xyXG4gIHAge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "rZKE":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/industrial/main-carousel-industrial/main-carousel-industrial.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  \r\n    <div class=\"main-slider\">\r\n        <div class=\"swiper-container h-100\" [swiper]=\"config\">\r\n          <div class=\"swiper-wrapper h-100\">\r\n            <div *ngFor=\"let slide of slides\" class=\"swiper-slide\" >\r\n\r\n                    <div [attr.data-background]=\"slide.image\" class=\"slide-item swiper-lazy\">\r\n                      <div class=\"container sl-wrap\">\r\n                          <div class=\"swiper-lazy-preloader swiper-lazy-preloader-white\"></div>\r\n\r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"center left\" class=\"content\">\r\n                            <h1>{{slide.title}}</h1>\r\n                            <h3>{{slide.subtitle}}</h3>\r\n                            <button mat-raised-button color=\"primary\">Shop now</button>\r\n                          </div>\r\n                      </div>\r\n\r\n                    </div>\r\n\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"swiper-pagination white\"></div>\r\n          <button mat-mini-fab color=\"primary\" class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n          <button mat-mini-fab color=\"primary\" class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n");

/***/ }),

/***/ "rfhx":
/*!**********************************************************************************!*\
  !*** ./src/app/components/shared/blog-section-two/blog-section-two.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BlogSectionTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogSectionTwoComponent", function() { return BlogSectionTwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_blog_section_two_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./blog-section-two.component.html */ "n1DW");
/* harmony import */ var _blog_section_two_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog-section-two.component.sass */ "a/SU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let BlogSectionTwoComponent = class BlogSectionTwoComponent {
    constructor() { }
    ngOnInit() {
    }
};
BlogSectionTwoComponent.ctorParameters = () => [];
BlogSectionTwoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-blog-section-two',
        template: _raw_loader_blog_section_two_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_blog_section_two_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], BlogSectionTwoComponent);



/***/ }),

/***/ "sXIy":
/*!************************************************************************************!*\
  !*** ./src/app/components/shared/shopping-widgets/shopping-widgets.component.sass ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wcGluZy13aWRnZXRzLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "sxMe":
/*!****************************************************************************!*\
  !*** ./src/app/components/shared/blog-section/blog-section.component.sass ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLXNlY3Rpb24uY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "tgXX":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-details-centered/product-zoom/product-zoom.component.sass ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LXpvb20uY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "u5eQ":
/*!******************************************************************!*\
  !*** ./src/app/components/shop/home-four/home-four.component.ts ***!
  \******************************************************************/
/*! exports provided: HomeFourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeFourComponent", function() { return HomeFourComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_four_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home-four.component.html */ "v/VX");
/* harmony import */ var _home_four_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-four.component.sass */ "2rU4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/product.service */ "6MrQ");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/cart.service */ "bjOM");






let HomeFourComponent = class HomeFourComponent {
    constructor(productService, cartService) {
        this.productService = productService;
        this.cartService = cartService;
        this.banners = [];
        this.currencies = ['SOLES', 'EUR'];
        this.flags = [
            { name: 'English', image: 'assets/images/flags/gb.svg' },
            { name: 'German', image: 'assets/images/flags/de.svg' },
            { name: 'French', image: 'assets/images/flags/fr.svg' },
            { name: 'Russian', image: 'assets/images/flags/ru.svg' },
            { name: 'Turkish', image: 'assets/images/flags/tr.svg' }
        ];
        this.shoppingCartItems = [];
        this.wishlistItems = [];
        this.contentLoaded = false;
        this.slides = [
            { title: 'Gran Venta', subtitle: 'Hasta 70% Descuento', image: 'assets/images/banner/1.jpg' },
            { title: 'Grandes Descuento', subtitle: 'Revisa la promociòn', image: 'assets/images/banner/2.jpg' },
            { title: 'Gran Venta', subtitle: 'No te lo pierdas', image: 'assets/images/banner/3.jpg' },
            { title: 'Nuestros mejores productos', subtitle: 'Seleccion especial', image: 'assets/images/banner/4.jpg' },
            { title: 'Venta Masiva', subtitle: 'Solo por hoy', image: 'assets/images/banner/5.jpg' }
        ];
        this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
    }
    ngOnInit() {
        this.productService.getBanners()
            .subscribe(data => this.banners = data);
        this.productService.getProducts()
            .subscribe((product) => {
            this.products = product;
        });
        this.currency = this.currencies[0];
        this.flag = this.flags[0];
        setTimeout(() => {
            this.contentLoaded = true;
        }, 3000);
    }
    changeCurrency(currency) {
        this.currency = currency;
    }
    changeLang(flag) {
        this.flag = flag;
    }
};
HomeFourComponent.ctorParameters = () => [
    { type: _shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] }
];
HomeFourComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home-four',
        template: _raw_loader_home_four_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_four_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]])
], HomeFourComponent);



/***/ }),

/***/ "uBKW":
/*!**********************************************************************************!*\
  !*** ./src/app/components/shared/shopping-widgets/shopping-widgets.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ShoppingWidgetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingWidgetsComponent", function() { return ShoppingWidgetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_shopping_widgets_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./shopping-widgets.component.html */ "cvCz");
/* harmony import */ var _shopping_widgets_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-widgets.component.sass */ "sXIy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cart.service */ "bjOM");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/product.service */ "6MrQ");






let ShoppingWidgetsComponent = class ShoppingWidgetsComponent {
    constructor(cartService, productService) {
        this.cartService = cartService;
        this.productService = productService;
        this.shoppingCartItems = [];
    }
    ngOnInit() {
    }
    updateCurrency(curr) {
        this.productService.currency = curr;
    }
    removeItem(item) {
        this.cartService.removeFromCart(item);
    }
    getTotal() {
        return this.cartService.getTotalAmount();
    }
};
ShoppingWidgetsComponent.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] }
];
ShoppingWidgetsComponent.propDecorators = {
    shoppingCartItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ShoppingWidgetsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-shopping-widgets',
        template: _raw_loader_shopping_widgets_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_shopping_widgets_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"], _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]])
], ShoppingWidgetsComponent);



/***/ }),

/***/ "uKwF":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header-four/header-four.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"home-header-4\">\r\n    <div class=\"container\"fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutGap=\"20px\" fxlayoutalign=\"space-between center\">\r\n      <div class=\"logo\">\r\n          <a [routerLink]=\"['/home/four']\" routerLinkActive=\"router-link-active\" ><img src=\"assets/images/logo-tien1.jpg\"></a>\r\n      </div>\r\n      <div fxflexoffset.gt-sm=\"10\"  fxFlex class=\"search-form\">\r\n       <form class=\"search-form\" fxLayout=\"row\">\r\n         <div class=\"form-wrap\">\r\n            <input type=\"text\" placeholder=\"Type to search...\">\r\n            <button class=\"btn-search\" type=\"submit\"><i class=\"fa fa-search\"></i></button>\r\n         </div>\r\n       </form>\r\n      </div>\r\n      <div class=\"call-bucket-wrap\" fxLayout=\"row\" fxLayout.sm=\"row\" fxLayoutAlign=\"center center\" >\r\n        <div class=\"info-message-icon\"  fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n          <div class=\"icon\"  fxLayout=\"row\" >\r\n              <mat-icon class=\"mat-icon-lg mat-icon material-icons\">call</mat-icon>\r\n          </div>\r\n            <div class=\"info-text\">\r\n              <p>Helpline:</p>\r\n               <span>02(981)336 111</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"main-menu-wrapper-2\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" >\r\n            <mat-toolbar class=\"top-navbar top menu\">\r\n              <app-shopping-widgets-two [shoppingCartItems]=\"shoppingCartItems\"></app-shopping-widgets-two>\r\n            </mat-toolbar>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div fxShow=\"false\" fxShow.gt-sm class=\"menu-container5\">\r\n      <app-menu></app-menu>\r\n  </div>\r\n\r\n\r\n");

/***/ }),

/***/ "v/VX":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/home-four/home-four.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<div>\r\n    <ngx-skeleton-loader\r\n            *ngIf=\"!contentLoaded\"\r\n              [theme]=\"{ 'border-radius': '0', height: '550px'  }\"\r\n              count=\"1\"\r\n            ></ngx-skeleton-loader>\r\n    <app-main-carousel *ngIf=\"contentLoaded\" [slides]=\"slides\"></app-main-carousel>\r\n</div>\r\n<div class=\"home-1-wrap\">\r\n    <div  class=\"info-bar-four-wrapper\">\r\n        <div class=\"container\">\r\n            <div fxLayout=\"row wrap\" class=\"info-bar-four\">\r\n                <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n                    <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                        <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" appearance=\"circle\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n                        <mat-icon *ngIf=\"contentLoaded\" mat-stroked-button color=\"primary\" class=\"mat-icon-xlg  m-0\">card_giftcard</mat-icon>\r\n                        <div  class=\"content\">\r\n                        <ngx-skeleton-loader\r\n                        *ngIf=\"!contentLoaded\"\r\n                            count=\"2\"\r\n                            [theme]=\"{ 'border-radius': '0', width: '200px', height: '20px' }\"\r\n                        ></ngx-skeleton-loader>\r\n                        <p *ngIf=\"contentLoaded\">BONUS PLUS</p>\r\n                        <span *ngIf=\"contentLoaded\" class=\"text-muted m-0\">Get a bonus plus for buying more that three products</span>\r\n                        </div>\r\n                    </mat-card>\r\n                </div>\r\n                <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n                    <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                        <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" appearance=\"circle\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n                        <mat-icon *ngIf=\"contentLoaded\" mat-stroked-button color=\"primary\" class=\"mat-icon-xlg  m-0\">local_shipping</mat-icon>\r\n                        <div class=\"content\">\r\n                        <ngx-skeleton-loader\r\n                        *ngIf=\"!contentLoaded\"\r\n                            count=\"2\"\r\n                            [theme]=\"{ 'border-radius': '0', width: '200px', height: '20px' }\"\r\n                        ></ngx-skeleton-loader>\r\n                        <p *ngIf=\"contentLoaded\">FREE SHIPPING</p>\r\n                        <span *ngIf=\"contentLoaded\" class=\"text-muted m-0\">Free shipping on all orders over $99</span>\r\n                        </div>\r\n                    </mat-card>\r\n                </div>\r\n                <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n                    <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                        <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" appearance=\"circle\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n                        <mat-icon *ngIf=\"contentLoaded\" mat-stroked-button color=\"primary\" class=\"mat-icon-xlg m-0\">monetization_on</mat-icon>\r\n                        <div class=\"content\">\r\n                        <ngx-skeleton-loader\r\n                        *ngIf=\"!contentLoaded\"\r\n                            count=\"2\"\r\n                            [theme]=\"{ 'border-radius': '0', width: '200px', height: '20px' }\"\r\n                        ></ngx-skeleton-loader>\r\n                        <p *ngIf=\"contentLoaded\">MONEY BACK GUARANTEE</p>\r\n                        <span *ngIf=\"contentLoaded\" class=\"text-muted m-0\">100% money back guarantee</span>\r\n                        </div>\r\n                    </mat-card>\r\n                </div>\r\n                <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n                    <mat-card class=\"light-block no-bd\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                        <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" appearance=\"circle\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n                        <mat-icon *ngIf=\"contentLoaded\"  mat-stroked-button color=\"primary\" class=\"mat-icon-xlg m-0\">history</mat-icon>\r\n                        <div class=\"content\">\r\n                        <ngx-skeleton-loader\r\n                            *ngIf=\"!contentLoaded\"\r\n                            count=\"2\"\r\n                            [theme]=\"{ 'border-radius': '0', width: '200px', height: '20px' }\"\r\n                            ></ngx-skeleton-loader>\r\n                        <p *ngIf=\"contentLoaded\" >ONLINE SUPPORT 24/7</p>\r\n                        <span *ngIf=\"contentLoaded\"  class=\"text-muted m-0\">Call us: 02 3555 65454 55</span>\r\n                        </div>\r\n                    </mat-card>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n            \r\n\r\n    <div class=\"banners-four\">\r\n        <div class=\"container\">\r\n            <app-banners-four [banners]=\"banners\"></app-banners-four>\r\n        </div>\r\n    </div>\r\n    <div class=\"container\">\r\n        <div class=\"products sec-padding\">\r\n            <div class=\"products-four\">\r\n                    <h3>PRODUCTOS PUPULARES</h3>\r\n                    <app-product-carousel [product]=\"products | slice:0:8\"></app-product-carousel>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"featured-products-wrap\">\r\n        <div class=\"container\">\r\n            <div class=\"products sec-padding\">\r\n                <div class=\"products-four\">\r\n                    <h3>PRODUCTOS DESTACADOS</h3>\r\n                    <app-product-carousel [product]=\"products | slice:8:16\"></app-product-carousel>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"main-banner\">\r\n        <app-banner-promotion></app-banner-promotion>\r\n    </div>\r\n    <div class=\"container\">\r\n        <app-product-vertical [products]=\"products\"></app-product-vertical>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "vEIM":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-details-left/product-details-left.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>product-details-left works!</p>\r\n");

/***/ }),

/***/ "vEwb":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/banners/banners.component.sass ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYW5uZXJzLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "vG90":
/*!******************************************************************!*\
  !*** ./src/app/components/shop/furniture/furniture.component.ts ***!
  \******************************************************************/
/*! exports provided: FurnitureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FurnitureComponent", function() { return FurnitureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_furniture_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./furniture.component.html */ "vSKQ");
/* harmony import */ var _furniture_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./furniture.component.sass */ "QjOo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/product.service */ "6MrQ");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/cart.service */ "bjOM");






let FurnitureComponent = class FurnitureComponent {
    constructor(productService, cartService) {
        this.productService = productService;
        this.cartService = cartService;
        this.shoppingCartItems = [];
        this.wishlistItems = [];
        this.contentLoaded = false;
        this.slides = [
            { title: 'Huge sale', subtitle: 'Up to 70%', image: 'assets/images/carousel/banner1.jpg' },
            { title: 'Biggest discount', subtitle: 'Check the promotion', image: 'assets/images/carousel/banner2.jpg' },
            { title: 'Biggest sale', subtitle: 'Dont miss it', image: 'assets/images/carousel/banner3.jpg' },
            { title: 'Our best products', subtitle: 'Special selection', image: 'assets/images/carousel/banner4.jpg' },
        ];
        this.baners = [
            { title: "FURNITURE", subtitle: "Sale up to 30% off all products in the new collection.", image: "assets/images/product/furniture/baners/laptop.png" },
            { title: "Lighting", subtitle: "Sale up to 30%.", image: "assets/images/product/furniture/baners/tablet.png" },
            { title: "Clocks", subtitle: "Sale up to 30%.", image: "assets/images/product/furniture/baners/cameras.png" },
            { title: "Accessories", subtitle: "Sale up to 20%.", image: "assets/images/product/furniture/baners/mobiles.png" },
            { title: "Big offer on Accesories", subtitle: "Sale up to 20%.", image: "assets/images/product/furniture/baners/Furniture.png" }
        ];
    }
    ngOnInit() {
        this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
        this.productService.getProducts()
            .subscribe((product) => {
            this.products = product.filter(item => item.type == 'furniture');
        });
        setTimeout(() => {
            this.contentLoaded = true;
        }, 3000);
    }
    getBanner(index) {
        return this.baners[index];
    }
    getBgImage(index) {
        let bgImage = {
            'background-image': index != null ? "url(" + this.baners[index].image + ")" : "url(https://via.placeholder.com/600x400/ff0000/fff/)"
        };
        return bgImage;
    }
};
FurnitureComponent.ctorParameters = () => [
    { type: _shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] }
];
FurnitureComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-furniture',
        template: _raw_loader_furniture_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_furniture_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]])
], FurnitureComponent);



/***/ }),

/***/ "vSKQ":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/furniture/furniture.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Carousel section start-->\r\n<div class=\"carousel-furniture\">\r\n    <div class=\"container ctn-box\"  >\r\n      <div class=\"\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\">\r\n          <div class=\"slider-categories\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.md=\"40\">\r\n            <ngx-skeleton-loader\r\n                            *ngIf=\"!contentLoaded\"\r\n                              count=\"1\"\r\n                              [theme]=\"{'border-radius': '0', height: '567px' }\"\r\n                            ></ngx-skeleton-loader>\r\n              <div *ngIf=\"contentLoaded\" class=\"categories-wrap\" >\r\n                  <div class=\"title\"> TOP CATEGORIES</div>\r\n                    <app-categories-furniture></app-categories-furniture>\r\n                    <div class=\"btn-sale\">\r\n                        <button mat-raised-button color=\"primary\">USE THE DISCOUNT - 60% OFF</button>\r\n                    </div>\r\n                    </div>\r\n          </div>\r\n          <div class=\"carousel-2-wrapper\" fxLayout.sm=\"column\" fxFlex=\"100\" fxFlex.gt-md=\"75\" fxFlex.md=\"60\" fxFlex.sm=\"100\">\r\n            <ngx-skeleton-loader\r\n            *ngIf=\"!contentLoaded\"\r\n              count=\"1\"\r\n              [theme]=\"{'border-radius': '0', 'padding-bottom': '20px', height: '40px' }\"\r\n            ></ngx-skeleton-loader>\r\n            <ngx-skeleton-loader\r\n            *ngIf=\"!contentLoaded\"\r\n              count=\"1\"\r\n              [theme]=\"{'border-radius': '0', height: '567px' }\"\r\n            ></ngx-skeleton-loader>\r\n              <app-menu *ngIf=\"contentLoaded\"></app-menu>\r\n         \r\n              <app-main-carousel *ngIf=\"contentLoaded\" [slides]=\"slides\"></app-main-carousel>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<!-- Carousel section end-->\r\n<!-- Info section start-->\r\n<div class=\"info-bar2-wrap mb-30\">\r\n  <div class=\"container\">\r\n    <div fxLayout=\"row wrap\" class=\"info-bar\" >\r\n\r\n      <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\" >\r\n        <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\" >\r\n          <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" appearance=\"circle\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n          <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg  m-0\" *ngIf=\"contentLoaded\">card_giftcard</mat-icon>\r\n          <div class=\"content\">\r\n            <ngx-skeleton-loader\r\n            *ngIf=\"!contentLoaded\"\r\n              count=\"2\"\r\n              [theme]=\"{ 'border-radius': '0', height: '15px' }\"\r\n            ></ngx-skeleton-loader>\r\n            <p *ngIf=\"contentLoaded\">BONUS PLUS</p>\r\n            <span *ngIf=\"contentLoaded\" class=\"text-muted m-0\">Get a bonus plus for buying more that three products</span>\r\n          </div>\r\n        </mat-card>\r\n      </div>\r\n      <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n        <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n          <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" appearance=\"circle\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n          <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg  m-0\" *ngIf=\"contentLoaded\">local_shipping</mat-icon>\r\n          <div class=\"content\">\r\n            <ngx-skeleton-loader\r\n            *ngIf=\"!contentLoaded\"\r\n              count=\"2\"\r\n              [theme]=\"{ 'border-radius': '0', height: '15px' }\"\r\n            ></ngx-skeleton-loader>\r\n            <p *ngIf=\"contentLoaded\">FREE SHIPPING</p>\r\n            <span class=\"text-muted m-0\" *ngIf=\"contentLoaded\">Free shipping on all orders over $99</span>\r\n          </div>\r\n        </mat-card>\r\n      </div>\r\n      <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n        <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n          <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" appearance=\"circle\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n          <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg m-0\" *ngIf=\"contentLoaded\">monetization_on</mat-icon>\r\n          <div class=\"content\">\r\n            <ngx-skeleton-loader\r\n            *ngIf=\"!contentLoaded\"\r\n              count=\"2\"\r\n              [theme]=\"{ 'border-radius': '0', height: '15px' }\"\r\n            ></ngx-skeleton-loader>\r\n            <p *ngIf=\"contentLoaded\">MONEY BACK GUARANTEE</p>\r\n            <span *ngIf=\"contentLoaded\" class=\"text-muted m-0\">100% money back guarantee</span>\r\n          </div>\r\n        </mat-card>\r\n      </div>\r\n      <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n        <mat-card class=\"light-block no-bd\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n          <ngx-skeleton-loader  [theme]=\"{ width: '80px', height: '80px' }\" appearance=\"circle\" animation=\"progress\" *ngIf=\"!contentLoaded\"></ngx-skeleton-loader>\r\n          <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg m-0\" *ngIf=\"contentLoaded\">history</mat-icon>\r\n          <div class=\"content\">\r\n            <ngx-skeleton-loader\r\n            *ngIf=\"!contentLoaded\"\r\n              count=\"2\"\r\n              [theme]=\"{  'border-radius': '0', height: '15px' }\"\r\n            ></ngx-skeleton-loader>\r\n            <p *ngIf=\"contentLoaded\">ONLINE SUPPORT 24/7</p>\r\n            <span *ngIf=\"contentLoaded\" class=\"text-muted m-0\">Call us: 02 3555 65454 55</span>\r\n          </div>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n  <!-- Info section end-->\r\n<!-- Baner section start-->\r\n  <div class=\"container\">\r\n    <div class=\"banners-container\" fxLayout=\"column\" fxLayout.gt-sm=\"row\" *ngIf=\"baners.length > 0\">\r\n    \r\n        <div class=\"sec-padding\" fxLayout=\"row\" fxLayout.gt-sm=\"column\" fxLayout.xs=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"baners\">\r\n          <ngx-skeleton-loader\r\n            *ngIf=\"!contentLoaded\"\r\n              count=\"1\"\r\n              [theme]=\"{ 'border-radius': '0', height: '450px' }\"\r\n            ></ngx-skeleton-loader>\r\n            <div  *ngIf=\"contentLoaded\" class=\"baner first\"  [ngStyle]=\"getBgImage(0)\">\r\n              <div class=\"info\">\r\n                  <div class=\"text-box\">\r\n                      <h4>{{getBanner(0).title}}</h4>\r\n                      <p>{{getBanner(0).subtitle}}</p>\r\n                      <a href=\"#\">Shop Now</a>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayout.gt-sm=\"column\" fxLayout.xs=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"60\">\r\n              <div class=\"mt-20\" fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxFlexOrder=\"2\" fxFlexOrder.gt-sm=\"2\" fxFlex=\"50\" fxFlex.gt-sm=\"50\">\r\n                <ngx-skeleton-loader\r\n            *ngIf=\"!contentLoaded\"\r\n              count=\"1\"\r\n              [theme]=\"{ 'border-radius': '0', height: '215px' }\"\r\n            ></ngx-skeleton-loader>\r\n                  <div *ngIf=\"contentLoaded\" class=\"baner seccond\" fxFlex [ngStyle]=\"getBgImage(1)\">\r\n                      <div class=\"info\" >\r\n                          <div class=\"text-box text-right\" fxLayout=\"column\" >\r\n                              <h4>{{getBanner(1).title}}</h4>\r\n                              <a href=\"#\">Shop Now</a>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n                  <ngx-skeleton-loader\r\n            *ngIf=\"!contentLoaded\"\r\n              count=\"1\"\r\n              [theme]=\"{ 'border-radius': '0', height: '215px' }\"\r\n            ></ngx-skeleton-loader>\r\n                  <div *ngIf=\"contentLoaded\" class=\"baner seccond pd-xs\" fxFlex [ngStyle]=\"getBgImage(2)\">\r\n                      <div class=\"info\" >\r\n                          <div class=\"text-box \" fxLayout=\"column\" >\r\n                              <h4>{{getBanner(2).title}}</h4>\r\n                              <a href=\"#\">Shop Now</a>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <ngx-skeleton-loader\r\n            *ngIf=\"!contentLoaded\"\r\n              count=\"1\"\r\n              [theme]=\"{ 'border-radius': '0', height: '215px' }\"\r\n            ></ngx-skeleton-loader>\r\n              <div *ngIf=\"contentLoaded\" class=\"baner seccond mg-xs-0\" fxFlexOrder=\"1\" fxFlexOrder.gt-sm=\"1\" fxFlex=\"50\" fxFlex.gt-sm=\"100\" [ngStyle]=\"getBgImage(3)\">\r\n                  <div class=\"info\" >\r\n                      <div class=\"text-box w-50 pt-40 \" fxLayout=\"column\" >\r\n                          <h4>{{getBanner(3).title}}</h4>\r\n                          <a href=\"#\">Shop Now</a>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n    </div>\r\n        \r\n       </div>\r\n       <!-- Baner section end-->\r\n       <!-- Product section start-->\r\n       <div class=\"products products-furniture sec-padding\">\r\n        <div class=\"container\">\r\n          <h3>POPULAR ITEMS</h3>\r\n            <mat-tab-group>\r\n\r\n                <mat-tab  label=\"FEATURED PRODUCTS\">\r\n\r\n                         <app-product-carousel-two [product]=\"products | slice:0:5\"></app-product-carousel-two>\r\n\r\n\r\n                </mat-tab>\r\n\r\n                <mat-tab label=\"LATEST PRODUCTS\">\r\n\r\n                        <app-product-carousel-two [product]=\"products | slice:5:13\"></app-product-carousel-two>\r\n\r\n                </mat-tab>\r\n\r\n                <mat-tab label=\"ON SALE PRODUCTS\">\r\n\r\n                          <app-product-carousel-two [product]=\"products | slice:13:22\"></app-product-carousel-two>\r\n\r\n                </mat-tab>\r\n\r\n              </mat-tab-group>\r\n        </div>\r\n\r\n      </div>\r\n       <!-- Product section end-->\r\n\r\n        <!-- Baner section start-->\r\n        <ngx-skeleton-loader\r\n            *ngIf=\"!contentLoaded\"\r\n              count=\"1\"\r\n              [theme]=\"{ 'border-radius': '0', height: '551px' }\"\r\n            ></ngx-skeleton-loader>\r\n        <section *ngIf=\"contentLoaded\" class=\"commercial-banner\" fxLayout=\"column\" fxLayout.gt-sm=\"row\">   \r\n          \r\n            <!--Image Column-->\r\n               <div  class=\"image-column\" fxFlex=\"50\">\r\n                   <img src=\"assets/images/background/commercial-baner.jpg\" alt=\"\">\r\n               </div>\r\n       \r\n               <!--Content Column-->\r\n               <div *ngIf=\"contentLoaded\" class=\"story__content\" fxFlex=\"50\">\r\n                   <div class=\"inner-column\">\r\n                       <!--Sec Title-->\r\n                               <div class=\"section-titleBar text-left\">\r\n                                   <h1>Everything you<br>need to create<br> your outdoor <br>oasis</h1>\r\n                                   <button mat-raised-button color=\"primary\">Shop now</button>\r\n                               </div>\r\n       \r\n              \r\n       \r\n                   </div>\r\n               </div>\r\n       \r\n          \r\n       </section>\r\n        <!-- Baner section end-->\r\n\r\n        <!-- Vertical products start-->\r\n<app-product-vertical [products]=\"products\"></app-product-vertical>\r\n<!-- Vertical products end-->");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");




const appRoutes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        children: [
            {
                path: 'home',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./components/shop/shop.module */ "+G06")).then(m => m.ShopModule)
            },
            {
                path: 'pages',
                loadChildren: () => __webpack_require__.e(/*! import() | components-pages-pages-module */ "components-pages-pages-module").then(__webpack_require__.bind(null, /*! ./components/pages/pages.module */ "sFyk")).then(m => m.PagesModule)
            },
            {
                path: 'blog',
                loadChildren: () => __webpack_require__.e(/*! import() | components-blog-blog-module */ "components-blog-blog-module").then(__webpack_require__.bind(null, /*! ./components/blog/blog.module */ "K/Fw")).then(m => m.BlogModule)
            },
        ]
    },
    {
        path: '**',
        redirectTo: 'home/one'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { useHash: false, relativeLinkResolution: 'legacy' })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "viOG":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-details-centered/product-zoom/product-zoom.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ProductZoomCenteredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductZoomCenteredComponent", function() { return ProductZoomCenteredComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_zoom_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-zoom.component.html */ "et+d");
/* harmony import */ var _product_zoom_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-zoom.component.sass */ "tgXX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/shared/services/product.service */ "6MrQ");






let ProductZoomCenteredComponent = class ProductZoomCenteredComponent {
    constructor(productsService, dialogRef, data) {
        this.productsService = productsService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.product = data.product;
        this.selectedProductImageIndex = data.index;
    }
    ngOnInit() {
    }
    close() {
        this.dialogRef.close();
    }
};
ProductZoomCenteredComponent.ctorParameters = () => [
    { type: src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
];
ProductZoomCenteredComponent.propDecorators = {
    zoomImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['zoomImage', { static: true },] }]
};
ProductZoomCenteredComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-zoom',
        template: _raw_loader_product_zoom_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        styles: [_product_zoom_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
], ProductZoomCenteredComponent);



/***/ }),

/***/ "vvX+":
/*!********************************************************************************************!*\
  !*** ./src/app/components/shared/shopping-widgets-two/shopping-widgets-two.component.sass ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wcGluZy13aWRnZXRzLXR3by5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "wzT1":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-right-sidebar/product-right-sidebar.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-breadcrumb [title]=\"'Shop'\" [breadcrumb]=\"'Shop'\"></app-breadcrumb>\r\n<div class=\"right-sidebar-wrapper sec-padding\">\r\n    <div class=\"container\">\r\n      <div class=\"sidebar-wrapper\" fxLayout='row' fxLayout.lt-md=\"column\" >\r\n          \r\n            <div fxFlex=\"100\" fxFlex.lt-sm=\"100\" class=\"all-products pl-3\" ngClass.gt-sm=\"p-left\">\r\n                <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" fxHide.lt-md=\"true\" class=\"filter-row mat-elevation-z1 text-muted\">\r\n                    <mat-form-field appearance=\"legacy\">\r\n                        <mat-label>Search product</mat-label>\r\n                        <input matInput placeholder=\"Placeholder\">\r\n                        <mat-icon matSuffix>search</mat-icon>\r\n                      </mat-form-field>\r\n                    <button *ngIf=\"!sidenavOpen\" mat-icon-button (click)=\"sidenav.toggle()\">\r\n                        <mat-icon>more_vert</mat-icon>\r\n                    </button>\r\n                    <div >\r\n                        <select (change)=\"onChangeSorting($event.target.value)\">\r\n                            <option value=\"asc\">Sorting items</option>\r\n                            <option value=\"asc\">Ascending Order</option>\r\n                            <option value=\"desc\">Descending Order</option>\r\n                            <option value=\"a-z\">Alphabetically, A-Z</option>\r\n                            <option value=\"z-a\">Alphabetically, Z-A</option>\r\n                            <option value=\"low\">Price, low to high</option>\r\n                            <option value=\"high\">Price, high to low</option>\r\n                          </select>\r\n    \r\n                    </div>\r\n                    <div>\r\n    \r\n                        <button mat-icon-button (click)=\"changeViewType('list', 100)\">\r\n                            <mat-icon>view_list</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button (click)=\"changeViewType('list', 33.3)\">\r\n                            <mat-icon>view_module</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button (click)=\"changeViewType('list', 25)\">\r\n                            <mat-icon>view_comfy</mat-icon>\r\n                        </button>\r\n                    </div>\r\n                  </div>\r\n                  <div [@Animation]=\"animation\" fxLayout=\"row wrap\" class=\"products-wrapper\">\r\n                      <div *ngFor=\"let products of allItems | orderBy:sortByOrder | paginate: { itemsPerPage: 12, currentPage: page  }\" fxFlex=\"100\" [fxFlex.gt-sm]=\"viewCol\" fxFlex.sm=\"50\" class=\"col\">\r\n                         <div class=\"product-box\">\r\n                            <app-product [product]=\"products\"></app-product>\r\n                         </div>\r\n                      </div>\r\n                  </div>\r\n    \r\n                  <div *ngIf=\"products.length > 0\" fxLayout=\"row wrap \">\r\n                      <div fxFlex=\"100\">\r\n                          <mat-card class=\"p-0 text-center no-shadow\">\r\n                              <pagination-controls class=\"product-pagination\" autoHide=\"true\" maxSize=\"5\" (pageChange)=\"onPageChanged($event)\"></pagination-controls>\r\n                          </mat-card>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n                <div fxFlex=\"25\" fxFlex.lt-sm=\"100\" class=\"filter-sidenav\" perfectScrollbar>\r\n                    <div class=\"toggles-wrapper\" fxLayout=\"column\" fxLayout.lt-md=\"column\">\r\n                        <div class=\"toggles\" fxFlex.lt-md=\"100\">\r\n                            <mat-accordion>\r\n                                <mat-expansion-panel>\r\n                                  <mat-expansion-panel-header>\r\n                                    <mat-panel-title>\r\n                                        <span>Categories</span>\r\n                                    </mat-panel-title>\r\n                                  </mat-expansion-panel-header>\r\n                              <app-categories></app-categories>\r\n                                </mat-expansion-panel>\r\n                                <mat-expansion-panel>\r\n                                    <mat-expansion-panel-header>\r\n                                      <mat-panel-title>\r\n                                          <span>Brands</span>\r\n                                      </mat-panel-title>\r\n                                    </mat-expansion-panel-header>\r\n          \r\n                                    <div class=\"brands\">\r\n                                       <app-brands (brandChanged)=\"onBrendsChanged($event)\"></app-brands>\r\n                                     </div>\r\n                                  </mat-expansion-panel>\r\n                                  <mat-expansion-panel>\r\n                                      <mat-expansion-panel-header>\r\n                                        <mat-panel-title>\r\n                                            <span>Price</span>\r\n                                        </mat-panel-title>\r\n                                      </mat-expansion-panel-header>\r\n          \r\n                                      <app-price (priceFilters)=\"updatePriceFilters($event)\"></app-price>\r\n                                    </mat-expansion-panel>\r\n                              </mat-accordion>\r\n                        </div>\r\n                            <div class=\"popular-products\" fxFlex.lt-md=\"100\">\r\n                              <app-popular-products></app-popular-products>\r\n                            </div>\r\n                    </div>\r\n          \r\n                    </div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n    ");

/***/ }),

/***/ "x4qe":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header-three/header-three.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"home-header-three\">\r\n  <div class=\"container\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutGap=\"20px\" fxlayoutalign=\"space-between center\">\r\n    <div class=\"logo\">\r\n      <a [routerLink]=\"['/home/four']\" routerLinkActive=\"router-link-active\" ><img src=\"assets/images/logo-tien3.png\" style=\"height: 46px;width: 140px;\"></a>\r\n    </div>\r\n    <div fxflexoffset.gt-sm=\"10\"  fxFlex class=\"search-form\">\r\n      <form class=\"search-form\" fxLayout=\"row\">\r\n        <div class=\"form-wrap\">\r\n          <input type=\"text\" placeholder=\"Escribe algun producto\">\r\n          <button class=\"btn-search\" mat-raised-button color=\"primary\" type=\"submit\">Buscar</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"call-bucket-wrap\" fxLayout=\"row\" fxLayout.sm=\"row\" fxLayoutAlign=\"center center\" >\r\n        <!-- <div class=\"info-message-icon\"  fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n          <div class=\"icon\"  fxLayout=\"row\" >\r\n              <mat-icon class=\"mat-icon-lg mat-icon material-icons\">call</mat-icon>\r\n          </div>\r\n            <div class=\"info-text\">\r\n              <p>Helpline:</p>\r\n               <span>02(981)336 111</span>\r\n            </div>\r\n        </div> -->\r\n      <div class=\"main-menu-wrapper-3\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" >\r\n        <mat-toolbar class=\"top-navbar top menu\">\r\n          <app-shopping-widgets-two [shoppingCartItems]=\"shoppingCartItems\"></app-shopping-widgets-two>\r\n        </mat-toolbar>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"menu-container4\">\r\n  <app-menu></app-menu>\r\n</div>");

/***/ }),

/***/ "x8rr":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/shop/products/product-details-food/product-details-food.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ProductDetailsFoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsFoodComponent", function() { return ProductDetailsFoodComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_details_food_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-details-food.component.html */ "UDkM");
/* harmony import */ var _product_details_food_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-details-food.component.sass */ "J0Os");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/shared/services/product.service */ "6MrQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/shared/services/cart.service */ "bjOM");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-swiper-wrapper */ "S8NE");
/* harmony import */ var _product_zoom_food_product_zoom_food_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-zoom-food/product-zoom-food.component */ "g/WC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");











let ProductDetailsFoodComponent = class ProductDetailsFoodComponent {
    constructor(document, route, productsService, dialog, router, cartService) {
        this.document = document;
        this.route = route;
        this.productsService = productsService;
        this.dialog = dialog;
        this.router = router;
        this.cartService = cartService;
        this.config = {};
        this.onOpenProductDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.products = [];
        this.counter = 1;
        this.bigProductImageIndex = 0;
        this.slideNavConfig = {
            vertical: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.product-slick',
            arrows: false,
            dots: false,
            focusOnSelect: true
        };
        this.route.params.subscribe(params => {
            const id = +params['id'];
            this.productsService.getProduct(id).subscribe(product => {
                this.product = product;
            });
            window.scrollTo(0, 0);
        });
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
        this.router.events.subscribe(evt => {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                document.body.scrollTop = 0; // scroll top to body element
            }
        });
    }
    ngOnInit() {
        this.productsService.getProducts().subscribe(product => this.products = product);
        this.document.body.scrollTop = 0;
        this.getRelatedProducts();
    }
    ngAfterViewInit() {
        this.config = {
            observer: true,
            slidesPerView: 3,
            spaceBetween: 10,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            breakpoints: {
                480: {
                    slidesPerView: 1
                },
                740: {
                    slidesPerView: 2,
                },
                960: {
                    slidesPerView: 3,
                },
                1280: {
                    slidesPerView: 3,
                },
            }
        };
    }
    selectImage(index) {
        console.log(this.product);
        console.log(index);
        this.bigProductImageIndex = index;
    }
    increment() {
        this.counter += 1;
    }
    decrement() {
        if (this.counter > 1) {
            this.counter -= 1;
        }
    }
    getRelatedProducts() {
        this.productsService.getProducts()
            .subscribe((product) => {
            this.products = product;
        });
    }
    openProductDialog(product, bigProductImageIndex) {
        let dialogRef = this.dialog.open(_product_zoom_food_product_zoom_food_component__WEBPACK_IMPORTED_MODULE_9__["ProductZoomFoodComponent"], {
            data: { product, index: bigProductImageIndex },
            panelClass: 'product-dialog',
        });
        dialogRef.afterClosed().subscribe(product => {
            if (product) {
                this.router.navigate(['/products', product.id, product.name]);
            }
        });
    }
    // Add to cart
    addToCart(product, quantity) {
        if (quantity == 0)
            return false;
        this.cartService.addToCart(product, parseInt(quantity));
    }
    // Add to cart
    buyNow(product, quantity) {
        if (quantity > 0)
            this.cartService.addToCart(product, parseInt(quantity));
        this.router.navigate(['/pages/checkout']);
    }
    onMouseMove(e) {
        if (window.innerWidth >= 1280) {
            var image, offsetX, offsetY, x, y, zoomer;
            image = e.currentTarget;
            offsetX = e.offsetX;
            offsetY = e.offsetY;
            x = offsetX / image.offsetWidth * 100;
            y = offsetY / image.offsetHeight * 100;
            zoomer = this.zoomViewer.nativeElement.children[0];
            if (zoomer) {
                zoomer.style.backgroundPosition = x + '% ' + y + '%';
                zoomer.style.display = "block";
                zoomer.style.height = image.height + 'px';
                zoomer.style.width = image.width + 'px';
            }
        }
    }
    onMouseLeave(event) {
        this.zoomViewer.nativeElement.children[0].style.display = "none";
    }
    openZoomViewer() {
        this.dialog.open(_product_zoom_food_product_zoom_food_component__WEBPACK_IMPORTED_MODULE_9__["ProductZoomFoodComponent"], {
            data: this.zoomImage,
            panelClass: 'zoom-dialog'
        });
    }
};
ProductDetailsFoodComponent.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"],] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"] }
];
ProductDetailsFoodComponent.propDecorators = {
    onOpenProductDialog: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    zoomViewer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['zoomViewer', { static: true },] }],
    directiveRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_8__["SwiperDirective"], { static: true },] }]
};
ProductDetailsFoodComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-details-food',
        template: _raw_loader_product_details_food_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_details_food_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Document, _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"]])
], ProductDetailsFoodComponent);



/***/ }),

/***/ "xRdL":
/*!******************************************************************!*\
  !*** ./src/app/components/shop/products/products.component.sass ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0cy5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "xV2V":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-no-sidebar/product-no-sidebar.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-breadcrumb [title]=\"'Shop'\" [breadcrumb]=\"'Shop'\"></app-breadcrumb>\r\n<div class=\"right-sidebar-wrapper sec-padding\">\r\n    <div class=\"container\">\r\n      <div class=\"sidebar-wrapper\" fxLayout='row' fxLayout.lt-md=\"column\" >\r\n          \r\n            <div fxFlex=\"100\" fxFlex.lt-sm=\"100\" class=\"all-products pl-3\" ngClass.gt-sm=\"p-left\">\r\n                <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" fxHide.lt-md=\"true\" class=\"filter-row mat-elevation-z1 text-muted\">\r\n                    <mat-form-field appearance=\"legacy\">\r\n                        <mat-label>Search product</mat-label>\r\n                        <input matInput placeholder=\"Placeholder\">\r\n                        <mat-icon matSuffix>search</mat-icon>\r\n                      </mat-form-field>\r\n                    <button *ngIf=\"!sidenavOpen\" mat-icon-button (click)=\"sidenav.toggle()\">\r\n                        <mat-icon>more_vert</mat-icon>\r\n                    </button>\r\n                    <div >\r\n                        <select (change)=\"onChangeSorting($event.target.value)\">\r\n                            <option value=\"asc\">Sorting items</option>\r\n                            <option value=\"asc\">Ascending Order</option>\r\n                            <option value=\"desc\">Descending Order</option>\r\n                            <option value=\"a-z\">Alphabetically, A-Z</option>\r\n                            <option value=\"z-a\">Alphabetically, Z-A</option>\r\n                            <option value=\"low\">Price, low to high</option>\r\n                            <option value=\"high\">Price, high to low</option>\r\n                          </select>\r\n    \r\n                    </div>\r\n                    <div>\r\n    \r\n                        <button mat-icon-button (click)=\"changeViewType('list', 100)\">\r\n                            <mat-icon>view_list</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button (click)=\"changeViewType('list', 33.3)\">\r\n                            <mat-icon>view_module</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button (click)=\"changeViewType('list', 25)\">\r\n                            <mat-icon>view_comfy</mat-icon>\r\n                        </button>\r\n                    </div>\r\n                  </div>\r\n                  <div [@Animation]=\"animation\" fxLayout=\"row wrap\" class=\"products-wrapper\">\r\n                      <div *ngFor=\"let products of allItems | orderBy:sortByOrder | paginate: { itemsPerPage: 12, currentPage: page  }\" fxFlex=\"100\" [fxFlex.gt-sm]=\"viewCol\" fxFlex.sm=\"50\" class=\"col\">\r\n                         <div class=\"product-box\">\r\n                            <app-product [product]=\"products\"></app-product>\r\n                         </div>\r\n                      </div>\r\n                  </div>\r\n    \r\n                  <div *ngIf=\"products.length > 0\" fxLayout=\"row wrap \">\r\n                      <div fxFlex=\"100\">\r\n                          <mat-card class=\"p-0 text-center no-shadow\">\r\n                              <pagination-controls class=\"product-pagination\" autoHide=\"true\" maxSize=\"5\" (pageChange)=\"onPageChanged($event)\"></pagination-controls>\r\n                          </mat-card>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n           \r\n      </div>\r\n    </div>\r\n    </div>\r\n    ");

/***/ }),

/***/ "xf7L":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/widgets/categories-furniture/categories-furniture.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"category-contant\">\r\n    <ul>\r\n        <li><a class=\"no-brd\" [routerLink]=\"['/home/products/all']\">Show All</a></li>\r\n        <li><a [routerLink]=\"['/home/products/Chairs']\">Chairs</a></li>\r\n        <li><a [routerLink]=\"['/home/products/Lights']\">Lights</a></li>  \r\n        <li><a [routerLink]=\"['/home/products/Accesories']\">Accesories</a></li>\r\n        <li><a [routerLink]=\"['/home/products/Furniture']\">Furniture</a></li>  \r\n        <li><a [routerLink]=\"['/home/products/Furniture']\">Bedrooms</a></li>\r\n        <li><a [routerLink]=\"['/home/products/Tv & Audio']\">Accesories</a></li>\r\n        <li><a [routerLink]=\"['/home/products/Watches']\">Cloks</a></li>\r\n        <li><a [routerLink]=\"['/home/products/Tv & Audio']\">Lighting</a></li>\r\n        <li><a [routerLink]=\"['/home/products/Watches']\">Living room</a></li>\r\n    </ul>\r\n</div>");

/***/ }),

/***/ "xl9Y":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/home-five/home-five.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"carousel-3\">\r\n  <div class=\"container ctn-box\"  >\r\n    <div class=\"\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\">\r\n        <div class=\"carousel-2-wrapper\" fxLayout.sm=\"column\" fxFlex=\"100\" fxFlex.gt-md=\"70\" fxFlex.md=\"60\" fxFlex.sm=\"100\">\r\n          <ngx-skeleton-loader\r\n          *ngIf=\"!contentLoaded\"\r\n            count=\"1\"\r\n            [theme]=\"{ 'border-radius': '0', height: '461px' }\"\r\n          ></ngx-skeleton-loader>\r\n            <app-main-carousel *ngIf=\"contentLoaded\" [slides]=\"slides\"></app-main-carousel>\r\n        </div>\r\n        <div class=\"slider-categories\" fxFlex=\"100\" fxFlex.gt-md=\"30\" fxFlex.md=\"40\">\r\n           <div class=\"carousel-banners-wrapper\" fxLayout=\"column\">\r\n             <div *ngFor=\"let bn of discount\" class=\"carousel-banner mb-15\">\r\n              <ngx-skeleton-loader\r\n              *ngIf=\"!contentLoaded\"\r\n                count=\"1\"\r\n                [theme]=\"{ 'border-radius': '0', height: '205px' }\"\r\n              ></ngx-skeleton-loader>\r\n                <div *ngIf=\"contentLoaded\" class=\"baner seccond\">\r\n                    <div fxLayout=\"row\" fxLayout.xs=\"column\" class=\"info\" >\r\n                      <div fxFlex=\"100\" fxFlex.gt-md=\"50\" class=\"bn-img\">\r\n                        <img [src]=\"bn.image\" alt=\"\"> </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-md=\"50\" class=\"text-box w-50\" fxLayout=\"column\" >\r\n                            <h4>{{bn.title}}</h4>\r\n                           <p>{{bn.subtitle}}.</p>\r\n                           <button mat-raised-button color=\"primary\">Shop now</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n             </div>\r\n\r\n           </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"home-5-wrap\">\r\n    <div class=\"container \">\r\n        <div class=\"categories-menu-wrap\">\r\n          <ngx-skeleton-loader\r\n          *ngIf=\"!contentLoaded\"\r\n            count=\"1\"\r\n            [theme]=\"{ 'border-radius': '0', height: '60px' }\"\r\n          ></ngx-skeleton-loader>\r\n               <app-categories-menu *ngIf=\"contentLoaded\"></app-categories-menu>\r\n\r\n          </div>\r\n          <div class=\"products sec-padding prod-five\">\r\n              <h3>POPULAR ITEMS</h3>\r\n                    <mat-tab-group>\r\n\r\n                        <mat-tab  label=\"FEATURED PRODUCTS\">\r\n\r\n                                 <app-product-carousel [product]=\"products | slice:0:8\"></app-product-carousel>\r\n\r\n\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"LATEST PRODUCTS\">\r\n\r\n                                <app-product-carousel [product]=\"products | slice:5:13\"></app-product-carousel>\r\n\r\n                        </mat-tab>\r\n\r\n                        <mat-tab label=\"ON SALE PRODUCTS\">\r\n\r\n                                  <app-product-carousel [product]=\"products | slice:13:22\"></app-product-carousel>\r\n\r\n                        </mat-tab>\r\n\r\n                      </mat-tab-group>\r\n\r\n\r\n              </div>\r\n\r\n      </div>\r\n      <div class=\"categories sec-padding\">\r\n        <div class=\"container\">\r\n          <div class=\"title\">\r\n              <h3>BROWSE</h3>\r\n          </div>\r\n\r\n            <app-categories-section></app-categories-section>\r\n        </div>\r\n        </div>\r\n\r\n        <div class=\"vertical-products\">\r\n          <div class=\"container\">\r\n\r\n              <app-product-vertical [products]=\"products\"></app-product-vertical>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"blog-section sec-padding\">\r\n            <div class=\"container\">\r\n              <div class=\"section-title\">\r\n                <ngx-skeleton-loader\r\n                *ngIf=\"!contentLoaded\"\r\n                  count=\"2\"\r\n                  [theme]=\"{ 'border-radius': '0', height: '20px' }\"\r\n                ></ngx-skeleton-loader>\r\n                  <h3 *ngIf=\"contentLoaded\">Latest From Our Blog</h3>\r\n                  <p *ngIf=\"contentLoaded\">Business analytics (BA) is the practice of iterative, methodical exploration of an<br> \r\n                      organization's data with emphasis on statistical analysis.</p>\r\n               </div>\r\n                <app-blog-section></app-blog-section>\r\n\r\n            </div>\r\n          </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "xlO3":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/demo/demo.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"demo-wrapper\">\r\n  <div class=\"demo-header\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"demo-header-wrap\" fxLayout='column' fxLayout.lt-md=\"column\">\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"40\" class=\"left-panel\">\r\n          <div class=\"logo\"><img src=\"assets/images/logo-white.png\" alt=\"\"> </div>\r\n          <div class=\"text-intro\">\r\n            <h1><span class=\"powerful\">POWERFUL</span><br>Angular Material<br><span class=\"theme\">Ecommerce Theme</span>\r\n            </h1>\r\n          </div>\r\n          <ul fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutAlign=\"center center\">\r\n            <li fxLayout=\"row\"><i class=\"material-icons\">check</i><span>Quality check by Envato</span> </li>\r\n            <li fxLayout=\"row\"><i class=\"material-icons\">check</i><span>Lifetime regular updates</span></li>\r\n            <li fxLayout=\"row\"><i class=\"material-icons\">check</i><span>6 months free support</span></li>\r\n            <li fxLayout=\"row\"><i class=\"material-icons\">check</i><span>Full access to all files included in the\r\n                package</span></li>\r\n          </ul>\r\n          <div class=\"button\">\r\n            <a target=\"_blank\" href=\"https://themeforest.net/item/sophia-angular-material-ecommerce-template/24219775\"\r\n              class=\"ped-btn left-btn\">Buy Now</a>\r\n          </div>\r\n        </div>\r\n        <!-- <div fxFlex=\"100\" fxFlex.gt-sm=\"60\" class=\"right-panel\">\r\n                  <img src=\"assets/images/demo/laptop.png\" alt=\"\">\r\n              </div> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"demo-showcase sec-padding\">\r\n    <div class=\"container-fluid\">\r\n      <ngx-skeleton-loader\r\n                            *ngIf=\"!contentLoaded\"\r\n                              count=\"2\"\r\n                              [theme]=\"{ 'border-radius': '0', height: '20px' }\"\r\n                            ></ngx-skeleton-loader>\r\n      <div *ngIf=\"contentLoaded\" class=\"title\">\r\n        <h2>Main demo</h2>\r\n        <p>Check this beautiful demo with 5 different home pages</p>\r\n      </div>\r\n      <div class=\"demos\" fxLayout='row wrap' fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutAlign=\"center start\">\r\n        <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"20\" ngClass.xs=\"mt-2\">\r\n          <ngx-skeleton-loader\r\n                            *ngIf=\"!contentLoaded\"\r\n                              count=\"1\"\r\n                              [theme]=\"{ 'border-radius': '0', height: '204px' }\"\r\n                            ></ngx-skeleton-loader>\r\n          <div *ngIf=\"contentLoaded\" class=\"first\">\r\n            <img src=\"assets/images/demo/s1.jpg\" alt=\"\">\r\n          </div>\r\n          <div *ngIf=\"contentLoaded\" class=\"seccond\">\r\n            <h4 *ngIf=\"contentLoaded\"><a>SHOP DEMO 1</a></h4>\r\n          </div>\r\n          <div *ngIf=\"contentLoaded\" class=\"button\">\r\n            <a [routerLink]=\"['/home/one']\" routerLinkActive=\"router-link-active\" target=\"_blank\"\r\n              class=\"ped-btn left-btn\">VIEW DEMO</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"item middle\" fxFlex=\"100\" fxFlex.gt-xs=\"20\" ngClass.xs=\"mt-2\">\r\n          <ngx-skeleton-loader\r\n          *ngIf=\"!contentLoaded\"\r\n            count=\"1\"\r\n            [theme]=\"{ 'border-radius': '0', height: '204px' }\"\r\n          ></ngx-skeleton-loader>\r\n          <div *ngIf=\"contentLoaded\" class=\"first\">\r\n            <img src=\"assets/images/demo/s10.jpg\" alt=\"\">\r\n          </div>\r\n          <div *ngIf=\"contentLoaded\" class=\"seccond\">\r\n            <h4 *ngIf=\"contentLoaded\"><a>SHOP DEMO 2</a></h4>\r\n          </div>\r\n          <div *ngIf=\"contentLoaded\" class=\"button\">\r\n            <a [routerLink]=\"['/home/two']\" target=\"_blank\" class=\"ped-btn left-btn\">VIEW DEMO</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"20\" ngClass.xs=\"mt-2\">\r\n          <ngx-skeleton-loader\r\n          *ngIf=\"!contentLoaded\"\r\n            count=\"1\"\r\n            [theme]=\"{ 'border-radius': '0', height: '204px' }\"\r\n          ></ngx-skeleton-loader>\r\n          <div *ngIf=\"contentLoaded\" class=\"first\">\r\n            <img src=\"assets/images/demo/s11.jpg\" alt=\"\">\r\n          </div>\r\n          <div *ngIf=\"contentLoaded\" class=\"seccond\">\r\n            <h4 *ngIf=\"contentLoaded\">SHOP DEMO 3</h4>\r\n          </div>\r\n          <div *ngIf=\"contentLoaded\" class=\"button\">\r\n            <a [routerLink]=\"['/home/three']\" target=\"_blank\" class=\"ped-btn left-btn\">VIEW DEMO</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"item sec\" fxFlex=\"100\" fxFlex.gt-xs=\"20\" ngClass.xs=\"mt-2\">\r\n          <ngx-skeleton-loader\r\n          *ngIf=\"!contentLoaded\"\r\n            count=\"1\"\r\n            [theme]=\"{ 'border-radius': '0', height: '204px' }\"\r\n          ></ngx-skeleton-loader>\r\n          <div *ngIf=\"contentLoaded\" class=\"first\">\r\n            <img src=\"assets/images/demo/s12.jpg\" alt=\"\">\r\n          </div>\r\n          <div *ngIf=\"contentLoaded\" class=\"seccond\">\r\n            <h4 *ngIf=\"contentLoaded\"><a>SHOP DEMO 4</a></h4>\r\n          </div>\r\n          <div *ngIf=\"contentLoaded\" class=\"button\">\r\n            <a [routerLink]=\"['/home/four']\" target=\"_blank\" class=\"ped-btn left-btn\">VIEW DEMO</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"item sec\" fxFlex=\"100\" fxFlex.gt-xs=\"20\" ngClass.xs=\"mt-2\">\r\n          <ngx-skeleton-loader\r\n          *ngIf=\"!contentLoaded\"\r\n            count=\"1\"\r\n            [theme]=\"{ 'border-radius': '0', height: '204px' }\"\r\n          ></ngx-skeleton-loader>\r\n          <div *ngIf=\"contentLoaded\" class=\"first\">\r\n            <img src=\"assets/images/demo/s13.jpg\" alt=\"\">\r\n          </div>\r\n          <div  *ngIf=\"contentLoaded\" class=\"seccond\">\r\n            <h4 *ngIf=\"contentLoaded\"><a>SHOP DEMO 5</a></h4>\r\n          </div>\r\n          <div *ngIf=\"contentLoaded\" class=\"button\">\r\n            <a [routerLink]=\"['/home/five']\" target=\"_blank\" class=\"ped-btn left-btn\">VIEW DEMO</a>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"20\" ngClass.xs=\"mt-2\">\r\n          <ngx-skeleton-loader\r\n          *ngIf=\"!contentLoaded\"\r\n            count=\"1\"\r\n            [theme]=\"{ 'border-radius': '0', height: '204px' }\"\r\n          ></ngx-skeleton-loader>\r\n          <div *ngIf=\"contentLoaded\" class=\"first\">\r\n            <img src=\"assets/images/demo/industrial.jpg\" alt=\"\">\r\n          </div>\r\n          <div *ngIf=\"contentLoaded\" class=\"seccond\">\r\n            <h4><a>INDUSTRIAL</a></h4>\r\n          </div>\r\n          <div *ngIf=\"contentLoaded\" class=\"button\">\r\n            <a [routerLink]=\"['/home/industrial']\" target=\"_blank\" class=\"ped-btn left-btn\">VIEW DEMO</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"item middle\" fxFlex=\"100\" fxFlex.gt-xs=\"20\" ngClass.xs=\"mt-2\">\r\n          <ngx-skeleton-loader\r\n          *ngIf=\"!contentLoaded\"\r\n            count=\"1\"\r\n            [theme]=\"{ 'border-radius': '0', height: '204px' }\"\r\n          ></ngx-skeleton-loader>\r\n          <div *ngIf=\"contentLoaded\" class=\"first\">\r\n            <img src=\"assets/images/demo/food.jpg\" alt=\"\">\r\n          </div>\r\n          <div *ngIf=\"contentLoaded\" class=\"seccond\">\r\n            <h4><a>FOOD</a></h4>\r\n          </div>\r\n          <div *ngIf=\"contentLoaded\" class=\"button\">\r\n            <a [routerLink]=\"['/home/food']\" target=\"_blank\" class=\"ped-btn left-btn\">VIEW DEMO</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"20\" ngClass.xs=\"mt-2\">\r\n          <ngx-skeleton-loader\r\n          *ngIf=\"!contentLoaded\"\r\n            count=\"1\"\r\n            [theme]=\"{ 'border-radius': '0', height: '204px' }\"\r\n          ></ngx-skeleton-loader>\r\n          <div *ngIf=\"contentLoaded\" class=\"first\">\r\n            <img src=\"assets/images/demo/furniture.jpg\" alt=\"\">\r\n          </div>\r\n          <div *ngIf=\"contentLoaded\" class=\"seccond\">\r\n            <h4><a>FURNITURE</a></h4>\r\n          </div>\r\n          <div *ngIf=\"contentLoaded\" class=\"button\">\r\n            <a [routerLink]=\"['/home/furniture']\" target=\"_blank\" class=\"ped-btn left-btn\">VIEW\r\n              DEMO</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"20\" ngClass.xs=\"mt-2\">\r\n          <ngx-skeleton-loader\r\n          *ngIf=\"!contentLoaded\"\r\n            count=\"1\"\r\n            [theme]=\"{ 'border-radius': '0', height: '204px' }\"\r\n          ></ngx-skeleton-loader>\r\n          <div *ngIf=\"contentLoaded\" class=\"first\">\r\n            <img src=\"assets/images/demo/home.jpg\" alt=\"\">\r\n          </div>\r\n          <div *ngIf=\"contentLoaded\" class=\"seccond\">\r\n            <h4><a>HOME DECOR</a></h4>\r\n          </div>\r\n          <div *ngIf=\"contentLoaded\" class=\"button\">\r\n               <a [routerLink]=\"['/home/home-decor']\"target=\"_blank\" class=\"ped-btn left-btn\">VIEW DEMO</a>\r\n           </div>\r\n        </div> \r\n        <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"20\" ngClass.xs=\"mt-2\">\r\n          <ngx-skeleton-loader\r\n          *ngIf=\"!contentLoaded\"\r\n            count=\"1\"\r\n            [theme]=\"{ 'border-radius': '0', height: '204px' }\"\r\n          ></ngx-skeleton-loader>\r\n          <div *ngIf=\"contentLoaded\" class=\"first\">\r\n            <img src=\"assets/images/demo/cosmetics.jpg\" alt=\"\">\r\n          </div>\r\n          <div *ngIf=\"contentLoaded\" class=\"seccond\">\r\n            <h4><a>COSMETIC</a></h4>\r\n            <span>Coming soon</span>\r\n          </div>\r\n          <!-- <div class=\"button\">\r\n               <a [routerLink]=\"['/home/home-decor']\"target=\"_blank\" class=\"ped-btn left-btn\">VIEW DEMO</a>\r\n           </div> -->\r\n        </div> \r\n      </div>\r\n\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n  <ngx-skeleton-loader\r\n    *ngIf=\"!contentLoaded\"\r\n      count=\"1\"\r\n      [theme]=\"{ 'border-radius': '0', height: '710px' }\"\r\n    ></ngx-skeleton-loader>\r\n  <div *ngIf=\"contentLoaded\" class=\"dashboard-view sec-padding \">\r\n    \r\n    <div *ngIf=\"contentLoaded\" class=\"container\">\r\n      <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\" ngClass.xs=\"mt-2\">\r\n        <div class=\"title\">\r\n          <h2>Powerfull Admin Dashboard</h2>\r\n          <p>Sophia has powerful backend admin panel to manage products, sales, discount coupons, orders, user, vendor and much more. It comes with a lot of featues and its easy to manage it.</p>\r\n        </div>\r\n        <ul>\r\n          <li><span class=\"material-icons\">check_circle_outline</span><p>Multiple color options</p></li>\r\n          <li><span class=\"material-icons\">check_circle_outline</span><p>Angular Material Design</p></li>\r\n          <li><span class=\"material-icons\">check_circle_outline</span><p>Apex chart</p></li>\r\n          <li><span class=\"material-icons\">check_circle_outline</span><p>Authentication service</p></li>\r\n          <li><span class=\"material-icons\">check_circle_outline</span><p>Horizontal version</p></li>\r\n        </ul>\r\n        <div class=\"button\">\r\n          <a target=\"_blank\" href=\"http://lamarena.online/sophia-admin/#/dashboard/default\"\r\n            class=\"ped-btn left-btn\">Preview the demo</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\" ngClass.xs=\"mt-2\">\r\n        <div class=\"sophia-dash\">\r\n         <a href=\"http://lamarena.online/sophia-admin/#/dashboard/default\"><img src=\"assets/images/demo/dash.jpg\" alt=\"\"></a> \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n \r\n  <div class=\"main-features sec-padding\">\r\n    <div class=\"container\">\r\n      <div class=\"features-wrap\">\r\n        <div class=\"title\">\r\n          <h2>Main Features</h2>\r\n        </div>\r\n        <div class=\"features\">\r\n          <div class=\"row\" fxLayout='row' fxLayout.lt-md=\"column\">\r\n            <div fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"feature-item\">\r\n              <div class=\"icon-box\">\r\n                <img src=\"assets/images/demo/angular.jpg\" alt=\"\">\r\n              </div>\r\n              <div class=\"text-box\">\r\n                <h4>Angular app</h4>\r\n                <p>Very powerfull and modern front-end Angular ecommerce app for your store market.</p>\r\n              </div>\r\n            </div>\r\n            <div fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"feature-item\">\r\n              <div class=\"icon-box\">\r\n                <img src=\"assets/images/demo/angularM.jpg\" alt=\"\">\r\n              </div>\r\n              <div class=\"text-box\">\r\n                <h4>Angular Material</h4>\r\n                <p>Made with Angular Material UI component library specialized for Angular apps.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" fxLayout='row' fxLayout.lt-md=\"column\">\r\n            <div fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"feature-item\">\r\n              <div class=\"icon-box\">\r\n                <img src=\"assets/images/demo/photoshop.jpg\" alt=\"\">\r\n              </div>\r\n              <div class=\"text-box\">\r\n                <h4>PSD files included for all layouts</h4>\r\n                <p>We provide layered organized psd files for all layouts (for those who want to photoshop).</p>\r\n              </div>\r\n            </div>\r\n            <div fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"feature-item\">\r\n              <div class=\"icon-box\">\r\n                <img src=\"assets/images/demo/sass.jpg\" alt=\"\">\r\n              </div>\r\n              <div class=\"text-box\">\r\n                <h4>SASS support</h4>\r\n                <p>The theme is made with sass styling.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" fxLayout='row' fxLayout.lt-md=\"column\">\r\n            <div fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"feature-item\">\r\n              <div class=\"icon-box\">\r\n                <img src=\"assets/images/demo/angular_flex.jpg\" alt=\"\">\r\n              </div>\r\n              <div class=\"text-box\">\r\n                <h4>Angular Flex-Layout </h4>\r\n                <p>Fast & flexible Flexbox layout library for building a layout structure.</p>\r\n              </div>\r\n            </div>\r\n            <div fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"feature-item\">\r\n              <div class=\"icon-box\">\r\n                <img src=\"assets/images/demo/spinner.jpg\" alt=\"\">\r\n              </div>\r\n              <div class=\"text-box\">\r\n                <h4>Ngx-spinner</h4>\r\n                <p>Angular spinner implemented..</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" fxLayout='row' fxLayout.lt-md=\"column\">\r\n            <div fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"feature-item\">\r\n              <div class=\"icon-box\">\r\n                <img src=\"assets/images/demo/compare.jpg\" alt=\"\">\r\n              </div>\r\n              <div class=\"text-box\">\r\n                <h4>Product Compare </h4>\r\n                <p>We have implemented on product compare component.</p>\r\n              </div>\r\n            </div>\r\n            <div fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"feature-item\">\r\n              <div class=\"icon-box\">\r\n                <img src=\"assets/images/demo/font.jpg\" alt=\"\">\r\n              </div>\r\n              <div class=\"text-box\">\r\n                <h4>Google Fonts</h4>\r\n                <p>The app uses regular google fonts</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"color-showcase sec-padding\">\r\n    <div class=\"container\">\r\n      <div class=\"title\">\r\n        <h2>Unlimited color combinations</h2>\r\n      </div>\r\n      <div class=\"demos\" fxLayout='row' fxLayout.lt-lg=\"column\">\r\n        <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"25\" ngClass.xs=\"mt-2\">\r\n          <div class=\"first\">\r\n            <img src=\"assets/images/demo/c1.jpg\" alt=\"\">\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"25\" ngClass.xs=\"mt-2\">\r\n          <div class=\"first\">\r\n            <img src=\"assets/images/demo/c2.jpg\" alt=\"\">\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"25\" ngClass.xs=\"mt-2\">\r\n          <div class=\"first\">\r\n            <img src=\"assets/images/demo/c3.jpg\" alt=\"\">\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"25\" ngClass.xs=\"mt-2\">\r\n          <div class=\"first\">\r\n            <img src=\"assets/images/demo/c4.jpg\" alt=\"\">\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"likeUs sec-padding\">\r\n    <div class=\"container\">\r\n      <div class=\"theme-features\">\r\n        <mat-card fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"start start\" class=\"p-0\">\r\n          <div class=\"item\">\r\n            <h2>Lifetime License</h2>\r\n            <ul>\r\n              <li fxLayout=\"row\"><i class=\"material-icons\">check</i><span>Quality check by Envato</span> </li>\r\n              <li fxLayout=\"row\"><i class=\"material-icons\">check</i><span>Lifetime regular updates</span></li>\r\n              <li fxLayout=\"row\"><i class=\"material-icons\">check</i><span>6 months free support</span></li>\r\n              <li fxLayout=\"row\"><i class=\"material-icons\">check</i><span>Full access to all files included in the\r\n                  package</span></li>\r\n            </ul>\r\n          </div>\r\n        </mat-card>\r\n      </div>\r\n      <div class=\"title\">\r\n        <h2>If you like Sophia app - Please rate us</h2>\r\n        <div class=\"stars\" fxLayout='row' fxLayoutAlign=\"center center\">\r\n          <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n          <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n          <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n          <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n          <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"footer\">\r\n    <div class=\"container\">\r\n      <p>Copyrights © 2020 by Lamarena. All Rights Reserved. </p>\r\n    </div>\r\n  </div>");

/***/ }),

/***/ "xw5f":
/*!***************************************************!*\
  !*** ./src/app/components/demo/demo.component.ts ***!
  \***************************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_demo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./demo.component.html */ "xlO3");
/* harmony import */ var _demo_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo.component.scss */ "pSVm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let DemoComponent = class DemoComponent {
    constructor() {
        this.contentLoaded = false;
    }
    ngOnInit() {
        setTimeout(() => {
            this.contentLoaded = true;
        }, 4000);
    }
};
DemoComponent.ctorParameters = () => [];
DemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-demo',
        template: _raw_loader_demo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_demo_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], DemoComponent);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "wAiw");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zb6/":
/*!****************************************************************************!*\
  !*** ./src/app/components/shop/widgets/categories/categories.component.ts ***!
  \****************************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_categories_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./categories.component.html */ "OGiV");
/* harmony import */ var _categories_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories.component.sass */ "WHro");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let CategoriesComponent = class CategoriesComponent {
    constructor() { }
    ngOnInit() {
    }
};
CategoriesComponent.ctorParameters = () => [];
CategoriesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-categories',
        template: _raw_loader_categories_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_categories_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], CategoriesComponent);



/***/ }),

/***/ "zkm0":
/*!********************************************************************!*\
  !*** ./src/app/components/shop/home-three/home-three.component.ts ***!
  \********************************************************************/
/*! exports provided: HomeThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeThreeComponent", function() { return HomeThreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_three_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home-three.component.html */ "QlS8");
/* harmony import */ var _home_three_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-three.component.sass */ "cf2G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/product.service */ "6MrQ");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/cart.service */ "bjOM");






let HomeThreeComponent = class HomeThreeComponent {
    constructor(productService, cartService) {
        this.productService = productService;
        this.cartService = cartService;
        this.banners = [];
        this.shoppingCartItems = [];
        this.wishlistItems = [];
        this.contentLoaded = false;
        this.slides = [
            { title: 'Huge sale', subtitle: 'Up to 70%', image: 'assets/images/carousel/banner1.jpg' },
            { title: 'Biggest discount', subtitle: 'Check the promotion', image: 'assets/images/carousel/banner2.jpg' },
            { title: 'Biggest sale', subtitle: 'Dont miss it', image: 'assets/images/carousel/banner3.jpg' },
            { title: 'Our best products', subtitle: 'Special selection', image: 'assets/images/carousel/banner4.jpg' },
            { title: 'Massive sale', subtitle: 'Only for today', image: 'assets/images/carousel/banner5.jpg' }
        ];
        // Collection banner
        this.discount = [{
                image: 'assets/images/product/tablet_bn.png',
                title: 'Tablets, Smartphones and more',
                subtitle: 'Sale up to 30%',
            }, {
                image: 'assets/images/product/camera_bn.png',
                title: 'New Cameras Collection',
                subtitle: 'Sale up to 30%',
            }];
    }
    ngOnInit() {
        this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
        this.productService.getProducts()
            .subscribe((product) => {
            this.products = product;
            console.log(product);
        });
        setTimeout(() => {
            this.contentLoaded = true;
        }, 3000);
    }
};
HomeThreeComponent.ctorParameters = () => [
    { type: _shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] }
];
HomeThreeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home-three',
        template: _raw_loader_home_three_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_three_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]])
], HomeThreeComponent);



/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map