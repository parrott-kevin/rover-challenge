const Coordinates = require('./services/coordinates')
const collisionDetection = require('./services/collisionDetection')

const index = (req) => {
  const {init, moves, obstacle, world} = req
  let results = [init]
  moves.forEach((move, index) => {
    if (results[index]) {
      const location = index === 0 ? Coordinates.current(init.x, init.y, init.facing) : Coordinates.current(results[index].x, results[index].y, results[index].facing)
      const newLocation = Coordinates.edge(Coordinates.next(location.x, location.y, location.facing, move), world)
      const collision = collisionDetection(newLocation.x, newLocation.y, obstacle)
      if (!collision) {
        results.push(newLocation)
      }
    }
  })
  return results
}

const world = {width: 4, height: 10}
const init = {x: 0, y: 0, facing: 't'}
// const moves = ['f', 'f', 'r', 'f', 'f', 'l', 'f', 'b', 'r', 'r', 'f', 'f', 'r', 'f', 'f']
const moves = ['b', 's', 'b']
const obstacle = {x: 3, y: 3}
const obj = {
  init: init,
  moves: moves,
  obstacle: obstacle,
  world: world
}
// const moves = ['f', 'l', 'f', 'f']

console.log(index(obj))
