import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { LAprenderComponent } from './layout/l-aprender/l-aprender.component';
import { LPlatziStoreComponent } from './layout/l-platzi-store/l-platzi-store.component';
import { PageNotFoundComponent } from './core/components/Aprender/Componentes/page-not-found/page-not-found.component';

// pathMatch: full  significa cuando la url esta sola en seco 
const routes: Routes = [
  {
    path: '',
    redirectTo: 'Estudiar',
    pathMatch: 'full'
  },
  {
    path: 'Estudiar',
    component: LAprenderComponent,
    loadChildren: () => import('./core/components/Aprender/aprender.module').then(m=> m.AprenderModule)
  },
  {
    path: 'Platzi',
    component: LPlatziStoreComponent,
    loadChildren: () => import('./core/components/proyectoPlatziStore/platziStore.module').then(m=> m.PlatziStoreModule)
  },
  { 
    path: '**', 
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
