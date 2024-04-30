import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = 'https://mannoffgod.000webhostapp.com/api';

const app = createApp(App)

app.use(router)

app.mount('#app')
