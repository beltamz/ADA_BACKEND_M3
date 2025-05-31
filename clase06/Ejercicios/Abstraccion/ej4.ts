/** 
Ejercicio 4: Comparación - Clases Abstractas vs Interfaces 
Crea una interfaz PagoOnline con un método procesarPago(). 
Crea una clase abstracta Pago con un método concreto validarMonto() y un 
método abstracto completarPago(). 
Implementa ambas estructuras en una clase concreta PagoConTarjeta.  */

interface PagoOnline{
    procesarPago():void;
}

abstract class Pago{
    constructor(protected monto: number){}

    validarMonto(): boolean{
        return this.monto>0;
    }

    abstract completarPago(): void;
}

class PagoConTarjeta extends Pago implements PagoOnline{
    
    procesarPago(): void {
        console.log(`Procesando pago con tarjeta, por favor espere...`);
    }

    completarPago(): void {
        console.log(`Pago realizado con éxito.`);   
    }
}

const nuevoPago= new PagoConTarjeta(200);
const nuevoPago2= new PagoConTarjeta(0);

console.log(`Pago n1:`);
verificar(nuevoPago);
console.log(`Pago n2:`);
verificar(nuevoPago2);

function verificar(pago:PagoConTarjeta) {
    if(pago.validarMonto()){
        pago.procesarPago();
        pago.completarPago();
    }else{
        console.log(`Error en el monto: Pago no realizado`);
    }
}
