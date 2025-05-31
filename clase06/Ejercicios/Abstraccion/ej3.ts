/*  Ejercicio 3: Interfaces - Sistema de Gestión de Usuarios 
Crea una interfaz Usuario que tenga las propiedades: 
• nombre (obligatoria). 
• edad (opcional). 
• readonly id (solo lectura). 
Implementa esta interfaz en una clase UsuarioConcreto. Luego, intenta 
modificar la propiedad id para mostrar cómo se aplican las restricciones de solo 
lectura. */

interface Usuario{
    nombre: string;
    readonly id: number;
    edad?: number;
}

class UsuarioConcreto implements Usuario{
    public nombre: string;
    public readonly id: number;
    public edad?: number;

    constructor(nombre: string,id: number,edad?: number){
        this.nombre=nombre;
        this.id= id;
        this.edad=edad;
    }

    mostrarUsuario(): void{
        console.log(`Usuario: ${this.nombre}, ID: ${this.id} ${this.edad!=null ? `, Edad: ${this.edad}`:''}. `);
    }
}

const usuario= new UsuarioConcreto("Olga", 2,34);
const usuario2= new UsuarioConcreto("Maria", 3);

usuario.mostrarUsuario();
usuario2.mostrarUsuario();

