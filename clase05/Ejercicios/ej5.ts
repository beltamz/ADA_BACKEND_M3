/*Ejercicio 5: Interfaz

1. Define una interfaz llamada IPersona con propiedades nombre, edad y un
método presentarse().
2. Crea una clase llamada Persona que implemente esta interfaz y
proporciona la implementación del método presentarse(). */

interface IPersona{
    nombre: string;
    edad: number;
    presentarse():void;
}

class Persona implements IPersona{
    public nombre: string;
    public edad: number;

    constructor(nombre:string, edad: number){
        this.nombre= nombre;
        this.edad= edad;
    }
    
    presentarse(){
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }
}

const persona1= new Persona("Pedro",23);
persona1.presentarse();