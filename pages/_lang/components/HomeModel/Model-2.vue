<style lang="stylus">
@import './Model-2.styl'
</style>

<template>
  <article class="home-model2" v-scroll-reveal.reset="{ origin: 'left' }">
    <h3>{{ $t('home.desc.title1') }}</h3>
    <section class="home-model2-con">
      <div class="line line-prefix"></div>
      <div class="line line-suffix"></div>
      <p>{{ $t('home.desc.label1') }}</p>
      <ul class="step">
        <li class="text" v-for="(item, key) in step.label" :key="key" v-html="$t(`home.step.label.${key}`)"></li>
      </ul>
      <ul class="year">
        <li v-for="(item, key) in step.year" :key="key">
          {{ $t(`home.step.year.${key}`) }}
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
const { step } = require('~/locales/zh-cn').home

export default {
  name: 'HomeModel-2',

  data() {
    return {
      step
    }
  }
}
</script>
