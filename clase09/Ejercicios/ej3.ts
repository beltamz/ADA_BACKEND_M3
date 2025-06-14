/*3. Compañía de Seguros: Renovación Automática de Pólizas
Desarrolla un sistema que gestione las pólizas de seguros de una compañía.
Cada póliza debe tener un identificador, nombre del cliente, monto asegurado y
una fecha de renovación. Implementa las siguientes funciones:
• Añadir una póliza.
• Programar la renovación de la póliza utilizando setTimeout().
• Mostrar todas las pólizas activas.
 */
type Poliza= [number, string,number, string];

const polizas: Poliza[]=[];

const fechaActual= new Date();
fechaActual.getDate();

let fechaRenovada= new Date(fechaActual);
fechaRenovada.setMonth(fechaActual.getMonth()+6);


function anadirPoliza(id: number,nombre: string, monto: number, fechaRenovacion: string): void{
    const nuevaPoliza: Poliza=[id, nombre,monto,fechaRenovacion];
    polizas.push(nuevaPoliza);
    console.log('Poliza agregada correctamente');
}

function renovacionPoliza(index:number) {
    setTimeout(()=>{
        if(polizas[index]){
            console.log("Poliza actualizada correctamente");
            polizas[index][3]=fechaRenovada.toLocaleDateString(); 
            polizasActivas();
        }else{
            console.log("Poliza no encontrada");          
        }
    }, 5000)

}

function polizasActivas() {
    console.log("----Polizas activas----");
    
    polizas.forEach(p=>{
        console.log(`ID: ${p[0]}, Nombre: ${p[1]}, Monto: $ ${p[2]},Fecha renovacion: ${p[3]}`);
    })
}

anadirPoliza(1, "Pedro", 1000, fechaActual.toLocaleDateString());
anadirPoliza(2, "Julia", 20000, fechaActual.toLocaleDateString());

polizasActivas();

renovacionPoliza(0);