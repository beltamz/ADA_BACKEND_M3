//Funcion generica

function identity<T>(value:T):T {
    return value;
}

//Uso de la funcion

let num= identity<number>(10);
console.log(`Example with number type: ${num}`);

let text = identity<string>('Hello');
console.log(`Example with string type: ${text}`);
