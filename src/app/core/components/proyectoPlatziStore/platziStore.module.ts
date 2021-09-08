import { NgModule } from '@angular/core';

import { ContactComponent } from './components/contact/contact.component';
import { ProductComponent } from './components/product/product.component';
import { MainPlatziStoreComponent } from './components/main-platzi-store/main-platzi-store.component';
import { MenuPlatziStoreComponent } from './components/menu-platzi-store/menu-platzi-store.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DetailComponent } from './components/detail/detail.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
import { PlatziStoreRoutingModule } from './platziStore-routing.module';
import { MaterialModule } from '../../../material/material.module';

@NgModule ({
    declarations:[
        ContactComponent,
        ProductComponent,
        MainPlatziStoreComponent,
        MenuPlatziStoreComponent,
        PageNotFoundComponent,
        DetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        // RouterModule,
        PlatziStoreRoutingModule,
        MaterialModule
    ],
    exports: []
})

export class PlatziStoreModule {} 