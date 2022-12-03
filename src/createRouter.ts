import { createRouter } from '@/router'
import Home from '@/components/Home.vue'
import Components from '@/components/Components.vue'
import Repl from '@/components/Repl.vue'

export default createRouter({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/components',
      component: Components,
    },
    {
      path: '/repl',
      component: Repl,
    },
  ],
})
