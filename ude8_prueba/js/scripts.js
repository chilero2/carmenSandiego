import { formularioCrearItem, formularioMostrarItems } from './funciones.js'
import { escuelas } from './CargaDatos.js'
import { Escuela } from './Escuela.js'
import { Profesor } from './Profesor.js'
import { Alumno } from './Alumno.js'

// CONSTANTES Y VARIABLE DECLARADAS
const mostrar = document.getElementById('show')
const box = document.getElementById('box')
const opcion = document.getElementById('opciones')
const crear = document.getElementById('crear')
const borrar = document.getElementById('borrar')
const modificar = document.getElementById('modificar')

// FUNCIONES
const limpiarPantalla = () => {
  while (box.firstChild) {
    box.removeChild(box.firstChild)
  }
}

const mostrarDatos = () => {
  limpiarPantalla()
  box.append(escuelas.mostrarEscuelas())
}

const crearItem = () => {
  limpiarPantalla()
  const clase = opcion.value
  box.append(formularioCrearItem(clase))
  const form = document.getElementById('form')
  form.addEventListener('submit', e => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    if (clase === 'Escuela') {
      const escuela = new Escuela(data.nombre, data.localidad, data.director)
      escuelas.anyadeEscuela(escuela)
    }
    if (clase === 'Profesor') {
      const profesor = new Profesor(data.nombre, data.tipo)
      const escuela = escuelas.selecionaEscuela(data.profesor_escuela)
      escuela.anyadeProfesor(profesor)
    }
    if (clase === 'Alumno') {
      const alumno = new Alumno(data.nombre, data.curso)
      const profesor = escuelas.seleccionaProfesor(data.alumno_profesor)
      profesor.anyadeAlumno(alumno)
    }
    limpiarPantalla()
  })
}

const borrarItem = () => {
  limpiarPantalla()
  const clase = opcion.value
  box.append(formularioMostrarItems(clase, 'delete'))
  const form = document.getElementById('form')
  form.addEventListener('submit', e => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    if (clase === 'Escuela') {
      const escuela = escuelas.selecionaEscuela(data.delete)
      escuelas.eliminaEscuela(escuela)
    }
    if (clase === 'Profesor') {
      const profesor = escuelas.seleccionaProfesor(data.delete)
      escuelas.eliminaProfesor(profesor)
    }
    if (clase === 'Alumno') {
      const alumno = escuelas.seleccionaAlumno(data.delete)
      escuelas.eliminaAlumno(alumno)
    }
    limpiarPantalla()
  })
}

const modificarItem = () => {
  limpiarPantalla()
  const clase = opcion.value
  box.append(formularioMostrarItems(clase, 'modificar'))
  const form = document.getElementById('form')
  form.addEventListener('submit', e => {
    e.preventDefault()
    limpiarPantalla()
    const data = Object.fromEntries(new FormData(e.target))
    if (clase === 'Escuela') {
      const escuela = escuelas.selecionaEscuela(data.modificar)
      box.append(formularioCrearItem(clase, true, escuela))
      const formActualiza = document.getElementById('formActualiza')
      formActualiza.addEventListener('submit', e => {
        e.preventDefault()
        limpiarPantalla()
        const datas = Object.fromEntries(new FormData(e.target))
        escuela.nombre = datas.nombre
        escuela.localidad = datas.localidad
        escuela.director = datas.director
      })
    }
    if (clase === 'Profesor') {
      const profesor = escuelas.seleccionaProfesor(data.modificar)
      box.append(formularioCrearItem(clase, true, profesor))
      const formActualiza = document.getElementById('formActualiza')
      formActualiza.addEventListener('submit', e => {
        e.preventDefault()
        limpiarPantalla()
        const datas = Object.fromEntries(new FormData(e.target))
        profesor.nombre = datas.nombre
        profesor.tipo = datas.tipo
        const escuela = escuelas.selecionaEscuela(datas.profesor_escuela)
        escuelas.modificaEscuela(escuela, profesor)
      })
    }
    if (clase === 'Alumno') {
      const alumno = escuelas.seleccionaAlumno(data.modificar)
      box.append(formularioCrearItem(clase, true, alumno))
      const formActualiza = document.getElementById('formActualiza')
      formActualiza.addEventListener('submit', e => {
        e.preventDefault()
        limpiarPantalla()
        const datas = Object.fromEntries(new FormData(e.target))
        alumno.nombre = datas.nombre
        alumno.curso = datas.curso
        const profesor = escuelas.seleccionaProfesor(datas.alumno_profesor)
        escuelas.eliminaTutorAlumno(alumno)
        profesor.anyadeAlumno(alumno)
      })
    }
  })
}

// EVENTOS
mostrar.addEventListener('click', mostrarDatos)
crear.addEventListener('click', crearItem)
borrar.addEventListener('click', borrarItem)
modificar.addEventListener('click', modificarItem)
