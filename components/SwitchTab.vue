<style lang="stylus">
@import '../styles/_const.styl';
@import '../styles/_util.styl';

.switch {
  &-tab {
    margin: 53px auto 40px;
    display: flex;
    justify-content: center;
    background-color: #0e0d0d;
    border-radius: 10.5px;
    border: 2px solid white;

    &-item {
      line-height: 43px;
      text-align: center;
      white-space: nowrap;
      font-size: 21px;
      flex: 1;
      cursor: pointer;
      box-sizing: border-box;
      border-radius: 8px;
      border-width: 2px;
      border-style: solid;
      border-color: transparent;
      border-top: none;
      border-bottom: none;
      padding: 0 50px;
      transition: all 0.3s ease-out;
    }

    &-item-active {
      color: black;
      border-color: white;
      background-color: main-color;
      transition: all 0.3s ease-in-out;
    }
  }

  &-con {
  }
}
</style>

<template>
  <div class="switch">
    <ul class="switch-tab" :style="{ 'width': locale === 'en' ? '' : '600px' }">
      <li
        :style="{ 'border-left': index === 0 ? 0 : '', 'border-right': index === 2 ? 0 : '' }"
        class="switch-tab-item"
        :class="{ 'switch-tab-item-active': active === index }"
        v-for="(item, index) in switchTab" :key="index"
        @click="handleToggle(index)">{{ item }}
      </li>
    </ul>
    <ul class="switch-con">
      <div class="switch-con-item" v-for="(item, index) in switchTab" :key="index">
        <div v-show="active === index">
          <slot :name="`switch-${index}`"></slot>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SwitchTab',
  props: ['switch-tab', 'active'],
  computed: {
    ...mapState(['locale'])
  },
  methods: {
    handleToggle(index) {
      this.$emit('update:active', index)
    }
  }
}
</script>
