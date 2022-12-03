export const components = [{
  name: 'Box',
  code: `
<script setup>
  import { TuiBox, TuiText } from 'vue-termui'
</script>
<template>
  <TuiBox
  :width="30"
  :height="20"
  border-style="double"
  justify-content="center"
  flex-direction="column"
  align-items="center"
  >
    <TuiText>Hello world</TuiText>
  </TuiBox>
</template>
  `,
}, {
  name: 'Text',
  code: `
<script setup>
import { TuiBox, TuiText } from 'vue-termui'
</script>

<template>
  <TuiText bold>bold </TuiText>
  <TuiText dimmed>dimmed </TuiText>
  <TuiText italic>italic </TuiText>
  <TuiText underline>underline </TuiText>
  <TuiText strikethrough>strikethrough</TuiText>  
  <TuiText inverse>inverse</TuiText>  
  <TuiText color="yellow">yellow </TuiText>
  <TuiText bg-color="red">red </TuiText>
</template>
  `,
}, {
  name: 'Newline',
  code: `
<script setup>
  import { TuiBox, TuiText, TuiNewline } from 'vue-termui'
</script>

<template>
  <TuiText>
    Hello
    <TuiNewline :n="1" />
    VueTermUI
  </TuiText>
</template>
  `,
}, {
  name: 'Link',
  code: `
<script setup>
  import { TuiLink } from 'vue-termui'
</script>

<template>
  <TuiLink href="https://vue-termui.dev/">Vue TermUI</TuiLink>
</template>
  `,
}, {
  name: 'ProgressBar',
  code: `
<script setup>
  import { TuiProgressBar } from 'vue-termui'
  import { ref } from 'vue'
  const n = ref(0)
  setInterval(() => {n.value<100 && (n.value+= 1)}, 30)
</script>
<template>
  <TuiProgressBar :value="n" color="yellow" :width="30" />
</template>
  `,
}, {
  name: 'Input',
  code: `
<script setup>
  import { TuiBox, TuiInput, onKeyData } from 'vue-termui'
  import { ref } from 'vue'
  const username = ref(' vue-termui')
  const password = ref(' 123')
  const disabled = ref(false)
  onKeyData(['d', 'D'], () => {
    disabled.value = !disabled.value
  })
</script>

<template>
  <TuiBox flex-direction="column">
    <TuiInput label="username: " v-model="username" :disabled="disabled" />
    <TuiInput label="password: " type="password" v-model="password" />
  </TuiBox>
</template>
  `,
}] as const
