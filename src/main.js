import './style.css'

import { createApp, watch } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VueCountdown from '@chenfengyuan/vue-countdown'

const app = createApp(App)
const pinia = createPinia()

app.component(VueCountdown.name, VueCountdown)

app.use(router)
app.use(pinia)

watch(
  pinia.state,
  (state) => {
    localStorage.setItem('candidate', JSON.stringify(state.candidate))
  },
  { deep: true }
)

app.mount('#app')
