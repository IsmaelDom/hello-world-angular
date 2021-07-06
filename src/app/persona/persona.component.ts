import { Component, Injectable, Input } from '@angular/core';
import { PersonasService } from '../personas.service';
import { Persona } from '../personas/persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})

@Injectable()
export class PersonaComponent {

  nombre: string = 'Juan';
  apellido: string = 'Perez';
  edad: number = 28;
  //private edad: number = 28;

  @Input() persona: Persona = new Persona(this.nombre, this.apellido);
  @Input() indice: number = 0;
  /*getEdad():number{
    return this.edad;
  }*/

  constructor(private personasService: PersonasService) {}

  emitirSaludo() {
    this.personasService.saludar.emit(this.indice);
  }
}
