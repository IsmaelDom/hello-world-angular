import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hola Mundo desde Angular';

  ngOnInit(): void {
    //Se agrega configuración de firebase
    firebase.default.initializeApp({
      apiKey: "",
      authDomain: "",
    })
  }
}
