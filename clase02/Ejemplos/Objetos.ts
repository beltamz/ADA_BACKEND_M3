//1- Definimos un objeto basico

let auto={
    marca: 'Toyota',
    modelo: 'corolla',
    anio: 2022
}

//mostramos las propiedades del objeto en consola
console.log(`Marca: ${auto.marca} \nModelo: ${auto.modelo} \nAño: ${auto.anio}`);

//2- Declaracion explicita del tipo de un objeto

let libro:{nombre: string, autor: string, anioPublicacion: number}={
    nombre: 'La casa de los espiritus',
    autor: 'Isabel Allende',
    anioPublicacion: 1980
}

console.log(`Nombre: ${libro.nombre} \nAutor: ${libro.autor} \nAño publicacion: ${libro.anioPublicacion}`);

//3- Propiedades opcionales

let estudiante: {nombre:string, curso: number, esRegular?:boolean}={
    nombre: "Pepe",
    curso: 1025,
}

console.log(`Nombre: ${estudiante.nombre} \nCurso: ${estudiante.curso} \nEs estudiante regular?: ${estudiante.esRegular ?? "Desconocido"}`);

//Metodos en un objeto

let perro ={
    nombre: "Loki",
    raza: "Chihuahua",
    ladrar: function(){
        return `${this.nombre} esta ladrando!`
    }
}

console.log(perro.ladrar());