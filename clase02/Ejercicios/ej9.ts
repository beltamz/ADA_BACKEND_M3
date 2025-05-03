/*Consigna: Crea un objeto llamado coche con las propiedades marca, modelo, y
encendido (booleano). Define una función encenderCoche que acepte el objeto
coche y cambie el valor de encendido a true. Muestra el estado del coche en la
consola antes y después de llamar a la función. */

let coche: {marca: string, modelo : string, encendido: boolean}={
    marca: 'Toyota',
    modelo: 'Corolla',
    encendido: false
}

console.log(`Estado inicial del coche: Encendido? ${coche.encendido}`);
encenderCoche(coche);
console.log(`Estado actual del coche: Encendido? ${coche.encendido}`);

function encenderCoche(coche:{marca: string, modelo : string, encendido: boolean}) {
    coche.encendido=true;
    return coche;
}