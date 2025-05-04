/**Actividad 2: Usar For...Of para recorrer los valores de un arreglo
Crea un arreglo con al menos 5 números y usa un bucle for...of para imprimir
cada número en consola.
 */

let oddNumbers: number[]=[1,3,5,7,9];
let i: number= 0;

for (const num of oddNumbers) {
    console.log(`Position ${i}, Value: ${num}`);
    i++;
}