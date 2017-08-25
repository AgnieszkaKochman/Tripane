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
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var UserPageComponent = (function () {
    function UserPageComponent(checkFormService, formBuilder, router) {
        this.checkFormService = checkFormService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.user = {
            userId: 1,
            email: "user@email.pl",
            login: "user1",
            password: "user123",
            role: "user",
            name: "Anna",
            surname: "Kowalska",
            phone: "123-456-789",
            birthDate: new Date(1987, 10, 28),
            photoUrl: "assets/images/user.jpg",
            description: "Aenean faucibus risus a hendrerit bibendum. Morbi lectus magna, faucibus et maximus ac, ultricies ut mauris. Fusce eu fringilla diam, eu porta lectus. In condimentum est nec nisi pretium molestie. Aenean laoreet nunc at pellentesque finibus."
        };
        this.invalidName = false;
        this.invalidEmail = false;
        this.invalidMessage = false;
    }
    ;
    UserPageComponent.prototype.ngOnInit = function () {
        this.userMessage = this.formBuilder.group({
            name: '',
            email: '',
            message: ''
        });
    };
    UserPageComponent.prototype.onSubmit = function () {
        this.checkName();
        this.checkEmail();
        this.checkMessage();
        if (!this.invalidName && !this.invalidEmail && !this.invalidMessage) {
            console.log("Message OK!");
        }
    };
    UserPageComponent.prototype.showErrorMessage = function (field) {
        document.getElementById(field + '-error').style.display = "block";
    };
    UserPageComponent.prototype.hideErrorMessage = function (field) {
        document.getElementById(field + '-error').style.display = "none";
    };
    UserPageComponent.prototype.checkName = function () {
        if (!this.checkFormService.checkText(this.userMessage.get('name').value)) {
            this.showErrorMessage('name');
            this.invalidName = true;
        }
        else {
            this.hideErrorMessage('name');
            this.invalidName = false;
        }
    };
    UserPageComponent.prototype.checkEmail = function () {
        if (!this.checkFormService.checkEmail(this.userMessage, 'email')) {
            this.showErrorMessage('email');
            this.invalidEmail = true;
        }
        else {
            this.hideErrorMessage('email');
            this.invalidEmail = false;
        }
    };
    UserPageComponent.prototype.checkMessage = function () {
        if (!this.checkFormService.checkString(this.userMessage, 'message')) {
            this.showErrorMessage('message');
            this.invalidMessage = true;
        }
        else {
            this.hideErrorMessage('message');
            this.invalidMessage = false;
        }
    };
    return UserPageComponent;
}());
UserPageComponent = __decorate([
    core_1.Component({
        selector: 'user-page',
        templateUrl: './user-page.component.html',
        styleUrls: ['./user-page.component.css'],
        providers: [check_form_service_1.CheckFormService]
    }),
    __metadata("design:paramtypes", [check_form_service_1.CheckFormService, forms_1.FormBuilder, router_1.Router])
], UserPageComponent);
exports.UserPageComponent = UserPageComponent;
//# sourceMappingURL=user-page.component.js.map