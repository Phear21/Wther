import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  loadingAnimationClass = 'loadingpic';
  // Get the class from the css first 

  ngOnInit(): void {
    setTimeout(()=>{
      this.loadingAnimationClass= '';
    },4500)

  }

}
