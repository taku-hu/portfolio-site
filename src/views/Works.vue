<template>
  <section class="works">
    <h2 class="works__heading">My WORKS</h2>

    <div class="works__wrapper">
      <div class="work" v-for="work in state.works" :key="work.name">
        <h2 class="work__name">{{ work.name }}</h2>
        <img
          class="work__image"
          :src="require(`@/assets/images/${work.title}.png`)"
          @click="openModal(work)"
        />
      </div>
    </div>

    <div class="modal" v-if="state.modal.isActive">
      <div class="modal__overlay" @click="closeModal">
        <div class="modal__contents" @click.stop>
          <h3 class="modal__title">{{ state.modal.data.name }}</h3>
          <div class="modal__inner-wrapper">
            <a
              class="modal__link"
              :href="state.modal.data.link"
              target="_blank"
            >
              <img
                class="modal__image"
                :src="require(`@/assets/images/${state.modal.data.title}.png`)"
              />
            </a>
            <p
              class="modal__description"
              v-html="state.modal.data.description"
            ></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

type WorkType = {
  name: string;
  title: string;
  link: string;
  description: string;
}

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
            コーディングに慣れるために、あえてほぼフルスクラッチで実装しました。
            最近Vue3 + compositionAPI + TypeScriptにリプレイスしました。
          `
        },
        {
          name: 'Online Bookshelf',
          title: 'Bookshelf',
          link: 'https://book-manager-app-9ae82.firebaseapp.com/',
          description: `
            私が勉強したての時に初めて作ったウェブアプリケーションです。<br>
            Vue2 + GoogleBooksAPI + Firebaseで動いています。<br>
            現在Vueの部分をReact + Hooks + TSXでリプレイス作業中。
          `
        },
        {
          name: 'Typing Game',
          title: 'Typing-app',
          link: 'https://taku-hu.github.io/typing-app/',
          description: `
            Vueの理解を深めるために作ったタイピングゲームです。<br>
            JavaScript自体の理解も深めたいと思い、あえてフルスクラッチでより多くのコードを書きました。
          `
        }
      ],
      modal: {
        data: {} as WorkType,
        isActive: false
      }
    });

    const openModal = (work: WorkType) => {
      state.modal.data = work;
      state.modal.isActive = true;
    };
    const closeModal = () => {
      state.modal.isActive = false;
    };

    return {
      state,
      openModal,
      closeModal
    };
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
      color: #fff;
      background-color: #191a21;
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
      box-shadow: 0 12px 10px -6px rgba(0, 0, 0, 0.3);
      cursor: pointer;
      margin-bottom: 1.5rem;
    }
    &__image {
      width: 100%;
      height: 100%;
    }
    &__description {
      width: 50%;
      line-height: 1.5;
      font-weight: bold;
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
