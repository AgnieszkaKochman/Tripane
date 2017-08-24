"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var check_form_service_1 = require("../check-form.service/check-form.service");
var LoginPageComponent = (function () {
    function LoginPageComponent(checkFormService, formBuilder, router) {
        this.checkFormService = checkFormService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.loginHeading = "Zaloguj się";
        this.loginButton = "Zaloguj się";
        this.registerHeadingSmall = "Nie masz jeszcze konta?";
        this.registerHeading = "Zarejestruj się";
        this.registerButton = "Zarejestruj się";
        this.invalidLoginFormLogin = false;
        this.invalidLoginFormPassword = false;
        this.invalidRegisterFormName = false;
        this.invalidRegisterFormSurname = false;
        this.invalidRegisterFormEmail = false;
        this.invalidRegisterFormLogin = false;
        this.invalidRegisterFormPassword = false;
        this.invalidRegisterFormConfirmPassword = false;
        this.invalidRegisterFormPhone = false;
    }
    ;
    LoginPageComponent.prototype.ngOnInit = function () {
        this.userLoginInfo = this.formBuilder.group({
            lfLogin: '',
            lfPassword: ''
        });
        this.userRegisterInfo = this.formBuilder.group({
            rfName: '',
            rfSurname: '',
            rfEmail: '',
            rfLogin: '',
            rfPassword: '',
            rfConfirmPassword: '',
            rfPhone: ''
        });
    };
    LoginPageComponent.prototype.onLogin = function (userLoginInfo) {
        this.checkLfLogin();
        this.checkLfPassword();
        if (!this.invalidLoginFormLogin && !this.invalidLoginFormPassword) {
            this.router.navigate(['./home']);
        }
    };
    LoginPageComponent.prototype.onRegister = function (userRegisterInfo) {
        this.checkRfName();
        this.checkRfSurname();
        this.checkRfEmail();
        this.checkRfLogin();
        this.checkRfPassword();
        this.checkRfConfirmPassword();
        this.checkRfPhone();
        if (!this.invalidRegisterFormName && !this.invalidRegisterFormSurname &&
            !this.invalidRegisterFormEmail && !this.invalidRegisterFormLogin &&
            !this.invalidRegisterFormPassword && !this.invalidRegisterFormConfirmPassword && !this.invalidRegisterFormPhone) {
            this.router.navigate(['./home']);
        }
    };
    LoginPageComponent.prototype.checkLoginPassword = function (form, field, fieldControl) {
        if (!this.checkFormService.checkLoginPassword(form, field)) {
            this.showErrorMessage(field, fieldControl);
        }
        else {
            this.hideErrorMessage(field, fieldControl);
        }
    };
    LoginPageComponent.prototype.checkText = function (form, field, fieldControl) {
        if (!this.checkFormService.checkText(form.get(field).value)) {
            this.showErrorMessage(field, fieldControl);
        }
        else {
            this.hideErrorMessage(field, fieldControl);
        }
    };
    LoginPageComponent.prototype.checkEmail = function (form, field, fieldControl) {
        if (!this.checkFormService.checkEmail(form, field)) {
            this.showErrorMessage(field, fieldControl);
        }
        else {
            this.hideErrorMessage(field, fieldControl);
        }
    };
    LoginPageComponent.prototype.checkPassword = function (form, field1, field2, fieldControl) {
        if (!this.checkFormService.checkPassword(form, field1, field2)) {
            this.showErrorMessage(field2, fieldControl);
        }
        else {
            this.hideErrorMessage(field2, fieldControl);
        }
    };
    LoginPageComponent.prototype.checkPhone = function (form, field, fieldControl) {
        if (!this.checkFormService.checkPhone(form, field)) {
            this.showErrorMessage(field, fieldControl);
        }
        else {
            this.hideErrorMessage(field, fieldControl);
        }
    };
    LoginPageComponent.prototype.showErrorMessage = function (field, fieldControl) {
        fieldControl = true;
        document.getElementById(field + '-error').style.display = "block";
    };
    LoginPageComponent.prototype.hideErrorMessage = function (field, fieldControl) {
        fieldControl = false;
        document.getElementById(field + '-error').style.display = "none";
    };
    LoginPageComponent.prototype.checkLfLogin = function () {
        this.checkLoginPassword(this.userLoginInfo, 'lfLogin', this.invalidLoginFormLogin);
    };
    LoginPageComponent.prototype.checkLfPassword = function () {
        this.checkLoginPassword(this.userLoginInfo, 'lfPassword', this.invalidLoginFormPassword);
    };
    LoginPageComponent.prototype.checkRfName = function () {
        this.checkText(this.userRegisterInfo, 'rfName', this.invalidRegisterFormName);
    };
    LoginPageComponent.prototype.checkRfSurname = function () {
        this.checkText(this.userRegisterInfo, 'rfSurname', this.invalidRegisterFormSurname);
    };
    LoginPageComponent.prototype.checkRfEmail = function () {
        this.checkEmail(this.userRegisterInfo, 'rfEmail', this.invalidRegisterFormEmail);
    };
    LoginPageComponent.prototype.checkRfLogin = function () {
        this.checkLoginPassword(this.userRegisterInfo, 'rfLogin', this.invalidRegisterFormLogin);
    };
    LoginPageComponent.prototype.checkRfPassword = function () {
        this.checkLoginPassword(this.userRegisterInfo, 'rfPassword', this.invalidRegisterFormPassword);
    };
    LoginPageComponent.prototype.checkRfConfirmPassword = function () {
        this.checkPassword(this.userRegisterInfo, 'rfPassword', 'rfConfirmPassword', this.invalidRegisterFormConfirmPassword);
    };
    LoginPageComponent.prototype.checkRfPhone = function () {
        this.checkPhone(this.userRegisterInfo, 'rfPhone', this.invalidRegisterFormPhone);
    };
    return LoginPageComponent;
}());
LoginPageComponent = __decorate([
    core_1.Component({
        selector: 'login-page',
        templateUrl: './login-page.component.html',
        styleUrls: ['./login-page.component.css'],
        providers: [check_form_service_1.CheckFormService]
    }),
    __metadata("design:paramtypes", [check_form_service_1.CheckFormService, forms_1.FormBuilder, router_1.Router])
], LoginPageComponent);
exports.LoginPageComponent = LoginPageComponent;
//# sourceMappingURL=login-page.component.js.map