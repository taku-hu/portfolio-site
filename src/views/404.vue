<template>
  <section :class="$style.error">
    <div :class="$style.error__wrapper">
      <CommonPageHeading>
        404 Not Found.
      </CommonPageHeading>
      <p :class="$style.error__sentence">
        申し訳ありません、お探しのページは見つかりませんでした。<br>
        ページは削除されたか、移動された可能性があります。
      </p>
      <CommonLabel>
        <router-link :class="$style.error__link" to="/">ホームに戻る</router-link>
      </CommonLabel>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import CommonLabel from '@/components/common/CommonLabel.vue'
import CommonPageHeading from '@/components/common/CommonPageHeading.vue'

export default defineComponent({
  components: {
    CommonLabel,
    CommonPageHeading
  }
})
</script>

<style lang="scss" module>
@import '@/assets/styles/_parts.scss';

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

// メディアクエリ
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
