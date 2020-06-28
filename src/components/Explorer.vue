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
          'accordion__label--theme-changed': isThemeChanged
        }"
        @click="toggleAccordion(accordion)"
      >
        <i
          class="accordion__icon fas fa-angle-down"
          :class="{ 'accordion__icon--close': !accordion.isOpen }"
        ></i>
        {{ accordion.labelName }}
      </div>
      <div class="accordion__body" v-show="accordion.isOpen">
        <a
          class="accordion__links"
          :href="path.path"
          target="_blank"
          v-for="path in accordion.paths"
          :key="path.name"
        >
          <span v-html="path.icon"></span>
          {{ path.name }}
        </a>
      </div>
    </div>

    <div class="accordion">
      <div
        class="accordion__label"
        :class="{
          'accordion__label--opened': state.links.isOpen,
          'accordion__label--theme-changed': isThemeChanged
        }"
        @click="togglePages"
      >
        <i
          class="accordion__icon fas fa-angle-down"
          :class="{ 'accordion__icon--close': !state.links.isOpen }"
        ></i>
        {{ state.links.labelName }}
      </div>
      <div class="accordion__body" v-show="state.links.isOpen">
        <router-link
          class="accordion__links"
          v-for="path in state.links.paths"
          :key="path.name"
          :to="path.path"
        >
          <span v-html="path.icon"></span>
          {{ `${path.name.substring(0, 1)}${path.name.substring(1).toLowerCase()}` }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  props: {
    isThemeChanged: Boolean
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
              path: 'https://github.com/taku-hu/portfolio-site'
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
              path: 'https://qiita.com/taku-hu'
            }
          ]
        }
      ],
      links: {
        labelName: 'pages',
        isOpen: true,
        paths: [
          {
            icon: '<i class="fas fa-home">',
            name: 'HOME',
            path: '/'
          },
          {
            icon: '<i class="fas fa-user-circle">',
            name: 'ABOUT',
            path: '/about'
          },
          {
            icon: '<i class="fas fa-wrench"></i>',
            name: 'SKILLS',
            path: '/skills'
          },
          {
            icon: '<i class="far fa-address-card"></i>',
            name: 'WORKS',
            path: '/works'
          }
        ]
      }
    });

    const toggleAccordion = accordion => {
      const selected = state.accordions.find(
        accordions => accordions.labelName === accordion.labelName
      );
      selected.isOpen = !selected.isOpen;
    };
    const togglePages = () => {
      state.links.isOpen = !state.links.isOpen;
    };

    return {
      state,
      toggleAccordion,
      togglePages
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
  } //.accordion
} //.explorer
</style>
