import { Component } from '@angular/core';

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
  styleUrls: [ './user-page.component.css' ]
})
export class UserPageComponent { 
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

  messageInfo = {
    name: '',
    email: '',
    message: ''
  }


  onSubmit(name: string, email: string, message: string) {
    this.messageInfo.name    = name;
    this.messageInfo.email   = email;
    this.messageInfo.message = message;

    console.log("Imię i nazwisko: " + this.messageInfo.name);
    console.log("Email: "           + this.messageInfo.email);
    console.log("Wiadomość: "       + this.messageInfo.message);
  }
}