import { createRouter } from './router'
import Home from '@/components/Home.vue'

export default createRouter({
  routes: [
    {
      path: '/',
      component: Home,
    },
  ],
})
