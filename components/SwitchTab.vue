<style lang="stylus">
@import '../styles/_const.styl';
@import '../styles/_util.styl';

.switch {
  display: flex;
  margin-top: 5em;
  line-height = 2px;
  unit-delay = 0.3s;

  &-tab {
    flex: 1;
    border-radius: 10px;
    box-sizing: border-box;

    &-item {
      font-size: 1.35em;
      cursor: pointer;
      margin: 2.5em 0;
      padding-right: 70px;

      .text {
        x-offset = 1.75em;
        width: 100%;
        height: 5em;
        border-radius: 8px;
        border-width: 2px;
        border-style: solid;
        border-color: white;
        transition: all 0.3s ease-out;
        display: flex;
        align-items: center;
        justify-content: center;

        .icon {
          background-repeat: no-repeat;
          background-position: left center;
          background-size: x-offset;
          padding: 0.8em 0 0.8em (x-offset + 0.8em);

          for i in 1 .. 3 {
            str = '../assets/v2/icon' + i + '.png';

            &-{i} {
              background-image: url(str);
            }
          }
        }
      }

      &-1 {
        &::after {
          margin-top: -(line-height * 1) !important;
          width: 37.1% !important;
          right: -37.1% !important;
          animation-name: draw-line-two-rewrite !important;

          @keyframes draw-line-two-rewrite {
            from {
              opacity: 0;
              transform: rotateZ(0deg);
            }

            to {
              opacity: 1;
              transform: rotateZ(68deg);
            }
          }
        }
      }
    }

    &-item-active {
      position: relative;
      active-width = 70%;

      .text {
        width: active-width;
        border-color: main-color;
        background-color: main-hover-color;
        transition: all 0.3s ease-in;
      }

      &::before, &::after {
        content: '';
        border-top: (line-height / 2) solid main-color;
        border-bottom: (line-height / 2) solid main-color;
        position: absolute;
        top: 50%;
      }

      &::before {
        l = 58.5%;
        margin-top: -(line-height * 1);
        right: 100% - l;
        left: l;
        animation: draw-line-one 0.15s ease unit-delay both;

        @keyframes draw-line-one {
          from {
            right: 100% - l;
          }

          to {
            right: 0;
          }
        }
      }

      &::after {
        width: w = 41.2%;
        bottom: 100%;
        right: -(w * 1);
        transform-origin: 0 0 0;
        animation: draw-line-two 0.3s ease (unit-delay * 2) both;

        @keyframes draw-line-two {
          from {
            opacity: 0;
            transform: rotateZ(0deg);
          }

          to {
            opacity: 1;
            transform: rotateZ(-71deg);
          }
        }
      }
    }
  }

  &-con {
    flex: 1.1;
    margin: 3.25em 0 3.5em 60px;

    &-item {
      position: relative;

      &::after {
        content: '';
        display: block;
        width: 0%;
        position: absolute;
        top: calc(100% + 9px);
        border-top: (line-height / 2) solid main-color;
        border-bottom: (line-height / 2) solid main-color;
        animation: draw-line-three 0.3s ease (unit-delay * 3) both;

        @keyframes draw-line-three {
          from {
            width: 0%;
          }

          to {
            width: 80%;
          }
        }
      }

      p {
        font-size: 0.85em;
        line-height: 1.5em;
      }

      &-1 {
        margin-top: 45%;

        &::after {
          top: -(line-height * 3);
        }
      }

      &-2 {
        margin-top: 0%;
      }

      &-3 {
        margin-top: 15%;
      }
    }
  }
}

.en {
  .switch-tab {
    &-item {
      &-3 {
        &::after {
          width: 23.2%;
          right: -23.2%;
          margin-top: -1px;
          animation-name: draw-line-two-rewrite-en !important;

          @keyframes draw-line-two-rewrite-en {
            from {
              opacity: 0;
              transform: rotateZ(0deg);
            }

            to {
              opacity: 1;
              transform: rotateZ(-54deg);
            }
          }
        }
      }
    }
  }

  .switch-con {
    &-item {
      p {
        font-size: 0.75em;
        line-height: 1.7em;
      }
    }
  }
}
</style>

<template>
  <div class="switch" :class="{ en: locale === 'en' }">
    <ul class="switch-tab">
      <li
        :class="[
          'switch-tab-item',
          `switch-tab-item-${index + 1}`,
          {'switch-tab-item-active': active === index}
        ]"
        v-for="(item, index) in switchTab" :key="index"
        @click="handleToggle(index)"
        @mouseover="handleToggle(index)">
        <div class="text">
          <span :class="['icon', `icon-${index + 1}`]" v-html="item"></span>
        </div>
        <!-- 移动端的切换效果, 使用从父组件传过来的slot, 按index重新分配 -->
        <ul class="switch-con" v-show="isSmallScreen">
          <li
            :class="['switch-con-item']"
            v-show="active === index">
            <component :is="`slot-con-${index}`"></component>
          </li>
        </ul>
      </li>
    </ul>
    <ul class="switch-con" v-show="!isSmallScreen">
      <li
        :class="['switch-con-item', `switch-con-item-${index + 1}`]"
        v-show="active === index"
        v-for="(item, index) in switchTab"
        :key="index">
        <slot :name="`switch-${index}`"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SwitchTab',

  props: ['switch-tab', 'active'],

  computed: {
    ...mapState(['locale', 'isSmallScreen'])
  },

  methods: {
    handleToggle(index) {
      this.$emit('update:active', index)
    }
  },

  components: {
    'slot-con-0': {
      render(createElement) {
        return createElement('div', this.$parent.$slots['switch-0'])
      }
    },
    'slot-con-1': {
      render(createElement) {
        return createElement('div', this.$parent.$slots['switch-1'])
      }
    },
    'slot-con-2': {
      render(createElement) {
        return createElement('div', this.$parent.$slots['switch-2'])
      }
    }
  }
}
</script>
