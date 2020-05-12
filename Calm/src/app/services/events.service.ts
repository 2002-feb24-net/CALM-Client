import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import Gathering from '../models/Gathering';
/**
 * injectable method that exports event service
 */
@Injectable({
  providedIn: 'root'
})
export class EventsService {
  Url: string;
  header: any;
  list: Gathering[];
  formData:Gathering;
/**
 * @ignore
 */
  constructor(private http: HttpClient,private CookieService: CookieService) { 
  this.Url = environment.ApiBaseUrl;
  const headerSettings: { [name: string]: string | string[]; } = {};
  this.header = new HttpHeaders(headerSettings);
  }
  refreshevents(){
    this.http.get<Gathering[]>(`${this.Url}/api/Gathering/events`)
    .toPromise()
    .then(res => this.list = res as Gathering[]);
  }

  refreshgroups(){
    this.http.get<Gathering[]>(`${this.Url}/api/Gathering/groups`)
    .toPromise()
    .then(res => this.list = res as Gathering[]);
  }

  EventTitle(title: string){
    const username =this.CookieService.get('username');
    const password =this.CookieService.get('password');
    return this.http.post<string>(`${this.Url}api/Gathering/${username}/${password}/`+ title, title)
    .toPromise();
  }

  CreateGathering(Gathering: Gathering){
    const username =this.CookieService.get('username');
    const password =this.CookieService.get('password');
    return this.http.post<Gathering>(`${this.Url}/api/Gathering/${username}/${password}`, Gathering)
    .toPromise();

  }
}
