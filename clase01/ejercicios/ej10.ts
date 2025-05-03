/*Declara un objeto en TypeScript con propiedades de tipo string, number y
boolean. Accede a estas propiedades e imprímelas en la consola */

let vianda:{comida: string, precio: number, aptoCeliaco: boolean}={
    comida: "Pizza",
    precio: 1000,
    aptoCeliaco: true
};

console.log(`La vianda ${vianda.comida}, cuesta $ ${vianda.precio}. Es apta para celiacos? ${vianda.aptoCeliaco}`);