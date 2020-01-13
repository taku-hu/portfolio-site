<template>
  <div id="app">
    <transition name="switch" mode="out-in">
      <div class="title" v-if="!titleCall" key="title" >
        <div class="title__background">
          <p v-for="sentence in bgSentences" :key="sentence.id">
            <span :data-text="sentence.item">{{ sentence.item }}</span>
          </p>
        </div>
        <div class="title__front">
          <h1>{{ title }}</h1>
        </div>
      </div>

      <div class="contents" v-else key="contents" >
        <header-component @smoothScroll="smoothScroll" />

        <main>
          <transition name="switch" mode="out-in">
            <router-view />
          </transition>
        </main>

        <a class="contents__move-button" @click="movePage">
          <i class="fas fa-angle-left" v-show="moveAction === 'BACK'"></i>
          {{ moveAction }}
          <i class="fas fa-angle-right" v-show="moveAction === 'MORE'"></i>
        </a>
        <transition name="slide-up">
          <a class="contents__scroll-button" @click="smoothScroll('header')" v-show="scroll">
            <i class="fas fa-arrow-up"></i>
          </a>
        </transition>

        <footer-component />
      </div>
    </transition>
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue';
import FooterComponent from '@/components/Footer.vue';
import { background } from '@/mixins/background.js';

export default {
  name: 'App',
  mixins: [background],
  created() {
    this.window();

    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
      const reVh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${reVh}px`);
    });

    window.addEventListener('scroll', () => {
      const positionY = window.scrollY;
      if(positionY > 0) {
        this.scroll = true;
      } else {
        this.scroll = false;
      }
    })
  },
  data() {
    return {
      title: '',
      titleCall: false,
      scroll: false,
    };
  },
  computed: {
    moveAction() {
      return this.$route.name === 'home' ? 'MORE' : 'BACK';
    }
  },
  methods: {
    window:onload = async function() {
      const typing = word => {
        return [...word].map((character, index) => {
          return new Promise(resolve => {
            setTimeout(() => {
              this.title += character;
              resolve();
            }, 200 * ++index);
          });
        }); //Promiseオブジェクトを値に持つ配列をreturn
      }

      await Promise.all(typing('Welcome to my website!'));
      setTimeout(() => {
        this.titleCall = true;
      }, 200);
    },
    movePage() {
      if(this.$route.name === 'home') {
        this.$router.push({name: 'about'});
      } else {
        this.$router.push({name: 'home'});
      }
    },
    smoothScroll(element) {
      this.$scrollTo(element);
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
  font-family: 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', sans-serif;
}
a {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

#app {
  @include center-styling;
  text-align: center;
  overflow: hidden;
  .title {
    @include center-styling;
    position: relative;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    background-color: rgb(15, 54, 167);
    background-image: linear-gradient(90deg, rgba(15, 54, 167, 1) 40%, rgba(0, 163, 254, 1) 100%);
    overflow: hidden;
    &__background {
      @include bg-animation-back;
    } //__background
    &__front {
      @include center-styling;
      @include bg-animation-front;
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
    } //__front
  } //.title

  .contents {
    @include center-styling;
    width: 100%;
    main {
      @include center-styling;
      width: 100%;
    }
    &__move-button {
      display: block;
      width: 8rem;
      height: 3rem;
      line-height: 3rem;
      border: solid 1px #000;
      margin: 3rem;;
      transition: 0.5s;
      &:hover {
        color: #fff;
        background-color: #000;
      }
    } //__move-button
    &__scroll-button {
      @include center-styling;
      position: fixed;
      right: 10%;
      bottom: 5%;
      z-index: 99;
      width: 5rem;
      height: 5rem;
      color: #fff;
      background-color: rgba(255, 0, 0, 0.8);
      font-size: 2.5rem;
      border-radius: 50%;
      box-shadow: 1px 1px 6px 0px #333;
      &:active {
        transform: scale(0.9);
      }
    } //__scroll-button
  } //.contents
}

//カーソルの点滅アニメーション
@keyframes flashing {
  100% {
    opacity: 0;
  }
}

//背景用文字スライドアニメーション
@keyframes slide {
  0% {
    transform: translateX(100%);
  }
}
@keyframes slide-reverse {
  100% {
    transform: translateX(100%);
  }
}

//ページ遷移トランジション
.switch-enter-active {
  transition: 1.5s;
}
.switch-enter,
.switch-leave-to {
  opacity: 0;
}

//ボタン表示トランジション
.slide-up-enter-active,
.slide-up-leave-active {
  transition: 0.5s;
}
.slide-up-enter,
.slide-up-leave-to {
  transform: translateY(3rem);
  opacity: 0;
}
</style>