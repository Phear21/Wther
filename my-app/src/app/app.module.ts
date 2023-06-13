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
// Remaining code...
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    WeatherBoxComponent,
    SignUpComponent,
    WeeklypageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'', component: SignUpComponent},
      {path:'home',component:HomepageComponent},
      {path:'weekly',component:WeeklypageComponent}
    ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
