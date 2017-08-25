"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CheckFormService = (function () {
    function CheckFormService() {
    }
    CheckFormService.prototype.checkDate = function (date) {
        var day = Number(date.slice(8, 10));
        var month = Number(date.slice(5, 7));
        var year = Number(date.slice(0, 4));
        var today = new Date();
        var thisYear = Number(today.getFullYear);
        // empty date
        if (!date)
            return false;
        // date is too short
        if (date.length !== 10)
            return false;
        // invalid separators
        if (date.slice(4, 5) !== '-' && date.slice(7, 8) !== '-')
            return false;
        // year, month or day is not a number 
        if (isNaN(year) || isNaN(month) || isNaN(day))
            return false;
        // invalid month number 
        if (month < 1 || month > 12)
            return false;
        // invalid day number 
        if (day < 1 || day > 31)
            return false;
        // invalid day number
        if ((month == 2 && day > 29) ||
            (month > 7 && month % 2 == 1 && day > 30) ||
            (month < 7 && month % 2 == 0 && day > 30))
            return false;
        // year smaller than this year 
        if (year < thisYear)
            return false;
        return true;
    };
    CheckFormService.prototype.checkText = function (text) {
        // empty text
        if (!text)
            return false;
        // text is too short
        if (text.length < 3)
            return false;
        // text contains invalid characters
        if (!/^[a-zA-Z ]+$/.test(text))
            return false;
        return true;
    };
    CheckFormService.prototype.checkString = function (form, field) {
        if (form.get(field).value.length < 6)
            return false;
        return true;
    };
    CheckFormService.prototype.checkEmail = function (form, field) {
        // empty email
        if (!field)
            return false;
        // email is too short min 6
        if (form.get(field).value.length < 6)
            return false;
        // invalid format
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (!re.test(form.get(field).value))
            return false;
        return true;
    };
    CheckFormService.prototype.checkPassword = function (form, field1, field2) {
        // empty password
        if (!field1 || !field2)
            return false;
        // password is too short min 6
        if (form.get(field1).value.length < 6 || form.get(field2).value.length < 6)
            return false;
        // compare password
        if (form.get(field1).value !== form.get(field2).value)
            return false;
        return true;
    };
    CheckFormService.prototype.checkPhone = function (form, field) {
        // empty phone
        if (!field)
            return false;
        var phoneNumber = form.get(field).value.replace(/[^\d]/g, '');
        var otherCharacters = form.get(field).value.replace(/[0-9]/g, '');
        if (phoneNumber.length !== 9 || (otherCharacters != "--" && otherCharacters != "" && otherCharacters != "  "))
            return false;
        return true;
    };
    CheckFormService.prototype.checkPhoto = function (field) {
        /*

        // empty file
        if ( !field || field.length < 6 ) return false;

        let fileExtension = field.slice(field.length - 4, field.length);

        if (fileExtension !== ".png" && fileExtension !== ".jpg" && fileExtension !== '.bmp') {
            fileExtension = field.slice(field.length - 5, field.length);
            if (fileExtension !== ".jpeg") return false;
        }*/
        return true;
    };
    CheckFormService.prototype.checkPrice = function (field) {
        // empty price or price is not a number
        if (!field)
            return false;
        // price < 0
        if (field < 0)
            return false;
        return true;
    };
    CheckFormService.prototype.checkSelect = function (field) {
        // empty select
        if (!field || field.length < 1)
            return false;
        return true;
    };
    return CheckFormService;
}());
CheckFormService = __decorate([
    core_1.Injectable()
], CheckFormService);
exports.CheckFormService = CheckFormService;
//# sourceMappingURL=check-form.service.js.map