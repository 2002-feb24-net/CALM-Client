import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';


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
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//import { DynamicTestModule} from '@angular/core/testing/testing'

/**
 * imports a cookieservice and a tostrmodule.
 */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {CookieService} from 'ngx-cookie-service';
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

import { ProfileComponent } from './profile/profile.component';

import { EventsService } from './services/events.service';
import { AddgatheringComponent } from './adminedit/addgathering/addgathering.component';
import { ViewmyselfComponent } from './profile/viewmyself/viewmyself.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TipsPageComponent,
    LoginComponent,
    RegisterComponent,
    EventsComponent,
    SupportGroupsComponent,
    QuestionsComponent,
    AdminloginComponent,
    AdmineditComponent,
    UserviewComponent,
    ProfileComponent,
    AddgatheringComponent,
    ViewmyselfComponent
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
  providers: [CookieService, UserService, EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

