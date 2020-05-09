import { Component, OnInit } from '@angular/core';
import User from '../models/User';
import { Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-adminedit',
  templateUrl: './adminedit.component.html'
})
export class AdmineditComponent implements OnInit {
  User: User[] = [];
  error: string | undefined; // error handling implementation
  submitted = false;
  CreateAdminForm = this.formBuilder.group({
    text: ['', Validators.required]
  });
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService,
    private router: Router,  private CookieService: CookieService,
     private userApi:UserService) { }
     showMyC: boolean = false;
     showMyContainer: boolean = false;

     
  ngOnInit(): void {
    this.CreateAdminForm = this.formBuilder.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      username: ['', Validators.required],
      city: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],

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
    get f() { return this.CreateAdminForm.controls; }
  
  //  const pass= this.CreateAdminForm.get('password')?.value;
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

    CreateAdmin() {
      this.submitted = true;
      /**
       * User form containing property values from API
       */
      const newUsers: User = {
        fName: this.CreateAdminForm.get('fName')?.value,
        lName: this.CreateAdminForm.get('lName')?.value,
        username: this.CreateAdminForm.get('username')?.value,
        password: this.CreateAdminForm.get('password')?.value,
        city: this.CreateAdminForm.get('city')?.value,
        isAdmin: true,
  
      };
  console.log(newUsers)
  
      this.userApi.CreateAdmin(newUsers) // creates new user
        .then(
          User => {
            if (this.error) {
  
             this.toastr.error('Admin Register', 'Error');
  
  
            } else {
              this.toastr.info('Admin Created', 'registered');
             
              this.User.unshift(User); //inserts new element at start of array
              this.resetError(); //clears error message
            }
          },
          error => this.handleError(error) //handles error message
        );
  
  
  }
  }