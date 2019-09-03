<template>
  <div id="app">
    <div v-show="!afterTitleCall" class="before-title-call">
      <h1>{{ title }}</h1>
    </div>
    <transition name="switch">
      <div v-show="afterTitleCall" class="after-title-call">
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
import HeaderComponent from '@/components/Header.vue'
import FooterComponent from '@/components/Footer.vue'
export default {
  name: 'App',
  data() {
    return {
      title: '',
      afterTitleCall: false
    }
  },
  methods: {
    addTypingMovement: function(word) {
      for(let i = 0; i < word.length; i++) {
        setTimeout(() => {
          this.title = this.title + word.slice(i, i + 1)
        }, 200 * i)
        if(i === word.length - 1) {
          setTimeout(() => {
            this.afterTitleCall = true
          }, 200 * (i + 2))
        } //最終ループ時に実行する処理
      }
    } //addTypingMovement
  },
  components: {
    'header-component': HeaderComponent,
    'footer-component': FooterComponent
  },
  created: function() {
    this.$nextTick(() => this.addTypingMovement('Welcome to my homepage!'))
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/_mixin.scss';
html {
  font-size: calc(62.5% + 0.5vw);
}
body {
  font-family: 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', sans-serif;
}

#app {
  text-align: center;
  @include center-styling;
  .before-title-call {
    @include center-styling;
    width: 100%;
    height: 100vh;
    background: linear-gradient(135deg, rgba(71, 183, 204, 0.6),rgba(10, 19, 255, 0.6)),url("~@/assets/images/header-image.jpg");
    background-size: cover;
    h1 {
      font-family: 'Orbitron', sans-serif;
      font-size: 5rem;
      font-weight: bold;
      color: #fff;
      text-shadow:
      0 0 15px rgba(255, 255, 255, .5),
      0 0 30px rgba(255, 255, 255, .5),
      0 0 40px rgba(52, 152, 219, 1),
      0 0 50px rgba(52, 152, 219, 1),
      0 0 60px rgba(52, 152, 219, 1),
      0 0 70px rgba(52, 152, 219, 1);
    }
  }
  .after-title-call {
    width: 100%;
    a {
      text-decoration: none;
    }
  }
}

//ページ遷移アニメーション
.switch-enter-active {
  transition: 1.5s;
}
.switch-enter-to, .switch-leave {
  opacity: 1;
}
.switch-enter, .switch-leave-to {
  opacity: 0;
}
</style>