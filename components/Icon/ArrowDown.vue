<style>
.arrow-down {
  position: relative;
  min-width: 8px;
  min-height: 8px;
}
.arrow-down-con {
  width: 150%;
  height: 150%;
  position: absolute;
  top: -25%;
  left: -25%;
  fill: white;
}
</style>

<template>
  <div class="arrow-down">
    <!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg :style="{ fill: color }" class="arrow-down-con" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      width="512px" height="512px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
    <path d="M98.9,184.7l1.8,2.1l136,156.5c4.6,5.3,11.5,8.6,19.2,8.6c7.7,0,14.6-3.4,19.2-8.6L411,187.1l2.3-2.6
      c1.7-2.5,2.7-5.5,2.7-8.7c0-8.7-7.4-15.8-16.6-15.8v0H112.6v0c-9.2,0-16.6,7.1-16.6,15.8C96,179.1,97.1,182.2,98.9,184.7z"/>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: ''
    }
  }
}
</script>
