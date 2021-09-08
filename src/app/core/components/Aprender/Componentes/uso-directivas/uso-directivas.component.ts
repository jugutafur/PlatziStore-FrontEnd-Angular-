import { Component, OnInit } from '@angular/core';
import { Dias } from '../../../../models/general/general';

@Component({
	selector: 'app-uso-directivas',
	templateUrl: './uso-directivas.component.html',
	styleUrls: ['./uso-directivas.component.scss']
})

// export const sumar=(a,b)=>a +b;
export class UsoDirectivasComponent implements OnInit {

	saludar = (nombre, apellido) => `hola ${nombre} ${apellido}`;
	title = 'Store';
	name: string;
	lastname: string;
	isLoggedIn: boolean;
	resetArray: boolean;
	items = ['juan', 'guillermo', 'tafur', 'ramirez'];
	semana: Dias = {
		lunes: '',
		martes: '',
		miercoles: '',
		jueves: '',
		viernes: '',
		sabado: '',
		domingo: '',
	};
	dias = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];
	Cdias= this.dias.slice();
	MostrarDias: string[];


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

	ngOnInit():void{
	}
	
	addItemFinal(word: string): string[] {
		// push = agregar al final
		this.Cdias.push(word);
		return this.MostrarDias= this.Cdias.slice();
	}

	// El primer parámetro (2) define la posición donde se deben agregar nuevos elementos (empalmados).
	// El segundo parámetro (0) define cuántos elementos se deben quitar.
	// Elementos a agregar
	deleteItem(index: number, quitar: number): string[] {
		// return this.dias.splice(index, quitar, 'perro', 'gato', 'casa');
		this.Cdias.splice(index, quitar);
		return this.MostrarDias= this.Cdias.slice();
	}

	resetArrayDias(): string[] {
		this.Cdias= this.dias.slice();
		return this.MostrarDias= this.Cdias.slice();
	}

	EliminarXitem(index: number): any{
		return this.dias.splice(index,1)
	}

	AgarrarSalidadeHijo(SalidaDeHijo: string): string{
		return "haz agarrado el string de hijo= "+ SalidaDeHijo
	}

	outConsole(){
		console.log(this.saludar("Juan", "tafur"))
	}

	obtenerMeses(){
		const  mesActual = function(){
			return 'Agosto';
		}

		const mesSiguiente = function(){
			return 'Septiembre';
		}
	}

	mesesCalculador(){
		let api = new this.obtenerMeses();

		let mesSigu = function(){
			return api.mesSiguiente();
		}

		let mesAct = function(){
			return api.mesActual();
		}
	}

	suma(a: number, b:number):number{
		const result= a+b;
		return result
	}
}
