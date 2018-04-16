<style lang="stylus">
@import './Model-3.styl'
</style>

<template>
  <div class="home-model3">
    <h3>{{ $t('home.desc.title2') }}</h3>
    <p>{{ $t('home.desc.label2') }}</p>

    <ul class="home-model3-autochain" :inner-text="$t('home.autochain.innerText')">
      <li :class="`text-${index + 1}`" v-for="(item, key, index) in autochain.tag" :key="key">
        <div class="circle skip"></div>
        <div class="inner" v-html="$t(`home.autochain.tag.${key}`)"></div>
      </li>
    </ul>
  </div>
</template>

<script>
const { autochain } = require('~/locales/zh-cn').home

export default {
  name: 'HomeModel-3',

  data () {
    return {
      autochain
    }
  }
}
</script>
