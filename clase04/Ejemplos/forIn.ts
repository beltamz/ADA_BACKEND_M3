//Ejemplo basico con un objeto

let alumna={
    nombre: "Lucia",
    edad: 22,
    curso: "Programacion"
};

//For...in itera sobre las propiedades del objeto alumna. Se imprimen las claves y valores correspondientes
for (let propiedad in alumna) {
    console.log(`Clave: ${propiedad}, Valor: ${alumna[propiedad as keyof typeof alumna]}`);
}
//keyof: le indicamos a TS que "propiedad" es una clave valida del objeto alumna
//typeof: le indicamos a TS que verifique que alumna es de tipo objeto

//Ejemplo de For...in en Arrays

let lenguajes = ["JavaScript", "Python", "TypeScript"];

for (let lenguaje in lenguajes) {
   console.log(`Ejemplo array: ${lenguaje}`);
}