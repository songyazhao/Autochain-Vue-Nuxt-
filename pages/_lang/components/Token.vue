<style lang="stylus">
@import '../../../styles/_const.styl';
@import '../../../styles/_util.styl';

.token {
  &-con {
    &__sub {
      position: relative;

      .title {
        margin-top: 14px;
        font-size: 32px;
      }

      .desc {
        margin-top: 6px;
      }

      .case {
        line-height: 38px;
        margin-top: 32px;

        &-title {
        }

        &-content {
          li {
            padding-left: 34px;
            position: relative;
            solidDot(main-color);

            &:before {
              position: absolute;
              top: 15px;
              left: 0;
            }

            @media only screen and (min-width: 600px) {
              &:hover {
                color: main-color;
              }
            }

            &.active {
              color: main-color;
            }
          }
        }
      }

      .pie {
        position: absolute;
        top: 0;
        right: 0;
        transform: rotateZ(-70deg);

        &:before {
          transform: rotateZ(70deg);
          content: attr(inner-text);
          color: #353535;
          font-size: 26px;
          font-weight: 400;
          letter-spacing: 2px;
          position: absolute;
          left: 0;
          right: 0;
          text-align: center;
          line-height: 300px;
        }

        .point {
          position: absolute;
          border-radius: 50%;
          width: 17px;
          height: 17px;
          background-color: rgba(255, 255, 255, 0.75);
        }

        li:nth-child(1) {
          top: 4px;
          left: 180px;
        }

        li:nth-child(2) {
          top: 98px;
          left: 7px;
        }

        li:nth-child(3) {
          top: 100px;
          right: 6px;
        }

        li:nth-child(4) {
          top: 278px;
          right: 100px;
        }
      }

      &:last-child {
        .title {
          margin-top: 66px;
        }
      }
    }
  }
}

.en {
  .pie {
    right: -50px !important;
  }

  .token-con__sub:last-child {
    .case {
      max-width: 660px !important;
    }
  }
}
</style>

<template>
  <div class="module token" id="e" :class="{ en: locale === 'en' }">
    <div class="module-title">
      <h2>{{ $t('Token.title') }}</h2>
    </div>
    <div class="token-con">
      <div class="token-con__sub">
        <div class="title">{{ $t('Token.sub1.subTitle') }}</div>
        <div class="desc">{{ $t('Token.sub1.desc') }}</div>
        <div class="case">
          <div class="case-title">{{ $t('Token.sub1.case1.tit') }}</div>
          <ul class="case-content">
            <li v-for="(content, key) in sub1.case1.content" :key="key">
              {{ $t(`Token.sub1.case1.content.${key}`) }}
            </li>
          </ul>
        </div>
        <div class="case">
          <div class="case-title">{{ $t('Token.sub1.case2.tit') }}</div>
          <ul class="case-content">
            <li v-for="(content, key) in sub1.case2.content" :key="key">
              {{ $t(`Token.sub1.case2.content.${key}`) }}
            </li>
          </ul>
        </div>
      </div>
      <div class="token-con__sub">
        <div class="title">{{ $t('Token.sub2.subTitle') }}</div>
        <div class="desc">{{ $t('Token.sub2.desc') }}</div>
        <div class="case">
          <ul class="case-content">
            <li
              :class="{ active: isMobile && activePercent == content.substr(0, 2)  }"
              v-for="(content, key) in sub2.case" :key="key"
              @mouseover="handleMouseOver(content.substr(0, 2))"
              @mouseout="handleMouseOut">
              {{ $t(`Token.sub2.case.${key}`) }}
            </li>
          </ul>
        </div>
        <div class="pie" :inner-text="$t('Token.sub2.pieText')">
          <li class="point"></li>
          <li class="point"></li>
          <li class="point"></li>
          <li class="point"></li>
          <PieChart
            ref="PieChart"
            width="300"
            height="300"
            :colors="colors">
          </PieChart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PieChart from '~/components/PieChart'
const { sub1, sub2 } = require('~/locales/zh-cn').Token
const colors = () => ['#939393', '#A6A6A6', '#7D7D7D', '#BBBBBB']
const percents = [40, 30, 20, 10]

export default {
  name: 'Token',
  components: { PieChart },
  data() {
    return {
      sub1,
      sub2,
      colors,
      timer: null,
      activePercent: 40,
      isMobile: false
    }
  },
  computed: {
    ...mapState(['locale'])
  },
  mounted() {
    if (this.isMobile = this.$parent.isMobile()) {
      this.mobileInit()
    }
  },
  methods: {
    clearTimer() {
      clearInterval(this.timer)
    },
    // 饼图在移动端执行自动轮播
    mobileInit() {
      let i = 0
      this.timer = setInterval(() => {
        const percent = this.activePercent = percents[i++]
        this._over(percent)
        i = i > (percents.length - 1) ? 0 : i
      }, 1500)
    },
    handleMouseOver(percent) {
      if (!this.isMobile) {
        this._over(percent)
      }
    },
    handleMouseOut() {
      if (!this.isMobile) {
        this._out()
      }
    },
    _over(percent) {
      const colors = this.colors()
      const index = percents.indexOf(~~percent)
      colors[index] = '#F7C24A'
      this.$refs.PieChart.clear()
      this.$refs.PieChart.draw(colors)
    },
    _out() {
      this.$refs.PieChart.clear()
      this.$refs.PieChart.draw()
    }
  }
}
</script>
