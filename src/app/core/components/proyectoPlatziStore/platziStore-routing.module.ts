import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules} from '@angular/router';

import { MainPlatziStoreComponent } from './components/main-platzi-store/main-platzi-store.component';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes : Routes = [
    {
        path: '',
        component: MainPlatziStoreComponent
    },
    {
        path: 'Inicio',
        component: MainPlatziStoreComponent
    },
    {
        path:'Productos',
        component: ProductComponent
    },
    {
        path:'Contact',
        component: ContactComponent
    },
    {
        path:'**',
        component: PageNotFoundComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  

export class PlatziStoreRoutingModule {}