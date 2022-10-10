import { Profesor } from "./Profesor.js";

export class Escuela {
    constructor(nombre, localidad, director) {
        this.nombre = nombre;
        this.localidad = localidad;
        this.director = director;
        this.profesores = [];
    }

    //Inserta profesores a la escuela
    anyadeProfesor(profesor) {
        this.profesor(profesor);
        profesor.escuela = this.nombre;
    }
    
    //Borrar profesor
    borrarProfesor(profesor) {
        this.profesores.splice(this.profesores.indexOf(profesor), 1);
    }

    //Visualización Datos de la Esculea
    toString = () => {
        let texto = `ESCUELA: ${this.nombre}\nLOCALIDAD: ${this.localidad}\nDIRECTOR: ${this.director}`;
        for (const profesor of this.profesores) {
            texto += profesor + '\n';
        }
        return texto;
    }





}