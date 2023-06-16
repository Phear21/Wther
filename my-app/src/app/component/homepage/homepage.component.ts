import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import axios from 'axios';
import { WeatherService } from '../../service/weather.service';
import { SearchService } from 'src/app/service/searchservice.service';


//This will use for the Mapping data from the json file therefore I need to make the interface for that. 
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

  }[];
  day: {
    day: string;
    weather: number;
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
  currentTime: string = '';
  
  constructor(private weatherService: WeatherService,private searchService: SearchService) {}

  ngOnInit(): void {
    this.dateTime = new Date();

   
   
    setInterval(() => {
      this.dateTime = new Date();
      this.updateBackgroundColor();
      this.currentTime = this.dateTime.toLocaleTimeString([], { hour: '2-digit', hour12: false });
      let searchTerm = this.searchService.getSearchTerm();
      if (!searchTerm) {
        searchTerm = 'Thailand';
      }
      
      axios.get(`https://backend-botnoi.onrender.com/${searchTerm}`,{withCredentials: true})
      // axios.get('http://127.0.0.1:8000/Thailand',{withCredentials: true})
        .then(response => {
          this.weatherAPI=response.data;
          this.UpdateWeatherData();
          // this.weatherService.setWeatherData(this.weatherAPI);
   
        })
        .catch(error => {
          console.error(error);
        });
  
  
    }, 1000);
    // Then in the Oninit we will declare teh animation to sto
    //trying to call the api 

   

  }
    //For the mapping data from the

    
    updateBackgroundColor(): void {
      const currentHour = this.dateTime.getHours();
  
      this.backgroundColor = currentHour >= 18 ? 'radial-gradient(60.56% 60.56% at 50% 39.44%, #8393A1 0%, #010B1B 83.33%)' : ' radial-gradient(50% 50% at 50% 50%, #BEE1FF 0%, #92CCFF 100%);';
      document.documentElement.style.setProperty('--background-color', this.backgroundColor);
    }

    getWeatherImage(condition:string,time:any):any {
      // make night and light conditon
      const parsedTime = parseInt(time); 
  
      if (parsedTime < 18){
        if (condition === 'Sunny' ){
          return '../assets/Sunny.svg'
        }
        else if (condition === "Cloudy"){
          return '../assets/Sunnywithcloud.svg'
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
          return '../assets/Sunnywithcloud.svg'
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


    //So first of all the item image have to be able to check the
    //weathter condition and create

    getRecommenedItems(condition:string):any[''] {
      if (condition === 'Sunny') {
        return [
          '../assets/sunglasses 1.svg',
          '../assets/sun-block 1.svg',
          '../assets/umbrella (1) 1.svg'
        ];
      } else if (condition === 'Partly cloudy') {
        return [
  
          '../assets/sun-block 1.svg',
          '../assets/umbrella (1) 1.svg'
        ];
        
      } else if (condition === 'Cloudy') {
        return [
          '../assets/cloudy-item-1.svg',
          '../assets/cloudy-item-2.svg',
          '../assets/cloudy-item-3.svg'
        ];
      }
        else if (condition === 'Rainy') {
        return [
          '../assets/rainy-item-1.svg',
          '../assets/rainy-item-2.svg',
          '../assets/rainy-item-3.svg'
        ];
      } else {
        return [
          '../assets/default-item-1.svg',
          '../assets/default-item-2.svg',
          '../assets/default-item-3.svg'
        ];
      }
    }

    
  
//This have to be in the function since the this. stuff not work with the outside
  UpdateWeatherData():void{
   
    this.weatherData = [

//the thing below have to be able to check the time 
      // { title: 'ตอนเช้า', temperature: '37°C', condition:'Cloudy' , boxStyles: { background: '#92CCFF' }, imageSrc: this.getWeatherImage(this.weatherAPI.quarters[0].summary)},
      { title: 'ตอนเช้า', temperature:  Math.floor(this.weatherAPI.hour[0].temp_c)+'°C', condition: this.weatherAPI.hour[0].condition, boxStyles: { background: '#22A5E0' }, imageSrc: this.getWeatherImage(this.weatherAPI.hour[0].condition,9)},
      { title: 'กลางวัน',  temperature: Math.floor(this.weatherAPI.hour[2].temp_c)+'°C', condition: 'Cloudy', boxStyles: { background: '#22A5E0' }, imageSrc: this.getWeatherImage(this.weatherAPI.hour[2].condition,15)},
      { title: 'ตอนเย็น',  temperature: Math.floor(this.weatherAPI.hour[3].temp_c)+'°C', condition: 'Rainy', boxStyles: { background: '#146C94' }, imageSrc: this.getWeatherImage(this.weatherAPI.hour[3].condition,18)},
      { title: 'กลางคืน',  temperature: Math.floor(this.weatherAPI.hour[4].temp_c)+'°C', condition: 'Rainy', boxStyles: { background: '#010B1B' }, imageSrc: this.getWeatherImage(this.weatherAPI.hour[4].condition,21) }
    ];
  
  }

}
