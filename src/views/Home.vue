<template>
  <section class="home">
    <div
      :class="['home__lines', { 'home__lines--theme-changed': isThemeChanged }]"
    >
      <p v-for="n in 100" :key="n">{{ n }}</p>
    </div>
    <div class="home__body">
      <pre><code class="language-typescript" v-html="state.code"></code></pre>
    </div>
  </section>
</template>

<script>
import { defineComponent, reactive } from 'vue';

import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
hljs.registerLanguage('typescript', typescript);
import 'highlight.js/styles/dracula.css';

export default defineComponent({
  props: {
    isThemeChanged: Boolean
  },
  setup() {
    const state = reactive({
      code: ''
    });

    const code = hljs.highlightAuto(
      `//Thank you for visiting.
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

console.log('Nice to meet you!');`
    ).value;

    [...code].forEach((string, index) => {
      setTimeout(() => {
        state.code += string;
      }, 10 * index);
    });

    return {
      state
    };
  }
});
</script>

<style lang="scss">
@import '@/assets/styles/_parts.scss';

.home {
  display: flex;
  width: 100%;
  height: 100%;
  font-size: 0.8rem;
  overflow-x: scroll;
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
    pre,
    code {
      width: 100%;
      height: 100%;
      line-height: 1.2rem;
      overflow-x: scroll;
    }
  }
}
</style>
