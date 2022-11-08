/* eslint-disable space-before-function-paren */
const Profesor = require('./Profesor.js')
class Escuela {
  constructor(nombre, localidad, director) {
    this.nombre = nombre
    this.localidad = localidad
    this.director = director
    this.profesores = new Set()
  }

  // Métodos GET

  getProfesores() {
    return [...this.profesores]
  }

  getNombre() {
    return this.nombre
  }

  getAlumnos() {
    const alumnos = []
    for (const profesor of this.profesores) {
      alumnos.push(...profesor.getAlumnos())
    }
    return alumnos
  }

  getProfesorDelAlumno(alumno) {
    for (const profesor of this.profesores) {
      if (profesor.esTutor(alumno)) {
        return profesor
      }
    }
  }

  // Métodos selección

  seleccionaProfesor(nombre) {
    for (const profesor of this.profesores) {
      if (profesor.nombre === nombre) {
        return profesor
      }
    }
    return false
  }

  trabajaAqui(profesor) {
    return this.profesores.has(profesor)
  }

  seleccionaAlumno(alumno) {
    for (const profesor of this.profesores) {
      if (profesor.seleccionaAlumno(alumno)) {
        return profesor.seleccionaAlumno(alumno)
      }
    }
  }

  estudiaAqui(alumno) {
    for (const profesor of this.profesores) {
      if (profesor.esTutor(alumno)) {
        return true
      }
    }
  }

  // Métodos modificación

  // Inserta profesores a la escuela
  anyadeProfesor(profesor) {
    if (profesor instanceof Profesor) {
      profesor.setEscuela(this.nombre)
      return this.profesores.add(profesor)
    }
    return false
  }

  // Borrar profesor
  borraProfesor(profesor) {
    this.profesores.delete(profesor)
  }

  // Borra Alumno
  borraAlumno(alumno) {
    for (const profesor of this.profesores) {
      if (profesor.esTutor(alumno)) {
        return profesor.borraAlumno(alumno)
      }
    }
  }
}

module.exports = Escuela
