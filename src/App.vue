<template>
  <transition :enter-active-class="$style.fadeInBottomLeft">
    <template v-if="!isCloseEditor">
      <div :class="$style.wrapper">
        <div :class="$style['innner-wrapper']">
          <LeftbarComponent
            :isThemeChanged="isThemeChanged"
            :isCollapsed="isCollapsed"
            :isOpenExplorer="isOpenExplorer"
            @change-theme="changeTheme"
            @toggle-explorer="toggleExplorer"
          />

          <template v-if="isOpenExplorer">
            <ExplorerComponent
              :isThemeChanged="isThemeChanged"
              :isCollapsed="isCollapsed"
              :currentPage="currentPage"
            />
          </template>

          <main
            :class="[
              $style.code,
              {
                [$style['code--theme-changed']]: isThemeChanged,
                [$style['code--collapsed']]: isCollapsed,
                [$style['code--close-explorer']]: !isOpenExplorer
              }
            ]"
          >
            <div
              :class="[
                $style.code__tag,
                { [$style['code__tag--theme-changed']]: isThemeChanged }
              ]"
            >
              <fa
                :class="$style['tag-icon--vue']"
                :icon="icons.faVuejs"
              />
              {{ currentPage }}.vue
              <span @click="closeTab">
                <fa
                  :class="$style['tag-icon--times']"
                  :icon="icons.faTimes"
                />
              </span>
            </div>
            <div
              :class="[
                $style.code__field,
                { [$style['code__field--theme-changed']]: isThemeChanged }
              ]"
            >
              <router-view
                :isThemeChanged="isThemeChanged"
                @change-theme="changeTheme"
              />
            </div>
          </main>
        </div>

        <FooterComponent
          :isThemeChanged="isThemeChanged"
          :isCollapsed="isCollapsed"
        />
      </div>
    </template>
  </transition>

  <DesktopComponent @open-editor="openEditor" />
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch, onMounted } from 'vue';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faVuejs } from '@fortawesome/free-brands-svg-icons'
import router from '@/router';

import LeftbarComponent from '@/components/Leftbar.vue';
import ExplorerComponent from '@/components/Explorer.vue';
import FooterComponent from '@/components/Footer.vue';
import DesktopComponent from '@/components/Desktop.vue';

export default defineComponent({
  components: {
    LeftbarComponent,
    ExplorerComponent,
    FooterComponent,
    DesktopComponent
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

    const currentPage = computed(() => router.currentRoute.value.name)

    const icons = {
      faVuejs,
      faTimes
    }

    const isThemeChanged = ref(false);
    const changeTheme = () => {
      const response = confirm('Change color theme?');
      if(response) {
        isThemeChanged.value = !isThemeChanged.value;
      }
    };

    const isCloseEditor = ref(false);
    const isCollapsed = ref(false);
    const closeTab = () => {
      const response = confirm(`Do you want to save the changes you made to ${String(currentPage.value)}.vue?`);
      if(response) {
        isCollapsed.value = true;
      }
    };
    watch(() => isCollapsed.value, () => {
      if (isCollapsed.value) {
        setTimeout(() => {
          isCloseEditor.value = true;
        }, 2000);
      }
    });
    const openEditor = () => {
      const response = confirm('Do you want to open My-Portfolio-Site in Visual Studio Code?');
      if(response) {
        isCollapsed.value = false;
        isCloseEditor.value = false;
        router.push({ path: '/' });
      }
    };

    const isOpenExplorer = ref(true);
    const toggleExplorer = () => {
      isOpenExplorer.value = !isOpenExplorer.value;
    }

    return {
      currentPage,
      icons,
      isCloseEditor,
      isCollapsed,
      closeTab,
      openEditor,
      isThemeChanged,
      changeTheme,
      isOpenExplorer,
      toggleExplorer
    };
  }
});
</script>

<style>
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
  position: relative;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
}
</style>

<style lang="scss" module>
@import '@/assets/styles/_parts.scss';

.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: transparent;
}
.innner-wrapper {
  width: 100%;
  height: calc(100% - 1.5rem);
  display: flex;
  background-color: transparent;
}
.code {
  flex-grow: 1;
  width: calc(100% - 12rem);
  background-color: #191a21;
  box-shadow: 0 -1px 2px -1px #000;
  &--theme-changed {
    background-color: #2d2d2d;
  }
  &--collapsed {
    @include animated-hinge(top, left);
  }
  &--close-explorer {
    width: calc(100% - 3rem);
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
    .tag-icon {
      &--vue {
        font-size: 1.1rem;
        color: #41b883;
        margin-right: 0.2rem;
      }
      &--times {
        cursor: pointer;
        margin-left: 0.6rem;
      }
    }
  } //__tag
  &__field {
    width: 100%;
    height: calc(100% - 2.3rem);
    background-color: #282a35;
    overflow: auto;
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

@keyframes fadeInBottomLeft {
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.fadeInBottomLeft {
  animation-duration: 0.25s;
  animation-fill-mode: both;
  animation-name: fadeInBottomLeft;
}
</style>
