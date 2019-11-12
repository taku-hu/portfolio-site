<template>
  <div id="app">
    <transition name="switch" mode="out-in">
      <div v-if="!titleCall" key="title" class="title-call">
        <div class="background">
          <p v-for="(sentence, index) in bgSentences" v-bind:key="index">
            <span v-bind:data-text="sentence">{{ sentence }}</span>
          </p>
        </div>
        <h1>{{ title }}</h1>
      </div>
      <div v-else key="contents" class="contents">
        <header-component v-bind:inheritedSentences="bgSentences" />
        <transition name="switch">
          <router-view />
        </transition>
        <footer-component />
      </div>
    </transition>
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue';
import FooterComponent from '@/components/Footer.vue';
import { mobileBrowser } from '@/mixins/mobileBrowser.js';

export default {
  name: 'App',
  mixins: [mobileBrowser],
  created() {
    window.onload = async () => {
      await Promise.all(this.addTypingMovement('Welcome to my website!'));
      setTimeout(() => {
        this.titleCall = true;
      }, 200);
    }; //タイトル文字を一文字ずつ表示
  },
  data() {
    return {
      title: '',
      titleCall: false,
      bgSentences: [
        "setLoginUser(state, user) { state.login_user = user; }, deleteLoginUser(state) { state.login_user = null; state.books = []; }, toggleDrawer(state) { state.active = !state.active; }",
        "changeEditMessage(state, {target, type}) { state.editType = type; state.editOperation = operation; }, addNewBook(state, {id, newBook}) {	newBook.id = id state.book.push(newBook); }",
        "import 'reset-css' import '@fortawesome/fontawesome-free/css/all.css' import Vue from 'vue'; import App from './App.vue'; import router from './router'; import store from './store'",
        "setTitle: function(result) { this.changeRegistrationMethod() this.newBook.title = result.volumeInfo.title if (result.volumeInfo.authors) { this.newBook.authors = result.volumeInfo}",
        "document.documentElement.style.setProperty('--vh', `${vh}px`) window.addEventListener('resize', () => { let vh = window.innerHeight * 0.1 document.documentElement.style.setProperty",
        "if (e.key === this.word[this.location]) { this.locationNum++ if (this.location === this.word.length) { this.word = this.words[Math.floor(Math.random() * this.words.length)] return}",
        "firebase.auth().onAuthStateChanged(user => { if (user) { this.setLoginUser(user); this.fetchBooks(); this.$swal({ type: 'success', title: 'Complete!', showCloseButton: true,}); });",
        "axios.get(`https://www.googleapis.com/`, { params: { q: `intitle:${this.keywords}`} }).then(response => { if (!this.keyword) { return; } else { this.results = response.data.items }",
        "startTimer() { const timeLimit = this.startTimer + this.time - Date.now(); this.time = (timeLimit / 1000).toFixed(2); this.timerLabel = setTimeout(() => { this.startTimer(); }, 10)",
        "setLoginUser(state, user) { state.login_user = user; }, deleteLoginUser(state) { state.login_user = null; state.books = []; }, toggleDrawer(state) { state.active = !state.active; }",
        "changeEditMessage(state, {target, type}) { state.editType = type; state.editOperation = operation; }, addNewBook(state, {id, newBook}) {	newBook.id = id state.book.push(newBook); }",
        "import 'reset-css' import '@fortawesome/fontawesome-free/css/all.css' import Vue from 'vue'; import App from './App.vue'; import router from './router'; import store from './store'",
        "setTitle: function(result) { this.changeRegistrationMethod() this.newBook.title = result.volumeInfo.title if (result.volumeInfo.authors) { this.newBook.authors = result.volumeInfo}",
        "document.documentElement.style.setProperty('--vh', `${vh}px`) window.addEventListener('resize', () => { let vh = window.innerHeight * 0.1 document.documentElement.style.setProperty",
        "if (e.key === this.word[this.location]) { this.locationNum++ if (this.location === this.word.length) { this.word = this.words[Math.floor(Math.random() * this.words.length)] return}",
        "firebase.auth().onAuthStateChanged(user => { if (user) { this.setLoginUser(user); this.fetchBooks(); this.$swal({ type: 'success', title: 'Complete!', showCloseButton: true,}); });",
        "axios.get(`https://www.googleapis.com/`, { params: { q: `intitle:${this.keywords}`} }).then(response => { if (!this.keyword) { return; } else { this.results = response.data.items }",
        "startTimer() { const timeLimit = this.startTimer + this.time - Date.now(); this.time = (timeLimit / 1000).toFixed(2); this.timerLabel = setTimeout(() => { this.startTimer(); }, 10)",
        "setLoginUser(state, user) { state.login_user = user; }, deleteLoginUser(state) { state.login_user = null; state.books = []; }, toggleDrawer(state) { state.active = !state.active; }",
        "changeEditMessage(state, {target, type}) { state.editType = type; state.editOperation = operation; }, addNewBook(state, {id, newBook}) {	newBook.id = id state.book.push(newBook); }",
        "import 'reset-css' import '@fortawesome/fontawesome-free/css/all.css' import Vue from 'vue'; import App from './App.vue'; import router from './router'; import store from './store'",
        "setTitle: function(result) { this.changeRegistrationMethod() this.newBook.title = result.volumeInfo.title if (result.volumeInfo.authors) { this.newBook.authors = result.volumeInfo}",
        "document.documentElement.style.setProperty('--vh', `${vh}px`) window.addEventListener('resize', () => { let vh = window.innerHeight * 0.1 document.documentElement.style.setProperty",
        "if (e.key === this.word[this.location]) { this.locationNum++ if (this.location === this.word.length) { this.word = this.words[Math.floor(Math.random() * this.words.length)] return}",
        "firebase.auth().onAuthStateChanged(user => { if (user) { this.setLoginUser(user); this.fetchBooks(); this.$swal({ type: 'success', title: 'Complete!', showCloseButton: true,}); });",
        "axios.get(`https://www.googleapis.com/`, { params: { q: `intitle:${this.keywords}`} }).then(response => { if (!this.keyword) { return; } else { this.results = response.data.items }",
        "startTimer() { const timeLimit = this.startTimer + this.time - Date.now(); this.time = (timeLimit / 1000).toFixed(2); this.timerLabel = setTimeout(() => { this.startTimer(); }, 10)",
        "setLoginUser(state, user) { state.login_user = user; }, deleteLoginUser(state) { state.login_user = null; state.books = []; }, toggleDrawer(state) { state.active = !state.active; }",
        "changeEditMessage(state, {target, type}) { state.editType = type; state.editOperation = operation; }, addNewBook(state, {id, newBook}) {	newBook.id = id state.book.push(newBook); }",
        "import 'reset-css' import '@fortawesome/fontawesome-free/css/all.css' import Vue from 'vue'; import App from './App.vue'; import router from './router'; import store from './store'",
        "setTitle: function(result) { this.changeRegistrationMethod() this.newBook.title = result.volumeInfo.title if (result.volumeInfo.authors) { this.newBook.authors = result.volumeInfo}",
        "document.documentElement.style.setProperty('--vh', `${vh}px`) window.addEventListener('resize', () => { let vh = window.innerHeight * 0.1 document.documentElement.style.setProperty",
        "if (e.key === this.word[this.location]) { this.locationNum++ if (this.location === this.word.length) { this.word = this.words[Math.floor(Math.random() * this.words.length)] return}",
        "firebase.auth().onAuthStateChanged(user => { if (user) { this.setLoginUser(user); this.fetchBooks(); this.$swal({ type: 'success', title: 'Complete!', showCloseButton: true,}); });",
        "axios.get(`https://www.googleapis.com/`, { params: { q: `intitle:${this.keywords}`} }).then(response => { if (!this.keyword) { return; } else { this.results = response.data.items }",
        "startTimer() { const timeLimit = this.startTimer + this.time - Date.now(); this.time = (timeLimit / 1000).toFixed(2); this.timerLabel = setTimeout(() => { this.startTimer(); }, 10)",
        "setLoginUser(state, user) { state.login_user = user; }, deleteLoginUser(state) { state.login_user = null; state.books = []; }, toggleDrawer(state) { state.active = !state.active; }",
        "changeEditMessage(state, {target, type}) { state.editType = type; state.editOperation = operation; }, addNewBook(state, {id, newBook}) {	newBook.id = id state.book.push(newBook); }",
        "import 'reset-css' import '@fortawesome/fontawesome-free/css/all.css' import Vue from 'vue'; import App from './App.vue'; import router from './router'; import store from './store'",
        "setTitle: function(result) { this.changeRegistrationMethod() this.newBook.title = result.volumeInfo.title if (result.volumeInfo.authors) { this.newBook.authors = result.volumeInfo}",
        "document.documentElement.style.setProperty('--vh', `${vh}px`) window.addEventListener('resize', () => { let vh = window.innerHeight * 0.1 document.documentElement.style.setProperty",
        "if (e.key === this.word[this.location]) { this.locationNum++ if (this.location === this.word.length) { this.word = this.words[Math.floor(Math.random() * this.words.length)] return}",
        "firebase.auth().onAuthStateChanged(user => { if (user) { this.setLoginUser(user); this.fetchBooks(); this.$swal({ type: 'success', title: 'Complete!', showCloseButton: true,}); });",
        "axios.get(`https://www.googleapis.com/`, { params: { q: `intitle:${this.keywords}`} }).then(response => { if (!this.keyword) { return; } else { this.results = response.data.items }",
        "startTimer() { const timeLimit = this.startTimer + this.time - Date.now(); this.time = (timeLimit / 1000).toFixed(2); this.timerLabel = setTimeout(() => { this.startTimer(); }, 10)"
      ],
    };
  },
  methods: {
    addTypingMovement(word) {
      return [...word].map((char, i) => {
        return new Promise(resolve => {
          setTimeout(() => {
            this.title += char;
            resolve();
          }, i * 200);
        });
      }); //Promiseオブジェクトを値に持つ配列をreturn
    }
  },
  components: {
    HeaderComponent,
    FooterComponent
  }
};
</script>

