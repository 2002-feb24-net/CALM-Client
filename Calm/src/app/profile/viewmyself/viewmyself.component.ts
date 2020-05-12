import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import User from 'src/app/models/User';

@Component({
  selector: 'app-viewmyself',
  templateUrl: './viewmyself.component.html'
})
export class ViewmyselfComponent implements OnInit {
  user: User;
  error: string | undefined;
  constructor(public userApi:UserService,) { }

  ngOnInit(): void {
    this.userApi.getUsersBycookie()
    .then(
      user => {
        this.user =user;
  },
        error => {
          this.handleError(error); //handles error
        }
      );
  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      this.error = `An error occurred: ${error.error.message}`; //in the event of a network error. Add error message.
    } else {
      this.error = `Backend returned code ${error.status}, body was: ${error.error}`; //If the response status code was an error then display said error
    }
  }

}
