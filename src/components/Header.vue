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

    <!--humburger-menu-button -->
    <div class="menu-button" v-on:click="toggleMenu">
      <i class="fas fa-bars" v-show="!active"></i>
      <i class="fas fa-times" v-show="active"></i>
    </div>
    <!--humburger-menu-button -->

    <div class="overlay" v-show="active" v-on:click="toggleMenu"></div>

    <!-- navigation-drawer -->
    <div class="drawer-menu" v-bind:class="{'menu-open' : active}" v-on:click="toggleMenu">
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
    <!-- navigation-drawer -->

    <h1 class="glitch" data-text="Takuto's">Takuto's</h1>
    <h2 class="glitch" data-text="portfolio site">portfolio site</h2>
    <p class="glitch" data-text="Welcome to my website!">Welcome to my website!</p>
    <a href="#landing" class="down-button">
      <i class="fas fa-angle-down"></i>
    </a>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      pages: [
        {name: 'HOME', path: '/'},
        {name: 'ABOUT', path: '/about'},
        {name: 'SKILLS', path: '/skills'},
        {name: 'WORKS', path: '/works'},
      ],
      active: false,
      currentPage: null,
    }
  },
  methods: {
    toggleMenu: function () {
      this.active = !this.active
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/_fragments.scss';

header {
  @include center-styling;
  position: relative;
  width: 100%;
  height: 100vh;
  font-family: 'Orbitron', sans-serif;
  color: #fff;
  text-shadow: 1px 2px 3px #1c1c1c;
  background: linear-gradient(rgba(28, 37, 255, 0.6), rgba(28, 37, 255, 0.6)), url("~@/assets/images/header-image.jpg");
  background-size: cover;
  margin-bottom: 3rem;
  .header-navi {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: 3.5rem;
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
      }//li
    } //nav
  } //.header-navi
  .menu-button {
    @include center-styling;
    display: none;
    position: fixed;
    z-index: 3;
    top: 0;
    left: 3%;
    font-size: 2rem;
    cursor: pointer;
    .fas {
      line-height: 3.5rem;
    }
  }
  .overlay {
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .drawer-menu {
    position: fixed;
    z-index: 2;
    top: -12.5rem;
    left: 0;
    width: 100%;
    background-color: rgba(34, 34, 34, 0.9);
    transition: 0.5s;
    &.menu-open {
      transform: translateY(16rem);
    }
    nav {
      width: 100%;
      li {
        width: 100%;
        height: 4rem;
        box-sizing: border-box;
        &:not(:last-child) {
          border-bottom: 1px solid #fff;
        }
        a {
          @include button-sizing;
          color: #fff;
          font-size: 1.5rem;
          line-height: 4rem;
        }
      } //li
    } //nav
  } //menu
  h1 {
    font-size: 6rem;
    letter-spacing: 0.2rem;
    margin-bottom: 5rem;
    user-select: none;
  }
  h2 {
    font-size: 3rem;
    letter-spacing: 0.3rem;
    margin-bottom: 10rem;
    user-select: none;
  }
  p {
    font-size: 1.5rem;
    user-select: none;
  }
  .down-button {
    display: block;
    position: absolute;
    bottom: 0;
    margin: 0 auto;
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    transition: 0.5s;
    &:hover {
      background-color: #fff;
      color: rgba(9, 63, 209, 0.9);
      transform: scale(0.5);
    }
    i {
      height:40px;
      width: 40px;
      color: #fff;
      font-size: 30px;
      line-height: 40px;
      text-shadow: none;
      &:hover {
         color: #0000ff;
      }
    }
  } //a.down-button
} //header

//グリッチアニメーション
.glitch {
  position: relative;
  &:before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: -2px;
    text-shadow: -2px 0 #ff00c1;
    width: 100%;
    height: 100%;
    color:white;
    background: rgba(30, 45, 201, 0.7);
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: noise-anim-2 3s infinite linear alternate-reverse;
  }
  &:after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 2px;
    text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
    width: 100%;
    height: 100%;
    background: rgba(30, 45, 201, 0.7);
    overflow: hidden;
    clip: rect(0,900px,0,0);
    animation: noise-anim 2s infinite linear alternate-reverse;
  }
}

@keyframes noise-anim {
  $steps:20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(100)+px, 9999px, random(100)+px, 0);
    }
  }
}

@keyframes noise-anim-2 {
  $steps:20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(100)+px, 9999px, random(100)+px, 0);
    }
  }
}

@media screen and (max-width: 896px) {
  header {
    .menu-button {
      display: block;
    }
    .header-navi nav {
      display: none;
    } //.header-navi
  } //header
} //@media
</style>