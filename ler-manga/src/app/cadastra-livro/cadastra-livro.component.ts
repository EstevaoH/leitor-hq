import { Component, OnInit } from '@angular/core';
import { Obras } from '../models/obra';
import { MangasService } from '../services/mangas.service';

@Component({
  selector: 'app-cadastra-livro',
  templateUrl: './cadastra-livro.component.html',
  styleUrls: ['./cadastra-livro.component.css']
})
export class CadastraLivroComponent implements OnInit {

  obra: Obras;
  mensagem = '';

  constructor(private ms: MangasService) {
    this.obra = new Obras();
   }

  ngOnInit() {
  }

  cadastraObra(){
    this.mensagem = '';
    this.ms.cadastraObra (this.obra).subscribe(
      res =>{
        if (res) {
          this.mensagem = "Obra cadastrada com Sucesso !";
          this.obra = res;
          console.log(res)
        }else{
          this.mensagem = "Algo de errado não estar Certo !!"
        };
      }
    )
  }

}
