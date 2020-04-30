import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { UserLoginComponent } from './user-login/user-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegisterComponent } from './register/register.component';
import { LogOutComponent } from './log-out/log-out.component';

@NgModule({
  declarations: [
    AppComponent,
    //LoginComponent,
    UserLoginComponent,
    RegisterComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
