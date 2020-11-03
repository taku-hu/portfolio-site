<template>
  <section :class="$style.about">
    <div :class="$style.about__wrapper">
      <CommonPageHeading>
        {{ now.month }} {{ now.day }}{{ suffix }} {{ now.year }} version
      </CommonPageHeading>
      <p :class="$style.about__sentence">
        Welcome to the {{ now.month }} {{ now.day }}{{ suffix }} {{ now.year }} release of My Portfolio Site. There are a lot of information in this version that we hope you will like, some of the key highlights include:
      </p>
      <ul :class="$style.about__list">
        <li
          v-for="data in profileData"
          :key="data.title"
        >
          <span :class="$style.about__marker">{{ data.title }}</span>
          &nbsp;-&nbsp;
          <template v-if="data.link">
            <a
              :class="$style.about__link"
              :href="data.link"
              target="_blank"
            >
              <fa :icon="icons.faMousePointer" />
              {{ data.information }}
            </a>
          </template>
          <template v-else>
            {{ data.information }}
          </template>
        </li>
      </ul>
      <CommonLabel>
        If you'd like to know more about me go to
        <a
          :class="$style['about__clickable-marker']"
          href="https://www.wantedly.com/users/124833407"
          target="_blank"
        >
          Profile
        </a>
        on
        <a
          :class="$style['about__clickable-marker']"
          href="https://github.com/taku-hu"
          target="_blank"
        >
          GitHub
        </a>
      </CommonLabel>
      <h3 :class="$style.about__subheading">
        New feature of {{ now.month }} {{ now.day }}{{ suffix }}
        {{ now.year }}
      </h3>
      <ul :class="$style.about__list">
        <li>
          <span
            :class="$style['about__clickable-marker']"
            @click="changeTheme"
          >
            Change color theme
          </span>
          &nbsp;-&nbsp; By clicking the gear icon in the lower left, you can
          change the color theme of the site.
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import { faMousePointer } from '@fortawesome/free-solid-svg-icons'

import CommonLabel from '@/components/common/CommonLabel.vue';
import CommonPageHeading from '@/components/common/CommonPageHeading.vue';

type ProfileType = {
  title: string;
  information: string;
  link: string;
}

export default defineComponent({
  components: {
    CommonLabel,
    CommonPageHeading
  },
  setup(_, { emit }) {
    const profileData = reactive([
      {
        title: 'Name',
        information: 'Takeuchi Takuto',
        link: ''
      },
      {
        title: 'Background',
        information: 'Bachelor of International Economics / Hosei University',
        link: ''
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
        information:
          'Takeuchi Takuto',
        link: 'https://www.wantedly.com/users/124833407'
      },
      {
        title: 'Contact',
        information: 'hs.tm.ec.a.tt@gmail.com',
        link: ''
      }
    ]);

    const icons = {
      faMousePointer
    }

    const now = reactive({
      year: 0,
      month: '',
      day: 0
    });
    const suffix = computed(() => {
      const date = now.day;
      if([1, 21, 31].includes(date)) {
        return 'st';
      } else if ([2, 22].includes(date)) {
        return 'nd';
      } else if ([3, 23].includes(date)) {
        return 'rd';
      } else {
        return 'th';
      }
    });
    const setDate = () => {
      const monthNames = [
        'Janualy',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ];
      const date = new Date();
      now.year = date.getFullYear();
      now.month = monthNames[date.getMonth()];
      now.day = date.getDate();
    };
    setDate();

    const changeTheme = () => {
      emit('change-theme');
    };

    return {
      profileData,
      icons,
      now,
      suffix,
      changeTheme
    };
  }
});
</script>

<style lang="scss" module>
@import '@/assets/styles/_parts.scss';

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
} //about

//メディアクエリ
@include media-query($bp-tablet) {
  .about {
    &__wrapper {
      width: 85%;
    }
    &__heading {
      margin-bottom: 2rem;
    }
    &__bar {
      margin-bottom: 3rem;
    }
    &__subheading {
      margin-bottom: 2rem;
    }
  }
}

@include media-query($bp-mobile) {
  .about {
    &__heading {
      font-size: 2rem;
    }
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
