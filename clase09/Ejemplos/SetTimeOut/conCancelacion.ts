//Ejecucion con cancelacion
//puedes asignat setTimeOut a una variable y luego cancelarlo antes de que se cumpla el tiempo utilizando clearTimeOut

let temporizador= setTimeout(()=>{
    console.log("Este mensaje no se mostrara porque cancelaremos el temporizador ");
},3000);

clearTimeout(temporizador);//cancelamos el temporizador antes de los 3 segundos, por lo tanto este codigo no se vera
