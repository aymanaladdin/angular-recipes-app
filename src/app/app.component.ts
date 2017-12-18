import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit{

  constructor(){
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCbpufgwAW_IEyXv_NumW2UU28hBR2245I",
      authDomain: "ng-http-testing.firebaseapp.com",
    })
  }

}
