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

const TRIPS: Trip[] = [
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

@Component({
  selector: 'trips',
  templateUrl: './trips.component.html',
  styleUrls: [ './trips.component.css' ]
})
export class TripsComponent { 
  tripsHeading = "Najnowsze wycieczki";
  trips = TRIPS;

}