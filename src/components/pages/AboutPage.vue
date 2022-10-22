<script setup lang="ts">
import { faMousePointer } from '@fortawesome/free-solid-svg-icons'

import VsCodeHeader from '@/components/molecules/VsCodeHeader.vue'
import VsCodeLabel from '@/components/molecules/VsCodeLabel.vue'

import { PageEmits } from '@/types/props'

const emit = defineEmits<PageEmits>()

const profileData = [
  {
    title: 'Name',
    information: 'Takeuchi Takuto'
  },
  {
    title: 'Background',
    information: 'Bachelor of International Economics / Hosei University'
  },
  {
    title: 'Qiita',
    information: 'taku-hu',
    link: 'https://qiita.com/taku-hu'
  },
  {
    title: 'Github',
    information: 'taku-hu',
    link: 'https://github.com/taku-hu'
  },
  {
    title: 'wantedly',
    information: 'Takeuchi Takuto',
    link: 'https://www.wantedly.com/users/124833407'
  },
  {
    title: 'Contact',
    information: 'hs.tm.ec.a.tt@gmail.com'
  }
]

const icons = { faMousePointer } as const

const monthNames = ['Janualy', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const date = new Date()
const nowDateString = (() => {
  const now = {
    year: date.getFullYear(),
    month: monthNames[date.getMonth()],
    day: date.getDate()
  } as const
  const isTargetsDate = (...targetDates: number[]) => targetDates.includes(now.day)
  const suffix = (() => {
    if (isTargetsDate(1, 21, 31)) {
      return 'st'
    } else if (isTargetsDate(2, 22)) {
      return 'nd'
    } else if (isTargetsDate(3, 23)) {
      return 'rd'
    } else {
      return 'th'
    }
  })()

  return `${now.month} ${now.day}${suffix} ${now.year}`
})()

const handleClickFeatureTitle = () => emit('changeTheme')
</script>

<template>
  <section :class="$style.about">
    <div :class="$style.about__wrapper">
      <VsCodeHeader>{{ nowDateString }} version</VsCodeHeader>
      <p :class="$style.about__sentence">
        Welcome to the {{ nowDateString }} release of My Portfolio Site. There are a lot of information in this version that we hope you will like, some of the key highlights include:
      </p>
      <ul :class="$style.about__list">
        <li v-for="{ title, link, information } in profileData" :key="title">
          <span :class="$style.about__marker">{{ title }}</span>
          &nbsp;-&nbsp;
          <template v-if="link">
            <a :class="$style.about__link" :href="link" target="_blank">
              <FaIcon :icon="icons.faMousePointer" />
              {{ information }}
            </a>
          </template>
          <template v-else>
            {{ information }}
          </template>
        </li>
      </ul>
      <VsCodeLabel>
        If you'd like to know more about me go to
        <a :class="$style['about__clickable-marker']" href="https://www.wantedly.com/users/124833407" target="_blank"> Profile </a>
        on
        <a :class="$style['about__clickable-marker']" href="https://github.com/taku-hu" target="_blank"> GitHub </a>
      </VsCodeLabel>
      <h3 :class="$style.about__subheading">New feature of {{ nowDateString }}</h3>
      <ul :class="$style.about__list">
        <li>
          <span :class="$style['about__clickable-marker']" @click="handleClickFeatureTitle"> Change color theme </span>
          &nbsp;-&nbsp; By clicking the gear icon in the lower left, you can change the color theme of the site.
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" module>
.about {
  width: 100%;
  height: 100%;
  font-size: 0.9rem;
  &__wrapper {
    width: 65%;
    height: 100%;
    margin: 0 auto;
  }
  &__marker {
    color: #3790f6;
    font-weight: bold;
  }
  &__link {
    cursor: pointer;
    text-decoration: underline #fff;
  }
  &__clickable-marker {
    @extend .about__marker;
    @extend .about__link;
  }
  &__sentence {
    width: 100%;
    line-height: 1.5;
    margin-bottom: 2rem;
  }
  &__list {
    list-style: disc outside;
    padding-left: 2.5rem;
    margin: 0 auto 2rem;
    li {
      line-height: 1.5;
      margin-bottom: 0.5rem;
    }
  }
  &__subheading {
    width: 100%;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
}

@include media-query($bp-tablet) {
  .about {
    &__wrapper {
      width: 85%;
    }
    &__subheading {
      margin-bottom: 2rem;
    }
  }
}

@include media-query($bp-mobile) {
  .about {
    &__sentence {
      font-size: 0.8rem;
    }
    &__list {
      font-size: 0.9rem;
    }
    &__subheading {
      font-size: 1.5rem;
    }
  }
}
</style>
