/*Consigna: Crea un objeto llamado deportista que tenga las propiedades nombre
(string), deporte (string), y energia (number). Luego, define una función entrenar
que acepte el objeto deportista y un número de horas de entrenamiento,
disminuyendo la energía del deportista en 5 por cada hora de entrenamiento. Al
final, muestra el estado del deportista en la consola. */

let deportista :{nombre:string,deporte:string, energia:number}={
    nombre: "Julio",
    deporte: "Tenis",
    energia: 100,
}

entrenar(deportista, 4);

function entrenar(deportista:{nombre:string,deporte:string, energia:number}, hsEntrenamiento: number): void {
    let disminuir: number= hsEntrenamiento*5;
    deportista.energia= deportista.energia-disminuir;
    console.log(deportista);
}