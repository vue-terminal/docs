import { inject } from '@vue/runtime-core'
import { routerKey, routerViewLocationKey } from './injectionSymbols'

export function useRouter() {
  return inject(routerKey)!
}

export function useRoute() {
  return inject(routerViewLocationKey)!
}
