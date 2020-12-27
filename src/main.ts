import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'reset-css'
import 'typeface-open-sans'
import 'typeface-orbitron'

const app = createApp(App)
app.component('fa', FontAwesomeIcon)
app.use(router)
router.isReady().then(() => app.mount('#app'))
