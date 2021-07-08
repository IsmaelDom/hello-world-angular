import { EventEmitter, Injectable } from '@angular/core';
import { DataService } from './data.service';
import { LoggingService } from './LoggingService.service';
import { Persona } from './personas/persona.model';

@Injectable()//Se inyecta un servicio
export class PersonasService {
  personas: Persona[] = [];

  saludar = new EventEmitter<number>();

  constructor(private loggingService: LoggingService, private dataService: DataService) {}

  setPersonas(personas: Persona[]){
    this.personas = personas;
  }

  obtenerPersonas(){
    return this.dataService.cargarPersonas();
  }

  personaAgregada(persona: Persona) {
    this.loggingService.enviaMensajeAConsola("Se agrega persona desde el servicio: " + persona.nombre);
    if (this.personas == null) {
      this.personas = [];
    }
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
    this.dataService.modificarPersona(index, persona);
  }

  eliminarPersona(index: number){
    this.personas.splice(index, 1);
    this.dataService.eliminarPersona(index);
    this.modificarPersonas();//Se vuelve a guardar el arreglo para reestablecer indices
  }

  modificarPersonas(){
    if (this.personas != null) {
      this.dataService.guardarPersonas(this.personas);
    }
  }
}
