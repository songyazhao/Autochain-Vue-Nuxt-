<style lang="stylus">
@import './Model-1.styl'
</style>

<template>
  <article class="home-model1" v-scroll-reveal.reset="{ origin: 'right', mobile: false }">
    <section class="home-model1-left">
      <h3>车信链<br/>AUTOCHAIN</h3>
      <p>{{ $t('home.banner.text') }}</p>
    </section>
    <section class="home-model1-right">
      <VideoPlayer class="video-con" v-model="showPlayer"/>

      <a class="download" :href="`/book_${locale}.pdf`" :download="`book_${locale}.pdf`">
        <div class="download-button">{{ $t('home.buttons.two') }}</div>
      </a>
    </section>
  </article>
</template>

<script>
import { mapState } from "vuex"
import VideoPlayer from '~/components/VideoPlayer'

export default {
  name: 'HomeModel-1',

  components: { VideoPlayer },

  data () {
    return {
      showPlayer: false
    }
  },

  computed: {
    ...mapState(['locale'])
  }
}
</script>
