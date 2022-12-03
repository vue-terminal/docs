import { compileScript, parse } from 'vue/compiler-sfc'

export function compile(str: string) {
  const id = 'vue-termui-parser'
  const parseValue = parse(str)
  const { content: script } = compileScript(parseValue.descriptor, {
    inlineTemplate: true,
    id,
  })
  return script
}

