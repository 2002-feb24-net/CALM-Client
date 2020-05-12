import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../services/user.service';
import { EventsService } from '../services/events.service';
import { FormBuilder, Validators } from '@angular/forms';

/**
 * Support group component
 */
@Component({
  selector: 'app-support-groups',
  templateUrl: './support-groups.component.html'
})
export class SupportGroupsComponent implements OnInit {
/*
 * @ignore
 */
  constructor(public LoginService:UserService,
    public eventApi:EventsService,
    private formBuilder: FormBuilder,
    private cookieService: CookieService,private toastr: ToastrService) { }
   data=this.cookieService.get('username');
   show: boolean = false;
   value: string;
   title:string;
   shownotlogged: boolean = false;
   EventTitleForm = this.formBuilder.group({
    text: ['', Validators.required]
  });

/**
 * @ignore
 */
  ngOnInit(): void {
    this.eventApi.refreshgroups();
    this.show = false;
    if(this.data != ""){
 this.show = true;
    }
    else
    this.show = false;

    this.shownotlogged = true;
    if(this.data != ""){
 this.shownotlogged = false;
    }
    else
    this.shownotlogged = true;
  }

  onTitleSelect(event) {
    this.value= event.target.value;
    console.log(this.value)
}


AddUser(){
   this.title= this.value;
   console.log(this.title)
  if (confirm('Are you sure to join this group ?')) {
    this.eventApi.EventTitle(this.title)
      .then(res => {
       
      console.log(this.title)
        this.toastr.warning('added successfully', 'Joined Group');
      },
        err => {
         
          console.log(err);
        })
  }}
 
}

