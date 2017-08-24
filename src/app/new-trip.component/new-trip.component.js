"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NewTripComponent = (function () {
    function NewTripComponent() {
        this.addTripHeading = "Dodaj nową wycieczkę";
        this.newTrip = {
            name: '',
            description: '',
            photoUrl: '',
            startDate: new Date,
            endDate: new Date,
            startPlace: '',
            destination: '',
            price: 0,
            currency: '',
            transport: '',
            accommodation: ''
        };
    }
    NewTripComponent.prototype.onSubmit = function (name, description, photoUrl, startDate, endDate, startPlace, destination, price, currency, transport, accommodation) {
        this.newTrip.name = name;
        this.newTrip.description = description;
        this.newTrip.photoUrl = photoUrl;
        this.newTrip.startDate = new Date(startDate);
        this.newTrip.endDate = new Date(endDate);
        this.newTrip.startPlace = startPlace;
        this.newTrip.destination = destination;
        this.newTrip.price = price;
        this.newTrip.currency = currency;
        this.newTrip.transport = transport;
        this.newTrip.accommodation = accommodation;
        console.log("Nazwa: " + this.newTrip.name);
        console.log("Opis: " + this.newTrip.description);
        console.log("Zdjęcie: " + this.newTrip.photoUrl);
        console.log("Data startu: " + this.newTrip.startDate);
        console.log("Data zakończenia: " + this.newTrip.endDate);
        console.log("Miejsce startu: " + this.newTrip.startPlace);
        console.log("Cel: " + this.newTrip.destination);
        console.log("Cena: " + this.newTrip.price);
        console.log("Waluta: " + this.newTrip.currency);
        console.log("Transport: " + this.newTrip.transport);
        console.log("Zakwaterowanie: " + this.newTrip.accommodation);
    };
    return NewTripComponent;
}());
NewTripComponent = __decorate([
    core_1.Component({
        selector: 'new-trip',
        templateUrl: './new-trip.component.html',
        styleUrls: ['./new-trip.component.css']
    })
], NewTripComponent);
exports.NewTripComponent = NewTripComponent;
//# sourceMappingURL=new-trip.component.js.map