import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import axios from 'axios';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css','./homepage.media.css'],
})
export class HomepageComponent implements OnInit {
  dateTime: Date | any;
  backgroundColor: string | undefined;


  constructor() {}
  updateBackgroundColor(): void {
    const currentHour = this.dateTime.getHours();

    this.backgroundColor = currentHour >= 18 ? 'radial-gradient(60.56% 60.56% at 50% 39.44%, #8393A1 0%, #010B1B 83.33%)' : ' radial-gradient(50% 50% at 50% 50%, #BEE1FF 0%, #92CCFF 100%);';
    document.documentElement.style.setProperty('--background-color', this.backgroundColor);
  }
  ngOnInit(): void {
    this.dateTime = new Date();
    setInterval(() => {
      this.dateTime = new Date();
      this.updateBackgroundColor();
    }, 1000);
    

   
    // Then in the Oninit we will declare teh animation to stop
    axios.get('https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=7aee4d838ce8561cf5d3d9a5cd7bca9e')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  
  weatherData = [
    { title: 'ตอนเช้า', temperature: '37°C', condition: 'Sunny', boxStyles: { background: '#92CCFF' }, imageSrc: '../assets/Sunny.svg' },
    { title: 'กลางวัน', temperature: '35°C', condition: 'Cloudy', boxStyles: { background: '#22A5E0' }, imageSrc: '../assets/Sunnywithcloud.svg '},
    { title: 'ตอนเย็น', temperature: '28°C', condition: 'Rainy', boxStyles: { background: '#146C94' }, imageSrc: '../assets/Thunder.svg' },
    { title: 'กลางคืน', temperature: '29°C', condition: 'Rainy', boxStyles: { background: '#010B1B' }, imageSrc: '../assets/CloudnyNight.svg' }
  ];
}
