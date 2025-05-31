/*Ejercicio 10: Registro de Estudiantes 
1. Crea un sistema para registrar Estudiantes con las siguientes clases: 
o Estudiante: Clase que incluye propiedades como nombre, edad y 
curso, además de un método que muestre la información del 
estudiante. 
o RegistroEstudiantes: Clase que maneje una lista de estudiantes, con 
métodos para agregar un estudiante y mostrar todos los estudiantes 
registrados. */

class Estudiante{
    public nombre: string;
    public edad: number;
    public curso: string;

    constructor(nombre: string,edad: number,curso: string){
        this.nombre= nombre;
        this.edad= edad;
        this.curso= curso;
    }

    public mostrarEstudiante(){
        console.log(`Alumno: ${this.nombre}, Edad: ${this.edad}, Curso: ${this.curso}`);
    }
}

class RegistroEstudiantes{
    public lista: Estudiante[];

    constructor(lista: Estudiante[]){
        this.lista= lista;
    }

    public agregarEstudiante(estudiante: Estudiante){
        this.lista.push(estudiante);
    }

    public mostrarEstudiantes(){
        this.lista.forEach(est=>est.mostrarEstudiante());
    }
}

const est1= new Estudiante("Luisa",12,"Matematica");
const est2= new Estudiante("Luis",13,"Ingles");
const est3= new Estudiante("Mario",14,"Fisica");


const listaEstudiantes= new RegistroEstudiantes([]);
listaEstudiantes.agregarEstudiante(est1);
listaEstudiantes.agregarEstudiante(est2);
listaEstudiantes.agregarEstudiante(est3);

listaEstudiantes.mostrarEstudiantes();


