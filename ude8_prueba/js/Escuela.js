/* eslint-disable space-before-function-paren */
import { crearFragmentoHTML } from './funciones.js'

export class Escuela {
  constructor(nombre, localidad, director) {
    if (nombre === '' || localidad === '' || director === '') {
      throw Error('Debes rellenar todos los capos')
    }
    this.nombre = nombre
    this.localidad = localidad
    this.director = director
    this.profesores = new Set()
  }

  // Métodos GET

  getProfesores() {
    return [...this.profesores]
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
    this.profesores.add(profesor)
    profesor.setEscuela(this.nombre)
  }

  // Modificar datos escuela
  modificaEscuela(nombre, localidad, director) {
    if (nombre === '' || localidad === '' || director === '') {
      throw Error('Se tienen que introducir todos los datos')
    }
    this.nombre = nombre
    this.localidad = localidad
    this.director = director
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

  // Métodos Mostrar info

  // Visualización Datos de la Esculea
  mostrar = () => {
    const fragment = document.createDocumentFragment()
    const title = document.createElement('h2')
    title.textContent = 'Escuela: ' + this.nombre
    title.classList.add('li__title')
    let itemList = document.createElement('li')
    itemList.classList.add('li')
    itemList.append(title)
    fragment.append(itemList)
    itemList = document.createElement('li')
    itemList.textContent = 'Localidad ' + this.localidad
    fragment.append(itemList)
    itemList = document.createElement('li')
    itemList.textContent = 'Director ' + this.director
    fragment.append(itemList)
    itemList = document.createElement('li')
    itemList.textContent = 'PROFESORES:'
    fragment.append(itemList)
    fragment.append(crearFragmentoHTML(this.profesores, 'ul'))
    itemList = document.createElement('hr')
    fragment.append(itemList)
    return fragment
  }
}
