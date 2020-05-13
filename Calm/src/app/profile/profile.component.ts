import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../services/user.service';
import User from '../models/User'; // imports from user model
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  user: User;
  constructor(private cookieService: CookieService,
    private formBuilder: FormBuilder,
    public userApi:UserService,
    private toastr: ToastrService) { }
    error: string | undefined;
    errorMessage:string;
    cities: Array<string>;
    value: string;
    submitted = false;
    updateUserForm = this.formBuilder.group({
      text: ['', Validators.required]
    });
  data=this.cookieService.get('username');
  ngOnInit() {

    this.refresh();
   
    this.updateUserForm = this.formBuilder.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      username: ['', Validators.required],
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

  refresh(){
    return this.userApi.refreshMap()
    .then(
      cities => {
        this.cities= cities;
        console.log(this.cities)
      })
 
  }
  resetError() {
    this.error = undefined; //clears error message
  }
  get f() { return this.updateUserForm.controls; }

  onCitySelect(event) {
    this.value= event.target.value;
    console.log(this.value)
}
  updateUser() {
    this.submitted = true;
    /**
     * User form containing property values from API
     */
    const newUsers: User = {

      fName: this.updateUserForm.get('fName').value,
      lName: this.updateUserForm.get('lName').value,
      username: this.updateUserForm.get('username').value,
      city: this.value,
      password: this.updateUserForm.get('password').value,
      isAdmin: false

    };
console.log(newUsers)

    this.userApi.updateUser(newUsers) // creates new user
      .then(
        User => {
          if (this.error) { //conditinal statement that checks for errors in register component.

           this.toastr.error('User update', 'Error');


          } else {
            this.toastr.info('User updated', 'Updated');
           
            this.resetError(); //clears error message
          }
        },
        error => this.handleError(error) //handles error message
      );


}
}
