import { Component } from '@angular/core';

@Component({
  selector: 'search-trip',
  templateUrl: './search-trip.component.html',
  styleUrls: [ './search-trip.component.css' ]
})
export class SearchTripComponent { 
  lat: number = 50.2699504;
  lng: number = 19.081105;
}
