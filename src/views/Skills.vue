<template>
  <section class="skills">
    <div class="skills__sentence">
      <p>Click the item or&nbsp;</p>
      <button @click="toggleAll">
        {{ toggleMessage }}
        <i class="fas fa-sort"></i>
      </button>
    </div>
    <accordion-component :inheritedSkills="skills" />
  </section>
</template>

<script>
import AccordionComponent from '@/components/Accordion.vue';

export default {
  data() {
    return {
      toggleMessage: 'Show all',
      skills: [
        {
          name: 'HTML・CSS',
          value: 90,
          bgColor: '#ff4500',
          open: false,
          details: `
            両方共に十分な理解をしています。<br>
            BEMによる設計も理解しており、「flexbox」や「grid」を使いレスポンシウェブデザインのコーディングをすることができます。
          `
        },
        {
          name: 'Sass',
          value: 80,
          bgColor: '#ff69b4',
          open: false,
          details: `
            mixinや基本的な関数、標準的な記法等の開発に必要な主要な事柄は理解しています。
          `
        },
        {
          name: 'JavaScript',
          value: 75,
          bgColor: '#ffd700',
          open: false,
          details: `
            私が現在メインで学習しており最も関心のある言語です。<br>
            基本的な仕様・機能については理解しており、全てES6以降の型で学習いたしました。<br>
            Vue.jsはもちろん、JavaScript自体の知見もより深めていきたいと思っているので、日々コードを動かしながら学習しています。
          `
        },
        {
          name: 'Vue.js',
          value: 70,
          bgColor: '#3cb371',
          open: false,
          details: `
            主な仕様や機能、vue-cliや単一ファイルコンポーネントによる開発の概念、Vuexでの状態管理については理解しています。<br>
            WORKSに載せているポートフォリオは全てVue.jsで開発しました。
          `
        },
        {
          name: 'Firebase',
          value: 30,
          bgColor: '#ffa500',
          open: false,
          details: `
            本棚アプリにて、Cloud Firestoreを使用したデータベースの機能と、Authenticationを使用したグーグルアカウントでのログイン機能を実装するのに使用しました。<br>
            概要は理解していますが、より使いこなせるように更なる学習を重ねています。
          `
        },
        {
          name: 'Git・Github',
          value: 60,
          bgColor: '#000',
          open: false,
          details: `
            Git Flow・Github Flowを理解し、git・githubを用いた開発が行えます。<br>
            機能や仕組みは理解しているので複数人での開発にも対応できます。
          `
        },
        {
          name: 'webpack',
          value: 40,
          bgColor: '#87ceeb',
          open: false,
          details: `
            主要な機能を理解し、フロントエンドの開発環境の構築をする事が出来ます。
          `
        }
      ] //skills
    }; //ruturn
  },
  watch: {
    skills: {
      handler() {
        const checkTrue = this.skills.every(skill => skill.open);
        const checkFalse = this.skills.every(skill => !skill.open);
        if(checkTrue) {
          this.toggleMessage = 'Close all';
        } else if(checkFalse) {
          this.toggleMessage = 'Show all';
        }
      },
      deep: true
    }
  },
  methods: {
    toggleAll() {
      for(const skill of this.skills) {
        if(this.toggleMessage === 'Show all') {
          skill.open = true;
        } else {
          skill.open = false;
        }
      }
    }
  },
  components: {
    AccordionComponent
  }
};
</script>

<style lang="scss">
@import '@/assets/styles/_fragments.scss';

.skills {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
  padding: 0 0.5rem;
  &__sentence {
    @include center-styling($direction: row);
    margin: 3rem 0;
    p {
      font-family: 'Orbitron', sans-serif;
      font-size: 1.5rem;
    }
    button {
      @include clear-button-css;
      width: 9rem;;
      height: 3rem;
      line-height: 3rem;;
      font-weight: bold;
      font-size: 1.2rem;
      color: #fff;
      border: 1px solid #fff;
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        transform: scale(0.9);
      }
    }
  } // __sentence
} //skills

//メディアクエリ
@include media-query($bp-mobile) {
  .skills {
    &__sentence {
      flex-direction: column;
      margin-bottom: 1rem;
      p {
        margin-bottom: 1rem;
      }
    }
  } //.skills
}
</style>