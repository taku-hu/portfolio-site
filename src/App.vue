<template>
  <div id="app">
    <transition name="switch" mode="out-in">
      <div v-if="!titleCall" key="titleCall" class="before-title-call">
        <h1>{{ title }}</h1>
      </div>
      <div v-else key="contents" class="after-title-call">
        <header-component></header-component>
        <transition name="switch">
          <router-view></router-view>
        </transition>
        <footer-component></footer-component>
      </div>
    </transition>
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header.vue";
import FooterComponent from "@/components/Footer.vue";
import { mobileBrowser } from "@/mobileBrowser.js";

export default {
  name: "App",
  mixins: [mobileBrowser],
  mounted: function() {
    window.onload = this.addTypingMovement("Welcome to my website!");
  },
  data() {
    return {
      title: "",
      titleCall: false
    };
  },
  methods: {
    addTypingMovement: function(word) {
      for (let i = 0; i < word.length; i++) {
        setTimeout(() => {
          this.title = this.title + word.slice(i, i + 1);
        }, 200 * i);
        if (i === word.length - 1) {
          setTimeout(() => {
            this.titleCall = true;
          }, 200 * (i + 2));
        } //最終ループ時に実行する処理
      }
    } //addTypingMovement
  },
  components: {
    HeaderComponent,
    FooterComponent
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/_fragments.scss";

html {
  font-size: calc(62.5% + 0.5vw);
}
body {
  font-family: "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", "メイリオ",
    Meiryo, "ＭＳ Ｐゴシック", sans-serif;
}
#app {
  @include center-styling;
  text-align: center;
  overflow: hidden;
  .before-title-call {
    @include center-styling;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    background: linear-gradient(rgba(28, 37, 255, 0.6), rgba(28, 37, 255, 0.6)),
      url("~@/assets/images/header-image.jpg");
    background-size: cover;
    h1 {
      @include txt-neon-shadow;
      font-family: "Orbitron", sans-serif;
      font-size: 5rem;
      font-weight: bold;
      color: #fff;
    }
  }
  .after-title-call {
    @include center-styling;
    width: 100%;
    section {
      @include center-styling;
      width: 100%;
    }
    a {
      text-decoration: none;
    }
  }
}

//ページ遷移アニメーション
.switch-enter-active {
  transition: 1.5s;
}
.switch-enter-to,
.switch-leave {
  opacity: 1;
}
.switch-enter,
.switch-leave-to {
  opacity: 0;
}
</style>