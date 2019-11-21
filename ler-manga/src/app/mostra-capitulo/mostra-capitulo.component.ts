import { Component, OnInit } from '@angular/core';
import { Capitulo } from '../models/capitulo';
import { MangasService } from '../services/mangas.service';

@Component({
  selector: 'app-mostra-capitulo',
  templateUrl: './mostra-capitulo.component.html',
  styleUrls: ['./mostra-capitulo.component.css']
})
export class MostraCapituloComponent implements OnInit {
    
  cap: Capitulo;

  constructor(private cp : MangasService) { 
    this.cap = new Capitulo();
  }

  ngOnInit() {
    this.cp.listaCapitulos().subscribe(
      res =>{
        this.cap = res;
        console.log(this.cap)
      }
    )
  }

}
