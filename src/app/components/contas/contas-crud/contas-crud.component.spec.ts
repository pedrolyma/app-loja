import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasCrudComponent } from './contas-crud.component';

describe('ContasCrudComponent', () => {
  let component: ContasCrudComponent;
  let fixture: ComponentFixture<ContasCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContasCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContasCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
