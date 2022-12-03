<script setup lang="ts">
import { useRouter } from 'vue-router'
import { components, composables } from '@/constants'
const router = useRouter()
const n = ref(0)
const total = composables.length + components.length

onKeyData(['Backspace', 'Delete'], () => {
  router.push('/')
})

onKeyData(['ArrowLeft', 'ArrowUp'], () => {
  n.value = (n.value - 1 + total) % total
})
onKeyData(['ArrowRight', 'ArrowDown', 'Tab'], () => {
  n.value = (n.value + 1) % total
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
    :width="100"
    :height="20"
    :padding-y="2"
    justify-content="center"
    flex-direction="column"
    border-style="single"
    title="Vue TermUI Components"
  >
    <!-- Components -->
    <div
      :padding-left="1"
      :height="2"
    >
      <span bold>Components:</span>
    </div>
    <div flex-direction="row" :padding-left="2">
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

    <!-- Composables -->
    <div
      :margin-top="3"
      :padding-left="1"
      :height="2"
    >
      <span bold>Composables:</span>
    </div>
    <div flex-direction="row" :padding-left="2">
      <div
        v-for="(item, index) in composables"
        :key="index"
        :width="15"
        :height="3"
        border-style="single"
        :border-color="index + components.length === n ? 'yellow' : 'white'"
        align-items="center"
        justify-content="center"
      >
        <span :color="index + components.length === n ? 'yellow' : 'white'">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>
