import { createMemoryHistory, createRouter } from 'vue-router'
import Home from '@/components/Home.vue'
import Nav from '@/components/Nav.vue'
import Repl from '@/components/Repl.vue'

export const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/nav',
      name: 'nav',
      component: Nav,
    },
    {
      path: '/repl',
      name: 'repl',
      component: Repl,
    },
  ],
})

