<template>
  <footer class="footer" :class="{ 'footer--theme-changed': isThemeChanged }">
    <div class="footer__left">
      <span class="items">
        <i class="fas fa-code-branch"></i>
        master
      </span>
      <span class="items">
        <i class="fas fa-cloud-upload-alt"></i>
      </span>
      <span class="items">
        <i class="far fa-times-circle"></i>
        0
        <i class="fas fa-exclamation-triangle"></i>
        0
      </span>
      <span class="items"> <i class="fas fa-tools"></i>1 </span>
    </div>

    <div class="footer__right">
      <span class="items"> Theme: {{ state.colorTheme }} </span>
      <span class="items">
        UTF-8
      </span>
      <span class="items">
        CRLF
      </span>
      <span class="items">
        JavaScript
      </span>
      <span class="items">
        Prettier
      </span>
      <span class="items">
        <i class="fas fa-chalkboard-teacher"></i>
      </span>
      <span class="items">
        <i class="far fa-bell"></i>
      </span>
    </div>
  </footer>
</template>

<script>
import { defineComponent, reactive, computed } from 'vue';

export default defineComponent({
  props: {
    isThemeChanged: Boolean,
  },
  setup(props) {
    const state = reactive({
      colorTheme: computed(() =>
        props.isThemeChanged ? 'Dark(Visual Studio)' : 'Dracula'
      ),
    });

    return {
      state,
    };
  },
});
</script>

<style lang="scss">
@import '@/assets/styles/_parts.scss';

.footer {
  @include center-styling($direction: row, $justify: space-between);
  width: 100%;
  height: 1.5rem;
  line-height: 1.5rem;
  font-size: 0.5rem;
  background-color: #191a21;
  overflow: hidden;
  user-select: none;
  &--theme-changed {
    background-color: $base-blue;
  }
  &__left {
    margin-left: 1rem;
    .items {
      margin-right: 0.5rem;
    }
  }
  &__right {
    margin-right: 1rem;
    .items {
      margin-left: 1rem;
    }
  }
}
</style>
