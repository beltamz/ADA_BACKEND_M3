/*Ejercicio 7: Uso de tuplas en una función genérica (EE)
Crea una función genérica que acepte una tupla con dos elementos de cualquier
tipo y retorne una nueva tupla con los elementos invertidos.*/

function invertirTupla<T,U>(tupla: [T,U]): [U,T] {
    return [tupla[1],tupla[0]]
}

console.log(invertirTupla([22, "Bueno"]));