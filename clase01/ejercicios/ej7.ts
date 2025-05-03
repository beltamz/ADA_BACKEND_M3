/*Usa un tipo literal para declarar una variable que solo acepte uno de los valores:
"Lunes", "Martes", "Miércoles". Intenta asignar otros valores y observa el error en
TypeScript.
 */

type dias = "Lunes" | "Martes" | "Miercoles"; 

let dia : dias= "Lunes";
console.log(`Dia: ${dia}`);

//let dia1 : dias = "Jueves"; --> Indica error porque Jueves no es una opcion.