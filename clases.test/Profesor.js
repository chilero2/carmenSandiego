/* eslint-disable space-before-function-paren */

class Profesor {
  tipos = ['mixto', 'ciencias', 'letras']
  escuela = ''
  constructor(nombre, tipo) {
    this.tipo = tipo
    this.nombre = nombre
    this.alumnos = new Set()
  }

  // Métodos de selección

  // Devuelve una lista de alumnos
  getAlumnos() {
    return [...this.alumnos]
  }

  // Devuelve un alumno según su nombre
  seleccionaAlumno(nombre) {
    for (const alumno of this.alumnos) {
      if (alumno.nombre === nombre) {
        return alumno
      }
    }
    return false
  }

  // Devuele si el profesor es su tutor
  esTutor(alumno) {
    return this.alumnos.has(alumno)
  }

  // Métodos modificación

  // Selecciona escuela
  setEscuela(escuela) {
    this.escuela = escuela
  }

  // Inserta alumnos a la escuela
  anyadeAlumno(alumno) {
    if (this.escuela === '') {
      throw Error('Error: este profesor no trabaja')
    }
    this.alumnos.add(alumno)
  }

  // Borrar alumno
  borraAlumno(alumno) {
    this.alumnos.delete(alumno)
  }
}

module.exports = Profesor
