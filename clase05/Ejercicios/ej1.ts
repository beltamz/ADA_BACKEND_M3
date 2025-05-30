/*Ejercicio 1: Operaciones básicas con Arrays
1. Declara un array de números con los valores [5, 10, 15, 20, 25].
2. Imprime el tercer elemento del array.
3. Añade el número 30 al final del array.
4. Elimina el primer número del array.
5. Muestra por consola la longitud actual del array. */

let valores : number[]=[5, 10, 15, 20, 25];

console.log(`Tercer elemento: ${valores[2]}`);
valores.push(30);
valores.shift();
console.log(valores);