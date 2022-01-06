import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorCrudComponent } from './cor-crud.component';

describe('CorCrudComponent', () => {
  let component: CorCrudComponent;
  let fixture: ComponentFixture<CorCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
