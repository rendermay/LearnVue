import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import LoginVue from './Login.vue'

const app = createApp(App)

// app.component('MyLogin', LoginVue)

app.use(router)

app.mount('#app')
