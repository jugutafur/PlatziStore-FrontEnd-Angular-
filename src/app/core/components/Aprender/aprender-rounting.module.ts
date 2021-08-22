import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { MainAprenderComponent } from './Componentes/main-aprender/main-aprender.component';

const routes : Routes = [
    {
        path: '',
        component: MainAprenderComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class AprenderRoutingModule { }