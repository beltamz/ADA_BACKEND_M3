/*Ejercicio 4: Promise.race() - Carrera entre Tareas
Consigna:
Crea tres promesas que representen tareas con tiempos de ejecución aleatorios.
Usa Promise.race() para que el programa imprima solo la primera tarea que se complete. Luego:
1. Asegúrate de que se imprime qué tarea ganó la carrera.
2. Controla posibles errores si alguna de las promesas falla. */

const prom1= new Promise((resolve)=>{
    setTimeout(resolve,Math.floor(Math.random()*10),"Promesa 1");
});

const prom2= new Promise((resolve)=>{
    setTimeout(resolve,Math.floor(Math.random()*10),"Promesa 2");
});

const prom3= new Promise((resolve)=>{
    setTimeout(resolve,Math.floor(Math.random()*10),"Promesa 3");
});

Promise.race([prom1, prom2, prom3])
    .then((resultado)=> console.log(`Ganador: ${resultado}`))