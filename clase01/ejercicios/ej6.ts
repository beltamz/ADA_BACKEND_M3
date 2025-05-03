/*Declara una variable de tipo unknown. Asigna diferentes tipos de valores a esta
variable, y utiliza el operador typeof para verificar el tipo antes de imprimir los
valores. */

let variablePrueba:unknown;
variablePrueba= "Hola";
verificar(variablePrueba);

variablePrueba= 1234;
verificar(variablePrueba);

variablePrueba= true;
verificar(variablePrueba);

function verificar(variablePrueba:unknown): void {
    if (typeof variablePrueba == "string") {
        console.log("El valor de la variable es una cadena. ");
    }else if(typeof variablePrueba == "number"){
        console.log("El valor de la variable es un numero. ");
    }else if (typeof variablePrueba == "boolean"){
        console.log("El valor de la variable es un booleano. ");
    };
}

