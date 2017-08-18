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
var TRIPS = [
    {
        tripId: 1,
        title: "Wycieczka do Paryża",
        startDate: new Date(2017, 10, 15),
        endDate: new Date(2017, 10, 28),
        startPlace: "Wrocław",
        destination: "Paryż",
        priceAmount: 1200,
        priceCurrency: "zł",
        photoUrl: "./assets/trips/paris.jpeg",
        description: "Wycieczka do Paryża w październiku. Integer id purus eu purus congue sodales. Morbi eu urna mollis, lobortis tortor eu, gravida enim. Fusce augue purus, lobortis sit amet urna iaculis, dignissim sodales lectus. Nam elementum enim nec lobortis placerat. In hac habitasse platea dictumst."
    },
    {
        tripId: 2,
        title: "Wycieczka do Egiptu",
        startDate: new Date(2017, 11, 10),
        endDate: new Date(2017, 11, 30),
        startPlace: "Kraków",
        destination: "Kair",
        priceAmount: 3200,
        priceCurrency: "zł",
        photoUrl: "./assets/trips/kair.jpeg",
        description: "Wycieczka do Egiptu w listopadzie. Integer id purus eu purus congue sodales. Morbi eu urna mollis, lobortis tortor eu, gravida enim. Fusce augue purus, lobortis sit amet urna iaculis, dignissim sodales lectus. Nam elementum enim nec lobortis placerat. In hac habitasse platea dictumst."
    },
    {
        tripId: 3,
        title: "Wycieczka do USA",
        startDate: new Date(2018, 3, 20),
        endDate: new Date(2018, 4, 30),
        startPlace: "Szczecin",
        destination: "Chicago ",
        priceAmount: 8200,
        priceCurrency: "zł",
        photoUrl: "./assets/trips/chicago.jpeg",
        description: "Wycieczka do USA w marcu. Integer id purus eu purus congue sodales. Morbi eu urna mollis, lobortis tortor eu, gravida enim. Fusce augue purus, lobortis sit amet urna iaculis, dignissim sodales lectus. Nam elementum enim nec lobortis placerat. In hac habitasse platea dictumst."
    }
];
var TripsComponent = (function () {
    function TripsComponent() {
        this.tripsHeading = "Najnowsze wycieczki";
        this.trips = TRIPS;
    }
    return TripsComponent;
}());
TripsComponent = __decorate([
    core_1.Component({
        selector: 'trips',
        templateUrl: './trips.component.html',
        styleUrls: ['./trips.component.css']
    })
], TripsComponent);
exports.TripsComponent = TripsComponent;
//# sourceMappingURL=trips.component.js.map