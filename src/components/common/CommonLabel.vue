<template>
  <div :class="$style['common-label']">
    <slot />
  </div>
</template>

<style lang="scss" module>
@import '@/assets/styles/_parts.scss';

.common-label {
  width: 100%;
  font-size: 1rem;
  background-color: #31333d;
  border-left: 5px solid $base-blue;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
}
</style>
