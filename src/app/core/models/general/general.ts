export interface Dias{
    lunes: string;
    martes: string;
    miercoles: string;
    jueves: string;
    viernes: string;
    sabado: string;
    domingo: string;
}

export interface Product {
    id: string,
    image: string,
    title: string,
    price: number,
    description: string,
}

export class dias2{
    constructor(
        public lunes: string,
        public martes: string,
        public miercoles: string,
        public jueves: string,
        public viernes: string,
        public sabado: string,
        public domingo: string 
    ){}
}

export class Product2{
    constructor(
        public id: string,
        public image: string,
        public title: string,
        public price: string,
        public description: string,
    ){}
}

export class Person {
    constructor(
        public name: string,
        public lastName: string,
        public age: number,
    ){}

    getFullName(): string {
        return `${this.name} ${this.lastName}`;  
    }

    getAgeInOneYear(numero: number): number{
        return this.age+numero;
    }
}