<style lang="scss">
@import '@/assets/styles/_fragments.scss';

html {
  font-size: calc(62.5% + 0.5vw);
}
body {
  font-family: 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3', 'メイリオ',
    Meiryo, 'ＭＳ Ｐゴシック', sans-serif;
}
#app {
  @include center-styling;
  text-align: center;
  overflow: hidden;
  .title-call {
    @include center-styling;
    position: relative;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    background-color: rgb(15, 54, 167);
    background-image: linear-gradient(90deg, rgba(15, 54, 167, 1) 40%, rgba(0, 163, 254, 1) 100%);
    overflow: hidden;
    .background {
      position: absolute;
      top: 0;
      left: 0;
      white-space: nowrap;
      p {
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.3);
        transition: 0.5s;
        overflow: hidden;
        border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        user-select: none;
        span {
          position: relative;
          display: inline-block;
          padding: 5px 0 5px 5px;
          letter-spacing: 1px;
          animation: slide 20s linear infinite;
          &:before {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: -100%;
            padding: 5px 0 5px 5px;
          }
        }
        &:nth-child(even) span {
          animation: slide-reverse 20s linear infinite;
        }
      } //p
    } //.background
    h1 {
      @include txt-neon-shadow;
      font-family: 'Orbitron', sans-serif;
      font-size: 5rem;
      font-weight: bold;
      color: #fff;
    }
  } //.title-call
  .contents {
    @include center-styling;
    width: 100%;
    section {
      @include center-styling;
      width: 100%;
    }
    a {
      text-decoration: none;
    }
  } //.contents
}

//背景用文字スライドアニメーション
@keyframes slide {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes slide-reverse {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}

//ページ遷移アニメーション
.switch-enter-active {
  transition: 1.5s;
}
.switch-enter-to,
.switch-leave {
  opacity: 1;
}
.switch-enter,
.switch-leave-to {
  opacity: 0;
}
</style>