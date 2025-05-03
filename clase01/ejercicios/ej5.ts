/*Declara una variable de tipo string | null. Asigna inicialmente un valor de cadena,
y luego cambia su valor a null. Imprime ambos estados en la consola, explicando
el significado de null en TypeScript. */

let prueba : string | null= "Buen dia";

console.log(`Texto : ${prueba}`);

prueba=null; //Null es la ausencia intencional de valor

console.log(`Null : ${prueba}`);