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
var ContactFormComponent = (function () {
    function ContactFormComponent(checkFormService, formBuilder, router) {
        this.checkFormService = checkFormService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.invalidName = false;
        this.invalidEmail = false;
        this.invalidSubject = false;
        this.invalidMessage = false;
    }
    ;
    ContactFormComponent.prototype.ngOnInit = function () {
        this.contactForm = this.formBuilder.group({
            cfName: '',
            cfEmail: '',
            cfSubject: '',
            cfMessage: ''
        });
    };
    ContactFormComponent.prototype.onSubmit = function () {
    };
    return ContactFormComponent;
}());
ContactFormComponent = __decorate([
    core_1.Component({
        selector: 'contact-form',
        templateUrl: './contact-form.component.html',
        styleUrls: ['./contact-form.component.css'],
        providers: [check_form_service_1.CheckFormService]
    }),
    __metadata("design:paramtypes", [check_form_service_1.CheckFormService, forms_1.FormBuilder, router_1.Router])
], ContactFormComponent);
exports.ContactFormComponent = ContactFormComponent;
//# sourceMappingURL=contact-form.component.js.map