import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavegationComponent } from './navegation/navegation.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';
import { CargueProductosComponent } from './cargue-productos/cargue-productos.component';

const routes: Routes = [
  {
    path:'',
    component: NavegationComponent,
    children:[
      {
        path:'adrresFrom',
        component: AddressFormComponent
      },
      {
        path:'dashboard',
        component: DashboardComponent
      },
      {
        path:'table',
        component: TableComponent
      },
      {
        path:'Tree',
        component: TreeComponent
      },
      {
        path:'Cargue',
        component: CargueProductosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
