<style lang="stylus">
@import '../styles/_const.styl';
@import '../styles/_util.styl';

.business-model {
  &-autochain {
    width: w = 405px;
    height: w;
    margin: 60px auto 0;
    background: url('../assets/商业模式-t@2x.png') no-repeat center center;
    background-size: w w;
    position: relative;
    text-align: center;
    transitionBeforeBig();

    &:before {
      content: attr(inner-text);
      display: inline-block;
      width: 270px;
      text-align: center;
      font-size: 34px;
      word-break: keep-all;
      line-height: 38px;
      position: relative;
      top: 50%;
      margin-top: -40px;
    }

    [class^='text-'] {
      position: absolute;
      font-size: 26px;
    }

    .text-1 {
      left: 40%;
      top: -44px;
    }

    .text-2 {
      right: -40px;
      top: 30px;
    }

    .text-3 {
      right: -124px;
      top: 45%;
    }

    .text-4 {
      right: -66px;
      bottom: 27px;
    }

    .text-5 {
      left: 33%;
      bottom: -42px;
    }

    .text-6 {
      left: -66px;
      bottom: 27px;
    }

    .text-7 {
      left: -43px;
      top: 45%;
    }

    .text-8 {
      left: -40px;
      top: 30px;
    }
  }

  &-desc {
    margin-top: 70px;
    text-align: center;
  }

  &.en {
    .text-1 {
      left: 134px;
      top: -44px;
    }

    .text-2 {
      right: -181px;
      top: 30px;
    }

    .text-3 {
      right: -295px;
      top: 41%;
      width: 282px;
    }

    .text-4 {
      right: -106px;
      bottom: 27px;
    }

    .text-5 {
      left: 25%;
      bottom: -42px;
    }

    .text-6 {
      left: -48%;
      bottom: 27px;
    }

    .text-8 {
      left: -161px;
      top: 30px;
    }
  }
}
</style>

<template>
  <div class="module business-model" id="b" :class="{ en: locale === 'en' }">
    <div class="module-title">
      <h2>{{ $t('BM.title') }}</h2>
    </div>
    <ul class="business-model-autochain" :class="{ skip: isMobile }" :inner-text="$t('home.autochain.innerText')">
      <li
        :class="`text-${index + 1}`"
        v-for="(item, key, index) in polygon"
        :key="key">
        {{ $t(`BM.polygon.${key}`) }}
      </li>
    </ul>
    <div class="business-model-desc">
      {{ $t('BM.desc') }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
const { polygon } = require('~/locales/zh-cn').BM

export default {
  name: 'BusinessModel',
  computed: {
    ...mapState(['locale'])
  },
  data() {
    return {
      polygon,
      isMobile: false
    }
  },
  mounted() {
    this.isMobile = this.$parent.isMobile()
  }
}
</script>
