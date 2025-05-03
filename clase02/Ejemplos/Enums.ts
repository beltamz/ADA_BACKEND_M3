//1 - Definicion de un Enum Numerico (A pesar de tener palabras, no numeros)

enum colores{
    Rojo,
    Verde,
    Azul
}

//Acceder a los valores del enum
let coloresFavoritos: colores = colores.Verde;
console.log("Color favorito (por numero): ", coloresFavoritos);
console.log("Color favorito (por palabra): ", colores[coloresFavoritos]);

//2 - Definicion de Enum de cadenas
enum puntosCardinales{
    Norte= "N",
    Sur = "S",
    Este ="E",
    Oeste = "O"
}

//asignar un valor del enum a una variable

let direccionViaje : puntosCardinales= puntosCardinales.Norte;
console.log("Direccion del viaje: ", direccionViaje);


 