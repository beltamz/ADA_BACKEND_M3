/*Actividad 10: Consolidación de Módulos 
Crea un archivo utils/index.ts que centralice las exportaciones de mathUtils.ts, 
stringUtils.ts y user.ts. 
Asegúrate de que todas las funciones se puedan importar desde utils/index.ts. 
En main.ts, importa lo necesario desde utils/index.ts y utiliza las funciones en un solo flujo de trabajo, mostrando todos los resultados en la consola. */
import {
    add,
    subtract,
    capitalize,
    reverse,
    createUser
}from './utils/index';

let p1= createUser('lolo',43)

console.log(`User name: ${p1.name}\nAge: ${p1.age}\nReversed name: ${reverse(p1.name)}\nCapitalized name: ${capitalize(p1.name)}\nSalary before discounts: ${add(2333,3434)}\nSalary after discounts: ${subtract(add(2333,3434), 2000)}  `);
