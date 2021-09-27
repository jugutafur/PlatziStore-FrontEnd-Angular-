import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargueProductosComponent } from './cargue-productos.component';

describe('CargueProductosComponent', () => {
  let component: CargueProductosComponent;
  let fixture: ComponentFixture<CargueProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargueProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargueProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
