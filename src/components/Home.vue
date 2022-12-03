<script setup lang="ts">
import { useRouter } from 'vue-router'
import Logo from './Logo.vue'
const router = useRouter()
onKeyData(['Enter'], () => {
  router.push('/intro')
})
</script>

<template>
  <div
    :width="100"
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
      <Link
        href="https://vue-termui.dev/"
        :fallback="false"
        :inverse="false"
      >
        The Modern Terminal UI Framework
      </Link>
    </div>

    <div
      :width="20"
      :height="3"
      align-items="center"
      justify-content="center"
      border-style="single"
      border-color="yellow"
    >
      <span color="yellow">Get Started</span>
    </div>
  </div>
</template>
