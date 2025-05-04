/**Actividad 7: Aserciones y genéricos con funciones y objetos

Crea una función genérica llamada procesarObjeto que reciba un objeto
genérico y:
1. Use un bucle for...in para recorrer sus propiedades.
2. Si el valor de una propiedad es una cadena de texto (string), conviértelo a
minúsculas.
3. Si es un número (number), elévalo al cuadrado.
4. Si es un booleano, invierte su valor.
Usa aserciones de tipo para realizar las transformaciones. */

class GenericObject<T>{
    content: T;

    constructor(content: T){
        this.content= content;
    }
}

let text1 = new GenericObject<string>('SundaY');
let number1 = new GenericObject<number>(4);
let boolean1 = new GenericObject<boolean>(false);

processObject(text1);
processObject(number1);
processObject(boolean1);

function processObject<T>(value:T) {
    for (const element in value) {
        if(typeof (value[element as keyof typeof value]) === 'string' ){
            console.log(`It is a string: ${(value[element as keyof typeof value] as string).toLowerCase()}`);
        }else if(typeof (value[element as keyof typeof value]) === 'number' ){
            console.log(`It is a number: ${ Math.pow((value[element as keyof typeof value] as number),2) }`);
        }else{
            console.log(`It is a boolean: ${ !(value[element as keyof typeof value] as number) }`);
        }
    }
}