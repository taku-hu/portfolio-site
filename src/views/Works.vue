<template>
  <section class="works">
    <h2 class="works__heading">My WORKS</h2>

    <div class="works__wrapper">
      <div class="work" v-for="work in state.works" :key="work.name">
        <h2 class="work__name">{{ work.name }}</h2>
        <img class="work__image" :src="require(`@/assets/images/${work.title}.png`)" @click="openModal(work)">
      </div>
    </div>

    <transition name="switch">
      <div class="modal" v-if="state.modalActive">
        <div class="modal__overlay" @click="closeModal">
          <div class="modal__contents" @click.stop>
            <h3 class="modal__title">{{ state.modalData.name }}</h3>
            <div class="modal__inner-wrapper">
              <a class="modal__link" :href="state.modalData.link" target="_blank">
                <img class="modal__image" :src="require(`@/assets/images/${state.modalData.title}.png`)">
              </a>
              <p class="modal__description" v-html="state.modalData.description"></p>
            </div>
          </div>
        </div>
      </div>
    </transition>

  </section>
</template>

<script>
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      works: [
        {
          name: 'Portfolio Site',
          title: 'Portfolio-site',
          link: 'https://github.com/taku-hu/portfolio-site',
          description: `
            私が初めて作ったもので、私のポートフォリオサイトです。<br>
            コーディングの慣れやVue.jsへの理解を深めるため、UIパーツ等はあえて積極的に車輪の再発明を行いました。<br>
            コードのハイライトにhighlight.jsを使ったこと以外はホボ全てフルスクラッッチで実装しています。
          `
        },
        {
          name: 'Online Bookshelf',
          title: 'Bookshelf',
          link: 'https://github.com/taku-hu/online-bookshelf',
          description: `
            私が3番目に作ったもので、Vue.js + Firebase + GoogleBooksAPIを使っています。<br>
            ごく小規模ではありますが、認証機能やデータベース、HTTP通信やAPIの利用など実際の開発を意識して作りました。<br>
            そして状態管理に初めてVuexを導入しました。<br>
            まだまだではありますが、開発を通してコンポーネントベースでのより実践的な開発が学べたと感じています。
          `
        },
        {
          name: 'Typing Game',
          title: 'Typing-app',
          link: 'https://github.com/taku-hu/typing-app',
          description: `
            私が2番目に作ったものです。<br>
            以前の開発の経験を生かしてより多くの機能を盛り込みました。<br>
            特にJavaScript自体の理解を深めたいと思い、より多くのコードを書きました。
          `
        }
      ],
      modalData: '',
      modalActive: false
    })

    const openModal = (work) => {
      state.modalData = work;
      state.modalActive = true;
    }
    const closeModal = ()  => {
      state.modalActive = false;
    }

    return {
      state,
      openModal,
      closeModal
    }
  }
});
</script>

<style lang="scss">
@import '@/assets/styles/_parts.scss';

.works {
  width: 100%;
  height: 100%;
  text-align: center;
  &__heading {
    width: 65%;
    font-size: 2.5rem;
    font-family: 'Open Sans', sans-serif;
    border-bottom: 2px solid #4f505a;
    text-align: left;
    padding: 3rem 0 1rem;
    margin: 0 auto 1.5rem;
  }
  &__wrapper {
    @include center-styling(wrap, row, space-around);
  }
  .work {
    width: 40%;
    margin-bottom: 2rem;
    &__name {
      font-size: 2rem;
      font-family: 'Orbitron', sans-serif;
      margin-bottom: 1rem;
    }
    &__image {
      width: 100%;
      box-shadow: 0 0 10px #000;
      cursor: zoom-in;
      transition: 0.3s;
      &:hover {
        box-shadow: 0 0 40px #000;
        transform: scale(1.1);
      }
    }
  }
  .modal {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 999;
    color: #000;
    &__overlay {
      @include center-styling;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
    &__contents {
      @include center-styling;   
      width: 80%;
      height: 80%;
      background-color: #fff;
    }
    &__title {
      width: 100%;
      height: 4rem;
      line-height: 4rem;
      font-size: 2rem;
      font-family: 'Orbitron', sans-serif;
      color: #fff;
      background-color: $base-blue;
    }
    &__inner-wrapper {
      @include center-styling;
      flex-grow: 1;
    }
    &__link {
      width: 50%;
      cursor: pointer;
      margin-bottom: 1.5rem;
    }
    &__image {
      width: 100%;
      height: 100%
    }
    &__description {
      width: 50%;
      line-height: 1.5;
      text-align: left;
      margin: 0 auto;
    }
  }
} //.works

//メディアクエリ
@include media-query($bp-tablet) {
  .works {
    &__heading {
      width: 85%;
      font-size: 2rem;
    }
    .work {
      width: 85%;
    }
    .modal {
      &__link {
        width: 80%;
      }
      &__description {
        width: 80%;
        font-size: 1.2rem;
      }
    }
  }
}
</style>