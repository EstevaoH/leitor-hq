import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraCapitulosComponent } from './cadastra-capitulos.component';

describe('CadastraCapitulosComponent', () => {
  let component: CadastraCapitulosComponent;
  let fixture: ComponentFixture<CadastraCapitulosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraCapitulosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraCapitulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
