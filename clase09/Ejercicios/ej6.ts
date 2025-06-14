/*Ejercicio 6: Encapsulamiento en clases
Crea una clase CuentaBancaria que tenga atributos privados como saldo y un
método público para consultar el saldo y otro para depositar dinero.  */

class CuentaBancaria{
    constructor(private _saldo: number){}
    
    public consultarSaldo(): void{
        console.log(`Saldo actual: $${this._saldo}`);
    }

    public depositarDinero(deposito: number): number{
        return this._saldo+=deposito;
    }
}

const cuenta = new CuentaBancaria(4000);
cuenta.depositarDinero(500);
cuenta.consultarSaldo();