import { Component, OnInit }      from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Routes, Router }         from '@angular/router';

import { CheckFormService } from '../check-form.service/check-form.service';

@Component({
  selector: 'new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: [ './new-trip.component.css' ],
  providers: [CheckFormService]
})
export class NewTripComponent implements OnInit { 
  addTripHeading = "Dodaj nową wycieczkę";
  newTripInfo: FormGroup;

  invalidName: boolean = false;
  invalidDescription: boolean = false;
  invalidPhoto: boolean = false;
  invalidStartDate: boolean;
  invalidEndDate: boolean;
  invalidStartPlace: boolean;
  invalidDestination: boolean;
  invalidPrice: boolean;
  invalidCurrency: boolean;
  invalidTransport: boolean;
  invalidAccommodation: boolean;


  constructor(private checkFormService: CheckFormService, private formBuilder : FormBuilder, private router: Router) {};

  ngOnInit(): void {
    this.newTripInfo = this.formBuilder.group({
      tripName: '',
      tripDescription: '',
      tripPhoto: '',
      tripStartDate: '',
      tripEndDate: '',
      tripStartPlace: '',
      tripDestination: '',
      tripPrice: 0,
      tripCurrency: '',
      tripTransport: '',
      tripAccommodation: ''
    });
  }

  onSubmit() {
     this.checkName();
     this.checkDescription();
     this.checkPhoto();
     this.checkStartDate();
     this.checkEndDate();
     this.checkStartPlace();
     this.checkDestination();
     this.checkPrice();
     this.checkCurrency();
     this.checkTransport();
     this.checkAccommodation();

    if (!this.invalidName && !this.invalidDescription && !this.invalidPhoto 
     && !this.invalidStartDate && !this.invalidEndDate && !this.invalidStartPlace
     && !this.invalidDestination && !this.invalidPrice && !this.invalidCurrency
     && !this.invalidTransport && !this.invalidAccommodation) {
       
       console.log("OK");
     }
  }

  showErrorMessage(field: string) {
    document.getElementById(field + '-error').style.display = "block";
  }

  hideErrorMessage(field: string) {
    document.getElementById(field + '-error').style.display = "none";
  }

  checkName() {
    if ( !this.checkFormService.checkString(this.newTripInfo, 'tripName') ) { 
      this.showErrorMessage('tripName'); 
      this.invalidName = true;
    } else {
      this.hideErrorMessage('tripName');
      this.invalidName = false;
    }
  }

  checkDescription() {
    if ( !this.checkFormService.checkString(this.newTripInfo, 'tripDescription') ) { 
      this.showErrorMessage('tripDescription'); 
      this.invalidDescription = true;
    } else {
      this.hideErrorMessage('tripDescription');
      this.invalidDescription = false;
    }
  }

  checkPhoto() {
    if ( !this.checkFormService.checkPhoto(this.newTripInfo.get('tripPhoto').value) ) { 
      this.showErrorMessage('tripPhoto'); 
      this.invalidPhoto = true;
    } else {
      this.hideErrorMessage('tripPhoto');
      this.invalidPhoto = false;
    }
  }

  checkStartDate() {
    if ( !this.checkFormService.checkDate(this.newTripInfo.get('tripStartDate').value) ) { 
      this.showErrorMessage('tripStartDate'); 
      this.invalidStartDate = true;
    } else {
      this.hideErrorMessage('tripStartDate');
      this.invalidStartDate = false;
    }
  }

  checkEndDate() {
    if ( !this.checkFormService.checkDate(this.newTripInfo.get('tripEndDate').value) ) { 
      this.showErrorMessage('tripEndDate'); 
      this.invalidEndDate = true;
    } else {
      this.hideErrorMessage('tripEndDate');
      this.invalidEndDate = false;
    }
  }

  checkStartPlace() {
    if ( !this.checkFormService.checkText(this.newTripInfo.get('tripStartPlace').value) ) { 
      this.showErrorMessage('tripStartPlace'); 
      this.invalidStartPlace = true;
    } else {
      this.hideErrorMessage('tripStartPlace');
      this.invalidStartPlace = false;
    }
  }

  checkDestination() {
    if ( !this.checkFormService.checkText(this.newTripInfo.get('tripDestination').value) ) { 
      this.showErrorMessage('tripDestination'); 
      this.invalidDestination = true;
    } else {
      this.hideErrorMessage('tripDestination');
      this.invalidDestination = false;
    }
  }
 
  checkPrice() {
    if ( !this.checkFormService.checkPrice(this.newTripInfo.get('tripPrice').value) ) { 
      this.showErrorMessage('tripPrice'); 
      this.invalidPrice = true;
    } else {
      this.hideErrorMessage('tripPrice');
      this.invalidPrice = false;
    }
  }

  checkCurrency() {
    if ( !this.checkFormService.checkSelect(this.newTripInfo.get('tripCurrency').value) ) { 
      this.showErrorMessage('tripCurrency'); 
      this.invalidCurrency = true;
    } else {
      this.hideErrorMessage('tripCurrency');
      this.invalidCurrency = false;
    }
  }

  checkTransport() {
    if ( !this.checkFormService.checkSelect(this.newTripInfo.get('tripTransport').value) ) { 
      this.showErrorMessage('tripTransport'); 
      this.invalidTransport = true;
    } else {
      this.hideErrorMessage('tripTransport');
      this.invalidTransport = false;
    }
  }

  checkAccommodation() {
    if ( !this.checkFormService.checkSelect(this.newTripInfo.get('tripAccommodation').value) ) { 
      this.showErrorMessage('tripAccommodation'); 
      this.invalidAccommodation = true;
    } else {
      this.hideErrorMessage('tripAccommodation');
      this.invalidAccommodation = false;
    }
  }
}
