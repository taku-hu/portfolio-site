<template>
  <footer id="landing">
    <div class="footer-top">
      <nav>
        <ul>
          <li v-for="page in pages" v-bind:key="page.name">
            <a href="#" v-on:click.prevent="pageSwitching(page)">
              {{ page.name }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="footer-bottom">
      <small>copyright&copy; 2019 All rights reserved. Takuto Takeuchi</small>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      pages: [
        {name: 'HOME', path: '/'},
        {name: 'ABOUT', path: '/about'},
        {name: 'SKILLS', path: '/skills'},
        {name: 'WORKS', path: '/works'},
      ],
    }
  },
  methods: {
    pageSwitching: function(page) {
      this.$router.push({ path: page.path })
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/_mixin.scss';
footer {
  width: 100%;
  .footer-top {
    background-color: rgb(71, 183, 204);
    height: 3rem;
    @include center-styling;
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
            font-size: 1rem;
            font-family: 'Orbitron', sans-serif;
            color: #000;
          }
        }
      } //ul
    } //nav
  } //footer-top
  .footer-bottom {
    background-color: #1a1a1a;
    height: 5rem;
    small {
      color: white;
      font-size: 1rem;
      line-height: 5rem;
    }
  } //footer-bottom
} //footer

@media screen and (max-width: 480px) {
} //@media
</style>