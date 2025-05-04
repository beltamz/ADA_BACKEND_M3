//Sistema de gestion de transporte

//Interfaz para vehiculos electricos
interface Electrico{
    cargarBateria():void;
}

//Clase abstracta para definir el comportamiento de todos los vehiculos
abstract class Vehiculo{
    constructor(protected tipo:string){}

    //metodo abstracto
    abstract moverse(): void;
    //metodo concreto
    describir():void{
        console.log(`Este es un vehiculo tipo: ${this.tipo}`);
    }
}

//clase concreta que extiende de la clase abstracta e implementa una interfaz

class AutoElectrico extends Vehiculo implements Electrico{
    constructor(){
        super('Auto Electrico');
    }

    moverse(): void{
        console.log(`El auto se mueve silenciosamente...`);
    }

    cargarBateria(): void {
        console.log(`Cargando la bateria del auto...`);
    }
}

const tesla= new AutoElectrico();
tesla.describir();
tesla.moverse();
tesla.cargarBateria();