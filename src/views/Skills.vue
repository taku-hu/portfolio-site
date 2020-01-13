<template>
  <section class="skills">
    <h3 class="skills__heading">My Skills</h3>
    <div class="accordion-heading">
      <p class="accordion-heading__sentence">Click the item or&nbsp;</p>
      <button class="accordion-heading__show-button" @click="toggleAll">
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
  name: 'Skills',
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
            両方共に主要な機能は理解しています。<br>
            「flexbox」や「grid」を使いレスポンシブなウェブサイトを作ることが出来ます。
          `
        },
        {
          name: 'Sass',
          value: 80,
          bgColor: '#ff69b4',
          open: false,
          details: `
            開発に必要な基本的な機能は理解しています。
          `
        },
        {
          name: 'JavaScript',
          value: 65,
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
            1からフロントエンドの開発環境の構築をする事が出来ます。
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
  @include section-box('SKILLS');
  @include center-styling;
  &__heading {
    @include section-heading;
  }
  .accordion-heading {
    @include center-styling($direction: row);
    margin-bottom: 3rem;
    &__sentence {
      font-family: 'Orbitron', sans-serif;
      font-size: 2rem;
    }
    &__show-button {
      @include clear-button-css;
      width: 9rem;;
      height: 3rem;
      line-height: 3rem;;
      font-weight: bold;
      font-size: 1.2rem;
      border: 1px solid #000;
      transition: 0.2s;
      &:hover {
        color: #fff;
        background-color: #000;
      }
    }
  } //.accordion-heading
} //skills

//メディアクエリ
@include media-query($bp-mobile) {
  .skills {
    .accordion-heading {
      @include center-styling;
      margin-bottom: 1rem;
      &__sentence {
        margin-bottom: 1rem;
      }
    } //.accordion-heading
  } //.skills
}
</style>