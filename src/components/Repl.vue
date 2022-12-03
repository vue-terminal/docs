<script setup lang="ts">
import { useRoute } from '@/router'
import Input from '@/components/Input.vue'
import Output from '@/components/Output.vue'
const route = useRoute()
const routeParams = route.value.params!
const input = ref(routeParams.code)
</script>

<template>
  <div>
    <Input v-model="input" />
    <Output :content="input" />
  </div>
</template>
