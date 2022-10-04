import { Profesor } from "./Profesor.js";

export class Escuela {
    constructor(nombre, localidad, director) {
        this.nombre = nombre;
        this.localidad = localidad;
        this.director = director;
        this.alumnos = [];
        this.profesores = [];
    }

    //Inserta alumnos a la escuela
    anyadeAlumno(alumno) {
        this.alumnos.push(alumno);
    }

    //Inserta profesores a la escuela
    anyadeProfesor(profesor) {
        this.profesor(profesor);
    }

    //Borrar alumno
    borrarAlumno(alumno) {
        this.alumnos.splice(this.alumnos.indexOf(alumno), 1);
    }

    //Borrar profesor
    borrarProfesor(profesor) {
        this.profesores.splice(this.profesores.indexOf(profesor), 1);
    }

    //Visualización Datos de la Esculea
    vsualizaEscuela() {
        let texto = `ESCUELA: ${this.nombre}\nLOCALIDAD: ${this.localidad}\nDIRECTOR: ${this.director}`;
        for (const alumno of this.alumnos) {
            texto += alumno + '\n';            
        }
        for (const profesor of this.profesores) {
            texto += profesor + '\n';            
        }
        return texto;
    }





}