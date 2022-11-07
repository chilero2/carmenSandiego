const assert = require('chai').assert
const Escuelas = require('../js/Escuelas.js')
const Escuela = require('../js/Escuela.js')

describe('Test using ASSERT interface from CHAI module', () => {
  describe('Check Constructor Escuelas', () => {
    const escuelas = new Escuelas()
    it('Check size escuelas using: assert.lenghtOf(value, "value"):', () => {
      const result = escuelas.size()
      assert.equal(result, 0)
    })
  })
})
