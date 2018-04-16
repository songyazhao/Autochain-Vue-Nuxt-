<template>
  <div id="WebGL-output"></div>
</template>

<script>
import GrainLightInit from './GrainLight/index'
console.log(GrainLightInit)
export default {
  name: 'Canvas-GrainLight',

  mounted () {
    GrainLightInit()
  }
}
</script>
