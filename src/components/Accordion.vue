<template>
  <section class="skills__accordions">
    <div
      class="accordion"
      v-for="skill in inheritedSkills"
      :key="skill.name"
      @click="toggleAccordion(skill)"
    >
      <div class="accordion__label">
        <div class="skill">
          <h2 class="skill__name">
            <i class="fa fa-angle-down" :class="{ 'fa-angle-down--rotate': skill.open }" />
            {{ skill.name }}
          </h2>
          <span class="skill__graph">
            <span class="skill__bar" :style="{backgroundColor: skill.bgColor, width: `${skill.value}%`}"></span>
          </span>
          <span class="skill__value">{{ skill.value }}%</span>
        </div>
      </div>
      <transition name="slide">
        <div class="accordion__contents" @click.stop v-show="skill.open">
          <img :src="require(`@/assets/images/${skill.name}.png`)" />
          <p v-html="skill.details"></p>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    inheritedSkills: Array,
  },
  methods: {
    toggleAccordion(skill) {
      const selected = this.inheritedSkills.find(inheritedSkills => inheritedSkills.name === skill.name);
      selected.open = !selected.open;
    }
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/_fragments.scss';

.skills__accordions {
  @include center-styling(wrap, row, space-around, flex-start);
  width: 100%;
  .accordion {
    position: relative;
    width: 30rem;
    color: #000;
    background-color: #0D7ACC;
    border-radius: 10px;
    padding: 0.5rem;
    margin-bottom: 2rem;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 1.5rem;
      background-color: rgba(255, 255, 255, 0.1);
      cursor: pointer;
    }
    &__label {
      width: 100%;
      height: 2rem;
      line-height: 2rem;
      color: #fff;;
      text-shadow: 1px 2px 3px #1c1c1c;
      cursor: pointer;
      .skill {
        @include center-styling($direction: row);
        width: 100%;
        height: 100%;
        &__name {
          width: 30%;
          font-weight: bold;
          text-align: right;
          .fa-angle-down {
            transition: 0.3s;
            &--rotate {
              transform: rotateX(180deg);
              transition: 0.5s;
            } // 回転アニメーション
          }
        } //__name
        &__graph {
          position: relative;
          width: 50%;
          height: 50%;
          background-color: #ccc;
          border-radius: 1rem;
          overflow: hidden;
          margin: 0 0.5rem;
        }
        &__bar {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          border-radius: 1rem 0 0 1rem;
          animation: rise 4s ease-in-out;
        }
      } //.skill
    } //__label
    &__contents {
      @include center-styling($direction: row, $justify: space-around);
      width: 100%;
      box-sizing: border-box;
      background-color: #fff;
      border-radius: 0 0 5px 5px;
      padding: 0.5rem;
      img {
        display: block;
        width: 20%;
      }
      p {
        width: 70%;
        line-height: 2;
        text-align: left;
        word-break: break-all;
      }
    } //__contents
  } //.accordion
} // .skills__accordions

// skillバーの上昇アニメーション
@keyframes rise {
  0% {
    width: 0;
  }
}

// 開閉アニメーション
.slide-enter-active {
  overflow: hidden;
  transition: 0.5s ease-in;
}
.slide-leave-active {
  overflow: hidden;
  transition: 0.3s ease-out;
}
.slide-enter-to,
.slide-leave {
  max-height: 300px;
}
.slide-enter,
.slide-leave-to {
  max-height: 0;
}

//メディアクエリ
@include media-query($bp-mobile) {
  .skills__accordions {
    .accordion {
      &__label {
        font-size: 0.8rem;
      }
    }
  }
}
</style>