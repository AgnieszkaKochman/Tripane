"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AboutTripaneComponent = (function () {
    function AboutTripaneComponent() {
        this.title = "Co to jest Tripane?";
        this.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        this.registerTxt = "Zarejestruj się już teraz!";
    }
    return AboutTripaneComponent;
}());
AboutTripaneComponent = __decorate([
    core_1.Component({
        selector: 'about-tripane',
        templateUrl: './about-tripane.component.html',
        styleUrls: ['./about-tripane.component.css']
    })
], AboutTripaneComponent);
exports.AboutTripaneComponent = AboutTripaneComponent;
//# sourceMappingURL=about-tripane.component.js.map