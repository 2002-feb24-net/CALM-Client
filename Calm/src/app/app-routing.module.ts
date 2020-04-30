import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipsPageComponent } from './tips-page/tips-page.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: TipsPageComponent },
  //{ path: '/login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
