import { Component ,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-weather-box',
  templateUrl: './weather-box.component.html',
  styleUrls: ['./weather-box.component.css']
})
export class WeatherBoxComponent {
  @Input() title: string = '';
  @Input() temperature: string = '';
  @Input() condition: any = '';
  @Input() boxStyles: any = {};
  @Input() imageSrc: any = '';
  constructor() { }
}
