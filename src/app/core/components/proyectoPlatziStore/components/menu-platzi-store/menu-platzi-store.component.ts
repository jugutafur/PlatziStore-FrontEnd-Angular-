import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-menu-platzi-store',
  templateUrl: './menu-platzi-store.component.html',
  styleUrls: ['./menu-platzi-store.component.scss']
})
export class MenuPlatziStoreComponent {

  @Input() Entrada: string;

  lista= ['Inicio','Productos','Contact']

}
