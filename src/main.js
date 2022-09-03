import { createApp } from 'vue'
import App from './App.vue'
let app = createApp(App)
import store from './store.js'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

app.use(store).mount('#app')

