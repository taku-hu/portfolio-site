<template>
  <header>
    <div class="header-navi">
      <nav>
        <ul>
          <li v-for="page in pages" v-bind:key="page.name">
            <router-link v-bind:to="page.path">
              {{ page.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>

    <div class="menu-button" v-on:click="toggleMenu">
      <i class="fas fa-bars" v-show="!active"></i>
      <i class="fas fa-times" v-show="active"></i>
    </div>

    <drawer-component v-bind:inheritedActive="active" v-on:toggle="toggleMenu" />

    <div class="background">
      <p v-for="(sentence, index) in bgSentences" v-bind:key="index">
        <span v-bind:data-text="sentence">{{ sentence }}</span>
      </p>
    </div>
    <div class="front">
      <h1>Takuto's</h1>
      <h2>portfolio site</h2>
      <p>
        <span data-text="WELCOME TO MY WEBSITE!">
          WELCOME TO MY WEBSITE!
        </span>
      </p>
      <a href="#landing" class="down-button">
        <i class="fas fa-angle-down"></i>
      </a>
    </div>
  </header>
</template>

<script>
import DrawerComponent from './Drawer.vue';
import { mobileBrowser } from '@/mixins/mobileBrowser.js';
import { pageLinks } from '@/mixins/pageLinks.js';
import { background } from '@/mixins/background.js';

export default {
  name: 'HeaderComponent',
  mixins: [mobileBrowser, pageLinks, background],
  data() {
    return {
      active: false
    };
  },
  methods: {
    toggleMenu() {
      this.active = !this.active;
    }
  },
  components: {
    DrawerComponent
  }
};
</script>

<style lang="scss">
@import '@/assets/styles/_fragments.scss';

header {
  @include center-styling;
  position: relative;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  color: #fff;
  background-color: rgb(15, 54, 167);
  background-image: linear-gradient(
    90deg,
    rgba(15, 54, 167, 1) 40%,
    rgba(0, 163, 254, 1) 100%
  );
  overflow: hidden;
  margin-bottom: 3rem;

  .header-navi {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 3.5rem;
    font-family: 'Orbitron', sans-serif;
    background-color: #000;
    nav {
      width: 100%;
      ul {
        width: 100%;
        display: flex;
        padding: 0 15%;
        box-sizing: border-box;
      }
      li {
        width: 25%;
        height: 3.5rem;
        line-height: 3.5rem;
        font-size: 1.5rem;
        font-weight: bold;
        text-shadow: none;
        &:not(:last-child) {
          border-right: 1px solid #fff;
        }
        a {
          @include button-sizing;
          color: #fff;
          transition: 0.5s;
          &.router-link-exact-active {
            color: #000;
            background-color: #fff;
          }
          &:hover {
            color: #000;
            background-color: #fff;
          }
        }
      } //li
    } //nav
  } //.header-navi

  .menu-button {
    @include center-styling;
    display: none;
    position: fixed;
    top: 0;
    left: 3%;
    z-index: 100;
    font-size: 2rem;
    cursor: pointer;
    .fas {
      line-height: 3.5rem;
    }
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: inherit;
    white-space: nowrap;
    user-select: none;
    p {
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.3);
      transition: 0.5s;
      overflow: hidden;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      user-select: none;
      span {
        position: relative;
        display: inline-block;
        padding: 5px 0 5px 5px;
        letter-spacing: 1px;
        animation: slide 20s linear infinite;
        &:before {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: -100%;
          padding: 5px 0 5px 5px;
        }
      }
      &:nth-child(even) span {
        animation: slide-reverse 20s linear infinite;
      }
    } //p
  } //.background

  .front {
    @include center-styling;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: inherit;
    h1 {
      -webkit-text-stroke: 2px #fff;
      color: transparent;
      font-weight: bold;
      font-size: 5rem;
      letter-spacing: 0.2rem;
      margin-bottom: 5rem;
    }
    h2 {
      -webkit-text-stroke: 2px #fff;
      color: transparent;
      font-weight: bold;
      font-size: 3rem;
      letter-spacing: 0.3rem;
      margin-bottom: 10rem;
    }
    p {
      position: relative;
      font-size: 1.5rem;
      text-shadow: 1px 2px 3px #1c1c1c;
      font-weight: bold;
      transition: 0.5s;
      overflow: hidden;
      span {
        position: relative;
        display: inline-block;
        padding: 5px;
        letter-spacing: 1px;
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
    a.down-button {
      @include center-styling;
      position: absolute;
      bottom: 0;
      width: 40px;
      height: 40px;
      border: 1px solid #fff;
      border-radius: 50%;
      transition: 0.5s;
      &:hover {
        background-color: #fff;
        color: transparent;
        transform: scale(0.7);
      }
      &:hover i {
        color: #0000ff;
      }
      i {
        color: #fff;
        font-size: 30px;
        text-shadow: none;
      }
    } //a.down-button
  } //.front
} //header

@include media-query($bp-tablet) {
  header {
    .menu-button {
      display: block;
    }
    .header-navi nav {
      display: none;
    }
  } //header
}
</style>