<template>
  <h2 :class="$style['vscode-header']">
    <slot></slot>
  </h2>
</template>

<style lang="scss" module>
.vscode-header {
  font-size: 2.5rem;
  font-family: 'Open Sans', sans-serif;
  border-bottom: 2px solid #4f505a;
  padding: 3rem 0 1rem;
  margin-bottom: 1.5rem;
}

@include media-query($bp-tablet) {
  .vscode-header {
    font-size: 2rem;
  }
}
</style>
