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
var SimpleSearchComponent = (function () {
    function SimpleSearchComponent(checkFormService, formBuilder, router) {
        this.checkFormService = checkFormService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.invalidDestination = false;
        this.invalidStartDate = false;
        this.invalidEndDate = false;
    }
    ;
    SimpleSearchComponent.prototype.ngOnInit = function () {
        this.searchInfo = this.formBuilder.group({
            destination: '',
            startDate: '',
            endDate: '',
        });
    };
    SimpleSearchComponent.prototype.onSubmit = function (searchInfo) {
        this.checkDestination();
        this.checkStartDate();
        this.checkEndDate();
        if (!this.invalidDestination && !this.invalidStartDate && !this.invalidEndDate) {
            this.router.navigate(['./wycieczki']);
        }
    };
    SimpleSearchComponent.prototype.checkDestination = function () {
        if (!this.checkFormService.checkText(this.searchInfo.get('destination').value)) {
            this.invalidDestination = true;
            document.getElementById('destination-error').style.display = "block";
        }
        else {
            this.invalidDestination = false;
            document.getElementById('destination-error').style.display = "none";
        }
    };
    SimpleSearchComponent.prototype.checkStartDate = function () {
        if (!this.checkFormService.checkDate(this.searchInfo.get('startDate').value)) {
            this.invalidStartDate = true;
            document.getElementById('start-date-error').style.display = "block";
        }
        else {
            this.invalidStartDate = false;
            document.getElementById('start-date-error').style.display = "none";
        }
    };
    SimpleSearchComponent.prototype.checkEndDate = function () {
        if (!this.checkFormService.checkDate(this.searchInfo.get('endDate').value)) {
            this.invalidEndDate = true;
            document.getElementById('end-date-error').style.display = "block";
        }
        else {
            this.invalidEndDate = false;
            document.getElementById('end-date-error').style.display = "none";
        }
    };
    return SimpleSearchComponent;
}());
SimpleSearchComponent = __decorate([
    core_1.Component({
        selector: 'simple-search',
        templateUrl: './simple-search.component.html',
        styleUrls: ['./simple-search.component.css'],
        providers: [check_form_service_1.CheckFormService]
    }),
    __metadata("design:paramtypes", [check_form_service_1.CheckFormService, forms_1.FormBuilder, router_1.Router])
], SimpleSearchComponent);
exports.SimpleSearchComponent = SimpleSearchComponent;
//# sourceMappingURL=simple-search.component.js.map