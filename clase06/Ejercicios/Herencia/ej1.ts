/*Ejercicio 1: Herencia Simple  
Consigna: Define una clase base Torta que tenga propiedades generales como
nombre y tipo, y un método hacerDescripcion() que devuelva una descripción
general de la torta. Luego, crea una clase derivada TortaDeChocolate que 
extienda de Torta y sobrescriba el método hacerDescripcion() para que devuelva
"Soy una torta de chocolate, deliciosa y suave."  */

class Torta{
    public nombre: string;
    public tipo: string;

    constructor(nombre: string,tipo: string){
        this.nombre= nombre;
        this.tipo= tipo;
    }

    public hacerDescripcion(){
        console.log(`------Torta-----\nNombre: ${this.nombre}\nTipo: ${this.tipo}`);
    }
}

class TortaDeChocolate extends Torta{
    constructor(nombre: string){
        super(nombre, 'Chocolate');
    }

    public hacerDescripcion(){
        console.log("Soy una torta de chocolate, deliciosa y suave.");
    }
}

const torta1= new TortaDeChocolate("Matilda");
torta1.hacerDescripcion();