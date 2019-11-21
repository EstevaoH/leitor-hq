import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastraUsuarioComponent } from './cadastra-usuario/cadastra-usuario.component';
import { CadastraLivroComponent } from './cadastra-livro/cadastra-livro.component';
import { AtualizarLivroComponent } from './atualizar-livro/atualizar-livro.component';
import { MostraLivrosComponent } from './mostra-livros/mostra-livros.component';
import { ConfiguracaoComponent } from './configuracao/configuracao.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastraAutorComponent } from './cadastra-autor/cadastra-autor.component';
import { AtualizarAutorComponent } from './atualizar-autor/atualizar-autor.component';
import { CapitulosComponent } from './capitulos/capitulos.component';
import { CadastraCapitulosComponent } from './cadastra-capitulos/cadastra-capitulos.component';
import { MostraCapituloComponent } from './mostra-capitulo/mostra-capitulo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastraUsuarioComponent,
    CadastraLivroComponent,
    AtualizarLivroComponent,
    MostraLivrosComponent,
    ConfiguracaoComponent,
    CadastraAutorComponent,
    AtualizarAutorComponent,
    CapitulosComponent,
    CadastraCapitulosComponent,
    MostraCapituloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
