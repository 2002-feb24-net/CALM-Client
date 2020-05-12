import { Component, OnInit } from '@angular/core'; //imports component OnInit form
import { CookieService } from 'ngx-cookie-service'; // imports cookie service from  ngx
/**
 * navbar component
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
// a constructor with a cookie service
  constructor(
    private cookieService: CookieService
  ) { }



    /**
     * navbar containing cookie service set to be a false value.
     */

    data=this.cookieService.get('username');
    admin= this.cookieService.get('isAdmin')
    show: boolean = false;
    showA: boolean = false;
   ngOnInit(): void {
    // A conditional statement.
     this.show = false;
    if(this.data != ""){
 this.show = true;
    }
    else
    this.show = false;
   

   this.showA = false;
   if(this.admin == "true"){
    this.showA = true;
       }
}
}