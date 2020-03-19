<template>
  <main class="about">
    <h3 class="about__heading">My Profile</h3>
    <table class="about__list">
      <tr v-for="data in ProfileData" :key="data.th">
        <th>{{ data.title }}</th>
        <td v-html="data.information" @click="jumpToLink(data)" :class="{ linked: data.link }"></td>
      </tr>
    </table>
  </main>
</template>

<script>
export default {
  data() {
    return {
      ProfileData: [
        { 
          title: 'Name',
          information: '竹内 琢人（Takeuchi Takuto）',
          link: null
        },
        { 
          title: 'Background',
          information: '法政大学 経済学部 国際経済学科 卒業',
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
          information: '<i class="fas fa-mouse-pointer"></i>&nbsp;竹内琢人', 
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