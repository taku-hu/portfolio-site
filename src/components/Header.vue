<template>
  <header class="header">
    <div class="header__navi">
      <nav>
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
    </div>

    <drawer-component :inheritedActive="active" @toggleMenu="toggleMenu" />

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
import DrawerComponent from './Drawer.vue';
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
      this.active = !this.active;
    },
    smoothScroll(element) {
      this.$emit('smoothScroll', element)
    }
  },
  components: {
    DrawerComponent
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

  &__navi {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 102;
    width: 100%;
    height: 3.5rem;
    font-family: 'Orbitron', sans-serif;
    background-color: #000;
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
    &__menu-button {
      display: block;
    }
    &__navi nav {
      display: none;
    }
  } //header
}
</style>