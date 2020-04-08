import 'reset-css';
import '@fortawesome/fontawesome-free/css/all.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const swalOptions = {
  confirmButtonColor: '#0d7acc',
};

Vue.use(VueSweetalert2, swalOptions);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');