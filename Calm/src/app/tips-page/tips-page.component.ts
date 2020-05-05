import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

/**
 * Tips-page Component.
 */

@Component({
  selector: 'app-tips-page',
  templateUrl: './tips-page.component.html',
  styleUrls: ['./tips-page.component.css']
})
export class TipsPageComponent implements OnInit {

/**
 * @ignore
 */
  constructor( private cookieService: CookieService) { }

/**
 * @ignore
 */
  ngOnInit(): void {
    this.cookieService.deleteAll();
  }

}
