import { Alumno } from "./Alumno.js";

export class Profesor {
    tipos = ['mixto', 'ciencias', 'letras'];
    escuela = '';
    constructor(nombre, tipo) {
        
        if (!this.tipos.includes(tipo)) {
            throw 'Error: tipo de profesor';
        }
        this.tipo = tipo;
        this.nombre = nombre;
        this.alumnos = new Set();
    }

    //Inserta alumnos a la escuela
    anyadeAlumno(alumno) {
        if (this.escuela == '') {
            throw 'Error: este profesor no trabaja';
        }
        this.alumnos.add(alumno);
    }

    //Borrar alumno
    borrarAlumno(alumno) {
        this.alumnos.delete(alumno);
    }

    //Imprimir Alumnos
    imprimeAlumnos(){
        let lista = `${this.nombre} tiene los siguientes alumnos:\n`;
        for (const alumno of this.alumnos) {
            lista += alumno.toString();            
        }
    }

    //Sobreescribe el método toString
    toString = () => {
        return `${this.nombre} es un profesor de ${this.tipo} y ${(this.escuela !== undefined) ? `trabaja en la escuela y ${this.imprimeAlumnos()}` + this.escuela : 'no trabaja'}\n`;
    }
    

    
}




