import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { Validators, FormBuilder } from '@angular/forms';
import Gathering from '../models/Gathering';
/**
 * Event component
 */
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {
 
/**
 * @ignore
 */
  constructor( public eventApi:EventsService,
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
  ngOnInit() {

    this.EventTitleForm = this.formBuilder.group({
    title: ['', Validators.required],
  });
    
    this.eventApi.refreshevents();
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
  if (confirm('Are you sure to attend this event ?')) {
    this.eventApi.EventTitle(this.title)
      .then(res => {
       
      console.log(this.title)
        this.toastr.warning('added successfully', 'Attending event');
      },
        err => {
         
          console.log(err);
        })
  }}
 
}
