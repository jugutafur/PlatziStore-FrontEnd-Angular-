import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AprenderModule } from './components/Aprender/aprender.module';
import { PlatziStoreModule } from './components/proyectoPlatziStore/platziStore.module';

import { ProductsService } from './services/products.service';

@NgModule ({
  declarations: [],
  imports: [
      CommonModule,
      FormsModule,
      AprenderModule,
      PlatziStoreModule
  ],
  exports:[],
  providers:[
    ProductsService
  ]
})

export class CoreModule { }