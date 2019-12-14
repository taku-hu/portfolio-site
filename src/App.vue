<template>
  <div id="app">
    <transition name="switch" mode="out-in">
      <div class="title-call" v-if="!titleCall" key="title" >
        <div class="title-call__background">
          <p v-for="sentence in bgSentences" :key="sentence.id">
            <span :data-text="sentence.item">{{ sentence.item }}</span>
          </p>
        </div>
        <div class="title-call__front">
          <h1>{{ title }}</h1>
        </div>
      </div>
      <div class="contents" v-else key="contents" >
        <header-component />
        <main>
          <transition name="switch" mode="out-in">
            <router-view />
          </transition>
          <a class="contents__move-button" @click="move">
            <i class="fas fa-angle-left" v-show="moveAction === 'BACK'"></i>
            {{ moveAction }}
            <i class="fas fa-angle-right" v-show="moveAction === 'MORE'"></i>
          </a>
        </main>
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
      await Promise.all(this.typing('Welcome to my website!'));
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
  computed: {
    moveAction() {
      return this.$route.name === 'home' ? 'MORE' : 'BACK';
    }
  },
  methods: {
    typing(word) {
      return [...word].map((character, index) => {
        return new Promise(resolve => {
          setTimeout(() => {
            this.title += character;
            resolve();
          }, 200 * ++index);
        });
      }); //Promiseオブジェクトを値に持つ配列をreturn
    },
    move() {
      if(this.$route.name === 'home') {
        location.href = '#';
      } else {
        this.$router.push({name: 'home'});
      }
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
  text-decoration: none;
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
  } //.title-call
  .contents {
    width: 100%;
    main {
      @include center-styling;
      width: 100%;
    }
    &__move-button {
      display: block;
      width: 130px;
      height: 50px;
      border: solid 1px #000;
      font-size: 16px;
      line-height: 50px;
      color: #000;
      background-color: #fff;
      margin: 40px;
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        background-color: #000;
        color: #fff;
      }
    } //__move-button
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