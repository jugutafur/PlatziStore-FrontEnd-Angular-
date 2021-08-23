import { NgModule } from '@angular/core';


import { ExponentialPipe } from './pipes/exponential.pipe';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    ExponentialPipe,
    MenuComponent,
    FooterComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ExponentialPipe,
    MenuComponent,
    FooterComponent,
    HighlightDirective
  ]
})
export class SharedModule { }
