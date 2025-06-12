/*  5. Ejercicio de Vacaciones 
Desarrolla una clase Vacacion que tenga propiedades privadas para destino, 
duracion (en días) y presupuesto. Implementa getters y setters, asegurándote de 
que duracion no sea menor que 1 y presupuesto sea mayor que 0. */

class Vacacion{
    private _destino: string;
    private _duracion!: number;
    private _presupuesto!: number;

    constructor(destino: string, duracion: number, presupuesto: number){
        this._destino= destino;
        this.Duracion= duracion;
        this.Presupuesto= presupuesto;
    }

    public get Destino(): string{
        return this._destino;
    }

    public get Duracion(): number{
        return this._duracion;
    }

    public set Duracion(value: number){
        if(value<1){
            console.log(`El valor ingresado no es correcto, se le asignara 1 automaticamente`);
            this._duracion= 1;
        }else{
            this._duracion= value;
        }
    }

    public get Presupuesto(): number{
        return this._presupuesto;
    }

    public set Presupuesto(value: number){
        if(value<=0){
            console.log(`El valor ingresado no es correcto, se le asignara 1 automaticamente`);
            this._presupuesto= 1;
        }else{
            this._presupuesto= value;
        }
    }
}
//Ingresamos valores no aceptados en duracion y presupuesto
const viaje1= new Vacacion("Nassau", -10, -10000);
//Ingresamos valores aceptados en duracion y presupuesto
const viaje2= new Vacacion("Miami", 12, 9000);

console.log(`Destino: ${viaje1.Destino}, Duración: ${viaje1.Duracion} días, Presupuesto: $${viaje1.Presupuesto}`);
console.log(`Destino: ${viaje2.Destino}, Duración: ${viaje2.Duracion} días, Presupuesto: $${viaje2.Presupuesto}`);

