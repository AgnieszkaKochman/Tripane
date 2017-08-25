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
var NewTripComponent = (function () {
    function NewTripComponent(checkFormService, formBuilder, router) {
        this.checkFormService = checkFormService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.addTripHeading = "Dodaj nową wycieczkę";
        this.invalidName = false;
        this.invalidDescription = false;
        this.invalidPhoto = false;
    }
    ;
    NewTripComponent.prototype.ngOnInit = function () {
        this.newTripInfo = this.formBuilder.group({
            tripName: '',
            tripDescription: '',
            tripPhoto: '',
            tripStartDate: '',
            tripEndDate: '',
            tripStartPlace: '',
            tripDestination: '',
            tripPrice: 0,
            tripCurrency: '',
            tripTransport: '',
            tripAccommodation: ''
        });
    };
    NewTripComponent.prototype.onSubmit = function () {
        this.checkName();
        this.checkDescription();
        this.checkPhoto();
        this.checkStartDate();
        this.checkEndDate();
        this.checkStartPlace();
        this.checkDestination();
        this.checkPrice();
        this.checkCurrency();
        this.checkTransport();
        this.checkAccommodation();
        if (!this.invalidName && !this.invalidDescription && !this.invalidPhoto
            && !this.invalidStartDate && !this.invalidEndDate && !this.invalidStartPlace
            && !this.invalidDestination && !this.invalidPrice && !this.invalidCurrency
            && !this.invalidTransport && !this.invalidAccommodation) {
            console.log("OK");
        }
    };
    NewTripComponent.prototype.showErrorMessage = function (field) {
        document.getElementById(field + '-error').style.display = "block";
    };
    NewTripComponent.prototype.hideErrorMessage = function (field) {
        document.getElementById(field + '-error').style.display = "none";
    };
    NewTripComponent.prototype.checkName = function () {
        if (!this.checkFormService.checkString(this.newTripInfo, 'tripName')) {
            this.showErrorMessage('tripName');
            this.invalidName = true;
        }
        else {
            this.hideErrorMessage('tripName');
            this.invalidName = false;
        }
    };
    NewTripComponent.prototype.checkDescription = function () {
        if (!this.checkFormService.checkString(this.newTripInfo, 'tripDescription')) {
            this.showErrorMessage('tripDescription');
            this.invalidDescription = true;
        }
        else {
            this.hideErrorMessage('tripDescription');
            this.invalidDescription = false;
        }
    };
    NewTripComponent.prototype.checkPhoto = function () {
        if (!this.checkFormService.checkPhoto(this.newTripInfo.get('tripPhoto').value)) {
            this.showErrorMessage('tripPhoto');
            this.invalidPhoto = true;
        }
        else {
            this.hideErrorMessage('tripPhoto');
            this.invalidPhoto = false;
        }
    };
    NewTripComponent.prototype.checkStartDate = function () {
        if (!this.checkFormService.checkDate(this.newTripInfo.get('tripStartDate').value)) {
            this.showErrorMessage('tripStartDate');
            this.invalidStartDate = true;
        }
        else {
            this.hideErrorMessage('tripStartDate');
            this.invalidStartDate = false;
        }
    };
    NewTripComponent.prototype.checkEndDate = function () {
        if (!this.checkFormService.checkDate(this.newTripInfo.get('tripEndDate').value)) {
            this.showErrorMessage('tripEndDate');
            this.invalidEndDate = true;
        }
        else {
            this.hideErrorMessage('tripEndDate');
            this.invalidEndDate = false;
        }
    };
    NewTripComponent.prototype.checkStartPlace = function () {
        if (!this.checkFormService.checkText(this.newTripInfo.get('tripStartPlace').value)) {
            this.showErrorMessage('tripStartPlace');
            this.invalidStartPlace = true;
        }
        else {
            this.hideErrorMessage('tripStartPlace');
            this.invalidStartPlace = false;
        }
    };
    NewTripComponent.prototype.checkDestination = function () {
        if (!this.checkFormService.checkText(this.newTripInfo.get('tripDestination').value)) {
            this.showErrorMessage('tripDestination');
            this.invalidDestination = true;
        }
        else {
            this.hideErrorMessage('tripDestination');
            this.invalidDestination = false;
        }
    };
    NewTripComponent.prototype.checkPrice = function () {
        if (!this.checkFormService.checkPrice(this.newTripInfo.get('tripPrice').value)) {
            this.showErrorMessage('tripPrice');
            this.invalidPrice = true;
        }
        else {
            this.hideErrorMessage('tripPrice');
            this.invalidPrice = false;
        }
    };
    NewTripComponent.prototype.checkCurrency = function () {
        if (!this.checkFormService.checkSelect(this.newTripInfo.get('tripCurrency').value)) {
            this.showErrorMessage('tripCurrency');
            this.invalidCurrency = true;
        }
        else {
            this.hideErrorMessage('tripCurrency');
            this.invalidCurrency = false;
        }
    };
    NewTripComponent.prototype.checkTransport = function () {
        if (!this.checkFormService.checkSelect(this.newTripInfo.get('tripTransport').value)) {
            this.showErrorMessage('tripTransport');
            this.invalidTransport = true;
        }
        else {
            this.hideErrorMessage('tripTransport');
            this.invalidTransport = false;
        }
    };
    NewTripComponent.prototype.checkAccommodation = function () {
        if (!this.checkFormService.checkSelect(this.newTripInfo.get('tripAccommodation').value)) {
            this.showErrorMessage('tripAccommodation');
            this.invalidAccommodation = true;
        }
        else {
            this.hideErrorMessage('tripAccommodation');
            this.invalidAccommodation = false;
        }
    };
    return NewTripComponent;
}());
NewTripComponent = __decorate([
    core_1.Component({
        selector: 'new-trip',
        templateUrl: './new-trip.component.html',
        styleUrls: ['./new-trip.component.css'],
        providers: [check_form_service_1.CheckFormService]
    }),
    __metadata("design:paramtypes", [check_form_service_1.CheckFormService, forms_1.FormBuilder, router_1.Router])
], NewTripComponent);
exports.NewTripComponent = NewTripComponent;
//# sourceMappingURL=new-trip.component.js.map