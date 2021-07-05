import { Persona } from './personas/persona.model';

export class PersonasService {
  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Juarez'),
    new Persona('Karla', 'Lara'),
  ];

  personaAgregada(persona: Persona) {
    this.personas.push(persona);
  }
}
