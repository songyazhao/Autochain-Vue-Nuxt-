<style lang="stylus">
.video-player {
  overflow: hidden;

  &-box {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &-close {
    position: absolute !important;
    top: 8px;
    right: 8px;
    z-index: 10;
  }
}

.video-js .vjs-big-play-button {
  left: 50%;
  top: 50%;
  margin-left: -45px;
  margin-top: -22.5px;
}
</style>

<template>
  <div class="video-player">
    <section class="video-player-box">
      <IconClose class="video-player-close" @click.native="$emit('input', false)"/>
      <div
        playsinline
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
        @ended="onPlayerEnded($event)"
        @loadeddata="onPlayerLoadeddata($event)"
        @waiting="onPlayerWaiting($event)"
        @playing="onPlayerPlaying($event)"
        @timeupdate="onPlayerTimeupdate($event)"
        @canplay="onPlayerCanplay($event)"
        @canplaythrough="onPlayerCanplaythrough($event)"
        @ready="playerReadied"
        @statechanged="playerStateChanged($event)"
        v-video-player:myVideoPlayer="playerOptions">
      </div>
    </section>
  </div>
</template>

<script>
import IconClose from '~/components/Icon/Close'

export default {
  name: 'VideoPlayer',
  props: ['value'],
  components: { IconClose },
  data() {
    return {
      show: this.value,
      // videojs options
      playerOptions: {
        fluid: true,
        muted: true,
        language: 'zh-CN',
        playbackRates: [0.75, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: 'http://autochain.cc/video.mp4'
        }],
        // poster: '/static/images/author.jpg',
      }
    }
  },
  mounted() {
    // console.log('this is current player instance object', this.myVideoPlayer)
  },
  methods: {
    // listen event
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    onPlayerEnded(player) {
      // console.log('player ended!', player)
    },
    onPlayerLoadeddata(player) {
      // console.log('player Loadeddata!', player)
    },
    onPlayerWaiting(player) {
      // console.log('player Waiting!', player)
    },
    onPlayerPlaying(player) {
      // console.log('player Playing!', player)
    },
    onPlayerTimeupdate(player) {
      // console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay(player) {
      // console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough(player) {
      // console.log('player Canplaythrough!', player)
    },
    // or listen state event
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },
    // player is ready
    playerReadied(player) {
      console.log('the player is readied', player)
    }
  }
}
</script>
