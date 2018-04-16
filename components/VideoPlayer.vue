<style lang="stylus">
.video-js {
  .vjs-big-play-button {
    left: 50%;
    top: 50%;
    margin-left: -1.5em;
    margin-top: -1.5em;
    width: 3em;
    height: 3em;
    line-height: 3em;
    border-radius: 50%;
    border: none;

    .vjs-icon-placeholder:before {
      transform: scale(2.35);
    }
  }

  .vjs-tech {
    border-radius: 8px;
  }
}
</style>

<template>
  <div class="video-player">
    <div
      class="video-player-box"
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
  </div>
</template>

<script>

export default {
  name: 'VideoPlayer',
  props: ['value'],
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
