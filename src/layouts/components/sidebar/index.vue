<template>
    <div class="sidebar-container" :style="{ width }">
        <Logo v-if="sidebar.showLogo" />
    </div>
</template>

<script setup lang="ts" name="sidebar">
import { useSettingStore } from '@/stores/modules/setting';
import Logo from './Loge.vue';
const route = useRoute();

const props = defineProps<{
	width?: string;
}>();

const settingStore = useSettingStore();
const sidebar = computed(() => {
	return settingStore.sidebar;
});
// 获取当前激活的菜单
const activeMenu = computed(() => {
	const { meta, path } = route;
	// if set path, the sidebar will highlight the path you set
	if (meta.activeMenu) {
		return meta.activeMenu;
	}
	return path;
});
</script>

<style scoped lang="scss">
@use './index.scss';
</style>
