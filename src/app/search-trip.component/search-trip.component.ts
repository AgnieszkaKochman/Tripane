import { Component, OnInit }      from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Routes, Router }         from '@angular/router';

import { CheckFormService } from '../check-form.service/check-form.service';

@Component({
  selector: 'search-trip',
  templateUrl: './search-trip.component.html',
  styleUrls: [ './search-trip.component.css' ],
  providers: [CheckFormService]
})
export class SearchTripComponent implements OnInit { 
  lat: number = 50.2699504;
  lng: number = 19.081105;

  sortMethod: string = "Cena rosnąco";

  searchTripInfo: FormGroup; 

  invalidStartDate: boolean = false;
  invalidEndDate: boolean = false;
  invalidStartPlace: boolean = false;
  invalidDestination: boolean = false;
  invalidMinPrice: boolean = false;
  invalidMaxPrice: boolean = false;
  invalidCurrency: boolean = false;
  invalidTransport: boolean = false;
  invalidAccommodation: boolean = false;

  constructor(private checkFormService: CheckFormService, private formBuilder : FormBuilder, private router: Router) {};
  
  ngOnInit(): void {
    this.searchTripInfo = this.formBuilder.group({
      startDate: '', 
      endDate: '', 
      startPlace: '', 
      destination: '', 
      minPrice: 0, 
      maxPrice: 0, 
      currency: '', 
      transport: '', 
      accommodation: '',
      sort: ''
    });
  }


  onSearch () {
    this.checkStartDate();
    this.checkEndDate();
    this.checkStartPlace();
    this.checkDestination();
    this.checkMinPrice();
    this.checkMaxPrice();
    this.checkCurrency();
    this.checkTransport();
    this.checkAccommodation();

    if (!this.invalidStartDate && !this.invalidEndDate && !this.invalidStartPlace 
      && !this.invalidDestination && !this.invalidMinPrice && !this.invalidMaxPrice
      && !this.invalidCurrency && !this.invalidTransport && !this.invalidAccommodation) {
        
        console.log("OK");
      }    
  }

  showErrorMessage(field: string) {
    document.getElementById(field + '-error').style.display = "block";
  }

  hideErrorMessage(field: string) {
    document.getElementById(field + '-error').style.display = "none";
  }

  checkStartDate() {
    if ( !this.checkFormService.checkDate(this.searchTripInfo.get('startDate').value) ) { 
      this.showErrorMessage('startDate'); 
      this.invalidStartDate = true;
    } else {
      this.hideErrorMessage('startDate');
      this.invalidStartDate = false;
    }
  }

  checkEndDate() {
    if ( !this.checkFormService.checkDate(this.searchTripInfo.get('endDate').value) ) { 
      this.showErrorMessage('endDate'); 
      this.invalidEndDate = true;
    } else {
      this.hideErrorMessage('endDate');
      this.invalidEndDate = false;
    }
  }

  checkStartPlace() {
    if ( !this.checkFormService.checkText(this.searchTripInfo.get('startPlace').value) ) { 
      this.showErrorMessage('startPlace'); 
      this.invalidStartPlace = true;
    } else {
      this.hideErrorMessage('startPlace');
      this.invalidStartPlace = false;
    }
  }

  checkDestination() {
    if ( !this.checkFormService.checkText(this.searchTripInfo.get('destination').value) ) { 
      this.showErrorMessage('destination'); 
      this.invalidDestination = true;
    } else {
      this.hideErrorMessage('destination');
      this.invalidDestination = false;
    }
  }

  checkMinPrice() {
    if ( !this.checkFormService.checkPrice(this.searchTripInfo.get('minPrice').value) ) { 
      this.showErrorMessage('minPrice'); 
      this.invalidMinPrice = true;
    } else {
      this.hideErrorMessage('minPrice');
      this.invalidMinPrice = false;
    }
  }

  checkMaxPrice() {
    if ( !this.checkFormService.checkPrice(this.searchTripInfo.get('maxPrice').value) ) { 
      this.showErrorMessage('maxPrice'); 
      this.invalidMaxPrice = true;
    } else {
      this.hideErrorMessage('maxPrice');
      this.invalidMaxPrice = false;
    }
  }

  checkCurrency() {
    if ( !this.checkFormService.checkSelect(this.searchTripInfo.get('currency').value) ) { 
      this.showErrorMessage('currency'); 
      this.invalidCurrency = true;
    } else {
      this.hideErrorMessage('currency');
      this.invalidCurrency = false;
    }
  }

  checkTransport() {
    if ( !this.checkFormService.checkSelect(this.searchTripInfo.get('transport').value) ) { 
      this.showErrorMessage('transport'); 
      this.invalidTransport = true;
    } else {
      this.hideErrorMessage('transport');
      this.invalidTransport = false;
    }
  }

  checkAccommodation() {
    if ( !this.checkFormService.checkSelect(this.searchTripInfo.get('accommodation').value) ) { 
      this.showErrorMessage('accommodation'); 
      this.invalidAccommodation = true;
    } else {
      this.hideErrorMessage('accommodation');
      this.invalidAccommodation = false;
    }
  }

  
}
