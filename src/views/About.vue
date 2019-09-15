<template>
  <section>
    <div class="about-box">
      <h3>My Profile</h3>
      <table>
        <tr v-for="data in dataSet" :key="data.th">
          <th>{{ data.th }}</th>
          <td>
            <a v-bind:href="data.link" target="_blank">{{ data.td }}</a>
          </td>
        </tr>
      </table>
    </div>
    <a class="move" href="#" v-on:click.prevent="$router.push({ path: '/' }) ">
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
        {th: 'Name', td: '竹内 琢人（Takeuchi Takuto）', link: null},
        {th: 'Occupation', td: '大学生', link: null},
        {th: 'University', td: '法政大学 経済学部 国際経済学科', link: null},
        {th: 'Qiita', td: '▶ @yzli_taku', link: 'https://qiita.com/yzli_taku'},
        {th: 'Github', td: '▶ taku-hu', link: 'https://github.com/taku-hu'},
        {th: 'Mail', td: 'hs.tm.ec.a.tt@gmail.com', link: null}
      ],
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/_fragments.scss';

.about-box {
  @include section-box("ABOUT");
  @include center-styling;
  width: 80%;
  h3 {
    @include section-heading;
  }
  table {
    border-collapse: separate;
    border-spacing: 30px 50px;
  }
  th {
    padding: 10px;
    font-weight: bold;
    background: #000;
    color: #fff;
  }
  td {
    padding: 10px;
    border-bottom: 2px solid #000;
  }
} //about-box;

@media screen and (max-width: 896px) {
  .about-box {
    table {
      tr {
        display: flex;
        flex-direction: column;
        &:not(:last-child) {
          margin-bottom: 20px;
        }
        td {
          border: 1px solid #000000;
        }
      } //tr
    }
  }
} //@media
</style>
