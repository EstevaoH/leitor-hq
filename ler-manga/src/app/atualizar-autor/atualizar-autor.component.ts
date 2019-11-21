import { Component, OnInit } from '@angular/core';
import { Autor } from '../models/autor';
import { MangasService } from '../services/mangas.service';
import { ActivatedRoute } from '@angular/router';
import { AutorService } from '../services/autor.service';

@Component({
  selector: 'app-atualizar-autor',
  templateUrl: './atualizar-autor.component.html',
  styleUrls: ['./atualizar-autor.component.css']
})
export class AtualizarAutorComponent implements OnInit {

  autor: Autor;
  mensagem  = '';

  constructor(private as: AutorService, private rotas: ActivatedRoute) {
    this.autor = new Autor();
   }

  ngOnInit() {
    this.rotas.paramMap.subscribe((res: any)=>{
      let codAutor: number;
      codAutor = res.params.codAutor
      this.buscarAutor(codAutor);
    });
  }

  buscarAutor(codAutor){
    this.as.buscarAutor(codAutor).subscribe(
      res => {
        if (res[0]) {
          this.autor = res[0];
        }
        console.log(res[0]);
      }
    );
  };

  atualizarAutor(){
    this.as.atualizarAutor(this.autor).subscribe(
      res => {
        if (res) {
          this.mensagem = "Autor atualizado com sucesso !!!";
          this.autor = res;
        } else {
          this.mensagem = "Não foi possivel fazer a atualização do autor.";
        };
      }
    )
  }

}
