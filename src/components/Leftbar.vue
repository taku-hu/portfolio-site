<template>
  <div class="left-bar">
    <div class="left-bar__icons" v-for="menuIcon in menuIcons" :key="menuIcon">
      <span v-html="menuIcon"></span>
    </div>
    <div class="left-bar__settings">
      <i class="fas fa-cog"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuIcons: [
        '<i class="far fa-copy"></i>',
        '<i class="fas fa-search"></i>',
        '<i class="fas fa-code-branch"></i>',
        '<i class="fab fa-git-alt"></i>',
        '<i class="fas fa-bug"></i>',
        '<i class="fas fa-th-large"></i>'
      ],
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/_fragments.scss';

.left-bar {
  position: relative;
  width: 3rem;
  height: 100%;
  font-size: 1.5rem;
  background-color: #343746;
  &__icons {
    @include center-styling;
    width: 100%;
    height: 3.5rem;
    color: #536694;
    &:first-child {
      position: relative;
      color: #fff;
      background-color: #3C3D51;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 2px;
        height: 100%;
        background-color: #9E5B8B;
      }
    }
    .fa-search {
      transform: rotateY(180deg);
    }
  }
  &__settings {
    @include center-styling;
    width: 100%;
    height: 3.5rem;
    position: absolute;
    left: 0;
    bottom: 0;
    color: #536694;
    &:hover {
      color: #fff;
      animation: spin 1.5s linear infinite;
    }
  }
}

@keyframes spin {
	100% {
    transform: rotate(360deg);
  }
}

//メディアクエリ
@include media-query($bp-mobile) {
  .left-bar {
    display: none;
  }
}
</style>