/*Ejercicio 2: Promesas - Simulador de Envío de Correos Electrónicos
Consigna:
Vas a crear una función llamada enviarCorreo() que simule el envío de un correo electrónico usando una promesa. 
La promesa debe cumplir con los siguientes requisitos:
1. Resolver si el correo fue enviado exitosamente (usa Math.random() para simular éxito o error).
2. Rechazar si ocurre un fallo en el envío.
3. La operación debe tardar 2 segundos en completarse (usa setTimeout()).
4. Implementa .then(), .catch(), y .finally() para manejar la respuesta:
o Si el correo se envía exitosamente, imprime el mensaje: "Correo enviado a [destinatario]".
o Si falla, imprime: "Error: No se pudo enviar el correo a [destinatario]".
o En finally(), muestra siempre el mensaje: "Operación finalizada".
Implementa la función para enviar correos a dos destinatarios distintos. */

function enviarCorreo(destinatario:string) {
    return new Promise((resolve,reject)=>{
        console.log(`Envio de correo a ${destinatario} en proceso...`);
        
        setTimeout(() => {
            let condicion: boolean= Math.random() >0.5;

            if(condicion){
                resolve(`Correo enviado exitosamente a ${destinatario}`);
            }else{
                reject(`No se pudo enviar el correo a ${destinatario}`);
            }
        }, 2000);
    })
}

enviarCorreo("abc@gmail.com")
    .then((resultado)=> console.log(resultado))
    .catch((error) => console.error( error))
    .finally(() => console.log("Proceso finalizado"))

enviarCorreo("guille@gmail.com")
    .then((resultado)=> console.log(resultado))
    .catch((error) => console.error( error))
    .finally(() => console.log("Proceso finalizado"))