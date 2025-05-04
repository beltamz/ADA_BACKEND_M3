class Animal{
    //propiedades
    public nombre : string;
    private tipoAlimento: string;
    protected especie : string;

    constructor(nombre: string, tipoAlimento: string, especie: string){
        this.nombre= nombre;
        this.tipoAlimento= tipoAlimento;
        this.especie= especie;
    }

    //metodo publico accesible desde cualquier parte
    public describirAnimal(): void{
        console.log(`Este es ${this.nombre}, de la especie ${this.especie}.`);
        //this.mostrarTipoAlimento();
        //this.sonidoAnimal();

    }

    private mostrarTipoAlimento(): void{
        console.log(`${this.nombre} se alimenta con ${this.tipoAlimento}`);
    }

    protected sonidoAnimal(): void{
        console.log(`${this.nombre} hace un sonido`);
    }
}

const miAnimal1= new Animal("Sol", 'Balanceado', 'perro');
miAnimal1.describirAnimal();
//miAnimal1.mostrarTipoAlimento(); No las reconoce al estar en private y protected, si las pongo dentro de un metodo publico las lee
//miAnimal1.sonidoAnimal();