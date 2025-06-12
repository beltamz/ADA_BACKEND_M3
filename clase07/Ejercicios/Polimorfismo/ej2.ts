/* Ejercicio 2: Polimorfismo con Sobreescritura de Métodos (Tiempo de Ejecución) 
Crea una jerarquía de clases de Vehiculo con dos clases derivadas: Coche y 
Moto. Cada clase debe sobrescribir el método arrancar de la clase base para 
proporcionar una implementación específica de cómo arrancar.  */

export class Vehiculo{
    arrancar():void{
        console.log(`Vehiculo esta arrancando...`);
        
    };
}

class Coche extends Vehiculo{
    arrancar(): void {
        console.log(`El coche esta arrancando...`);
    }
}

class Moto extends Vehiculo{
    arrancar(): void {
        console.log(`La moto esta arrancando...`);
    }
}

const coche1= new Coche();
const moto1= new Moto();

coche1.arrancar();
moto1.arrancar();