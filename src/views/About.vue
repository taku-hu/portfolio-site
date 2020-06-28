<template>
  <section class="about">
    <div class="about__wrapper">
      <h2 class="about__heading">
        {{ state.now.month }}
        {{ state.now.day }}{{ suffix }}
        {{ state.now.year }}
        version
      </h2>
      <p class="about__sentence">
        Welcome to the {{ state.now.month }} {{ state.now.day }}{{ suffix }} {{ state.now.year }} release of My Portfolio Site. There are a lot of information in this version that we hope you will like, some of the key highlights include:
      </p>
      <ul class="about__list">
        <li v-for="data in state.profileData" :key="data.title">
          <span class="about__marker">{{ data.title }}</span>
          &nbsp;-&nbsp;
          <a
            :class="{ about__link: data.link }"
            @click="openLink(data)"
            v-html="data.information"
          ></a>
        </li>
      </ul>
      <p class="about__bar">
        If you'd like to know more about me go to
        <a
          class="about__clickable-marker"
          href="https://www.wantedly.com/users/124833407"
          target="_blank"
        >
          Profile
        </a>
        on
        <a 
          class="about__clickable-marker"
          href="https://github.com/taku-hu"
          target="_blank"
        >
          GitHub
        </a>.
      </p>
      <h3 class="about__subheading">
        New feature of {{ state.now.month }} {{ state.now.day }}{{ suffix }}
        {{ state.now.year }}
      </h3>
      <ul class="about__list">
        <li>
          <span class="about__clickable-marker" @click="changeTheme">
            Change color theme
          </span>
          &nbsp;-&nbsp; By clicking the gear icon in the lower left, you can
          change the color theme of the site.
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { defineComponent, reactive, computed } from 'vue';

export default defineComponent({
  setup(_, context) {
    const state = reactive({
      now: {
        year: '',
        month: '',
        day: ''
      },
      profileData: [
        {
          title: 'Name',
          information: 'Takeuchi Takuto',
          link: null
        },
        {
          title: 'Background',
          information: 'Bachelor of International Economics / Hosei University',
          link: null
        },
        {
          title: 'Qiita',
          information: '<i class="fas fa-mouse-pointer"></i>&nbsp;taku-hu',
          link: 'https://qiita.com/taku-hu'
        },
        {
          title: 'Github',
          information: '<i class="fas fa-mouse-pointer"></i>&nbsp;taku-hu',
          link: 'https://github.com/taku-hu'
        },
        {
          title: 'wantedly',
          information:
            '<i class="fas fa-mouse-pointer"></i>&nbsp;Takeuchi Takuto',
          link: 'https://www.wantedly.com/users/124833407'
        },
        {
          title: 'Contact',
          information: 'hs.tm.ec.a.tt@gmail.com',
          link: null
        }
      ]
    });
    const suffix = computed(() => {
      const date = state.now.day;
      if ([1, 21, 31].includes(date)) {
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
      state.now.year = date.getFullYear();
      state.now.month = monthNames[date.getMonth()];
      state.now.day = date.getDate();
    };
    const changeTheme = () => {
      context.emit('change-theme');
    };
    const openLink = data => {
      if (!data.link) return;
      open(data.link, '_blank');
    };

    setDate();

    return {
      state,
      suffix,
      changeTheme,
      openLink
    };
  }
});
</script>

<style lang="scss">
@import '@/assets/styles/_parts.scss';

.about {
  width: 100%;
  height: 100%;
  font-size: 0.9rem;
  font-family: 'Open Sans', sans-serif;
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
  &__heading {
    width: 100%;
    font-size: 2.5rem;
    border-bottom: 2px solid #4f505a;
    padding: 3rem 0 1rem;
    margin-bottom: 1.5rem;
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
  &__bar {
    width: 100%;
    font-size: 1rem;
    background-color: #31333d;
    border-left: 5px solid $base-blue;
    box-sizing: border-box;
    padding: 0.5rem 1rem;
    margin-bottom: 2rem;
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
