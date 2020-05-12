import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import User from '../models/User';
import { CookieService } from 'ngx-cookie-service';
/**
 * root injection provided and exported user services
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {
  Url: string;
  header: any;
  list: User[];
  cities: Array<string>;
/**
 * user form with a private Http client.
 */
  formData:User;
  constructor(private http: HttpClient,private CookieService: CookieService) {

    this.Url = environment.ApiBaseUrl;
    const headerSettings: { [name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);

  }


  /**
 * creats users using the api url
 * @param User
 */
  CreateUser(User: User) {
    return this.http.post<User>(`${this.Url}/api/Users/`, User)
    .toPromise();
  }


  CreateAdmin(User: User) {
    const username =this.CookieService.get('username');
    const password =this.CookieService.get('password');
    return this.http.post<User>(`${this.Url}/api/Admin/${username}/${password}`, User)
    .toPromise();
  }
  
  /** gets users from using api url.
   * @param User
   */
  getUsers() {
    return this.http.get<User[]>(`${this.Url}/api/Users/`)
      .toPromise();
  }
  /**
   * this method gets users by their given name respectively.
   */
  getUsersByName(){
    return this.http.get<User>(`${this.Url}/api/Users/`+ this.formData.username +"/"+ this.formData.password)
    .toPromise();
  }

  getUsersBycookie(){
    const username =this.CookieService.get('username');
    const password =this.CookieService.get('password');
    return this.http.get<User>(`${this.Url}/api/Users/${username}/${password}`)
    .toPromise();
  }
  refreshList(){
    this.http.get<User[]>(`${this.Url}/api/Users`)
    .toPromise()
    .then(res => this.list = res as User[]);
  }

  refreshMap(){
 return   this.http.get<Array<string>>(`${this.Url}/api/Map`)
    .toPromise()
  }
  
  deleteUser(username: string,password: string) {
    return this.http.delete<User>(`${this.Url}/api/Users/`+ username +"/"+ password, { headers: this.header });
  }

  updateUser(User: User) {
    const username =this.CookieService.get('username');
    const password =this.CookieService.get('password');
    return this.http.put<User>(`${this.Url}api/Users/${username}/${password}`,User).toPromise()
  }

  
}
