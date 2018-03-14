<template>
  <canvas id="pie" :width="width" :height="height"></canvas>
</template>

<script>
export default {
  name: 'PieChart',

  props: ['width', 'height', 'colors'],

  mounted() {
    this.draw()
  },

  methods: {
    draw(colors = this.colors()) {
      let can = document.getElementById('pie')
      let ctx = can.getContext('2d')
      let nums = [40, 30, 20, 10]
      let start = 0
      let end = 0

      window.ctx = ctx
      ctx.translate(150, 150)
      // ctx.rotate(-Math.PI / 2.8)//旋转一定角度更加自然

      // 外边框
      function pieOuterStroke() {
        ctx.beginPath()
        ctx.arc(0, 0, 142, start, 2 * Math.PI)
        ctx.lineWidth = 4
        ctx.strokeStyle = '#666'
        ctx.closePath()
        ctx.stroke()
      }

      // 内边框
      function pieInnerStroke() {
        ctx.beginPath()
        ctx.arc(0, 0, 60, 0, 2 * Math.PI)
        ctx.lineWidth = 3
        ctx.strokeStyle = 'rgba(255, 255, 255, .55)'
        ctx.closePath()
        ctx.stroke()
      }

      //绘制圆饼
      function pieChart() {
        for (let i = 0; i < nums.length; i++) {
          ctx.beginPath()
          ctx.moveTo(0, 0)
          end += nums[i] / 50 * Math.PI//终止角度
          ctx.fillStyle = colors[i]
          ctx.arc(0, 0, 140, start, end)
          ctx.fill()
          ctx.lineWidth = 0
          ctx.strokeStyle = 'transparent'
          ctx.closePath()
          ctx.stroke()
          start += nums[i] / 50 * Math.PI//起始角度
        }
      }

      pieOuterStroke()
      pieChart()
      pieInnerStroke()
    },
    clear() {
      const pie = document.getElementById('pie')
      const ctx = pie.getContext('2d')
      const left = -(pie.width / 2)
      ctx.clearRect(left, left, pie.width, pie.height)
      ctx.translate(left, left)
    }
  }
}
</script>
