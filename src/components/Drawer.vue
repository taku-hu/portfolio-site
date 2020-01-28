<template>
  <div class="navigation-drawer">
    <div class="navigation-drawer__overlay" v-show="inheritedActive" @click="toggleMenu"></div>

    <div
      class="navigation-drawer__menu"
      :class="{ 'navigation-drawer__menu--opened': inheritedActive }"
      @click="toggleMenu"
    >
      <nav>
        <ul>
          <li v-for="page in pages" :key="page.name">
            <router-link :to="page.path">
              {{ page.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { pageLinks } from '@/mixins/pageLinks.js';

export default {
  name: 'DrawerComponent',
  mixins: [pageLinks],
  props: {
    inheritedActive: Boolean
  },
  methods: {
    toggleMenu() {
      this.$emit('toggleMenu');
    }
  }
};
</script>

<style lang="scss">
@import '@/assets/styles/_fragments.scss';

.navigation-drawer {
  width: 100%;
  height: 100%;
  &__overlay {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.6);
  }
  &__menu {
    position: fixed;
    z-index: 101;
    top: -12.5rem; //.header__naviの高さ - メニューの高さ
    left: 0;
    width: 100%;
    font-family: 'Orbitron', sans-serif;
    background-color: rgba(34, 34, 34, 0.9);
    transition: 0.3s;
    &--opened {
      transform: translateY(16rem);
      transition: 0.5s;
    }
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
  } //__menu
} //.navigation-drawer
</style>