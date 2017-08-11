"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LoginPageComponent = (function () {
    function LoginPageComponent() {
        this.loginHeading = "Zaloguj się";
        this.loginButton = "Zaloguj się";
        this.registerHeadingSmall = "Nie masz jeszcze konta?";
        this.registerHeading = "Zarejestruj się";
        this.registerButton = "Zarejestruj się";
    }
    return LoginPageComponent;
}());
LoginPageComponent = __decorate([
    core_1.Component({
        selector: 'login-page',
        templateUrl: './login-page.component.html',
        styleUrls: ['./login-page.component.css']
    })
], LoginPageComponent);
exports.LoginPageComponent = LoginPageComponent;
//# sourceMappingURL=login-page.component.js.map