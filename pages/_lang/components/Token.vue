<style lang="stylus">
@import '../../../styles/_const.styl';
@import '../../../styles/_util.styl';

.token {
  .gold {
    position: relative;
    overflow: hidden;
    // height: 33vw;
    height: 26vw;

    img {
      position: absolute;
      width: 100%;
      left: 0;
      top: -100%;
    }

    .module-title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &-con {
    &__sub {
      position: relative;
      color: font-color-black;
      font-weight: 400;
      background-repeat: no-repeat;
      padding: 8em 0;

      &-1 {
        background-color: #E8EEFE;
        background-size: 35%;
        background-position: right bottom;
        background-image: url('../../../assets/v2/灯泡插图.png');

        .case-content {
          margin-left: 1.25em;
        }
      }

      &-2 {
        background-color: #F7F7F7;
        background-size: auto 100%;
        background-position: left center;
        background-image: url('../../../assets/v2/分析插图.png');
      }

      .title {
        font-size: 1.775em;
      }

      .desc {
        margin: 10px 0;
      }

      .case {
        line-height: 38px;

        &-title {
        }

        &-content {
          li {
            word-break: break-all;
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
          }
        }
      }
    }
  }
}

.en {
  .token-con__sub:last-child {
    .case {
      max-width: 660px !important;
    }
  }
}
</style>

<template>
  <div class="token" id="e" :class="{ en: locale === 'en' }">
    <div class="gold">
      <!-- data-_const_5_end="transform: translate(-50%, -11%);" -->
      <img
        src="../../../assets/v2/背景插图-2.png">
        <!-- v-scroll-reveal.reset="{
          origin: 'top',
          opacity: 1,
          distance: '37%',
          delay: 300,
          duration: 2000,
          viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }
        }"> -->
      <section class="module-title">
        <h2>{{ $t('Token.title') }}</h2>
      </section>
    </div>
    <article>
      <section class="token-con">
        <div class="token-con__sub token-con__sub-1">
          <div class="module" v-scroll-reveal.reset="{ origin: 'left' }">
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
        </div>
        <div class="token-con__sub  token-con__sub-2">
          <div style="text-align: right" class="module" v-scroll-reveal.reset="{ origin: 'right' }">
            <span style="display: inline-block;text-align: left">
              <div class="title">{{ $t('Token.sub2.subTitle') }}</div>
              <div class="desc">{{ $t('Token.sub2.desc') }}</div>
              <div class="case">
                <ul class="case-content">
                  <li v-for="(content, key) in sub2.case" :key="key">
                    {{ $t(`Token.sub2.case.${key}`) }}
                  </li>
                </ul>
              </div>
            </span>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
import { mapState } from 'vuex'
const { sub1, sub2 } = require('~/locales/zh-cn').Token

export default {
  name: 'Token',
  data() {
    return {
      sub1,
      sub2
    }
  },
  computed: {
    ...mapState(['locale'])
  }
}
</script>
