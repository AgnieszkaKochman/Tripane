import { Component } from '@angular/core';

@Component({
  selector: 'search-trip',
  templateUrl: './search-trip.component.html',
  styleUrls: [ './search-trip.component.css' ]
})
export class SearchTripComponent { 
  lat: number = 50.2699504;
  lng: number = 19.081105;

  searchTripInfo = {
    startDate: new Date, 
    endDate: new Date, 
    startPlace: '', 
    destination: '', 
    minPrice: 0, 
    maxPrice: 0, 
    currency: '', 
    transport: '', 
    accommodation: ''
  }

  sortMethod: string = "Cena rosnąco";


  onSearch (startDate: Date, endDate: Date, startPlace: string, destination: string, minPrice: number, maxPrice: number, currency: string, transport: string, accommodation: string, sort: string) {
    this.searchTripInfo.startDate     = new Date(startDate);
    this.searchTripInfo.endDate       = new Date(endDate);
    this.searchTripInfo.startPlace    = startPlace;
    this.searchTripInfo.destination   = destination;
    this.searchTripInfo.minPrice      = minPrice;
    this.searchTripInfo.maxPrice      = maxPrice;
    this.searchTripInfo.currency      = currency;
    this.searchTripInfo.transport     = transport;
    this.searchTripInfo.accommodation = accommodation;
    this.sortMethod                   = sort;

    console.log("Data startu: "      + this.searchTripInfo.startDate);
    console.log("Data zakończenia: " + this.searchTripInfo.endDate);
    console.log("Miejsce startu: "   + this.searchTripInfo.startPlace);
    console.log("Cel: "              + this.searchTripInfo.destination);
    console.log("Cena minimalna: "   + this.searchTripInfo.minPrice);
    console.log("Cena maksymalna: "  + this.searchTripInfo.maxPrice);
    console.log("Waluta: "           + this.searchTripInfo.currency);
    console.log("Transport: "        + this.searchTripInfo.transport);
    console.log("Zakwaterowanie: "   + this.searchTripInfo.accommodation);
    console.log("Sortowanie: "       + this.sortMethod);
  }
}
