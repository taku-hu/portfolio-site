<template>
  <div class="accordions">
    <div
      class="accordion"
      v-for="skill in inheritedSkills"
      :key="skill.name"
      :style="{
        border: `8px solid ${skill.bgColor}`,
        backgroundColor: skill.bgColor
      }"
    >
      <div
        class="accordion__label"
        :style="{ backgroundColor: skill.bgColor }"
        @click="toggleAccordion(skill)"
      >
        <h2>
          {{ skill.name }}
          <i class="fa fa-angle-down" :class="{ rotate: skill.show }" />
        </h2>
      </div>
      <transition name="slide">
        <div v-show="skill.show" class="accordion__contents">
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

.accordions {
  @include center-styling(wrap, row, space-around, flex-start);
  width: 100%;
  .accordion {
    width: 30rem;
    border-radius: 10px;
    box-shadow: 1px 1px 6px 0px #b2b2b2;
    margin-bottom: 1rem;
    &__label {
      width: 100%;
      height: 2rem;
      line-height: 2rem;
      color: #fff;
      text-shadow: 1px 2px 3px #1c1c1c;
      cursor: pointer;
      h2 {
        font-weight: bold;
        font-size: 1.5rem;
        box-sizing: border-box;
        .fa-angle-down {
          font-size: 1.5rem;
          transition: 0.3s;
          &.rotate {
            transform: rotateX(180deg);
          } // 回転アニメーション
        }
      }
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
  } //.accordion
} // accordions

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