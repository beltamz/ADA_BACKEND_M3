/* Ejercicio 3: Métodos Estáticos - Gestionar múltiples tareas con Promise.all()
Consigna:
Simula la consulta a tres APIs diferentes que devuelven información sobre usuarios, productos y ventas. 
Cada consulta debe realizarse usando una función que retorne una promesa. Usa Promise.all() para esperar 
a que todas las consultas se completen y luego:
1. Imprime un mensaje con los resultados si todas las consultas fueron exitosas.
2. Si alguna falla, imprime un mensaje de error.
3. Usa un retraso distinto para cada promesa (por ejemplo, 2, 3 y 4 segundos).
Opcional: Modifica el comportamiento para que si alguna consulta falla, se devuelva el mensaje: 
"No se pudo completar la operación: [API que falló]".*/


function consultarAPI(api:string, tiempo: number) {
    return new Promise((resolve, reject)=>{
        console.log(`Esperando respuesta de la API`);

        setTimeout(() => {
            const rdo: boolean = Math.random()>0.5;

            if(rdo){
                resolve(`Consulta a API sobre ${api} exitosa`)
            }else{
                reject(`No se pudo completar la operación: ${api}`)
            }
        },tiempo);
    })
}

let api1= consultarAPI("Usuarios", 4000);
let api2= consultarAPI("Productos", 3000);
let api3= consultarAPI("Ventas", 2500);

Promise.all([api1,api2,api3])
    .then((resultados)=>console.log(`Todas las operaciones fueron exitosas: ${resultados}`))
    .catch((error)=> console.error(error))