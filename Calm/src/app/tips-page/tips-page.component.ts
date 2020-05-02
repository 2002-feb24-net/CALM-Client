import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tips-page',
  templateUrl: './tips-page.component.html',
  styleUrls: ['./tips-page.component.css']
})
export class TipsPageComponent implements OnInit {

  constructor( private cookieService: CookieService) { }

  ngOnInit(): void {
    this.cookieService.deleteAll();
  }

}
