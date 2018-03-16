<!--
Description 基于Vue + Nuxt开发的静态站点
@authors SongYazhao (syazhao@foxmail.com)
@date    2018-03-03 18:02:46
@version 1.0.0
-->
<template>
  <section class="container">
    <Header/>
    <Home/>
    <BusinessModel/>
    <TechnologySuperiority/>
    <Token ref="token"/>
    <TeamIntroduction/>
    <Footer/>
  </section>
</template>

<script>
import Header from './components/Header'
import Home from './components/Home.vue'
import BusinessModel from './components/BusinessModel'
import TechnologySuperiority from './components/TechnologySuperiority'
import Token from './components/Token'
import TeamIntroduction from './components/TeamIntroduction'
import Footer from './components/Footer'
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import { mapState } from 'vuex'

Vue.use(VueScrollTo)

export default {
  components: {
    Header,
    Home,
    BusinessModel,
    TechnologySuperiority,
    Token,
    TeamIntroduction,
    Footer
  },

  computed: {
    ...mapState(['locale'])
  },

  mounted() {
    this.init()
  },

  methods: {
    init() {
      const localLang = (navigator.language || navigator.browserLanguage).toLowerCase()
      // 根据系统语言设置默认语言
      if (localLang !== this.locale && this.$route.query.unsight !== 'yes') {
        return this.$router.replace(`/${localLang}`)
      }

      if (this.isMobile()) {
        import('~/styles/mobile.styl')
        if (this.isIOS()) {
          import('~/styles/mobile-ios.styl')
        }
      } else {
        this.backgroundRoll()
      }
    },

    isIOS() {
      return (/iPhone|iPad|iPod/).test(navigator.userAgent)
    },

    isMobile() {
      return (/Android|iPhone|iPad|iPod|Symbian/).test(navigator.userAgent)
    },

    backgroundRoll() {
      const body = document.getElementsByTagName('body')[0]
      const basePositionY = this.getPositionY(body)
      const baseDiff = 5 // 背景偏移的落差值

      this.onScroll((direction, beforeScrollTop, afterScrollTop) => {
        let diff = direction === 'up' ? baseDiff : -baseDiff
        let y = this.getPositionY(body) + diff
        y = afterScrollTop <= 10 ? basePositionY : y // 快要滚动到顶部的时候 重置回basePositionY

        body.style.backgroundPositionY = `${y}px`
      })
    },

    onScroll(fn = () => { }) {
      let beforeScrollTop = this.getScrollPosition().top

      window.addEventListener('scroll', () => {
        let afterScrollTop = this.getScrollPosition().top
        let delta = afterScrollTop - beforeScrollTop
        if (delta === 0) return false

        fn(delta > 0 ? 'down' : 'up', beforeScrollTop, afterScrollTop)
        beforeScrollTop = afterScrollTop
      }, false)
    },

    getPositionY(el) {
      let y = ''
      if (el.style.backgroundPositionY !== '') {
        y = el.style.backgroundPositionY
      } else {
        y = getComputedStyle(el, null)['backgroundPositionY']
      }
      return ~~y.match(/\-\d+|\d+/)[0]
    },

    getScrollPosition() {
      if (window.pageYOffset != null) {
        return {
          left: window.pageXOffset,
          top: window.pageYOffset
        }
      } else if (document.compatMode == 'CSS1Compat') {
        return {
          left: document.documentElement.scrollLeft,
          top: document.documentElement.scrollTop
        }
      }

      return {
        left: document.body.scrollLeft,
        top: document.body.scrollTop
      }
    }
  }
}
</script>
