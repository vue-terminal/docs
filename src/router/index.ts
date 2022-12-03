import { createMemoryHistory, createRouter } from 'vue-router'
import Home from '@/components/Home.vue'
import Intro from '@/components/Intro.vue'
import Repl from '@/components/Repl.vue'

export const router = createRouter({
  history: createMemoryHistory(),
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

