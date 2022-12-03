import { createApp } from 'vue-termui'
import App from './App.vue'
// import router from './createRouter'
import { router } from './new-router'

const app = createApp(App)
app.use(router)
app.mount()

router.push('/')

process.on('exit', () => {
  app.unmount()
})
