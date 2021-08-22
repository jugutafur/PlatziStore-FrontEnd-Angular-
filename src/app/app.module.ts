import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LAprenderComponent } from './layout/l-aprender/l-aprender.component';
import { LPlatziStoreComponent } from './layout/l-platzi-store/l-platzi-store.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    LAprenderComponent,
    LPlatziStoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }