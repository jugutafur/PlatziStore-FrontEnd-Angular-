import { TestBed } from '@angular/core/testing';

import { CargueProductosService } from './cargue-productos.service';

describe('CargueProductosService', () => {
  let service: CargueProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargueProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
