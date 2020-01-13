import 'reset-css';
import '@fortawesome/fontawesome-free/css/all.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VModal from 'vue-js-modal';
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo);
Vue.use(VModal);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');