import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { WeatherBoxComponent } from './component/weather-box/weather-box/weather-box.component';
import { CommonModule } from '@angular/common';

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
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
