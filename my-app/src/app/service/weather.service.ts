import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private weatherData:any[]=[]

  setWeatherData(data:any[]):void{
    this.weatherData=data
  }
  getWeatherData(): any[] {
    return this.weatherData;
  }
  constructor() { }
}
