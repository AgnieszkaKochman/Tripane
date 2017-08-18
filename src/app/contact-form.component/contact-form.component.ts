import { Component } from '@angular/core';
import {Http, Headers} from '@angular/http'; 

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: [ './contact-form.component.css' ]
})
export class ContactFormComponent { 
  newMessage = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private http: Http) {};

  onSubmit() {
    var headers = new Headers();
    
    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    this.http.post('./app/send-email.php', this.newMessage, {headers: headers}).subscribe((data) => {
      if (data.json().success) {
        console.log('mail sent');
      }
    });

  }
}