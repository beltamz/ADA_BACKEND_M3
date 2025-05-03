/* Consigna: Crea una función llamada listarLibros que acepte un array de objetos
libro, donde cada libro tiene las propiedades titulo (string) y autor (string). La
función debe recorrer el array y mostrar los detalles de cada libro en la consola.*/

function listarLibros(arrayDeLibros:{titulo:string, autor: string}[]) {
    for (let index = 0; index < arrayDeLibros.length; index++) {
        console.log(arrayDeLibros[index]);
    }
}

let arrayDeLibros: {titulo:string, autor: string}[]= [{titulo: "La casa de los Espiritus", autor: "Isabel Allende"}, {titulo: "1984", autor: "George Orwell"}];
listarLibros(arrayDeLibros);