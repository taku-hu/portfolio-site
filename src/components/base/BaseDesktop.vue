<template>
  <div :class="$style.desktop">
    <div
      v-for="icon in icons"
      :key="icon"
      :class="[
        $style.icon,
        { [$style['icon--trash']]: icon.image === 'dustbox' }
      ]"
      @click="iconAction(icon.image)"
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
import { defineComponent } from 'vue'

export default defineComponent({
  setup (_, { emit }) {
    const icons = [
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
    ]
    const iconAction = (icon: string) => {
      if (icon === 'chrome') {
        window.open('https://www.google.com/', '_blank')
      } else if (icon === 'vscode') {
        emit('open-editor')
      }
    }

    return {
      icons,
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
