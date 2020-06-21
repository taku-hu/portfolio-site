<template>
  <div class="explorer" :class="{ 'explorer--theme-changed': isThemeChanged }">
    <div class="explorer__heading">EXPLORER</div>
    <div
      class="accordion"
      v-for="accordion in state.accordions"
      :key="accordion.labelName"
    >
      <div
        class="accordion__label"
        :class="{
          'accordion__label--opened': accordion.isOpen,
          'accordion__label--theme-changed': isThemeChanged,
        }"
      >
        <i class="fas fa-angle-down" :class="{ close: !accordion.isOpen }"></i>
        {{ accordion.labelName }}
      </div>
      <transition name="open">
        <div class="accordion__body" v-show="accordion.isOpen">
          <a :href="accordion.link" target="_blank">
            <span v-html="accordion.icon"></span>
            {{ accordion.item }}
          </a>
        </div>
      </transition>
    </div>

    <div class="accordion">
      <div
        class="accordion__label"
        :class="{
          'accordion__label--opened': state.isLinksOpen,
          'accordion__label--theme-changed': isThemeChanged,
        }"
      >
        <i
          class="accordion__icon fas fa-angle-down"
          :class="{ 'accordion__icon--close': !state.isLinksOpen }"
        ></i>
        pages
      </div>
      <div class="accordion__body" v-show="state.isLinksOpen">
        <nav class="accordion__links">
          <ul>
            <li v-for="link in state.links" :key="link.name">
              <router-link :to="link.path">
                <span v-html="link.icon"></span>
                {{ link.name.toLowerCase() }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  props: {
    isThemeChanged: Boolean,
  },
  setup() {
    const state = reactive({
      accordions: [
        {
          labelName: 'OPEN EDITORS',
          icon: '<i class="fab fa-vuejs"></i>',
          item: 'portfolio-site',
          link: 'https://github.com/taku-hu/portfolio-site',
          isOpen: true,
        },
        {
          labelName: 'blog',
          icon: '<i class="fab fa-quora"></i>',
          item: 'Qiita',
          link: 'https://qiita.com/taku-hu',
          isOpen: true,
        },
      ],
      links: [
        {
          icon: '<i class="fas fa-home">',
          name: 'HOME',
          path: '/',
        },
        {
          icon: '<i class="fas fa-user-circle">',
          name: 'ABOUT',
          path: '/about',
        },
        {
          icon: '<i class="fas fa-wrench"></i>',
          name: 'SKILLS',
          path: '/skills',
        },
        {
          icon: '<i class="far fa-address-card"></i>',
          name: 'WORKS',
          path: '/works',
        },
      ],
      isLinksOpen: true,
    });

    const toggleExplorer = (accordion) => {
      const selected = state.accordions.find(
        (accordions) => accordions.labelName === accordion.labelName
      );
      selected.isOpen = !selected.isOpen;
    };

    return {
      state,
      toggleExplorer,
    };
  },
});
</script>

<style lang="scss">
@import '@/assets/styles/_parts.scss';

.explorer {
  width: 10rem;
  height: 100%;
  background-color: #21222c;
  font-size: 0.8rem;
  box-sizing: border-box;
  user-select: none;
  padding: 0 2px;
  &--theme-changed {
    background-color: #252526;
  }
  &__heading {
    height: 2.5rem;
    line-height: 2.5rem;
    box-sizing: border-box;
    padding-left: 1rem;
  }
  .accordion {
    margin-bottom: 2px;
    &__label {
      height: 1.5rem;
      line-height: 1.5rem;
      background-color: #282a36;
      cursor: pointer;
      padding-left: 0.5rem;
      &--opened {
        box-shadow: 0 2px 3px #000;
      }
      &--theme-changed {
        background-color: #383838;
      }
      &__icon {
        transition: 0.2s;
        &--close {
          transform: rotate(-90deg);
        }
      }
    }
    &__body {
      height: 1.5rem;
      line-height: 1.5rem;
      font-size: 0.7rem;
      a {
        @include button-sizing;
        box-sizing: border-box;
        padding-left: 1.5rem;
        &:hover {
          background-color: #313341;
        }
      }
      .router-link-exact-active {
        background-color: #44475a;
        &:hover {
          background-color: #44475a;
        }
      }
      .fa-vuejs {
        color: #41b883;
      }
      .fa-quora {
        color: #55c500;
      }
      .fa-file {
        color: #0d79cc;
      }
    }
    &__links {
      .fa-home {
        color: #ff4500;
      }
      .fa-user-circle {
        color: #0d79cc;
      }
      .fa-wrench {
        color: #ffd700;
      }
      .fa-address-card {
        color: #32cd32;
      }
    }
  }
} //.explorer

// 開閉アニメーション
.open-enter-active,
.open-leave-active {
  overflow: hidden;
  transition: 0.3s ease-in-out;
}
.open-enter-to,
.open-leave {
  max-height: 3rem;
}
.open-enter,
.open-leave-to {
  max-height: 0;
}
</style>
