'use strict'

const Coordinates = require('../services/coordinates')

describe('move and rotate rover around', () => {
  it('move forward', () => {
    const results = Coordinates.next(0, 0, 'e', 'f')
    const expectation = {
      x: 1,
      y: 0,
      facing: 'e'
    }
    expect(results).toEqual(expectation)
  })

  it('move backward', () => {
    const results = Coordinates.next(0, 0, 'n', 'b')
    const expectation = {
      x: 0,
      y: -1,
      facing: 'n'
    }
    expect(results).toEqual(expectation)
  })

  it('rotate right', () => {
    const results = Coordinates.next(0, 0, 'e', 'r')
    const expectation = {
      x: 0,
      y: 0,
      facing: 's'
    }
    expect(results).toEqual(expectation)
  })

  it('rotate left', () => {
    const results = Coordinates.next(0, 0, 'n', 'l')
    const expectation = {
      x: 0,
      y: 0,
      facing: 'w'
    }
    expect(results).toEqual(expectation)
  })

})
