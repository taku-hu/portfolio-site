<template>
  <section>
    <div class="skills-box">
      <h3>My Skills</h3>
      <div class="skill-box">
        <p class="subheading">Click the item <span>or</span></p>
        <a class="show-all" @click="toggleAll">
          {{ toggleMessage }}
          <i class="fas fa-sort"></i>
        </a>
      </div>
      <accordion-component :inheritedSkills="skills" :inheritedMessage.sync="toggleMessage" />
    </div>
    <router-link to="/" class="return">
      <i class="fas fa-angle-left"></i>&nbsp;BACK
    </router-link>
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
          bgColor: 'orangered',
          show: false,
          description: `
            両方共に主要な機能は理解しています。<br>
            「flexbox」や「grid」を使いレスポンシブなウェブサイトを作ることが出来ます。
          `
        },
        {
          name: 'Sass',
          bgColor: 'hotpink',
          show: false,
          description: `
            開発に必要な基本的な機能は理解しています。
          `
        },
        {
          name: 'JavaScript',
          bgColor: 'gold',
          show: false,
          description: `
            私が現在メインで学習しており最も関心のある言語です。<br>
            基本的な仕様・機能については理解しており、全てES6以降の型で学習いたしました。<br>
            Vue.jsはもちろん、JavaScript自体の知見もより深めていきたいと思っているので、日々コードを動かしながら学習しています。
          `
        },
        {
          name: 'Vue.js',
          bgColor: 'mediumseagreen',
          show: false,
          description: `
            主な仕様や機能、vue-cliや単一ファイルコンポーネントによる開発の概念、Vuexでの状態管理については理解しています。<br>
            WORKSに載せているポートフォリオは全てVue.jsで開発しました。
          `
        },
        {
          name: 'Firebase',
          bgColor: 'orange',
          show: false,
          description: `
            本棚アプリにて、Cloud Firestoreを使用したデータベースの機能と、Authenticationを使用したグーグルアカウントでのログイン機能を実装するのに使用しました。<br>
            概要は理解していますが、より使いこなせるように更なる学習を重ねています。
          `
        },
        {
          name: 'Git・Github',
          bgColor: 'black',
          show: false,
          description: `
            Git Flow・Github Flowを理解し、git・githubを用いた開発が行えます。<br>
            機能や仕組みは理解しているので複数人での開発にも対応できます。
          `
        },
        {
          name: 'webpack',
          bgColor: 'skyblue',
          show: false,
          description: `
            1からフロントエンドの開発環境の構築をする事が出来ます。
          `
        }
      ] //skills
    }; //ruturn
  },
  methods: {
    toggleAll() {
      for (let skill of this.skills) {
        if (this.toggleMessage === 'Show all') {
          skill.show = true;
        } else {
          skill.show = false;
        }
      }
      this.changeMessage();
    },
    changeMessage() {
      if (this.toggleMessage === 'Show all') {
        this.toggleMessage = 'Close all';
      } else {
        this.toggleMessage = 'Show all';
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

.skills-box {
  @include section-box('SKILLS');
  @include center-styling;
  h3 {
    @include section-heading;
  }
  .skill-box {
    @include center-styling($direction: row);
    margin-bottom: 3rem;
    p.subheading {
      font-family: 'Orbitron', sans-serif;
      font-size: 2rem;
      margin-right: 1rem;
      span {
        font-weight: bold;
      }
    }
    a.show-all {
      display: block;
      border: 1px solid #000;
      width: 100px;
      height: 30px;
      line-height: 30px;
      font-weight: bold;
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        color: #fff;
        background-color: #000;
      }
    }
  } //.skill-box
} //skills-box

@include media-query($bp-mobile) {
  .skills-box {
    .skill-box {
      @include center-styling;
      p.subheading {
        margin-bottom: 1rem;
      }
      a.show-all {
        margin-bottom: 1rem;
      }
    } //.skill-box
  } //.skills-box
}
</style>