<script setup lang="ts">
import fs from 'node:fs'
import path, { dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { compile } from '@/compiler'

const props = defineProps({
  content: {
    type: String,
    required: true,
  },
})

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
async function importAbs(targetPath: string) {
  const fileUrl = pathToFileURL(targetPath).href
  return await import(fileUrl)
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
    const modulePath = path.resolve(__dirname, `./_vtui-dynamic-output-${Date.now()}.js`)
    fs.writeFile(modulePath, content, async () => {
      const file = await importAbs(modulePath)
      DynamicOutputComponent = file.default
      fs.unlink(modulePath, () => {})
      visible.value = true
    })
  }
  catch (e: Error) {
    output.value = e.message
    visible.value = false
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
