<template>
  <section>
    <div class="works-box">
      <h3>My Works</h3>
      <div class="works-wrapper">
        <div class="flip-card"
        v-for="work in works"
        v-bind:key="work.name">
          <div class="flip-card-inner">
            <div class="flip-card-front"
            v-bind:style="{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url('${publicPath}${work.image}')` }">
              <h4>
                <span v-html="work.icon"></span>
                {{ work.name }}
              </h4>
              <p>{{ work.description }}</p>
            </div>
            <div class="flip-card-back"
            v-bind:style="{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url('${publicPath}${work.image}')` }">
                <a v-bind:href="work.github"
                   target=”_blank”
                   class="move">
                  Details&nbsp;<i class="fas fa-angle-right"></i>
                </a>
            </div>
          </div>
        </div>
      </div> <!-- works-wrapper -->
    </div>
    <a class="move" href="#" v-on:click.prevent="$router.push({ path: '/' }) ">
      <i class="fas fa-angle-left"></i>&nbsp;BACK
    </a>
  </section>
</template>

<script>
export default {
  name: 'works',
  data() {
    return {
      publicPath: process.env.BASE_URL,
      works: [
        {name: 'ポートフォリオサイト', icon: '<i class="fas fa-pager"></i>', image: 'images/portfolio.png', github: 'https://teratail.com/',
        description: `
        私が初めにVue.jsで作ったもので、私のポートフォリオサイトです。
        コーディングに慣れたりVue.jsへの理解を深めるため、UIパーツ等はあえて積極的に車輪の再発明を行いました。
        `
        },
        {name: 'タイピングアプリ', icon: '<i class="far fa-keyboard"></i>', image: 'images/typing-app.png', github: 'https://teratail.com/',
        description: `
        私が2番目にVue.jsで作ったものです。以前の開発の経験を生かしてより多くの機能を盛り込みました。
        `
        },
        {name: 'オンライン本棚', icon: '<i class="fas fa-book"></i>', image: 'images/book-manager.png', github: 'https://teratail.com/',
        description: `
        私が3番目にVue.jsで作ったもので、Firebaseでのログイン機能とデータベースの機能を盛り込みました。
        そして状態管理に初めてVuexを使いました。完璧と言うには程遠いですが、開発を通してVue.jsでのより実践的なコーディングが学べたと感じています。
        `
        },
        {name: '過去の残骸達', icon: '<i class="fas fa-globe"></i>', image: 'images/garbage.png', github: 'https://teratail.com/',
        description: `
        学習し始めの時に作ったLPやサイトの模写、簡単なアプリ達です。成果物としては無価値ですが思い出として...
        `
        }
      ] //works
    } //return
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/_mixin.scss';
.works-box {
  @include section-box("WORKS");
  @include center-styling;
  width: 80%;
  h3 {
    @include section-heading;
  }
  .works-wrapper {
    @include center-styling;
    flex-direction: row;
    flex-wrap: wrap;
    .flip-card {
      width: 300px;
      height: 300px;
      perspective: 1000px;
      margin: 20px;
      &:hover .flip-card-inner {
       transform: rotateY(180deg);
      }
      .flip-card-inner {
        @include center-styling;
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        .flip-card-front {
          position: absolute;
          z-index: 2;
          width: 100%;
          height: 100%;
          box-shadow: 1px 1px 6px 0px #b2b2b2;
          box-sizing: border-box;
          backface-visibility: hidden;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          padding: 1.5rem 1rem 0;
          h4 {
            margin-bottom: 20px;
          }
          p {
            font-size: 15px;
            line-height: 2;
          }
        }
        .flip-card-back {
          @include center-styling;
          position: absolute;
          z-index: 1;
          width: 100%;
          height: 100%;
          box-shadow: 1px 1px 6px 0px #b2b2b2;
          backface-visibility: hidden;
          transform: rotateY(180deg);
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          a {
            box-shadow: 1px 1px 6px 0px #b2b2b2;
          }
        }
      } //.flip-card-inner
    } //.flip-card
  } //.works-wrapper
} //.works-box
</style>
