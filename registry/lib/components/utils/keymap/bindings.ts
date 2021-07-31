import { isTyping, matchUrlPattern } from '@/core/utils'
import { mediaListUrls, watchlaterUrls } from '@/core/utils/urls'
import { clickElement, changeVideoTime, showTip } from './actions'

export interface KeyBindingActionContext {
  binding: KeyBinding
  event: KeyboardEvent
  isWatchlater: boolean
  isMediaList: boolean
  clickElement: typeof clickElement
  changeVideoTime: typeof changeVideoTime
  showTip: typeof showTip
}
export interface KeyBindingAction {
  displayName: string
  run: (context: KeyBindingActionContext) => void
}
export interface KeyBinding {
  keys: string[]
  action: KeyBindingAction
  prevent?: boolean
}
const modifyKeys = [
  'shift',
  'alt',
  'ctrl',
  'meta',
]
export const loadKeyBindings = lodash.once((bindings: KeyBinding[]) => {
  const isWatchlater = watchlaterUrls.some(url => matchUrlPattern(url))
  const isMediaList = mediaListUrls.some(url => matchUrlPattern(url))
  const config = {
    enable: true,
    bindings,
  }
  document.body.addEventListener('keydown', (e: KeyboardEvent & { [key: string]: boolean }) => {
    if (!config.enable) {
      return
    }
    // 打字时无视快捷键
    if (isTyping()) {
      return
    }
    const key = e.key.toLowerCase()

    // 全景视频禁用 WASD 快捷键
    const panoramaControl = dq('.bilibili-player-sphere-control') as HTMLElement
    if (panoramaControl !== null && panoramaControl.style.display !== 'none' && ['w', 'a', 's', 'd'].includes(key)) {
      return
    }

    config.bindings.forEach(binding => {
      if (binding.keys.length === 0) {
        return
      }
      const modifyKeyNotMatch = modifyKeys.some(m => {
        const needModifyKey = binding.keys.includes(m)
        const optionalModifyKey = binding.keys.includes(`[${m}]`)
        if (optionalModifyKey) {
          return false
        }
        const isModifyKeyPressed = e[`${m}Key`]
        return needModifyKey !== isModifyKeyPressed
      })
      if (modifyKeyNotMatch) {
        return
      }
      const restKeys = binding.keys
        .filter(k => !modifyKeys.includes(k.toLowerCase()))
        .map(k => k.toLowerCase())
      const keyMatch = restKeys.includes(e.key.toLowerCase())
        || restKeys.includes(e.code.toLowerCase())
      if (!keyMatch) {
        return
      }

      if (binding?.prevent ?? true) {
        e.stopPropagation()
        e.preventDefault()
      }
      binding.action.run({
        binding,
        isWatchlater,
        isMediaList,
        event: e,
        clickElement,
        changeVideoTime,
        showTip,
      })
    })
  })
  return config
})
export type KeyBindingConfig = ReturnType<typeof loadKeyBindings>