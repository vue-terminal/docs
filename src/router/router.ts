import type { App, Component, DefineComponent } from '@vue/runtime-core'
import { ref } from '@vue/runtime-core'
import { activeRouteKey, routerKey, routerViewLocationKey } from './injectionSymbols'
import { RouterView } from './RouterView'

export interface RouteRecordRaw {
  path: string
  component: Component | DefineComponent
}
export interface RouterOptions {
  routes: Readonly<RouteRecordRaw[]>
}

export interface Router<Options extends RouterOptions = RouterOptions> {
  readonly options: Options
  push(to: string): void
  install(app: App): void
}

export interface RouteLocation {
  path: string
  params?: Record<string, string>
  query?: Record<string, string>
}
export const START_LOCATION_NORMALIZED: RouteLocation = {
  path: '/',
  params: {},
  query: {},
}

export function createRouter<Options extends RouterOptions>(options: Options): Router<Options> {
  const currentRoute = ref(
    START_LOCATION_NORMALIZED,
  )
  const push = (to: string) => {
    currentRoute.value = {
      path: to,
    }
  }

  const activeRoute = computed(() => {
    const component = options.routes.find(route => route.path === currentRoute.value.path)?.component
    return {
      path: currentRoute.value.path,
      component,
    }
  })

  const router: Router<Options> = {
    options,
    push,
    install(app: App) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const router = this
      app.component('RouterView', RouterView)
      app.provide(routerKey, router)
      app.provide(routerViewLocationKey, currentRoute)
      app.provide(activeRouteKey, activeRoute)
    },
  }
  return router
}
