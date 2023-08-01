import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interfaces/comentario.model';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.scss']
})
export class ListComentariosComponent implements OnInit{

  listComentarios: Comentario[]=[];

  constructor(private comentarioServices:ComentarioService){}

  ngOnInit(): void {
    this.getComentarios();
  }

  getComentarios(){
    this.comentarioServices.getListComentarios().subscribe(
      data => {
        this.listComentarios=data;
      }, error =>{
        console.log(error);
      }
    )
  }

  eliminarComentario(id:any){
    this.comentarioServices.deleteComentario(id).subscribe(data=>{
      this.getComentarios();
      console.log(data.message);
    }, error => {
      console.log(error);
    })
  }


}
