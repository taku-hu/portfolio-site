<template>
  <section class="works">
    <div class="work" v-for="work in works" :key="work.name">
      <h2 class="work__name">{{ work.name }}</h2>
      <img class="work__image" :src="require(`@/assets/images/${work.title}.png`)" @click="openModal(work)">
    </div>

    <transition name="switch">
      <div class="modal" v-if="modalActive">
        <div class="modal__overlay" @click="closeModal">
          <div class="modal__contents" @click.stop>
            <h3 class="modal__title">{{ modalData.name }}</h3>
            <div class="modal__inner-wrapper">
              <a class="modal__link" :href="modalData.link" target="_blank">
                <img class="modal__image" :src="require(`@/assets/images/${modalData.title}.png`)">
              </a>
              <p class="modal__description" v-html="modalData.description"></p>
            </div>
          </div>
        </div>
      </div>
    </transition>

  </section>
</template>

<script>
export default {
  data() {
    return {
      works: [
        {
          name: 'Portfolio Site',
          title: 'Portfolio-site',
          link: 'https://github.com/taku-hu/portfolio-site',
          description: `
            私が初めて作ったもので、私のポートフォリオサイトです。<br>
            コーディングに慣れやVue.jsへの理解を深めるため、UIパーツ等はあえて積極的に車輪の再発明を行いました。<br>
            コードのハイライトにhighlight.jsを使ったこと以外は全てフルスクラッッチで実装しています。
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
            特にJavaScript自体の理解を深めたいと思い、より多くのネイティブコードを書きました。
          `
        }
      ],
      modalData: '',
      modalActive: false
    }; //return
  },
  methods: {
    openModal(work) {
      this.modalActive = true;
      this.modalData = work;
    },
    closeModal() {
      this.modalActive = false;
    }
  }
};
</script>

<style lang="scss">
@import '@/assets/styles/_fragments.scss';

.works {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  .work {
    width: 40%;
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
    @include center-styling;
    .work {
      width: 85%;
      margin-bottom: 2rem;
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