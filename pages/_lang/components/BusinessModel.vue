<style lang="stylus">
@import '../../../styles/_const.styl';
@import '../../../styles/_util.styl';

.business-model {
  font-size: 1.5em;
  min-height: 48vw;
  // min-height: 650px;
  background: url('../../../assets/v2/星空.png') no-repeat center center;
  background-size: 100%;
  position: relative;
  overflow: hidden;

  .module-title {
    margin-top: 200px;
    text-align: left;

    h2::after {
      width: 78%;
      margin-left: 0;
    }
  }

  .starry-sky {
    position: absolute;
    top: 18%;
    transform: rotateY(-180deg);
  }

  &-autochain {
    width: w = 405px;
    height: w;
    margin: 3em auto 0;
    background: url('../../../assets/商业模式-t@2x.png') no-repeat center center;
    background-size: 100% 100%;
    position: relative;
    text-align: center;
    transitionBeforeBig();

    &:before {
      content: attr(inner-text);
      display: inline-block;
      width: 7em;
      text-align: center;
      font-size: 2rem;
      word-break: keep-all;
      line-height: 38px;
      position: relative;
      top: 50%;
      margin-top: -40px;
    }

    [class^='text-'] {
      position: absolute;
      white-space: nowrap;
    }

    .text-1,
    .text-5 {
      left: 50%;
      transform: translateX(-50%);
    }

    .text-1 {
      top: -2.2em;
    }

    .text-2,
    .text-8 {
      top: 5%;
    }

    .text-2,
    .text-4 {
      left: 100%;
      transform: translateX(-1em);
    }

    .text-3,
    .text-7 {
      top: 50%;
    }

    .text-3 {
      left: 100%;
      transform: translate(1em, -50%);
    }

    .text-4,
    .text-6 {
      bottom: 5%;
    }

    .text-5 {
      bottom: -2.2em;
    }

    .text-7 {
      right: calc(100% + 0.5em);
      transform: translate(-50%, -50%);
    }

    .text-6,
    .text-8 {
      right: 100%;
      transform: translateX(1em);
    }
  }

  &-desc {
    color: main-color;
    margin-top: 6em;
    text-align: center;
  }
}

.en {
  .business-model-autochain {
  }
}
</style>

<template>
<div class="business-model">
  <StarrySky class="starry-sky"/>
  <div class="module" id="b" :class="{ en: locale === 'en' }">
    <div class="module-title">
      <h2>{{ $t('BM.title') }}</h2>
    </div>
    <ul class="business-model-autochain" :inner-text="$t('home.autochain.innerText')">
      <li
        :class="`text-${index + 1}`"
        v-for="(item, key, index) in polygon"
        :key="key"
        v-html="$t(`BM.polygon.${key}`)">
      </li>
    </ul>
    <div class="business-model-desc">
      {{ $t('BM.desc') }}
    </div>
  </div>
</div>
</template>

<script>
import StarrySky from '~/components/Canvas/StarrySky'
import { mapState } from 'vuex'
const { polygon } = require('~/locales/zh-cn').BM

export default {
  name: 'BusinessModel',

  components: { StarrySky },

  computed: {
    ...mapState(['locale'])
  },

  data() {
    return {
      polygon
    }
  }
}
</script>
