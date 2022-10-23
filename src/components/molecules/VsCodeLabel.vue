<template>
  <div :class="$style['vscode-label']">
    <slot></slot>
  </div>
</template>

<style lang="scss" module>
.vscode-label {
  width: 100%;
  font-size: 1rem;
  background-color: #31333d;
  border-left: 5px solid $base-blue;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
}
</style>
