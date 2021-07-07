import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';
import { Persona } from '../personas/persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
  //providers: [LoggingService]// Se agrega en la clase si es que solo se va a usar aqui si no en app.module
})
export class FormularioComponent {
  //Evento para propagar al componente padre
  //@Output() personaCreada = new EventEmitter<Persona>();//se comenta ya que se realiza el llamado por medio de servicios

  //nombreInput:string = ''; //Usando Event Binding
  //apellidoInput:string = ''; //Usando Event Binding
  @ViewChild('nombreRef') nombreAtributo: ElementRef = new ElementRef(null);
  @ViewChild('apellidoRef') apellidoAtributo: ElementRef = new ElementRef(null);
  
  constructor(private loggingService:LoggingService,
              private personasService: PersonasService,
              private router: Router) {
                this.personasService.saludar.subscribe(
                  (indice: number) => alert("El indice es: " + indice)
                );//Se emite el saludo
              }//Ahora se tiene que importar el servicio
  //addPersona(nombreInput:HTMLInputElement, apellidoInput:HTMLInputElement){//Usando Referencia Local
  addPersona(){
    let persona1 = new Persona(this.nombreAtributo.nativeElement.value,
                              this.apellidoAtributo.nativeElement.value); //Usando Referencia Local con ViewChild
    //let persona1 = new Persona(nombreInput.value, apellidoInput.value); //Usando Referencia Local
    //let persona1 = new Persona(this.nombreInput, this.apellidoInput); //Usando Event Binding
    //this.personas.push(persona1);
    //this.loggingService.enviaMensajeAConsola("Enviamos persona: " + persona1.nombre + ' ' + persona1.apellido);
    //this.personaCreada.emit(persona1);//Linea 35 y 36 se comentan ya que se realiza el llamado por medio de servicios
    this.loggingService.enviaMensajeAConsola("Se llama a personasService.personaAgregada con la persona: " + persona1.nombre + " " + persona1.apellido);
    this.personasService.personaAgregada(persona1);//En lugar de las lineas anteriores solo se llama a el servicio
  }

  onGuardarPersona(){
    let persona1 = new Persona(this.nombreAtributo.nativeElement.value,
      this.apellidoAtributo.nativeElement.value);
      this.personasService.personaAgregada(persona1);
      this.router.navigate(['personas']);
  }
}
