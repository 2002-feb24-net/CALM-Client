import { Component, OnInit } from '@angular/core'; //imports component OnInit form
import { CookieService } from 'ngx-cookie-service'; // imports cookie service from  ngx
/**
 * navbar component
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
// a constructor with a cookie service
  constructor(
    private cookieService: CookieService
  ) { }

<<<<<<< HEAD
=======
    /**
     * navbar containing cookie service set to be a false value.
     */

>>>>>>> 6539ffa85b0c04b221d051886ddd51043ee7c68a

    data=this.cookieService.get('username');

    show: boolean = false;
   ngOnInit(): void {
    // A conditional statement.
     this.show = false;
    if(this.data != ""){
 this.show = true;
    }
    else
    this.show = false;
   }

}
