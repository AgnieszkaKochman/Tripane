import { Component } from '@angular/core';

@Component({
  selector: 'comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: [ './comment-form.component.css' ]
})
export class CommentFormComponent { 
  comment: string = "";


  onSubmit(comment: string) {
    this.comment = comment;

    console.log("Komentarz: " + this.comment);
  }
}