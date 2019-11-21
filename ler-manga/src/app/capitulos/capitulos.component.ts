import { Component, OnInit } from '@angular/core';
import { Capitulo } from '../models/capitulo';
import { MangasService } from '../services/mangas.service';

@Component({
  selector: 'app-capitulos',
  templateUrl: './capitulos.component.html',
  styleUrls: ['./capitulos.component.css']
})
export class CapitulosComponent implements OnInit {

  cap: Capitulo
  mensagem = ''

  constructor(private cp: MangasService ){
    this.cap = new Capitulo();
  }

  ngOnInit() {
    this.mensagem = '';
    this.cp.listaCapitulos ().subscribe(
      res =>{
        if (res) {
          this.cap = res;
          console.log(res)
        }else{
          this.mensagem = "Algo de errado não estar Certo !!"
        };
      }
    )
  }


}
