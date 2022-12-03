<script setup lang="ts">
import { useRouter } from 'vue-router'
import { components, composables } from '@/constants'
const router = useRouter()
const n = ref(0)
const total = composables.length + components.length

onKeyData(['Backspace', 'Delete'], () => {
  router.push('/')
})

onKeyData(['ArrowLeft'], () => {
  n.value = (n.value - 1 + total) % total
})
onKeyData(['ArrowRight', 'Tab'], () => {
  n.value = (n.value + 1) % total
})

onKeyData(['ArrowUp'], () => {
  n.value = 0
})

onKeyData(['ArrowDown'], () => {
  n.value = components.length
})

onKeyData(['Enter'], () => {
  router.push({
    path: '/repl',
    query: { ...[...components, ...composables][n.value] },
  })
})
</script>

<template>
  <div
    class="w-100 h-20 py-2 justify-center flex-col border-single"
    title="Vue TermUI Components"
  >
    <!-- Components -->
    <div
      class="pl-1 h-2"
    >
      <span bold>Components:</span>
    </div>
    <div
      class="flex-row pl-2"
    >
      <div
        v-for="(item, index) in components"
        :key="index"
        class="width-15 height-3 border-single align-center justify-center"
        :border-color="index === n ? 'yellow' : 'white'"
      >
        <span :color="index === n ? 'yellow' : 'white'">{{ item.name }}</span>
      </div>
    </div>

    <!-- Composables -->
    <div
      class="mt-3 pl-1 h-2"
    >
      <span bold>Composables:</span>
    </div>
    <div
      class="flex-row pl-2"
    >
      <div
        v-for="(item, index) in composables"
        :key="index"
        class="width-15 height-3 border-single align-center justify-center"
        :border-color="index + components.length === n ? 'yellow' : 'white'"
      >
        <span :color="index + components.length === n ? 'yellow' : 'white'">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>
