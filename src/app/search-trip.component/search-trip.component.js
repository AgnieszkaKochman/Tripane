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
var SearchTripComponent = (function () {
    function SearchTripComponent(checkFormService, formBuilder, router) {
        this.checkFormService = checkFormService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.lat = 50.2699504;
        this.lng = 19.081105;
        this.sortMethod = "Cena rosnąco";
        this.invalidStartDate = false;
        this.invalidEndDate = false;
        this.invalidStartPlace = false;
        this.invalidDestination = false;
        this.invalidMinPrice = false;
        this.invalidMaxPrice = false;
        this.invalidCurrency = false;
        this.invalidTransport = false;
        this.invalidAccommodation = false;
    }
    ;
    SearchTripComponent.prototype.ngOnInit = function () {
        this.searchTripInfo = this.formBuilder.group({
            startDate: '',
            endDate: '',
            startPlace: '',
            destination: '',
            minPrice: 0,
            maxPrice: 0,
            currency: '',
            transport: '',
            accommodation: '',
            sort: ''
        });
    };
    SearchTripComponent.prototype.onSearch = function () {
        this.checkStartDate();
        this.checkEndDate();
        this.checkStartPlace();
        this.checkDestination();
        this.checkMinPrice();
        this.checkMaxPrice();
        this.checkCurrency();
        this.checkTransport();
        this.checkAccommodation();
        if (!this.invalidStartDate && !this.invalidEndDate && !this.invalidStartPlace
            && !this.invalidDestination && !this.invalidMinPrice && !this.invalidMaxPrice
            && !this.invalidCurrency && !this.invalidTransport && !this.invalidAccommodation) {
            console.log("OK");
        }
    };
    SearchTripComponent.prototype.showErrorMessage = function (field) {
        document.getElementById(field + '-error').style.display = "block";
    };
    SearchTripComponent.prototype.hideErrorMessage = function (field) {
        document.getElementById(field + '-error').style.display = "none";
    };
    SearchTripComponent.prototype.checkStartDate = function () {
        if (!this.checkFormService.checkDate(this.searchTripInfo.get('startDate').value)) {
            this.showErrorMessage('startDate');
            this.invalidStartDate = true;
        }
        else {
            this.hideErrorMessage('startDate');
            this.invalidStartDate = false;
        }
    };
    SearchTripComponent.prototype.checkEndDate = function () {
        if (!this.checkFormService.checkDate(this.searchTripInfo.get('endDate').value)) {
            this.showErrorMessage('endDate');
            this.invalidEndDate = true;
        }
        else {
            this.hideErrorMessage('endDate');
            this.invalidEndDate = false;
        }
    };
    SearchTripComponent.prototype.checkStartPlace = function () {
        if (!this.checkFormService.checkText(this.searchTripInfo.get('startPlace').value)) {
            this.showErrorMessage('startPlace');
            this.invalidStartPlace = true;
        }
        else {
            this.hideErrorMessage('startPlace');
            this.invalidStartPlace = false;
        }
    };
    SearchTripComponent.prototype.checkDestination = function () {
        if (!this.checkFormService.checkText(this.searchTripInfo.get('destination').value)) {
            this.showErrorMessage('destination');
            this.invalidDestination = true;
        }
        else {
            this.hideErrorMessage('destination');
            this.invalidDestination = false;
        }
    };
    SearchTripComponent.prototype.checkMinPrice = function () {
        if (!this.checkFormService.checkPrice(this.searchTripInfo.get('minPrice').value)) {
            this.showErrorMessage('minPrice');
            this.invalidMinPrice = true;
        }
        else {
            this.hideErrorMessage('minPrice');
            this.invalidMinPrice = false;
        }
    };
    SearchTripComponent.prototype.checkMaxPrice = function () {
        if (!this.checkFormService.checkPrice(this.searchTripInfo.get('maxPrice').value)) {
            this.showErrorMessage('maxPrice');
            this.invalidMaxPrice = true;
        }
        else {
            this.hideErrorMessage('maxPrice');
            this.invalidMaxPrice = false;
        }
    };
    SearchTripComponent.prototype.checkCurrency = function () {
        if (!this.checkFormService.checkSelect(this.searchTripInfo.get('currency').value)) {
            this.showErrorMessage('currency');
            this.invalidCurrency = true;
        }
        else {
            this.hideErrorMessage('currency');
            this.invalidCurrency = false;
        }
    };
    SearchTripComponent.prototype.checkTransport = function () {
        if (!this.checkFormService.checkSelect(this.searchTripInfo.get('transport').value)) {
            this.showErrorMessage('transport');
            this.invalidTransport = true;
        }
        else {
            this.hideErrorMessage('transport');
            this.invalidTransport = false;
        }
    };
    SearchTripComponent.prototype.checkAccommodation = function () {
        if (!this.checkFormService.checkSelect(this.searchTripInfo.get('accommodation').value)) {
            this.showErrorMessage('accommodation');
            this.invalidAccommodation = true;
        }
        else {
            this.hideErrorMessage('accommodation');
            this.invalidAccommodation = false;
        }
    };
    return SearchTripComponent;
}());
SearchTripComponent = __decorate([
    core_1.Component({
        selector: 'search-trip',
        templateUrl: './search-trip.component.html',
        styleUrls: ['./search-trip.component.css'],
        providers: [check_form_service_1.CheckFormService]
    }),
    __metadata("design:paramtypes", [check_form_service_1.CheckFormService, forms_1.FormBuilder, router_1.Router])
], SearchTripComponent);
exports.SearchTripComponent = SearchTripComponent;
//# sourceMappingURL=search-trip.component.js.map