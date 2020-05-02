import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-support-groups',
  templateUrl: './support-groups.component.html',
  styleUrls: ['./support-groups.component.css']
})
export class SupportGroupsComponent implements OnInit {
  
  constructor(public LoginService:UserService,
    private cookieService: CookieService) { }
   data=this.cookieService.get('Username');
   show: boolean = false;
  ngOnInit(): void {

    this.show = false;
   if(this.data != ""){
this.show = true;
   }
   else
   this.show = false;
  }

}
