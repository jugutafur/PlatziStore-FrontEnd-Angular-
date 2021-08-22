import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAprenderComponent } from './main-aprender.component';

describe('MainAprenderComponent', () => {
  let component: MainAprenderComponent;
  let fixture: ComponentFixture<MainAprenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAprenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAprenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
