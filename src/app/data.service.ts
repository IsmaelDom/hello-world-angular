import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from './personas/persona.model';

@Injectable()
export class DataService {
    constructor(private httpClient: HttpClient){}

    cargarPersonas(): Observable<Persona[]>{
        return this.httpClient.get<Persona[]>('https://lista-personas-41ae3-default-rtdb.firebaseio.com/personas.json');
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
}