/*  6. Ejercicio de Supermercado 
Crea una clase Producto que contenga propiedades privadas como nombre, 
precio y cantidad. Utiliza getters y setters, asegurándote de que precio no sea 
negativo y que cantidad no sea menor que 0. */

export class Producto{
    private _nombre: string;
    private _precio!: number;
    private _cantidad!: number;

    constructor(nombre: string,precio: number,cantidad: number){
        this._nombre=nombre;
        this.Cantidad=cantidad;
        this.Precio= precio;
    }

    public get Nombre():string{
        return this._nombre
    }

    public get Precio():number{
        return this._precio;
    }

    public set Precio(value: number){
        if(value<0){
            console.log("Precio no valido, se le proporcionara $0 por defecto");
            this._precio= 0;
        }else{
            this._precio= value;
        }
    }

    public get Cantidad(): number{
        return this._cantidad;
    }

    public set Cantidad(value:number){
        if(value<0){
            console.log("Cantidad no valida, se le proporcionara 0 por defecto");
            this._cantidad= 0;
        }else{
            this._cantidad= value;
        }
    }
}

const prod1= new Producto("Vrink- leche de almendras", 4000, 5);
//probamos valores no aceptados
const prod2= new Producto("Chocolate 70% cacao", -5, -4);

console.log(`Nombre: ${prod1.Nombre}\nPrecio: $${prod1.Precio}\nCantidad: ${prod1.Cantidad}`);
console.log(`Nombre: ${prod2.Nombre}\nPrecio: $${prod2.Precio}\nCantidad: ${prod2.Cantidad}`);