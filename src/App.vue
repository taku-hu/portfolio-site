<template>
  <div id="app">
    <transition name="switch" mode="out-in">
      <div v-if="!titleCall" key="title" class="title-call">
        <h1>{{ title }}</h1>
      </div>
      <div v-else key="contents" class="contents">
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
  mounted() {
    window.onload = async () => {
      await Promise.all(this.addTypingMovement("Welcome to my homepage!"));
      setTimeout(() => {
        this.titleCall = true;
      }, 200);
    }; //タイトル文字を一文字ずつ表示
  },
  data() {
    return {
      title: "",
      titleCall: false
    };
  },
  methods: {
    addTypingMovement(word) {
      return [...word].map((char, i) => {
        return new Promise(resolve => {
          setTimeout(() => {
            this.title += char;
            resolve();
          }, i * 200);
        });
      }); //Promiseオブジェクトを値に持つ配列をreturn
    }
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
  .title-call {
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
  .contents {
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