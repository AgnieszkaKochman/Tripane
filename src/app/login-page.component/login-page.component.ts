import { Component } from '@angular/core';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: [ './login-page.component.css' ]
})
export class LoginPageComponent { 
  loginHeading = "Zaloguj się";
  loginButton = "Zaloguj się";
  registerHeadingSmall = "Nie masz jeszcze konta?";
  registerHeading = "Zarejestruj się";
  registerButton = "Zarejestruj się";
}