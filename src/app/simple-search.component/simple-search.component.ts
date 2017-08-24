import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Routes, Router } from '@angular/router';

import { CheckFormService } from '../check-form.service/check-form.service';

@Component({
  selector: 'simple-search',
  templateUrl: './simple-search.component.html',
  styleUrls: [ './simple-search.component.css' ],
  providers: [CheckFormService]
})
export class SimpleSearchComponent implements OnInit {
  searchInfo: FormGroup;
  invalidDestination: boolean = false;
  invalidStartDate: boolean = false;
  invalidEndDate: boolean = false;
  
  constructor(private checkFormService: CheckFormService, private formBuilder : FormBuilder, private router: Router) {};

  ngOnInit() : void {
    this.searchInfo = this.formBuilder.group({
      destination: '',
      startDate: '',
      endDate: '',
    });
   }
  
  onSubmit(searchInfo: FormGroup) {
    this.checkDestination();   
    this.checkStartDate();
    this.checkEndDate();

    if (!this.invalidDestination && !this.invalidStartDate && !this.invalidEndDate) {
      this.router.navigate(['./wycieczki']);
    }
  }

  checkDestination() {
    if ( !this.checkFormService.checkText(this.searchInfo.get('destination').value) ) { 
      this.invalidDestination = true; 
      document.getElementById('destination-error').style.display = "block"; 
    } else {
      this.invalidDestination = false;
      document.getElementById('destination-error').style.display = "none";
    }
  }

  checkStartDate() {
    if ( !this.checkFormService.checkDate(this.searchInfo.get('startDate').value) ) {
      this.invalidStartDate = true;
      document.getElementById('start-date-error').style.display = "block";
    } else {
      this.invalidStartDate = false;
      document.getElementById('start-date-error').style.display = "none";
    }
  }

  checkEndDate() {
    if ( !this.checkFormService.checkDate(this.searchInfo.get('endDate').value) ) {
      this.invalidEndDate = true;
      document.getElementById('end-date-error').style.display = "block";
    } else {
      this.invalidEndDate = false;
      document.getElementById('end-date-error').style.display = "none";
    }
  }
} 
