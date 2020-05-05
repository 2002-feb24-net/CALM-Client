import { Component, OnInit } from '@angular/core'; // imports component, onInit

import { CookieService } from 'ngx-cookie-service'; // importing cookie service as ngx

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
 * constructor that contains a cookie service
 */
  constructor( private cookieService: CookieService) { }

/**
 * Method that returns Nothiing.
 */
  ngOnInit(): void {
    this.cookieService.deleteAll();
  }

}
