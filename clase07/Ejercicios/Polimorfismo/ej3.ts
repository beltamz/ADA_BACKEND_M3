/*Ejercicio 3: Encapsulamiento con Métodos Privados 
Crea una clase Banco con un saldo inicial privado. El saldo solo puede ser 
modificado a través de un método depositar y otro retirar, los cuales deben 
validar que la cantidad no sea negativa. Implementa métodos públicos para 
consultar el saldo.  */

class Banco{
    private _saldoInicial: number;

    constructor(saldoInicial: number){
        this._saldoInicial= saldoInicial;
    }

    public get SaldoInicial():number{
        return this._saldoInicial;
    }

    depositar(value:number):void{
        if(value<0){
            console.log(`No se puede depositar un valor negativo`);
        }else{
            this._saldoInicial+= value;
        }
    }

    retirar(value: number): void{
        if(value>0 && value<this._saldoInicial){
            this._saldoInicial-= value;
        }else if(value> this._saldoInicial){
            console.log("El monto a retirar excede a lo existente en la cuenta");
        }else if(value<0){
            console.log(`No se puede retirar un valor negativo`);
        }
    }
}

const cuenta1= new Banco(1000);
cuenta1.depositar(200);
cuenta1.retirar(300);
cuenta1.depositar(-30);//probamos depositar un numero negativo
cuenta1.retirar(-10);//probamos retirar un numero negativo
cuenta1.retirar(5000);//probamos retirar un monto mayor al existente
console.log(`Monto actual: ${cuenta1.SaldoInicial}`);