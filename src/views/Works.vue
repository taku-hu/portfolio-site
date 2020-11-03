<template>
  <section :class="$style.works">
    <CommonPageHeading :class="$style.works__heading">My WORKS</CommonPageHeading>

    <div :class="$style.works__wrapper">
      <div :class="$style.work" v-for="work in works" :key="work.name">
        <h2 :class="$style.work__name">{{ work.name }}</h2>
        <img
          :class="$style.work__image"
          :src="require(`@/assets/images/${work.image}.png`)"
          @click="openModal(work)"
        />
      </div>
    </div>

    <div :class="$style.modal" v-if="modal.isActive">
      <div :class="$style.modal__overlay" @click="closeModal">
        <div :class="$style.modal__contents" @click.stop>
          <h3 :class="$style.modal__title">{{ modal.data.name }}</h3>
          <div :class="$style['modal__inner-wrapper']">
            <a
              :class="$style.modal__link"
              :href="modal.data.link"
              target="_blank"
            >
              <img
                :class="$style.modal__image"
                :src="require(`@/assets/images/${modal.data.image}.png`)"
              />
            </a>
            <p :class="$style.modal__description">     
              {{ modal.data.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

import CommonPageHeading from '@/components/common/CommonPageHeading.vue';

type WorkType = {
  name: string;
  title: string;
  link: string;
  description: string;
}

export default defineComponent({
  components: {
    CommonPageHeading
  },
  setup() {
    const works = [
      {
        name: 'Portfolio Site',
        image: 'portfolio-site',
        link: 'https://github.com/taku-hu/portfolio-site',
        description: '私が初めて作ったもので、私のポートフォリオサイトです。\nコーディングに慣れるために、あえてほぼフルスクラッチで実装しました。\n最近Vue3 + compositionAPI + TypeScriptにリプレイスしました。'
      },
      {
        name: 'Tech Blog',
        image: 'blog',
        link: 'https://taku-hu-blog.netlify.app/',
        description: 'Nuxt + TypeScript + Tailwind + Contentfulで作ったブログです。\nSSGで開発しているため、PageSpeed Insightsの結果はモバイル99点・PC100点でした。'
      },
      {
        name: 'Online Bookshelf',
        image: 'bookshelf',
        link: 'https://book-manager-app-9ae82.firebaseapp.com/',
        description: '私が勉強したての時に初めて作ったウェブアプリケーションです。\nVue2 + GoogleBooksAPI + Firebaseで動いています。現在Vueの部分をReact + Hooks + TSXでリプレイス作業中。'
      },
      {
        name: 'Typing Game',
        image: 'typing-app',
        link: 'https://taku-hu.github.io/typing-app/',
        description: 'Vueの理解を深めるために作ったタイピングゲームです。\nJavaScript自体の理解も深めたいと思い、あえてフルスクラッチでより多くのコードを書きました。'
      }
    ]

    const modal= reactive({
      data: {} as WorkType,
      isActive: false
    });
    const openModal = (work: WorkType) => {
      modal.data = work;
      modal.isActive = true;
    };
    const closeModal = () => {
      modal.isActive = false;
    };

    return {
      works,
      modal,
      openModal,
      closeModal
    };
  }
});
</script>

<style lang="scss" module>
@import '@/assets/styles/_parts.scss';

.works {
  width: 100%;
  height: 100%;
  text-align: center;
  &__heading {
    width: 65%;
    text-align: left;
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
      white-space: pre-wrap;
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
