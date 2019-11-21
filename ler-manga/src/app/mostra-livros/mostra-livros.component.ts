import { Component, OnInit } from '@angular/core';
import { MangasService } from '../services/mangas.service';
import { Obras } from '../models/obra';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostra-livros',
  templateUrl: './mostra-livros.component.html',
  styleUrls: ['./mostra-livros.component.css']
})
export class MostraLivrosComponent implements OnInit {

  manga: Obras;
  categoria = []
  constructor(private ms: MangasService, private router: Router) {
    this.manga = new Obras();
    this.categoria = [
      { 'nome': 'Aventura' },
      { 'nome': 'Bara' },
      { 'nome': 'Carros' },
      { 'nome': 'Comédia' },
      { 'nome': 'Demência' },
      { 'nome': 'Demônios' },
      { 'nome': 'Doujinshi' },
      { 'nome': 'Drama' },
      { 'nome': 'Escolar' },
      { 'nome': 'Espacial' },
      { 'nome': 'Esportes' },
      { 'nome': 'Fantasia' },
      { 'nome': 'Fanzine' },
      { 'nome': 'Gag' },
      { 'nome': 'Gastronomia' },
      { 'nome': 'Genérico' },
      { 'nome': 'Histórico' },
      { 'nome': 'Horror' },
      { 'nome': 'HQ' },
      { 'nome': 'Infantil' },
      { 'nome': 'Isekai' },
      { 'nome': 'Jogos' },
      { 'nome': 'Josei' },
      { 'nome': 'LightNovel' },
      { 'nome': ' Magia' },
      { 'nome': 'Mechas' },
      { 'nome': 'Militar' },
      { 'nome': 'Mistério' },
      { 'nome': 'Música' },
      { 'nome': 'OneShot' },
      { 'nome': 'Paródia' },
      { 'nome': 'Policial' },
      { 'nome': 'Psicológico' },
      { 'nome': 'Revista' },
      { 'nome': 'Romance' },
      { 'nome': 'Samurai' },
      { 'nome': 'Sci-Fi' },
      { 'nome': 'Seinen' },
      { 'nome': 'Shoujo' },
      { 'nome': 'ShoujoAi' },
      { 'nome': 'Shounen' },
      { 'nome': 'ShounenAi' },
      { 'nome': 'SliceofLife' },
      { 'nome': 'Sobrenatural' },
      { 'nome': 'SuperPoderes' },
      { 'nome': 'Suspense' },
      { 'nome': 'Vampiros' },
      { 'nome': 'Webtoon' },
    ]
  }

  ngOnInit() {
    this.ms.listarObras().subscribe(
      res => {
        this.manga = res;
        console.log(res);
      }
    )

  }

  capitulos(){
    this.router.navigate(['/capitulos'])
  };

}
