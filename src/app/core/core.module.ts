import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

import { AprenderModule } from './components/Aprender/aprender.module';
import { PlatziStoreModule } from './components/proyectoPlatziStore/platziStore.module';

@NgModule ({
  declarations: [],
  imports: [
      CommonModule,
      FormsModule,
      // RouterModule,
      AprenderModule,
      PlatziStoreModule
  ],
  exports:[
    
  ]
})

export class CoreModule { }