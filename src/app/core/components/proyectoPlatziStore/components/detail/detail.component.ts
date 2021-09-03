import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Product } from '../../../../models/general/general';
import { ProductsService } from '../../../../services/products.service';

// esto es para capturar el dato que viene por la url

// 1. injeccion de dependencias  ActivatedRoute
// 2. de tipado Params

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public product : Product;
  public myObject = {nombre: "juan", apellido:"tafur", edad:"32"};

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  // subsscribe para ver el cambio 
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params)=> {
      // para ver en pantalla que hay en la url 
      console.log(params)
      const id = params.id;
      console.log(id);
      this.product =this.productsService.getProduct(id)
      console.log(this.product)
    });
  }

  Comprar(){
    console.log("vas a comprar");
  }
}
