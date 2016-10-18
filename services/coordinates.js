'use strict'

class Coordinates {
  static current (x, y, facing) {
    return {
      x: x,
      y: y,
      facing: facing
    }
  }

  static next (x, y, facing, direction) {
    if (facing === 'n' || facing === 's') {
      switch (direction) {
        case 'f':
          return {
            x: x,
            y: facing === 'n' ? y + 1 : y - 1,
            facing: facing
          }
        case 'b':
          return {
            x: x,
            y: facing === 'n' ? y - 1 : y + 1,
            facing: facing
          }
        case 'r':
          return {
            x: x,
            y: y,
            facing: facing === 'n' ? 'e' : 'w'
          }
        case 'l':
          return {
            x: x,
            y: y,
            facing: facing === 'n' ? 'w' : 'e'
          }
        default:
          return {
            x: x,
            y: y,
            facing: facing
          }
      }
    } else if (facing === 'e' || facing === 'w') {
      switch (direction) {
        case 'f':
          return {
            x: facing === 'e' ? x + 1 : x - 1,
            y: y,
            facing: facing
          }
        case 'b':
          return {
            x: facing === 'e' ? x - 1 : x + 1,
            y: y,
            facing: facing
          }
        case 'r':
          return {
            x: x,
            y: y,
            facing: facing === 'e' ? 's' : 'n'
          }
        case 'l':
          return {
            x: x,
            y: y,
            facing: facing === 'e' ? 'n' : 's'
          }
        default:
          return {
            x: x,
            y: y,
            facing: facing
          }
      }
    } else {
      return {
        x: x,
        y: y,
        facing: facing
      }
    }
  }

  static edge (location, world) {
    if (location.x >= world.width) {
      return {
        x: 0,
        y: location.y,
        facing: location.facing
      }
    } else if (location.x < 0) {
      return {
        x: world.width - 1,
        y: location.y,
        facing: location.facing
      }
    } else if (location.y >= world.height) {
      return {
        x: location.x,
        y: 0,
        facing: location.facing
      }
    } else if (location.y < 0) {
      return {
        x: location.x,
        y: world.height - 1,
        facing: location.facing
      }
    } else {
      return location
    }
  }
}

module.exports = Coordinates
