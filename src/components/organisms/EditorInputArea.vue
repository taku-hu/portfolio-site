<script setup lang="ts">
import { faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { toRefs } from 'vue'

type Props = {
  currentPage: string
  isThemeChanged: boolean
  isCollapsed: boolean
  isOpenExplorer: boolean
}

type Emits = {
  (e: 'handleClickCloseTab'): void
  (e: 'handleAnimationEnd'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const { currentPage, isThemeChanged, isCollapsed, isOpenExplorer } = toRefs(props)

const icons = {
  faVuejs,
  faTimes
} as const

const handleClickCloseTab = () => emit('handleClickCloseTab')
const handleAnimationEnd = () => emit('handleAnimationEnd')
</script>

<template>
  <main
    :class="[$style.code, isThemeChanged && $style['code--theme-changed'], isCollapsed && $style['code--collapsed'], !isOpenExplorer && $style['code--close-explorer']]"
    @animationend="handleAnimationEnd"
  >
    <div :class="[$style.code__tag, isThemeChanged && $style['code__tag--theme-changed']]">
      <FaIcon :class="$style['tag-icon--vue']" :icon="icons.faVuejs" />
      {{ currentPage }}.vue
      <FaIcon :class="$style['tag-icon--times']" :icon="icons.faTimes" @click="handleClickCloseTab" />
    </div>
    <div :class="[$style.code__field, isThemeChanged && $style['code__field--theme-changed']]">
      <slot></slot>
    </div>
  </main>
</template>

<style lang="scss" module>
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
    overflow: auto;
    &--theme-changed {
      background-color: #1e1e1e;
    }
  }
} // .code

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
