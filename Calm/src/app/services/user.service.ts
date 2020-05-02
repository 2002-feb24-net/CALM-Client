import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import User from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  Url: string;
  header: any;
  formData:User;
  constructor(private http: HttpClient) { 
 
    this.Url = environment.ApiBaseUrl;
    const headerSettings: { [name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);

  }

  CreateUser(U: User) {
    return this.http.post<User>(`${this.Url}/api/Users/`, U)
      .toPromise();
  }
  getUsers() {
    return this.http.get<User[]>(`${this.Url}/api/Users/`)
      .toPromise();
  }
  getUsersByName(){
    return this.http.get<User>(`${this.Url}/api/Users/`+ this.formData.username +"/"+ this.formData.Password)
    .toPromise();
  }

}
