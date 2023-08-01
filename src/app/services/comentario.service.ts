import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../interfaces/comentario.model';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  private APP_PORT='https://localhost:7181/'
  private API_URL='api/Comentario/'
  
  constructor(private http:HttpClient) { }

  getListComentarios(): Observable<any> {
    return this.http.get(this.APP_PORT+this.API_URL);
  }

  deleteComentario(id:number):Observable<any>{
    return this.http.delete(this.APP_PORT + this.API_URL + id);
  }

  getComentario(id:number):Observable<any>{
    return this.http.get(this.APP_PORT + this.API_URL + id);
  }

  saveComentario(comentario:Comentario): Observable<any>{
    return this.http.post(this.APP_PORT+this.API_URL, comentario);
  }

  updateComentario(id:number, comentario:Comentario):Observable<any>{
    return this.http.put(this.APP_PORT + this.API_URL + id, comentario);
  }
}
