import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario: Usuario
  private url ='http://localhost:3000/usuarios'

  constructor(private http: HttpClient) { }
  
  cadastraAutor(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.url, usuario)
  };
}
