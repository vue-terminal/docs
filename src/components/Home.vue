<script setup lang="ts">
import Logo from './Logo.vue'
import { useRouter } from '@/router'
const router = useRouter()
onKeyData(['s', 'S'], () => {
  router.push('/components')
})
</script>

<template>
  <div
    :width="80"
    :height="20"
    align-items="center"
    justify-content="center"
    border-style="round"
    flex-direction="column"
    title="Vue TermUI"
  >
    <Logo />
    <div
      :height="3"
      align-items="center"
      justify-content="center"
    >
      <span>The Modern Terminal UI Framework</span>
    </div>

    <div
      :width="20"
      :height="3"
      align-items="center"
      justify-content="center"
      border-style="single"
      border-color="yellow"
    >
      <span color="yellow">Get Started (S)</span>
    </div>
  </div>
</template>
