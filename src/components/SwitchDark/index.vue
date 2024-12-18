<template>
  <el-switch
    v-model="globalStore.isDark"
    inline-prompt
    :active-icon="Sunny"
    :inactive-icon="Moon"
    @change="switchDark"
  />
</template>

<script setup lang="ts">
defineOptions({
  name: 'SwitchDarkMode',
})
import { useTheme } from '@/hooks/useTheme'
import { useAppStore } from '@/stores/modules/app'
import { Sunny, Moon } from '@element-plus/icons-vue'
const { switchDark } = useTheme()
const globalStore = useAppStore()
</script>
