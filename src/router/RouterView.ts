import { computed, defineComponent } from '@vue/runtime-core'
import { activeRouteKey } from './injectionSymbols'

export const RouterView = defineComponent({
  setup() {
    const injectedRoute = inject(activeRouteKey)!
    const routeToDisplay = computed(() => injectedRoute.value)
    return () => {
      return h(routeToDisplay.value.component)
    }
  },
})
