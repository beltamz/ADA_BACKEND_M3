/* 1. Ejercicio de Coche 
Diseña una clase Coche que represente un vehículo. Esta clase debe tener 
propiedades privadas para marca, modelo, año, y kilometraje. Implementa 
métodos para encender el coche y realizar un viaje, que incrementen el 
kilometraje. Asegúrate de que el año no sea menor que 1886 (el año en que se 
inventó el coche) y que el kilometraje no pueda ser negativo. Si se intenta 
establecer un año o kilometraje no válido, imprime un mensaje indicando el 
error.  */

export class Coche{
    private _marca: string;
    private _modelo: string;
    private _anio: number;
    private _kilometraje: number;

    constructor(_marca: string,_modelo: string, _anio: number){
        this._marca= _marca;
        this._modelo= _modelo;
        
        if(_anio<1886){
            console.log("Error: El año debe ser igual o mayor a 1886 ");
            this._anio=1886
        }else{
            this._anio=_anio;
        }

        this._kilometraje= 0;
    }

    encenderCoche(): void{
        console.log(`Motor encendiendose`);
    }

    realizarViaje(value:number): void{
        if(value<0){
            console.log("Error: El kilometraje no puede ser menor a 0.");
        }else{
            this._kilometraje= this._kilometraje + value; 
            console.log(`${value} kms agregados a su kilometraje`);
            
        }
    }

    mostrarCoche(){
        console.log(`Marca: ${this._marca}\nModelo: ${this._modelo}\nAño: ${this._anio}\nKilometraje: ${this._kilometraje} km\n----------------------`);
    }
}

const coche1= new Coche("Toyota", "Corolla", 1900);
console.log("----------Coche 1----------");

coche1.mostrarCoche();
coche1.encenderCoche();
coche1.realizarViaje(200);
coche1.mostrarCoche();

console.log("----------Coche 2----------");
const coche2= new Coche("Nissan", "Frontier", 1700);
coche2.mostrarCoche();
coche2.encenderCoche();
coche2.realizarViaje(1500);
coche2.mostrarCoche();