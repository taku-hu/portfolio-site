<template>
  <section class="skills">
    <div class="skills__wrapper">
      <h2 class="skills__heading">My SKILLS</h2>
      <p class="skills__sentence">
        現在の私のスキルです。<br>
        主にJavaScriptを中心にWEB、フロントエンドについて学習しています。
      </p>
      <p class="skills__bar">
        <a class="skills__clickable-marker" href="https://github.com/taku-hu" target="_blank">GitHub</a>にコードを公開しているので、よければ御覧ください。
      </p>
      <ul class="skills__list">
        <li
          v-for="skill in skills"
          :key="skill.name"
          :style="{backgroundImage: `url(${require(`@/assets/images/${skill.name}.png`)})`}"
        >
          <span class="skills__marker">
            {{ skill.name}}
          </span>
          &nbsp;-&nbsp;
          <span v-html="skill.details" style="color: #fff"></span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      toggleMessage: 'Show all',
      skills: [
        {
          name: 'HTML・CSS',
          color: '#ff4500',
          details: `
            両方共に十分な理解をしています。<br>
            BEMによる設計も理解しており、「flexbox」や「grid」を使いレスポンシブウェブデザインのコーディングをすることができます。
          `
        },
        {
          name: 'Sass',
          color: '#ff69b4',
          details: `
            mixinや基本的な関数、標準的な記法等の開発に必要な主要な事柄は理解しています。
          `
        },
        {
          name: 'JavaScript',
          color: '#ffd700',
          details: `
            私が現在メインで学習しており最も関心のある言語です。<br>
            基本的な仕様・機能については理解しており、全てES6以降の型で学習いたしました。<br>
            Vue.jsはもちろん、JavaScript自体の知見もより深めていきたいと思っているので、日々コードを動かしながら学習しています。
          `
        },
        {
          name: 'Vue.js',
          color: '#3cb371',
          details: `
            主な仕様や機能、vue-cliや単一ファイルコンポーネントによる開発の概念、Vuexでの状態管理については理解しています。<br>
            WORKSに載せているポートフォリオは全てVue.jsで開発しました。
          `
        },
        {
          name: 'Firebase',
          color: '#ffa500',
          details: `
            本棚アプリにて、Cloud Firestoreを使用したデータベースの機能と、Authenticationを使用したグーグルアカウントでのログイン機能を実装するのに使用しました。<br>
            概要は理解していますが、より使いこなせるように更なる学習を重ねています。
          `
        },
        {
          name: 'Git・Github',
          color: '#000',
          details: `
            Git Flow・Github Flowを理解し、git・githubを用いた開発が行えます。<br>
            機能や仕組みは理解しているので複数人での開発にも対応できます。
          `
        },
        {
          name: 'webpack',
          color: '#87ceeb',
          details: `
            主要な機能を理解し、フロントエンドの開発環境の構築をする事が出来ます。
          `
        }
      ] //skills
    }; //ruturn
  }
};
</script>

<style lang="scss">
@import '@/assets/styles/_fragments.scss';

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
    li {
      line-height: 1.5;
      background-repeat: no-repeat;
      background-position: left top;
      background-size: 1.2rem;
      box-sizing: border-box;
      padding-left: 1.8rem;
      margin-bottom: 0.5rem;
    }
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