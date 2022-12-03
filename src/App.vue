<script lang="ts" setup>
import type { KeyDataEvent } from 'vue-termui'
import { useRoute } from 'vue-router'
const route = useRoute()
const routePath = computed(() => route.path)
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
  <div
    v-if="['/', '/intro'].includes(routePath)"
    class="justify-end width-100 border-gray"
  >
    <span v-if="routePath === '/intro'" dimmed>
      [↔↕] Toggle
    </span>
    <span v-if="routePath === '/intro'" dimmed>
      |
    </span>
    <span dimmed>
      [Enter] Select
    </span>
  </div>
</template>
