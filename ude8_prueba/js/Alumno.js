/* eslint-disable space-before-function-paren */
export class Alumno {
  constructor(nombre, curso) {
    if (nombre === '' || curso === '') {
      throw Error('Debes rellenar todos los cambos')
    }
    this.nombre = nombre
    this.curso = curso
  }

  // Modificar datos alumno
  modificarAlumno(nombre, curso) {
    if (nombre === '' || curso === '') {
      throw Error('Debe introducir todos los datos del alumno')
    }
    this.nombre = nombre
    this.curso = curso
  }

  // Visualización Datos de Alumno
  mostrar = () => {
    const fragment = document.createDocumentFragment()
    const itemList = document.createElement('li')
    itemList.textContent = 'Nombre: ' + this.nombre + '. Curso: ' + this.curso
    fragment.append(itemList)
    return fragment
  }
}
