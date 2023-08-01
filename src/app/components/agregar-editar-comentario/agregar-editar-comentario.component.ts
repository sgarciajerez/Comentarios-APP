import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comentario } from 'src/app/interfaces/comentario.model';

@Component({
  selector: 'app-agregar-editar-comentario',
  templateUrl: './agregar-editar-comentario.component.html',
  styleUrls: ['./agregar-editar-comentario.component.scss']
})
export class AgregarEditarComentarioComponent {

  agregarComentario:FormGroup;

  constructor(private fb:FormBuilder){
    this.agregarComentario = this.fb.group({
      titulo: ['', Validators.required],
      creador: ['', Validators.required],
      texto: ['', Validators.required]
    })
  }

  agregar(){
    let comentario:Comentario = {
      titulo: this.agregarComentario.get('titulo')?.value, //obtenemos los valores con el FormGroup
      creador: this.agregarComentario.get('creador')?.value, //puede ser nulo o no, por eso el ?
      texto: this.agregarComentario.get('texto')?.value,
      fechaCreacion: new Date,
    };

    console.log(comentario);
  }

}
