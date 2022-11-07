import { Escuelas } from './Escuelas.js'
import { Escuela } from './Escuela.js'
import { Profesor } from './Profesor.js'
import { Alumno } from './Alumno.js'

export const escuelas = new Escuelas()

// CREACIÓN ESCUELAS
const fpCheste = new Escuela('FP Cheste', 'Cheste', 'Manolo García')
const iesBuñol = new Escuela('IES Buñol', 'Buñol', 'Pepe Gonzalez')
// Añadilas a la lista de Escuelas
escuelas.anyadeEscuela(fpCheste)
escuelas.anyadeEscuela(iesBuñol)

// CREACIÓN PROFESORES
const julio = new Profesor('Julio', 'letras')
const maria = new Profesor('Maria', 'mixto')
const marisa = new Profesor('Marisa', 'ciencias')
const toni = new Profesor('Toni', 'ciencias')
const alejandro = new Profesor('Alejandro', 'ciencias')
const sandra = new Profesor('Sandra', 'mixto')
const quique = new Profesor('Quique', 'ciencias')

// Añadir profesores a los colegios
fpCheste.anyadeProfesor(julio)
fpCheste.anyadeProfesor(marisa)
fpCheste.anyadeProfesor(toni)
fpCheste.anyadeProfesor(alejandro)
fpCheste.anyadeProfesor(sandra)
iesBuñol.anyadeProfesor(maria)
fpCheste.anyadeProfesor(quique)

// CREACION ALUMNOS
const pablito = new Alumno('Pablo', '2º')
const carlitos = new Alumno('Carlos', '1º')
const emilio = new Alumno('Emilio', '2º')
const carmen = new Alumno('Carmen', '2º')
const alex = new Alumno('Alejandro', '2º')
const pau = new Alumno('Pau', '2º')
const guille = new Alumno('Guillermo', '2º')
// Añadir alumnos a los tutores
julio.anyadeAlumno(pablito)
maria.anyadeAlumno(carlitos)
marisa.anyadeAlumno(emilio)
marisa.anyadeAlumno(carmen)
toni.anyadeAlumno(alex)
toni.anyadeAlumno(pau)
toni.anyadeAlumno(guille)
