import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from 'src/app/interfaces/comentario.model';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-agregar-editar-comentario',
  templateUrl: './agregar-editar-comentario.component.html',
  styleUrls: ['./agregar-editar-comentario.component.scss']
})
export class AgregarEditarComentarioComponent implements OnInit{

  agregarComentario:FormGroup;
  accion = 'Agregar'
  id:number=0;
  comentario:Comentario | undefined;

  constructor(
    private fb:FormBuilder, 
    private comentarioService:ComentarioService,
    private router:Router,
    private aRoute:ActivatedRoute
    ){
    this.agregarComentario = this.fb.group({
      titulo: ['', Validators.required],
      creador: ['', Validators.required],
      texto: ['', Validators.required]
    });

    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
      this.isEditing();
  }

  isEditing(){
    if(this.id!=0){
      this.accion = 'Editar';
      this.comentarioService.getComentario(this.id).subscribe(data=>{
        this.comentario=data;
        this.agregarComentario.patchValue({ //método interesante para llenar los valores con el data
          titulo:data.titulo,
          creador:data.creador,
          texto:data.texto,
        })
      }, error=>{
        console.log(error);
      })
    }
  }

  agregarEditar(){

    if(this.comentario==undefined){
      
      let comentario:Comentario = {
        titulo: this.agregarComentario.get('titulo')?.value, //obtenemos los valores con el FormGroup
        creador: this.agregarComentario.get('creador')?.value, //puede ser nulo o no, por eso el ?
        texto: this.agregarComentario.get('texto')?.value,
        fechaCreacion: new Date,
      };
  
      this.comentarioService.saveComentario(comentario).subscribe(data=>{
        this.router.navigate(['/']);
      }, error => 
      console.log(error)
      )
  
      this.comentarioService.saveComentario(comentario).subscribe(data=>{
        this.router.navigate(['/']);
      }, error => 
      console.log(error)
      )

    } else{
      let comentario:Comentario = {
        id: this.comentario.id,
        titulo: this.agregarComentario.get('titulo')?.value, //obtenemos los valores con el FormGroup
        creador: this.agregarComentario.get('creador')?.value, //puede ser nulo o no, por eso el ?
        texto: this.agregarComentario.get('texto')?.value,
        fechaCreacion: this.comentario.fechaCreacion,
      };
  
      this.comentarioService.updateComentario(this.id, comentario).subscribe(data=>{
        this.router.navigate(['/']);
      }, error => 
      console.log(error)
      )
    }

  }

}
