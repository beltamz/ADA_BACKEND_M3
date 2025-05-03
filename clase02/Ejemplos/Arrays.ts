// Declaracion array simple

let frutas: string[]=['manzana', 'banana', 'pera'];

frutas.push('naranja');//agregamos al final

console.log( "Con una fruta de mas al final: "+frutas);

let ultimaFruta= frutas.pop(); //eliminamos la ultima fruta
console.log('Ultima fruta eliminada: ' + ultimaFruta);

let cadenaFrutas= frutas.join(' ~ ');
console.log(`Cadena de frutas : ${cadenaFrutas}`);
