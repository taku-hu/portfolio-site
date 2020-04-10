<template>
  <section class="about">
    <div class="about__wrapper">
      <h2 class="about__heading">
        {{ month }}
        {{ year }}
        (version 1.00)
      </h2>
      <p class="about__sentence">
        Welcome to the {{ month }} {{ year }} release of My Portfolio Site. There are a lot of information in this version that we hope you will like, some of the key highlights include:
      </p>
      <ul class="about__list">
        <li v-for="data in profileData" :key="data.title">
          <span class="about__marker">{{ data.title }}</span>
          &nbsp;-&nbsp;
          <a
            :href="data.link"
            target="_blnak"
            v-html="data.information"
          >
          </a>
        </li>
      </ul>
      <p class="about__bar">
        If you'd like to know more about me go to
        <a class="about__clickable-marker" href="https://github.com/taku-hu/profile/blob/master/README.md">Profile</a>
        on
        <a class="about__clickable-marker" href="https://github.com/taku-hu">GitHub</a>. 
      </p>
      <h3 class="about__subheading">
        New feature of {{ month }} {{ year }}
      </h3>
      <ul class="about__list">
        <li>
          <span class="about__clickable-marker" @click="iconClick">
            Change color theme
          </span>
          &nbsp;-&nbsp;
          By clicking the gear icon in the lower left, you can change the color theme of the site.
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  created() {
    const monthNames = ['Janualy', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const now = new Date();
    this.year = now.getFullYear();
    this.month = monthNames[now.getMonth()]; 
  },
  data() {
    return {
      year: '',
      month: '',
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
          information: '<i class="fas fa-mouse-pointer"></i>&nbsp;Takeuchi Takuto', 
          link: 'https://www.wantedly.com/users/124833407'
        },
        { 
          title: 'Contact',
          information: 'hs.tm.ec.a.tt@gmail.com', 
          link: null 
        }
      ]
    };
  },
  methods: {
    iconClick() {
      document.querySelector('.left-bar__settings').click();
    }
  }
};
</script>

<style lang="scss">
@import '@/assets/styles/_fragments.scss';

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
  &__clickable-marker {
    @extend .about__marker;
    text-decoration: underline #fff;
    cursor: pointer;
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