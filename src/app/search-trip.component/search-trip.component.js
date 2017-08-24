"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SearchTripComponent = (function () {
    function SearchTripComponent() {
        this.lat = 50.2699504;
        this.lng = 19.081105;
        this.searchTripInfo = {
            startDate: new Date,
            endDate: new Date,
            startPlace: '',
            destination: '',
            minPrice: 0,
            maxPrice: 0,
            currency: '',
            transport: '',
            accommodation: ''
        };
        this.sortMethod = "Cena rosnąco";
    }
    SearchTripComponent.prototype.onSearch = function (startDate, endDate, startPlace, destination, minPrice, maxPrice, currency, transport, accommodation, sort) {
        this.searchTripInfo.startDate = new Date(startDate);
        this.searchTripInfo.endDate = new Date(endDate);
        this.searchTripInfo.startPlace = startPlace;
        this.searchTripInfo.destination = destination;
        this.searchTripInfo.minPrice = minPrice;
        this.searchTripInfo.maxPrice = maxPrice;
        this.searchTripInfo.currency = currency;
        this.searchTripInfo.transport = transport;
        this.searchTripInfo.accommodation = accommodation;
        this.sortMethod = sort;
        console.log("Data startu: " + this.searchTripInfo.startDate);
        console.log("Data zakończenia: " + this.searchTripInfo.endDate);
        console.log("Miejsce startu: " + this.searchTripInfo.startPlace);
        console.log("Cel: " + this.searchTripInfo.destination);
        console.log("Cena minimalna: " + this.searchTripInfo.minPrice);
        console.log("Cena maksymalna: " + this.searchTripInfo.maxPrice);
        console.log("Waluta: " + this.searchTripInfo.currency);
        console.log("Transport: " + this.searchTripInfo.transport);
        console.log("Zakwaterowanie: " + this.searchTripInfo.accommodation);
        console.log("Sortowanie: " + this.sortMethod);
    };
    return SearchTripComponent;
}());
SearchTripComponent = __decorate([
    core_1.Component({
        selector: 'search-trip',
        templateUrl: './search-trip.component.html',
        styleUrls: ['./search-trip.component.css']
    })
], SearchTripComponent);
exports.SearchTripComponent = SearchTripComponent;
//# sourceMappingURL=search-trip.component.js.map