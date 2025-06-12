/* Ejercicio 5: Uso de Interfaces para Polimorfismo 
Crea una interfaz Empleado con un método trabajar. Implementa esta interfaz 
en clases Programador y Disenador, donde cada clase debe implementar el 
método con su propia lógica. Luego, crea una función que reciba un objeto de 
tipo Empleado y llame a su método trabajar. */

interface Empleado{
    trabajar():void;
}

class Programador implements Empleado{
    trabajar(): void {
        console.log(`Programador trabajando`);
    }
}
class Disenador implements Empleado{
    trabajar(): void {
        console.log(`Diseñador trabajando`);
    }
}

function proceso(empleado:Empleado):void{
    empleado.trabajar();
}

const emp1 : Empleado = new Programador();
const emp2 : Empleado = new Disenador();
proceso(emp1);
proceso(emp2);