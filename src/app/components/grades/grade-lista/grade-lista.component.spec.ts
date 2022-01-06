import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeListaComponent } from './grade-lista.component';

describe('GradeListaComponent', () => {
  let component: GradeListaComponent;
  let fixture: ComponentFixture<GradeListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
