import { createApp } from 'vue-termui'
import App from './App.vue'
import router from './createRouter'

const app = createApp(App)
app.use(router)
app.mount()

process.on('exit', () => {
  app.unmount()
})
