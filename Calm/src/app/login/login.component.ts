import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import User from '../models/User';
/**
 * login component
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  User: User[] = [];
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
  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
  }

}
