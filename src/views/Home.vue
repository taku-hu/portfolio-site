<template>
  <section :class="$style.home">
    <div :class="[$style.home__lines, { [$style['home__lines--theme-changed']]: isThemeChanged }]">
      <p
        v-for="n in 100"
        :key="n"
      >
        {{ n }}
      </p>
    </div>
    <div :class="$style.home__body">
      <pre>
        <code
          :class="$style['language-typescript']"
          v-html="styledCode"
        />
      </pre>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

import hljs from 'highlight.js'
import typescript from 'highlight.js/lib/languages/typescript'
import 'highlight.js/styles/dracula.css'
hljs.registerLanguage('typescript', typescript)

export default defineComponent({
  props: {
    isThemeChanged: Boolean
  },
  setup () {
    const styledCode = ref('')
    const code = hljs.highlightAuto(`
//Thank you for visiting.
//This is my portfolio site.

console.log('Hello Hackers!');

class Profile {
  private age?: number;
  constructor(readonly name: string, readonly gender: 'male' | 'female') {
  }

  getAge(this: Profile, birthYear: number) {
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
    const typingCode = () => {
      [...code].forEach((string, index) => {
        setTimeout(() => {
          styledCode.value += string
        }, 10 * index)
      })
    }
    onMounted(typingCode)

    return {
      styledCode
    }
  }
})
</script>

<style lang="scss" module>
@import '@/assets/styles/_parts.scss';

.home {
  display: flex;
  width: 100%;
  height: 100%;
  font-size: 0.8rem;
  overflow: hidden;
  &__lines {
    color: #374178;
    user-select: none;
    &--theme-changed {
      color: #858585;
    }
    p {
      width: 3rem;
      line-height: 1.2rem;
      padding-left: 0.5rem;
    }
  }
  &__body {
    width: 100%;
    height: 100%;
    overflow: auto;
    pre,
    code {
      width: 100%;
      height: 100%;
      line-height: 1.2rem;
    }
  }
} // .home
</style>
