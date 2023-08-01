import { Component } from '@angular/core';
import { Comentario } from 'src/app/interfaces/comentario.model';

@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.scss']
})
export class ListComentariosComponent {

  listComentarios: Comentario[]=[
    {titulo:'Angular', creador: 'Fernando', fechaCreacion: new Date(), texto:'dada'},
    {titulo:'React', creador: 'Alberto', fechaCreacion: new Date(), texto:'dada'},
    {titulo:'React', creador: 'Alberto', fechaCreacion: new Date(), texto:'dada'}
  ];


}
