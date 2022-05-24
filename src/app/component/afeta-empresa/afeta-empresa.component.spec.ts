import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfetaEmpresaComponent } from './afeta-empresa.component';

describe('AfetaEmpresaComponent', () => {
  let component: AfetaEmpresaComponent;
  let fixture: ComponentFixture<AfetaEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfetaEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfetaEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
