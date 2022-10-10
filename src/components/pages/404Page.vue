<script setup lang="ts">
import VsCodeHeader from '@/components/molecules/VsCodeHeader.vue'
import VsCodeLabel from '@/components/molecules/VsCodeLabel.vue'
</script>

<template>
  <section :class="$style.error">
    <div :class="$style.error__wrapper">
      <VsCodeHeader> 404 Not Found. </VsCodeHeader>
      <p :class="$style.error__sentence">
        申し訳ありません、お探しのページは見つかりませんでした。<br />
        ページは削除されたか、移動された可能性があります。
      </p>
      <VsCodeLabel>
        <router-link :class="$style.error__link" to="/"> ホームに戻る </router-link>
      </VsCodeLabel>
    </div>
  </section>
</template>

<style lang="scss" module>
.error {
  width: 100%;
  height: 100%;
  font-size: 0.9rem;
  &__wrapper {
    width: 65%;
    height: 100%;
    margin: 0 auto;
  }
  &__sentence {
    width: 100%;
    line-height: 1.5;
    margin-bottom: 2rem;
  }
  &__link {
    color: #3790f6;
    font-weight: bold;
    text-decoration: underline #fff;
    cursor: pointer;
  }
} // .about

@include media-query($bp-tablet) {
  .error {
    &__wrapper {
      width: 85%;
    }
  }
}

@include media-query($bp-mobile) {
  .about {
    &__sentence {
      font-size: 0.8rem;
    }
  }
}
</style>
