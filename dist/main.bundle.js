webpackJsonp([1,5],{

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 116;


/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(143);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = (function () {
    function AboutComponent() {
        this.state = 'small';
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.onScrollEvent = function ($event) {
        var top = __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()(window).scrollTop();
        if (top > 318) {
            __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('#cptheading').animate({ 'margin-left': '0' });
        }
        if (top > 380) {
            __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('#cptpara').animate({ 'margin-left': '0', 'opacity': '1' });
        }
        if (top > 400) {
            var img = __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('.competance').children('img');
            for (var i = 0; i < img.length; i++) {
                __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()(img[i]).delay(i * 200).animate({ 'margin-top': '0', 'opacity': '1' });
            }
        }
        if (top > 600) {
            __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('.cv').animate({ 'margin-left': '0', 'opacity': '1' });
        }
    };
    AboutComponent.prototype.play = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('#player')[0].play();
        __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('.fa').removeClass('fa-play');
        __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('.fa').addClass('fa-pause');
        setTimeout(this.pause, 4000);
    };
    AboutComponent.prototype.pause = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('.fa').removeClass('fa-pause');
        __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('.fa').addClass('fa-play');
    };
    AboutComponent.prototype.animateMe = function () {
        this.state = (this.state === 'small' ? 'large' : 'small');
    };
    return AboutComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* HostListener */])('window:scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AboutComponent.prototype, "onScrollEvent", null);
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__(209),
        styles: [__webpack_require__(199)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["a" /* trigger */])('myAnimation', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["b" /* state */])('small', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({
                    transform: 'scale(1)',
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["b" /* state */])('large', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({
                    transform: 'scale(2)',
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["d" /* transition */])('small <=> large', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('300ms ease-in')),
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["a" /* trigger */])('myAwesomeAnimation', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["d" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(2500, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 0, transform: 'translateY(-200px)', offset: 0 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 1, transform: 'translateY(15px)', offset: .5 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 1, transform: 'translateY(10px)', offset: .7 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 1, transform: 'translateY(0%)', offset: 1 }),
                    ]))
                ])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["a" /* trigger */])('buttonAnimation', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["d" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(2500, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 0, transform: 'translateY(-200px)', offset: 0 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 1, transform: 'translateY(15px)', offset: .5 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 1, transform: 'translateY(10px)', offset: .7 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 1, transform: 'translateY(0%)', offset: 1 }),
                    ]))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(210),
        styles: [__webpack_require__(200)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_core__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_about_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sidelink_sidelink_component__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__projects_projects_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__contact_contact_component__ = __webpack_require__(138);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_10__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__sidelink_sidelink_component__["a" /* SidelinkComponent */],
            __WEBPACK_IMPORTED_MODULE_13__projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__contact_contact_component__["a" /* ContactComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_7__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyAItNe1cVhLupQfShGE4FuIACZImzPfDGU'
            }),
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */]
                },
                {
                    path: 'about',
                    component: __WEBPACK_IMPORTED_MODULE_10__about_about_component__["a" /* AboutComponent */]
                },
                {
                    path: 'projects',
                    component: __WEBPACK_IMPORTED_MODULE_13__projects_projects_component__["a" /* ProjectsComponent */]
                },
                {
                    path: 'contact',
                    component: __WEBPACK_IMPORTED_MODULE_14__contact_contact_component__["a" /* ContactComponent */]
                }
            ])
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
        this.lat = 48.8424303;
        this.lng = 2.3246378;
        this.zoom = 13;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__(211),
        styles: [__webpack_require__(201)]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.onScrollEvent = function ($event) {
        __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()(window).scrollTop() === (__WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()(window).scrollTop() > 0 ? __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('#navbar').addClass('navbgchange') : __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('#navbar').removeClass('navbgchange'));
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* HostListener */])('window:scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HeaderComponent.prototype, "onScrollEvent", null);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'header',
        template: __webpack_require__(212),
        styles: [__webpack_require__(202)]
    })
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(213),
        styles: [__webpack_require__(203)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        $('.firstblog').animate({ 'margin-top': '0', 'opacity': '1' });
        $('.left').animate({ 'margin-left': '0', 'opacity': '1' });
        $('.right').delay(900).animate({ 'margin-right': '0', 'opacity': '1' });
        $('.secondblog').delay(900).animate({ 'margin-top': '0', 'opacity': '1' });
    };
    ProjectsComponent.prototype.onScrollEvent = function ($event) {
        var top = $(window).scrollTop();
        if (top > 100) {
        }
    };
    return ProjectsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* HostListener */])('window:scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProjectsComponent.prototype, "onScrollEvent", null);
ProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-projects',
        template: __webpack_require__(214),
        styles: [__webpack_require__(204)]
    }),
    __metadata("design:paramtypes", [])
], ProjectsComponent);

