import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import User from '../models/User';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * app admin login component.
 */
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  user : User;
  error: string | undefined;

  /**
   * error message form for user.
   */
  errorMessage:string;
  UserForm = this.formBuilder.group({
    text: ['', Validators.required]
  })
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    public LoginService:UserService,
    private cookieService: CookieService,) { }
    /**
     * @ignore
     */
  ngOnInit(): void {
    this.cookieService.deleteAll();
    this.resetForm();
  }
  /**
   *
   * @param form 
   */
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.LoginService.formData = {
      Id: 0,
      FName: '',
      LName: '',
      username: '',
      Password:'',
      isAdmin: false,
    }
  }
  /**
   *
   * @param f
   */
  Login(f: NgForm) {
    return  this.LoginService.getUsersByName().then(
         user => {
           this.toastr.info('Get By Id successfully', 'Get user by id');
           this.user = user;
           console.log(user);
           this.cookieService.set('User',`${this.user.Id}`);
           this.cookieService.set('username',`${this.user.username}`);
          /**
           * Conditional statement utilized.
           */
           if(this.user.isAdmin){
       this.router.navigate(['/adminedit']);
           }

         },
         err => {
           console.log(err);
         }
       )
     }
     /**
      * this is an HTTP error handling method.
      * @param error
      */
     handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        this.error = `An error occurred: ${error.error.message}`; //in the event of a network error. Add error message.
      } else {
        this.error = `Backend returned code ${error.status}, body was: ${error.error}`; //If the response status code was an error then display said error
      }
    }

}
