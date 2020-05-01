import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import user from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: user[] = [];

  error: string | undefined;


  errorMessage:string;    
  UserForm = this.formBuilder.group({
    text: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
  }

}