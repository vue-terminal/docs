import { inject } from '@vue/runtime-core'
import { routerKey } from './injectionSymbols'

export function useRouter() {
  return inject(routerKey)!
}
