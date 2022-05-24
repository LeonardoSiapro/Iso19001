import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { ContainerComponent } from './template/container/container.component';
import { InfoComponent } from './component/info/info.component';
import { DescComponent } from './component/desc/desc.component';
import { AfetaEmpresaComponent } from './component/afeta-empresa/afeta-empresa.component';
import { MudancasComponent } from './component/mudancas/mudancas.component';
import { PerfilComponent } from './component/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    InfoComponent,
    DescComponent,
    AfetaEmpresaComponent,
    MudancasComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
