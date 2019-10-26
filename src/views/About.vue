<template>
  <section>
    <div class="about-box">
      <h3>My Profile</h3>
      <table>
        <tr v-for="data in dataSet" :key="data.th">
          <th>{{ data.th }}</th>
          <td>
            <a v-bind:href="data.link" target="_blank" v-html="data.td"></a>
          </td>
        </tr>
      </table>
    </div>
    <a class="move" href="#" v-on:click.prevent="$router.push({ path: '/' })">
      <i class="fas fa-angle-left"></i>&nbsp;BACK
    </a>
  </section>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      dataSet: [
        { th: 'Name', td: '竹内 琢人（Takeuchi Takuto）', link: null },
        { th: 'Occupation', td: '大学生', link: null },
        { th: 'University', td: '法政大学 経済学部 国際経済学科', link: null },
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
        { th: 'Mail', td: 'hs.tm.ec.a.tt@gmail.com', link: null }
      ]
    };
  }
};
</script>

<style lang="scss">
@import '@/assets/styles/_fragments.scss';

.about-box {
  @include section-box('ABOUT');
  @include center-styling;
  h3 {
    @include section-heading;
  }
  table {
    border-spacing: 2rem 4rem;
    border-collapse: separate;
  }
  th {
    padding: 1rem 0.5rem;
    font-weight: bold;
    color: #fff;
    background-color: #000;
  }
  td {
    padding: 1rem;
    border-bottom: 2px solid #000;
  }
} //about-box;

@include media-query($bp-tablet) {
  .about-box {
    table {
      tr {
        @include center-styling($align: stretch);
        &:not(:last-child) {
          margin-bottom: 1.5rem;
        }
        td {
          border: 1px solid #000;
        }
      } //tr
    }
  }
}
</style>