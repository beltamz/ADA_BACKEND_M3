/**Actividad 4: Usar aserciones de tipo

Declara una variable de tipo any y usa una aserción para tratarla como string,
accediendo a la propiedad .length. */

export let anyValue: any = 'Typescript';

let lengthAnyValue: number = (anyValue as string).length;

console.log(`Length of ${anyValue} : ${lengthAnyValue}.`);