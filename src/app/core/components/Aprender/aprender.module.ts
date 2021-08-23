import { NgModule } from '@angular/core';

import { PageNotFoundComponent } from './Componentes/page-not-found/page-not-found.component';
import { UsoDirectivasComponent } from './Componentes/uso-directivas/uso-directivas.component';
import { MainAprenderComponent } from './Componentes/main-aprender/main-aprender.component';
import { MenuAprenderComponent } from './Componentes/menu-aprender/menu-aprender.component';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AprenderRoutingModule } from './aprender-rounting.module';

import { SharedModule } from '../../../shared/shared.module';

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
        AprenderRoutingModule,
        SharedModule
    ],
    exports:[]
})

export class AprenderModule {}