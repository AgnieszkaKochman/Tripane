import { Component, OnInit }      from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Routes, Router }         from '@angular/router';

import { CheckFormService } from '../check-form.service/check-form.service';

@Component({
  selector: 'comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: [ './comment-form.component.css' ],
  providers: [CheckFormService]
})
export class CommentFormComponent implements OnInit { 
  commentForm: FormGroup;

  invalidComment: boolean = false;

  constructor(private checkFormService: CheckFormService, private formBuilder : FormBuilder, private router: Router) {};
  
  ngOnInit(): void {
    this.commentForm = this.formBuilder.group({
      comment: ''
    });
  }

  onSubmit(comment: string) {
    this.checkComment();

    if (!this.invalidComment) {
      console.log("Comment OK!");
    }
  }

  checkComment() {
    if ( !this.checkFormService.checkString(this.commentForm,'comment') ) { 
      this.showErrorMessage('comment'); 
      this.invalidComment = true;
    } else {
      this.hideErrorMessage('comment');
      this.invalidComment = false;
    }
  }

  showErrorMessage(field: string) {
    document.getElementById(field + '-error').style.display = "block";
  }

  hideErrorMessage(field: string) {
    document.getElementById(field + '-error').style.display = "none";
  }
}