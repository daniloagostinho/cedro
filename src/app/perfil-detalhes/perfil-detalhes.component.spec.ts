import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilDetalhesComponent } from './perfil-detalhes.component';

describe('PerfilDetalhesComponent', () => {
  let component: PerfilDetalhesComponent;
  let fixture: ComponentFixture<PerfilDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
