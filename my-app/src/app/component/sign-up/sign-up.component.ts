import { Component, OnInit } from '@angular/core';
import liff from '@line/liff';
import {Router} from '@angular/router';

type UnPromise<T> = T extends Promise<infer X>? X : T; // use to check whether the 


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  loadingAnimationClass = 'loadingpic';
  profile: UnPromise<ReturnType<typeof liff.getProfile>> | undefined;
  


  constructor(private router:Router){}

  ngOnInit(): void {
    setTimeout(()=>{
      this.loadingAnimationClass= '';
    },4500);

    

      liff.init({
        liffId:'1661398192-oglAdg54'
      }).then(() =>{
    
      if(liff.isLoggedIn()){

        //if Line Is logged in It need to go check in the database whether user are record in there
        //then if there are user record it need to path to the homepage instead
        liff.getProfile().then( profile =>{
          this.profile = profile;
          console.log(this.profile)
          //check the database in this
          // if (name == 'Pu'){
          //   setTimeout(()=>{
          //     this.router.navigate(['/home']);
          //   },2000)
            
          // }
        
        }).catch(console.error);
      }else{
        liff.login()
      }

      }).catch((err)=>{
        console.log(err.code, err.message)
      })
    

  }

  recordUserInput() {
   
    var ageInput = (document.getElementById("ageInput") as HTMLInputElement).value;

    console.log("User input:", ageInput);
    // You can perform further actions with the user input here
  }
}

