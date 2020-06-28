<template>
  <div class="left-bar" :class="{ 'left-bar--theme-changed': isThemeChanged }">
    <div
      class="left-bar__icons"
      :class="{ 'left-bar__icons--theme-changed': isThemeChanged }"
      v-for="menuIcon in state.menuIcons"
      :key="menuIcon"
    >
      <span v-html="menuIcon"></span>
    </div>
    <div class="left-bar__settings" @click="changeTheme">
      <i class="fas fa-cog"></i>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  props: {
    isThemeChanged: Boolean
  },
  setup(_, context) {
    const state = reactive({
      menuIcons: [
        '<i class="far fa-copy"></i>',
        '<i class="fas fa-search"></i>',
        '<i class="fas fa-code-branch"></i>',
        '<i class="fab fa-git-alt"></i>',
        '<i class="fas fa-bug"></i>',
        '<i class="fas fa-th-large"></i>'
      ]
    });

    const changeTheme = () => {
      context.emit('change-theme');
    };

    return {
      state,
      changeTheme
    };
  }
});
</script>

<style lang="scss">
@import '@/assets/styles/_parts.scss';

.left-bar {
  position: relative;
  width: 3rem;
  height: 100%;
  font-size: 1.5rem;
  background-color: #343746;
  box-shadow: 0 1px 2px #000;
  &--theme-changed {
    background-color: #333;
  }
  &__icons {
    @include center-styling;
    width: 100%;
    height: 3rem;
    color: #536694;
    cursor: not-allowed;
    &:first-child {
      position: relative;
      color: #fff;
      background-color: #3c3d51;
      cursor: default;
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
    .fa-search {
      transform: rotateY(180deg);
    }
  }
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
}

//点滅アニメーション
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

//メディアクエリ
@include media-query($bp-mobile) {
  .left-bar {
    display: none;
  }
}
</style>
