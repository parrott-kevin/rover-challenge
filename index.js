const translate = (x, y, facing, direction) => {
  if (facing === 'n' || facing === 's') {
    const obj = {x: x, facing: facing}
    switch (direction) {
      case 'f':
        obj.y = facing === 'n' ? y + 1 : y - 1
        return obj
      case 'b':
        obj.y = facing === 'n' ? y - 1 : y + 1
        return obj
      default:
        return obj
    }
  } else if (facing === 'e' || facing === 'w') {
    const obj = {y: y, facing: facing}
    switch (direction) {
      case 'f':
        obj.x = facing === 'e' ? x + 1 : x - 1
        return obj
      case 'b':
        obj.x = facing === 'e' ? x - 1 : x + 1
        return obj
      default:
        return obj
    }
  } else {
    return {
      x: x,
      y: y,
      facing: facing
    }
  }
}

const index = (init, moves) => {
  let coords = [init]
  moves.forEach((move, index) => {
    if (index === 0) {
      coords.push(translate(init.x, init.y, init.facing, move))
    } else {
      const obj = {
        x: coords[index].x,
        y: coords[index].y,
        facing: coords[index].facing
      }
      coords.push(translate(obj.x, obj.y, obj.facing, move))
    }
  })
  return coords
}

const init = {x: 0, y: 0, facing: 'e'}
const moves = ['f', 'f', 'b']

console.log(index(init, moves))
