import { Component, OnInit } from '@angular/core';
import User from '../models/User';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { HttpErrorResponse } from '@angular/common/http';
<<<<<<< HEAD
/**
 * register component
 */
=======


>>>>>>> master
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
/**
 * exports Register component.
 */
export class RegisterComponent implements OnInit {
  User: User[] = [];
  error: string | undefined; // error handling implementation
  submitted = false;
  CreateUserForm = this.formBuilder.group({
    text: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService,
     private router: Router,  private CookieService: CookieService,
      private userApi:UserService) { }
/**
 * create user form that validates user properties
 */
  ngOnInit(): void {
    this.CookieService.deleteAll();  // cookie service injected.
    this.CreateUserForm = this.formBuilder.group({
      FName: ['', Validators.required],
      LName: ['', Validators.required],
      username: ['', Validators.required],
      Password: ['', [Validators.required, Validators.minLength(6)]],

  });
  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      this.error = `An error occurred: ${error.error.message}`; //in the event of a network error. Add error message.
    } else {
      this.error = `Backend returned code ${error.status}, body was: ${error.error}`; //If the response status code was an error then display said error
    }
  }
  resetError() {
    this.error = undefined; //clears error message
  }
  get f() { return this.CreateUserForm.controls; }

//  const pass= this.CreateUserForm.get('Password')?.value;
//  const salt =  bcrypt.genSaltSync(10);
//  console.log(salt)
// const  passhash = bcrypt.hashSync(pass, salt);


/**
 * method that gets users through the use of promises to accept response from api
 */

  getUsers() {
    return this.userApi.getUsers()
      .then(
        User => {
          this.User = User; //uses promises to accept the api response
          this.resetError(); //resets error message
        },
        error => {
          this.handleError(error); //handles error
        }
      );
  }
  CreateUser() {
    this.submitted = true;
    /**
     * User form containing property values from API
     */
    const newUsers: User = {
      FName: this.CreateUserForm.get('FName')?.value,
      LName: this.CreateUserForm.get('LName')?.value,
      username: this.CreateUserForm.get('Username')?.value,
      Password: this.CreateUserForm.get('Password')?.value,

  isAdmin: false

    };
console.log(newUsers)

    this.userApi.CreateUser(newUsers) // creates new user
      .then(
        User => {
          if (this.error) {

           this.toastr.error('User Register', 'Error');


          } else {
            this.toastr.info('User Created', 'registered');
            this.router.navigate(['/login']);
            this.User.unshift(User); //inserts new element at start of array
            this.resetError(); //clears error message
          }
        },
        error => this.handleError(error) //handles error message
      );


}
}
