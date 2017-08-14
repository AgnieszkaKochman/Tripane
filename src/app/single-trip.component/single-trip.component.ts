import { Component } from '@angular/core';

export class Trip {
    tripId: number;
    title: string;
    startDate: Date;
    endDate: Date;
    startPlace: string;
    destination: string;
    priceAmount: number;
    priceCurrency: string;
    photoUrl: string;
    description: string;
}


@Component({
  selector: 'single-trip',
  templateUrl: './single-trip.component.html',
  styleUrls: [ './single-trip.component.css' ]
})
export class SingleTripComponent { 
  lat: number = 50.2699504;
  lng: number = 19.081105;
  trip: Trip = { 
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
    }
}
