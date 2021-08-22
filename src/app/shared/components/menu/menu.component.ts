import { Component } from '@angular/core';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  
  menu= ['Platzi','Estudiar'];

  public prueba: number;

  images: string [] = [
    'assets/swiper/banner-1.jpg',
    'assets/swiper/banner-2.jpg',
    'assets/swiper/banner-3.jpg'
  ]

  constructor() { 
    this.prueba= 5;
  }


}
