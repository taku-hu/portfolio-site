<template>
  <div :class="[
      $style.explorer,
      {
        [$style['explorer--theme-changed']]: isThemeChanged,
        [$style['explorer--collapsed']]: isCollapsed
      }
    ]"
  >
    <div :class="$style.explorer__heading">EXPLORER</div>

    <div
      :class="$style.accordion"
      v-for="accordion in accordions"
      :key="accordion.labelName"
    >
      <div
        :class="[
          $style.accordion__label,
          {
            [$style['accordion__label--opened']]: accordion.isOpen,
            [$style['accordion__label--theme-changed']]: isThemeChanged
          }
        ]"
        @click="toggleAccordion(accordion)"
      >
        <fa
          :icon="icons.faAngleDown"
          :class="[
            $style.accordion__icon,
            { [$style['accordion__icon--close']]: !accordion.isOpen }
          ]" 
        />
        {{ accordion.labelName }}
      </div>
      <div :class="$style.accordion__body" v-show="accordion.isOpen">
        <a
          :class="[
            $style.accordion__links,
            { [$style['accordion__links--active']]: path.name === currentPage }
          ]"
          v-for="path in accordion.paths"
          :key="path.name"
          @click="transitionPage(accordion, path)"
        >
          <fa
            :icon="path.icon"
            :style="{ color: path.color }"
          />
          {{ path.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faBlog, faHome, faAddressCard, faWrench, faBriefcase, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faVuejs, faQuora } from '@fortawesome/free-brands-svg-icons'
import router from '@/router';

type PathType = {
  icon: IconDefinition;
  name: string;
  link: string;
}
type AccordionType = {
  labelName: string;
  isOpen: boolean;
  paths: [
    ...PathType[]
  ];
}

export default defineComponent({
  props: {
    isThemeChanged: Boolean,
    isCollapsed: Boolean,
    currentPage: String
  },
  setup() {
    const accordions = reactive([
      {
        labelName: 'OPEN EDITORS',
        isOpen: true,
        paths: [
          {
            icon: faVuejs,
            color: '#41b883',
            name: 'MySite',
            link: 'https://github.com/taku-hu/portfolio-site'
          }
        ]
      },
      {
        labelName: 'posts',
        isOpen: true,
        paths: [
          {
            icon: faBlog,
            color: '#287dc0',
            name: 'blog',
            link: 'https://taku-hu-blog.netlify.app/'
          },
          {
            icon: faQuora,
            color: '#55c500',
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
            icon: faHome,
            color: '#F0675F',
            name: 'Home',
            link: '/'
          },
          {
            icon: faAddressCard,
            color: '#108FB7',
            name: 'About',
            link: '/about'
          },
          {
            icon: faWrench,
            color: '#FFED39',
            name: 'Skills',
            link: '/skills'
          },
          {
            icon: faBriefcase,
            color: '#29A7A3',
            name: 'Works',
            link: '/works'
          }
        ]
      }
    ]);

    const icons = {
      faAngleDown
    }

    const toggleAccordion = (accordion: AccordionType) => {
      const selected = accordions.find(accordions => accordions.labelName === accordion.labelName);
      if(selected) {
        selected.isOpen = !selected.isOpen;
      }
    };

    const transitionPage = (accordion: AccordionType, path: PathType) => {
      if (accordion.labelName === 'pages') {
        router.push({ path: path.link });
      } else {
        open(path.link, '_blank');
      }
    };

    return {
      accordions,
      icons,
      toggleAccordion,
      transitionPage
    };
  }
});
</script>

<style lang="scss" module>
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
  &--collapsed {
    @include animated-hinge(bottom, left);
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
    } // __label
    &__icon {
      transition: 0.2s;
      margin-right: 0.1rem;
      &--close {
        transform: rotate(-90deg);
      }
    } // __icon
    &__body {
      font-size: 0.7rem;
    } // __body
    &__links {
      @include button-sizing;
      display: block;
      height: 1.3rem;
      line-height: 1.3rem;
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
    } // __links
  } // .accordion
} // .explorer
</style>