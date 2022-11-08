const assert = require('chai').assert
const Escuelas = require('../clases.test/Escuelas.js')
const Escuela = require('../clases.test/Escuela.js')

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
      assert.equal(escuelas.anyadeEscuela(escuela1.getNumeroEscuelas, 1))
    })
    it('Check add 2 Escuela', () => {
      assert.equal(escuelas.anyadeEscuela(escuela2.getNumeroEscuelas, 2))
    })
  })
  describe('Check select Escuela', () => {
    escuelas.anyadeEscuela(escuela1.getNumeroEscuelas, 1)
    escuelas.anyadeEscuela(escuela2.getNumeroEscuelas, 2)
    assert.deepEqual(escuelas.selecionaEscuela('Chiva IES'), escuela2)
  })
})
