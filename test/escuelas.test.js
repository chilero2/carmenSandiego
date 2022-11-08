const assert = require('chai').assert
const Escuelas = require('../clases.test/Escuelas.js')
const Escuela = require('../clases.test/Escuela.js')
const Profesor = require('../clases.test/Profesor.js')

describe('Test using ASSERT interface from CHAI module', () => {
  const escuelas = new Escuelas()
  const escuela1 = new Escuela('Aldaia IE', 'Aldaia', 'Paca')
  const escuela2 = new Escuela('Chiva IES', 'Chiva', 'Maria')

  describe('Check Constructor Escuelas', () => {
    it('Check size escuelas using: assert.equal(value, "value"):', () => {
      const result = escuelas.getNumeroEscuelas()
      assert.equal(result, 0)
    })
  })
  describe('Check add Escuelas', () => {
    it('Check create Escuela', () => {
      const cheste = new Escuela('FP Cheste', 'Cheste', 'Lucas')
      assert.equal(cheste.nombre, 'FP Cheste')
      assert.equal(cheste.localidad, 'Cheste')
      assert.equal(cheste.director, 'Lucas')
      assert.equal(cheste.profesores.size, 0)
    })
    it('Check empty create Escuela', () => {
      const cheste = new Escuela()
      assert.equal(cheste.nombre, undefined)
      assert.equal(cheste.localidad, undefined)
      assert.equal(cheste.director, undefined)
      assert.equal(cheste.profesores.size, 0)
    })
    it('Check add 1 Escuela', () => {
      assert.isOk(escuelas.anyadeEscuela(escuela1))
    })
    it('Check add 2 Escuela', () => {
      escuelas.anyadeEscuela(escuela2)
      assert.deepEqual(escuelas.getNumeroEscuelas(), 2)
    })
    it('Check fail add other type', () => {
      assert.isNotOk(escuelas.anyadeEscuela('hola'))
    })
  })
  describe('Check select Escuela', () => {
    it('Check select exist Escuela', () => {
      escuelas.anyadeEscuela(escuela1)
      escuelas.anyadeEscuela(escuela2)
      assert.deepEqual(escuelas.selecionaEscuela('Chiva IES'), escuela2)
    })
    it('Check select not exist Escuela', () => {
      assert.isNotOk(escuelas.selecionaEscuela('Chiva'))
    })
  })
  describe('Check drop Escuela', () => {
    it('Check drop exist Escuela', () => {
      escuelas.anyadeEscuela(escuela1)
      assert.isOk(escuelas.eliminaEscuela(escuela1))
    })
    it('After deleting 1 Escuela, check number Escuelas ', () => {
      escuelas.anyadeEscuela(escuela1)
      escuelas.anyadeEscuela(escuela2)
      escuelas.eliminaEscuela(escuela1)
      assert.equal(escuelas.getNumeroEscuelas(), 1)
    })
    it('Check drop not exist Escuela ', () => {
      escuelas.anyadeEscuela(escuela1)
      escuelas.anyadeEscuela(escuela2)
      assert.isNotOk(
        escuelas.eliminaEscuela(new Escuela('hola', 'cheste', 'pepe'))
      )
    })
  })

  describe('Profesor', () => {
    const profesor1 = new Profesor('manolo', 'ciencias')
    it('Check create Profesor', () => {
      assert.equal(profesor1.nombre, 'manolo')
      assert.equal(profesor1.tipo, 'ciencias')
      assert.equal(profesor1.alumnos.size, 0)
    })
    it('Check add Profesor to Escuela', () => {
      assert.isOk(escuela1.anyadeProfesor(profesor1))
      assert.isNotOk(escuela1.anyadeProfesor('Manolo'))
    })
    it('Check Profesor selection at Escuelas', () => {
      escuelas.anyadeEscuela(escuela1)
      escuela1.anyadeProfesor(profesor1)
      assert.instanceOf(escuela1.seleccionaProfesor('manolo'), Profesor)
      assert.equal(escuela1.seleccionaProfesor('manolo').tipo, 'ciencias')
      assert.isNotOk(escuelas.seleccionaProfesor('pepe'))
    })
  })
})
