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
var http_1 = require("@angular/http");
var ContactFormComponent = (function () {
    function ContactFormComponent(http) {
        this.http = http;
        this.newMessage = {
            name: '',
            email: '',
            subject: '',
            message: ''
        };
    }
    ;
    ContactFormComponent.prototype.onSubmit = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        this.http.post('./app/send-email.php', this.newMessage, { headers: headers }).subscribe(function (data) {
            if (data.json().success) {
                console.log('mail sent');
            }
        });
    };
    return ContactFormComponent;
}());
ContactFormComponent = __decorate([
    core_1.Component({
        selector: 'contact-form',
        templateUrl: './contact-form.component.html',
        styleUrls: ['./contact-form.component.css']
    }),
    __metadata("design:paramtypes", [http_1.Http])
], ContactFormComponent);
exports.ContactFormComponent = ContactFormComponent;
//# sourceMappingURL=contact-form.component.js.map