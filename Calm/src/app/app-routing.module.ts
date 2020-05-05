import { NgModule } from '@angular/core'; //imports from ngmodule
import { Routes, RouterModule, Router } from '@angular/router'; // imports angular routing module
import { TipsPageComponent } from './tips-page/tips-page.component'; // imports from tipspage component
import { LoginComponent } from './login/login.component'; // imports from login component
import { RegisterComponent } from './register/register.component'; // imports from register component
import { NotfoundComponent } from './notfound.component'; // imports from the Notfound component.
import { EventsComponent } from './events/events.component'; // imports event component
import { SupportGroupsComponent } from './support-groups/support-groups.component';
import { QuestionsComponent } from './questions/questions.component'; // imports questions component

/**
 * Routing paths for all components on the user view page.
 */

import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmineditComponent } from './adminedit/adminedit.component';
/**
 * routing paths for each component.
 */
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
/**
 * imports and exports of Router
 */
@NgModule({
  imports: [RouterModule.forRoot(routes), Router],
  exports: [RouterModule, Router]
})
export class AppRoutingModule { }
