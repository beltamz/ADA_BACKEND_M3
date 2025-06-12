/* Ejercicio 4: Abstracción con Clases Abstractas 
Implementa una clase abstracta DispositivoElectronico con métodos abstractos
encender y apagar. Crea dos clases concretas Televisor y Radio, que 
sobrescriban estos métodos. */

abstract class DispositivoElectronico{
    abstract encender():void;
    abstract apagar():void;
}

class Televisor{
    encender(): void{
        console.log("Televisor encendiendose...\nTelevisor encendido");
    }

    apagar(): void{
        console.log("Televisor apagandose...\nTelevisor apagado");
    }
}

class Radio{
    encender(): void{
        console.log("Radio encendiendose...\nRadio encendida");
    }

    apagar(): void{
        console.log("Radio apagandose...\nRadio apagada");
    }
}

const tele= new Televisor();
export const radio= new Radio();

tele.encender();
tele.apagar();

radio.encender();
radio.apagar();