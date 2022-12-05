<script lang="ts" setup>
import { isKeyDataEvent } from 'vue-termui'
import { useRoute } from 'vue-router'

const route = useRoute()
const routeName = computed(() => route.name as string)

// Exit the process manually when press ctrl + c
const stop = onInputData(({ event }) => {
  if (isKeyDataEvent(event)) {
    if (event.key === 'C' && event.ctrlKey) {
      stop()
      process.exit(0)
    }
  }
})
</script>

<template>
  <div>
    <RouterView />
  </div>
  <div
    v-if="['home', 'intro'].includes(routeName)"
    class="justify-end width-100 border-gray"
  >
    <template v-if="routeName === 'intro'">
      <span dimmed>
        [↔↕] Toggle
      </span>
      <span dimmed>
        |
      </span>
    </template>
    <span dimmed>
      [Enter] Select
    </span>
  </div>
</template>
