import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Router dosyasını çağırıyoruz

const app = createApp(App)
app.use(router) // Router'ı uygulamaya bağla
app.mount('#app')