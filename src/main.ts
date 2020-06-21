import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'

import 'reset-css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'typeface-open-sans';
import 'typeface-orbitron';

const app = createApp(App);
app.use(router).use(store);
router.isReady().then(() => app.mount('#app'));