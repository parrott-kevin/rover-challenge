'use strict'

const Coordinates = require('../services/coordinates')
const collisionDetection = require('../services/collisionDetection')

const rover = (req) => {
  const {init, moves, obstacle, world} = req

  let results = [init]

  let collision = false
  let collisionLocation = {}
  moves.forEach((move, index) => {
    if (results[index] && !collision) {
      const location = index === 0 ? Coordinates.current(init.x, init.y, init.facing) : Coordinates.current(results[index].x, results[index].y, results[index].facing)
      const newLocation = Coordinates.edge(Coordinates.next(location.x, location.y, location.facing, move), world)
      collision = collisionDetection(newLocation.x, newLocation.y, obstacle)
      if (!collision) {
        results.push(newLocation)
      } else {
        collisionLocation = {
          error: 'collision',
          x: newLocation.x,
          y: newLocation.y
        }
      }
    }
  })
  if (collision) {
    results.push(collisionLocation)
  }
  return results
}

module.exports = rover
