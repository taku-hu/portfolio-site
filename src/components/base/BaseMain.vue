<template>
  <main
    :class="[
      $style.code,
      {
        [$style['code--theme-changed']]: isThemeChanged,
        [$style['code--collapsed']]: isCollapsed,
        [$style['code--close-explorer']]: !isOpenExplorer
      }
    ]"
    @animationend="closeEditor"
  >
    <div
      :class="[
        $style.code__tag,
        {
          [$style['code__tag--theme-changed']]: isThemeChanged
        }
      ]"
    >
      <fa
        :class="$style['tag-icon--vue']"
        :icon="icons.faVuejs"
      />
      {{ currentPage }}.vue
      <span @click="collapseParts">
      
        <fa
          :class="$style['tag-icon--times']"
          :icon="icons.faTimes"
        />
      </span>
    </div>
    <div
      :class="[
        $style.code__field,
        {
          [$style['code__field--theme-changed']]: isThemeChanged
        }
      ]"
    >
      <slot />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faVuejs } from '@fortawesome/free-brands-svg-icons'
import router from '@/router';

export default defineComponent({
  props: {
    isThemeChanged: Boolean,
    isCollapsed: Boolean,
    isOpenExplorer: Boolean,
  },
  setup(_, { emit }) {
    const currentPage = computed(() => router.currentRoute.value.name)

    const icons = {
      faVuejs,
      faTimes
    }

    const collapseParts = () => {
      emit('collapse-parts')
    };
    const closeEditor = () => {
      emit('close-editor')
    };

    return {
      currentPage,
      icons,
      collapseParts,
      closeEditor
    };
  }
});
</script>

<style lang="scss" module>
@import '@/assets/styles/_parts.scss';

.code {
  flex-grow: 1;
  width: calc(100% - 12rem);
  background-color: #191a21;
  box-shadow: 0 -1px 2px -1px #000;
  &--theme-changed {
    background-color: #2d2d2d;
  }
  &--collapsed {
    @include animated-hinge(top, left);
  }
  &--close-explorer {
    width: calc(100% - 3rem);
  }
  &__tag {
    position: relative;
    display: inline-block;
    height: 2.3rem;
    line-height: 2.3rem;
    font-size: 0.8rem;
    background-color: #282a35;
    text-align: center;
    user-select: none;
    padding: 0 0.6rem;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #9e5b8b;
    }
    &--theme-changed {
      background-color: #1e1e1e;
      &:before {
        display: none;
      }
    }
    .tag-icon {
      &--vue {
        font-size: 1.1rem;
        color: #41b883;
        margin-right: 0.2rem;
      }
      &--times {
        cursor: pointer;
        margin-left: 0.6rem;
      }
    }
  } // __tag
  &__field {
    width: 100%;
    height: calc(100% - 2.3rem);
    background-color: #282a35;
    overflow: auto;
    &--theme-changed {
      background-color: #1e1e1e;
    }
  }
} // .code

// メディアクエリ
@include media-query($bp-mobile) {
  .code {
    width: calc(100% - 9rem);
    // スクロールバーのカスタマイズ
    ::-webkit-scrollbar {
      width: 0.5rem;
    }
  }
}
</style>
