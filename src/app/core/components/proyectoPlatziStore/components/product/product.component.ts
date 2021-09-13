import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../../../../models/general/general';
import { ProductsService } from '../../../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[];
  pro : Product[]= [];

  @Input() Entrada;

  // para sacar algun dato de este componente <tipo de dato que queremos sacar>
  @Output() salida= new EventEmitter<any>(); 
  // tambien podemos inicializar esta variable de esta manera 
  // @Output() Salida2:  EventEmitter<number> = new EventEmitter(9);

  constructor(
    private productsService: ProductsService
  ) { 
    this.Entrada= "";
  }

  ngOnInit(){
    this.products =this.productsService.getAllProducts();
    this.getProducts();
  }

  Comprar(){
    console.log("haz hecho click");
    this.salida.emit("Dato de Salida desde Hijo");
  }
  
  getProducts(){
    this.productsService.getAllProductPlatzi().subscribe(data=>{
      this.pro = data;
      console.log(data)
    })
  }

  CrearProduct(){
    const newProduct : Product = {
      id: "300",
      image: "assets/images/sudadera.png",
      title: "sudadera",
      price: 80,
      description: "Esta es la descripcion de sudadera"
    }
    this.productsService.postProduct(newProduct).subscribe(data=>{
      console.log(data);
    });
  }

  // Partial quiere decir que aunque esta modelado con Product no va a enviar todos los atributos 
  EditarProduct(){
    const newProperties: Partial<Product> = {
      description: "desde angular"
    }
    this.productsService.putProduct(1212, newProperties).subscribe(data=>{
      console.log(data);
    });
  }

  DeleteProduct(){
    this.productsService.deleteProdut(12).subscribe(data=>{
      console.log(data);
    });
  }
}
