/*Consigna: Crea una función llamada sumarTodos que acepte una cantidad
indefinida de números y devuelva su suma. Luego, llama a la función con varios
números y muestra el resultado en la consola.
 */

function sumarTodos(numeros:number []) : number{
    let sumatoria: number=0;

    for (let index = 0; index < numeros.length; index++) {
        sumatoria= sumatoria+ numeros[index];
    }
    return sumatoria;
}

export let numeros: number[]=[1,2,3,4];

let resultado: number= sumarTodos(numeros);
console.log(`Total suma: ${resultado}`);