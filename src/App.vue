<template>
  <div id="app">
    <div class="wrapper">
      <leftbar-component />

      <explorer-component />

      <main class="code">
        <div class="code__tag">
          <i class="fab fa-vuejs"></i>
          {{ currentPage.toUpperCase() }}
          <i class="fas fa-times" @click="closeTab"></i>
        </div>
        <div class="code__field">

          <transition name="switch">
            <router-view />
          </transition>

        </div>
      </main>
    </div>

    <footer-component />
  </div>
</template>

<script>
import LeftbarComponent from '@/components/Leftbar.vue';
import ExplorerComponent from '@/components/Explorer.vue';
import FooterComponent from '@/components/Footer.vue';

export default {
  created() {
    const getInnerVh = () => {
    const vh =  window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    getInnerVh();
    window.addEventListener('resize', () => {
      getInnerVh();
    });
  },
  computed: {
    currentPage() {
      return this.$route.name;
    }
  },
  methods: {
    closeTab() {
      if(confirm(`
        Do you want to save the changes you made to ${this.currentPage.substring(0, 1).toUpperCase() + this.currentPage.substring(1)}.vue?
        Your changes will be lost if you don't save them.
      `)) window.close;
    }
  },
  components: {
    LeftbarComponent,
    ExplorerComponent,
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
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}
#app {
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  color: #fff;
  overflow: hidden;
}
.wrapper {
  width: 100%;
  height: calc(100% - 1.5rem);
  display: flex;
  overflow: hidden;
}
.code {
  width: calc(100% - 13rem);
  height: 100%;
  background-color: #191A21;
  &__tag {
    position: relative;
    display: inline-block;
    width: 6.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 0.8rem;
    text-align: center;
    background-color: #282A35;
    padding: 0 0.5rem;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #9E5B8B;
    }
    .fa-vuejs {
      color: #41B883;
      margin-right: 0.2rem;
    }
    .fa-times {
      cursor: pointer;
      margin-left: 0.6rem;
    }
  }
  &__field {
    width: 100%;
    height: calc(100% - 2.5rem);
    background-color: #282A35;
  }
} //header

//スクロールバーのカスタマイズ
::-webkit-scrollbar {
  width: 1rem;
  background-color: #2C2E38;
}
::-webkit-scrollbar-track {
  border: 1px solid #21222C;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, .1);
}
::-webkit-scrollbar-thumb {
  background-color: #494A51;
  box-shadow:0 0 0 1px rgba(255, 255, 255, .3);
}

//ページ遷移トランジション
.switch-enter-active {
  transition: 1.5s;
}
.switch-enter,
.switch-leave-to {
  opacity: 0;
}

//メディアクエリ
@include media-query($bp-mobile) {
  .code {
    width: calc(100% - 10rem);
  }

  //スクロールバーのカスタマイズ
  ::-webkit-scrollbar {
    width: 0.5rem;
    background-color: #2C2E38;
  }
  ::-webkit-scrollbar-track {
    border: 1px solid #21222C;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, .1);
  }
  ::-webkit-scrollbar-thumb {
    background-color: #494A51;
    box-shadow:0 0 0 1px rgba(255, 255, 255, .3);
  }
}
</style>