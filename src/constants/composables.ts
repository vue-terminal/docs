export const composables = [{
  name: 'onInputData',
  code: `
<script setup>
  import { TuiBox, TuiText, onInputData } from 'vue-termui'
  import { ref } from 'vue'
  const n = ref(0)
  const content = ref('hello')
  onInputData(({ event }) => {
    if(
      /[a-zA-Z0-9]/.test(event.key) 
      && event.key.length === 1
    ){
      content.value += event.key
    }
  })
</script>

<template>
  <TuiBox>
    <TuiText color="cyanBright">{{ content }} </TuiText>
  </TuiBox>
</template>
  `,
}, {
  name: 'onMouseData',
  code: `
<script setup>
  import { reactive, onMouseData, MouseEventType, TuiBox, TuiText } from 'vue-termui'
  const position = reactive({
    x: 0,
    y: 0,
  })
  onMouseData(MouseEventType.any, (event) => {
    position.x = event.clientX
    position.y = event.clientY
  })
</script>

<template>
  <TuiBox>
    <TuiText color="cyanBright">
      x:{{ position.x }} 
      y: {{position.y}} 
    </TuiText>
  </TuiBox>
</template>
  `,
},
{
  name: 'onResize',
  code: `
<script setup>
  import { ref, useStdout, onResize, TuiBox, TuiText } from 'vue-termui'
  const { stdout } = useStdout()
  const width = ref(stdout.columns)
  const height = ref(stdout.rows)
  onResize(() => {
    width.value = stdout.columns
    height.value = stdout.rows
  })
</script>

<template>
  <TuiBox>
    <TuiText color="cyanBright">
      width:{{ width }} 
      height: {{ height }} 
    </TuiText>
  </TuiBox>
</template>
  `,
},
] as const
