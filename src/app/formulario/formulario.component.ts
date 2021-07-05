import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../personas/persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  //Evento para propagar al componente padre
  @Output() personaCreada = new EventEmitter<Persona>();

  //nombreInput:string = ''; //Usando Event Binding
  //apellidoInput:string = ''; //Usando Event Binding
  @ViewChild('nombreRef') nombreAtributo: ElementRef = new ElementRef(null);
  @ViewChild('apellidoRef') apellidoAtributo: ElementRef = new ElementRef(null);
  
  //addPersona(nombreInput:HTMLInputElement, apellidoInput:HTMLInputElement){//Usando Referencia Local
  addPersona(){
    let persona1 = new Persona(this.nombreAtributo.nativeElement.value,
                              this.apellidoAtributo.nativeElement.value); //Usando Referencia Local con ViewChild
    //let persona1 = new Persona(nombreInput.value, apellidoInput.value); //Usando Referencia Local
    //let persona1 = new Persona(this.nombreInput, this.apellidoInput); //Usando Event Binding
    //this.personas.push(persona1);
    this.personaCreada.emit(persona1);
  }
}
