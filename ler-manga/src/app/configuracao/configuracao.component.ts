import { Component, OnInit } from '@angular/core';
import { Autor } from '../models/autor';
import { MangasService } from '../services/mangas.service';
import { Router } from '@angular/router';
import { AutorService } from '../services/autor.service';
import { Obras } from '../models/obra';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.component.html',
  styleUrls: ['./configuracao.component.css']
})
export class ConfiguracaoComponent implements OnInit {
  
  obra: Obras;
  autor: Autor;
  mensagem = '';
  constructor(private as: AutorService, private ms: MangasService, private router: Router) { 
    this.autor = new Autor();
    this.obra = new Obras();
  }

  ngOnInit() {
  }

  apagaAutor(codAutor){
    this.mensagem = ''
    this.as.apagarAutor(codAutor).subscribe(
      res =>{
        if (res) {
          console.log(res)
          this.mensagem = "Apagado com sucesso"
          this.autor = res;
        }else{
          this.mensagem = 'Algo deu Errado'
        }
      }
    )
  };

  atualizarAutor(codAutor){
    this.router.navigate(['/autalizar-autor', codAutor])
  }

  apagaObras(codObra){
    this.mensagem = ''
    this.ms.apagarObra(codObra).subscribe(
      res =>{
        if (res) {
          console.log(res)
          this.mensagem = "Apagado com sucesso"
          this.obra = res;
        }else{
          this.mensagem = 'Algo deu Errado'
        }
      }
    )
  };

  atualizarObra(codObra){
    this.router.navigate(['/atualizar-livro', codObra])
  }

}
