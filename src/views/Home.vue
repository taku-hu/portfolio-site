<template>
  <section>
    <div class="home-box">
      <div class="title">
          <h1>
            Takuto Takeuchi's<br>
            Portfolio Site
          </h1>
      </div>
      <p>
        私のポートフォリオサイトにお越しいただき、ありがとうございます.<br>
        独学でフロントエンドエンジニアを目指す大学生です.<br>
        どうぞ、よろしくお願いいたします。
      </p>
    </div>
    <a class="move" href="#">MORE&nbsp;<i class="fas fa-angle-right"></i></a>
  </section>
</template>

<script>
export default {
  name: 'home',
}
</script>

<style lang="scss">
@import '@/assets/styles/_fragments.scss';

section {
  @include center-styling;
  width: 100%;
}
.home-box {
  @include section-box("HOME");
  @include center-styling;
  width: 80%;
  .title {
    position: relative;
    width: 50%;
    padding: 3rem 0;
    margin-bottom: 80px;
    box-sizing: border-box;
    @include center-styling;
    &::before,
    &::after {
      position: absolute;
      content: '';
      width: 20px;
      height: 50px;
      box-sizing: border-box;
    }
    &::before {
      top: 0;
      left: 0;
      border-top: 1px solid #555;
      border-left: 1px solid #555;
    }
    &::after {
      bottom: 0;
      right: 0;
      border-bottom: 1px solid #555;
      border-right: 1px solid #555;
    }
    h1 {
      font-family: 'Orbitron', sans-serif;
      font-size: 2.5rem;
      font-weight: bold;
      line-height: 5rem;
      text-shadow: 1px 2px 2px #1d1d1d;
    }
  } //.title
  p {
    width: 50%;
    line-height: 400%;
    letter-spacing: 0.3rem;
    font-size: 1rem;
    color: #2a2a2a;
    text-align: left;
  }
} //top-box


a.move {
  display: block;
  margin: 40px;
  border: solid 1px #000;
  width: 150px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  background-color: #fff;
  color: #000;
  &:hover {
    background-color: #000;
    color: #fff;
    transition: 0.2s;
  }
}
</style>