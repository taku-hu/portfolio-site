<template>
  <template v-if="!state.isShowIcon">
    <div class="wrapper">
      <leftbar-component
        :isThemeChanged="state.isThemeChanged"
        :isCollapsed="state.isCollapsed"
        @change-theme="changeTheme"
      />

      <explorer-component
        :isThemeChanged="state.isThemeChanged"
        :isCollapsed="state.isCollapsed"
        :currentPage="state.currentPage"
      />

      <main
        :class="[
          'code',
          {
            'code--theme-changed': state.isThemeChanged,
            'code--collapsed': state.isCollapsed
          }
        ]"
      >
        <div
          :class="[
            'code__tag',
            { 'code__tag--theme-changed': state.isThemeChanged }
          ]"
        >
          <i class="fab fa-vuejs"></i>
          {{ state.currentPage }}.vue
          <span @click="closeTab">
            <i class="fas fa-times"></i>
          </span>
        </div>
        <div
          :class="[
            'code__field',
            { 'code__field--theme-changed': state.isThemeChanged }
          ]"
        >
          <router-view
            :isThemeChanged="state.isThemeChanged"
            @change-theme="changeTheme"
          />
        </div>
      </main>
    </div>

    <footer-component
      :isThemeChanged="state.isThemeChanged"
      :isCollapsed="state.isCollapsed"
    />
  </template>

  <template v-else>
    <desktop-icon-component
      :isShowIcon="state.isShowIcon"
      @open-editor="openEditor"
    />
  </template>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, watch, onMounted } from 'vue';
import router from '@/router';

import LeftbarComponent from '@/components/Leftbar.vue';
import ExplorerComponent from '@/components/Explorer.vue';
import FooterComponent from '@/components/Footer.vue';
import DesktopIconComponent from '@/components/DesktopIcon.vue';

export default defineComponent({
  components: {
    LeftbarComponent,
    ExplorerComponent,
    FooterComponent,
    DesktopIconComponent
  },
  setup() {
    const getInnerVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    onMounted(() => {
      getInnerVh();
      window.addEventListener('resize', () => {
        getInnerVh();
      });
    });

    const state = reactive({
      isThemeChanged: false,
      isCollapsed: false,
      isShowIcon: false,
      currentPage: computed(() => router.currentRoute.value.name)
    });

    const changeTheme = () => {
      const response = confirm('Change color theme?');
      if (response) {
        state.isThemeChanged = !state.isThemeChanged;
      }
    };

    const closeTab = () => {
      const response = confirm(
        `Do you want to save the changes you made to ${String(
          state.currentPage
        )}.vue?`
      );
      if (response) {
        state.isCollapsed = true;
      }
    };

    watch(
      () => state.isCollapsed,
      () => {
        if (state.isCollapsed) {
          setTimeout(() => {
            state.isShowIcon = true;
          }, 2000);
        }
      }
    );
    const openEditor = () => {
      const response = confirm(
        `Do you want to open My-Portfolio-Site in Visual Studio Code?`
      );
      if(response) {
        state.isCollapsed = false;
        state.isShowIcon = false;
        router.push({ path: '/' });
      }
    };

    return {
      state,
      closeTab,
      openEditor,
      changeTheme
    };
  }
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
  color: #fff;
}
a {
  color: #fff;
  text-decoration: none;
}

#app {
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
}
.wrapper {
  width: 100%;
  height: calc(100% - 1.5rem);
  display: flex;
}
.code {
  width: calc(100% - 12rem);
  height: 100%;
  background-color: #191a21;
  box-shadow: 0 -1px 2px -1px #000;
  &--theme-changed {
    background-color: #2d2d2d;
  }
  &--collapsed {
    @include animated-hinge(top, left);
  }
  &__tag {
    position: relative;
    display: inline-block;
    height: 2.3rem;
    line-height: 2.3rem;
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
  } //__tag
  &__field {
    width: 100%;
    height: calc(100% - 2.3rem);
    background-color: #282a35;
    overflow-y: auto;
    &--theme-changed {
      background-color: #1e1e1e;
    }
  }
} //.code

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
    width: calc(100% - 9rem);
    //スクロールバーのカスタマイズ
    ::-webkit-scrollbar {
      width: 0.5rem;
    }
  }
}
</style>
