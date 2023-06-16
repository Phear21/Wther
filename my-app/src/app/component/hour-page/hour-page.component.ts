import { Component, OnInit ,Input} from '@angular/core';
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

  }[];
  day: {
    day: string;
    weather: number;
  }[];
}



@Component({
  selector: 'app-hour-page',
  templateUrl: './hour-page.component.html',
  styleUrls: ['./hour-page.component.css']
})
export class HourPageComponent implements OnInit {
  dateTime: Date | any;
  backgroundColor: string | undefined;
  itemData: any[] = [];
  weatherAPI!: WeatherData;
  currentTime: string = '';

  @Input() WeatherData: any;
  constructor() {}
  ngOnInit(): void {
    this.dateTime = new Date();
    setInterval(() => {
      this.dateTime = new Date();
      this.updateBackgroundColor();
      this.currentTime = this.dateTime.toLocaleTimeString([], { hour: '2-digit', hour12: false });

    }, 1000);
    // Then in the Oninit we will declare teh animation to sto
    //trying to call the api 

    axios.get('https://backend-botnoi.onrender.com/Thailand',{withCredentials: true})
    // axios.get('http://127.0.0.1:8000/Thailand',{withCredentials: true})
      .then(response => {
        this.weatherAPI=response.data;
        this.UpdateWeatherData();
        console.log(this.weatherAPI)
      })
      .catch(error => {
        console.error(error);
      });
  }

 
  updateBackgroundColor(): void {
    const currentHour = this.dateTime.getHours();

    this.backgroundColor = currentHour >= 18 ? 'radial-gradient(60.56% 60.56% at 50% 39.44%, #8393A1 0%, #010B1B 83.33%)' : ' radial-gradient(50% 50% at 50% 50%, #BEE1FF 0%, #92CCFF 100%);';
    document.documentElement.style.setProperty('--background-color', this.backgroundColor);
  }

  getWeatherImage(condition:string,time:any):any {
    // make night and light conditon
    const parsedTime = parseInt(time); 

    if (parsedTime <= 18){
      if (condition === 'Sunny' ){
        return '../assets/Sunny.svg'
      }
      else if (condition === "Cloudy"){
        return '../assets/Sunnywithcloud.svg'
      }
       else if (condition === 'Rainy') {
        return '../assets/Rainy.svg';
      } 
      else if (condition === 'Partly cloudy'){
        return '../assets/PartlyCloud.svg';
      }
      else if (condition ==='Patchy rain possible'){
        return '../assets/Sunny Rain.svg'
      }
      else {
        return '../assets/Default.svg';
  
      }
    }
    else if (parsedTime > 18){
      if (condition === 'Sunny' ){
        return '../assets/night.svg'
      }
      else if (condition === "Cloudy"){
        return '../assets/Cloudny Night.svg'
      }
       else if (condition === 'Rainy') {
        return '../assets/Rainy.svg';
      } 
      else if (condition === 'Partly cloudy'){
        return '../assets/partlynight.svg';
      }
      else if (condition ==='Patchy rain possible'){
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

      ];
    } else if (condition === 'Partly cloudy') {
      return [

        '../assets/sun-block 1.svg',
        '../assets/umbrella (1) 1.svg'
      ];
      
    } else if (condition === 'Cloudy') {
      return [
        '../assets/umbrella (1) 1.svg',
        '../assets/raincoat 3.svg'
      ];
    }
    else if (condition === 'Overcast') {
      return [
    
      ];
    }
    else if (condition === 'Patchy rain possible') {
      return [
        '../assets/umbrella (1) 1.svg',
        '../assets/raincoat 3.svg',
        '../assets/cap 1.svg',
      ];
    }
    else if (condition === 'Clear') {
      return [
    
      ];
    }
      else if (condition === 'Rainy') {
      return [
        '../assets/umbrella (1) 1.svg',
        '../assets/raincoat 3.svg'
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
 console.log(this.weatherAPI.hour[0].condition)
  this.itemData = [

//the thing below have to be able to check the time 
    // { title: 'ตอนเช้า', temperature: '37°C', condition:'Cloudy' , boxStyles: { background: '#92CCFF' }, imageSrc: this.getWeatherImage(this.weatherAPI.quarters[0].summary)},
    { time: '09:00',  condition: this.weatherAPI.hour[0].condition, boxStyles: { background: 'trasparent' }, imageSrc: this.getRecommenedItems(this.weatherAPI.hour[0].condition)},
    { time: '12:00',  condition: this.weatherAPI.hour[1].condition, boxStyles: { background: 'trasparent' }, imageSrc: this.getRecommenedItems(this.weatherAPI.hour[1].condition)},
    { time: '15:00', condition: this.weatherAPI.hour[2].condition, boxStyles: { background: 'trasparent' },imageSrc: this.getRecommenedItems(this.weatherAPI.hour[2].condition)},
    { time: '18:00',  condition: this.weatherAPI.hour[3].condition, boxStyles: { background: 'trasparent' }, imageSrc: this.getRecommenedItems(this.weatherAPI.hour[3].condition)},
    { time: '21:00',  condition: this.weatherAPI.hour[4].condition, boxStyles: { background: 'trasparent' }, imageSrc: this.getRecommenedItems(this.weatherAPI.hour[4].condition)},
    { time: '24:00',   condition: this.weatherAPI.hour[5].condition , boxStyles: { background: 'trasparent' }, imageSrc: this.getRecommenedItems(this.weatherAPI.hour[5].condition)},
    { time: '03:00', condition: this.weatherAPI.hour[6].condition, boxStyles: { background: 'trasparent' }, imageSrc: this.getRecommenedItems(this.weatherAPI.hour[6].condition)},
    { time: '06:00',  condition: this.weatherAPI.hour[7].condition, boxStyles: { background: 'trasparent' }, imageSrc: this.getRecommenedItems(this.weatherAPI.hour[7].condition) }
  ];

}


}

