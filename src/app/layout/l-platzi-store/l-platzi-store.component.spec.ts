import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LPlatziStoreComponent } from './l-platzi-store.component';

describe('LPlatziStoreComponent', () => {
  let component: LPlatziStoreComponent;
  let fixture: ComponentFixture<LPlatziStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LPlatziStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LPlatziStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
