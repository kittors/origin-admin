<template>
  <div class="sidebar">
    <logo v-if="showLogo" />
  </div>
</template>

<script setup lang="ts" name="sidebar">
const showLogo = ref<boolean>(true);
</script>

<style scoped lang="scss">
@use './index.scss';
</style>
