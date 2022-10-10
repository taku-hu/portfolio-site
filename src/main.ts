import 'reset-css'
import 'typeface-open-sans'
import 'typeface-orbitron'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'

import App from '@/App.vue'
import { router } from '@/router'

const app = createApp(App)

app.use(router)
app.component('FaIcon', FontAwesomeIcon)
router.isReady().then(() => app.mount('#app'))
