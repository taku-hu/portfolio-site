<template>
  <h2 class="common-page-heading">
    <slot />
  </h2>
</template>

<style lang="scss">
@import '@/assets/styles/_parts.scss';

.common-page-heading {
  width: 100%;
  font-size: 2.5rem;
  border-bottom: 2px solid #4f505a;
  padding: 3rem 0 1rem;
  margin-bottom: 1.5rem;
}
</style>