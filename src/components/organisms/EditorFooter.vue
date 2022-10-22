<script setup lang="ts">
import { faCodeBranch, faCloudUploadAlt, faTimesCircle, faExclamationTriangle, faTools, faChalkboardTeacher, faBell } from '@fortawesome/free-solid-svg-icons'
import { toRefs } from 'vue'

type Props = {
  isThemeChanged: boolean
  isCollapsed: boolean
}

const props = defineProps<Props>()
const { isCollapsed, isThemeChanged } = toRefs(props)

const icons = {
  faCodeBranch,
  faCloudUploadAlt,
  faTimesCircle,
  faExclamationTriangle,
  faTools,
  faChalkboardTeacher,
  faBell
} as const

const colorThemeName = isThemeChanged.value ? 'Dark(Visual Studio)' : 'Dracula'
</script>

<template>
  <footer :class="[$style.footer, isThemeChanged && $style['footer--theme-changed'], isCollapsed && $style['footer--collapsed']]">
    <div class="footer__left">
      <span :class="$style.footer__items">
        <FaIcon :icon="icons.faCodeBranch" />
        master
      </span>
      <span :class="$style.footer__items">
        <FaIcon :icon="icons.faCloudUploadAlt" />
      </span>
      <span :class="$style.footer__items">
        <FaIcon :icon="icons.faTimesCircle" />
        0
        <FaIcon :icon="icons.faExclamationTriangle" />
        0
      </span>
      <span :class="$style.footer__items">
        <FaIcon :icon="icons.faTools" />
        1
      </span>
    </div>

    <div :class="$style.footer__right">
      <span :class="$style.footer__items"> Theme: {{ colorThemeName }} </span>
      <span :class="$style.footer__items">UTF-8</span>
      <span :class="$style.footer__items">CRLF</span>
      <span :class="$style.footer__items">TypeScript</span>
      <span :class="$style.footer__items">Prettier</span>
      <span :class="$style.footer__items">
        <FaIcon :icon="icons.faChalkboardTeacher" />
      </span>
      <span :class="$style.footer__items">
        <FaIcon :icon="icons.faBell" />
      </span>
    </div>
  </footer>
</template>

<style lang="scss" module>
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
