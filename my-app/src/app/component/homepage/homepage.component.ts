import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import axios from 'axios';

//This will use for the Mapping data from the json file therefore I need to make the interface for that. 
  interface WeatherData {
    current: {
      weather: string;
      temperature: number;
      uv: number;
      humidity: number;
      wind_speed: number;
      cloudiness: number;
    };
    recommendations: {
      clothing: string;
      accessories: string;
    };
    quarters: {
      time: string;
      summary: string;
      temperature: number;
      weather: string;
    }[];
  }
  
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css','./homepage.media.css'],
})
export class HomepageComponent implements OnInit {
  dateTime: Date | any;
  backgroundColor: string | undefined;
  weatherData: any[] = [];
  weatherAPI!: WeatherData;

  ngOnInit(): void {
    this.dateTime = new Date();
    setInterval(() => {
      this.dateTime = new Date();
      this.updateBackgroundColor();
    }, 1000);
    // Then in the Oninit we will declare teh animation to sto
    //trying to call the api 
    axios.get('http://localhost:9000/data',{withCredentials: true})
      .then(response => {
        this.weatherAPI=response.data;
        console.log( this.weatherAPI)
        console.log(this.weatherAPI.quarters[0].summary);
        this.UpdateWeatherData();
      })
      .catch(error => {
        console.error(error);
      });
  }
    //For the mapping data from the


    constructor() {
     
    }
    updateBackgroundColor(): void {
      const currentHour = this.dateTime.getHours();
  
      this.backgroundColor = currentHour >= 18 ? 'radial-gradient(60.56% 60.56% at 50% 39.44%, #8393A1 0%, #010B1B 83.33%)' : ' radial-gradient(50% 50% at 50% 50%, #BEE1FF 0%, #92CCFF 100%);';
      document.documentElement.style.setProperty('--background-color', this.backgroundColor);
    }

    getWeatherImage(condition:string):any {
    
      if (condition === 'Sunny'){
        return '../assets/Sunny.svg'
      }
      else if (condition === "Cloudy"){
        return '../assets/Sunnywithcloud.svg'
      }
       else if (condition === 'Rainy') {
        return '../assets/Rainy.svg';
      } 
      else if (condition === 'Partly cloudy'){
        return '../assets/Sunnywithcloud.svg';
      }
      else {
        return '../assets/Default.svg';
      }
    }

  

  UpdateWeatherData():void{
    this.weatherData = [
      { title: 'ตอนเช้า', temperature: '37°C', condition:'Cloudy' , boxStyles: { background: '#92CCFF' }, imageSrc: this.getWeatherImage(this.weatherAPI.quarters[0].summary)},
      { title: 'กลางวัน', temperature: '35°C', condition: 'Cloudy', boxStyles: { background: '#22A5E0' }, imageSrc: '../assets/Sunnywithcloud.svg '},
      { title: 'ตอนเย็น', temperature: '28°C', condition: 'Rainy', boxStyles: { background: '#146C94' }, imageSrc: '../assets/Thunder.svg' },
      { title: 'กลางคืน', temperature: '29°C', condition: 'Rainy', boxStyles: { background: '#010B1B' }, imageSrc: '../assets/CloudnyNight.svg' }
    ];
  
  }

}
