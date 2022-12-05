import {
  computed,
  getCurrentInstance,
  isRef,
  onMounted,
  onUnmounted,
  ref,
  unref,
  watch,
} from '@vue/runtime-core'
import type { Ref, WritableComputedRef } from '@vue/runtime-core'
import type { FocusId, Focusable } from 'vue-termui'
import { useFocusManager } from 'vue-termui'

export type MaybeRef<T> = Ref<T> | T
export interface FocusableOptions {
  active?: boolean
  disabled?: MaybeRef<boolean>
  id?: MaybeRef<FocusId>
}

export function useFocus({
  active: startsActive,
  disabled: startsDisabled,
  id: idSource,
}: FocusableOptions = {}): Focusable & { isFocus: WritableComputedRef<boolean> } {
  const instance = getCurrentInstance()!

  const { activeElement, _add, _remove, focus, _changeFocusableId }
    = useFocusManager()

  // eslint-disable-next-line symbol-description
  const id: MaybeRef<FocusId> = idSource ? ref(idSource) : Symbol()

  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const active = computed<boolean>(() => activeElement.value === focusable)

  const disabled = ref(
    isRef(startsDisabled) ? startsDisabled : !!startsDisabled,
  )
  watch(disabled, (disabled) => {
    if (disabled && active.value)
      focus(null)
  })

  const focusable: Focusable = {
    disabled,
    id,
    active,
    _i: instance,
  }

  onMounted(() => {
    // handle the creation and removal of the focusable
    _add(focusable)
    // if the id can be changed, we need to adapt the internal map
    if (isRef(id))
      watch(id, _changeFocusableId)

    // ensures active starts with the right value
    if (startsActive)
      focus(unref(id))
  })
  onUnmounted(() => {
    _remove(focusable)
    // this is okay because the focusable is being destroyed
    // @ts-expect-error: avoid cyclic references
    focusable._i = null
  })

  return {
    ...focusable,
    isFocus: computed<boolean>({
      get() {
        return active.value
      },
      set(value) {
        focus(value ? unref(id) : null)
      },
    }),
  }
}
