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
    console.log("arranco")
    this.products =this.productsService.getAllProducts();
  }

  Comprar(){
    console.log("haz hecho click");
    this.salida.emit("Dato de Salida desde Hijo");
  }

  
}
