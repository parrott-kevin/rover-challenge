'use strict'

const collisionDetection = require('../services/collisionDetection')

describe('Does the rover hit the obstacle', () => {
  it('misses the obstacle', () => {
    expect(collisionDetection(1, 1, {x: 1, y: 0})).toBe(false)
  })

  it('hits the obstacle', () => {
    expect(collisionDetection(1, 1, {x: 1, y: 1})).toBe(true)
  })
})
