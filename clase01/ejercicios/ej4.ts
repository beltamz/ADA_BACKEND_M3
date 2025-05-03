/*Declara dos variables, una para almacenar un nombre y otra para almacenar una
edad. Si la edad no se asigna, debes imprimir un mensaje que diga "Edad no
proporcionada". Si se asigna la edad, imprímela junto al nombre.
 */

export let nombre : string = "Maria";
export let edad: number | undefined;

if(typeof edad == "undefined"){
    console.log("Edad no proporcionada");
}else{
    console.log(`Hola ${nombre}, tienes ${edad} años.`);
}