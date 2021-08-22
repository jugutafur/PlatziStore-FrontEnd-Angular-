import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PageNotFoundComponent } from './Componentes/page-not-found/page-not-found.component';
import { UsoDirectivasComponent } from './Componentes/uso-directivas/uso-directivas.component';
import { MainAprenderComponent } from './Componentes/main-aprender/main-aprender.component';
import { MenuAprenderComponent } from './Componentes/menu-aprender/menu-aprender.component';

import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
import { AprenderRoutingModule } from './aprender-rounting.module';

@NgModule ({
    declarations:[
        PageNotFoundComponent,
        UsoDirectivasComponent,
        MainAprenderComponent,
        MenuAprenderComponent
    ],
    imports:[
        FormsModule,
        CommonModule,
        // RouterModule,
        AprenderRoutingModule
    ],
    exports:[]
})

export class AprenderModule {}