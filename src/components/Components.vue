<script setup lang="ts">
import { useRouter } from '@/router'
import { components } from '@/constants'
const router = useRouter()
const n = ref(0)
onKeyData(['ArrowLeft', 'ArrowUp'], () => {
  n.value = (n.value - 1 + components.length) % components.length
})
onKeyData(['ArrowRight', 'ArrowDown'], () => {
  n.value = (n.value + 1) % components.length
})

onKeyData(['Enter'], () => {
  router.push({
    path: '/repl',
    params: components[n.value],
  })
})
</script>

<template>
  <div
    :width="80"
    :height="20"
    align-items="center"
    justify-content="center"
    flex-direction="column"
    border-style="single"
    title="Vue TermUI Components"
  >
    <div
      v-for="(item, index) in components"
      :key="index"
      :width="15"
      :height="3"
      border-style="single"
      :border-color="index === n ? 'yellow' : 'white'"
      align-items="center"
      justify-content="center"
    >
      <span :color="index === n ? 'yellow' : 'white'">{{ item.name }}</span>
    </div>
  </div>
</template>
