class World {
  constructor () {
    this.boardWidth = 500
    this.boardHeight = 500
    this.boardPadding = 10
    const canvasWidth = this.boardWidth + (this.boardPadding * 2)
    const canvasHeight = this.boardHeight + (this.boardPadding * 2)
    const canvas = document.getElementById('world')
    canvas.setAttribute('width', canvasWidth)
    canvas.setAttribute('height', canvasHeight)
    this.ctx = canvas.getContext('2d')
  }

  drawGrid () {
    for (let x = 0; x <= this.boardWidth; x += 50) {
      this.ctx.moveTo(0.5 + x + this.boardPadding, this.boardPadding)
      this.ctx.lineTo(0.5 + x + this.boardPadding, this.boardHeight + this.boardPadding)
    }

    for (let y = 0; y <= this.boardHeight; y += 50) {
      this.ctx.moveTo(this.boardPadding, 0.5 + y + this.boardPadding)
      this.ctx.lineTo(this.boardWidth + this.boardPadding, 0.5 + y + this.boardPadding)
    }
    this.ctx.strokeStyle = 'black'
    this.ctx.stroke()
  }

  renderRover (x, y, facing) {
    const originX = Math.floor(x / 50) * 50 + 10
    const originY = Math.floor(y / 50) * 50 + 10
    const points = this.computePoints(originX, originY, facing)
    this.ctx.beginPath()
    this.ctx.moveTo(points.p0[0], points.p0[1])
    this.ctx.lineTo(points.p1[0], points.p1[1])
    this.ctx.lineTo(points.p2[0], points.p2[1])
    this.ctx.fill()
  }

  // always start from the NW corner of the square
  computePoints (x, y, facing) {
    switch (facing) {
      case 'n':
        return {
          p0: [x + 50, y + 50],
          p1: [x, y + 50],
          p2: [x + 25, y]
        }
      case 'e':
        return {
          p0: [x, y],
          p1: [x, y + 50],
          p2: [x + 50, y + 25]
        }
      case 's':
        return {
          p0: [x, y],
          p1: [x + 50, y],
          p2: [x + 25, y + 50]
        }
      case 'w':
        return {
          p0: [x + 50, y],
          p1: [x + 50, y + 50],
          p2: [x, y + 25]
        }
      default:
        return
    }
  }

}

const ready = function (cb) {
  if (document.readyState !== 'loading') {
    cb()
  } else {
    document.addEventListener('DOMContentLoaded', cb)
  }
}

ready(() => {
  const Start = new World()
  Start.drawGrid()
  Start.renderRover(65, 25, 's')
})
