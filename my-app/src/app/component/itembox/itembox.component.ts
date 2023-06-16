import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-itembox',
  templateUrl: './itembox.component.html',
  styleUrls: ['./itembox.component.css']
})
export class ItemboxComponent {
  @Input() time: string = '';
  @Input() condition: any = '';
  @Input() boxStyles: any = {};
  @Input() imageSrc: string[] = [];
  constructor() { }

  getFirstImg():string {
    return this.imageSrc.length > 0 ? this.imageSrc[0] : '';
  }
  getSecondImg():string {
    return this.imageSrc.length > 1 ? this.imageSrc[1] : '';
  }
  getThirdImg():string {
    return this.imageSrc.length > 2 ? this.imageSrc[2] : '';
  }

}
