const coordinates = require('./coordinates')

const index = (init, moves) => {
  let results = [init]
  moves.forEach((move, index) => {
    if (index === 0) {
      results.push(coordinates(init.x, init.y, init.facing, move))
    } else {
      const obj = {
        x: results[index].x,
        y: results[index].y,
        facing: results[index].facing
      }
      results.push(coordinates(obj.x, obj.y, obj.facing, move))
    }
  })
  return results
}

const init = {x: 0, y: 0, facing: 'e'}
const moves = ['f', 'f', 'r', 'f', 'f', 'l', 'f', 'b', 'r', 'r', 'f', 'f', 'r', 'f', 'f']

console.log(index(init, moves))
