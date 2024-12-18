<template>
  <el-switch
    v-model="isDark"
    inline-prompt
    :active-icon="Sunny"
    :inactive-icon="Moon"
    @click.stop="toggleTheme"
    ref="switchRef"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from '@/hooks/useTheme'
import { useAppStore } from '@/stores/modules/app'
import { Sunny, Moon } from '@element-plus/icons-vue'
import type { ComponentPublicInstance } from 'vue'

defineOptions({
  name: 'SwitchDarkMode',
})

const switchRef = ref<ComponentPublicInstance>()
const { switchDark } = useTheme()
const globalStore = useAppStore()
const { isDark } = storeToRefs(globalStore)

const toggleTheme = (event: MouseEvent) => {
  const switchEl = switchRef.value?.$el
  const rect = switchEl?.getBoundingClientRect()
  const x = rect ? rect.left + rect.width / 2 : event.clientX
  const y = rect ? rect.top + rect.height / 2 : event.clientY

  const endRadius =
    Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y)) * 1.2

  if (!document.startViewTransition) {
    return
  }
  isDark.value = !isDark.value // 先切换状态
  switchDark()
  const transition = document.startViewTransition(async () => {
    isDark.value = !isDark.value // 先切换状态
    switchDark()
  })

  transition.ready.then(() => {
    const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]

    document.documentElement.animate(
      {
        clipPath: !isDark.value ? clipPath : [...clipPath].reverse(),
      },
      {
        duration: 500,
        easing: 'cubic-bezier(.1, 0,  0.1, 0.9)',
        pseudoElement: !isDark.value
          ? '::view-transition-new(root)'
          : '::view-transition-old(root)',
      },
    )
  })
}
</script>
