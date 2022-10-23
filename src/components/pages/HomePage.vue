<script setup lang="ts">
import { nextTick, toRefs } from 'vue'

import { useTypingCode } from '@/hooks/useTypingCode'

import { PageProps } from '@/types/props'
const props = defineProps<PageProps>()

const { isThemeChanged } = toRefs(props)

const { typedCode, startTyping } = useTypingCode()

nextTick(startTyping)
</script>

<template>
  <section :class="$style.home">
    <div :class="[$style.home__lines, isThemeChanged && $style['home__lines--theme-changed']]">
      <p v-for="n in 100" :key="n" :class="$style.home__line">
        {{ n }}
      </p>
    </div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <code :class="$style.home__code" v-html="typedCode"></code>
  </section>
</template>

<style lang="scss" module>
.home {
  max-height: 100%;
  display: flex;
  font-size: 0.8rem;
  overflow: hidden;
  &__lines {
    color: #374178;
    user-select: none;
    &--theme-changed {
      color: #858585;
    }
  }
  &__line {
    line-height: 1.5;
    padding: 0 1rem 0 0.5rem;
  }
  &__code {
    line-height: 1.5;
    overflow: auto;
    white-space: pre;
  }
}
</style>
