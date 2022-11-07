/* eslint-disable space-before-function-paren */
// import { Alumno } from "./Alumno.js";
import { crearFragmentoHTML } from './funciones.js'

export class Profesor {
  tipos = ['mixto', 'ciencias', 'letras']
  escuela = ''
  constructor(nombre, tipo) {
    if (!this.tipos.includes(tipo)) {
      throw Error('Error: tipo de profesor')
    }
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

  // Métodos de Visualización

  // Visualización Datos de Profesor
  mostrar = () => {
    const fragment = document.createDocumentFragment()
    // Crear titulo
    const title = document.createElement('h3')
    title.textContent = 'Profesor: ' + this.nombre
    title.classList.add('li__subtitle')
    let itemList = document.createElement('li')
    itemList.classList.add('li')
    itemList.append(title)
    fragment.append(itemList)
    itemList = document.createElement('li')
    itemList.textContent = 'Nombre: ' + this.nombre
    fragment.append(itemList)
    itemList = document.createElement('li')
    itemList.textContent = 'Tipo: ' + this.tipo
    fragment.append(itemList)
    itemList = document.createElement('li')
    itemList.textContent = 'ALUMNOS'
    fragment.append(itemList)
    fragment.append(crearFragmentoHTML(this.alumnos, 'ul'))
    return fragment
  }
}
