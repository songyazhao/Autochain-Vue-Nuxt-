<template>
  <canvas id="WebGL-output"></canvas>
</template>

<script>
// import GrainLightInit from './GrainLight/index'

function GrainLightInit() {
  let c = document.getElementById("WebGL-output")
  let w = c.width = window.innerWidth
  let h = c.height = window.innerHeight
  let ctx = c.getContext('2d')

  let opts = {
    lineCount: 100,
    starCount: 30,

    radVel: .01,
    lineBaseVel: .1,
    lineAddedVel: .1,
    lineBaseLife: .4,
    lineAddedLife: .01,

    starBaseLife: 800,
    starAddedLife: 800,

    ellipseTilt: -.3,
    ellipseBaseRadius: .15,
    ellipseAddedRadius: .02,
    ellipseAxisMultiplierX: 1,
    ellipseAxisMultiplierY: 1,
    ellipseCX: w / 2,
    ellipseCY: h / 2,

    repaintAlpha: .015
  }

  let lines = []
  let stars = []
  let tick = 0
  let first = true

  function init() {
    lines.length = stars.length = 0

    ctx.globalCompositeOperation = 'source-over'
    ctx.fillRect(0, 0, w, h)

    if (first) {
      loop()
      first = false
    }
  }

  function loop() {
    requestAnimationFrame(loop)
    step()
    draw()
  }

  function step() {

    tick += .5

    if (lines.length < opts.lineCount && Math.random() < .5)
      lines.push(new Line)

    if (stars.length < opts.starCount)
      stars.push(new Star)

    lines.map(function (line) { line.step() })
    stars.map(function (star) { star.step() })
  }

  function draw() {
    ctx.shadowBlur = 0
    ctx.globalCompositeOperation = 'source-over'
    // ctx.fillStyle = 'transparent'
    // ctx.fillStyle = 'rgba(0,0,0,alp)'.replace('alp', opts.repaintAlpha)
    ctx.fillRect(0, 0, w, h)

    ctx.globalCompositeOperation = 'lighter'

    ctx.translate(opts.ellipseCX, opts.ellipseCY)
    ctx.rotate(opts.ellipseTilt)
    ctx.scale(opts.ellipseAxisMultiplierX, opts.ellipseAxisMultiplierY)

    lines.map(function (line) { line.draw() })

    ctx.scale(1 / opts.ellipseAxisMultiplierX, 1 / opts.ellipseAxisMultiplierY)
    ctx.rotate(-opts.ellipseTilt)
    ctx.translate(-opts.ellipseCX, -opts.ellipseCY)

    stars.map(function (star) { star.draw() })
  }

  function Line() {
    this.reset()
  }

  Line.prototype.reset = function () {
    this.rad = Math.random() * Math.PI * 2
    this.len = w * (opts.ellipseBaseRadius + Math.random() * opts.ellipseAddedRadius)
    this.lenVel = opts.lineBaseVel + Math.random() * opts.lineAddedVel

    this.x = this.px = Math.cos(this.rad) * this.len
    this.y = this.py = Math.sin(this.rad) * this.len

    this.life = this.originalLife = w * (opts.lineBaseLife + Math.random() * opts.lineAddedLife)

    this.alpha = .2 + Math.random() * .8
  }
  Line.prototype.step = function () {

    --this.life

    let ratio = 1 - .1 * this.life / this.originalLife

    this.px = this.x
    this.py = this.y

    this.rad += opts.radVel
    this.len -= this.lenVel

    this.x = Math.cos(this.rad) * this.len
    this.y = Math.sin(this.rad) * this.len

    if (this.life <= 0)
      this.reset()
  }
  Line.prototype.draw = function () {

    let ratio = Math.abs(this.life / this.originalLife - 1 / 2)

    ctx.lineWidth = ratio * 5
    ctx.strokeStyle = ctx.shadowColor = '#f7c24a'
    ctx.beginPath()
    ctx.moveTo(this.px, this.py)
    ctx.lineTo(this.x, this.y)

    ctx.stroke()
  }

  function Star() {
    this.reset()
  }
  Star.prototype.reset = function () {
    ctx.clearRect(0, 0, w, h)
    this.x = Math.random() * w
    this.y = Math.random() * h
    this.life = opts.starBaseLife + Math.random() * opts.starAddedLife
  }
  Star.prototype.step = function () {

    --this.life

    if (this.life <= 0)
      this.reset()
  }
  Star.prototype.draw = function () {
    ctx.fillStyle = 'transparent'
    ctx.shadowColor = 'hsla(hue, 80%, 50%, .2)'.replace('hue', tick + this.x / w * 100)

    ctx.shadowBlur = this.life
    ctx.fillRect(this.x, this.y, 1, 1)
  }

  window.addEventListener('resize', function () {

    w = c.width = window.innerWidth
    h = c.height = window.innerHeight

    opts.ellipseCX = w / 2
    opts.ellipseCY = h / 2

    init()
  })

  function LuukLamers() {

    let i = 0,
      array = [300, 74, 0.04, 0.1, 0.1, .55, 10, 100, 10, -.15, .18, .01, 3, 1, w / 2, h / 2, 0.02]

    for (let key in opts) {

      opts[key] = array[i]
      ++i
    }

    init()
  }

  init()
}

export default {
  name: 'Canvas-GrainLight',

  mounted() {
    GrainLightInit()
  }
}
</script>
