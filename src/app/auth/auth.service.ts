import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase'

@Injectable()
export class AuthService {
  token: string;
  constructor(private router: Router) { }

  signUp(email: string, password: string){
     firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(response => {
                      firebase.auth().currentUser.getToken()
                              .then(token => {
                                this.token = token;
                                this.router.navigate(["/"]);
                              }
                            )
                    })
                    .catch(err => console.log(err))
  }

  signin(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(response => {
      firebase.auth().currentUser.getToken()
      .then(token => {
        this.token = token;
        this.router.navigate(["/"]);
        }
      )
  })
    .catch(err => console.log(err))

  }
  logOut(){
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/signin']);
    
  }
  
  getToken(){
    firebase.auth().currentUser.getToken()
                    .then(token => this.token = token)
                    .catch(err => console.log(err))

    return this.token;
  }

  isAuth(){
    return this.token != null;
  }
}
