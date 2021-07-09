import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';
import { Persona } from './personas/persona.model';

@Injectable()
export class DataService {
    constructor(private httpClient: HttpClient, private loginService: LoginService){}

    cargarPersonas(): Observable<Persona[]>{
        const token = this.loginService.getIdToken();
        return this.httpClient.get<Persona[]>('https://lista-personas-41ae3-default-rtdb.firebaseio.com/personas.json?auth=' + token);
    }

    //Método para guardar personas en base de datos Firebase
    guardarPersonas(personas: Persona[]){
        //Url de la base de Firebase, al final el nombre del objeto con extensión .json
        //La 1 era vez se usa post para guardar las personas, despues se cambia a put para actualizar las personas y no repetirlas
        this.httpClient.put('https://lista-personas-41ae3-default-rtdb.firebaseio.com/personas.json', personas)
            .subscribe(
                response => {
                    console.log("Resultado guardar Personas " + response);
                },
                error => console.log("Error al guardar Personas " + error)
            );
    }

    modificarPersona(index: number, persona: Persona){
        let url: string;
        url = 'https://lista-personas-41ae3-default-rtdb.firebaseio.com/personas/' + index + '.json';
        this.httpClient.put(url, persona)
            .subscribe(
                response => console.log("Resultado modificar Persona: " + response),
                error => console.error("Error al modificar Persona: " + error)
            )
    }

    eliminarPersona(index: number){
        let url: string;
        url = 'https://lista-personas-41ae3-default-rtdb.firebaseio.com/personas/' + index + '.json';
        this.httpClient.delete(url)
            .subscribe(
                response => console.log("Resultado eliminar Persona: " + response),
                error => console.error("Error al eliminar Persona: " + error)
            )
    }
}