<template>
  <section class="about">
    <h3 class="about__heading">My Profile</h3>
    <table class="about__list">
      <tr v-for="data in dataSet" :key="data.th">
        <th>{{ data.th }}</th>
        <td v-html="data.td" @click="jumpToLink(data)" :class="{ linked: data.link }"></td>
      </tr>
    </table>
  </section>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      dataSet: [
        { 
          th: 'Name',
          td: '竹内 琢人（Takeuchi Takuto）',
          link: null
        },
        { 
          th: 'Occupation',
          td: '大学生',
          link: null
        },
        { 
          th: 'University',
          td: '法政大学 経済学部 国際経済学科',
          link: null
        },
        {
          th: 'Qiita',
          td: '<i class="fas fa-mouse-pointer"></i>&nbsp;taku-hu',
          link: 'https://qiita.com/taku-hu'
        },
        {
          th: 'Github',
          td: '<i class="fas fa-mouse-pointer"></i>&nbsp;taku-hu',
          link: 'https://github.com/taku-hu'
        },
        { 
          th: 'Mail',
          td: 'hs.tm.ec.a.tt@gmail.com', 
          link: null 
        }
      ]
    };
  },
  methods: {
    jumpToLink(data) {
      if(!data.link) return;

      window.open(data.link, '_blank');
    }
  }
};
</script>

<style lang="scss">
@import '@/assets/styles/_fragments.scss';

.about {
  @include section-box('ABOUT');
  @include center-styling;
  &__heading {
    @include section-heading;
  }
  &__list {
    border-spacing: 2rem 4rem;
    border-collapse: separate;
    th {
      color: #fff;
      background-color: #000;
      font-weight: bold;
      padding: 1rem 0.5rem;
    }
    td {
      border-bottom: 2px solid #000;
      padding: 1rem;
      &.linked {
        color: #0000EE;
        cursor: pointer;
      }
    }
  } //__list
} //about

//メディアクエリ
@include media-query($bp-tablet) {
  .about {
    &__list {
      tr {
        @include center-styling($align: stretch);
        &:not(:last-child) {
          margin-bottom: 1.5rem;
        }
        td {
          border: 1px solid #000;
        }
      }
    } //__list
  } //.about
}
</style>