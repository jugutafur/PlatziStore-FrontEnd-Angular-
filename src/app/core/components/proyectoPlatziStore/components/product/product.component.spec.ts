import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductComponent } from './product.component';
import { ProductsService } from '../../../../services/products.service';

describe('ProductComponent', () => {
  let productComponent: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let productsService : ProductsService;
  let spy : any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ]
    })
    .compileComponents();

    productsService = new ProductsService();
    // productComponent = new ProductComponent(productsService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    productComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => { 
    productsService = null;
    productComponent = null;
  });
  
  it("Comprar(): true ",()=>{
    expect(productComponent.Comprar()).toBeTrue()
  });
  
  it("getTextService() ", ()=>{
    spy = spyOn(productsService, 'getTest').and.returnValue(false);
    expect(productComponent.getTextService()).toBeTruthy();
  });

  it('should create', () => {
    expect(productComponent).toBeTruthy();
  });
});
