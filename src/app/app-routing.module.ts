import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroClienteComponent } from './pages/cadastro-cliente/cadastro-cliente.component';
import { CadastroEmpresaComponent } from './pages/cadastro-empresa/cadastro-empresa.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'cliente',
    component: CadastroClienteComponent,
  },
  {
    path: 'empresa',
    component: CadastroEmpresaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
