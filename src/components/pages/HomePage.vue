<script setup lang="ts">
import hljs from 'highlight.js'
import typescript from 'highlight.js/lib/languages/typescript'
import { ref, computed, nextTick, toRefs } from 'vue'
import 'highlight.js/scss/base16/dracula.scss'
hljs.registerLanguage('typecript', typescript)

type Props = {
  isThemeChanged: boolean
}

const props = defineProps<Props>()

const { isThemeChanged } = toRefs(props)
const displayCode = ref('')

const styledCode = computed(
  () =>
    hljs.highlightAuto(`// Thank you for visiting.
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
    `).value
)
const typingCode = () => [...styledCode.value].forEach((character, index) => setTimeout(() => (displayCode.value += character), ++index * 10))

nextTick(typingCode)
</script>

<template>
  <section :class="$style.home">
    <div :class="[$style.home__lines, isThemeChanged && $style['home__lines--theme-changed']]">
      <p v-for="n in 100" :key="n" :class="$style.home__line">
        {{ n }}
      </p>
    </div>
    <code :class="$style.home__code" v-html="displayCode"></code>
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
} // .home
</style>
