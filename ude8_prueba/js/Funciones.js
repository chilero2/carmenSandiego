import { escuelas } from './CargaDatos.js'
export const crearFragmentoHTML = (coleccion, elemento) => {
  const fragment = document.createDocumentFragment()

  for (const item of coleccion) {
    const itemList = document.createElement(elemento)
    itemList.append(item.mostrar())
    fragment.append(itemList)
  }
  return fragment
}

export const formularioCrearItem = (
  clase,
  modificar = false,
  objeto = null
) => {
  const fragment = document.createDocumentFragment()
  const form = document.createElement('form')
  let itemForm
  if (clase === 'Escuela') {
    itemForm = document.createElement('label')
    itemForm.textContent = 'Nombre Escuela'
    form.append(itemForm)
    itemForm = document.createElement('input')
    itemForm.setAttribute('type', 'text')
    itemForm.setAttribute('name', 'nombre')
    if (modificar) {
      itemForm.setAttribute('value', objeto.nombre)
    }
    form.append(itemForm)
    itemForm = document.createElement('label')
    itemForm.textContent = 'Localidad'
    form.append(itemForm)
    itemForm = document.createElement('input')
    itemForm.setAttribute('type', 'text')
    itemForm.setAttribute('name', 'localidad')
    if (modificar) {
      itemForm.setAttribute('value', objeto.localidad)
    }
    form.append(itemForm)
    itemForm = document.createElement('label')
    itemForm.textContent = 'Director'
    form.append(itemForm)
    itemForm = document.createElement('input')
    itemForm.setAttribute('type', 'text')
    itemForm.setAttribute('name', 'director')
    if (modificar) {
      itemForm.setAttribute('value', objeto.director)
    }
    form.append(itemForm)
  }
  if (clase === 'Profesor') {
    itemForm = document.createElement('label')
    itemForm.textContent = 'Nombre Profesor'
    form.append(itemForm)
    itemForm = document.createElement('input')
    itemForm.setAttribute('type', 'text')
    itemForm.setAttribute('name', 'nombre')
    if (modificar) {
      itemForm.setAttribute('value', objeto.nombre)
    }
    form.append(itemForm)
    let select = document.createElement('select')
    select.id = 'tipo'
    select.setAttribute('name', 'tipo')
    const tipos = ['mixto', 'ciencias', 'letras']
    tipos.forEach(tipo => {
      itemForm = document.createElement('option')
      itemForm.setAttribute('value', tipo)
      itemForm.textContent = tipo
      if (modificar && objeto.tipo === tipo) {
        itemForm.setAttribute('selected', true)
      }
      select.append(itemForm)
    })
    form.append(select)
    select = document.createElement('select')
    select.id = 'profesor_escuela'
    select.setAttribute('name', 'profesor_escuela')
    escuelas.getEscuelas().forEach(escuela => {
      itemForm = document.createElement('option')
      itemForm.setAttribute('value', escuela.nombre)
      itemForm.textContent = escuela.nombre
      if (modificar && escuela.trabajaAqui(objeto)) {
        itemForm.setAttribute('selected', true)
      }
      select.append(itemForm)
    })
    form.append(select)
  }
  if (clase === 'Alumno') {
    itemForm = document.createElement('label')
    itemForm.textContent = 'Nombre Alumno'
    form.append(itemForm)
    itemForm = document.createElement('input')
    itemForm.setAttribute('type', 'text')
    itemForm.setAttribute('name', 'nombre')
    if (modificar) {
      itemForm.setAttribute('value', objeto.nombre)
    }
    form.append(itemForm)
    itemForm = document.createElement('label')
    itemForm.textContent = 'Curso'
    form.append(itemForm)
    itemForm = document.createElement('input')
    itemForm.setAttribute('type', 'text')
    itemForm.setAttribute('name', 'curso')
    if (modificar) {
      itemForm.setAttribute('value', objeto.curso)
    }
    form.append(itemForm)
    const select = document.createElement('select')
    select.id = 'alumno_profesor'
    select.setAttribute('name', 'alumno_profesor')
    escuelas.getProfesores().forEach(profesor => {
      itemForm = document.createElement('option')
      itemForm.setAttribute('value', profesor.nombre)
      itemForm.textContent = profesor.nombre
      if (modificar && profesor.esTutor(objeto)) {
        itemForm.setAttribute('selected', true)
      }
      select.append(itemForm)
    })
    form.append(select)
  }
  itemForm = document.createElement('input')
  itemForm.setAttribute('type', 'submit')
  const boton = modificar ? 'ACTUALIZA' : 'CREAR'
  itemForm.setAttribute('value', boton)
  itemForm.id = 'instanciarItem'
  form.id = modificar ? 'formActualiza' : 'form'
  form.append(itemForm)
  fragment.append(form)
  return fragment
}

export const formularioMostrarItems = (clase, accion) => {
  const fragment = document.createDocumentFragment()
  const form = document.createElement('form')
  const select = document.createElement('select')
  select.id = accion
  select.setAttribute('name', accion)
  let iterable
  if (clase === 'Escuela') {
    iterable = escuelas.getEscuelas()
  } else if (clase === 'Profesor') {
    iterable = escuelas.getProfesores()
  } else {
    iterable = escuelas.getAlumnos()
  }
  let itemForm
  iterable.forEach(item => {
    itemForm = document.createElement('option')
    itemForm.setAttribute('value', item.nombre)
    itemForm.textContent = item.nombre
    select.append(itemForm)
  })
  form.append(select)
  itemForm = document.createElement('input')
  itemForm.setAttribute('type', 'submit')
  const boton = accion === 'delete' ? 'BORRAR' : 'ACTUALIZAR'
  itemForm.setAttribute('value', boton)
  itemForm.id = 'instanciarItem'
  form.id = 'form'
  form.append(itemForm)
  fragment.append(form)
  return fragment
}
