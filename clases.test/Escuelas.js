/* eslint-disable space-before-function-paren */
const Escuela = require('./Escuela.js')
const Profesor = require('./Profesor.js')

class Escuelas {
  constructor() {
    this.escuelas = new Set()
  }

  // Devuelve número de escuelas
  getNumeroEscuelas() {
    return this.escuelas.size
  }

  // Métodos GET
  getEscuelas() {
    return this.escuelas
  }

  getProfesores() {
    const profesores = []
    for (const escuela of this.escuelas) {
      profesores.push(...escuela.getProfesores())
    }
    return profesores
  }

  getAlumnos() {
    const alumnos = []
    for (const escuela of this.escuelas) {
      alumnos.push(...escuela.getAlumnos())
    }
    return alumnos
  }

  // Métodos selección Elemento

  selecionaEscuela(nombre) {
    for (const escuela of this.escuelas) {
      if (escuela.nombre === nombre) {
        return escuela
      }
    }
    return false
  }

  seleccionaProfesor(profesor) {
    if (profesor instanceof Profesor) {
      for (const escuela of this.escuelas) {
        if (escuela.seleccionaProfesor(profesor)) {
          return escuela.seleccionaProfesor(profesor)
        }
      }
    }
    return false
  }

  seleccionaAlumno(alumno) {
    for (const escuela of this.escuelas) {
      if (escuela.seleccionaAlumno(alumno)) {
        return escuela.seleccionaAlumno(alumno)
      }
    }
  }

  // Métodos modificación

  anyadeEscuela(escuela) {
    if (escuela instanceof Escuela) {
      return this.escuelas.add(escuela)
    }
    return false
  }

  eliminaEscuela(escuela) {
    return this.escuelas.delete(escuela)
  }

  eliminaProfesor(profesor) {
    for (const escuela of this.escuelas) {
      if (escuela.trabajaAqui(profesor)) {
        return escuela.borraProfesor(profesor)
      }
    }
  }

  eliminaAlumno(alumno) {
    for (const escuela of this.escuelas) {
      if (escuela.estudiaAqui(alumno)) {
        return escuela.borraAlumno(alumno)
      }
    }
  }

  modificaEscuela(nuevaEscuela, profesor) {
    for (const escuela of this.escuelas) {
      if (escuela.trabajaAqui(profesor)) {
        escuela.borraProfesor(profesor)
      }
    }
    nuevaEscuela.anyadeProfesor(profesor)
  }

  eliminaTutorAlumno(alumno) {
    for (const escuela of this.escuelas) {
      if (escuela.getProfesorDelAlumno(alumno)) {
        escuela.getProfesorDelAlumno(alumno).borraAlumno(alumno)
        return true
      }
    }
  }
}

module.exports = Escuelas
