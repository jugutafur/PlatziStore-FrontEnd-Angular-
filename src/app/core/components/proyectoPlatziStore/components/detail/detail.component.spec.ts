// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { DetailComponent } from './detail.component';
// import { ProductsService} from '../../../../services/products.service';
// // import { ActivatedRoute } from '@angular/router';

// describe('DetailComponent', () => {
//   let detailComponent : DetailComponent;
//   let fixture: ComponentFixture<DetailComponent>;
//   let productsService: ProductsService;
// //   let activatedRoute: ActivatedRoute;
//   let spy: any; 

//     beforeEach(async () => {
//     await TestBed.configureTestingModule({
//         declarations: [ DetailComponent ]
//     })
//     .compileComponents();

//     // activatedRoute = new ActivatedRoute();
//     productsService = new ProductsService();
//     // detailComponent = new DetailComponent(activatedRoute, productsService);
//     });

//     beforeEach(() => {
//         fixture = TestBed.createComponent(DetailComponent);
//         detailComponent = fixture.componentInstance;
//         fixture.detectChanges();
//     });

//     afterEach(() => { 
//         detailComponent = null;
//         productsService = null;
//         // activatedRoute = null;
//     });

// //En este caso para probar este metodo que tiene injeccion de depedencias se puede de varias maneras

// // 1. injectando el servicio real: Como  en este caso el constructor de nuestro componente principal tiene imjectado dos depedencias es necesario injectarlas de manera real es por ello que se deben de importar 

// //     describe("getTestFromService(); ,Real Service", ()=>{
// //         it("Should return getTestFromService ", ()=>{
// //             detailComponent = new DetailComponent(new ActivatedRoute(), new ProductsService());
// //             const salida: string = "text from ProductsService.getTest() "
// //             expect(detailComponent.getTestFromService()).toBe('text from ProductsService.getTest()');
// //         });
// //     });

// // //   2. con un servicio fake o mock

// //     describe("getTestFromService(); ,Mock Service", ()=>{
// //         it("Shoul return getTestFromService ",()=>{
// //             const mock = { getTest: ()=> 'text from ProductsService.getTest()'}
// //             detailComponent = new DetailComponent(new ActivatedRoute(), mock as ProductsService);
// //             expect(detailComponent.getTestFromService()).toBe('text from ProductsService.getTest()');
// //         });
// //     });

// // //  3. Con un spy
// //     describe("getTestFromService(); ,Spy Service", ()=>{
// //         it("Shoul return getTestFromService ", ()=>{
// //             const valueServiceSpy = jasmine.createSpyObj('text from ProductsService.getTest()', ['getTest']);
// //             const stubValue = 'stu Value';
// //             valueServiceSpy.getTest.and.returnValue(stubValue);
// //             detailComponent = new DetailComponent(new ActivatedRoute(), valueServiceSpy);
// //             expect(detailComponent.get)
// //         });
// //     });


//     it("getTestFromService(), Should return true ", ()=>{
//         spy = spyOn(productsService, 'getTest' ).and.returnValue(true);
//         expect(detailComponent.getTestFromService()).toBeTruthy();
//     });

//     // it('should create', () => {
//     //     expect(detailComponent).toBeTruthy();
//     // });
    
// });
