//Actualizcion de una interfaz grafica
//setInterval() tambien puede ser until para actualizar partes de una interfaz grafica de usuario de forma periodica. Por ejemplo, un reloj que se actualiza cada segundo

function actualizarReloj() {
    //creamos una nueva instancia de date para obtener la fecha y hora actuales
    const ahora= new Date();
    //Obtenemos la hora actual (de 0 a 23) de la instancia date
    const horas=ahora.getHours();
    //Obtenemos los minutos actuales (0 a 59) de la instancia date
    const minutos= ahora.getMinutes();
    //Obtenemos los segundos actuales (0 a 59) de la instancia date
    const segundos= ahora.getSeconds();
    //mostramos la hora actual en formato "h:m:s"
    console.log(`${horas}:${minutos}:${segundos}`);
    //se crea un intervalo que llama a la funcion de actualizarReloj cada 1000ms(1 segundo) 

}

let relojIntervalo= setInterval(actualizarReloj,1000);//este intervalo se ejecutara indefinidamente hasta que sea detenido manualmente, usando el clear si se necesita