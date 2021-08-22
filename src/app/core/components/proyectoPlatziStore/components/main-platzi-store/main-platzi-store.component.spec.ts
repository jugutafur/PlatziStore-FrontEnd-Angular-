import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPlatziStoreComponent } from './main-platzi-store.component';

describe('MainPlatziStoreComponent', () => {
  let component: MainPlatziStoreComponent;
  let fixture: ComponentFixture<MainPlatziStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPlatziStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPlatziStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
