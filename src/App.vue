<template>
  <transition :enter-active-class="$style['animated-fadein']">
    <template v-if="!isCloseEditor">
      <div :class="[$style.wrapper, isCollapsed && $style['wrapper--collapsed']]">
        <div :class="$style['innner-wrapper']">
          <EditorLeftNav v-bind="{ isThemeChanged, isCollapsed, isOpenExplorer }" @handli-click-config-button="changeTheme" @handle-click-nav="toggleExplorer" />

          <template v-if="isOpenExplorer">
            <EditorExplorer v-bind="{ isThemeChanged, isCollapsed, currentPage }" />
          </template>

          <EditorInputArea v-bind="{ isThemeChanged, isCollapsed, isOpenExplorer, currentPage }" @handle-click-close-tab="collapseParts" @handle-animation-end="closeEditor">
            <router-view :is-theme-changed="isThemeChanged" @change-theme="changeTheme" />
          </EditorInputArea>
        </div>

        <EditorFooter v-bind="{ isThemeChanged, isCollapsed }" />
      </div>
    </template>
  </transition>

  <WindowsDesktop @open-editor="openEditor" />
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'

import EditorExplorer from '@/components/organisms/EditorExplorer.vue'
import EditorFooter from '@/components/organisms/EditorFooter.vue'
import EditorInputArea from '@/components/organisms/EditorInputArea.vue'
import EditorLeftNav from '@/components/organisms/EditorLeftNav.vue'
import WindowsDesktop from '@/components/organisms/WindowsDesktop.vue'

onMounted(() => {
  const getInnerVh = () => document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)

  getInnerVh()
  document.addEventListener('resize', getInnerVh)
})

const router = useRouter()

const currentPage = computed(() => [...String(router.currentRoute.value.name)].map((v, i) => (i === 0 ? v.toUpperCase() : v)).join(''))

const isThemeChanged = ref(false)
const changeTheme = () => {
  const response = confirm('Change color theme?')
  if (response) {
    isThemeChanged.value = !isThemeChanged.value
  }
}

const isCollapsed = ref(false)
const collapseParts = () => {
  const response = confirm(`Do you want to save the changes you made to ${String(currentPage.value)}.vue?`)
  if (response) {
    isCollapsed.value = true
  }
}

const isCloseEditor = ref(false)
const closeEditor = () => (isCloseEditor.value = true)
const openEditor = () => {
  isCollapsed.value = false
  isCloseEditor.value = false
  router.push({ path: '/' })
}

const isOpenExplorer = ref(true)
const toggleExplorer = () => {
  isOpenExplorer.value = !isOpenExplorer.value
}
</script>

<style>
html {
  font-size: calc(62.5% + 0.5vw);
}
body {
  font-family: 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3', 'メイリオ', Meiryo, sans-serif;
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
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: transparent;
  &--collapsed {
    pointer-events: none;
  }
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
  } // __tag
  &__field {
    width: 100%;
    height: calc(100% - 2.3rem);
    background-color: #282a35;
    &--theme-changed {
      background-color: #1e1e1e;
    }
  }
} // .code

.animated-fadein {
  @include animated-fadein;
}

// スクロールバーのカスタマイズ
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

@include media-query($bp-mobile) {
  .code {
    width: calc(100% - 9rem);
    // スクロールバーのカスタマイズ
    ::-webkit-scrollbar {
      width: 0.5rem;
    }
  }
}
</style>
