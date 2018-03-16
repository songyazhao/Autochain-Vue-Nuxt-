<style lang="stylus">
@import '../../../styles/_const.styl';

.team {
  padding-bottom: 240px;

  &-title {
    margin-left: 6px;
    margin-top: 43px;
    margin-bottom: 30px;
    font-size: 32px;
  }

  &-con {
    display: flex;
    flex-wrap: wrap;

    &__item {
      flex-basis: 25%;
      height: 280px;
      position: relative;
      background-position-x: 0;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      transition: background-size 0.3s ease-in;

      .text {
        position: absolute;
        top: 85px;
        left: 0;
        right: 0;
        margin: 0 auto;
        text-align: center;
        font-size: 12px;
        opacity: 0;
        line-height: 1.3;
        color: #fff;
        transition: opacity 0.5s ease-in;
        z-index: 2;

        .title {
          margin-top: 20px;
          font-size: 22px;
        }

        .desc {
          font-size: 14px;
          margin: 28px auto 0;
        }

        .identity {
          font-size: 14px;
          margin-top: 2px;
        }
      }

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(247, 194, 74, 0.75);
        opacity: 0;
        height: 100%;
        width: 0;
        margin: 0 auto;
        transition: width 0.3s ease-in;
      }

      &:hover {
        background-size: 110% 110%;

        &:after {
          opacity: 1;
          width: 100%;
        }

        .text {
          opacity: 1;
        }
      }

      // 创始团队
      // for i in 1..3 {
      // str = '../../../assets/team/1-' + i + '.jpg'
      // &-2-{i} {
      // background-image: url(str);
      // }
      // }

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
  <div class="module team" id="f">
    <div class="module-title">
      <h2>{{ $t('TI.title') }}</h2>
    </div>
    <!-- 创始团队(预留位置) -->
    <!-- <div class="team-child">
      <div class="team-title">{{ $t('TI.sub1.subTitle') }}</div>
      <ul class="team-con">
        <li class="team-con__item" :class="`team-con__item-1-${index+1}`" v-for="(item, key, index) in sub1.child" :key="key">
          <div class="text">
            <div class="title">{{ $t(`TI.sub1.child.${key}.tit`) }}</div>
            <div class="desc">{{ $t(`TI.sub1.child.${key}.desc`) }}</div>
            <div class="identity">{{ $t(`TI.sub1.child.${key}.identity`) }}</div>
          </div>
        </li>
      </ul>
    </div> -->
    <!-- 投资人及顾问 -->
    <div class="team-child">
      <div class="team-title">{{ $t('TI.sub2.subTitle') }}</div>
      <ul class="team-con">
        <li class="team-con__item" :class="`team-con__item-2-${index+1}`" v-for="(item, key, index) in sub2.child" :key="key">
          <div class="text">
            <div class="title">{{ $t(`TI.sub2.child.${key}.tit`) }}</div>
            <div class="desc">{{ $t(`TI.sub2.child.${key}.desc`) }}</div>
            <div class="identity">{{ $t(`TI.sub2.child.${key}.identity`) }}</div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 投资机构(预留位置) -->
    <!-- <div class="team-child">
      <div class="team-title">{{ $t('TI.sub3.subTitle') }}</div>
      <ul class="team-con"></ul>
    </div> -->
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
