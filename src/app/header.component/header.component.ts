import { Component } from '@angular/core';

@Component({
  selector: 'page-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
})
export class HeaderComponent { 
  logoUrl = "./assets/images/logo.png";
  addTripTxt = "+ Dodaj wycieczkę";
  loginTxt= "Zaloguj się / Zarejestruj się";
}