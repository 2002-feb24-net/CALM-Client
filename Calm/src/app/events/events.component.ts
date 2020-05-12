import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
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
  constructor( public eventApi:EventsService,private cookieService: CookieService,private toastr: ToastrService) { }
  data=this.cookieService.get('username');
   show: boolean = false;
   shownotlogged: boolean = false;
  /**
 * @ignore
 */
  ngOnInit(): void {

    
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

 
}
