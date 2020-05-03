import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipsPageComponent } from './tips-page/tips-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound.component';
import { EventsComponent } from './events/events.component';
import { SupportGroupsComponent } from './support-groups/support-groups.component';
import { QuestionsComponent } from './questions/questions.component';
/**
 * Routing paths for all components on the user view page. 
 */
const routes: Routes = [
  { path: '', component: TipsPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'events', component: EventsComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'support-groups', component: SupportGroupsComponent },
  { path: 'notfound', component: NotfoundComponent },
];
/**
 * imports and exports of Router
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
