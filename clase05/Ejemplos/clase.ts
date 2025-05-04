//Definimos la clase
class Gato{
    //propiedades
    public nombre: string;
    public edad: number;
    private raza: string;

    constructor(nombre: string, edad: number, raza: string){
        this.nombre=nombre;
        this.edad=edad;
        this.raza= raza;
    }
    //metodos
    public obtenerInfo(): string{
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Raza: ${this.raza}`;
    }

    public cambiarRaza(nuevaRaza:string): void{
        this.raza= nuevaRaza;
    }
}

//Instanciamos la clase
const gato1= new Gato('Luna', 3, 'Siames');

//Llamamos al metodo obtenerInfo()
console.log(gato1.obtenerInfo());

//Llamamos al metodo cambiarRaza()
gato1.cambiarRaza('Persa');
console.log(gato1.obtenerInfo());