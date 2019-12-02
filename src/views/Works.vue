<template>
  <section>
    <div class="works">
      <h3 class="works__heading">My Works</h3>
      <div class="works__wrapper">
        <div
          class="work-box"
          v-for="work in works"
          :key="work.name"
          ontouchstart=""
        >
          <div class="work-box__face1" :style="{ backgroundColor: work.color }">
            <span v-html="work.icon"></span>
            <h3>{{ work.name }}</h3>
            <a :href="work.link" target="_blank">
              <i class="fas fa-angle-right"></i>&nbsp;Details
            </a>
          </div>
          <div class="work-box__face2">
            <p v-html="work.description"></p>
          </div>
        </div>
      </div>
    </div>
    <router-link class="move-button" to="/" >
      <i class="fas fa-angle-left"></i>&nbsp;BACK
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'works',
  data() {
    return {
      works: [
        {
          name: 'ポートフォリオサイト',
          icon: '<i class="fas fa-address-card"></i>',
          color: '#3340cb',
          link: 'https://github.com/taku-hu/my-portfolio-site',
          description: `
            私が初めにVue.jsで作ったもので、私のポートフォリオサイトです。<br>
            コーディングに慣れたりVue.jsへの理解を深めるため、UIパーツ等はあえて積極的に車輪の再発明を行いました。
          `
        },
        {
          name: 'タイピングアプリ',
          icon: '<i class="far fa-keyboard"></i>',
          color: '#2196f3',
          link: 'https://github.com/taku-hu/my-typing-app',
          description: `
            私が2番目にVue.jsで作ったものです。<br>
            以前の開発の経験を生かしてより多くの機能を盛り込みました。
          `
        },
        {
          name: 'オンライン本棚',
          icon: '<i class="fas fa-book"></i>',
          color: '#21b1aa',
          link: 'https://github.com/taku-hu/my-online-bookshelf',
          description: `
            私が3番目にVue.jsで作ったもので、Firebaseでログインとデータベースの機能を盛り込みました。<br>
            そして状態管理に初めてVuexを使いました。まだまだではありますが、開発を通してVue.jsでのより実践的なコーディングが学べたと感じています。
          `
        },
        {
          name: '過去の残骸達',
          icon: '<i class="fas fa-pager"></i>',
          color: '#333',
          link: 'https://github.com/taku-hu',
          description: `
            学習し始めの時に作ったLPやサイトの模写、簡単なアプリ達です。<br>
            成果物としては無価値ですが思い出として...
          `
        }
      ] //works
    }; //return
  }
};
</script>

<style lang="scss">
@import '@/assets/styles/_fragments.scss';

.works {
  @include section-box('WORKS');
  @include center-styling;
  &__heading {
    @include section-heading;
  }
  &__wrapper {
    @include center-styling($wrap: wrap, $direction: row);
    .work-box {
      position: relative;
      width: 20rem;
      height: 15rem;
      margin: 7.5rem 1rem;
      &:hover .work-box__face1 {
        transform: translateY(-7.5rem);
        a {
          display: block;
        }
      }
      &:hover .work-box__face2 {
        transform: translateY(7.5rem);
      }
      &__face1 {
        @include center-styling;
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        color: #fff;
        transition: 0.5s;
        span {
          font-size: 5rem;
          margin-bottom: 1rem;
        }
        h3 {
          font-weight: bold;
          text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
          margin-bottom: 1rem;
        }
        a {
          display: none;
          width: 100px;
          height: 40px;
          line-height: 40px;
          border: 1px solid #000;
          color: #000;
          background-color: #fff;
          &:hover {
            color: #fff;
            background-color: #000;
          }
        }
      } //__face1
      &__face2 {
        @include center-styling;
        position: absolute;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        box-shadow: 1px 1px 6px 0px #b2b2b2;
        text-align: left;
        transition: 0.5s;
        padding: 0.5rem;
        p {
          line-height: 1.5;
          word-break: break-all;
        }
      } //__face2
    } //.work-box
  } //.works-wrapper
} //.works
</style>