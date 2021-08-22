import { Component, AfterViewInit } from '@angular/core';

import Swiper from 'swiper';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements  AfterViewInit{

  mySwiper: Swiper;

  ngAfterViewInit(){
    this.mySwiper = new Swiper('.swiper-container');
  }

  // ngAfterViewInit() {
  //   this.mySwiper = new Swiper(".swiper-container", {
  //   navigation: {
  //   nextEl: “.swiper-button-next”,
  //   prevEl: “.swiper-button-prev”
  //   }
  //   });
  //   }
}
