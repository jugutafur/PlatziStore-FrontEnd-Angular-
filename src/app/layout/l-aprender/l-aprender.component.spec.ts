import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LAprenderComponent } from './l-aprender.component';

describe('LAprenderComponent', () => {
  let component: LAprenderComponent;
  let fixture: ComponentFixture<LAprenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LAprenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LAprenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
