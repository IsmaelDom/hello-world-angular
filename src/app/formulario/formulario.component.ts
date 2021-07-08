import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { person } from 'ngx-bootstrap-icons';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';
import { Persona } from '../personas/persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
  //providers: [LoggingService]// Se agrega en la clase si es que solo se va a usar aqui si no en app.module
})
export class FormularioComponent implements OnInit {
  //Evento para propagar al componente padre
  //@Output() personaCreada = new EventEmitter<Persona>();//se comenta ya que se realiza el llamado por medio de servicios

  //nombreInput:string = ''; //Usando Event Binding
  //apellidoInput:string = ''; //Usando Event Binding
  @ViewChild('nombreRef') nombreAtributo: ElementRef = new ElementRef(null);
  @ViewChild('apellidoRef') apellidoAtributo: ElementRef = new ElementRef(null);
  index: number = 0;
  modoEdicion: number = 0;
  constructor(private loggingService:LoggingService,
              private personasService: PersonasService,
              private router: Router, private route: ActivatedRoute) {
                this.personasService.saludar.subscribe(
                  (indice: number) => alert("El indice es: " + indice)
                );//Se emite el saludo
              }//Ahora se tiene que importar el servicio

  ngOnInit(): void {
    /*this.index = this.route.snapshot.params['id'];//debe ser el mismo que el de app-routing
    if (this.index) {
      let persona: Persona = this.personasService.encontrarPersona(this.index);
    }*/
  }

  ngAfterViewInit() {
    this.index = this.route.snapshot.params['id'];//debe ser el mismo que el de app-routing
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];//El signo + convierte a entero
    if (this.modoEdicion != null && this.modoEdicion === 1) {
      let persona: Persona = this.personasService.encontrarPersona(this.index);
      this.nombreAtributo.nativeElement.value = persona.nombre;
      this.apellidoAtributo.nativeElement.value = persona.apellido;
    }
  }

  //addPersona(nombreInput:HTMLInputElement, apellidoInput:HTMLInputElement){//Usando Referencia Local
  addPersona(){
    let persona1 = new Persona(this.nombreAtributo.nativeElement.value,
                              this.apellidoAtributo.nativeElement.value); //Usando Referencia Local con ViewChild
    //let persona1 = new Persona(nombreInput.value, apellidoInput.value); //Usando Referencia Local
    //let persona1 = new Persona(this.nombreInput, this.apellidoInput); //Usando Event Binding
    //this.personas.push(persona1);
    //this.loggingService.enviaMensajeAConsola("Enviamos persona: " + persona1.nombre + ' ' + persona1.apellido);
    //this.personaCreada.emit(persona1);//Linea 53 y 54 se comentan ya que se realiza el llamado por medio de servicios
    this.loggingService.enviaMensajeAConsola("Se llama a personasService.personaAgregada con la persona: " + persona1.nombre + " " + persona1.apellido);
    this.personasService.personaAgregada(persona1);//En lugar de las lineas anteriores solo se llama a el servicio
  }

  onGuardarPersona(){
    let persona1 = new Persona(this.nombreAtributo.nativeElement.value,
                              this.apellidoAtributo.nativeElement.value);
    if (this.modoEdicion != null && this.modoEdicion === 1) {
      this.personasService.modificarPersona(this.index, persona1);
    } else {
      this.personasService.personaAgregada(persona1);
    }
    this.router.navigate(['personas']);
  }

  eliminarPersona(){
    if (this.index != null) {
      this.personasService.eliminarPersona(this.index);
    }
    this.router.navigate(['personas']);
  }
}
