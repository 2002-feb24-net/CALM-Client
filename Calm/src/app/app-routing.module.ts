import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipsPageComponent } from './tips-page/tips-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound.component';
import { EventsComponent } from './events/events.component';
import { SupportGroupsComponent } from './support-groups/support-groups.component';
import { QuestionsComponent } from './questions/questions.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmineditComponent } from './adminedit/adminedit.component';

const routes: Routes = [
  { path: '', component: TipsPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'adminedit', component: AdmineditComponent },
  { path: 'events', component: EventsComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'support-groups', component: SupportGroupsComponent },
  { path: 'notfound', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
