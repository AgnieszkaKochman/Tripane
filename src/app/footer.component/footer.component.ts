import { Component } from '@angular/core';

@Component({
  selector: 'page-footer',
  templateUrl: './footer.component.html',
  styleUrls: [ './footer.component.css' ]
})
export class FooterComponent { 
  logoUrl = "./assets/images/logo.png";
  copyright = "Created by";
  mondayUrl = "http://wearemonday.pl";
  mondayLogoUrl = "./assets/images/monday.png";
}