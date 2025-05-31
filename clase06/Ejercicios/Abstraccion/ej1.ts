/*Ejercicio 1: Abstracción Básica - Ejemplo del Mundo Real 
Modela un sistema de cafetería. Crea una interfaz Bebida que defina un método
preparar(). Implementa esta interfaz en dos clases: Cafe y Te. Usa abstracción 
para que ambas bebidas oculten su lógica de preparación interna pero 
expongan un comportamiento común. 
 */

interface Bebida{
    preparar(): void;
}

class Cafe implements Bebida{
    preparar(): void {
        console.log("Se esta preparando un café.");
        
    }
}

class Te implements Bebida{
    preparar(): void {
        console.log("Se esta preparando un té.");
    }
}

const cafe= new Cafe();
const te= new Te();

cafe.preparar();
te.preparar();