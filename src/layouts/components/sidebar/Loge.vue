<template>
<div class="sidebar-logo-container">
  <transition :enter-active-class="$animate.logoAnimate.enter" mode="out-in">
    <router-link  key="collapse" class="sidebar-logo-link" to="/" v-if="isExpand">
      <img class="logo-img" src="@/assets/images/logo.svg" />
      <h1 class="logo-text" >
        {{ title }}
      </h1>
    </router-link>
    <router-link  key="expand" class="sidebar-logo-link" to="/" v-else>
      <img class="logo-img" src="@/assets/images/logo.svg" />
    </router-link>
  </transition>
</div>
</template>
<script setup lang="ts" name="sidebar-logo">
const $animate = inject('animate') as Animate;
import { useAppStore } from '@/stores/modules/app';
const title = import.meta.env.VITE_GLOB_APP_TITLE;
const appStore = useAppStore();
const isExpand = computed(() => appStore.isExpand);
logger.debug($animate.logoAnimate.enter);
</script>
<style scoped lang="scss">
@use './index.scss';
</style>