//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidelinkComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidelinkComponent = (function () {
    function SidelinkComponent() {
    }
    SidelinkComponent.prototype.ngOnInit = function () {
    };
    return SidelinkComponent;
}());
SidelinkComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-sidelink',
        template: __webpack_require__(215),
        styles: [__webpack_require__(205)]
    }),
    __metadata("design:paramtypes", [])
], SidelinkComponent);

//# sourceMappingURL=sidelink.component.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "h1{\n  font-family: 'Borrio', cursive;\n  margin: -2% 0 5% 5%;\n  opacity: 0;\n  -webkit-animation: 2s show forwards;\n          animation: 2s show forwards;\n}\n@-webkit-keyframes show {\n  from { margin-left: 0; opacity: 0;}\n  to { margin-left: 5%; opacity: 1;}\n}\n@keyframes show {\n  from { margin-left: 0; opacity: 0;}\n  to { margin-left: 5%; opacity: 1;}\n}\nh2{\n  font-family: 'Borrio', cursive;\n  margin-bottom: 2%;\n}\nh3{\n  font-family: 'Pangolin', cursive;\n  margin: 0 auto;\n}\n#cptheading{\n  margin-left: -50%;\n}\n#cptpara{\n  margin-left: -50%;\n  text-align: center;\n  opacity: 0;\n}\n/*.biopro .row{\n  margin-bottom: 30%;\n}\n.biopro .row:nth-child(3){\n  margin-bottom: 5%;\n}\n.biopro .row:last-child{\n  margin-bottom: 0%;\n}*/\n.biopro{\n  width: 80%;\n  margin: 0 auto;\n}\n.biopro #para{\n  width: 100%;\n  height: 200px;\n  font-size: 25px;\n  font-family: 'Pangolin', cursive;\n  padding-top: 5%;\n  line-height: 1.3em;\n  text-align: center;\n  position: relative;\n  z-index: 1000;\n}\n.para{\n  text-align: center;\n}\n.biopro #mypic{\n  position: absolute;\n  right: -70%;\n  width: 400px;\n  height: auto;\n  -webkit-animation: slide 1.5s forwards;\n          animation: slide 1.5s forwards;\n  z-index: 1;\n  box-shadow: 0 5px 9px 0 rgba(0, 0, 0, 0.4);\n}\n.biopro #mypic:hover{\n  cursor: all-scroll;\n  transition: .2s;\n  border: 5px solid black;\n  z-index: 5000;\n}\n@-webkit-keyframes slide {\n  100% { right: 10%; }\n}\n@keyframes slide {\n  100% { right: 10%; }\n}\n.svg{\n  text-align: center;\n  height: 200px;\n  margin-top: 15%;\n}\n.arrows{\n  width: 60px;\n  height: 72px;\n}\n.arrows path {\n\tstroke: #000;\n\tfill: transparent;\n\tstroke-width: 1px;\n\tanimation: arrow 2s infinite;\n\t-webkit-animation: arrow 2s infinite;\n}\n\n@keyframes arrow\n{\n  0% {opacity:0}\n  40% {opacity:1}\n  80% {opacity:0}\n  100% {opacity:0}\n}\n\n@-webkit-keyframes arrow /*Safari and Chrome*/\n{\n  0% {opacity:0}\n  40% {opacity:1}\n  80% {opacity:0}\n  100% {opacity:0}\n}\n.arrows path.a1 {\n\tanimation-delay:-1s;\n\t-webkit-animation-delay:-1s; /* Safari 和 Chrome */\n}\n\n.arrows path.a2 {\n\tanimation-delay:-0.5s;\n\t-webkit-animation-delay:-0.5s; /* Safari 和 Chrome */\n}\n\n.arrows path.a3 {\n\tanimation-delay:0s;\n\t-webkit-animation-delay:0s; /* Safari 和 Chrome */\n}\n.competance{\n  padding: 3% 0;\n  font-size: 1.5em;\n  text-align: center;\n}\n.competance img{\n  width: 90px;\n  margin: 1%;\n  margin-top: -5%;\n  opacity: 0;\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%);\n}\n.competance img:hover{\n  -webkit-filter: grayscale(0%);\n          filter: grayscale(0%);\n}\n.row .footer{\n  width: 100%;\n  height: 30px;\n  text-align: center;\n}\n.cv{\n  text-align: center;\n  padding: 5% 0;\n  margin-top: 3%;\n  margin-left: -50%;\n  opacity: 0;\n}\n.cv h3{\n  margin-bottom: 2%;\n}\n.button{\n  padding: 1% 2%;\n  background-color: #2CABF9;\n  color: #fff;\n  border-radius: 2px;\n  box-sizing: border-box;\n  font-size: 1.2em;\n}\na:hover{\n  text-decoration: none;\n  background-color: #2692D6;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "header{\n  width: 100%;\n  height: 100px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "h1{\n  font-family: 'Borrio', cursive;\n  margin-left: -5%;\n  opacity: 0;\n  -webkit-animation: 2s show forwards;\n          animation: 2s show forwards;\n}\n@-webkit-keyframes show {\n  from { margin-left: -5%; opacity: 0}\n  to { margin-left: 0; opacity: 1}\n}\n@keyframes show {\n  from { margin-left: -5%; opacity: 0}\n  to { margin-left: 0; opacity: 1}\n}\n.container{\n  position: relative;\n  width: 55%;\n  margin-left: 20%;\n}\np{\n  display: block;\n  width: 100%;\n  text-align: center;\n  font-family: 'pangolin', cursive;\n  margin: 2% 0;\n}\n.blackout{\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #000;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  -webkit-animation: 2s out forwards;\n          animation: 2s out forwards;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n@-webkit-keyframes out {\n  from { width: 100% }\n  to { width: 0 }\n}\n@keyframes out {\n  from { width: 100% }\n  to { width: 0 }\n}\nagm-map {\n  height:300px;\n}\n.contact{\n  margin-top: 1%;\n  height: 400px;\n}\n.container2{\n  position: relative;\n  width: 30%;\n  margin-left: 5%;\n}\n.leftcontact{\n  width: 30%;\n  padding: 2%;\n  font-family: 'pangolin', cursive;\n  margin: 10% 0 5% 10%;\n}\n.blackout2{\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #000;\n  overflow: hidden;\n  width: 50%;\n  height: 100%;\n  -webkit-animation: 2s out forwards;\n          animation: 2s out forwards;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n}\n@keyframes out {\n  from { width: 50% }\n  to { width: 0 }\n}\n.rightcontact{\n  display: block;\n  float: right;\n  width: 55%;\n  padding: 2%;\n  font-family: 'pangolin', cursive;\n  margin-top: 10%;\n  margin-right: -25%;\n}\n.rightcontact img{\n  width: 29px;\n}\n.facebook{\n  display: block;\n  float: left;\n  width: 55px;\n  padding: 3% 3%;\n  border: 3px solid #3E92CC;\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%);\n  position: relative;\n}\n.facebook:hover{\n  -webkit-filter: grayscale(0);\n          filter: grayscale(0);\n  transition: .5s ease;\n  cursor: pointer;\n}\n.insta{\n  display: block;\n  float: left;\n  width: 55px;\n  padding: 3% 3%;\n  border: 3px solid #F77B90;\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%);\n  margin-left: 10%;\n}\n.insta:hover{\n  -webkit-filter: grayscale(0);\n          filter: grayscale(0);\n  transition: .5s ease;\n  cursor: pointer;\n}\n.github{\n  display: block;\n  float: left;\n  width: 55px;\n  padding: 3% 3%;\n  border: 3px solid #F39C6B;\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%);\n  margin-left: 10%;\n}\n.github:hover{\n  -webkit-filter: grayscale(0);\n          filter: grayscale(0);\n  transition: .5s ease;\n  cursor: pointer;\n}\n.link{\n  display: block;\n  float: left;\n  width: 55px;\n  padding: 3% 3%;\n  border: 3px solid #38AECC;\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%);\n  margin-left: 10%;\n}\n.link:hover{\n  -webkit-filter: grayscale(0);\n          filter: grayscale(0);\n  transition: .5s ease;\n  cursor: pointer;\n}\n.footer{\n  width: 100%;\n  height: 20px;\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "nav{\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  overflow: hidden;\n  font-family: 'Barrio', cursive;\n  font-size: 1.3em;\n  z-index: 2000;\n}\n.navbgchange{\n  background-color: #E6E6E6;\n}\nnav ul{\n  display: block;\n  float: right;\n  padding-right: 5%;\n}\nnav ul li{\n  display: inline-block;\n  list-style-type: none;\n}\nnav ul li a{\n  display: block;\n  color: #000;\n  padding: 10px 20px 0 20px;\n  text-decoration: none;\n  position: relative;\n}\nnav ul li a:hover{\n  color: #000;\n}\nnav ul li a::before{\n  content: ' ';\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: #75DDDD;\n  visibility: hidden;\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n  transition: all 0.3s ease-in-out 0s;\n}\nnav ul li a:hover::before{\n  visibility: visible;\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".wrapper{\n  margin-top: 10%;\n}\n#heading{\n  position: relative;\n  height: auto;\n  display: inline-block;\n  text-align: center;\n  margin-left: 32.5%;\n}\n#heading #backheading{\n  color: lightgrey;\n  display: inline-block;\n  position: relative;\n}\n#heading #blackheading{\n  color: #000;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  display: inline-block;\n  white-space: nowrap;\n    -webkit-animation: move 2s linear;\n    -moz-animation: move 2s linear;\n    -o-animation: move 2s linear;\n    overflow: hidden;\n}\nh1{\n  font-family: 'Barrio', cursive;\n}\nh2{\n  font-family: 'pangolin', cursive;\n  padding-left: 20px;\n}\n.hometitle{\n  margin-top: 2%;\n  position: relative;\n  height: auto;\n  display: inline-block;\n  text-align: center;\n  margin-left: 30%;\n}\n.hometitle #backtext{\n  color: lightgrey;\n  display: inline-block;\n  position: relative;\n}\n.hometitle #blacktext{\n  color: #000;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  display: inline-block;\n  white-space: nowrap;\n    -webkit-animation: move 2s linear;\n    -moz-animation: move 2s linear;\n    -o-animation: move 2s linear;\n    overflow: hidden;\n}\n\n.hometitle span{\n  display: inline-block;\n  -webkit-animation: wiggle 3s infinite;\n          animation: wiggle 3s infinite;\n}\n@-webkit-keyframes wiggle {\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n   80% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n   85% { -webkit-transform: rotate(10deg); transform: rotate(10deg); }\n   95% { -webkit-transform: rotate(-15deg); transform: rotate(-15deg); }\n  100% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n}\n@keyframes wiggle {\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n   80% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n   85% { -webkit-transform: rotate(10deg); transform: rotate(10deg); }\n   95% { -webkit-transform: rotate(-15deg); transform: rotate(-15deg); }\n  100% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n}\n#blacktext span{\n  color: #75DDDD;\n}\n@-webkit-keyframes move {\n    from { width: 0%; }\n    to { width: 100%; }\n}\n.bg-div{\n  width: 800px;\n  height: 600px;\n  display: block;\n  padding-left: 2%;\n  margin-left: 35%;\n}\n.bg-div img{\n  width: 100%;\n  height: 500px;\n}\n#zigzag{\n  width:50%;\n  height:10px;\n  margin-bottom: -5%;\n}\n#circle{\n  width:50%;\n  height:30px;\n  display: block;\n  float: right;\n  margin-bottom: 3%;\n}\n#rightpath{\n  -webkit-animation: dash 2s linear forwards;\n          animation: dash 2s linear forwards;\n}\n#leftpath{\n  -webkit-animation: dash 2s linear forwards;\n          animation: dash 2s linear forwards;\n}\n#big{\n  -webkit-animation: dash 2s linear forwards;\n          animation: dash 2s linear forwards;\n}\n/* svg animation */\n@-webkit-keyframes dash {\n  to{\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes dash {\n  to{\n    stroke-dashoffset: 0;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".project{\n  margin: 2% 10%;\n  text-align: center;\n}\nh1{\n  font-family: 'Borrio', cursive;\n  opacity: 0;\n  -webkit-animation: 2s show forwards;\n          animation: 2s show forwards;\n}\n@-webkit-keyframes show {\n  from { margin-left: 0; opacity: 0 }\n  to { margin-left: 5%; opacity: 1 }\n}\n@keyframes show {\n  from { margin-left: 0; opacity: 0 }\n  to { margin-left: 5%; opacity: 1 }\n}\nh2{\n  font-family: 'Borrio', cursive;\n}\nh3{\n  font-family: 'pangolin', cursive;\n}\n.firstblog{\n  margin-top: -5%;\n  opacity: 0;\n}\n.secondblog{\n  margin-top: -5%;\n  opacity: 0;\n}\n.thirdblog{\n  margin-top: -5%;\n  opacity: 0;\n}\n.forthblog{\n  margin-top: -5%;\n  opacity: 0;\n}\n.project img{\n  width: 100px;\n  height: auto;\n}\n.blog{\n  margin-bottom: 2%;\n  font-size: 20px;\n  font-family: 'pangolin', cursive;\n}\n#desktop{\n  width: 400px;\n  margin-top: 2%;\n}\n#mobile{\n  cursor: pointer;\n  margin-top: -30%;\n  margin-left: 28%;\n  transition: .5s;\n}\n#mobile:hover{\n  margin-left: 58%;\n  transition: .5s;\n}\n.left{\n  opacity: 0;\n  margin-left: -5%;\n  margin-top: 4%;\n}\n.right{\n  opacity: 0;\n  margin-right: -5%;\n  margin-top: 4%;\n}\n.left h2{\n  text-align: left;\n}\n.right h2{\n  text-align: right;\n}\n.button{\n  padding:1% 3%;\n  color: #000;\n  border-radius: 2px;\n  box-sizing: border-box;\n  font-size: 1em;\n}\na:hover{\n  text-decoration: none;\n  background-color: #2692D6;\n}\n.footer{\n  width: 100%;\n  height: 30px;\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".sidebar{\n  width: 100px;\n  height: 50vh;\n  position: fixed;\n  top: 0;\n  height: 100vh;\n}\n.social-link{\n  position: absolute;\n  width: 100vw;\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n  margin-left: -800%;\n}\n.social-link p{\n  display: inline-block;\n  font-family: 'Barrio';\n}\n.social-link img{\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n}\n.social-link a{\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  transition: background-color 0.1s ease-in-out;\n}\n.social-link a:hover{\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: #75DDDD;\n  transition: background-color 0.1s ease-in-out;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

