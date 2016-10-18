class World {
  constructor () {
    this.boardWidth = 500
    this.boardHeight = 500
    this.boardPadding = 10
    const canvasWidth = this.boardWidth + (this.boardPadding * 2) + 1
    const canvasHeight = this.boardHeight + (this.boardPadding * 2) + 1
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
})
