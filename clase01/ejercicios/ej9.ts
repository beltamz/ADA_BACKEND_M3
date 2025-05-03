/*Declara dos variables booleanas y realiza una comparación lógica (como AND,
OR). Imprime el resultado. */

let booleano1 : boolean = true;
let booleano2 : boolean = false;

if (booleano1 && booleano2) {
    console.log(`${booleano1} && ${booleano2}`);
}else if (booleano1 || booleano2){
    console.log(`${booleano1} || ${booleano2}`);
}else{
    console.log(`Ambas son false`);
}