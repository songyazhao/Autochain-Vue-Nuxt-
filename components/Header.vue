<style lang="stylus">
@import '../styles/_const.styl';

header {
  width: 100%;
  min-width: 1200px;
  background: blackback;
  position: fixed;
  top: 0;
  z-index: 10;
}

#nav {
  height: 74px;
  line-height: 74px;
  length = 150px;

  .logo {
    height: 58px;
    position: absolute;
    left: length;
    top: 50%;
    margin-top: -29px;
  }

  .nav-item {
    min-width: 463px;
    height: 100%;
    position: absolute;
    z-index: 2;
    right: length - 22px;

    li {
      width: auto;
      height: 100%;
      position: relative;
      display: inline-block;
      margin: 0 22px;
      font-size: 0;

      &:before {
        z-index: 11;
        left: 50%;
        width: 0;
        transition: all 0.25s ease-in;
      }

      a {
        display: block;
        font-size: 16px;
      }

      & > span.bar {
        width: 0;
        height: 2px;
        display: block;
        position: absolute;
        z-index: 10;
        bottom: 0;
        left: 0;
        background: main-color;
      }
    }

    .nav-active {
      &:before {
        transition: all 0.25s ease-in;
      }

      &:before {
        left: 0;
        width: 100%;
        background: main-color;
      }

      a {
        color: main-color;
      }
    }

    li:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      z-index: 12;
      bottom: 0;
      left: 0;
    }

    a.cur, li a:hover {
      color: main-color;
    }
  }
}

.language {
  position: relative;

  .icon {
    display: inline-block;
    overflow: hidden;
    position: absolute;
    top: 50%;
    right: -13px;
    width: 10px;
    height: 6px;
    margin-top: -3px;
  }

  &-con {
    position: absolute;
    top: 100%;
    z-index: 999;
    background-color: rgba(255, 255, 255, 0.15);
    left: -20px;
    right: -20px;

    &-item {
      cursor: pointer;
      font-size: 16px;
      line-height: 35px;
      text-align: center;

      &:hover {
        color: black;
        background-color: main-color;
      }
    }
  }
}

header.en {
  min-width: 1375px;

  #nav .nav-item li {
    margin-left: 11px;
    margin-right: 11px;

    a {
      font-size: 14px;
    }
  }
}
</style>

<template>
  <header :class="{ en: locale === 'en', active: isActive }">
    <nav id="nav">
      <div class="logo">
        <img src="../assets/logo@2x.png" alt="驾遇">
      </div>
      <button
        type="button"
        class="navbar-toggle"
        v-show="isMobile"
        @click.stop="isActive = !isActive">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <ul class="nav-item" v-show="!isMobile || isActive">
        <li
          :class="{'nav-active': navActiveIndex === index}"
          v-for="(item, key, index) in nav" :key="key"
          v-scroll-to="{ el: `#${key}`, offset: -74 }"
          @click="navActiveIndex = index, isActive = false">
          <a href="javascript:void(0)">{{ $t(`nav.${key}`) }}</a>
          <span class="bar"></span>
        </li>
        <li class="language" @click="visible = !visible">
          <a href="javascript:void(0)">{{ $t('language') }}</a>
          <div class="language-con" v-show="visible">
            <div class="language-con-item" @click="handleToggle('en')">English</div>
            <div class="language-con-item" @click="handleToggle('zh-cn')">简体中文</div>
            <div class="language-con-item" @click="handleToggle('zh-hant')">繁体中文</div>
          </div>
          <ArrowDown class="icon" :color="isMobile ? 'black' : 'white'"/>
        </li>
      </ul>
      <div v-show="isActive"
        style="
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 1;"
        @click="isActive = false"
        @touchstart="isActive = false">
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from "vuex"
import ArrowDown from './ArrowDown'
const { nav } = require('~/locales/zh-cn')

export default {
  name: 'Header',

  components: { ArrowDown },

  data() {
    return {
      nav,
      navActiveIndex: 0,
      visible: false,
      isActive: false,
      isMobile: false
    }
  },

  computed: {
    ...mapState(['locale'])
  },

  watch: {
    visible(val) {
      if (val) this.isActive = val
    },
    isActive(val) {
      if (!val) this.visible = val
    }
  },

  mounted() {
    this.isMobile = this.$parent.isMobile()
  },

  methods: {
    handleToggle(lang) {
      this.$parent.$refs.token.clearTimer()
      this.$router.replace(`/${lang}`)
    }
  }
}
</script>