module.exports = "<h1>Qui suis-je?</h1>\n<div class=\"biopro\">\n  <div class=\"row firstrow\">\n    <div class=\"col-md-6 para\">\n      <p [@myAwesomeAnimation]='state' id=\"para\">Bonjour !!! Je m'appelle\n        <audio id=\"player\" src=\"assets/saymyname.mp3\"></audio>\n          <a mdTooltip='Appuyer ici' mdTooltipPosition=\"above\" id=\"play\" (click)=\"play()\"><i class=\"fa fa-play\"></i></a>\n             serlep sherab wangchuk,\n             Je suis un web developpeur,\n             J'ai 25 ans, J'habite à Paris origine du Tibet, Passionné de développement depuis toujours.\n             J'adore créer des sites simples, fluides, responsive et ergonomiques.\n      </p>\n    </div>\n    <div class=\"col-md-6\">\n      <img [@myAnimation]='state' (click)='animateMe()' id='mypic' src=\"assets/mypic.jpg\" alt=\"mypic\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12 svg\">\n      <svg class=\"arrows\">\n    \t\t\t\t<path class=\"a1\" d=\"M0 0 L30 32 L60 0\"></path>\n    \t\t\t\t<path class=\"a2\" d=\"M0 20 L30 52 L60 20\"></path>\n    \t\t\t\t<path class=\"a3\" d=\"M0 40 L30 72 L60 40\"></path>\n    \t</svg>\n    </div>\n  </div>\n  <div class=\"row\">\n    <h2 id=\"cptheading\">Mes compétences</h2>\n    <div class=\"heading\">\n      <h3 id=\"cptpara\">Voici la liste des compétences que j'ai acquises.</h3>\n    </div>\n    <div class=\"competance col-md-12\">\n      <img mdTooltip='Angular' mdTooltipPosition=\"left\" src=\"assets/angular.png\" alt=\"angularjs\">\n      <img mdTooltip='Bash' mdTooltipPosition=\"above\" src=\"assets/bash.png\" alt=\"bash\">\n      <img mdTooltip='Bootstrap' mdTooltipPosition=\"above\" src=\"assets/bootstrap.jpg\" alt=\"bootstrap\">\n      <img mdTooltip='CakePHP' mdTooltipPosition=\"above\" src=\"assets/cakephp.png\" alt=\"cakephp\">\n      <img mdTooltip='Cordova' mdTooltipPosition=\"above\" src=\"assets/cordova.png\" alt=\"cordova\">\n      <img mdTooltip='CSS3' mdTooltipPosition=\"above\" src=\"assets/css3.png\" alt=\"css3\">\n      <img mdTooltip='Git' mdTooltipPosition=\"above\" src=\"assets/git.png\" alt=\"git\">\n      <img mdTooltip='HTML5' mdTooltipPosition=\"above\" src=\"assets/html5.png\" alt=\"html\">\n      <img mdTooltip='jQuery' mdTooltipPosition=\"above\" src=\"assets/jquery.png\" alt=\"jquery\">\n      <img mdTooltip='JavaScript' mdTooltipPosition=\"above\" src=\"assets/js.png\" alt=\"js\">\n      <img mdTooltip='Laravel' mdTooltipPosition=\"below\" src=\"assets/laravel.png\" alt=\"laravel\">\n      <img mdTooltip='Linux' mdTooltipPosition=\"below\" src=\"assets/linux.png\" alt=\"linux\">\n      <img mdTooltip='Materialize' mdTooltipPosition=\"below\"src=\"assets/materializecss.png\" alt=\"materialize\">\n      <img mdTooltip='MongoDB' mdTooltipPosition=\"below\" src=\"assets/mongodb.png\" alt=\"mongodo\">\n      <img mdTooltip='MySQL' mdTooltipPosition=\"below\" src=\"assets/MySQL.png\" alt=\"mySQL\">\n      <img mdTooltip='Nodejs' mdTooltipPosition=\"below\" src=\"assets/nodejs.png\" alt=\"nodejs\">\n      <img mdTooltip='php' mdTooltipPosition=\"below\" src=\"assets/php7.png\" alt=\"php\">\n      <img mdTooltip='Sailsjs' mdTooltipPosition=\"below\" src=\"assets/sailsjs.png\" alt=\"sailsjs\">\n      <img mdTooltip='Socketjs' mdTooltipPosition=\"below\" src=\"assets/socket.gif\" alt=\"socket\">\n      <img mdTooltip='Symfony' mdTooltipPosition=\"right\" src=\"assets/symfony.png\" alt=\"symfony\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12 cv\">\n        <h3>Plus de l'information télécharger mon CV</h3>\n          <a href=\"assets/moncv.pdf\" class=\"button\">.PDF</a>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12 footer\">\n      <p>Copyright @ 2017 - Tous droits reservés -</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 210:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <header>...loading</header>\n  <router-outlet></router-outlet>\n  <app-sidelink></app-sidelink>\n</div>\n"

