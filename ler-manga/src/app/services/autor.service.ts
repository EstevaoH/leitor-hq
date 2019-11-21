import { Injectable } from '@angular/core';
import { Autor } from '../models/autor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  autor: Autor;

  private ulr = 'http://localhost:3000/autor'

  constructor(private http: HttpClient) { }


  cadastraAutor(autor: Autor): Observable<Autor>{
    return this.http.post<Autor>(this.ulr, autor)
  };

  apagarAutor(co: number): Observable<Autor>{
    return this.http.delete<Autor>(this.ulr + '/' + co)
  };

  buscarAutor(co: number): Observable<Autor>{
    return this.http.get<Autor>(this.ulr + '/' + co)
  };

  atualizarAutor(autor: Autor): Observable<Autor>{
    return this.http.put<Autor>(this.ulr, autor)
  };
}
