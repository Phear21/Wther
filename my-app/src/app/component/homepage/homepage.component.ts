import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  dateTime: Date | any;

  constructor() {}

  ngOnInit(): void {
    this.dateTime = new Date();
  }

  weatherData = [
    { title: 'Weather Box 1', temperature: '25°C', condition: 'Sunny', boxStyles: { background: '#FF0000' }, imageSrc: '../assets/Sunny.svg' },
    { title: 'Weather Box 2', temperature: '20°C', condition: 'Cloudy', boxStyles: { background: '#00FF00' }, imageSrc: 'path/to/image2.jpg' },
    { title: 'Weather Box 3', temperature: '15°C', condition: 'Rainy', boxStyles: { background: '#0000FF' }, imageSrc: 'path/to/image3.jpg' }
  ];
}
