import { Injectable } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './personas/persona.model';

@Injectable()//Se inyecta un servicio
export class PersonasService {
  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Juarez'),
    new Persona('Karla', 'Lara'),
  ];

  constructor(private loggingService: LoggingService) {}

  personaAgregada(persona: Persona) {
    this.loggingService.enviaMensajeAConsola("Se agrega persona desde el servicio: " + persona.nombre);
    this.personas.push(persona);
  }
}
