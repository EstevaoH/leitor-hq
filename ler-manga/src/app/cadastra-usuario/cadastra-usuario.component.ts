import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-cadastra-usuario',
  templateUrl: './cadastra-usuario.component.html',
  styleUrls: ['./cadastra-usuario.component.css']
})
export class CadastraUsuarioComponent implements OnInit {

  mensagem = '';
  usuario: Usuario;
  constructor(private us: UsuarioService) {
    this.usuario = new Usuario();
   }

  ngOnInit() {
  }

  cadastraUsuario(){
    this.mensagem = '';
    this.us.cadastraAutor(this.usuario).subscribe(
      res =>{
        if (res) {
          this.mensagem = "Autor cadastrado com Sucesso !";
          this.usuario = res;
          console.log(res)
        }else{
          this.mensagem = "Algo de errado não estar Certo !!"
        };
      }
    )
  }

}
