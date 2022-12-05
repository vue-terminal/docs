<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import Input from '@/components/Input.vue'
import Output from '@/components/Output.vue'

const route = useRoute()
const router = useRouter()

const input = ref(route.query.code as string || '')
const isEditMode = ref(false)
function toggleEditMode(value: boolean) {
  isEditMode.value = value
}

function back() {
  if (isEditMode.value)
    return
  router.push('/nav')
}

onKeyData(['Backspace', 'Delete'], back)
// windows only
onInputData((event) => {
  if (event.data !== '\b')
    return
  back()
})
</script>

<template>
  <div flex-direction="column">
    <div>
      <Input v-model="input" @toggle="toggleEditMode" />
      <Output :content="input" />
    </div>
    <div
      justify-content="flex-end"
      width="100%"
      border-color="gray"
    >
      <span dimmed>
        [←] Back
      </span>
      <span dimmed>
        |
      </span>
      <span dimmed>
        [Ctrl+T] Toggle Edit/Preview
      </span>
    </div>
  </div>
</template>
