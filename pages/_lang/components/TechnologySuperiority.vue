<style lang="stylus">
// @import '../../../styles/_const.styl';
// .technology-superiority {
//   &-con {
//   }
// }
</style>

<template>
  <div class="module technology-superiority" id="d" :class="{ en: locale === 'en' }">
    <div class="module-title">
      <h2>{{ $t('TS.title') }}</h2>
    </div>
    <SwitchTab :switch-tab="switchTab" :active.sync="active">
      <div
        class="technology-superiority-con"
        v-for="(item, key, index) in titles"
        :key="key"
        :slot="`switch-${index}`">
        <p>{{ $t(`TS.switch.desc.${key}`) }}</p>
      </div>
    </SwitchTab>
  </div>
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
      active: 0
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
