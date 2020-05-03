import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import User from '../models/User';

import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';


/**
 * login component
 */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User;

/**
 * exception login error handling
 */

  error: string | undefined;
/**
 * exception handling with error validation message
 */
  errorMessage:string;
  UserForm = this.formBuilder.group({
    text: ['', Validators.required]
  })

/**
 *
 * @param formBuilder 
 */
  constructor(private formBuilder: FormBuilder,private router: Router,
    private toastr: ToastrService,public LoginService:UserService,
    private cookieService: CookieService) { }



  ngOnInit(): void {
    this.cookieService.deleteAll();
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.LoginService.formData = {
      Id: 0,
      FName: '',
      LName: '',
      username: '',
      Password:'',
      isAdmin: false
    }
  }
 
  Login(f: NgForm) {
    return  this.LoginService.getUsersByName().then(
         user => {
           this.toastr.info('Get By Id successfully', 'Get user by id');
           this.user = user;
           console.log(user);
           this.cookieService.set('User',`${this.user.Id}`);
           this.cookieService.set('Username',`${this.user.username}`);
     
       this.router.navigate(['/support-groups']);

      
         },
         err => {
           console.log(err);
         }
       )
     }

     handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        this.error = `An error occurred: ${error.error.message}`; //in the event of a network error. Add error message.
      } else {
        this.error = `Backend returned code ${error.status}, body was: ${error.error}`; //If the response status code was an error then display said error
      }
    }

}
