import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: [ './contact.component.css' ]
})
export class ContactComponent { 
  lat: number = 50.2699504;
  lng: number = 19.081105;
  address = "ul. Wandy 16, 41-300 Katowice";
  phone = "604 422 204";
  email = "kontakt@tripane.pl";
}