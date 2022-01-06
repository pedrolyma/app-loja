import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizacaoCrudComponent } from './localizacao-crud.component';

describe('LocalizacaoCrudComponent', () => {
  let component: LocalizacaoCrudComponent;
  let fixture: ComponentFixture<LocalizacaoCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalizacaoCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalizacaoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
