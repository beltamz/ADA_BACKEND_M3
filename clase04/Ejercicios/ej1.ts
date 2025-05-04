/* Actividad 1: Usar For...In para recorrer propiedades de un objeto
Crea un objeto con al menos 3 propiedades (nombre, edad, ciudad) y usa un
bucle for...in para recorrer y mostrar cada propiedad y su valor*/

let person1: {name: string, age: number, city : string}={
    name: 'Lucia' ,
    age: 54,
    city: 'Buenos Aires'
}

for (const property in person1) {
    console.log(`Property : ${property}, Value: ${person1[property as keyof typeof person1]}`);
}
