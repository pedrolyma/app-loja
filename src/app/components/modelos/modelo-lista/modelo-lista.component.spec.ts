import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloListaComponent } from './modelo-lista.component';

describe('ModeloListaComponent', () => {
  let component: ModeloListaComponent;
  let fixture: ComponentFixture<ModeloListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
