/* Ejercicio 2: Clases Abstractas - Sistema de Vehículos 
Crea una clase abstracta Vehiculo con una propiedad velocidad y un método 
abstracto mover(). Luego, implementa dos clases concretas: Auto y Bicicleta. Usa
los modificadores de acceso para controlar la visibilidad de las propiedades. */

export abstract class Vehiculo{
    constructor(protected velocidad: number){}
    abstract mover(): void;
}

class Auto extends Vehiculo{
    mover(): void {
        console.log(`Auto se esta moviendo a ${this.velocidad} km/h.`); 
    }
}

class Bicicleta extends Vehiculo{
    mover(): void {
        console.log(`Bicicleta se esta moviendo a ${this.velocidad} km/h.`);
    }
}

const auto= new Auto(60);
const bici= new Bicicleta(10); 

auto.mover();
bici.mover();