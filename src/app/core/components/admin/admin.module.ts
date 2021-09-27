import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddressFormComponent } from './address-form/address-form.component';
import { NavegationComponent } from './navegation/navegation.component';
import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreeComponent } from './tree/tree.component';
import { CargueProductosComponent } from './cargue-productos/cargue-productos.component';

import { MaterialModule } from '../../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddressFormComponent, 
    NavegationComponent, 
    TableComponent, 
    DashboardComponent, 
    TreeComponent, 
    CargueProductosComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AdminModule { }
