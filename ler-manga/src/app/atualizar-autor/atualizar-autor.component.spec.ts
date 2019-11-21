import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarAutorComponent } from './atualizar-autor.component';

describe('AtualizarAutorComponent', () => {
  let component: AtualizarAutorComponent;
  let fixture: ComponentFixture<AtualizarAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizarAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
