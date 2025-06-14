/*5. Banco: Transferencias Programadas

Crea un sistema para gestionar cuentas bancarias en un banco. Cada cuenta
debe tener un nombre del propietario, un saldo y un estado (activo o inactivo).
Implementa las siguientes funciones:
• Añadir una cuenta.
• Realizar una transferencia entre cuentas después de un retraso de 8
segundos utilizando setTimeout().
• Mostrar todas las cuentas.*/

type ctaBancaria=[string,number, boolean];

let ctasBancarias: ctaBancaria[] = [];

function anadirCuenta( nombre: string, saldo: number, estado: boolean) {
    const nuevaCuenta: ctaBancaria = [nombre, saldo ,estado];
    ctasBancarias.push(nuevaCuenta);
    console.log(`Cuenta creada con éxito.`);
}

function mostrarCuentas() {
    console.log("Cuentas actuales:");

    ctasBancarias.forEach(cta => {
        const [nombre,saldo ,estado] = cta;
        console.log(`Nombre: ${nombre}, Saldo: $${saldo}, Esta activa? ${estado}`);
    });
}

function transferir(indexOrigen: number, monto: number,indexDestino: number ) {
    setTimeout(() => {
        ctasBancarias[indexOrigen][1]= ctasBancarias[indexOrigen][1]-monto;
        ctasBancarias[indexDestino][1]= ctasBancarias[indexDestino][1]+monto;
        console.log('Transferencia realizada con exito');
        mostrarCuentas();
    }, 8000);
}

anadirCuenta("Raul", 20000, true);
anadirCuenta("Esteban", 15000, true);

mostrarCuentas();

transferir(0, 100,1);