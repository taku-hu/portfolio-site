<template>
  <section class="home">
    <div class="home__title">
      <h1>
        Takuto Takeuchi's<br>
        Portfolio Site
      </h1>
    </div>
    <p class="home__discription">
      私のポートフォリオサイトにお越しいただき、ありがとうございます。<br>
      独学でフロントエンドエンジニアを目指す大学生です。<br>
      どうぞ、よろしくお願いいたします。
    </p>
  </section>
</template>

<script>
export default {
  name: "home"
};
</script>

<style lang="scss">
@import "@/assets/styles/_fragments.scss";

.home {
  @include section-box("HOME");
  @include center-styling;
  &__title {
    @include center-styling;
    position: relative;
    width: 50%;
    padding: 3rem 0;
    margin-bottom: 5rem;
    box-sizing: border-box;
    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 20px;
      height: 50px;
      box-sizing: border-box;
    }
    &:before {
      top: 0;
      left: 0;
      border-top: 3px solid #555;
      border-left: 3px solid #555;
    }
    &:after {
      bottom: 0;
      right: 0;
      border-bottom: 3px solid #555;
      border-right: 3px solid #555;
    }
    h1 {
      font-family: "Orbitron", sans-serif;
      font-size: 2.5rem;
      font-weight: bold;
      line-height: 2;
      text-shadow: 1px 2px 2px #ccc;
    }
  } //__title
  &__discription {
    display: inline-block;
    line-height: 4;
    letter-spacing: 0.3rem;
    text-align: left;
  }
} //home

//メディアクエリ
@include media-query($bp-mobile) {
  .home {
    &__discription {
      width: 80%;
    }
  }
}
</style>