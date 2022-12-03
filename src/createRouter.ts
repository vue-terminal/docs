import { createRouter } from '@/router'
import Home from '@/components/Home.vue'
import Intro from '@/components/Intro.vue'
import Repl from '@/components/Repl.vue'

export default createRouter({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/intro',
      component: Intro,
    },
    {
      path: '/repl',
      component: Repl,
    },
  ],
})
