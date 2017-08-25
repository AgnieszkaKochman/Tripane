import { Component, OnInit }      from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Routes, Router }         from '@angular/router';

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

  checkString(form: FormGroup, field: string): boolean {
    if (!this.checkFormService.checkString(form, field)) {
      this.showErrorMessage(field);
      return true;
    } else {
      this.hideErrorMessage(field);
      return false;
    }
  }

  checkText(form: FormGroup, field: string): boolean {
    if ( !this.checkFormService.checkText(form.get(field).value) ) { 
      this.showErrorMessage(field);
      return true; 
    } else {
      this.hideErrorMessage(field);
      return false;
    }
  }

  checkEmail(form: FormGroup, field: string): boolean {
    if ( !this.checkFormService.checkEmail(form, field) ) { 
      this.showErrorMessage(field); 
      return true;
    } else {
      this.hideErrorMessage(field);
      return false;
    }
  }

  checkPassword(form: FormGroup, field1: string, field2: string): boolean {
    if ( !this.checkFormService.checkPassword(form, field1, field2) ) { 
      this.showErrorMessage(field2);
      return true;
    } else {
      this.hideErrorMessage(field2);
      return false;
    }
  }

  checkPhone(form: FormGroup, field: string): boolean {
    if ( !this.checkFormService.checkPhone(form, field) ) { 
      this.showErrorMessage(field);
      return true;
    } else {
      this.hideErrorMessage(field);
      return false;
    }
  }

  showErrorMessage(field: string) {
    document.getElementById(field + '-error').style.display = "block";
  }

  hideErrorMessage(field: string) {
    document.getElementById(field + '-error').style.display = "none";
  }

  
  checkLfLogin() {
    this.invalidLoginFormLogin = this.checkString(this.userLoginInfo, 'lfLogin');
  }

  checkLfPassword() {
    this.invalidLoginFormPassword = this.checkString(this.userLoginInfo, 'lfPassword');
  }

  checkRfName() {
    this.invalidRegisterFormName = this.checkText(this.userRegisterInfo, 'rfName');
  }

  checkRfSurname() {
    this.invalidRegisterFormSurname = this.checkText(this.userRegisterInfo, 'rfSurname');
  }

  checkRfEmail() {
    this.invalidRegisterFormEmail = this.checkEmail(this.userRegisterInfo, 'rfEmail');
  }

  checkRfLogin() {
    this.invalidRegisterFormLogin = this.checkString(this.userRegisterInfo, 'rfLogin');
  }

  checkRfPassword() {
    this.invalidRegisterFormPassword = this.checkString(this.userRegisterInfo, 'rfPassword');
  }

  checkRfConfirmPassword() {
    this.invalidRegisterFormConfirmPassword = this.checkPassword(this.userRegisterInfo, 'rfPassword', 'rfConfirmPassword');
  }

  checkRfPhone() {
    this.invalidRegisterFormPhone = this.checkPhone(this.userRegisterInfo, 'rfPhone');
  }
}