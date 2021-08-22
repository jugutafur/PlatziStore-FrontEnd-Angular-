import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAprenderComponent } from './menu-aprender.component';

describe('MenuAprenderComponent', () => {
  let component: MenuAprenderComponent;
  let fixture: ComponentFixture<MenuAprenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAprenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAprenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
