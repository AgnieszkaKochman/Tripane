"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ContactComponent = (function () {
    function ContactComponent() {
        this.lat = 50.2699504;
        this.lng = 19.081105;
        this.address = "ul. Wandy 16, 41-300 Katowice";
        this.phone = "604 422 204";
        this.email = "kontakt@tripane.pl";
    }
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        selector: 'contact',
        templateUrl: './contact.component.html',
        styleUrls: ['./contact.component.css']
    })
], ContactComponent);
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map