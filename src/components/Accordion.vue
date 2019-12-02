<template>
  <div class="accordion-body">
    <div
      class="skill-accordion"
      v-for="skill in inheritedSkills"
      :key="skill.name"
      @click="toggleAccordion(skill)"
    >
      <div class="skill-accordion__label">
        <div class="skill-lebel">
          <h2 class="skill-lebel__name">
            <i class="fa fa-angle-down" :class="{ rotate: skill.show }" />
            {{ skill.name }}
          </h2>
          <span class="skill-lebel__percent">
            <span :style="{backgroundColor: skill.bgColor, width: `${skill.value}%`}"></span>
          </span>
          <span class="skill-lebel__value">{{ skill.value }}%</span>
        </div>
      </div>
      <transition name="slide">
        <div class="skill-accordion__contents" @click.stop v-show="skill.show">
          <img :src="require(`@/assets/images/${skill.name}.png`)" />
          <p v-html="skill.description"></p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccordionComponent",
  props: {
    inheritedSkills: Array,
    inheritedMessage: String
  },
  data() {
    return {
      inherited_message: this.inheritedMessage
    };
  },
  methods: {
    toggleAccordion(skill) {
      this.inheritedSkills.find(
        inheritedSkills => inheritedSkills.name === skill.name
      ).show = 
      !this.inheritedSkills.find(
        inheritedSkills => inheritedSkills.name === skill.name
      ).show;
    }
  },
  beforeUpdate() {
    const checkTrue = this.inheritedSkills.every(value => value.show);
    const checkFalse = this.inheritedSkills.every(value => !value.show);
    if (checkTrue) {
      this.inherited_message = "Close all";
    } else if (checkFalse) {
      this.inherited_message = "Show all";
    }
    this.$emit("update:inheritedMessage", this.inherited_message);
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/_fragments.scss";

.accordion-body {
  @include center-styling(wrap, row, space-around, flex-start);
  width: 100%;
  .skill-accordion {
    position: relative;
    width: 30rem;
    background-color: #222;
    border-radius: 10px;
    box-shadow: 1px 1px 6px 0px #b2b2b2;
    padding: 0.5rem;
    margin-bottom: 1rem;
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
      .skill-lebel {
        @include center-styling($direction: row);
        width: 100%;
        height: 100%;
        font-size: 0.9rem;
        &__name {
          width: 30%;
          font-weight: bold;
          text-align: right;
          .fa-angle-down {
            transition: 0.3s;
            &.rotate {
              transform: rotateX(180deg);
            } // 回転アニメーション
          }
        } //__name
        &__percent {
          position: relative;
          width: 50%;
          height: 50%;
          background-color: #ccc;
          border-radius: 1rem;
          overflow: hidden;
          margin: 0 0.5rem;
          span {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            animation: rise 4s ease-in-out;
          }
        }
      } //.skill-lebel
    } //__label
    &__contents {
      @include center-styling($direction: row, $justify: space-around);
      width: 100%;
      box-sizing: border-box;
      background-color: #fff;
      border-radius: 0 0 5px 5px;
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
  } //.skill-accordion
} // accordion-body

// skillバーの上昇アニメーション
@keyframes rise {
  0% {
    width: 0;
  }
}

// 開閉アニメーション
.slide-enter-active {
  transition: 0.5s ease-in;
}
.slide-leave-active {
  transition: 0.5s;
}
.slide-enter-to,
.slide-leave {
  max-height: 300px;
  overflow: hidden;
}
.slide-enter,
.slide-leave-to {
  max-height: 0;
  overflow: hidden;
}
</style>