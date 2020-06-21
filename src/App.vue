<template>
  <div id="app">
    <div class="wrapper">
      <leftbar-component
        :isThemeChanged="state.isThemeChanged"
        @change-theme="changeTheme"
      />

      <explorer-component :isThemeChanged="state.isThemeChanged" />

      <main
        class="code"
        :class="{ 'code--theme-changed': state.isThemeChanged }"
      >
        <div
          class="code__tag"
          :class="{ 'code__tag--theme-changed': state.isThemeChanged }"
        >
          <i class="fab fa-vuejs"></i>
          {{ state.pageName }}.vue
          <span @click="closeTab">
            <i class="fas fa-times"></i>
          </span>
        </div>
        <div
          class="code__field"
          :class="{ 'code__field--theme-changed': state.isThemeChanged }"
        >
          <router-view
            :isThemeChanged="state.isThemeChanged"
            @change-theme="changeTheme"
            @set-route-name="setRouteName"
          />
        </div>
      </main>
    </div>

    <footer-component :isThemeChanged="state.isThemeChanged" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useRoute } from 'vue-router';

import LeftbarComponent from '@/components/Leftbar.vue';
import ExplorerComponent from '@/components/Explorer.vue';
import FooterComponent from '@/components/Footer.vue';

export default defineComponent({
  components: {
    LeftbarComponent,
    ExplorerComponent,
    FooterComponent,
  },
  setup() {
    const getInnerVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    getInnerVh();
    window.addEventListener('resize', () => {
      getInnerVh();
    });

    const state = reactive({
      isThemeChanged: false,
      pageName: '',
    });

    const setRouteName = () => {
      state.pageName = String(useRoute().name);
    };

    const changeTheme = () => {
      const response = confirm('Change color theme?');
      if (response) {
        state.isThemeChanged = !state.isThemeChanged;
      }
    };

    const closeTab = () => {
      const response = confirm(
        'Do you want to save the changes you made to Home.vue?'
      );
      if (response) {
        const temporaryOpen = window.open('about:blank', '_self');
        if (temporaryOpen) {
          temporaryOpen.close();
        }
      }
    };

    return {
      state,
      closeTab,
      changeTheme,
      setRouteName,
    };
  },
});
</script>

<style lang="scss">
@import '@/assets/styles/_parts.scss';
html {
  font-size: calc(62.5% + 0.5vw);
}
body {
  font-family: 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3', 'メイリオ',
    Meiryo, 'ＭＳ Ｐゴシック', sans-serif;
}
a {
  color: #fff;
  text-decoration: none;
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
  background-color: #191a21;
  box-shadow: 0 -1px 2px #000;
  &--theme-changed {
    background-color: #2d2d2d;
  }
  &__tag {
    position: relative;
    display: inline-block;
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 0.8rem;
    background-color: #282a35;
    text-align: center;
    user-select: none;
    padding: 0 0.6rem;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #9e5b8b;
    }
    &--theme-changed {
      background-color: #1e1e1e;
      &:before {
        display: none;
      }
    }
    .fa-vuejs {
      font-size: 1.1rem;
      color: #41b883;
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
    background-color: #282a35;
    overflow-y: scroll;
    &--theme-changed {
      background-color: #1e1e1e;
    }
  }
} //header

//スクロールバーのカスタマイズ
::-webkit-scrollbar {
  width: 0.8rem;
  background-color: #2c2e38;
}
::-webkit-scrollbar-track {
  border: 1px solid #21222c;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
}
::-webkit-scrollbar-thumb {
  background-color: #494a51;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.3);
}

//メディアクエリ
@include media-query($bp-mobile) {
  .code {
    width: calc(100% - 10rem);
    //スクロールバーのカスタマイズ
    ::-webkit-scrollbar {
      width: 0.5rem;
    }
  }
}
</style>
