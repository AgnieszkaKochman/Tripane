import { Component } from '@angular/core';

@Component({
  selector: 'new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: [ './new-trip.component.css' ]
})
export class NewTripComponent { 
  addTripHeading = "Dodaj nową wycieczkę";
  newTrip = {
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

  onSubmit(name: string, description: string, photoUrl: string, startDate: Date, endDate: Date, startPlace: string, destination: string, price: number, currency: string, transport: string, accommodation: string ) {
    this.newTrip.name          = name;
    this.newTrip.description   = description;
    this.newTrip.photoUrl      = photoUrl;
    this.newTrip.startDate     = new Date(startDate);
    this.newTrip.endDate       = new Date(endDate);
    this.newTrip.startPlace    = startPlace;
    this.newTrip.destination   = destination;
    this.newTrip.price         = price;
    this.newTrip.currency      = currency;
    this.newTrip.transport     = transport;
    this.newTrip.accommodation = accommodation;
    
    console.log("Nazwa: "            + this.newTrip.name);
    console.log("Opis: "             + this.newTrip.description);
    console.log("Zdjęcie: "          + this.newTrip.photoUrl);
    console.log("Data startu: "      + this.newTrip.startDate);
    console.log("Data zakończenia: " + this.newTrip.endDate);
    console.log("Miejsce startu: "   + this.newTrip.startPlace);
    console.log("Cel: "              + this.newTrip.destination);
    console.log("Cena: "             + this.newTrip.price);
    console.log("Waluta: "           + this.newTrip.currency);
    console.log("Transport: "        + this.newTrip.transport);
    console.log("Zakwaterowanie: "   + this.newTrip.accommodation);
  }
}
