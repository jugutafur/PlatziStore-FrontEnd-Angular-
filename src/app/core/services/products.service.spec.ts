import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  const service = new ProductsService;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(ProductsService);
  // });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe("getAllProducts", ()=>{
    it("Should return product", ()=>{
      expect(service.getAllProducts()).toEqual(service.products)
    });
  });

  describe("getProduct", ()=>{
    it("Should return string ", ()=>{
      const id: string  = '6';
      const salida  = {
        id: '6',
        image: 'assets/images/stickers2.png',
        title: 'Stickers',
        price: 80000,
        description: 'bla bla bla bla bla'
      }
      expect(service.getProduct(id)).toEqual(salida)
    });
  });


});
