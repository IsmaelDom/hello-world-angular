import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { PersonasComponent } from './personas/personas.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.service';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent, PersonaComponent, PersonasComponent, FormularioComponent, ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoggingService, PersonasService],//Si se usa en varios componentes es mejor agregar el proveedor aqui
  bootstrap: [AppComponent]
})
export class AppModule { }
