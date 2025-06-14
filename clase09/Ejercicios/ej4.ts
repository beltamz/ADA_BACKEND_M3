/*4. Redes Sociales: Notificaciones de Amigos

Implementa un sistema de gestión de amigos en una red social. Cada amigo
debe tener un nombre y un estado (en línea o fuera de línea). Utiliza un
setInterval() para verificar el estado de los amigos cada 5 segundos y enviar una
notificación si un amigo se pone en línea. */


type AmigoRed = [string, boolean];

let amigos: AmigoRed[] = [];

function anadirAmigo( nombre: string, estado:boolean) {
    const nuevoAmigo: AmigoRed = [ nombre, estado];
    amigos.push(nuevoAmigo);
    console.log(`Amigo añadido con éxito.`);
}

function actualizacionAmigos() {

    setInterval(()=>{
        amigos.forEach(amigo=> {
            if(!amigo[1]){
                amigo[1]= Math.random()<0.5;
                if(amigo[1]){
                    console.log(`${amigo[0]} se ha conectado`);
                }
            }
        })
    }, 5000);
}

anadirAmigo("Pedro", false);
anadirAmigo("Luisa", false);
actualizacionAmigos();