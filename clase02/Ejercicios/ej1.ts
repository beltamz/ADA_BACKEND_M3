/*Consigna: Crea una función llamada multiplicarNumeros que acepte dos
parámetros, ambos de tipo number, y retorne el producto de ambos números.
Luego, muestra el resultado en consola llamando a la función.
*/

function multiplicarNumeros(a:number, b:number): number {
    return a*b;
}

let resultado : number= multiplicarNumeros(2,5);
console.log(`Resultado de la multiplicacion: ${resultado}`);