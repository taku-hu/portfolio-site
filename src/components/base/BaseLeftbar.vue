<template>
  <div
    :class="[
      $style['left-bar'],
      {
        [$style['left-bar--theme-changed']]: isThemeChanged,
        [$style['left-bar--collapsed']]: isCollapsed,
      }
    ]"
  >
    <div
      :class="[
        $style['left-bar__icons'],
        {
          [$style['left-bar__icons--theme-changed']]: isThemeChanged,
          [$style['left-bar__icons--close-explorer']]: !isOpenExplorer,
          [$style['left-bar__icons--close-and-theme-changed']]: isThemeChanged && !isOpenExplorer,
          [$style['left-bar__icons--search']]: icon === manuIcons.faSearch
        }
      ]"
      v-for="icon in manuIcons"
      :key="icon"
      @click="toggleExplorer(icon)"
    >
      <fa :icon="icon" />
    </div>
    <div
      :class="$style['left-bar__settings']"
      @click="changeTheme"
    >
      <fa :icon="icons.faCog" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { faSearch, faCodeBranch, faBug, faThLarge, faCog } from '@fortawesome/free-solid-svg-icons'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { faGitAlt } from '@fortawesome/free-brands-svg-icons'

export default defineComponent({
  props: {
    isThemeChanged: Boolean,
    isCollapsed: Boolean,
    isOpenExplorer: Boolean
  },
  setup (_, { emit }) {
    const manuIcons = {
      faCopy,
      faSearch,
      faCodeBranch,
      faGitAlt,
      faBug,
      faThLarge
    }

    const icons = {
      faCog
    }

    const changeTheme = () => {
      emit('change-theme')
    }

    const toggleExplorer = (icon: IconDefinition) => {
      if (icon !== manuIcons.faCopy) {
        return
      }
      emit('toggle-explorer')
    }

    return {
      manuIcons,
      icons,
      changeTheme,
      toggleExplorer
    }
  }
})
</script>

<style lang="scss" module>
@import '@/assets/styles/_parts.scss';

.left-bar {
  position: relative;
  width: 3rem;
  height: 100%;
  font-size: 1.5rem;
  background-color: #343746;
  box-shadow: 0 1px 2px -1px #000;
  &--theme-changed {
    background-color: #333;
  }
  &--collapsed {
    @include animated-hinge(top, right);
  }
  &__icons {
    @include center-styling;
    width: 100%;
    height: 3rem;
    color: #536694;
    cursor: not-allowed;
    &:hover {
      color: #fff;
    }
    &:first-child {
      position: relative;
      color: #fff;
      background-color: #3c3d51;
      cursor: pointer;
      &:hover {
        color: #fff;
      }
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 2px;
        height: 100%;
        background-color: #9e5b8b;
      }
    }
    &--search {
      transform: rotateY(180deg);
    }
    &--close-explorer {
      &:first-child {
        position: relative;
        color: #536694;
        background-color: transparent;
        &:before {
          display: none;
        }
      }
    }
    &--theme-changed {
      color: #858585;
      &:first-child {
        position: relative;
        color: #fff;
        background-color: transparent;
        &:before {
          background-color: #fff;
        }
      }
    }
    &--close-and-theme-changed {
      &:first-child {
        color: #858585;
      }
    }
  } // __icons
  &__settings {
    @include center-styling;
    width: 100%;
    height: 3rem;
    position: absolute;
    left: 0;
    bottom: 0;
    cursor: pointer;
    transition: 1s;
    animation: flashing 1.5s linear alternate infinite;
    &:hover {
      transform: rotate(120deg);
      animation: none;
    }
  }
} // .left-bar

// 点滅アニメーション
@keyframes flashing {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

// メディアクエリ
@include media-query($bp-mobile) {
  .left-bar {
    display: none;
  }
}
</style>
