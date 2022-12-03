<script lang="ts" setup>
import type { KeyDataEvent } from 'vue-termui'
// import Home from '@/components/Home.vue'
// Exit the process manually when press ctrl + c
const stop = onInputData((e) => {
  const event = e.event as KeyDataEvent
  if (!event?.key)
    return
  if (event!.key === 'C' && event!.ctrlKey) {
    stop()
    process.exit(0)
  }
})
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>
