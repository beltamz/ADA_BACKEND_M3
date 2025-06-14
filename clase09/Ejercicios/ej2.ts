/*2. Florería: Envío Programado de Pedidos
Crea un sistema que gestione el envío de pedidos de flores. Cada pedido debe
contener el nombre del cliente, la cantidad de flores y el tipo de flores.
Implementa las siguientes funciones:
• Añadir un pedido.
• Programar el envío de un pedido utilizando setTimeout() para simular un
retraso de 5 segundos.
• Mostrar todos los pedidos pendientes. */

type Pedido= [string,number, string];

const pedidos: Pedido[]=[];

function anadirPedido(nombre: string, cantidad: number, tipoFlor: string): void{
    const nuevoPedido: Pedido=[nombre,cantidad,tipoFlor];
    pedidos.push(nuevoPedido);
    console.log('Pedido agregado correctamente');
}

function programarEnvio(index:number) {
    setTimeout(()=>{
        if(pedidos[index]){
            console.log("Pedido enviado correctamente");
            pedidos.splice(index,1);
            pedidosPendientes();
        }else{
            console.log("Pedido no encontrado");          
        }
    }, 5000)
}

function pedidosPendientes() {
    console.log("----Pedidos por enviar----");
    
    pedidos.forEach(p=>{
        console.log(`Nombre: ${p[0]}, Cantidad: ${p[1]},Tipo de flor: ${p[2]}`);
    })
}

anadirPedido("Pedro", 10, "Rosas Amarillas");
anadirPedido("Julia", 20, "Jazmines");

pedidosPendientes();

programarEnvio(0);