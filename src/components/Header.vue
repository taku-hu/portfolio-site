<template>
  <header class="header">
    <div class="header__bar"></div>
    <nav
      class="header__navi"
      :class="{ 'header__navi--opened': active }"
      @click="toggleMenu"
    >
      <ul>
        <li v-for="page in pages" :key="page.name">
          <router-link :to="page.path">
            {{ page.name }}
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="header__menu-button" @click="toggleMenu">
      <i class="fas fa-bars" v-show="!active"></i>
      <i class="fas fa-times" v-show="active"></i>
    </div>

    <div class="header__overlay" v-show="active" @click="toggleMenu"></div>

    <div class="header__background">
      <p v-for="sentence in bgSentences" :key="sentence.id">
        <span :data-text="sentence.item">{{ sentence.item }}</span>
      </p>
    </div>

    <div class="header__front">
      <h1 class="header__heading1">Takuto's</h1>
      <h1 class="header__heading2">portfolio site</h1>
      <p class="header__scroll-board">
        <span data-text="WELCOME TO MY WEBSITE!">
          WELCOME TO MY WEBSITE!
        </span>
      </p>
      <a class="header__down-button" @click="smoothScroll('footer')">
        <i class="fas fa-angle-down"></i>
      </a>
    </div>
  </header>
</template>

<script>
import { pageLinks } from '@/mixins/pageLinks.js';
import { background } from '@/mixins/background.js';

export default {
  name: 'HeaderComponent',
  mixins: [pageLinks, background],
  data() {
    return {
      active: false
    };
  },
  methods: {
    toggleMenu() {
      if(document.body.clientWidth <= 896) this.active = !this.active;
    },
    smoothScroll(element) {
      this.$emit('smoothScroll', element)
    }
  }
};
</script>

<style lang="scss">
@import '@/assets/styles/_fragments.scss';

.header {
  @include center-styling;
  position: relative;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  color: #fff;
  background-color: rgb(15, 54, 167);
  background-image: linear-gradient(90deg, rgba(15, 54, 167, 1) 40%, rgba(0, 163, 254, 1) 100%);
  overflow: hidden;
  margin-bottom: 3rem;

  &__bar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 102;
    width: 100%;
    height: 3.5rem;
    background-color: #000;
  }
  &__navi {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 103;
    width: 100%;
    font-family: 'Orbitron', sans-serif;
    ul {
      display: flex;
      box-sizing: border-box;
      padding: 0 10%;
    }
    li {
      width: 25%;
      height: 100%;
      font-size: 1.5rem;
      font-weight: bold;
      &:not(:last-child) {
        border-right: 1px solid #fff;
      }
      a {
        @include button-sizing;
        color: #fff;
        line-height: 3.5rem;
        transition: 0.5s;
        &:hover,
        &.router-link-exact-active {
          color: #000;
          background-color: #fff;
        }
      }
    } //li
  } //__navi
  &__menu-button {
    display: none;
    position: fixed;
    top: 0;
    left: 3%;
    z-index: 102;
    width: 3.5rem;
    height: 3.5rem;
    font-size: 2rem;
    cursor: pointer;
    .fa-bars,
    .fa-times {
      line-height: 3.5rem;
    }
  }

  &__overlay {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.6);
  }

  &__background {
    @include bg-animation-back;
  }

  &__front {
    @include center-styling($justify: space-around);
    @include bg-animation-front;
    box-sizing: border-box;
    padding: 3.5rem 0 3rem;
  }
  &__heading1 {
    -webkit-text-stroke: 2px #fff;
    color: transparent;
    font-size: 5rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
  }
  &__heading2 {
    -webkit-text-stroke: 2px #fff;
    color: transparent;
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 0.3rem;
  }
  &__scroll-board {
    position: relative;
    font-size: 1.5rem;
    font-weight: bold;
    text-shadow: 1px 2px 3px #1c1c1c;
    transition: 0.5s;
    overflow: hidden;
    span {
      position: relative;
      display: inline-block;
      letter-spacing: 1px;
      padding: 5px;
      animation: slide 5s linear infinite;
      &:before {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: -100%;
        padding: 5px;
      }
    }
  }
  &__down-button {
    @include center-styling;
    position: absolute;
    bottom: 0;
    width: 3rem;
    height: 3rem;
    color: #fff;
    font-size: 2rem;
    border: 1px solid #fff;
    border-radius: 50%;
    transition: 0.5s;
    &:hover {
      color: transparent;
      background-color: #fff;
      transform: scale(0.7);
    }
    &:hover .fa-angle-down {
      color: #0000ff;
    }
  }
} //header

//メディアクエリ
@include media-query($bp-tablet) {
  .header {
    &__navi {
      z-index: 101;
      top: -12.5rem; //.header__naviの高さ - メニューの高さ
      background-color: rgba(34, 34, 34, 0.9);
      transition: 0.3s;
      &--opened {
        transform: translateY(16rem);
        transition: 0.5s;
      }
      ul {
        flex-direction: column;
        padding: 0;
      }
      li {
        width: 100%;
        height: 4rem;
        box-sizing: border-box;
        &:not(:last-child) {
          border-right: 0;
          border-bottom: 1px solid #fff;
        }
        a {
          font-size: 1.5rem;
          line-height: 4rem;
          &:hover {
            color: none;
            background-color: none;
          }
        }
      } //li
    } //__navi
    &__menu-button {
      display: block;
    }
  } //header
}
</style>