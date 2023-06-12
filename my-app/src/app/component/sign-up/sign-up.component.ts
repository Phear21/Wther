import { Component, OnInit } from '@angular/core';
import liff from '@line/liff';


type UnPromise<T> = T extends Promise<infer X>? X : T;
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  loadingAnimationClass = 'loadingpic';
  profile: UnPromise<ReturnType<typeof liff.getProfile>> | undefined;
  // Get the class from the css first 


  ngOnInit(): void {
    setTimeout(()=>{
      this.loadingAnimationClass= '';
    },4500)


      liff.init({
        liffId:'1661398192-oglAdg54'
      }).then(() =>{
    
      if(liff.isLoggedIn()){
        liff.getProfile().then( profile =>{
          this.profile = profile;
          console.log(this.profile)
        }).catch(console.error);
      }else{
        liff.login()
      }

      }).catch((err)=>{
        console.log(err.code, err.message)
      })
    

  }

}
