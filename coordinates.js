'use strict'

const coordinates = (x, y, facing, direction) => {
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

module.exports = coordinates
