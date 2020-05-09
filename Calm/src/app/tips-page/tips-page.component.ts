import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../services/user.service';

/**
 * Tips-page Component.
 */

@Component({
  selector: 'app-tips-page',
  templateUrl: './tips-page.component.html'
})
export class TipsPageComponent implements OnInit {

/**
 * @ignore
 */
  constructor( private cookieService: CookieService, public userApi: UserService) { }

/**
 * @ignore
 */
  ngOnInit(): void {
    this.cookieService.deleteAll();
    this.userApi.refreshList();
  }

}
