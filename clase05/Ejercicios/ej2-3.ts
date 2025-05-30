/*Ejercicio 2: Creación de Objetos y Atributos
1. Define un objeto que represente un libro con las siguientes propiedades:
título, autor, y año de publicación.
2. Crea una instancia de ese objeto y muestra sus propiedades en la consola.
 */

class Libro{
    public titulo : string;
    public autor: string;
    public anioPublicacion: number; 

    constructor(titulo:string, autor:string, anioPublicacion: number){
        this.titulo= titulo;
        this.autor= autor;
        this.anioPublicacion= anioPublicacion
    }

    /*Ejercicio 3: Métodos en Objetos
    1. Modifica el objeto del ejercicio anterior para que incluya un método
    llamado descripcion() que devuelva una descripción del libro.
    2. Llama al método y muestra el resultado en la consola. */

    public descripcion(): void{
        console.log(`Titulo: ${libro01.titulo}\nAutor: ${libro01.autor}\nAño Publicacion: ${libro01.anioPublicacion}`);
    }
}

let libro01= new Libro("Jane Eyre", "Charlotte Bronte", 1847 );

console.log(`Resultado ejercicio 2(accediendo a cada atributo)`);

console.log(`Titulo: ${libro01.titulo}\nAutor: ${libro01.autor}\nAño Publicacion: ${libro01.anioPublicacion}`);

console.log(`Resultado ejercicio 3(usando el metodo)`);

libro01.descripcion();