'use strict'

const collision = (x, y, obstacle) => {
  if (x === obstacle.x && y === obstacle.y) {
    return true
  } else {
    return false
  }
}

module.exports = collision
