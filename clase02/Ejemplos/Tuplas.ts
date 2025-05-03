//1 - Declaracion e inicializacion de una tupla
let persona : [string , number];

//Inicializacion 
persona = ["Maria", 33];

//Acceder a sus elementos
console.log("Nombre: " + persona[0]);
console.log("Edad: " + persona[1]);

//Modificamos la tupla

persona[0]= "Lucia";
persona[1]= 44;

console.log("Nuevo nombre: " + persona[0]);
console.log("Nueva edad: " + persona[1]);

//Desestructuracion de la tupla

let [nombre, edad]= persona;
console.log(`La persona se llama ${nombre}, y tiene ${edad} años.`);
