import { Component, OnInit } from '@angular/core';
import { Obras } from '../models/obra';
import { MangasService } from '../services/mangas.service';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atualizar-livro',
  templateUrl: './atualizar-livro.component.html',
  styleUrls: ['./atualizar-livro.component.css']
})
export class AtualizarLivroComponent implements OnInit {

  obra: Obras;
  mensagem = '';

  constructor(private ms: MangasService, private rotas: ActivatedRoute) {
    this.obra = new Obras();
   }

   ngOnInit() {
    this.rotas.paramMap.subscribe((res: any)=>{
      let codObra: number;
      codObra = res.params.codObra
      this.buscarObra(codObra);
    });
  }

  buscarObra(codObra){
    this.ms.buscarObra(codObra).subscribe(
      res => {
        if (res[0]) {
          this.obra = res[0];
        }
        console.log(res[0]);
      }
    );
  };

  atualizarObra(){
    this.ms.atualizarObra(this.obra).subscribe(
      res => {
        if (res) {
          this.mensagem = "Mangá atualizado com sucesso !!!";
          this.obra = res;
          console.log('Deu certo')
        } else {
          this.mensagem = "Algo deu errado.";
        };
      }
    )
  }

}
