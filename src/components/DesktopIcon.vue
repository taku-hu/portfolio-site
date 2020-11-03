<template>
  <div :class="$style.icon">
    <div
      :class="$style.icon__space"
      @click="openEditor"
      ontouchstart=""
    >
      <span :class="$style.icon__pointer">
        <fa
          :class="$style.point"
          :icon="icons.faHandPointRight"
        />
        <span :class="$style.text">click!</span>
      </span>
      <img
        :class="$style.icon__image"
        :src="require('@/assets/images/vscode.png')"
      >
      <p :class="$style.icon__title">Visula Studio Code</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { faHandPointRight } from '@fortawesome/free-regular-svg-icons'

export default defineComponent({
  setup(_, { emit }) {
    const icons = {
      faHandPointRight
    }

    const openEditor = () => {
      emit('open-editor');
    }

    return {
      icons,
      openEditor
    }
  }
})
</script>

<style lang="scss" module>
@import '@/assets/styles/_parts.scss';

.icon {
  @include center-styling;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
  &__space {
    @include center-styling;
    position: relative;
    width: 8rem;
    cursor: pointer;
    &:active {
      border: 1px dotted #000;
      background-color: #d7e8f8;
    }
  }
  &__pointer {
    @include center-styling;
    position: absolute;
    left: -50%;
    color: #000;
    cursor: default;
    pointer-events: none;
    animation: horizontal-shake 0.5s ease-in infinite alternate;
    .point {
      font-size: 4rem;
    }
    .text {
      font-size: 1.2rem;
    }
  }
  &__image {
    display: inline-block;
    width: 55%;
  }
  &__title {
    width: 100%;
    color: #000;
    text-align: center;
    font-size: 1.1rem;
  }
} //.icon

@keyframes horizontal-shake {
  0% {
    transform: translateX(-2rem);
  }
}
</style>