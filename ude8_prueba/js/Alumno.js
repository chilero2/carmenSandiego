/* eslint-disable space-before-function-paren */
export class Alumno {
  constructor(nombre, curso) {
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
