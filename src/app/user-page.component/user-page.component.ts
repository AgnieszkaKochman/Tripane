import { Component, OnInit }      from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Routes, Router }         from '@angular/router';

import { CheckFormService } from '../check-form.service/check-form.service';

export class User {
    userId: number;
    email: string;
    login: string;
    password: string;
    role: string;
    name: string;
    surname: string;
    phone: string;
    birthDate: Date;
    photoUrl: string;
    description: string;
}

@Component({
  selector: 'user-page',
  templateUrl: './user-page.component.html',
  styleUrls: [ './user-page.component.css' ],
  providers: [CheckFormService]
})
export class UserPageComponent implements OnInit { 
  user: User = {
      userId: 1,
      email: "user@email.pl",
      login: "user1",
      password: "user123",
      role: "user",
      name: "Anna",
      surname: "Kowalska",
      phone: "123-456-789",
      birthDate:  new Date(1987, 10, 28),
      photoUrl: "assets/images/user.jpg",
      description: "Aenean faucibus risus a hendrerit bibendum. Morbi lectus magna, faucibus et maximus ac, ultricies ut mauris. Fusce eu fringilla diam, eu porta lectus. In condimentum est nec nisi pretium molestie. Aenean laoreet nunc at pellentesque finibus."
  }

  userMessage: FormGroup;

  invalidName: boolean = false;
  invalidEmail: boolean = false;
  invalidMessage: boolean = false;


  constructor(private checkFormService: CheckFormService, private formBuilder : FormBuilder, private router: Router) {};
  
  ngOnInit(): void {
    this.userMessage = this.formBuilder.group({
      name: '',
      email: '',
      message: ''
    });
  }

  onSubmit() {
    this.checkName();
    this.checkEmail();
    this.checkMessage();

    if (!this.invalidName && !this.invalidEmail && !this.invalidMessage) {
      console.log("Message OK!");
    }
  }

  showErrorMessage(field: string) {
    document.getElementById(field + '-error').style.display = "block";
  }

  hideErrorMessage(field: string) {
    document.getElementById(field + '-error').style.display = "none";
  }

  checkName() {
    if ( !this.checkFormService.checkText(this.userMessage.get('name').value) ) { 
      this.showErrorMessage('name'); 
      this.invalidName = true;
    } else {
      this.hideErrorMessage('name');
      this.invalidName = false;
    }
  }

  checkEmail() {
    if ( !this.checkFormService.checkEmail(this.userMessage,'email') ) { 
      this.showErrorMessage('email'); 
      this.invalidEmail = true;
    } else {
      this.hideErrorMessage('email');
      this.invalidEmail = false;
    }
  }

  checkMessage() {
    if ( !this.checkFormService.checkString(this.userMessage,'message') ) { 
      this.showErrorMessage('message'); 
      this.invalidMessage = true;
    } else {
      this.hideErrorMessage('message');
      this.invalidMessage = false;
    }
  }
}