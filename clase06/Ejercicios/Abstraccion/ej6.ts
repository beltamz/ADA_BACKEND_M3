/* Ejercicio 6: Sistema de Gestión de Productos Usando Abstracción y Clases  
Crea un sistema de inventario que gestione diferentes tipos de productos. 
Define una clase abstracta Producto con: 
• Propiedades protegidas: nombre, precio. 
• Un método abstracto calcularDescuento(). 
Implementa dos subclases: Ropa y Electronica. 
• La subclase Ropa aplicará un 10% de descuento. 
• La subclase Electronica tendrá un 5% de descuento. 
Añade un método concreto en la clase abstracta para mostrar la información del 
producto. */

abstract class Producto{
    constructor(protected nombre: string, protected precio: number){}

    abstract calcularDescuento():number;

    mostrarInfo(){
        console.log(`-----Producto------`);
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Precio: ${this.precio}`);    
    }
}

class Ropa extends Producto{
    calcularDescuento(): number {
        let dto: number= this.precio*0.10;
        return this.precio-dto;
    }

    mostrarDtoRopa(){
        console.log(`Precio con 10% dto: ${this.calcularDescuento()}`);
    }
}

class Electronica extends Producto{
    calcularDescuento(): number {
        let dto: number= this.precio*0.05
        return this.precio-dto;
    }

    mostrarDtoElectronica(){
        console.log(`Precio con 5% dto: ${this.calcularDescuento()}`);
    }
}

const ropa1= new Ropa("Remera", 3000);
const electronica1= new Electronica("Televisor", 50000);

ropa1.mostrarInfo();
ropa1.mostrarDtoRopa();
electronica1.mostrarInfo();
electronica1.mostrarDtoElectronica();