/*  Ejercicio 5: Decidir Entre Clases Abstractas e Interfaces 
Diseña un sistema de transporte público. Define: 
• Una interfaz VehiculoElectrico con el método cargarBateria(). 
• Una clase abstracta Transporte con el método abstracto mover(). 
Implementa ambas estructuras en una clase concreta AutobusElectrico. */

interface VehiculoElectrico{
    cargarBateria(): void;
}

abstract class Transporte{
    constructor(protected bateria:number){}
    abstract mover(): void;
}

class AutobusElectrico extends Transporte implements VehiculoElectrico{
    cargarBateria(): void {
        if(this.bateria<=95){
            console.log("Cargando bateria...");
            this.bateria= this.bateria+5;
        }else{
            console.log(`Bateria ya al 100%`);
        }
    }

    mover(): void {
        console.log("El autobus se está moviendo...")
        this.bateria= this.bateria-5;
    }

    mostrarBateria(){
        console.log(`Bateria actual: ${this.bateria}`);
    }
}

const autobus= new AutobusElectrico(60);
autobus.mostrarBateria();
autobus.mover();
autobus.mostrarBateria();
autobus.cargarBateria();
autobus.cargarBateria();
autobus.mostrarBateria();