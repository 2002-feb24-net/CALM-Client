import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
/**
 * injectable method that exports event service
 */
@Injectable({
  providedIn: 'root'
})
export class EventsService {
  Url: string;
  header: any;
  list: Event[];
  formData:Event;
/**
 * @ignore
 */
  constructor(private http: HttpClient,private CookieService: CookieService) { 
  this.Url = environment.ApiBaseUrl;
  const headerSettings: { [name: string]: string | string[]; } = {};
  this.header = new HttpHeaders(headerSettings);
  }
  refreshevents(){
    this.http.get<Event[]>(`${this.Url}/api/Gathering`)
    .toPromise()
    .then(res => this.list = res as Event[]);
  }

}
