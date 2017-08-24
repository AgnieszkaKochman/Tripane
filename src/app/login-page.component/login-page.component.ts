import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Routes, Router } from '@angular/router';

import { CheckFormService } from '../check-form.service/check-form.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: [ './login-page.component.css' ],
  providers: [CheckFormService]
})
export class LoginPageComponent implements OnInit { 
  loginHeading = "Zaloguj się";
  loginButton = "Zaloguj się";
  registerHeadingSmall = "Nie masz jeszcze konta?";
  registerHeading = "Zarejestruj się";
  registerButton = "Zarejestruj się"; 

  userLoginInfo: FormGroup;
  userRegisterInfo: FormGroup;
  invalidLoginFormLogin: boolean = false;
  invalidLoginFormPassword: boolean = false;

  invalidRegisterFormName: boolean = false;
  invalidRegisterFormSurname: boolean = false;
  invalidRegisterFormEmail: boolean = false;
  invalidRegisterFormLogin: boolean = false;
  invalidRegisterFormPassword: boolean = false;
  invalidRegisterFormConfirmPassword: boolean = false;
  invalidRegisterFormPhone: boolean = false;


  constructor(private checkFormService: CheckFormService, private formBuilder : FormBuilder, private router: Router) {};

  ngOnInit() : void {
    this.userLoginInfo = this.formBuilder.group({
      lfLogin: '',
      lfPassword: ''
    });

    this.userRegisterInfo = this.formBuilder.group({
      rfName: '',
      rfSurname: '',
      rfEmail: '',
      rfLogin: '',
      rfPassword: '',
      rfConfirmPassword: '',
      rfPhone: ''
    });
   }

  onLogin(userLoginInfo: FormGroup) {
    this.checkLfLogin();
    this.checkLfPassword();

    if (!this.invalidLoginFormLogin && !this.invalidLoginFormPassword) {
      this.router.navigate(['./home']);
    }
  }

  onRegister(userRegisterInfo: FormGroup) {
    this.checkRfName();
    this.checkRfSurname();
    this.checkRfEmail();
    this.checkRfLogin();
    this.checkRfPassword();
    this.checkRfConfirmPassword();
    this.checkRfPhone();

    if (!this.invalidRegisterFormName && !this.invalidRegisterFormSurname &&
       !this.invalidRegisterFormEmail && !this.invalidRegisterFormLogin && 
       !this.invalidRegisterFormPassword && !this.invalidRegisterFormConfirmPassword && !this.invalidRegisterFormPhone) {
      this.router.navigate(['./home']);
    }
  }

  checkLoginPassword(form: FormGroup, field: string, fieldControl: boolean) {
    if (!this.checkFormService.checkLoginPassword(form, field)) {
      this.showErrorMessage(field, fieldControl);
    } else {
      this.hideErrorMessage(field, fieldControl);
    }
  }

  checkText(form: FormGroup, field: string, fieldControl: boolean) {
    if ( !this.checkFormService.checkText(form.get(field).value) ) { 
      this.showErrorMessage(field, fieldControl); 
    } else {
      this.hideErrorMessage(field, fieldControl);
    }
  }

  checkEmail(form: FormGroup, field: string, fieldControl: boolean) {
    if ( !this.checkFormService.checkEmail(form, field) ) { 
      this.showErrorMessage(field, fieldControl); 
    } else {
      this.hideErrorMessage(field, fieldControl);
    }
  }

  checkPassword(form: FormGroup, field1: string, field2: string, fieldControl: boolean) {
    if ( !this.checkFormService.checkPassword(form, field1, field2) ) { 
      this.showErrorMessage(field2, fieldControl);
    } else {
      this.hideErrorMessage(field2, fieldControl);
    }
  }

  checkPhone(form: FormGroup, field: string, fieldControl: boolean) {
    if ( !this.checkFormService.checkPhone(form, field) ) { 
      this.showErrorMessage(field, fieldControl); 
    } else {
      this.hideErrorMessage(field, fieldControl);
    }
  }

  showErrorMessage(field: string, fieldControl: boolean) {
    fieldControl = true; 
    document.getElementById(field + '-error').style.display = "block";
  }

  hideErrorMessage(field: string, fieldControl: boolean) {
    fieldControl = false;
    document.getElementById(field + '-error').style.display = "none";
  }

  
  checkLfLogin() {
    this.checkLoginPassword(this.userLoginInfo, 'lfLogin', this.invalidLoginFormLogin);
  }

  checkLfPassword() {
    this.checkLoginPassword(this.userLoginInfo, 'lfPassword', this.invalidLoginFormPassword);
  }

  checkRfName() {
    this.checkText(this.userRegisterInfo, 'rfName', this.invalidRegisterFormName);
  }

  checkRfSurname() {
    this.checkText(this.userRegisterInfo, 'rfSurname', this.invalidRegisterFormSurname);
  }

  checkRfEmail() {
    this.checkEmail(this.userRegisterInfo, 'rfEmail', this.invalidRegisterFormEmail);
  }

  checkRfLogin() {
    this.checkLoginPassword(this.userRegisterInfo, 'rfLogin', this.invalidRegisterFormLogin);
  }

  checkRfPassword() {
    this.checkLoginPassword(this.userRegisterInfo, 'rfPassword', this.invalidRegisterFormPassword);
  }

  checkRfConfirmPassword() {
    this.checkPassword(this.userRegisterInfo, 'rfPassword', 'rfConfirmPassword', this.invalidRegisterFormConfirmPassword);
  }

  checkRfPhone() {
    this.checkPhone(this.userRegisterInfo, 'rfPhone', this.invalidRegisterFormPhone);
  }
}