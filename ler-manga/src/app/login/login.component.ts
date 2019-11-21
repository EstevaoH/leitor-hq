import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  login: '';
  senha: '';
  erro: string;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    if (this.loginService.onLogin(this.login, this.senha)) {
      this.erro = 'Usuario valido';
      this.router.navigate(['/mostra-livros']);
      console.log(this.erro)
    } else {
      this.erro = 'Usuário ou senha inválidos!';
      console.log(this.erro)
    }
  }
}
