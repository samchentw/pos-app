import { createApp } from 'vue'
import App from './App.vue'

import { routers } from './router'

let app = createApp(App)

app.use(routers);
app.mount('#app')
