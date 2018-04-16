<template>
  <canvas></canvas>
</template>

<script>

export default {
  name: 'Canvas-StarrySky',

  mounted() {
    this.init()
  },

  methods: {
    init() {
      const canvas = this.$el
      const ctx = canvas.getContext('2d')
      let w = canvas.width = window.innerWidth
      let h = canvas.height = document.querySelector('#b').clientHeight

      // const hue = 217 // 色调
      const stars = []
      const maxStars = 1200 // 星星密度

      const canvas2 = document.createElement('canvas')
      const ctx2 = canvas2.getContext('2d')
      canvas2.width = 100
      canvas2.height = 100
      let count = 0
      let half = canvas2.width / 2
      let gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half)
      gradient2.addColorStop(0.045, '#fff')
      gradient2.addColorStop(0.1, 'rgba(255, 255, 255, .65)')
      gradient2.addColorStop(0.25, 'rgba(40, 40, 40, .5)')
      // gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)')
      // gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)')
      gradient2.addColorStop(1, 'transparent')

      ctx2.fillStyle = gradient2
      ctx2.beginPath()
      ctx2.arc(half, half, half, 0, Math.PI * 2)
      ctx2.fill()

      class Star {
        constructor() {
          this.orbitRadius = this.random(w / 2 - 50)
          this.radius = this.random(100, this.orbitRadius) / 10
          this.orbitX = w / 2
          this.orbitY = h / 2
          this.timePassed = this.random(0, maxStars)
          this.speed = this.random(this.orbitRadius) / 800000
          this.alpha = this.random(2, 10) / 10

          stars[++count] = this
        }

        draw() {
          let x = Math.sin(this.timePassed + 1) * this.orbitRadius + this.orbitX
          let y = Math.cos(this.timePassed) * this.orbitRadius / 2 + this.orbitY
          let twinkle = this.random(100) // 可控制星星闪烁数量

          if (twinkle === 1 && this.alpha > 0) {
            this.alpha -= 0.05
          } else if (twinkle === 2 && this.alpha < 1) {
            this.alpha += 0.05
          }

          ctx.globalAlpha = this.alpha
          ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius)
          this.timePassed += this.speed
        }

        random(min, max) {
          if (arguments.length < 2) {
            max = min
            min = 0
          }

          if (min > max) {
            let hold = max
            max = min
            min = hold
          }

          return Math.floor(Math.random() * (max - min + 1)) + min
        }
      }

      for (let i = 0; i < maxStars; i++) {
        new Star()
      }

      const animation = () => {
        ctx.globalCompositeOperation = 'source-over'
        ctx.globalAlpha = 0.8
        ctx.fillStyle = 'transparent'
        ctx.clearRect(0, 0, w, h)
        ctx.fillRect(0, 0, w, h)

        ctx.globalCompositeOperation = 'lighter'
        for (let i = 1, l = stars.length; i < l; i++) {
          stars[i].draw()
        }

        window.requestAnimationFrame(animation)
      }

      animation()

      window.addEventListener('resize', () => {
        w = canvas.width = window.innerWidth
        h = canvas.height = document.querySelector('#b').clientHeight
      })
    }
  }
}
</script>
