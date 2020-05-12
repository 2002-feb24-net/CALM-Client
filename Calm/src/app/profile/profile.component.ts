import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../services/user.service';
import User from '../models/User'; // imports from user model
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  user: User;
  constructor(private cookieService: CookieService,
    public userApi:UserService,
    private toastr: ToastrService) { }
    error: string | undefined;
    errorMessage:string;
   
  data=this.cookieService.get('username');
  ngOnInit() {
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

  onSubmit(form: NgForm) {
    if (this.user.username == " ")
   {
    this.resetForm(form);
    this.toastr.info('Invalid User', 'User Does not exist');
   }
   else
      this.updateRecord(form);
  }

  updateRecord(form: NgForm) {
    this.userApi.putUser().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'user updated');
    
      },
      err => {
        console.log(err);
      }
    )
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.userApi.formData = {
  lName: '',
  fName:'',
  password:'',
  username: '',
  city:'',
  isAdmin: false,
    }
  }

}
