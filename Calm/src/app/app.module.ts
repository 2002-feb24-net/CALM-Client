import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TipsPageComponent } from './tips-page/tips-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {CookieService} from 'ngx-cookie-service';
import { NotfoundComponent } from './notfound.component';
import { EventsComponent } from './events/events.component';
import { SupportGroupsComponent } from './support-groups/support-groups.component';
import { QuestionsComponent } from './questions/questions.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmineditComponent } from './adminedit/adminedit.component';
import { UserService } from './services/user.service';



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
    AdmineditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [CookieService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

