<template>
  <section>
    <div class="home">
      <div class="home__title">
        <h1>
          Takuto Takeuchi's<br />
          Portfolio Site
        </h1>
      </div>
      <p>
        私のポートフォリオサイトにお越しいただき、ありがとうございます.<br />
        独学でフロントエンドエンジニアを目指す大学生です.<br />
        どうぞ、よろしくお願いいたします。
      </p>
    </div>
    <a href="#" class="move-button">
      MORE&nbsp;<i class="fas fa-angle-right"></i>
    </a>
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
      position: absolute;
      content: "";
      width: 20px;
      height: 50px;
      box-sizing: border-box;
    }
    &:before {
      top: 0;
      left: 0;
      border-top: 1px solid #555;
      border-left: 1px solid #555;
    }
    &:after {
      bottom: 0;
      right: 0;
      border-bottom: 1px solid #555;
      border-right: 1px solid #555;
    }
    h1 {
      font-family: "Orbitron", sans-serif;
      font-size: 2.5rem;
      font-weight: bold;
      line-height: 2;
      text-shadow: 1px 2px 2px #1d1d1d;
    }
  } //__title
  p {
    width: 50%;
    line-height: 4;
    letter-spacing: 0.3rem;
    color: $base-black;
    text-align: left;
  }
} //home

//全コンポーネント共通・セクション下ボタン
.move-button {
  display: block;
  width: 130px;
  height: 50px;
  border: solid 1px #000;
  font-size: 16px;
  line-height: 50px;
  color: #000;
  background-color: #fff;
  margin: 40px;
  transition: 0.3s;
  &:hover {
    background-color: #000;
    color: #fff;
  }
}
</style>