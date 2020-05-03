import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../services/user.service';

/**
 * Support group component
 */
@Component({
  selector: 'app-support-groups',
  templateUrl: './support-groups.component.html',
  styleUrls: ['./support-groups.component.css']
})
export class SupportGroupsComponent implements OnInit {
/**
 * @ignore
 */
  constructor(public LoginService:UserService,
    private cookieService: CookieService) { }
   data=this.cookieService.get('username');
   show: boolean = false;


/**
 * @ignore
 */
  ngOnInit(): void {

    this.show = false;
   if(this.data != ""){
this.show = true;
   }
   else
   this.show = false;
  }

}
