import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  box: any[] = [
    { icon: `bi bi-search`, name: `Oque é a ISO 19001?`, link: `/descricao` },
    { icon: `bi bi-journal-text`, name: `Quais as últimas mudanças sofridas por essa norma`, link: `/mudancas` },
    { icon: `bi bi-file-earmark`, name: `Como pode afetar empresas?`, link: `/afetar-empresas` },

    // { icon: `bi bi-search`, name: `Diário Oficial`, link: `` },
    // { icon: `bi bi-columns`, name: `Estrutura Organizacional`, link: `` },
    // { icon: `bi bi-file-earmark-text-fill`, name: `Licitações`, link: `` },
    // { icon: `bi bi-file-earmark-fill`, name: `Legislação`, link: `` },
    // { icon: `bi bi-file-earmark-medical-fill`, name: `Pareceres`, link: `` },
    // { icon: `bi bi-file-earmark-check`, name: `Portal da Transparência`, link: `` },
    // { icon: `bi bi-layers-half`, name: `Processos Administrativos`, link: `` },
    // { icon: `bi bi-file-earmark-lock2`, name: `Proteção de dados - LGPD`, link: `` },
    { icon: `bi bi-person-fill`, name: `Eu, Leonardo`, link: `/meu-perfil` },
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
