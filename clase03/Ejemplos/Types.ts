//1 - Alias de tipo primitivo
//Alias para tipos basicos o primitivos (number, string, boolean)

type ID= number; // alias para numeros (id representa un numero)
type nombre = string; //alias para cadenas
type activo = boolean; // alias para booleano

//usamos los alias para declarar variables

let usuarioID: ID= 33;//Variable de tipo ID (number)
let nombreUsuario: nombre= "Lucia";
let cuentaActiva: activo= false;

console.log(`Usuario: ${nombreUsuario}, Id: ${usuarioID}, activa: ${cuentaActiva}`);

// 2- Alias para objetos
//alias para definir un objeto complejo(una direccion con tres propiedades)

type direccion = {
    calle: string;
    ciudad: string;
    codigoPostal: number
}

//usamos el alias direccion para crear un objeto con las propiedades especificadas
let miDireccion: direccion={
    calle: "Avenida Salvador",
    ciudad: "Buenos Aires",
    codigoPostal: 111
}

console.log(`Vivo en ${miDireccion.calle}, ${miDireccion.ciudad}, codigo postal: ${miDireccion.codigoPostal}`);

// 3 - Alias para uniones de tipo
//Donde una variable puede tener una o varios tipos posibles

type Resultado = "exito" | "error";//Resultado solo puede ser Exito o Error
type IdUsuario= string | number;

//usamos el alias resultado y IdUsuario para definir las variables

let estadoOperaciones : Resultado= "exito";
let IdUsuario1: IdUsuario = 1234;
let IdUsuario2: IdUsuario = "f001";

console.log(`Estado de operacion: ${estadoOperaciones}, Id Usuario: ${IdUsuario1}`);

//4 - Alias para funciones
//toma como argumento 2 numeros y devuelve un numero, esto se usa para definir la "firma" de funciones que deben cumplir con cierto formato

type operacionesMatematicas = (a: number, b: number)=> number;

//Implementacion de dos funciones que siguen el formato de operacionesMatematicas
const sumar: operacionesMatematicas= (a,b)=> a +b;
const restar: operacionesMatematicas = (a,b)=> a- b;

console.log(`Sumar: ${sumar(3,5)}, y restar: ${restar(5,5)}.`);

//5 - Alias para arrays
//Puede ser array de numeros o cadena

type ListaNumero = number[];
type ListaCadenas= string[];

//Usamos los alias para crear arrays
let numeros : ListaNumero = [1,2,3,4];
let cadenas : ListaCadenas = ["uno", "dos" , "tres"];

console.log(`Numeros: ${numeros.join(" , ")}. `);
console.log(`Cadenas: ${numeros.join(" , ")}. `);
