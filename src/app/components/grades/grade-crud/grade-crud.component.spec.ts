import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeCrudComponent } from './grade-crud.component';

describe('GradeCrudComponent', () => {
  let component: GradeCrudComponent;
  let fixture: ComponentFixture<GradeCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
