/*Consigna: Crea una función llamada aumentarSalario que acepte un objeto
empleado con las propiedades nombre (string) y salario (number), y un número
que represente el porcentaje de aumento. La función debe aumentar el salario
del empleado y devolver el nuevo salario. Muestra en la consola el resultado. */

function aumentarSalario(empleado:{nombre:string,salario: number}, aumento: number){
    empleado.salario= empleado.salario+ (empleado.salario*aumento);
    return empleado;
}

let empleado:{nombre:string,salario: number}={
    nombre: "Lucia",
    salario: 10000
}

aumentarSalario(empleado, 0.25);
console.log(empleado);