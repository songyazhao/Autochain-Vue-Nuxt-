<style lang="stylus">
@import '../../../styles/_const.styl';
@import '../../../styles/_util.styl';

.home {
  width: 100%;

  .grain-light {
    position: absolute;
    z-index: 1;
  }

  &:before {
    display: none;
  }

  &-banner {
    padding-top: 74px;
    position: relative;

    &-con {
      overflow: hidden;
      text-align: center;
    }

    &-icon {
      width: 27%;
      max-width: 510px;
      position: absolute;
      z-index: 2;
      top: 50%;
      left: 50%;
      transform: scale(1) translate(-50%, -50%);
      transform-origin: 0 0 0;
      transition: all 0.45s ease-in-out;

      &:hover {
        transform: scale(1.1) translate(-50%, -50%);
        transition: all 0.45s ease-out;
      }
    }
  }

  [class^='home-model'] {
    h3 {
      margin-top: 5em;
    }
  }

  .img-car {
    height: 48vw;
    min-height: 335px;
    background: url('../../../assets/v2/彩色汽车.png') no-repeat left bottom;
    background-size: 75%;
  }
}

.en {
  .home-model2-con .year {
    top: -2.85em;
  }
}
</style>

<template>
  <div class="home" id="a" :class="{ en: locale === 'en' }">
    <!-- <GrainLight class="grain-light"/> -->
    <div class="home-banner">
      <div class="home-banner-con">
        <img src="../../../assets/v2/黑车-2-2-2.png">
      </div>
      <div class="home-banner-icon">
        <img src="../../../assets/Autochain@2x.png">
      </div>
    </div>
    <Model-1 class="module"/>
    <div class="img-car">
      <Model-2 class="module"/>
    </div>
    <Model-3 class="module"/>
  </div>
</template>

<script>
import { mapState } from "vuex"
import Model1 from './HomeModel/Model-1'
import Model2 from './HomeModel/Model-2'
import Model3 from './HomeModel/Model-3'
import GrainLight from '~/components/Canvas/GrainLight'

export default {
  name: 'Home',

  components: { Model1, Model2, Model3, GrainLight },

  computed: {
    ...mapState(['locale'])
  }
}
</script>
