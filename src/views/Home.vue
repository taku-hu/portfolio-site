<template>
  <section class="home">
    <div class="home__lines">
      <p v-for="n in 100" :key="n">{{ n }}</p>
    </div>
    <div class="home__body">
      <pre><code class="language-javascript" v-html="comment"></code></pre>
      <pre><code class="language-javascript" v-html="code"></code></pre>
    </div>
  </section>
</template>

<script>
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/dracula.css';

export default {
  created() {
    hljs.registerLanguage('javascript', javascript);
    this.comment = hljs.highlightAuto(this.comment).value;
    this.code = hljs.highlightAuto(this.code).value;
  },
  mounted() {
    const copyedCode = this.code;
    this.code = '';
    for(let i = 0; i < copyedCode.length; i ++) {
      setTimeout(() => {
        const typedCode = copyedCode.substring(0, i);
        this.code = typedCode;
      }, 10 * i)
    }
  },
  data() {
    return {
      comment: `//Welcome to my website!
//Please scroll down.
      `,
      code: `console.log('Hello Hackers!');

class Profile {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  getAge(birthYear) {
    const now = new Date();
    const thisYear = now.getFullYear();

    this.age = thisYear - birthYear;

    console.log(\`I am \${this.age} years old.\`)
  }
}

const me = new Profile();

me.name = 'Takeuchi Takuto';
me.gender = 'man';

me.getAge(1993);

console.log('Have a nice day!');
      `
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/_fragments.scss";

.home {
  display: flex;
  width: 100%;
  height: 100%;
  font-size: 0.8rem;
  overflow: hidden;
  &__lines {
    p {
      width: 3rem;
      height: 1.2rem;
      line-height: 1.2rem;
      color: #374178;
      padding-left: 0.5rem;
    }
  }
  &__body {
    pre {
      line-height: 1.2rem;
    }
  }
}
</style>