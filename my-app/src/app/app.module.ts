import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { WeatherBoxComponent } from './component/weather-box/weather-box/weather-box.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { WeeklypageComponent } from './component/weeklypage/weeklypage.component';
import { HourPageComponent } from './component/hour-page/hour-page.component';
// Remaining code...
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { ItemboxComponent } from './component/itembox/itembox.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    WeatherBoxComponent,
    SignUpComponent,
    WeeklypageComponent,
    HourPageComponent,
    NavBarComponent,
    ItemboxComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'', component: SignUpComponent},
      {path:'home',component:HomepageComponent},
      {path:'weekly',component:WeeklypageComponent},
      {path:'hour', component:HourPageComponent}
    ]
    )
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
