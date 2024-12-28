<template>
  <div class="layout">
    <AppMain />
  </div>
</template>

<script setup lang="ts">
import defaultSettings from '@/settings';
import { useSettingStore } from '@/stores/modules/setting';
import AppMain from './components/AppMain.vue';

const settingStore = useSettingStore();
settingStore.setNavbar({
	height: defaultSettings.navbar.height,
	showNav: defaultSettings.navbar.showNav,
});
defineOptions({
	name: 'LayoutIndex',
});

const watermark = ref(true);
const font = {
	color: 'rgba(0, 0, 0, 0.15)',
	fontSize: 16,
};
</script>

<style scoped lang="scss">

</style>
