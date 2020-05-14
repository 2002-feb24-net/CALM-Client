import { Component, OnInit } from '@angular/core'; // imports component, onInit

import { CookieService } from 'ngx-cookie-service'; // imports cookieservice
import { UserService } from '../services/user.service';  // imports userservice

/**
 * Tips-page Component.
 */

@Component({
  selector: 'app-tips-page',
  templateUrl: './tips-page.component.html'
})
export class TipsPageComponent implements OnInit {

/**
 * constructor that contains a cookie service
 */
  constructor( private cookieService: CookieService, public userApi: UserService) { }

/**
 * Method that returns Nothiing.
 */
  ngOnInit(): void {
    this.cookieService.deleteAll();
    this.userApi.refreshList();

  }

}
