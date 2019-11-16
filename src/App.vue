<template>
  <div id="app">
    <transition name="switch" mode="out-in">
      <div v-if="!titleCall" key="title" class="title-call">
        <div class="background">
          <p v-for="(sentence, index) in bgSentences" :key="index">
            <span :data-text="sentence">{{ sentence }}</span>
          </p>
        </div>
        <h1>{{ title }}</h1>
      </div>
      <div v-else key="contents" class="contents">
        <header-component />
        <transition name="switch" mode="out-in">
          <router-view />
        </transition>
        <footer-component />
      </div>
    </transition>
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue';
import FooterComponent from '@/components/Footer.vue';
import { mobileBrowser } from '@/mixins/mobileBrowser.js';
import { background } from '@/mixins/background.js';

export default {
  name: 'App',
  mixins: [mobileBrowser, background],
  created() {
    window.onload = async () => {
      await Promise.all(this.addTypingMovement('Welcome to my website!'));
      setTimeout(() => {
        this.titleCall = true;
      }, 200);
    }; //タイトル文字を一文字ずつ表示
  },
  data() {
    return {
      title: '',
      titleCall: false
    };
  },
  methods: {
    addTypingMovement(word) {
      return [...word].map((character, index) => {
        return new Promise(resolve => {
          setTimeout(() => {
            this.title += character;
            resolve();
          }, 200 * ++index);
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
@import '@/assets/styles/_fragments.scss';

html {
  font-size: calc(62.5% + 0.5vw);
}
body {
  font-family: 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3', 'メイリオ',
    Meiryo, 'ＭＳ Ｐゴシック', sans-serif;
}
#app {
  @include center-styling;
  text-align: center;
  overflow: hidden;
  .title-call {
    @include center-styling;
    position: relative;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    background-color: rgb(15, 54, 167);
    background-image: linear-gradient(90deg, rgba(15, 54, 167, 1) 40%, rgba(0, 163, 254, 1) 100%);
    overflow: hidden;
    .background {
      position: absolute;
      top: 0;
      left: 0;
      white-space: nowrap;
      p {
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.3);
        border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        overflow: hidden;
        user-select: none;
        transition: 0.5s;
        span {
          position: relative;
          display: inline-block;
          letter-spacing: 1px;
          padding: 5px 0 5px 5px;
          &:before {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: -100%;
            padding: 5px 0 5px 5px;
          }
        }
        &:nth-child(odd) span {
          animation: slide 20s linear infinite;
        }
        &:nth-child(even) span {
          animation: slide-reverse 20s linear infinite;
        }
      } //p
    } //.background
    h1 {
      @include txt-neon-shadow;
      font-family: 'Orbitron', sans-serif;
      font-size: 5rem;
      font-weight: bold;
      color: #fff;
      &:after {
        width: 4px;
        content: '';
        border-right: 4px solid #fff;
        animation: flashing 0.4s linear infinite;
      }
    }
  } //.title-call
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
  } //.contents
}

//カーソルの点滅アニメーション
@keyframes flashing {
  0% {
    opacity: 0;
  }
}

//背景用文字スライドアニメーション
@keyframes slide {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes slide-reverse {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}

//ページ遷移トランジション
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