import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import * as firebase from 'firebase';

@Injectable()
export class LoginService {
    token: string = '';

    constructor(private router: Router){}

    login(email: string, password: string) {
        firebase.default.auth().signInWithEmailAndPassword(email, password)
                .then(
                    response => {
                        firebase.default.auth().currentUser?.getIdToken().then(
                            token => {
                                this.token = token;
                                this.router.navigate(['/']);
                            }
                        )
                    }
                )
    }

    getIdToken(){
        return this.token;
    }
}