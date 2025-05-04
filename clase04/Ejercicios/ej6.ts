/**Actividad 6: Filtrar elementos de un arreglo genérico usando For...Of y
Aserciones

Crea una función genérica llamada filtrarElementos que reciba un arreglo de
valores mixtos (por ejemplo, number | string | boolean). Usando un bucle for...of,
filtra solo los valores que sean cadenas de texto (string). Utiliza aserciones de
tipo para acceder a las propiedades específicas de string.
 */

let mixedValues: (number|string|boolean) []= [234, false, 'Screen', 4.6 , 'Keyboard'];

filterElements(mixedValues);

function filterElements<T>(value:T[]) {
    for (const element of value) {
        if(typeof element === 'string'){
            console.log(`Element:  ${element}, in Upper case: ${(element as string).toUpperCase()}`);
        }
    }
}