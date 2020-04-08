<template>
  <section class="about">
    <table class="about__list">
      <template v-for="data in ProfileData">
        <tr class="title" :key="data.title">
          <th class="title__name">{{ data.title }}</th>
        </tr>
        <tr class="information" :key="data.infromation">
          <td 
            class="information__data"
            :class="{'information__data--linked' : data.link}"
            v-html="data.information"
            @click="jumpToLink(data)"
            >
          </td>
        </tr>
      </template>
    </table>
  </section>
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
  @include center-styling;
  width: 100%;
  height: 100%;
  text-align: center;
  &__list {
    .title {
      &__name {
        background-color: $base-blue;
        font-weight: bold;
        padding: 1rem 0.5rem;
      }
    }
    .information {
      &__data {
        padding: 1rem;
        &--linked {
          color: $base-blue;
          cursor: pointer;
        }
      }
    }
  } //__list
} //about
</style>