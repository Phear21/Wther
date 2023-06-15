import { Component, OnInit } from '@angular/core';
import liff from '@line/liff';
import {Router} from '@angular/router';
import axios from 'axios';

type UnPromise<T> = T extends Promise<infer X>? X : T; // use to check whether the 


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  loadingAnimationClass = 'loadingpic';
  profile: UnPromise<ReturnType<typeof liff.getProfile>> | undefined;
  
  selectedGender!: string;

  constructor(private router:Router){}

  ngOnInit(): void {
    setTimeout(()=>{
      this.loadingAnimationClass= '';
    },4500);

    liff.init({
      liffId: '1661398192-oglAdg54'
    }).then(() => {
      if (liff.isLoggedIn()) {
        liff.getProfile().then((profile) => {
          this.profile = profile;
          console.log(this.profile);
    
          const name = this.profile?.displayName;
          const userID = this.profile?.userId;
    
          const userData = {
            user_id: userID,
            name: name,
            age: '',
            gender: '',
          };
          console.log( JSON.stringify(userData));
    
          axios.post('https://backend-botnoi.onrender.com/',  JSON.stringify(userData),{
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(response => {
              console.log(response.data);
        
              axios.get('https://backend-botnoi.onrender.com/')
                .then(response => {
                  console.log(response.data);
                  // Handle the response from the GET request
                  // Perform further actions based on the response
                })
                .catch(error => {
                  // Handle the error from the GET request
                  console.error(error);
                });
            })
            .catch(error => {
              // Handle the error from the POST request
              console.error(error);
            });
        }).catch(console.error);
      } else {
        liff.login();
      }
    }).catch((err) => {
      console.log(err.code, err.message);
    });
    
  }


  // log in เข้า มา ส่ง user id ไปเช็คก่อน 
  // แล้วก็ค่อย ถ้ายังไม่ได้ log in ก็ให้เก็บอายุ
  recordUserInput() {
    const ageInput = (document.getElementById("ageInput") as HTMLInputElement).value;
    const genderInput = this.selectedGender;
   

    const userinfo = { 
      age: ageInput,
      gender: genderInput,

    };
    const jsonData = JSON.stringify(userinfo);
    console.log(jsonData)
    // You can perform further actions with the user input here
  }
  
}

