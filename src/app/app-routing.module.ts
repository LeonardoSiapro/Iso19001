import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfetaEmpresaComponent } from './component/afeta-empresa/afeta-empresa.component';
import { DescComponent } from './component/desc/desc.component';
import { InfoComponent } from './component/info/info.component';
import { MudancasComponent } from './component/mudancas/mudancas.component';
import { PerfilComponent } from './component/perfil/perfil.component';

const routes: Routes = [
  {
    path: '',
    component: InfoComponent,
  },
  {
    path: 'descricao',
    component: DescComponent,
  },
  {
    path: 'afetar-empresas',
    component: AfetaEmpresaComponent,
  },
  {
    path: 'mudancas',
    component: MudancasComponent,
  },
  {
    path: 'meu-perfil',
    component: PerfilComponent,
  },

  {
    path: `**`,
    redirectTo: ``
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
