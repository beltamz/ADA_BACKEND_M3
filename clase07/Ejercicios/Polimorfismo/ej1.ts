/* Ejercicio 1: Polimorfismo con Sobrecarga de Funciones (Tiempo de Compilación) 
Implementa una clase Calculadora que tenga un método sumar. El método debe 
estar sobrecargado para permitir la suma de: 
• Dos números enteros. 
• Tres números enteros. 
• Dos cadenas, concatenando las dos cadenas.  */

class Calculadora{
    sumar(a:number, b: number):number;

    sumar(a: number,b:number, c:number): number;

    sumar(a: string, b: string): string;
    
    sumar(a: number| string,b: number| string, c?: number): number| string|null{
        if(typeof a =="number" && typeof b=="number"){
            if(c!=undefined){
                return a+b+c;
            }else{
                return a+b;
            }
        }

        if(typeof a=="string" && typeof b=="string"){
            return a + " " + b;
        }

        return null;
    }
}

const calculadora= new Calculadora();

console.log(`Suma dos numeros: ${calculadora.sumar(29,45)}`);
console.log(`Suma tres numeros: ${calculadora.sumar(29,45,10)}`);
console.log(`Concatenacion de cadena: ${calculadora.sumar("Buen","dia")}`);