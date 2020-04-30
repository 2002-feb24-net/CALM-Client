import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipsPageComponent } from './tips-page/tips-page.component';


const routes: Routes = [
  { path: '', component: TipsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
