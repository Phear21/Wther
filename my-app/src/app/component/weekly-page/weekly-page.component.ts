import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import axios from 'axios';
interface WeatherData {
  location: {
    name: string;
    country: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
  };
  condition: {
    text: string;
  };
  uv: number;
  wind_kph: number;
  wind_dir: string;
  humidity: number;
  cloud: number;
  hour: {
    time: string;
    temp_c: number;
    temp_f: number;
    condition: string;
    day: string;
    weather: number;
    weathermin:number;
    weathermax:number;

  }[];
  day: {
    day: string;
    weather: number;
    weathermin:number;
    weathermax:number;

  }[];
}

@Component({
  selector: 'app-weekly-page',
  templateUrl: './weekly-page.component.html',
  styleUrls: ['./weekly-page.component.css']
})
export class WeeklyPageComponent {
  dateTime: Date | any;
  backgroundColor: string | undefined;
  itemData: any[] = [];
  weatherAPI!: WeatherData;
  currentTime: string = '';


  constructor() {}
  ngOnInit(): void {
    this.dateTime = new Date();
    setInterval(() => {
      this.dateTime = new Date();

      this.currentTime = this.dateTime.toLocaleTimeString([], { hour: '2-digit', hour12: false });

    }, 1000);
    // Then in the Oninit we will declare teh animation to sto
    //trying to call the api 

    axios.get('https://backend-botnoi.onrender.com/Thailand',{withCredentials: true})
    // axios.get('http://127.0.0.1:8000/Thailand',{withCredentials: true})
      .then(response => {
        this.weatherAPI=response.data;
        console.log(this.weatherAPI)
      })
      .catch(error => {
        console.error(error);
      });
  }
  getWeatherImage(condition:string,time:any):any {
    // make night and light conditon
    const parsedTime = parseInt(time); 

    if (parsedTime < 18){
      if (condition === 'Sunny' ){
        return '../assets/Sunny.svg'
      }
      else if (condition === "Cloudy"){
        return '../assets/Cloudy.svg'
      }
       else if (condition === 'Rainy' || condition ==='Heavy rain') {
        return '../assets/Rainy.svg';
      } 
   
      else if (condition === 'Partly cloudy'){
        return '../assets/PartlyCloud.svg';
      }
      else if (condition ==='Patchy rain possible'|| condition ==='Light rain shower'){
        return '../assets/Sunny Rain.svg'
      }
      else if (condition === "Overcast"){
        return '../assets/Cloudy.svg'
      }
      else if (condition ==='Light rain'){
        return '../assets/Sunny Rain.svg'
      }
    
      else {
        return '../assets/Default.svg';
  
      }
    }
    else if (parsedTime >= 18){
      if (condition === 'Sunny' ){
        return '../assets/night.svg'
      }
      else if (condition === "Cloudy"){
        return '../assets/Cloudny Night.svg'
      }
       else if (condition === 'Rainy') {
        return '../assets/Rainy.svg';
      } 
      else if (condition === 'Clear') {
        return '../assets/night.svg'
      }
      else if (condition === 'Partly cloudy'){
        return '../assets/partlynight.svg';
      }
      else if (condition ==='Patchy rain possible'){
        return '../assets/Sunny Rain.svg'
      }
      else if (condition === "Overcast"){
        return '../assets/Sunnywithcloud.svg'
      }
      else if (condition ==='Light rain'){
        return '../assets/Sunny Rain.svg'
      }
      else {
        return '../assets/Default.svg';
  
      }
    }
    
  }
}
