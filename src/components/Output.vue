<script setup lang="ts">
import fs from 'node:fs'
import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { compile } from '@/compiler'

const props = defineProps({
  content: {
    type: String,
    required: true,
  },
})

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const modulePath = path.resolve(__dirname, './_vtui-dynamic-output.mjs')
async function importFresh(modulePath: string) {
  const cacheBustingModulePath = `${modulePath}?update=${Date.now()}`
  return (await import(cacheBustingModulePath)).default
}
let DynamicOutputComponent = {
  setup() {
  },
}

const output = ref('...')
const visible = ref(false)
let timer: NodeJS.Timer | null = null
let execTimer: NodeJS.Timer | null = null
async function exec() {
  try {
    visible.value = false
    const content = compile(props.content)
    fs.writeFile(modulePath, content, async () => {
      DynamicOutputComponent = await importFresh(modulePath)
      visible.value = true
    })
  }
  catch (e: Error) {
    output.value = e.message
  }
}

watch(() => props.content, () => {
  visible.value = false
  clearTimeout(timer!)
  clearInterval(execTimer!)
  execTimer = setTimeout(() => {
    output.value = 'compiling...'
  }, 1000)
  timer = setTimeout(() => {
    exec()
  }, 2000)
}, {
  immediate: true,
})
</script>

<template>
  <div
    class="p-1 min-w-30 min-h-10 border-white border-round items-center"
    title="Output"
  >
    <DynamicOutputComponent v-if="visible" />
    <span v-else>{{ output }}</span>
  </div>
</template>
