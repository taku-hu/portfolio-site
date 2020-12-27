<template>
  <footer
    :class="[
      $style.footer,
      {
        [$style['footer--theme-changed']]: isThemeChanged,
        [$style['footer--collapsed']]: isCollapsed
      }
    ]"
  >
    <div class="footer__left">
      <span :class="$style.footer__items">
        <fa :icon="icons.faCodeBranch" />
        master
      </span>
      <span :class="$style.footer__items">
        <fa :icon="icons.faCloudUploadAlt" />
      </span>
      <span :class="$style.footer__items">
        <fa :icon="icons.faTimesCircle" />
        0
        <fa :icon="icons.faExclamationTriangle" />
        0
      </span>
      <span :class="$style.footer__items">
        <fa :icon="icons.faTools" />
        1
      </span>
    </div>

    <div :class="$style.footer__right">
      <span :class="$style.footer__items"> Theme: {{ colorTheme }} </span>
      <span :class="$style.footer__items">UTF-8</span>
      <span :class="$style.footer__items">CRLF</span>
      <span :class="$style.footer__items">TypeScript</span>
      <span :class="$style.footer__items">Prettier</span>
      <span :class="$style.footer__items">
        <fa :icon="icons.faChalkboardTeacher" />
      </span>
      <span :class="$style.footer__items">
        <fa :icon="icons.faBell" />
      </span>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { faCodeBranch, faCloudUploadAlt, faTimesCircle, faExclamationTriangle, faTools, faChalkboardTeacher, faBell } from '@fortawesome/free-solid-svg-icons'

export default defineComponent({
  props: {
    isThemeChanged: Boolean,
    isCollapsed: Boolean
  },
  setup (props) {
    const colorTheme = computed(() => props.isThemeChanged ? 'Dark(Visual Studio)' : 'Dracula')

    const icons = {
      faCodeBranch,
      faCloudUploadAlt,
      faTimesCircle,
      faExclamationTriangle,
      faTools,
      faChalkboardTeacher,
      faBell
    }

    return {
      colorTheme,
      icons
    }
  }
})
</script>

<style lang="scss" module>
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
  box-sizing: border-box;
  padding: 0 0.5rem;
  &--theme-changed {
    background-color: $base-blue;
  }
  &--collapsed {
    @include animated-hinge(bottom, right);
  }
  &__items {
    margin: 0 0.5rem;
  }
}
</style>
