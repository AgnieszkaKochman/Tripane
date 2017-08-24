import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Routes, Router } from '@angular/router';

import { CheckFormService } from '../check-form.service/check-form.service';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: [ './contact-form.component.css' ],
  providers: [CheckFormService]
})
export class ContactFormComponent implements OnInit { 
  contactForm: FormGroup;
  
  invalidName: boolean = false;
  invalidEmail: boolean = false;
  invalidSubject: boolean = false;
  invalidMessage: boolean = false;

  constructor(private checkFormService: CheckFormService, private formBuilder : FormBuilder, private router: Router) {};

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      cfName: '',
      cfEmail: '',
      cfSubject: '',
      cfMessage: ''
    })
  }

  onSubmit() {
    

  }
}