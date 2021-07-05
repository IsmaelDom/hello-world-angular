import { Component } from "@angular/core";
import { LoggingService } from "../LoggingService.service";
import { Persona } from "./persona.model";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    //styleUrls: ['./personas.component.css'] 
    styles:[`
        h1{
            color:blue;
        }
    `] 
})
export class PersonasComponent{
    deshabilitar = false;
    mensaje = '';
    titulo = 'Ingeniero';
    mostrar = false;
    personas: Persona[] = [new Persona('Juan', 'Perez'), 
                        new Persona('Laura', 'Juarez'),
                        new Persona('Karla', 'Lara')];

    constructor(private loggingService:LoggingService) {}

    agregarPersona(){
        this.mostrar = true;
        this.mensaje = 'Persona agregada';
    }

    personaAgregada(persona: Persona) {
        this.loggingService.enviaMensajeAConsola("Se agrega al arreglo la persona: " + persona.nombre + " " + persona.apellido);
        this.personas.push(persona);
    }
    /*modificarTitulo(event: Event){
        this.titulo = (<HTMLInputElement>event.target).value;
    }*/
}