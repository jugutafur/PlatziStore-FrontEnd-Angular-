import { Injectable } from '@angular/core';
import { Product } from '../models/general/general';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
  ];

  constructor(
    private httpClient: HttpClient
  ) { }
  
  getAllProductPlatzi(){
    return this.httpClient.get<Product[]>(environment.Url_apiPlatziStore);
  }

  getAllProducts() :Product[]{
    return this.products;
  }

  getProductById(id: number){
    return this.httpClient.get<Product>(`${environment.Url_apiPlatziStore}/${id}`);
  }
  getProduct(id: string) :Product{
    return this.products.find(element => id === element.id)
  }

  postProduct(product: Product){
    return this.httpClient.post(`${environment.Url_apiPlatziStore}`, product)
  }

  // para no enviar todos los atributos se emplea Partial
  putProduct(idProduct : number, changes: Partial<Product>){
    return this.httpClient.put(`${environment.Url_apiPlatziStore}/${idProduct}`, changes);
  }
  
  deleteProdut(idProduct: number){
    return this.httpClient.delete(`${environment.Url_apiPlatziStore}/${idProduct}`);
  }
}
