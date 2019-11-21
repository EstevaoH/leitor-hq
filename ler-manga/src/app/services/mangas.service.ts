import { Injectable } from '@angular/core';
import { Obras } from '../models/obra';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autor } from '../models/autor';
import { Capitulo } from '../models/capitulo';

@Injectable({
  providedIn: 'root'
})
export class MangasService {

  obras: Obras[]
  capitulos: Capitulo[]

  private ulr ='http://localhost:3000/obras'
  private ulr1 = 'http://localhost:3000/capitulos'

  constructor(private http: HttpClient) { }

  listarObras(): Observable<Obras>{
    return this.http.get<Obras>(this.ulr);
  };

  buscarObra(co: number): Observable<Obras>{
    return this.http.get<Obras>(this.ulr + '/' + co)
  };

  atualizarObra(obra: Obras): Observable<Obras>{
    return this.http.put<Obras>(this.ulr, obra)
  };

  cadastraObra(obra: Obras): Observable<Obras>{
    return this.http.post<Obras>(this.ulr, obra)
  }

  apagarObra(co: number): Observable<Obras>{
    return this.http.delete<Obras>(this.ulr + '/' + co)
  };

  listaCapitulos(): Observable<Capitulo>{
    return this.http.get<Capitulo>(this.ulr1)
  }

}
