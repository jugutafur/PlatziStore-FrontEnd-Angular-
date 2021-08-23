import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ContactComponent } from './components/contact/contact.component';
import { ProductComponent } from './components/product/product.component';
import { MainPlatziStoreComponent } from './components/main-platzi-store/main-platzi-store.component';
import { MenuPlatziStoreComponent } from './components/menu-platzi-store/menu-platzi-store.component';

import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
import { PlatziStoreRoutingModule } from './platziStore-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DetailComponent } from './components/detail/detail.component';

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
        PlatziStoreRoutingModule
    ],
    exports: []
})

export class PlatziStoreModule {} 