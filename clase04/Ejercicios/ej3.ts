/**Actividad 3: Crear una función genérica
Crea una función genérica que tome un parámetro de cualquier tipo y lo
devuelva. Prueba la función con diferentes tipos de datos.  */

function genericFunction<T>(value:T): T {
    return value;
}

let data1= genericFunction('Hello');
let data2= genericFunction(12345);
let data3= genericFunction(true);

console.log(`Value 1: ${data1}`);
console.log(`Value 2: ${data2}`);
console.log(`Value 3: ${data3}`);