export class Alumno {
    constructor(nombre, curso) {
        this.nombre = nombre;
        this.curso = curso;
    }


    //Sobreescribe el método toString
    toString = () => {
        return `${this.nombre} es un alumno de ${this.curso}\n`;
    }





}