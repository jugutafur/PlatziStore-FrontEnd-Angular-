import { ComponentFixture, TestBed, } from '@angular/core/testing';
import { UsoDirectivasComponent } from './uso-directivas.component';
import { Dias, dias2 } from '../../../../models/general/general';


describe("UsoDirectivasComponent",() =>{

    const app = new UsoDirectivasComponent;
    let fixture: ComponentFixture<UsoDirectivasComponent>;

    beforeEach(async()=>{
        // const app = new UsoDirectivasComponent();
    });

    describe("suma() ", ()=>{
        it("Shoul return suma a+b ", ()=>{
            const a = 9;
            const b = 7;
            expect(app.suma(a, b)).toEqual(16);
        });
    });
    
    // describe("addItemFinal() ",()=>{
    //     it("Should return array + new element in the end ", ()=>{
    //         const word : string = 'home'
    //         expect(app.addItemFinal(word)).toEqual(['lunes','martes','miercoles','jueves','viernes','sabado','domingo','home']);
    //     });
    // });

    describe("deleteItem()", ()=>{
        it("should return, string[] ", ()=>{
            const uno: number = 1;
            const dos: number = 2;
            expect(app.deleteItem(uno,dos)).toEqual(['lunes','jueves','viernes','sabado','domingo'])
        });
    });

    // describe("resetArrayDias()", ()=>{
    //     it("Should return Array Original string[] ", ()=>{
    //         expect(app.resetArray()).toBeTrue()
    //     });
    // });

            
            // beforeEach(async () => {
            //     await TestBed.configureTestingModule({
            //         declarations: [ UsoDirectivasComponent ]
            //     })
            //     .compileComponents();
            // });
            
            
            // describe("deleteItem(), ",()=>{
                //     it("Should return array + xElement in yPosicion",()=>{
                    //         let array = ["1", "2", "3", "4", "5", "6", "7", "8"];
                    //         let newElements = ["casa", "perro"];
                    //         array.splice(3,2);
                    //         expect();
                    //     });
                    // });
                    
                    
                    // beforeEach(() => {
                        //     fixture = TestBed.createComponent(UsoDirectivasComponent);
                        //     component = fixture.componentInstance;
                        //     fixture.detectChanges();
                        // });
                        
    // it('should create', () => {
    //     expect(component).toBeTruthy();
    // });
    
});
