/*  Ejercicio 9: Sistema de Gestión de Vehículos 
1. Crea un sistema de gestión de Vehículos que incluya las siguientes clases: 
o Vehiculo: Clase base con propiedades como marca, modelo y un 
método para mostrar información del vehículo. 
o Coche: Clase que extiende Vehiculo e incluye una propiedad para 
tipoCombustible y un método para mostrar la información completa 
del coche. 
o Motocicleta: Clase que extiende Vehiculo e incluye una propiedad 
para cilindrada y un método para mostrar la información completa 
de la motocicleta. 
 */

export class Vehiculo{
    public marca: string;
    public modelo: string;

    constructor(marca: string, modelo: string){
        this.marca= marca;
        this.modelo= modelo
    }

    public mostrarVehiculo(){
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
}

class Coche extends Vehiculo{
    public tipoCombustible: string;

    constructor(marca: string, modelo: string, tipoCombustible: string){
        super(marca, modelo);
        this.tipoCombustible= tipoCombustible;
    }

    public mostrarCoche(){
        console.log(`Info Coche\nMarca: ${this.marca}, Modelo: ${this.modelo}, Tipo de combustible: ${this.tipoCombustible}`);
    }
}

class Motocicleta extends Vehiculo{
    public cilindrada: string;

    constructor(marca: string, modelo: string, cilindrada: string){
        super(marca, modelo);
        this.cilindrada= cilindrada;
    }

    public mostrarMotocicleta(){
        console.log(`Info moto\nMarca: ${this.marca}, Modelo: ${this.modelo}, Cilindrada: ${this.cilindrada}`);
    }
}

const coche1= new Coche("Toyota","Corolla","Diesel");
const moto1= new Motocicleta("Hero","Hunk", "150cc");

console.log(`Vehiculos en general: `);
coche1.mostrarVehiculo();
moto1.mostrarVehiculo();

coche1.mostrarCoche();
moto1.mostrarMotocicleta();