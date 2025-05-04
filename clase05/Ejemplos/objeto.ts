//Definicion de una interfaz
interface Estudiante{
    nombre: string,
    edad: number,
    materiaFavorita: string,
    promedio: number,
    saludar: ()=>void,
    obtenerDetalles : ()=>string;
}

//creacion de un objeto que cumple la interfaz estudiante
const estudiante1: Estudiante= {
    nombre : 'Pedro',
    edad: 14,
    materiaFavorita: "Matematica",
    promedio: 8,

    saludar: function () {
        console.log(`Hola! Soy ${estudiante1.nombre}.`);
    },

    obtenerDetalles:()=>{
        return `Tengo ${estudiante1.edad} años.\nMi materia favorita es : ${estudiante1.materiaFavorita}\nMi promedio es de ${estudiante1.promedio}`;
    }
}

estudiante1.saludar();
console.log(estudiante1.obtenerDetalles());