<style lang="stylus">
@import '../../styles/_const.styl';

.icon-close {
  min-width: 12px;
  min-height: 12px;
  cursor: pointer;
  position: relative;

  &::before {
    content: '';
    background: blackback;
    display: inline-block;
    position: absolute;
    left: -3px;
    right: -3px;
    top: -3px;
    bottom: -3px;
    border-radius: 3px;
  }

  &:hover {
    & .icon-close-con {
      fill: main-color;
    }
  }
}

.icon-close-con {
  width: 150%;
  height: 150%;
  position: absolute;
  top: -25%;
  left: -25%;
  fill: white;
}
</style>

<template>
<div class="icon-close">
  <!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  <svg class="icon-close-con" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
    <g id="Icon_5_">
      <g>
        <polygon points="405,136.798 375.202,107 256,226.202 136.798,107 107,136.798 226.202,256 107,375.202 136.798,405 256,285.798
          375.202,405 405,375.202 285.798,256"/>
      </g>
    </g>
  </svg>
</div>
</template>
