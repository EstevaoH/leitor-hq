import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastraLivroComponent } from './cadastra-livro/cadastra-livro.component';
import { CadastraUsuarioComponent } from './cadastra-usuario/cadastra-usuario.component';
import { AtualizarLivroComponent } from './atualizar-livro/atualizar-livro.component';
import { MostraLivrosComponent } from './mostra-livros/mostra-livros.component';
import { LoginComponent } from './login/login.component';
import { ConfiguracaoComponent } from './configuracao/configuracao.component';
import { AuthguardGuard } from './auth/authguard.guard';
import { AtualizarAutorComponent } from './atualizar-autor/atualizar-autor.component';
import { CapitulosComponent } from './capitulos/capitulos.component';
import { CadastraAutorComponent } from './cadastra-autor/cadastra-autor.component';
import { MostraCapituloComponent } from './mostra-capitulo/mostra-capitulo.component';


const routes: Routes = [
  {path: 'cadastra-livro', component:CadastraLivroComponent,},
  {path: 'cadastra-autor', component: CadastraAutorComponent},
  {path: 'cadastra-usuario', component: CadastraUsuarioComponent},
  {path: 'atualizar-livro/:codObra', component: AtualizarLivroComponent,},
  {path: 'mostra-livros', component: MostraLivrosComponent},
  {path: '', redirectTo: '/mostra-livros', pathMatch: 'full' },
  {path: 'login', component:LoginComponent },
  {path: 'configuracao', component:ConfiguracaoComponent,},
  {path: 'autalizar-autor/:codAutor', component: AtualizarAutorComponent},
  {path: 'capitulos', component: CapitulosComponent},
  {path: 'mostra-capitulo', component: MostraCapituloComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
