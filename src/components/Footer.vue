<template>
  <footer class="footer" id="landing">
    <div class="footer__top">
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
    <div class="footer__bottom">
      <small>copyright&copy; 2019 All rights reserved. Takuto Takeuchi</small>
    </div>
  </footer>
</template>

<script>
import { pageLinks } from '@/mixins/pageLinks.js';

export default {
  name: 'FooterComponent',
  mixins: [pageLinks],
};
</script>

<style lang="scss">
@import '@/assets/styles/_fragments.scss';

.footer {
  width: 100%;
  &__top {
    @include center-styling;
    height: 3rem;
    background-color: #47b7cc;
    nav {
      width: 100%;
      ul {
        width: 100%;
        display: flex;
        padding: 0 15%;
        box-sizing: border-box;
        li {
          width: 25%;
          &:not(:last-child) {
            border-right: 1px solid #000;
          }
          a {
            @include button-sizing;
            font-family: 'Orbitron', sans-serif;
            color: #000;
          }
        }
      }
    } //nav
  } //__top
  &__bottom {
    height: 5rem;
    background-color: $base-black;
    small {
      color: #fff;
      font-size: 1rem;
      line-height: 5rem;
    }
  } //__bottom
} //footer
</style>