import { EventEmitter, Injectable } from '@angular/core';
import { person } from 'ngx-bootstrap-icons';
import { DataService } from './data.service';
import { LoggingService } from './LoggingService.service';
import { Persona } from './personas/persona.model';

@Injectable()//Se inyecta un servicio
export class PersonasService {
  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Juarez'),
    new Persona('Karla', 'Lara'),
  ];

  saludar = new EventEmitter<number>();

  constructor(private loggingService: LoggingService, private dataService: DataService) {}

  personaAgregada(persona: Persona) {
    this.loggingService.enviaMensajeAConsola("Se agrega persona desde el servicio: " + persona.nombre);
    this.personas.push(persona);
    this.dataService.guardarPersonas(this.personas);
  }

  encontrarPersona(index: number){
    let persona: Persona = this.personas[index];
    return persona;
  }

  modificarPersona(index: number, persona: Persona){
    let persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
  }

  eliminarPersona(index: number){
    this.personas.splice(index, 1);
  }
}
