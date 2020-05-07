import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/**
 * imports of all components from each individual component
 */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TipsPageComponent } from './tips-page/tips-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
/**
 * imports HTTP clientmodule and reactive form.
 */
import { HttpClientModule, HttpRequest } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
/**
 * imports a cookieservice and a tostrmodule.
 */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {CookieService} from 'ngx-cookie-service';
import { NotfoundComponent } from './notfound.component';
import { EventsComponent } from './events/events.component';
import { SupportGroupsComponent } from './support-groups/support-groups.component';
import { QuestionsComponent } from './questions/questions.component';


/**
 * ngModule that declares all components
 */

import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmineditComponent } from './adminedit/adminedit.component';
import { UserService } from './services/user.service';
import { UserviewComponent } from './adminedit/userview/userview.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TipsPageComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    EventsComponent,
    SupportGroupsComponent,
    QuestionsComponent,
    AdminloginComponent,
    AdmineditComponent,
    UserviewComponent
  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([])
  ],
  providers: [CookieService, UserService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }

