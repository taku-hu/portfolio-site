<template>
  <div class="accordion-wrapper">
    <div
      class="accordion"
      v-for="skill in inheritedSkills"
      v-bind:key="skill.name"
      v-bind:style="{
        border: '8px' + ' ' + 'solid' + ' ' + skill.bgColor,
        backgroundColor: skill.bgColor
      }"
    >
      <div
        class="label"
        v-on:click="toggleAccordion(skill)"
        v-bind:style="{ backgroundColor: skill.bgColor }"
      >
        <h2>
          {{ skill.name }}&nbsp;
          <i
            class="fa fa-angle-down label-icon"
            v-bind:class="{ rotate: skill.show }"
          ></i>
        </h2>
      </div>
      <!-- label -->
      <transition name="slide">
        <div class="box" v-show="skill.show">
          <img v-bind:src="require(`@/assets/images/${skill.name}.png`)" />
          <p v-html="skill.description"></p>
        </div>
      </transition>
    </div>
    <!-- accordion -->
  </div>
  <!-- accordion-wrapper -->
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
    toggleAccordion: function(skill) {
      this.inheritedSkills.find(
        inheritedSkills => inheritedSkills.name === skill.name
      ).show = !this.inheritedSkills.find(
        inheritedSkills => inheritedSkills.name === skill.name
      ).show;
    }
  },
  beforeUpdate: function() {
    const checkTrue = this.inheritedSkills.every(value => value.show === true);
    const checkFalse = this.inheritedSkills.every(
      value => value.show === false
    );
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

.accordion-wrapper {
  @include center-styling(wrap, row, space-around, flex-start);
  width: 100%;
  .accordion {
    width: 30rem;
    border-radius: 10px;
    box-shadow: 1px 1px 6px 0px #b2b2b2;
    margin-bottom: 1rem;
    .label {
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
        .label-icon {
          font-size: 1.5rem;
          transition: 0.3s;
          &.rotate {
            transform: rotateX(180deg);
            transition: 0.3s;
          } // 回転アニメーション
        }
      }
    } //.header
    .box {
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
        text-align-last: left;
        word-break: break-all;
      }
    } //.box
  } //.accordion
} // accordion-wrapper

// 開閉アニメーション
.slide-enter-active {
  transition-duration: 0.3s;
  transition-timing-function: ease-in;
}
.slide-leave-active {
  transition-duration: 0.3s;
}
.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
}
.slide-enter,
.slide-leave-to {
  max-height: 0;
  overflow: hidden;
}
</style>