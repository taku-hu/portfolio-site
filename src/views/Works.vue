<!--v-bind:style="{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),url('${publicPath}${work.image}')` }"-->
 <template>
  <section>
    <div class="works-box">
      <h3>My Works</h3>
      <div class="works-wrapper">
        <div class="card"
         v-for="work in works"
         v-bind:key="work.name">
          <div class="face face1">
            <span v-html="work.icon"></span>
            <h4>{{ work.name }}</h4>
            <a v-bind:href="work.link" target="_blank">
              <i class="fas fa-angle-right"></i>
              Details
            </a>
          </div>
          <div class="face face2">
            <p v-html="work.description"></p>
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
        {name: 'ポートフォリオサイト', icon: '<i class="fas fa-address-card"></i>', color: '#3340cb', link: 'https://github.com/taku-hu/my-portfolio-site',
        description: `
        私が初めにVue.jsで作ったもので、私のポートフォリオサイトです。<br>
        コーディングに慣れたりVue.jsへの理解を深めるため、UIパーツ等はあえて積極的に車輪の再発明を行いました。
        `
        },
        {name: 'タイピングアプリ', icon: '<i class="far fa-keyboard"></i>', color: '#2196f3', link: 'https://github.com/taku-hu/my-typing-app',
        description: `
        私が2番目にVue.jsで作ったものです。<br>
        以前の開発の経験を生かしてより多くの機能を盛り込みました。
        `
        },
        {name: 'オンライン本棚', icon: '<i class="fas fa-book"></i>', color: '#21b1aa', link: 'https://github.com/taku-hu/my-book-manager',
        description: `
        私が3番目にVue.jsで作ったもので、Firebaseでログインとデータベースの機能を盛り込みました。<br>
        そして状態管理に初めてVuexを使いました。まだまだではありますが、開発を通してVue.jsでのより実践的なコーディングが学べたと感じています。
        `
        },
        {name: '過去の残骸達', icon: '<i class="fas fa-pager"></i>', color: '#333', link: 'https://github.com/taku-hu',
        description: `
        学習し始めの時に作ったLPやサイトの模写、簡単なアプリ達です。<br>
        成果物としては無価値ですが思い出として...
        `
        }
      ], //works
      colorHolder: ''
    } //return
  }
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
    .card {
      position: relative;
      width: 350px;
      height: 230px;
      margin: 85px 10px;
      &:hover .face.face1 {
        background-color: #ff0057;
        transform: translateY(-115px);
        span {
          margin-bottom: 10px;
        }
        h4 {
          margin-bottom: 15px;
        }
        a {
          display: block;
        }
      }
      &:hover .face.face2 {
        transform: translateY(115px);
      }
    } //.card
    .face {
      width: 100%;
      height: 100%;
      transition: 0.5s;
      &.face1 {
        @include center-styling;
        position: absolute;
        z-index: 1;
        color: #fff;
        background-color: #333;
        span {
          font-size: 5rem;
        }
        h4 {
          font-weight: bold;
          text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
        }
        a {
          display: none;
          width: 100px;
          height: 40px;
          font-size: 0.9rem;
          line-height: 40px;
          background-color: #fff;
          color: #000;
          &:hover {
            color: #fff;
            background-color: #000;
          }
        }
      } //.face1
      &.face2 {
        @include center-styling;
        position: absolute;
        box-sizing: border-box;
        text-align: left;
        padding: 5px;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
        p {
          word-break: break-all;
          line-height: 1.5;
        }
      } //.face2
    } //.face
  } //.works-wrapper
} //.works-box
</style>
