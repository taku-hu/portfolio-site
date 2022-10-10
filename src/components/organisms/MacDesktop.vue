<script setup lang="ts">
type Emits = {
  (e: 'openEditor'): void
}

const emit = defineEmits<Emits>()

const desktopIcons = [
  {
    iconName: 'dustbox',
    text: 'ゴミ箱'
  },
  {
    iconName: 'chrome',
    text: 'Google Chrome'
  },
  {
    iconName: 'vscode',
    text: 'Visual Studio Code'
  }
] as const

const handleIconClick = (iconName: typeof desktopIcons[number]['iconName']) => {
  if (iconName === 'chrome') {
    window.open('https://www.google.com/', '_blank')
  }
  if (iconName === 'vscode') {
    emit('openEditor')
  }
}
</script>

<template>
  <div :class="$style.desktop">
    <div v-for="{ iconName, text } in desktopIcons" :key="iconName" :class="[$style.icon, iconName === 'dustbox' && $style['icon--trash']]" ontouchstart="" @click="handleIconClick(iconName)">
      <img :class="$style.icon__image" :src="`/images/${iconName}.png`" />
      <p :class="$style.icon__title">{{ text }}</p>
    </div>
  </div>
</template>

<style lang="scss" module>
.desktop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/background.png');
  background-size: cover;
  background-position: center center;
  .icon {
    @include center-styling;
    width: 100px;
    user-select: none;
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
      user-select: none;
      text-align: center;
      text-shadow: 0px 0px 3px #000;
      font-size: 12px;
    }
  } // .icon
} // .desktop
</style>
