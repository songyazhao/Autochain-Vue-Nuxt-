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
    <Token/>
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
    ...mapState(['locales', 'locale'])
  },

  mounted() {
    this.init()
  },

  methods: {
    init() {
      let localLang = (navigator.language || navigator.browserLanguage).toLowerCase()

      // 国外
      if (this.locales.indexOf(localLang) === -1) {
        localLang = 'en'
      }

      // 根据系统语言设置默认语言
      if (localLang !== this.locale && this.$route.query.unsight !== 'yes') {
        return this.$router.replace(`/${localLang}`)
      }

      this.watchWindowResize()
    },

    // 监听窗体缩放
    watchWindowResize() {
      this.$store.commit('SET_IS', window.innerWidth < 767)
      window.addEventListener('resize', () => {
        this.$store.commit('SET_IS', window.innerWidth < 767)
      })
    }
  }
}
</script>
