<template>
  <div class="contact-modal" v-if="isFormOpen">
    <iframe
      class="contact-modal__body"
      src="https://hstmatt.typeform.com/to/aX0pXSfH"
      frameborder="0"
      allow="camera; microphone; autoplay; encrypted-media;"
    />
    <i class="contact-modal__icon fas fa-times" @click="toggleContactForm" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    isFormOpen: Boolean,
  },
  setup(_, context) {
    const toggleContactForm = () => {
      context.emit('toggle-contact-form');
    };

    return {
      toggleContactForm
    };
  }
});
</script>

<style lang="scss">
.contact-modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  &__body {
    position: relative;
    width: 100%;
    height: 100%;
  }
  &__icon {
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-size: 2.5rem;
    color: black;
    cursor: pointer;
    z-index: 1;
  }
}
</style>
