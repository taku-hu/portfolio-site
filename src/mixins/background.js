export const background = {
  created() {
    for(let i = 0; i <= 90; i++) {
      this.bgSentences.push({item: this.sentences[i % 9]});
    }

    this.bgSentences.forEach((sentence, index) => {
      sentence.id = ++index;
    });
  },
  data() {
    return {
      sentences: [
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
      bgSentences: [],
    };
  }
};