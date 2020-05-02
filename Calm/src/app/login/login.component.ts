import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import User from '../models/User';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : User;
  error: string | undefined;
 

  errorMessage:string;    
  UserForm = this.formBuilder.group({
    text: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    public LoginService:UserService,
    private cookieService: CookieService) { }

  ngOnInit(): void {
 
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
      isAdmin: false,
    }
  }
 
  Login(f: NgForm) {
 
    return  this.LoginService.getUsersByName().then(
      
         user => {
        
           this.user = user;
           console.log(this.user.username);
           console.log(this.user);
           console.log(this.user.Id);
           this.cookieService.set('User',`${this.user.Id}`);
           this.cookieService.set('Username',`${this.user.username}`);
           if(this.user.username == "admin")
           {
            this.toastr.warning('No admin zone', 'username admin invalid');
             this.resetForm();
         
           }
           else{
            this.toastr.info('Get By Id successfully', 'Get user by id');
       this.router.navigate(['/support-groups']);

           }
         },
         error => {
          this.handleError(error); //handles error
    
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
