//Intervalo indefinido (cancelacion manual)
//El set interval seguira ejecutandose hasta que lo detengamos manualmente

let contador = 0;

const intervalo= setInterval(()=>{
    contador++;
    console.log(`Contador indefinido: ${contador}`);
    //aqui podriamos llamar a clearInterval  en algun momento para detener el intervalo.Por ejemplo, podrias tener alguna logica condicional externa o evento que lo detenga, pero en este caso lo dejamos correr indefinidamente
}, 1000);