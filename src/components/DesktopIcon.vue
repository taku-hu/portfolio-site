<template>
  <div class="icon" v-if="isShowIcon">
    <div
      class="icon__space"
      @click="openEditor"
      ontouchstart=""
    >
      <span class="icon__pointer">
        <i class="point far fa-hand-point-right"></i>
        <span class="text">click!</span>
      </span>
      <img class="icon__image" :src="require('@/assets/images/vscode.png')">
      <p class="icon__title">Visula Studio Code</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    isShowIcon: Boolean
  },
  setup(_, context) {
    const openEditor = () => {
      context.emit('open-editor');
    }

    return {
      openEditor
    }
  }
})
</script>

<style lang="scss">
@import '@/assets/styles/_parts.scss';

.icon {
  @include center-styling;
  width: 100%;
  height: 100%;
  text-align: center;
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