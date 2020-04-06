<template>
  <div class="explorer">
    <div class="explorer__bar">EXPLORER</div>
    <div class="explorer__main-accordion" v-for="accordion in accordions" :key="accordion.labelName">
      <div class="label" @click="toggleExplorer(accordion)">
        <i class="fas fa-angle-down" :class="{close : !accordion.open}" ></i>
        {{ accordion.labelName }}
      </div>
      <transition name="open">
        <div class="body" v-show="accordion.open">
          <a class="link" :href="accordion.link" >
            <span v-html="accordion.icon"></span>
            {{ accordion.item }}
          </a>
        </div>
      </transition>
    </div>

    <div class="explorer__main-accordion">
      <div class="label" @click="pageActive = !pageActive">
        <i class="fas fa-angle-down" :class="{close : !pageActive}"></i>
        pages
      </div>
      <div class="body" v-show="pageActive">
        <nav class="link">
          <ul>
            <li v-for="link in links" :key="link.name">
              <span v-html="link.icon"></span>
              <router-link :to="link.path">
                {{ link.name.toLowerCase() }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accordions: [
        {
          labelName: 'OPEN EDITORS',
          icon: '<i class="fab fa-vuejs"></i>',
          item: 'portfolio-site',
          link: null,
          open: true
        },
        {
          labelName: 'blog',
          icon: '<i class="fab fa-quora"></i>',
          item: 'Qiita',
          link: 'https://qiita.com/taku-hu',
          open: true
        },
      ],
      pageActive: true,
      links: [
        {icon: '<i class="fas fa-home">', name: 'HOME', path: '/'},
        {icon: '<i class="fas fa-user-circle">', name: 'ABOUT', path: '/about'},
        {icon: '<i class="fas fa-wrench"></i>', name: 'SKILLS', path: '/skills'},
        {icon: '<i class="far fa-address-card"></i>', name: 'WORKS', path: '/works'}
      ],
    };
  },
  methods: {
    toggleExplorer(accordion) {
      const selected = this.accordions.find(accordions => accordions.labelName === accordion.labelName);
      selected.open = !selected.open;
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/_fragments.scss';

.explorer {
  width: 10rem;
  height: 100%;
  background-color: #21222C;
  font-size: 0.8rem;
  padding: 0 2px;
  &__bar {
    height: 2.5rem;
    line-height: 2.5rem;
    padding-left: 1rem;
  }
  &__main-accordion {
    margin-bottom: 2px;
    .label {
      height: 1.5rem;
      line-height: 1.5rem;
      background-color: #282A35;
      padding-left: 0.5rem;
      .fa-angle-down {
        transition: 0.2s;
        &.close {
          transform: rotate(-90deg);
        }
      }
    }
    .body {
      height: 1.5rem;
      line-height: 1.5rem;
      padding-left: 1.5rem;
      .fa-vuejs {
        color: #41B883;
      }
      .fa-quora {
        color: #55C500;
      }
      .fa-file {
        color: #0D79CC;
      }
    }
  }
  .link {
    .fa-home {
      color: #ff4500;
    }
    .fa-user-circle {
      color: #0d79cc;
    }
    .fa-wrench {
      color: #ffd700;
    }
    .fa-address-card {
      color: #32cd32;
    }
  }
} //.explorer

// 開閉アニメーション
.open-enter-active,
.open-leave-active {
  overflow: hidden;
  transition: 0.3s ease-in-out;
}
.open-enter-to,
.open-leave {
  max-height: 3rem;
}
.open-enter,
.open-leave-to {
  max-height: 0;
}
</style>