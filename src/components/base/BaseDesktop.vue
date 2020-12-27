<template>
  <div :class="$style.desktop">
    <div
      v-for="icon in desktopIcons"
      :key="icon"
      :class="[
        $style.icon,
        (icon.image === 'dustbox') ? $style['icon--trash'] : ''
      ]"
      @click="iconAction(icon)"
      ontouchstart=""
    >
      <img
        :class="$style.icon__image"
        :src="require(`@/assets/images/${icon.image}.png`)"
      >
      <p :class="$style.icon__title">{{ icon.text }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  setup (_, { emit }) {
    const desktopIcons = computed(() => [
      {
        image: 'dustbox',
        text: 'ゴミ箱'
      },
      {
        image: 'chrome',
        text: 'Google Chrome'
      },
      {
        image: 'vscode',
        text: 'Visual Studio Code'
      }
    ])
    const iconAction = ({ image }: typeof desktopIcons.value[number]) => {
      if (image === 'chrome') {
        window.open('https://www.google.com/', '_blank')
      } else if (image === 'vscode') {
        emit('open-editor')
      }
    }

    return {
      desktopIcons,
      iconAction
    }
  }
})
</script>

<style lang="scss" module>
@import '@/assets/styles/_parts.scss';

.desktop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/images/background.png');
  background-size: cover;
  background-position: center center;
  .icon {
    @include center-styling;
    width: 100px;
    user-select:none;
    border: 1px solid transparent;
    margin-bottom: 25px;
    &:active {
      border-color: #aad6ffb0;
      background-color: #aad6ff88;
    }
    &--trash {
      cursor: not-allowed;
    }
    &__image {
      width: 50px;
      margin-bottom: 5px;
    }
    &__title {
      user-select:none;
      text-align: center;
      text-shadow : 0px 0px 3px #000;
      font-size: 12px;
    }
  } // .icon
} // .desktop
</style>
