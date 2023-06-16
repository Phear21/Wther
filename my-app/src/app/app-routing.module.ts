import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { HourPageComponent } from './component/hour-page/hour-page.component';

const routes: Routes = [
  {path:'home',component:HomepageComponent},
  {path:'hour',component:HourPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
