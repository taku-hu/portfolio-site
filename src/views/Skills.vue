<template>
  <section class="skills">
    <div class="skills__wrapper">
      <h2 class="skills__heading">My SKILLS</h2>
      <p class="skills__sentence">
        現在の私のスキルです。<br />
        フロントエンドのJS周りがコアスキルです。
      </p>
      <p class="skills__bar">
        <a
          class="skills__clickable-marker"
          href="https://github.com/taku-hu"
          target="_blank"
        >
          GitHub
        </a>
        にコードを公開しているので、よければ御覧ください。
      </p>
      <ul class="skills__list">
        <li
          class="skills__list-item"
          v-for="skill in state.skills"
          :key="skill.name"
          :style="{
            backgroundImage: `url(${require(`@/assets/images/${skill.name}.png`)})`
          }"
        >
          <span class="skills__marker">
            {{ skill.name }}
          </span>
          &nbsp;-&nbsp;
          <span v-html="skill.details"></span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      skills: [
        {
          name: 'HTML・CSS',
          details: `
            両方共に問題なく扱えます。<br>
            BEM等のcss設計手法も理解しており、「flexbox」や「grid」を使いレスポンシブなコーディングをすることができます。
          `
        },
        {
          name: 'Sass',
          details: `
            開発に必要な機能は十分に理解しています。
          `
        },
        {
          name: 'JavaScript',
          details: `
            私が最も得意としている言語です。<br>
            当然ES6以降の文法も十分に理解しています。
          `
        },
        {
          name: 'TypeScript',
          details: `
            現在業務でメインで使っており、最も関心のある言語です。<br>
            業務ではVue + TypeScriptでの開発を行っています。
          `
        },
        {
          name: 'Vue.js',
          details: `
            現在業務でメインで使っているフレームワークです。<br>
            WORKSに載せているポートフォリオも全てVue.jsで開発しました。<br>
            最近はVue3に備えて、Vue3 beta + compositionAPIも触っています。
          `
        },
        {
          name: 'React',
          details: `
            最近最も関心を持っているライブラリです。<br>
            Vue3のcompositionAPIに触れたことで、関数型の良さを知り、Vue3に影響を与えたReact Hooksに興味を持った事が始めたキッカケです。<br>
            現在本棚アプリをReact + Hooks + TSXでリプレイス作業中です。
          `
        },
        {
          name: 'Firebase',
          details: `
            本棚アプリにて、Cloud Firestoreを使用したデータベースの機能と、Authenticationを使用したグーグルアカウントでのログイン機能を実装するのに使用しました。<br>
            概要は理解していますが、より使いこなせるように更なる学習を重ねています。
          `
        },
        {
          name: 'Git・Github',
          details: `
            Git Flow・Github Flowを理解しており、git・githubを用いた複数人での開発が行えます。
          `
        },
        {
          name: 'webpack',
          details: `
            主要な機能を理解し、フロントエンドの開発環境の構築をする事が出来ます。
          `
        }
      ]
    });

    return {
      state
    };
  }
});
</script>

<style lang="scss">
@import '@/assets/styles/_parts.scss';

.skills {
  width: 100%;
  height: 100%;
  font-size: 0.9rem;
  font-family: 'Open Sans', sans-serif;
  &__wrapper {
    width: 65%;
    height: 100%;
    margin: 0 auto;
  }
  &__marker {
    color: #3790f6;
    font-weight: bold;
  }
  &__clickable-marker {
    @extend .skills__marker;
    text-decoration: underline #fff;
    cursor: pointer;
  }
  &__heading {
    width: 100%;
    font-size: 2.5rem;
    border-bottom: 2px solid #4f505a;
    padding: 3rem 0 1rem;
    margin-bottom: 1.5rem;
  }
  &__sentence {
    width: 100%;
    line-height: 1.5;
    margin-bottom: 2rem;
  }
  &__list {
    word-break: break-all;
    padding-left: 1.3rem;
    margin: 0 auto;
  }
  &__list-item {
    line-height: 1.5;
    background-repeat: no-repeat;
    background-position: left top;
    background-size: 1.2rem;
    box-sizing: border-box;
    padding-left: 1.8rem;
    margin-bottom: 0.8rem;
  }
  &__bar {
    width: 100%;
    font-size: 1rem;
    background-color: #31333d;
    border-left: 5px solid $base-blue;
    box-sizing: border-box;
    padding: 0.5rem 1rem;
    margin-bottom: 2rem;
  }
}

//メディアクエリ
@include media-query($bp-tablet) {
  .skills {
    &__wrapper {
      width: 85%;
    }
    &__heading {
      margin-bottom: 2rem;
    }
    &__bar {
      margin-bottom: 3rem;
    }
    &__subheading {
      margin-bottom: 2rem;
    }
  }
}

@include media-query($bp-mobile) {
  .skills {
    &__heading {
      font-size: 2rem;
    }
    &__sentence {
      font-size: 0.8rem;
    }
    &__list {
      font-size: 0.9rem;
    }
    &__subheading {
      font-size: 1.5rem;
    }
  }
}
</style>
