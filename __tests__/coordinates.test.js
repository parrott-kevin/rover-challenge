'use strict'

const Coordinates = require('../services/coordinates')

describe('move and rotate rover around', () => {
  it('unknown command', () => {
    const results = Coordinates.next(0, 0, 't', 'f')
    const expectation = {
      x: 0,
      y: 0,
      facing: 't'
    }
    expect(results).toEqual(expectation)
  })

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

  it('moves forward and wraps around the east edge of the world', () => {
    const results = Coordinates.edge({x: 3, y: 0, facing: 'e'}, {width: 3, height: 3})
    const expectation = {
      x: 0,
      y: 0,
      facing: 'e'
    }
    expect(results).toEqual(expectation)
  })

  it('moves backward and wraps around the west edge of the world', () => {
    const results = Coordinates.edge({x: -1, y: 0, facing: 'e'}, {width: 3, height: 3})
    const expectation = {
      x: 2,
      y: 0,
      facing: 'e'
    }
    expect(results).toEqual(expectation)
  })

  it('moves forward and wraps around the south edge of the world', () => {
    const results = Coordinates.edge({x: 0, y: -1, facing: 's'}, {width: 3, height: 3})
    const expectation = {
      x: 0,
      y: 2,
      facing: 's'
    }
    expect(results).toEqual(expectation)
  })
})

