import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(
    private cookieService: CookieService
  ) { }




    data=this.cookieService.get('username');

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
