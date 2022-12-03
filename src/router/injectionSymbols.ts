import type { ComputedRef, InjectionKey, Ref } from '@vue/runtime-core'
import type { RouteLocation, RouteRecordRaw, Router } from './router'

export const activeRouteKey: InjectionKey<ComputedRef<RouteRecordRaw>> = Symbol('active route')
export const routerKey: InjectionKey<Router> = Symbol('router')
export const routerViewLocationKey: InjectionKey<Ref<RouteLocation>> = Symbol('router view location')
