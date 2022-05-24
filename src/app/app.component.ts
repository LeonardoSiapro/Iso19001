import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  box: any[] = [
    { icon: `bi bi-search`, name: `Autencidade dos Documentos`, link: `` },
    { icon: `bi bi-file-earmark`, name: `carta de Serviço ao Usuário`, link: `` },
    { icon: `bi bi-journal-text`, name: `Consulta Protocolos e requerimentos`, link: `` },
    { icon: `bi bi-search`, name: `Diário Oficial`, link: `` },
    { icon: `bi bi-columns`, name: `Estrutura Organizacional`, link: `` },
    { icon: `bi bi-file-earmark-text-fill`, name: `Licitações`, link: `` },
    { icon: `bi bi-file-earmark-fill`, name: `Legislação`, link: `` },
    { icon: `bi bi-file-earmark-medical-fill`, name: `Pareceres`, link: `` },
    { icon: `bi bi-file-earmark-check`, name: `Portal da Transparência`, link: `` },
    { icon: `bi bi-layers-half`, name: `Processos Administrativos`, link: `` },
    { icon: `bi bi-file-earmark-lock2`, name: `Proteção de dados - LGPD`, link: `` },
    { icon: `bi bi-people`, name: `Reuniões`, link: `` },
  ]


  constructor(
    private router: Router,
  ) {
    
  }

  ngOnInit(): void {
  }

  acessarSPBClick() {


  }
}
