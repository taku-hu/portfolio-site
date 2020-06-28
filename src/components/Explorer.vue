<template>
  <div :class="['explorer', { 'explorer--theme-changed': isThemeChanged }]">
    <div class="explorer__heading">EXPLORER</div>

    <div
      class="accordion"
      v-for="accordion in state.accordions"
      :key="accordion.labelName"
    >
      <div
        :class="[
          'accordion__label',
          {
            'accordion__label--opened': accordion.isOpen,
            'accordion__label--theme-changed': isThemeChanged
          }
        ]"
        @click="toggleAccordion(accordion)"
      >
        <i
          :class="[
            'accordion__icon',
            'fas',
            'fa-angle-down',
            { 'accordion__icon--close': !accordion.isOpen }
          ]"
        ></i>
        {{ accordion.labelName }}
      </div>
      <div class="accordion__body" v-show="accordion.isOpen">
        <a
          :class="[
            'accordion__links',
            { 'accordion__links--active': path.name === currentPage }
          ]"
          v-for="path in accordion.paths"
          :key="path.name"
          @click="transitionPage(accordion, path)"
        >
          <span v-html="path.icon"></span>
          {{ path.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import router from '@/router';

export default defineComponent({
  props: {
    isThemeChanged: Boolean,
    currentPage: String
  },
  setup() {
    const state = reactive({
      accordions: [
        {
          labelName: 'OPEN EDITORS',
          isOpen: true,
          paths: [
            {
              icon: '<i class="fab fa-vuejs"></i>',
              name: 'My portfolio Site',
              link: 'https://github.com/taku-hu/portfolio-site'
            }
          ]
        },
        {
          labelName: 'blog',
          isOpen: true,
          paths: [
            {
              icon: '<i class="fab fa-quora"></i>',
              name: 'Qiita',
              link: 'https://qiita.com/taku-hu'
            }
          ]
        },
        {
          labelName: 'pages',
          isOpen: true,
          paths: [
            {
              icon: '<i class="fas fa-home">',
              name: 'Home',
              link: '/'
            },
            {
              icon: '<i class="fas fa-user-circle">',
              name: 'About',
              link: '/about'
            },
            {
              icon: '<i class="fas fa-wrench"></i>',
              name: 'Skills',
              link: '/skills'
            },
            {
              icon: '<i class="far fa-address-card"></i>',
              name: 'Works',
              link: '/works'
            }
          ]
        }
      ]
    });

    const toggleAccordion = accordion => {
      const selected = state.accordions.find(
        accordions => accordions.labelName === accordion.labelName
      );
      selected.isOpen = !selected.isOpen;
    };

    const transitionPage = (accordion, path) => {
      if (accordion.labelName === 'pages') {
        router.push({ path: path.link });
      } else {
        open(path.link, '_blank');
      }
    };

    return {
      state,
      toggleAccordion,
      transitionPage
    };
  }
});
</script>

<style lang="scss">
@import '@/assets/styles/_parts.scss';

.explorer {
  width: 9rem;
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
    height: 2.3rem;
    line-height: 2.3rem;
    box-sizing: border-box;
    padding-left: 1rem;
  }
  .accordion {
    margin-bottom: 2px;
    &__label {
      height: 1.3rem;
      line-height: 1.3rem;
      background-color: #282a36;
      cursor: pointer;
      padding-left: 0.5rem;
      &--opened {
        box-shadow: 0 2px 3px #000;
      }
      &--theme-changed {
        background-color: #383838;
      }
    }
    &__icon {
      transition: 0.2s;
      &--close {
        transform: rotate(-90deg);
      }
    }
    &__body {
      height: 1.3rem;
      line-height: 1.3rem;
      font-size: 0.7rem;
      .fa-vuejs {
        color: #41b883;
      }
      .fa-quora {
        color: #55c500;
      }
      .fa-file {
        color: #0d79cc;
      }
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
    } //__body
    &__links {
      @include button-sizing;
      display: block;
      box-sizing: border-box;
      cursor: pointer;
      padding-left: 1.5rem;
      &:hover {
        background-color: #313341;
      }
      &--active {
        background-color: #44475a;
        &:hover {
          background-color: #44475a;
        }
      }
    }
  } //.accordion
} //.explorer
</style>
