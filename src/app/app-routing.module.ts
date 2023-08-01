import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComentariosComponent } from './components/list-comentarios/list-comentarios.component';
import { AgregarEditarComentarioComponent } from './components/agregar-editar-comentario/agregar-editar-comentario.component';
import { VerComentarioComponent } from './components/ver-comentario/ver-comentario.component';

const routes: Routes = [
  {path: '', component: ListComentariosComponent},
  {path: 'agregar', component: AgregarEditarComentarioComponent},
  {path: 'editar/:id', component: AgregarEditarComentarioComponent}, //esta ruta recibe un id por parámetro
  {path: 'ver/:id', component: VerComentarioComponent}, 
  {path: '**', redirectTo:'', pathMatch:'full'} //esto es una WildCard que nos sirve para redireccionar todas las rutas al home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
