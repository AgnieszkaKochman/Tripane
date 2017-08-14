"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Trip = (function () {
    function Trip() {
    }
    return Trip;
}());
exports.Trip = Trip;
var SingleTripComponent = (function () {
    function SingleTripComponent() {
        this.lat = 50.2699504;
        this.lng = 19.081105;
        this.trip = {
            tripId: 1,
            title: "Wycieczka do Paryża",
            startDate: new Date(2017, 10, 15),
            endDate: new Date(2017, 10, 28),
            startPlace: "Wrocław",
            destination: "Paryż",
            priceAmount: 1200,
            priceCurrency: "zł",
            photoUrl: "./assets/trips/paris.jpeg",
            description: "Wycieczka do Paryża w październiku"
        };
    }
    return SingleTripComponent;
}());
SingleTripComponent = __decorate([
    core_1.Component({
        selector: 'single-trip',
        templateUrl: './single-trip.component.html',
        styleUrls: ['./single-trip.component.css']
    })
], SingleTripComponent);
exports.SingleTripComponent = SingleTripComponent;
//# sourceMappingURL=single-trip.component.js.map