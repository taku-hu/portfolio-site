<template>
  <div class="navigation-drawer">
    <div class="navigation-drawer__overlay" v-show="inheritedActive" @click="toggle"></div>

    <div
      class="navigation-drawer__menu"
      :class="{ 'open': inheritedActive }"
      @click="toggle"
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
    toggle() {
      this.$emit('toggle');
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
    z-index: 98;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
  }
  &__menu {
    position: fixed;
    z-index: 99;
    top: -16 + 3.5rem;
    left: 0;
    width: 100%;
    font-family: 'Orbitron', sans-serif;
    background-color: rgba(34, 34, 34, 0.9);
    transition: 0.5s;
    &.open {
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
  } //__menu
} //.navigation-drawer
</style>