<style lang="stylus">
@import '../../../styles/_const.styl';

.team {
  background: white url('../../../assets/v2/man.png') no-repeat right bottom;
  background-size: 20%;
  padding-bottom: 240px;
  padding-top: 3em;

  .module-title {
    color: font-color-black;
    h2::after{
      margin-top: 0.4em;
    }
  }

  &-con {
    margin-top: 2.35em;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &__item {
      flex-basis: 21%;
      position: relative;
      background-position-x: 0;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      transition: background-size 0.3s ease-in;
      margin-bottom: 2.5em;
      box-shadow: 0 0 15px rgba(font-color-black, 0.35);
      overflow: hidden;

      &[class*="team-con__item-1-"] {
        flex-basis: 27%!important;
      }

      img.replace {
        visibility: hidden;
      }

      .text {
        position: absolute;
        z-index: 2;
        left: 100%;
        right: 0;
        bottom: 0;
        margin: 0 auto;
        white-space: nowrap;
        text-align: center;
        font-weight: 400;
        padding: 10.5% 0;
        opacity: 0;
        line-height: 1.3;
        color: font-color-black;
        background-color: white;
        transition: all 0.3s ease-in;

        .title {
          font-size: 1.05em;
          padding-bottom: 0.2em;
        }

        .desc, .identity {
          min-height: 15px;
          font-size: .75em;
        }
      }

      &:hover {
        background-size: 110% 110%;

        .text {
          opacity: 1;
          left: 18%;
        }
      }

      // 创始团队
      for i in 1 .. 3 {
        str = '../../../assets/team/1-' + i + '.jpg';

        &-1-{i} {
          background-image: url(str);
        }
      }

      // 投资人及顾问
      for i in 1 .. 8 {
        str = '../../../assets/team/2-' + i + '.jpg';

        &-2-{i} {
          background-image: url(str);
        }
      }
    }
  }
}
</style>

<template>
  <div class="team" id="f">
    <!-- 创始团队 -->
    <article class="module">
      <section class="module-title">
        <h2>{{ $t('TI.sub1.subTitle') }}</h2>
      </section>
      <ul class="team-con">
        <li
          :class="['team-con__item', `team-con__item-1-${index+1}`]"
          v-for="(item, key, index) in sub1.child" :key="key"
          v-scroll-reveal.reset="{ origin: 'bottom', distance: '20px', scale: 0.65, duration: 750, delay: 50 }">
          <img class="replace" src="../../../assets/team/2-1.jpg">
          <div class="text">
            <div class="title">{{ $t(`TI.sub1.child.${key}.tit`) }}</div>
            <div class="desc">{{ $t(`TI.sub1.child.${key}.desc`) }}</div>
            <div class="identity">{{ $t(`TI.sub1.child.${key}.identity`) }}</div>
          </div>
        </li>
      </ul>
    </article>

    <!-- 投资人及顾问 -->
    <article class="module">
      <section class="module-title">
        <h2>{{ $t('TI.sub2.subTitle') }}</h2>
      </section>
      <ul class="team-con">
        <li
          :class="['team-con__item', `team-con__item-2-${index+1}`]"
          v-for="(item, key, index) in sub2.child" :key="key"
          v-scroll-reveal.reset="{ origin: 'bottom', distance: '20px', scale: 0.65, duration: 750, delay: 50 }">
          <img class="replace" src="../../../assets/team/2-1.jpg">
          <div class="text">
            <div class="title">{{ $t(`TI.sub2.child.${key}.tit`) }}</div>
            <div class="desc">{{ $t(`TI.sub2.child.${key}.desc`) }}</div>
            <div class="identity">{{ $t(`TI.sub2.child.${key}.identity`) }}</div>
          </div>
        </li>
      </ul>
    </article>

    <!-- 投资机构(预留位置) -->
    <!-- <article class="module">
      <section class="module-title">
        <h2>{{ $t('TI.sub3.subTitle') }}</h2>
      </section>
      <ul class="team-con">
        <li class="team-con__item" :class="`team-con__item-2-${index+1}`" v-for="(item, key, index) in sub2.child" :key="key">
          <img class="replace" src="../../../assets/team/2-1.jpg">
          <div class="text">
            <div class="title">{{ $t(`TI.sub2.child.${key}.tit`) }}</div>
            <div class="desc">{{ $t(`TI.sub2.child.${key}.desc`) }}</div>
            <div class="identity">{{ $t(`TI.sub2.child.${key}.identity`) }}</div>
          </div>
        </li>
      </ul>
    </article> -->
  </div>
</template>

<script>
const { sub1, sub2 } = require('~/locales/zh-cn').TI

export default {
  name: 'TeamIntroduction',
  data() {
    return {
      sub1,
      sub2
    }
  }
}
</script>
