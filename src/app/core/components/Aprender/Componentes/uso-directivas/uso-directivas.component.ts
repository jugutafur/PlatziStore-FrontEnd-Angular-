import { Component } from '@angular/core';
import { dias } from '../../../../models/general/general';

@Component({
  selector: 'app-uso-directivas',
  templateUrl: './uso-directivas.component.html',
  styleUrls: ['./uso-directivas.component.scss']
})
export class UsoDirectivasComponent {

  title = 'Store';
  public name: string;
  public lastname: string;
  public isLoggedIn: boolean;
  public resetArray: boolean;
  items = ['juan', 'guillermo', 'tafur', 'ramirez'];
  semana: dias = {
    lunes: '',
    martes: '',
    miercoles: '',
    jueves: '',
    viernes: '',
    sabado: '',
    domingo: '',
  };
  dias = [
    'lunes',
    'martes',
    ' miercolers',
    'jueves',
    'viernes',
    'sabado',
    'domingo',
  ];

  constructor() {
    this.name = 'juan';
    this.lastname = 'tafur';
    this.isLoggedIn = false;
    this.resetArray = true;
    const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
    // document.getElementById("demo").innerHTML = fruits.toString();
  }

  object : Object  = {var1:'UNO', var2:'DOS', var3:'TRES' }

  power = 10;

  value: string ='prueba de pipe LOWERCASE';
  // value!: string;
  // change(value: string) {
  //   this.value = value;
  // }

  addItemFinal() {
    // push = agregar al final
    this.dias.push(this.title);
  }

  deleteItem(index: number, quitar: number) {
    // El primer parámetro (2) define la posición donde se deben agregar nuevos elementos (empalmados).
    // El segundo parámetro (0) define cuántos elementos se deben quitar.
    // Elementos a agregar
    this.dias.splice(index, quitar, 'perro', 'gato', 'casa');
  }

  resetArrayDias(i: number) {
    this.resetArray = false;
  }

  EliminarXitem(index: number){
    this.dias.splice(index,1)
  }

  AgarrarSalidadeHijo(SalidaDeHijo: string){
    console.log('haz agarrado el string de hijo= ', SalidaDeHijo);
  }

}
