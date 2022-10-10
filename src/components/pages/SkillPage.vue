<template>
  <section :class="$style.skills">
    <div :class="$style.skills__wrapper">
      <VsCodeHeader> My SKILLS </VsCodeHeader>
      <p :class="$style.skills__sentence">
        現在の私のスキルです。<br />
        フロントエンドのJS周りがコアスキルです。
      </p>
      <VsCodeLabel>
        <a :class="$style['skills__clickable-marker']" href="https://github.com/taku-hu" target="_blank"> GitHub </a>
        にコードを公開しているので、よければ御覧ください。
      </VsCodeLabel>
      <ul :class="$style.skills__list">
        <li v-for="skill in skills" :key="skill.name" :class="$style['skills__list-item']" :style="{ backgroundImage: `url('/images/${skill.name}.png')` }">
          <span :class="$style.skills__marker">
            {{ skill.name }}
          </span>
          &nbsp;-&nbsp;
          {{ skill.details }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import VsCodeHeader from '@/components/molecules/VsCodeHeader.vue'
import VsCodeLabel from '@/components/molecules/VsCodeLabel.vue'

const skills = computed(() => [
  {
    name: 'HTML・CSS',
    details: '両方共に問題なく扱えます。\nBEM等のcss設計手法も理解しており、「flexbox」や「grid」を使いレスポンシブなコーディングをすることができます。'
  },
  {
    name: 'Sass',
    details: 'mixinや基本的な関数等、開発に必要な機能は十分に理解しています。'
  },
  {
    name: 'JavaScript',
    details: '私が最も得意としている言語です。\n当然ES6以降の最新の文法も十分に理解しています。'
  },
  {
    name: 'TypeScript',
    details: '現在業務でメインで使っており、最も関心のある言語です。\n業務ではVue(Nuxt) + TypeScriptでの開発をメインに行っています。'
  },
  {
    name: 'Vue.js',
    details: '現在業務でメインで使っているJSフレームワークです。\nバージョンは2と3(composition api)両方とも扱えます。'
  },
  {
    name: 'Nuxt.js',
    details: '現在業務でメインで使っているJSフレームワークです。\nWORKSに載せているブログはNuxt.jsを用いて開発しました。'
  },
  {
    name: 'React',
    details:
      '最近最も関心を持っているライブラリです。\nVue3のcompositionAPIに触れたことで、関数型の良さを知り、Vue3に影響を与えたReact Hooksに興味を持った事が始めたキッカケです。\nClass ComponentとHooks両方とも扱えます。'
  },
  {
    name: 'Dart',
    details: '会社でモバイルアプリ事業を始めるにあたっての技術選定の一環で触りました。\nJavaScriptライクな静的型付け言語だったため、TypeScriptの経験が活き、それなりに扱えました。'
  },
  {
    name: 'Flutter',
    details: '会社でモバイルアプリ事業を始めるにあたっての技術選定の一環で触りました。\n単機能のみのプロトタイプアプリでしたが、一応Google Play・App Storeにてリリースまでこぎつけました。'
  },
  {
    name: 'Firebase',
    details:
      '本棚アプリにて、Cloud Firestoreを使用したデータベースの機能と、Authenticationを使用したグーグルアカウントでのログイン機能を実装するのに使用しました。\n概要は理解していますが、より使いこなせるように更なる学習を重ねています。'
  },
  {
    name: 'Git・Github',
    details: 'Git Flow・Github Flowを理解しており、git・githubを用いた複数人での開発が行えます。'
  },
  {
    name: 'webpack',
    details: '主要な機能を理解し、フロントエンドの開発環境の構築をする事が出来ます。'
  }
])
</script>

<style lang="scss" module>
.skills {
  width: 100%;
  height: 100%;
  font-size: 0.9rem;
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
    white-space: pre-wrap;
    padding-left: 1.8rem;
    margin-bottom: 0.8rem;
  }
} // .skills

@include media-query($bp-tablet) {
  .skills {
    &__wrapper {
      width: 85%;
    }
    &__subheading {
      margin-bottom: 2rem;
    }
  }
}

@include media-query($bp-mobile) {
  .skills {
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
