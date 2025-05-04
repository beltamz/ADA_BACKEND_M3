/**Actividad 5: Usar aserciones dobles

Crea una variable de tipo any y haz una conversión con aserciones dobles para
convertirla en un number. Muestra el resultado. */

export let anyValue : any = 'JavaScript';

let num : number = (anyValue as unknown as number);

console.log(num);