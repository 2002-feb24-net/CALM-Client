import { Component, OnInit } from '@angular/core'; // import from OnInit component.
import User from '../models/User'; // imports from user model
import { Router } from '@angular/router'; // imports router
import { FormBuilder, Validators } from '@angular/forms'; // imports formbuilder
import { UserService } from '../services/user.service'; // imports from user services
import { ToastrService } from 'ngx-toastr'; // imports from ngx toastr
import { CookieService } from 'ngx-cookie-service'; // imports from ngx cookie service
import { HttpErrorResponse } from '@angular/common/http'; // imports Http error response

/**
 * register component
 */

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
  /**
   * constructor form with its parameters
   * @param formBuilder
   * @param toastr
   * @param router
   * @param CookieService
   * @param userApi
   */
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService,
     private router: Router,  private CookieService: CookieService,
      private userApi:UserService) { }
/**
 * create user form that validates user properties
 */
  ngOnInit(): void {
    this.CookieService.deleteAll();  // cookie service injected.
    this.CreateUserForm = this.formBuilder.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],

  });
  }
  /**
   * Asserts errorr handling in the register form.
   * @param error
   */
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

  // getUsers() {
  //   return this.userApi.getUsers()
  //     .then(
  //       User => {
  //         this.User = User; //uses promises to accept the api response
  //         this.resetError(); //resets error message
  //       },
  //       error => {
  //         this.handleError(error); //handles error
  //       }
  //     );
  // }
  CreateUser() {
    this.submitted = true;
    /**
     * User form containing property values from API
     */
    const newUsers: User = {
      
      FName: this.CreateUserForm.get('FName')?.value, // gets first name for new user.
      LName: this.CreateUserForm.get('LName')?.value, // gets Last name for new user
      username: this.CreateUserForm.get('username')?.value, // gets username for new user
      Password: this.CreateUserForm.get('Password')?.value, // gets password for new user
      
      fName: this.CreateUserForm.get('fName')?.value,
      lName: this.CreateUserForm.get('lName')?.value,
      username: this.CreateUserForm.get('username')?.value,
      password: this.CreateUserForm.get('password')?.value,

  isAdmin: false

    };
console.log(newUsers)

    this.userApi.CreateUser(newUsers) // creates new user
      .then(
        User => {
          if (this.error) { //conditinal statement that checks for errors in register component.

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
