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
    this.checkCfName();
    this.checkCfEmail();
    this.checkCfSubject();
    this.checkCfMessage();

    if (!this.invalidName && !this.invalidEmail && !this.invalidSubject && !this.invalidMessage) {
      console.log("Contact form OK!");
    }
  }

  checkCfName() {
    if (!this.checkFormService.checkText(this.contactForm.get('cfName').value)) {
      this.showErrorMessage('cfName', this.invalidName);
      this.invalidName = true;
    } else {
      this.hideErrorMessage('cfName', this.invalidName);
      this.invalidName = false;
    }
  }

  checkCfEmail() {
    if (!this.checkFormService.checkEmail(this.contactForm, 'cfEmail')) {
      this.showErrorMessage('cfEmail', this.invalidEmail);
      this.invalidEmail = true;
    } else {
      this.hideErrorMessage('cfEmail', this.invalidEmail);
      this.invalidEmail = false;
    }
  }

  checkCfSubject() {
    if (!this.checkFormService.checkString(this.contactForm, 'cfSubject')) {
      this.showErrorMessage('cfSubject', this.invalidSubject);
      this.invalidSubject = true;
    } else {
      this.hideErrorMessage('cfSubject', this.invalidSubject);
      this.invalidSubject = false;
    }
  }

  checkCfMessage() {
    if (!this.checkFormService.checkString(this.contactForm, 'cfMessage')) {
      this.showErrorMessage('cfMessage', this.invalidMessage);
      this.invalidMessage = true;
    } else {
      this.hideErrorMessage('cfMessage', this.invalidMessage);
      this.invalidMessage = false;
    }
  }

  showErrorMessage(field: string, fieldControl: boolean) {
    document.getElementById(field + '-error').style.display = "block";
  }

  hideErrorMessage(field: string, fieldControl: boolean) {
    document.getElementById(field + '-error').style.display = "none";
  }
}