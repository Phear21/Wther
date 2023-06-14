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
    { title: 'ตอนเช้า', temperature: '37°C', condition: 'Sunny', boxStyles: { background: '#92CCFF' }, imageSrc: '../assets/Sunny.svg' },
    { title: 'กลางวัน', temperature: '35°C', condition: 'Cloudy', boxStyles: { background: '#22A5E0' }, imageSrc: '../assets/Sunnywithcloud.svg '},
    { title: 'ตอนเย็น', temperature: '28°C', condition: 'Rainy', boxStyles: { background: '#146C94' }, imageSrc: '../assets/Thunder.svg' },
    { title: 'กลางคืน', temperature: '29°C', condition: 'Rainy', boxStyles: { background: '#010B1B' }, imageSrc: '../assets/CloudnyNight.svg' }
  ];
}
