//Ejemplo 1: recorrer un arrau con for...in y for...of

let countries: string []= ['Argentina', 'Belice' , 'Chile', 'Dinamarca'];


console.log('Result for...in: (Index)');

for (let country in countries) {
    console.log(country);
}

console.log('Result for...in: (Index + value)');

for (let i in countries) {
    console.log(`Index: ${i}, country: ${countries[i]}`);
}

console.log('Result for...of: (Value)');

for (let country of countries) {
    console.log(country);
}

//Ejemplo 2: Recorremos un objeto con for...in

export let car={
    brand: "Tesla",
    model: "Model S",
    year: 2023
}
console.log('--------------------');

console.log('for...in with an object');

for (let property in car) {
    console.log(`Key: ${property}, Value: ${car[property as keyof typeof car]}`); 
}

