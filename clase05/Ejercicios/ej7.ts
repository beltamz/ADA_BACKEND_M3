/*Ejercicio 7: Modificadores de Acceso
1. Define una clase Coche con propiedades marca, modelo (públicas) y
precio (privada).
2. Implementa un método para mostrar la información del coche que acceda
a las propiedades públicas y no a la privada directamente.
 */

class Coche{
    public marca: string;
    public modelo: string;
    private precio: number;

    constructor(marca: string,modelo: string,precio: number){
        this.marca= marca;
        this.modelo= modelo;
        this.precio= precio
    }

    public mostrarInfo(){
        console.log(`Marca: ${this.marca}\nModelo: ${this.modelo}\nPrecio: $ ${this.precio}`);
    }
}

const conche1= new Coche("Toyota", "Corolla", 20000);

conche1.mostrarInfo();