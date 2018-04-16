<style lang="stylus">
@import '../../../styles/_const.styl';

footer {
  background: black;
  position: relative;
}

#footer {
  height: 100px;
  line-height: 100px;
  length = 150px;

  .logo, .contact {
    position: absolute;
  }

  .logo {
    left: length;
    height: 76px;
    top: 50%;
    margin-top: -38px;
  }

  .copy {
    font-size: 12px;
    text-align: center;
    padding-top: 36px;

    .email {
      background: url('../../../assets/v2/email.png') no-repeat left center;
      background-size: auto 90%;
      padding-left: 1.6em;
      padding-bottom: 2px;
    }
  }

  .contact {
    right: length;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    li {
      width: 45px;
      height: 36px;
      background-repeat: no-repeat;
      background-size: 100%;
      margin-top: -20px;
      cursor: pointer;
      position: relative;

      .qrcode {
        position: absolute;
        top: -163px;
        width: 150px;
        height: 150px;
        left: -54px;
        opacity: 0;
        visibility: hidden;
        transition: visibility .35s ease;
      }

      &:before {
        content: attr(name);
        font-size: 13px;
      }

      &:hover {
        &:before {
          color: main-color;
        }

        .qrcode {
          transition: all .8s ease-in;
          opacity: 1;
          visibility: visible; // 暂时屏蔽二维码
        }
      }
    }

    .wechat {
      background-image: url('../../../assets/wechat-icon@2x.png');

      &:hover {
        background-image: url('../../../assets/wechat-icon-1@2x.png');
      }
    }

    .weibo {
      margin-left: 80px;
      background-image: url('../../../assets/weibo-icon@2x.png');

      &:hover {
        background-image: url('../../../assets/weibo-icon-1@2x.png');
      }
    }
  }
}
</style>

<template>
  <footer>
    <nav id="footer">
      <div class="logo">
        <img src="../../../assets/logo@2x.png" alt="车信链">
      </div>
      <p class="copy">
        <span class="email">service@autochain.cc</span>
        <br/>
        Copyright &copy; 2018 autochain.cc  |  All rights reserved
      </p>
      <ul class="contact">
        <li class="wechat" :name="$t('footer.wechat')">
          <img class="qrcode" src="../../../assets/qrcode-wechat.png">
        </li>
        <li class="weibo" :name="$t('footer.weibo')">
          <!-- <img class="qrcode" src="../../../assets/qrcode-weibo.png"> -->
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
