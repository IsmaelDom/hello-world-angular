import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { LoginService } from './login/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hola Mundo desde Angular';

  constructor(private loginService: LoginService){}

  ngOnInit(): void {
    //Se agrega configuración de firebase
    firebase.default.initializeApp({
      apiKey: "",
      authDomain: "",
    })
  }

  isAutenticado(){
    return this.loginService.isAutenticado();
  }

  salir(){
    this.loginService.logout();
  }
}
