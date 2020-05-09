import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  constructor(private cookieService: CookieService) { }
  data=this.cookieService.get('username');
  ngOnInit(): void {
  }

}
