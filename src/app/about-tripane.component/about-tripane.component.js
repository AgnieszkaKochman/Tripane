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
        this.title = "Dołącz do Tripane!";
        this.description = "Znasz to uczucie, kiedy chcesz gdzie\u015B jecha\u0107, ale nie masz z kim? Pewnie zastanawiasz si\u0119, czy jest wi\u0119cej os\u00F3b, kt\u00F3re maj\u0105 ten problem...\n                A co gdyby po\u0142\u0105czy\u0107 wszytkie osoby, kt\u00F3re szukaj\u0105 kompan\u00F3w na wsp\u00F3lny wyjazd? Teraz to proste! \n                Poznawaj nowe osoby, odkrywaj wspania\u0142e miejsca i dziel koszty podr\u00F3\u017Cy!";
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