/***/ }),

/***/ 211:
/***/ (function(module, exports) {

module.exports = "<h1>Faisons connaissance</h1>\n<div class=\"row\">\n  <div class=\"col-md-12 container\">\n    <p>Vous souhaitez créer un site? Vous avez une question? Un commentaire?\n      Contactez moi par e-mail. Je vous répondrai sous 24 heures.\n        <a href=\"mailto:swangchuk98@gmail.com\">envoyer un email</a>\n    </p>\n    <div class=\"blackout\"></div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n      <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n      <agm-info-window><strong>Je suis la!!!</strong></agm-info-window>\n    </agm-map>\n  </div>\n</div>\n<div class=\"row contact\">\n  <div class=\"col-md-6 container2\">\n    <div class=\"leftcontact\">\n      swangchuk98@gmail.com<br>\n      07 58 43 51 94<br>\n      92b boulevard du montparnasse\n      75014 PARIS\n    </div>\n    <div class=\"blackout2\"></div>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"rightcontact\">\n      <h4>Suivi moi</h4>\n      <div class=\"facebook\">\n        <a href=\"https://www.facebook.com/sherab.wangchuk.357\"><img src=\"assets/facebook_logo.png\" alt=\"facebook\"></a>\n      </div>\n      <div class=\"insta\">\n        <a href=\"https://www.instagram.com/sherab90/\"><img src=\"assets/Instagram.png\" alt=\"instagram\"></a>\n      </div>\n      <div class=\"github\">\n        <a href=\"https://github.com/serlep\"><img src=\"assets/logo_github.png\" alt=\"github\"></a>\n      </div>\n      <div class=\"link\">\n        <a href=\"https://www.linkedin.com/in/sherab/\"><img src=\"assets/Linkedin_logo.png\" alt=\"linkedin\"></a>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12 footer\">\n      <p>Copyright @ 2017 - Tous droits reservés -</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 212:
/***/ (function(module, exports) {

module.exports = "\n<nav id=\"navbar\">\n  <ul>\n    <li>\n      <a routerLink='/'>Home</a>\n    </li>\n    <li>\n      <a routerLink='/about'>About</a>\n    </li>\n    <li>\n      <a routerLink='/projects'>Projects</a>\n    </li>\n    <li>\n      <a routerLink='/contact'>Contact</a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper\">\n\n<svg id=\"circle\" viewBox=\"0 0 86 95\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 44.1 (41455) - http://www.bohemiancoding.com/sketch -->\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"Group\" transform=\"translate(3.000000, 3.000000)\" stroke=\"#979797\">\n            <ellipse id=\"Oval\" cx=\"40.8532658\" cy=\"43.8639875\" rx=\"39.9212886\" ry=\"43.4950731\"></ellipse>\n            <polyline\n              id=\"leftpath\"\n              stroke-dasharray=\"139\"\n              stroke-dashoffset=\"139\"\n              stroke-width=\"7\"\n              points=\"17.1312311 8.03388552 9.36163826 16.8734737 3.8452178\n              26.8039817 0.993799091 37.6932054 0.808333231 48.6052558 3.52659697\n               60.4237111 8.15468351 69.4630318 14.4795449 76.4774457 22.2976442\n               82.588308 33.444618 86.7589121 43.6129027 87.5093355 54.0817371\n               84.8129472 60.1231687 81.6391033 65.2182487 77.9316883\"></polyline>\n            <polyline\n              id=\"rightpath\"\n              stroke-dasharray=\"139\"\n              stroke-dashoffset=\"139\"\n              stroke-width=\"7\"\n              points=\"16 9.59610485 24.7815707 3.79720562 36.2281432 1 45.4224943\n               1.21495018 53.4222551 3.76011244 61.1775813 7.82229034 65.913143\n               13.1618049 72.0021298 19.7253941 76.4542616 29.4961161 78.4163953\n               39.2430604 78.6703408 48.6951615 77.1913695 57.004032 74.182067\n               64.4293242 70.7761529 70.8569051 64.4969447 78.6284002\"></polyline>\n        </g>\n    </g>\n</svg>\n\n  <div id=\"heading\">\n    <h1 id=\"backheading\">SERLEP SHERAB WANGCHUK</h1>\n    <h1 id=\"blackheading\">SERLEP SHERAB WANGCHUK</h1>\n  </div>\n    <div class=\"hometitle\">\n        <h2 id='backtext'>Je suis un <span>développeur web</span> Full-stack !</h2>\n        <h2 id='blacktext'>Je suis un <span>développeur web</span> Full-stack !</h2>\n    </div>\n    <svg id=\"zigzag\" viewBox=\"0 0 293 64\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n        <!-- Generator: Sketch 44.1 (41455) - http://www.bohemiancoding.com/sketch -->\n        <desc>Created with Sketch.</desc>\n        <defs></defs>\n        <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n            <g id=\"Group\" transform=\"translate(2.000000, 5.000000)\" stroke=\"#979797\">\n                <polyline\n                  id=\"small\"\n                  points=\"0.495057432 20.2012761 23.4204362 53.6816383 58.9470576\n                  0.0215981428 97.2218889 53.7700879 128.585734 0.319566592 166.642892\n                  53.3717511 196.627927 0.18093285 234.539551 53.4903112 268.800277\n                  0.421189515 288.695787 38.640191\">\n                </polyline>\n                <polyline\n                  id=\"big\"\n                  stroke-dasharray=\"530\"\n                  stroke-dashoffset=\"530\"\n                  stroke-width=\"15\"\n                  points=\"0.495057432 20.2012761 23.4204362 53.6816383 58.9470576\n                  0.0215981428 97.2218889 53.7700879 128.585734 0.319566592 166.642892\n                  53.3717511 196.627927 0.18093285 234.539551 53.4903112 268.800277\n                  0.421189515 288.695787 38.640191\">\n                </polyline>\n            </g>\n        </g>\n    </svg>\n\n</div>\n"

/***/ }),

/***/ 214:
/***/ (function(module, exports) {

module.exports = "<h1>Mes Projects</h1>\n<div class=\"row project\">\n  <div class=\"col-md-6 firstblog\">\n      <img id=\"desktop\" src=\"assets/firstblogdesktop.png\" alt=\"desktop\">\n  </div>\n  <div class=\"col-md-6 left\">\n      <h3>My Paint</h3>\n      <div class=\"blog\">\n        Application web de boite a outils pour dessins, type Paint.<br>\n        <a href=\"http://paint.serlepsherab.fr/\" type=\"button\" class=\"button\">SOURCE</a>\n        <a href=\"https://github.com/serlep/paint\" type=\"button\" class=\"button\">DEMO</a>\n      </div>\n  </div>\n</div>\n\n<div class=\"row project\">\n  <div class=\"col-md-6 secondblog\">\n    <img id=\"desktop\" src=\"assets/secondblogdesktop.png\" alt=\"desktop\">\n  </div>\n  <div class=\"col-md-6 right\">\n    <h3>MyMAP</h3>\n    <div class=\"blog\">\n      Réalisation d'un site de calcul d'itinéraires et localisation temps réal.<br>\n      <a href=\"http://googlemap.serlepsherab.fr/\" type=\"button\" class=\"button\">SOURCE</a>\n      <a href=\"https://github.com/serlep/googlemap\" type=\"button\" class=\"button\">DEMO</a>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12 footer\">\n    <p>Copyright @ 2017 - Tous droits reservés -</p>\n  </div>\n</div>\n"

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\n  <div class=\"social-link\">\n      <p>Follow me </p>\n        <a href=\"https://www.facebook.com/sherab.wangchuk.357\"><img src=\"assets/facebook.png\" alt=\"facebook\"></a>\n        <a href=\"https://github.com/serlep\"><img src=\"assets/github.png\" alt=\"github\"></a>\n        <a href=\"https://www.instagram.com/sherab90/\"><img src=\"assets/insta.png\" alt=\"insta\"></a>\n        <a href=\"https://www.linkedin.com/in/sherab/\"><img src=\"assets/linkedin.png\" alt=\"linkedin\"></a>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(117);


/***/ })

},[270]);
//# sourceMappingURL=main.bundle.js.map