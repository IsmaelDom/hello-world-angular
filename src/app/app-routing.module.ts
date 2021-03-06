import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PersonasComponent } from './personas/personas.component';

const routes: Routes = [
  {path: '', component: PersonasComponent},
  {path: 'personas', component: PersonasComponent, children: [
    {path: 'agregar', component: FormularioComponent},
    {path: ':id', component: FormularioComponent}
  ]},//Se quita personas del path ya que al ser hijas ya lo traen
  {path: '**', component: ErrorComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
