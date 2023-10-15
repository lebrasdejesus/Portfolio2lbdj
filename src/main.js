import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Clipboard from "v-clipboard"

const app = createApp(App)

app.use(router)
app.use(Clipboard)

app.mount('#app')
