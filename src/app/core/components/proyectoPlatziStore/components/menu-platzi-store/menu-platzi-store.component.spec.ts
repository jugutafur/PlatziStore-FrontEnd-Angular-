import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPlatziStoreComponent } from './menu-platzi-store.component';

describe('MenuPlatziStoreComponent', () => {
  let component: MenuPlatziStoreComponent;
  let fixture: ComponentFixture<MenuPlatziStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPlatziStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPlatziStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
