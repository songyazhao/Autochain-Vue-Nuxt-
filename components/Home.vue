<style lang="stylus">
@import '../styles/_const.styl';
@import '../styles/_util.styl';

.home {
  width: 100%;

  &:before {
    display: none;
  }

  &-banner {
    padding-top: 74px;
    background: #060606 url('../assets/banner-tp@2x.png') no-repeat center center;
    background-size: 100%;
  }

  &-banner-con {
    width: 100%;
    // min-height: 706px; // 白皮书下载功能暂时屏蔽掉
    padding-bottom: 45px;
    overflow: hidden;
    position: relative;
    text-align: center;

    & > div {
      margin-left: auto;
      margin-right: auto;
    }

    &__icon {
      width: 274px;
      margin-top: 120px;
      transitionBig();
    }

    &__text {
      width: 790px;
      background-color: blackback;
      margin-top: 38px;
      padding: 20px 15px;
    }

    &__buttons {
      font-size: 17px;
      text-align: center;
      margin-top: 26px;

      ul {
        width: 220px;
        display: inline-block;
        background-color: blackback;
        border-radius: 60% 0 60% 0;
        box-sizing: border-box;
        padding-left: 41px;
        padding-right: 52px;
        margin: 0 92px;
        cursor: pointer;

        li {
          height: 100%;
          line-height: 48px;
          float: right;
          imgMiddle();

          &:first-child {
            float: left;
          }
        }

        &:hover {
        }

        .icon {
          img {
            width: 20px;
          }
        }

        .text {
          font-size: 16px;
          text-decoration: underline;
          margin-left: 26px;
          margin-top: 2px;
        }
      }
    }
  }

  &-desc {
    initSize();

    h3 {
      font-weight: 100;
      font-size: 32px;
      margin-top: 60px;
    }

    &__step, &__year {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    &__step {
      margin-left: -7.5%;
      margin-right: -7.5%;
      margin-top: 60px;

      li {
        width: 132px;
        position: relative;
        z-index: 999;
      }

      .icon {
        display: block;
      }

      .text {
        position: absolute;
        top: 44%;
        right: 0;
        left: 0;
        text-align: center;
      }
    }

    &__year {
      position: relative;
      top: -70px;
      m = 66px;

      li:first-child {
        padding-left: m;
      }

      li:last-child {
        padding-right: m;
      }
    }

    &__points {
      ul {
        overflow: hidden;
      }

      .arrow {
        width: 840px;
        height: 6px;
        margin: 0 auto;
        padding-left: 3px;

        li {
          float: left;
          margin-right: 5px;
          width: 6px;
          height: 100%;
          background-image: url('../assets/汽车数据上链-三角@2x.png');
          background-repeat: no-repeat;

          &.active {
            background-image: url('../assets/汽车数据上链-三角-1@2x.png');
          }
        }
      }

      .point {
        display: flex;
        justify-content: space-between;
        padding: 0 49px;
        margin-top: 14px;

        li {
          width: 30px;
          height: 30px;
          position: relative;
          background-color: white;
          border-radius: 50%;

          &:before, &:after {
            content: '';
            display: inline-block;
            position: absolute;
            border-radius: 50%;
          }

          &:before {
            width: 26px;
            height: 26px;
            background-color: black;
            top: 2px;
            left: 2px;
            z-index: 1;
          }

          &:after {
            width: 14px;
            height: 14px;
            background-color: white;
            top: 8px;
            left: 8px;
            z-index: 2;
            transition: all 0.45s ease;
          }

          &.active:after {
            background-color: main-color;
            transition: all 0.45s ease;
          }
        }
      }
    }

    &__autochain {
      width: 400px;
      height: 354px;
      margin: 60px auto 0;
      background: url('../assets/组41@2x.png') no-repeat;
      background-size: 100%;
      position: relative;
      text-align: center;
      transitionBeforeBig();

      &:before {
        content: attr(inner-text);
        display: inline-block;
        width: 270px;
        text-align: center;
        font-size: 34px;
        word-break: keep-all;
        margin-top: 35%;
        line-height: 38px;
      }

      [class^='text-'] {
        position: absolute;
      }

      .text-1 {
        left: -75px;
        top: 0;
      }

      .text-2 {
        right: -75px;
        top: 0;
      }

      .text-3 {
        left: -40px;
        bottom: 7px;
      }

      .text-4 {
        right: -92px;
        bottom: 7px;
      }
    }
  }
}

.en {
  .home-desc {
    &__step {
      li:nth-child(1) .text {
        top: 30%;
      }

      li:nth-child(3) .text {
        top: 20%;
      }
    }

    &__autochain {
      .text-1 {
        left: -107px;
      }

      .text-2 {
        right: -165px;
      }

      .text-4 {
        right: -184px;
      }
    }
  }
}
</style>

<template>
  <div class="module home" id="a" :class="{ en: locale === 'en' }">
    <div class="home-banner">
      <div class="home-banner-con">
        <div class="home-banner-con__icon">
          <img src="../assets/Autochain@2x.png">
        </div>
        <div class="home-banner-con__text">
          <p>{{ $t('home.banner.text') }}</p>
        </div>
        <!-- 白皮书和视频下载功能在此 暂时屏蔽掉了 -->
        <!-- <div class="home-banner-con__buttons">
          <ul>
            <li class="icon">
              <img src="../assets/bps-icon@2x.png">
            </li>
            <li class="text">{{ $t('home.buttons.two') }}</li>
          </ul>
        </div> -->
      </div>
    </div>

    <div class="home-desc">
      <h3>{{ $t('home.desc.title1') }}</h3>
      <p>{{ $t('home.desc.label1') }}</p>

      <ul class="home-desc__step">
        <li
          v-for="(item, key, index) in step.label"
          :key="key"
          :class="{ pulse: stepScale[index] }"
          @mouseover="stepScale[index] = true"
          @mouseout="stepScale[index] = false">
          <img class="icon" src="../assets/汽车数据上链-t@2x.png">
          <span class="text">{{ $t(`home.step.label.${key}`) }}</span>
        </li>
      </ul>
      <ul class="home-desc__year">
        <li v-for="(item, key) in step.year" :key="key">
          {{ $t(`home.step.year.${key}`) }}
        </li>
      </ul>
      <div class="home-desc__points">
        <ul class="arrow">
          <li v-for="o in arrowNum" :key="o" :class="{ active: arrowActiveArr.indexOf(o) > -1 }"></li>
        </ul>
        <ul class="point">
          <li v-for="(o, index) in pointNum" :key="o" :class="{ active: pointActiveIndex === index }"></li>
        </ul>
      </div>

      <h3>{{ $t('home.desc.title2') }}</h3>
      <p>{{ $t('home.desc.label2') }}</p>

      <ul class="home-desc__autochain" :class="{ skip: isMobile }" :inner-text="$t('home.autochain.innerText')">
        <li
          :class="`text-${index + 1}`"
          v-for="(item, key, index) in autochain.tag"
          :key="key">
          {{ $t(`home.autochain.tag.${key}`) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
const { step, autochain } = require('~/locales/zh-cn').home
const arrowActiveArr = [1, 2, 3, 4, 5, 6]
const stepScale = Object.keys(step.label).map(item => false)

export default {
  name: 'Home',
  data() {
    return {
      step,
      stepScale,
      autochain,
      arrowNum: 76,
      arrowActiveArr,
      pointNum: 3,
      pointActiveIndex: 0,
      isMobile: false
    }
  },

  computed: {
    ...mapState(['locale'])
  },

  mounted() {
    if (this.isMobile = this.$parent.isMobile()) {
      this.arrowNum = 61
      this.pointMove(this.arrowNum, [15, 35, 50])
      this.turnSkip()
    } else {
      this.pointMove(this.arrowNum, [25, 40, 65])
    }
  },

  methods: {
    turnSkip() {
      let l = this.stepScale.length
      let i = 0
      setInterval(() => {
        this.stepScale.fill(false)
        this.stepScale[i++] = true
        i = i > (l - 1) ? 0 : i
      }, 800)
    },
    pointMove(num, critical = [25, 40, 65]) {
      setInterval(() => {
        const arr = this.arrowActiveArr
        const last = arr[arr.length - 1]

        if (last >= num) {
          this.arrowActiveArr = arrowActiveArr
        } else {
          this.arrowActiveArr = arr.map(item => ++item)
        }

        if (last < critical[0]) {
          this.pointActiveIndex = 0
        } else if (last >= critical[1] && last <= critical[2]) {
          this.pointActiveIndex = 1
        } else if (last > critical[2] && last <= num) {
          this.pointActiveIndex = 2
        } else {
          this.pointActiveIndex = -1
        }
      }, 25)
    }
  }
}
</script>
