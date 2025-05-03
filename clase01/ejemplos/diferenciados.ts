//any: permite almacenar cualquier valor din restricciones

let anyValue :any= "Hola soy Any" ;//string
console.log(anyValue);

anyValue= 42;//number
console.log(anyValue);

anyValue= {name: "Typescript"};//object
console.log(anyValue);

//unknown : similar a any pero requiere que se verifique antes de su uso

let unknownValue: unknown= "Hola soy Unknown";
console.log(unknownValue);

function logMessage(message:string): void {
    console.log(message);
}

logMessage("Esto es una funcion void");

//never
function infiniteBucle(): never {
    while (true){
        console.log("Este bucle nunca termina");   
    }
}

//infiniteBucle();

//null y undefined
let valorNull: string | null = null;
console.log(valorNull);
valorNull= "Ahora tiene valor";