<script setup lang="ts">
import { faVuejs, faQuora } from '@fortawesome/free-brands-svg-icons'
import { faBlog, faHome, faAddressCard, faWrench, faBriefcase, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { reactive, toRefs } from 'vue'

import { router } from '@/router'

type Props = {
  isThemeChanged: boolean
  isCollapsed: boolean
  currentPage: string
}

const props = defineProps<Props>()
const { isThemeChanged, isCollapsed, currentPage } = toRefs(props)

const accordionItems = reactive([
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
])

type AccordionItem = typeof accordionItems[number]
type AccordionItemPath = AccordionItem['paths'][number]

const icons = { faAngleDown }

const handleClickAccordionPanel = ({ labelName }: AccordionItem) => {
  const selected = accordionItems.find(accordionItem => accordionItem.labelName === labelName)
  if (!selected) {
    return
  }

  selected.isOpen = !selected.isOpen
}

const handleClickAccordionLink = ({ labelName }: AccordionItem, { link }: AccordionItemPath) => {
  if (labelName === 'pages') {
    router.push({ path: link })
    return
  }

  window.open(link, '_blank')
}
</script>

<template>
  <div :class="[$style.explorer, isThemeChanged && $style['explorer--theme-changed'], isCollapsed && $style['explorer--collapsed']]">
    <div :class="$style.explorer__heading">EXPLORER</div>

    <div v-for="accordionItem in accordionItems" :key="accordionItem.labelName" :class="$style.accordion">
      <div
        :class="[$style.accordion__label, accordionItem.isOpen && $style['accordion__label--opened'], isThemeChanged && $style['accordion__label--theme-changed']]"
        @click="handleClickAccordionPanel(accordionItem)"
      >
        <FaIcon :icon="icons.faAngleDown" :class="[$style.accordion__icon, !accordionItem.isOpen && $style['accordion__icon--close']]" />
        {{ accordionItem.labelName }}
      </div>
      <div v-show="accordionItem.isOpen" :class="$style.accordion__body">
        <a
          v-for="path in accordionItem.paths"
          :key="path.name"
          :class="[$style.accordion__links, path.name === currentPage && $style['accordion__links--active'], path.name === currentPage && isThemeChanged && $style['accordion__links--active-changed']]"
          @click="handleClickAccordionLink(accordionItem, path)"
        >
          <FaIcon :icon="path.icon" :style="{ color: path.color }" />
          {{ path.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
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
    }
    &__icon {
      transition: 0.2s;
      margin-right: 0.1rem;
      &--close {
        transform: rotate(-90deg);
      }
    }
    &__body {
      font-size: 0.7rem;
    }
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
        background-color: #313341;
      }
      &--changed {
        &:hover {
          background-color: #37373d;
        }
      }
      &--active-changed {
        background-color: #37373d;
      }
    }
  }
}
</style>
