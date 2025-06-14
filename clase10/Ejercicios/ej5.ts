/*Ejercicio 5: Promesas Anidadas - Flujo Completo de Registro y Bienvenida
Consigna:
Crea una secuencia de promesas que simulen el flujo de un usuario que se registra en una plataforma y 
luego recibe un mensaje de bienvenida. La secuencia debe ser:
1. Registrar Usuario (promesa que tarda 2 segundos).
2. Enviar Email de Bienvenida (promesa que tarda 1 segundo).
3. Mostrar Mensaje Final al completar ambas tareas.
Si alguna de las promesas falla, debe imprimirse un mensaje de error*/

function registrarUsuario() {
    return new Promise((resolve)=>{
        console.log(`Registrando usuario,por favor espere...`);

        setTimeout(() => {
            resolve(`Usuario registrado exitosamente`)
        }, 2000);
    })
}

function emailBienvenida() {
    return new Promise((resolve)=>{
        console.log(`Dentro de unos minutos, recibira un email de bienvenida.`);

        setTimeout(() => {
            resolve(`Email de bienvenida enviado.`)
        }, 1000);
    })
}

registrarUsuario()
    .then((rdo1)=>{
        console.log(rdo1);
        return emailBienvenida();
    })
    .then((rdo2)=>{
        console.log(rdo2);
        console.log("Proceso finalizado exitosamente");
    })
    .catch(()=> console.error("Hubo un error en el proceso"))
