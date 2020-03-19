webpackJsonp([0],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_woocommerce_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_details_product_details__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.page = 1;
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__({
            url: "https://woocommerce-251774-1115146.cloudwaysapps.com",
            consumerKey: "ck_6c9779a96e5377a4b28df5a1aca2e8c6dbbfaae3",
            consumerSecret: "cs_5dc2811ed708448a3dfc889a0921e2e266b25813"
        });
        this.loadMoreProducts(null);
        this.WooCommerce.getAsync("products").then(function (data) {
            console.log(JSON.parse(data.body));
            _this.products = JSON.parse(data.body).products;
        }, function (err) {
            console.log(err);
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setInterval(function () {
            if (_this.productSlides.getActiveIndex() == _this.productSlides.length() - 1)
                _this.productSlides.slideTo(0);
            _this.productSlides.slideNext();
        }, 3000);
    };
    HomePage.prototype.loadMoreProducts = function (event) {
        var _this = this;
        if (event == null) {
            this.page = 2;
            this.moreProducts = [];
        }
        else
            this.page++;
        this.WooCommerce.getAsync("products?page=" + this.page).then(function (data) {
            console.log(JSON.parse(data.body));
            _this.moreProducts = _this.moreProducts.concat(JSON.parse(data.body).products);
            if (event != null) {
                event.complete();
            }
            if (JSON.parse(data.body).products.length < 10) {
                event.enable(false);
                _this.toastCtrl.create({
                    message: "No more products!",
                    duration: 5000
                }).present();
            }
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.openProductPage = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__product_details_product_details__["a" /* ProductDetailsPage */], { "product": product });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('productSlides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], HomePage.prototype, "productSlides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/xbass/Desktop/angular/woo4app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-slides autoplay="3000" pager>\n      <ion-slide *ngFor="let number of [5,6,7,8]"><img src="../assets/imgs/{{number}}.jpg" alt=""></ion-slide>\n         </ion-slides>\n  </ion-card>\n\n  <ion-grid>\n    <ion-row>\n      <ion-slides #productSlides>\n    <ion-slide *ngFor="let product of products">\n      <ion-card no-padding>\n\n        <img [src]="product.featured_src" alt="product-img">\n        <h1 padding center>{{product.title}}</h1>\n        <p padding center [innerHTML]="product.short_description">   </p>\n\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n      </ion-row>\n  </ion-grid>\n\n\n    <ion-list>\n      <ion-item *ngFor="let product of moreProducts" text-wrap (click)="openProductPage(product)">\n          <ion-thumbnail item-left>\n            <img [src]="product.featured_src" alt="">\n          </ion-thumbnail>\n          <h2>{{product.title}}</h2>\n          <p>\n            <span [innerHTML]="product.short_description.substr(0,50)+\'...\'"></span>\n            <span [innerHTML]="product.price_html"></span>\n          </p>\n\n          <button ion-button icon clear item-right>\n            <ion-icon name="arrow-forward"></ion-icon>\n\n          </button>\n\n      </ion-item>\n\n\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="loadMoreProducts($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n   \n\n</ion-content> \n'/*ion-inline-end:"/home/xbass/Desktop/angular/woo4app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_woocommerce_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductDetailsPage = /** @class */ (function () {
    function ProductDetailsPage(navCtrl, navParams, storage, toastCtrl, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.reviews = [];
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__({
            url: "https://woocommerce-251774-1115146.cloudwaysapps.com",
            consumerKey: "ck_6c9779a96e5377a4b28df5a1aca2e8c6dbbfaae3",
            consumerSecret: "cs_5dc2811ed708448a3dfc889a0921e2e266b25813"
        });
        this.product = this.navParams.get("product");
        console.log(this.product);
        this.WooCommerce.getAsync('products/' + this.product.id + '/reviews').then(function (data) {
            _this.reviews = JSON.parse(data.body).product_reviews;
            console.log(_this.reviews);
        }, function (err) {
            console.log(err);
        });
    }
    ProductDetailsPage.prototype.addToCart = function (product) {
        var _this = this;
        this.storage.get("cart").then(function (data) {
            if (data == null || data.length == 0) {
                data = [];
                data.push({
                    "product": product,
                    "qty": 1,
                    "amount": parseFloat(product.price)
                });
            }
            else {
                var added = 0;
                for (var i = 0; i < data.lentgh; i++) {
                    if (product.id == data[i].product.id) {
                        console.log("Product already in the cart");
                        var qty = data[i].qty;
                        data[qty] = qty + 1;
                        data[i].amount = parseFloat(data[i].amount) + parseFloat(data[i].product.price);
                        added = 1;
                    }
                }
                if (added == 0) {
                    data.push({
                        "product": product,
                        "qty": 1,
                        "amount": parseFloat(product.price)
                    });
                }
            }
            _this.storage.set("cart", data).then(function () {
                console.log("Cart updated");
                console.log(data);
                _this.toastCtrl.create({
                    message: "Cart Updated",
                    duration: 3000
                }).present();
            });
        });
    };
    ProductDetailsPage.prototype.openCart = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]).present();
    };
    ProductDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-details',template:/*ion-inline-start:"/home/xbass/Desktop/angular/woo4app/src/pages/product-details/product-details.html"*/'<!--\n  Generated template for the ProductDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{product.title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-fab top right edge (click)="openCart()">\n    <button ion-fab color="danger"><ion-icon name="cart"></ion-icon></button>\n  </ion-fab>\n\n\n<ion-card>  <ion-slides>\n  <ion-slide *ngFor="let image of product.images">\n    <img [src]="image.src" alt="">\n  </ion-slide>\n</ion-slides>\n\n  <ion-card-content>\n    <ion-card-title>\n     <p>{{product.title}} </p> \n      <ion-chip *ngFor="let cat of product.categories" style="margin-left:5px;"> \n        <ion-label color="danger">{{cat}}</ion-label>\n\n      </ion-chip>\n    </ion-card-title>\n\n    <p [innerHTML]="product.description"></p>\n    <button ion-button icon-left block outline color="danger" (click)="addToCart(product)">\n      <ion-icon name="basket"></ion-icon> Add to cart\n\n    </button>\n  </ion-card-content>\n\n\n</ion-card>\n\n<ion-card *ngIf="product.attributes.length>0">\n  <ion-card-content>\n    <ion-card-title>Specifications</ion-card-title>\n    <ion-grid>\n      <ion-row *ngFor="let att of product.attributes">\n        <ion-col col-4>\n          {{att.name}}\n          </ion-col>\n          <ion-col col-8>\n            <span *ngFor="let option of att.options">{{option}}</span>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n  </ion-card-content>\n</ion-card>\n\n\n<ion-card *ngIf="reviews.length > 0">\n  <ion-card-content>\n    <ion-card-title>\n      Reviews\n    </ion-card-title>\n\n    <ion-grid>\n      <ion-row >\n        <ion-col col-4>\n          <b>{{ review.reviewer_name }}</b><br/>\n          <span *ngIf="review.rating >= 1">\n            <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n          </span>\n          <span *ngIf="review.rating >= 2">\n            <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n          </span>\n          <span *ngIf="review.rating >= 3">\n            <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n          </span>\n          <span *ngIf="review.rating >= 4">\n            <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n          </span>\n          <span *ngIf="review.rating >= 5">\n            <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n          </span>\n\n        </ion-col>\n        <ion-col col-8>\n          {{  review.review }}\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </ion-card-content>\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/xbass/Desktop/angular/woo4app/src/pages/product-details/product-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], ProductDetailsPage);
    return ProductDetailsPage;
}());

//# sourceMappingURL=product-details.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout_checkout__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartPage = /** @class */ (function () {
    function CartPage(navCtrl, navParams, storage, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.cartItems = [];
        this.showEmptyCartMessage = false;
        this.total = 0.0;
        this.storage.ready().then(function () {
            _this.storage.get("cart").then(function (data) {
                _this.cartItems = data;
                console.log(_this.cartItems);
                if (_this.cartItems.length > 0) {
                    _this.cartItems.forEach(function (item, index) {
                        _this.total = _this.total + (item.product.price * item.qty);
                    });
                }
                else {
                    _this.showEmptyCartMessage = true;
                }
            });
        });
    }
    CartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartPage');
    };
    CartPage.prototype.removeFromCart = function (item, i) {
        var _this = this;
        var price = item.product.price;
        var qty = item.qty;
        this.cartItems.splice(i, 1);
        this.storage.set("cart", this.cartItems).then(function () {
            _this.total = _this.total - (price * qty);
        });
        if (this.cartItems.length == 0) {
            this.showEmptyCartMessage = true;
        }
    };
    CartPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    //checkout 
    CartPage.prototype.checkout = function () {
        var _this = this;
        this.storage.get("userLoginInfo").then(function (data) {
            if (data != null) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__checkout_checkout__["CheckoutPage"]);
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */], { next: __WEBPACK_IMPORTED_MODULE_3__checkout_checkout__["CheckoutPage"] });
            }
        });
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"/home/xbass/Desktop/angular/woo4app/src/pages/cart/cart.html"*/'<!--\n  Generated template for the CartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>cart</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n<ion-header>\n  <ion-navbar>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let item of cartItems; let i = index">\n\n      <ion-thumbnail item-left>\n        <img [src]="item.product.featured_src" style="width: 60px !important; height: 60px !important;"/>\n      </ion-thumbnail>\n      <h2>{{ item.product.title }}</h2>\n      <p>{{ item.qty }} • {{ item.product.price }}</p>\n      <button ion-button clear item-right color="danger" (click)="removeFromCart(item, i)">\n        <ion-icon name="close-circle"></ion-icon>\n      </button>\n\n    </ion-item>\n  </ion-list>\n\n  <ion-grid>\n    <ion-card>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-2>\n\n          </ion-col>\n          <ion-col col-4>\n            <b>TOTAL</b>\n          </ion-col>\n          <ion-col col-3>\n\n          </ion-col>\n          <ion-col col-3 style="text-align: right">\n            <b> {{ total }} </b>\n          </ion-col>\n\n\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </ion-grid>\n  <ion-grid>\n    <ion-card>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-2>\n\n          </ion-col>\n          <ion-col col-4>\n            <b>TOTAL</b>\n          </ion-col>\n          <ion-col col-3>\n\n          </ion-col>\n          <ion-col col-3 style="text-align: right">\n            <b> {{ total }} </b>\n          </ion-col>\n\n\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button color="danger" outline block (click)="closeModal()">Back</button>\n        </ion-col>\n        <ion-col>\n          <button ion-button color="danger" block (click)="checkout()">Checkout</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/xbass/Desktop/angular/woo4app/src/pages/cart/cart.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]) === "function" && _d || Object])
    ], CartPage);
    return CartPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, http, toastCtrl, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.username = "";
        this.password = "";
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.http.get("https://woocommerce-251774-1115146.cloudwaysapps.com/api/auth/generate_auth_cookie/?insecure=cool&username=" + this.username + "&password=" + this.password)
            .subscribe(function (res) {
            console.log(res.json());
            var response = res.json();
            if (response.error) {
                _this.toastCtrl.create({
                    message: response.error,
                    duration: 5000
                }).present();
                return;
            }
            _this.storage.set("userLoginInfo", response).then(function (data) {
                _this.alertCtrl.create({
                    title: "Login Successful",
                    message: "You have been logged in successfully.",
                    buttons: [{
                            text: "OK",
                            handler: function () {
                                if (_this.navParams.get("next")) {
                                    _this.navCtrl.push(_this.navParams.get("next"));
                                }
                                else {
                                    _this.navCtrl.pop();
                                }
                            }
                        }]
                }).present();
            });
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/xbass/Desktop/angular/woo4app/src/pages/login/login.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card style="margin: 0px; border: none; width: 100%;">\n    <img src="../../assets/imgs/logo.png" style="width:70%; margin: auto; padding:20px;" />\n  </ion-card>\n\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input type="text" [(ngModel)]="username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button block color="danger" (click)="login()">Login</button>\n  <button ion-button clear block color="danger">No Account? Sign Up Here</button>\n\n</ion-content>'/*ion-inline-end:"/home/xbass/Desktop/angular/woo4app/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 201;

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 242;

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_woocommerce_api__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_woocommerce_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products_by_category_products_by_category__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cart_cart__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
* Generated class for the MenuPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams, storage, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.homePage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.categories = [];
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_5_woocommerce_api__({
            url: "https://woocommerce-251774-1115146.cloudwaysapps.com",
            consumerKey: "ck_6c9779a96e5377a4b28df5a1aca2e8c6dbbfaae3",
            consumerSecret: "cs_5dc2811ed708448a3dfc889a0921e2e266b25813"
        });
        this.WooCommerce.getAsync("products/categories").then(function (data) {
            console.log(JSON.parse(data.body).product_categories);
            var temp = JSON.parse(data.body).product_categories;
            for (var i = 0; i < temp.length; i++) {
                if (temp[i].slug == 'advanced-styling' || temp[i].slug == 'belly-basic' || temp[i].slug == 'belly-intermediate-classes' || temp[i].slug == 'express-pass' || temp[i].slug == 'multi-pass' || temp[i].slug == 'single-taster') {
                    _this.categories.push(temp[i]);
                    console.log(temp[i]);
                    if (temp[i].slug == 'advanced-styling') {
                        temp[i].icon = "jet";
                    }
                    if (temp[i].slug == 'belly-basic') {
                        temp[i].icon = "walk";
                    }
                    if (temp[i].slug == 'belly-intermediate-classes') {
                        temp[i].icon = "bicycle";
                    }
                    if (temp[i].slug == 'express-pass') {
                        temp[i].icon = "umbrella";
                    }
                    if (temp[i].slug == 'multi-pass') {
                        temp[i].icon = "albums";
                    }
                    if (temp[i].slug == 'single-taster') {
                        temp[i].icon = "checkmark";
                    }
                }
            }
        }, function (err) {
            console.log(err);
        });
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    //check if a user is logged in
    MenuPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get("userLoginInfo").then(function (userLoginInfo) {
                if (userLoginInfo != null) {
                    console.log("User logged in...");
                    _this.user = userLoginInfo.user;
                    console.log(_this.user);
                    _this.loggedIn = true;
                }
                else {
                    console.log("No user found.");
                    _this.user = {};
                    _this.loggedIn = false;
                }
            });
        });
    };
    //opens category page of a specific category 
    MenuPage.prototype.openCategoryPage = function (category) {
        this.childNavCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__products_by_category_products_by_category__["a" /* ProductsByCategoryPage */], { "category": category });
    };
    MenuPage.prototype.openPage = function (pageName) {
        var _this = this;
        if (pageName == "signup") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
        }
        if (pageName == "login") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        }
        if (pageName == 'logout') {
            this.storage.remove("userLoginInfo").then(function () {
                _this.user = {};
                _this.loggedIn = false;
            });
        }
        if (pageName == 'cart') {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__cart_cart__["a" /* CartPage */]);
            modal.present();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */])
    ], MenuPage.prototype, "childNavCtrl", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/home/xbass/Desktop/angular/woo4app/src/pages/menu/menu.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="card-background-page">\n      <ion-card>\n        <img src="../assets/imgs/5.jpg" alt="">\n        <div class="card-title">Lara Jones</div>\n        <div class="card-subtitle">Belly Dance Instructor</div>\n\n      </ion-card>\n \n\n    <ion-list>\n      <ion-item *ngFor="let category of categories" text-wrap (click)="openCategoryPage(category)" menuClose>\n        <ion-icon [name]="category.icon" item-left large></ion-icon>\n        <h2>{{category.name}}</h2>  \n        <p>{{category.description}}</p>\n      </ion-item>\n      \n      <ion-item-divider color="danger">Account</ion-item-divider>\n      <ion-item (click)="openPage(\'signup\')" menuClose *ngIf="!loggedIn">\n        <ion-icon name="md-clipboard" item-left large></ion-icon>\n        <h2>Sign Up</h2>\n        <p>For a new account</p>\n      </ion-item>\n\n      <ion-item (click)="openPage(\'login\')" menuClose *ngIf="!loggedIn">\n        <ion-icon name="log-in" item-left large></ion-icon>\n        <h2>Login</h2>\n        <p>Using email and password</p>\n      </ion-item>\n\n      <ion-item *ngIf="loggedIn" menuClose>\n        <ion-icon name="contact" item-left large></ion-icon>\n        <h2>{{ (this.user.firstname == \'\' ? this.user.username : this.user.firstname) || "" }}</h2>\n        <p>Welcome</p>\n      </ion-item>\n\n      <ion-item *ngIf="loggedIn" (click)="openPage(\'cart\')" menuClose>\n        <ion-icon name="cart" item-left large></ion-icon>\n        <h2>Your Cart</h2>\n        <p>Check items in your cart</p>\n      </ion-item>\n\n      <ion-item *ngIf="loggedIn" (click)="openPage(\'logout\')" menuClose>\n        <ion-icon name="log-out" item-left large></ion-icon>\n        <h2>Logout</h2>\n        <p>of your Account</p>\n      </ion-item>\n\n\n\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- navigation -->\n<ion-nav [root]="homePage" #content swipeBackEnabled="false">Home</ion-nav>'/*ion-inline-end:"/home/xbass/Desktop/angular/woo4app/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Checkout */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_woocommerce_api__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_woocommerce_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_paypal_ngx__ = __webpack_require__(637);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Checkout = /** @class */ (function () {
    function Checkout(navCtrl, navParams, storage, alertCtrl, payPal) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.payPal = payPal;
        this.newOrder = {};
        this.newOrder.billing_address = {};
        this.newOrder.shipping_address = {};
        this.billing_shipping_same = false;
        this.paymentMethods = [
            { method_id: "bacs", method_title: "Direct Bank Transfer" },
            { method_id: "cheque", method_title: "Cheque Payment" },
            { method_id: "cod", method_title: "Cash on Delivery" },
            { method_id: "paypal", method_title: "PayPal" }
        ];
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_3_woocommerce_api__({
            url: "https://woocommerce-251774-1115146.cloudwaysapps.com",
            consumerKey: "ck_6c9779a96e5377a4b28df5a1aca2e8c6dbbfaae3",
            consumerSecret: "cs_5dc2811ed708448a3dfc889a0921e2e266b25813"
        });
        this.storage.get("userLoginInfo").then(function (userLoginInfo) {
            _this.userInfo = userLoginInfo.user;
            var email = userLoginInfo.user.email;
            _this.WooCommerce.getAsync("customers/email/" + email).then(function (data) {
                _this.newOrder = JSON.parse(data.body).customer;
            });
        });
    }
    Checkout.prototype.setBillingToShipping = function () {
        this.billing_shipping_same = !this.billing_shipping_same;
        if (this.billing_shipping_same) {
            this.newOrder.shipping_address = this.newOrder.billing_address;
        }
    };
    Checkout.prototype.placeOrder = function () {
        var _this = this;
        var orderItems = [];
        var data = {};
        var paymentData = {};
        this.paymentMethods.forEach(function (element, index) {
            if (element.method_id == _this.paymentMethod) {
                paymentData = element;
            }
        });
        data = {
            payment_details: {
                method_id: paymentData.method_id,
                method_title: paymentData.method_title,
                paid: true
            },
            billing_address: this.newOrder.billing_address,
            shipping_address: this.newOrder.shipping_address,
            customer_id: this.userInfo.id || '',
            line_items: orderItems
        };
        if (paymentData.method_id == "paypal") {
            this.payPal.init({
                PayPalEnvironmentProduction: "YOUR_PRODUCTION_CLIENT_ID",
                PayPalEnvironmentSandbox: "ARP4uyVXQzfGXHKK25rrYghpZD7lZ-1jeiOea0K30j_iiG518jZUMfmfBc-x4KI8ZaITX_cUrmDDx056"
            }).then(function () {
                // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
                _this.payPal.prepareToRender('PayPalEnvironmentSandbox', new __WEBPACK_IMPORTED_MODULE_5__ionic_native_paypal_ngx__["b" /* PayPalConfiguration */]({})).then(function () {
                    _this.storage.get("cart").then(function (cart) {
                        var total = 0.00;
                        cart.forEach(function (element, index) {
                            orderItems.push({ product_id: element.product.id, quantity: element.qty });
                            total = total + (element.product.price * element.qty);
                        });
                        var payment = new __WEBPACK_IMPORTED_MODULE_5__ionic_native_paypal_ngx__["c" /* PayPalPayment */](total.toString(), 'USD', 'Description', 'sale');
                        _this.payPal.renderSinglePaymentUI(payment).then(function (response) {
                            // Successfully paid
                            alert(JSON.stringify(response));
                            data.line_items = orderItems;
                            //console.log(data);
                            var orderData = {};
                            orderData.order = data;
                            _this.WooCommerce.postAsync('orders', orderData).then(function (data) {
                                alert("Order placed successfully!");
                                var response = (JSON.parse(data.body).order);
                                _this.alertCtrl.create({
                                    title: "Order Placed Successfully",
                                    message: "Your order has been placed successfully. Your order number is " + response.order_number,
                                    buttons: [{
                                            text: "OK",
                                            handler: function () {
                                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                                            }
                                        }]
                                }).present();
                            });
                        });
                    }, function () {
                        // Error or render dialog closed without being successful
                    });
                }, function () {
                    // Error in configuration
                });
            }, function () {
                // Error in initialization, maybe PayPal isn't supported or something else
            });
        }
        else {
            this.storage.get("cart").then(function (cart) {
                cart.forEach(function (element, index) {
                    orderItems.push({
                        product_id: element.product.id,
                        quantity: element.qty
                    });
                });
                data.line_items = orderItems;
                var orderData = {};
                orderData.order = data;
                _this.WooCommerce.postAsync("orders", orderData).then(function (data) {
                    var response = (JSON.parse(data.body).order);
                    _this.alertCtrl.create({
                        title: "Order Placed Successfully",
                        message: "Your order has been placed successfully. Your order number is " + response.order_number,
                        buttons: [{
                                text: "OK",
                                handler: function () {
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                                }
                            }]
                    }).present();
                });
            });
        }
    };
    Checkout = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkout',template:/*ion-inline-start:"/home/xbass/Desktop/angular/woo4app/src/pages/checkout/checkout.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Checkout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n      <ion-item-divider color="danger">Personal Details</ion-item-divider>\n      <ion-item>\n        <ion-label>First Name</ion-label>\n        <ion-input type="text" [(ngModel)]="newOrder.billing_address.first_name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Last Name</ion-label>\n        <ion-input type="text" [(ngModel)]="newOrder.billing_address.last_name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Email</ion-label>\n        <ion-input readonly type="email" [(ngModel)]="newOrder.email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Username</ion-label>\n        <ion-input readonly type="text" [(ngModel)]="newOrder.username"></ion-input>\n      </ion-item>\n\n      <ion-item-divider color="danger">Billing Details</ion-item-divider>\n\n      <ion-item>\n        <ion-label>Address Line 1</ion-label>\n        <ion-textarea type="text" maxlength="80" [(ngModel)]="newOrder.billing_address.address_1"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Address Line 2</ion-label>\n        <ion-textarea type="text" maxlength="80" [(ngModel)]="newOrder.billing_address.address_2"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Country</ion-label>\n        <ion-select [(ngModel)]="newOrder.billing_address.country">\n          <ion-option value="India" selected="true">India</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>State</ion-label>\n        <ion-select [(ngModel)]="newOrder.billing_address.state">\n          <ion-option value="New Delhi">New Delhi</ion-option>\n          <ion-option value="Uttar Pradesh">Uttar Pradesh</ion-option>\n          <ion-option value="Maharashtra">Maharashtra</ion-option>\n          <ion-option value="Tamil Nadu">Tamil Nadu</ion-option>\n          <ion-option value="Madhya Pradesh">Madhya Pradesh</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>City</ion-label>\n        <ion-input type="text" [(ngModel)]="newOrder.billing_address.city"></ion-input>        \n      </ion-item>\n\n      <ion-item>\n        <ion-label>Postal Code</ion-label>\n        <ion-input type="number" clearInput [(ngModel)]="newOrder.billing_address.postcode"></ion-input>        \n      </ion-item>\n\n      <ion-item>\n        <ion-label>Phone</ion-label>\n        <ion-input type="tel" clearInput [(ngModel)]="newOrder.billing_address.phone"></ion-input>        \n      </ion-item>\n\n      <ion-item>\n        <ion-label>Same Shipping Details</ion-label>\n        <ion-checkbox (ionChange)="setBillingToShipping()"></ion-checkbox>\n      </ion-item>\n\n      <ion-item-divider color="danger" *ngIf="!billing_shipping_same">Shipping Details</ion-item-divider>\n      \n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>First Name</ion-label>\n        <ion-input type="text" [(ngModel)]="newOrder.shipping_address.first_name"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>Last Name</ion-label>\n        <ion-input type="text" [(ngModel)]="newOrder.shipping_address.last_name"></ion-input>\n      </ion-item>\n      \n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>Address Line 1</ion-label>\n        <ion-textarea type="text" maxlength="80" [(ngModel)]="newOrder.shipping_address.address_1"></ion-textarea>\n      </ion-item>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>Address Line 2</ion-label>\n        <ion-textarea type="text" maxlength="80" [(ngModel)]="newOrder.shipping_address.address_2"></ion-textarea>\n      </ion-item>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>Country</ion-label>\n        <ion-select [(ngModel)]="newOrder.shipping_address.country">\n          <ion-option value="India" selected="true">India</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>State</ion-label>\n        <ion-select [(ngModel)]="newOrder.shipping_address.state">\n          <ion-option value="New Delhi">New Delhi</ion-option>\n          <ion-option value="Uttar Pradesh">Uttar Pradesh</ion-option>\n          <ion-option value="Maharashtra">Maharashtra</ion-option>\n          <ion-option value="Tamil Nadu">Tamil Nadu</ion-option>\n          <ion-option value="Madhya Pradesh">Madhya Pradesh</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>City</ion-label>\n        <ion-input type="text" [(ngModel)]="newOrder.shipping_address.city"></ion-input>        \n      </ion-item>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>Postal Code</ion-label>\n        <ion-input type="number" clearInput [(ngModel)]="newOrder.shipping_address.postcode"></ion-input>        \n      </ion-item>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>Phone</ion-label>\n        <ion-input type="tel" clearInput [(ngModel)]="newOrder.shipping_address.phone"></ion-input>        \n      </ion-item>\n\n      <ion-item-divider color="danger">Payment Details</ion-item-divider>\n\n      <ion-item>\n        <ion-label>Payment Method</ion-label>\n        <ion-select [(ngModel)]="paymentMethod">\n          <ion-option *ngFor="let p of paymentMethods" value="{{p.method_id}}">{{ p.method_title }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <button ion-button block color="danger" (click)="placeOrder()">Place Order</button>\n</ion-footer>'/*ion-inline-end:"/home/xbass/Desktop/angular/woo4app/src/pages/checkout/checkout.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_paypal_ngx__["a" /* PayPal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_paypal_ngx__["a" /* PayPal */]) === "function" && _e || Object])
    ], Checkout);
    return Checkout;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=checkout.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_woocommerce_api__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.newUser = {};
        this.newUser.billing_address = {};
        this.newUser.shipping_address = {};
        this.billing_shipping_same = false;
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__({
            url: "https://woocommerce-251774-1115146.cloudwaysapps.com",
            consumerKey: "ck_6c9779a96e5377a4b28df5a1aca2e8c6dbbfaae3",
            consumerSecret: "cs_5dc2811ed708448a3dfc889a0921e2e266b25813"
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.setBillingToShipping = function () {
        this.billing_shipping_same = !this.billing_shipping_same;
    };
    // email validation
    SignupPage.prototype.checkEmail = function () {
        var _this = this;
        var validEmail = false;
        var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (reg.test(this.newUser.email)) {
            //email looks valid
            this.WooCommerce.getAsync('customers/email/' + this.newUser.email).then(function (data) {
                console.log(JSON.parse(data.body));
                var res = (JSON.parse(data.body));
                if (res.errors) {
                    validEmail = true;
                    _this.toastCtrl.create({
                        message: "Congratulations. Email is good to go.",
                        duration: 3000
                    }).present();
                }
                else {
                    validEmail = false;
                    _this.toastCtrl.create({
                        message: "Email already registered. Please log in instead.",
                        showCloseButton: true
                    }).present();
                }
                console.log(validEmail);
            });
        }
        else {
            validEmail = false;
            this.toastCtrl.create({
                message: "Invalid Email. Please check.",
                showCloseButton: true
            }).present();
            console.log(validEmail);
        }
    };
    //signup function
    SignupPage.prototype.signup = function () {
        var _this = this;
        var customerData = {
            customer: {}
        };
        customerData.customer = {
            "email": this.newUser.email,
            "first_name": this.newUser.first_name,
            "last_name": this.newUser.last_name,
            "username": this.newUser.username,
            "password": this.newUser.password,
            "billing_address": {
                "first_name": this.newUser.first_name,
                "last_name": this.newUser.last_name,
                "company": "",
                "address_1": this.newUser.billing_address.address_1,
                "address_2": this.newUser.billing_address.address_2,
                "city": this.newUser.billing_address.city,
                "state": this.newUser.billing_address.state,
                "postcode": this.newUser.billing_address.postcode,
                "country": this.newUser.billing_address.country,
                "email": this.newUser.email,
                "phone": this.newUser.billing_address.phone
            },
            "shipping_address": {
                "first_name": this.newUser.first_name,
                "last_name": this.newUser.last_name,
                "company": "",
                "address_1": this.newUser.shipping_address.address_1,
                "address_2": this.newUser.shipping_address.address_2,
                "city": this.newUser.shipping_address.city,
                "state": this.newUser.shipping_address.state,
                "postcode": this.newUser.shipping_address.postcode,
                "country": this.newUser.shipping_address.country
            }
        };
        if (this.billing_shipping_same) {
            this.newUser.shipping_address = this.newUser.shipping_address;
        }
        this.WooCommerce.postAsync('customers', customerData).then(function (data) {
            var response = (JSON.parse(data.body));
            if (response.customer) {
                _this.alertCtrl.create({
                    title: "Account Created",
                    message: "Your account has been created successfully! Please login to proceed.",
                    buttons: [{
                            text: "Login",
                            handler: function () {
                                //TODO
                            }
                        }]
                }).present();
            }
            else if (response.errors) {
                _this.toastCtrl.create({
                    message: response.errors[0].message,
                    showCloseButton: true
                }).present();
            }
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/xbass/Desktop/angular/woo4app/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>signup</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-divider color="danger">Personal Details</ion-item-divider>\n\n    <ion-item>\n      <ion-label>First Name</ion-label>\n      <ion-input type="text" [(ngModel)]="newUser.first_name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Last Name</ion-label>\n      <ion-input type="text" [(ngModel)]="newUser.last_name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Email</ion-label>\n      <ion-input type="email" [(ngModel)]="newUser.email" (blur)="checkEmail()"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Username</ion-label>\n      <ion-input type="text" [(ngModel)]="newUser.username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="newUser.password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Confirm Password</ion-label>\n      <ion-input type="text" [(ngModel)]="newUser.confirm_password"></ion-input>\n    </ion-item>\n\n    <ion-item-divider color="danger">Billing Details</ion-item-divider>\n\n    <ion-item>\n      <ion-label>Address Line 1</ion-label>\n      <ion-textarea type="text" maxlength="80" [(ngModel)]="newUser.billing_address.address_1"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Address Line 2</ion-label>\n      <ion-textarea type="text" maxlength="80" [(ngModel)]="newUser.billing_address.address_2"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Country</ion-label>\n      <ion-select [(ngModel)]="newUser.billing_address.country">\n        <ion-option value="India" selected="true">India</ion-option>\n        <ion-option value="Greece" selected="true">Greece</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>State</ion-label>\n      <ion-select [(ngModel)]="newUser.billing_address.state">\n        <ion-option value="New Delhi" selected="true">New Delhi</ion-option>\n        <ion-option value="Uttar Pradesh">Uttar Pradesh</ion-option>\n        <ion-option value="Maharashtra">Maharashtra</ion-option>\n        <ion-option value="Tamil Nadu">Tamil Nadu</ion-option>\n        <ion-option value="Madhya Pradesh">Madhya Pradesh</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>City</ion-label>\n      <ion-input type="text" [(ngModel)]="newUser.billing_address.city"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Postal Code</ion-label>\n      <ion-input type="number" clearInput [(ngModel)]="newUser.billing_address.postcode"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Phone</ion-label>\n      <ion-input type="tel" clearInput [(ngModel)]="newUser.billing_address.phone"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Same Shipping Details</ion-label>\n      <ion-checkbox (ionChange)="setBillingToShipping()"></ion-checkbox>\n    </ion-item>\n\n\n    <ion-item-divider color="danger" *ngIf="!billing_shipping_same">Shipping Details</ion-item-divider>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>Address Line 1</ion-label>\n        <ion-textarea type="text" maxlength="80" [(ngModel)]="newUser.shipping_address.address_1"></ion-textarea>\n      </ion-item>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>Address Line 2</ion-label>\n        <ion-textarea type="text" maxlength="80" [(ngModel)]="newUser.shipping_address.address_2"></ion-textarea>\n      </ion-item>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>Country</ion-label>\n        <ion-select [(ngModel)]="newUser.shipping_address.country">\n          <ion-option value="India" selected="true">India</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>State</ion-label>\n        <ion-select [(ngModel)]="newUser.shipping_address.state">\n          <ion-option value="New Delhi" selected="true">New Delhi</ion-option>\n          <ion-option value="Uttar Pradesh">Uttar Pradesh</ion-option>\n          <ion-option value="Maharashtra">Maharashtra</ion-option>\n          <ion-option value="Tamil Nadu">Tamil Nadu</ion-option>\n          <ion-option value="Madhya Pradesh">Madhya Pradesh</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>City</ion-label>\n        <ion-input type="text" [(ngModel)]="newUser.shipping_address.city"></ion-input>        \n      </ion-item>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>Postal Code</ion-label>\n        <ion-input type="number" clearInput [(ngModel)]="newUser.shipping_address.postcode"></ion-input>        \n      </ion-item>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>Phone</ion-label>\n        <ion-input type="tel" clearInput [(ngModel)]="newUser.shipping_address.phone"></ion-input>        \n      </ion-item>\n\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <button ion-button block color="danger" (click)="signup()">Sign Up</button>\n</ion-footer>'/*ion-inline-end:"/home/xbass/Desktop/angular/woo4app/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsByCategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_woocommerce_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_details_product_details__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductsByCategoryPage = /** @class */ (function () {
    function ProductsByCategoryPage(navCtrl, navParams, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.page = 1;
        this.category = this.navParams.get("category");
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__({
            url: "https://woocommerce-251774-1115146.cloudwaysapps.com",
            consumerKey: "ck_6c9779a96e5377a4b28df5a1aca2e8c6dbbfaae3",
            consumerSecret: "cs_5dc2811ed708448a3dfc889a0921e2e266b25813"
        });
        this.WooCommerce.getAsync("products?filter[category]=" + this.category.slug).then(function (data) {
            console.log(JSON.parse(data.body));
            _this.products = JSON.parse(data.body).products;
        }, function (err) {
            console.log(err);
        });
    }
    ProductsByCategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductsByCategoryPage');
    };
    /////////////////////////////////
    ProductsByCategoryPage.prototype.loadMoreProducts = function (event) {
        var _this = this;
        this.page++;
        console.log("Getting page " + this.page);
        this.WooCommerce.getAsync("products?filter[category]=" + this.category.slug + "&page=" + this.page).then(function (data) {
            var temp = (JSON.parse(data.body).products);
            _this.products = _this.products.concat(JSON.parse(data.body).products);
            console.log(_this.products);
            event.complete();
            if (temp.length < 10)
                event.enable(false);
            _this.toastCtrl.create({
                message: "No more products!",
                duration: 5000
            }).present();
        });
    };
    ProductsByCategoryPage.prototype.openProductPage = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__product_details_product_details__["a" /* ProductDetailsPage */], { "product": product });
    };
    ProductsByCategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-products-by-category',template:/*ion-inline-start:"/home/xbass/Desktop/angular/woo4app/src/pages/products-by-category/products-by-category.html"*/'<!--\n  Generated template for the ProductsByCategoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button color="danger" ion-button icon menuToggle>\n        <ion-icon name="menu"></ion-icon></button>\n    </ion-buttons>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n\n  <ion-list>\n    <ion-item *ngFor="let product of products" text-wrap (click)="openProductPage(product)">\n        <ion-thumbnail item-left>\n          <img [src]="product.featured_src" alt="">\n        </ion-thumbnail>\n        <h2>{{product.title}}</h2>\n        <p>\n          <span [innerHTML]="product.short_description.substr(0,50)+\'...\'"></span>\n          <span [innerHTML]="product.price_html"></span>\n        </p>\n\n        <button ion-button icon clear item-right>\n          <ion-icon name="arrow-forward"></ion-icon>\n\n        </button>\n\n    </ion-item>\n\n\n</ion-list>\n\n<ion-infinite-scroll (ionInfinite)="loadMoreProducts($event)">\n  <ion-infinite-scroll-content></ion-infinite-scroll-content>\n</ion-infinite-scroll>\n \n</ion-content>\n'/*ion-inline-end:"/home/xbass/Desktop/angular/woo4app/src/pages/products-by-category/products-by-category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], ProductsByCategoryPage);
    return ProductsByCategoryPage;
}());

//# sourceMappingURL=products-by-category.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(379);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_products_by_category_products_by_category__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_product_details_product_details__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cart_cart__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_checkout_checkout__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_products_by_category_products_by_category__["a" /* ProductsByCategoryPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_product_details_product_details__["a" /* ProductDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_checkout_checkout__["CheckoutPage"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_products_by_category_products_by_category__["a" /* ProductsByCategoryPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_product_details_product_details__["a" /* ProductDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_checkout_checkout__["CheckoutPage"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_menu_menu__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_menu_menu__["a" /* MenuPage */]; //SignupPage//
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/xbass/Desktop/angular/woo4app/src/app/app.html"*/'!\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/xbass/Desktop/angular/woo4app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 444:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 446:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 476:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 477:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 543:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[356]);
//# sourceMappingURL=main.js.map