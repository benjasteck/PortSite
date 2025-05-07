import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import observeShow from './directives/observeShow.js'
import router from './rotuer'

const app = createApp(App)

app.directive('observe-show', observeShow)
app.use(router)

app.mount('#app')
