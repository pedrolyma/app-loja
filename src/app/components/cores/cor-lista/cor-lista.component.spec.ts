import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorListaComponent } from './cor-lista.component';

describe('CorListaComponent', () => {
  let component: CorListaComponent;
  let fixture: ComponentFixture<CorListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
