import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PersonasService } from "../personas.service";
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
export class PersonasComponent implements OnInit {
    deshabilitar = false;
    mensaje = '';
    titulo = 'Ingeniero';
    mostrar = false;
    /*personas: Persona[] = [new Persona('Juan', 'Perez'), 
                        new Persona('Laura', 'Juarez'),
                        new Persona('Karla', 'Lara')];//Se mueve a el servicio*/
    personas: Persona[] =[];

    constructor(private personasService: PersonasService,
                private router: Router) {}

    ngOnInit(): void {
        this.personasService.obtenerPersonas()
            .subscribe(
                (persons: Persona[]) => {
                    this.personas = persons;
                    this.personasService.setPersonas(persons);
                }
            );
    }

    agregarPersona(){
        this.mostrar = true;
        this.mensaje = 'Persona agregada';
    }

    agregar(){
        this.router.navigate(['personas/agregar']);
    }
    /*personaAgregada(persona: Persona) {
        //this.loggingService.enviaMensajeAConsola("Se agrega al arreglo la persona: " + persona.nombre + " " + persona.apellido);//Se mueve a el servicio
        //this.personas.push(persona);//Se mueve a el servicio
        this.personasService.personaAgregada(persona);//Llamado a el servicio
    }*/ //Ya no es neceseario el metodo ya que el servicio se ejecuta en el componente formulario
    /*modificarTitulo(event: Event){
        this.titulo = (<HTMLInputElement>event.target).value;
    }*/
}