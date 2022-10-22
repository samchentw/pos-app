import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { routers } from './router'

let app = createApp(App)
const pinia = createPinia()

app.use(routers);
app.use(pinia)
app.mount('#app')
