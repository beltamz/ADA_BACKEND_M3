/*Consigna: Crea una función llamada crearLibro que acepte tres parámetros:
titulo (string), autor (string) y paginas (number). La función debe devolver un
objeto con esas propiedades. Luego, crea dos libros utilizando la función y
muestra sus detalles en la consola. */

function crearLibro(titulo:string, autor:string , paginas: number) {
    return {
        titulo,
        autor,
        paginas
    };
}

function mostrarLibro(libro:{titulo:string, autor:string , paginas: number}) {
    console.log(`Titulo: ${libro.titulo}\nAutor: ${libro.autor}\nCant. de paginas: ${libro.paginas}\n--------------`);
}

let libro1= crearLibro("La casa de los espiritus", "Isabel Allende" , 345);
let libro2= crearLibro("1984", "George Orwell" , 298);
let libro3= crearLibro("Jardin de las mariposas", "Dot Hutchison" , 376);

mostrarLibro(libro1);
mostrarLibro(libro2);
mostrarLibro(libro3);