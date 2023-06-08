import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { WeatherBoxComponent } from './component/weather-box/weather-box/weather-box.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Remaining code...

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    WeatherBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule.forRoot([
      {path:'', component: HomepageComponent}
    ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
