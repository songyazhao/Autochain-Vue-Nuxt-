<style lang="stylus">
@import '../../../styles/_const.styl';

.technology-superiority {
  height: 900px;
  position: relative;
  margin-top: 10em;

  & > .module {
    width: 976px;
  }

  &::before {
    y-offset = -5.5em;
    content: '';
    background: url('../../../assets/v2/科技城市.png') no-repeat center y-offset;
    background-size: cover;
    position: absolute;
    left: 0;
    top: y-offset;
    right: 0;
    bottom: y-offset;
    z-index: -2;

    @media screen and (max-width: 1600px) {
      background-size: auto 100%;
    }
  }

  &-con {
    .earth {
      width: size = 39vw;
      height: size;
      min-width: 300px;
      min-height: 300px;
      position: absolute;
      top: 10.5%;
      left: 50%;
      background: url('../../../assets/v2/earth.png') no-repeat;
      background-size: 100%;
      z-index: -1;
    }

    .Rotation {
      transform: translateX(-50%) rotate(360deg);
      animation: rotation 100s linear infinite;
      position: absolute;
    }

    @keyframes rotation {
      from {
        transform: translateX(-50%) rotate(0deg);
      }

      to {
        transform: translateX(-50%) rotate(360deg);
      }
    }
  }
}

.en {
}
</style>

<template>
  <article class="technology-superiority" :class="{ en: locale === 'en' }">
    <section class="module" id="d">
      <div class="module-title">
        <h2>{{ $t('TS.title') }}</h2>
      </div>
      <div class="technology-superiority-con">
        <div class="earth Rotation"></div>
        <SwitchTab :switch-tab="switchTab" :active.sync="active">
          <p v-for="(item, key, index) in titles" :key="key" :slot="`switch-${index}`">
            {{ $t(`TS.switch.desc.${key}`) }}
          </p>
        </SwitchTab>
      </div>
    </section>
  </article>
</template>

<script>
import { mapState } from 'vuex'
import SwitchTab from '~/components/SwitchTab'
const { titles } = require('~/locales/zh-cn').TS.switch

export default {
  name: 'TechnologySuperiority',

  components: { SwitchTab },

  data() {
    return {
      titles,
      active: 1
    }
  },

  computed: {
    ...mapState(['locale']),
    switchTab() {
      return Object.keys(this.titles).map(key => this.$t(`TS.switch.titles.${key}`))
    }
  }
}
</script>
