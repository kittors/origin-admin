<template>
  <el-config-provider>
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import { useTheme } from '@/hooks/useTheme'
// init theme
const { initTheme } = useTheme()
initTheme()

onMounted(() => {})
</script>
