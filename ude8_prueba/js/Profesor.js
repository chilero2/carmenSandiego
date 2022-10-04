import { Escuela } from "./Escuela.js";

class Profesor {
    tipos = ['mixto', 'ciencias', 'letras'];
    
    constructor(nombre, tipo) {
        if (!this.tipos.includes(tipo)) {
            throw 'Error: tipo de profesor';
        }
        this.tipo = tipo;
        this.nombre = nombre;    
    }

    visualizacion() {
        return 
    }


    

    

}