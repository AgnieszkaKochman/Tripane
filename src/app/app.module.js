"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header.component/header.component");
var footer_component_1 = require("./footer.component/footer.component");
var home_component_1 = require("./home.component/home.component");
var simple_search_component_1 = require("./simple-search.component/simple-search.component");
var trips_component_1 = require("./trips.component/trips.component");
var about_tripane_component_1 = require("./about-tripane.component/about-tripane.component");
var login_page_component_1 = require("./login-page.component/login-page.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot([
                {
                    path: '',
                    redirectTo: '/home',
                    pathMatch: 'full'
                },
                {
                    path: 'home',
                    component: home_component_1.HomeComponent
                },
                {
                    path: 'login',
                    component: login_page_component_1.LoginPageComponent
                }
            ])
        ],
        declarations: [app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            simple_search_component_1.SimpleSearchComponent,
            trips_component_1.TripsComponent,
            about_tripane_component_1.AboutTripaneComponent,
            footer_component_1.FooterComponent,
            login_page_component_1.LoginPageComponent,
            home_component_1.HomeComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map