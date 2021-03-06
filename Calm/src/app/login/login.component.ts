import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms'; // imports frombuilder, validtors & ngform
import User from '../models/User'; // imports user from models.
/**
 * imports multiple services for user login component.
 */
import { ToastrService } from 'ngx-toastr'; // imports toastr
import { CookieService } from 'ngx-cookie-service'; // imports cookie services from ngx cookie
import { Router } from '@angular/router'; // imports router
import { UserService } from '../services/user.service'; // imports user services
import { HttpErrorResponse } from '@angular/common/http'; // imports an httperror response.


/**
 * login component
 */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
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
  constructor( private formBuilder: FormBuilder, private router: Router,
    private toastr: ToastrService,public LoginService:UserService,
    private cookieService: CookieService) { }


  /**
   * @ignore
   */
  ngOnInit(): void {
    this.cookieService.deleteAll();
    this.resetForm();
  }
  /**
   * user form that declares its properties.
   * @param form
   */
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.LoginService.formData = {
      fName: '',
      lName: '',
      username: '',
      password:'',
      city:'',
      isAdmin: false
    }
  }
  /**
   * this is a method that gets users with the use of cookie services
   * @param f
   */
  Login(f: NgForm) {
   
    return  this.LoginService.getUsersByName().then(
         user => {
           if(user.username == ' ' || user.password == ' '){
            this.toastr.warning('Add details', 'No input');
           }
           this.toastr.info('Get By Id successfully', 'Get user by id');
           this.user = user;
           console.log(user);
           this.cookieService.set('username',`${this.user.username}`);
           this.cookieService.set('password',`${this.user.password}`);
           console.log(`${this.user.username}`);
           console.log(`${this.user.password}`);
           this.router.navigate(['/support-groups']);


         },
         err => {
          this.handleError(err) 
          console.log(err)
         }
       )
     }
     /**
      * used as a method for error handling
      * @param error
      */
     handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        this.error = `An error occurred: ${error.error}, ${error.error.message}`; //in the event of a network error. Add error message.
      } 
      else {
        this.error = `Sorry try again, error ${error.status} `; //If the response status code was an error then display said error
      }
    }

}
