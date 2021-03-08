<template>
  <section :class="$style.home">
    <div :class="[
      $style.home__lines,
      isThemeChanged && $style['home__lines--theme-changed']
    ]">
      <p
        :class="$style.home__line"
        v-for="n in 100"
        :key="n"
      >
        {{ n }}
      </p>
    </div>
    <code
      :class="$style.home__code"
      v-html="displayCode"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, computed, nextTick } from 'vue'
import hljs from 'highlight.js'
import typescript from 'highlight.js/lib/languages/typescript'
import 'highlight.js/scss/dracula.scss'
hljs.registerLanguage('typecript', typescript)

export default defineComponent({
  props: {
    isThemeChanged: Boolean
  },
  setup () {
    const displayCode = ref('')
    const styledCode = computed(() => hljs.highlightAuto(`// Thank you for visiting.
// This is my portfolio site.

console.log('Hello Hackers!');

class Profile {
  private age?: number;
  constructor (readonly name: string, readonly gender: 'male' | 'female') {}

  getAge (this: Profile, birthYear: number) {
    const now = new Date();
    const thisYear = now.getFullYear();

    this.age = thisYear - birthYear;

    console.log(\`I am \${this.age} years old.\`)
  }
}

const me = new Profile(
  'Takeuchi Takuto',
  'male'
);

me.getAge(1993);

console.log('Nice to meet you!');
    `).value)
    const typingCode = () => [...styledCode.value].forEach((character, index) => setTimeout(() => displayCode.value += character, ++index * 10))

    nextTick(typingCode)

    return {
      displayCode
    }
  }
})
</script>

<style lang="scss" module>
@import '@/assets/styles/_parts.scss';

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
} // .home
</style>
