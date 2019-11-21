import { Component, OnInit } from '@angular/core';
import { Autor } from '../models/autor';
import { MangasService } from '../services/mangas.service';
import { AutorService } from '../services/autor.service';

@Component({
  selector: 'app-cadastra-autor',
  templateUrl: './cadastra-autor.component.html',
  styleUrls: ['./cadastra-autor.component.css']
})
export class CadastraAutorComponent implements OnInit {

  autor: Autor;
  mensagem = '';

  constructor(private as: AutorService) {
    this.autor = new Autor();
   }

  ngOnInit() {
  }

  cadastraAutor(){
    this.mensagem = '';
    this.as.cadastraAutor(this.autor).subscribe(
      res =>{
        if (res) {
          this.mensagem = "Autor cadastrado com Sucesso !";
          this.autor = res;
          console.log(res)
        }else{
          this.mensagem = "Algo de errado não estar Certo !!"
        };
      }
    )
  }

}
