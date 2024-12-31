<template>
  <div class="common-layout" :class="{'common-layout-mobile': device === 'mobile'}">
     <el-container>
        <el-aside  class="aside-transition" :width="isExpand ? sidebar.expandWidth : sidebar.collapseWidth" v-if="navbar.showNav && device === 'desktop'">
          <Sidebar />
        </el-aside>
        <div class="mask-container" v-else :style="{width : isExpand ? '100vw' : '0px'}" @click="handleMaskClick">
          <Sidebar class="aside-transition" :width="isExpand ? sidebar.expandWidth : '0px'" @click.stop/>
        </div>
      <el-container>
        <el-header :height="navbar.height" v-if="navbar.showNav">
          <Navbar />
        </el-header>
        <AppMain />
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import defaultSettings from '@/settings';
import { useAppStore } from '@/stores/modules/app';
import { useSettingStore } from '@/stores/modules/setting';
import AppMain from './components/AppMain.vue';
import Navbar from './components/navbar/index.vue';
import Sidebar from './components/sidebar/index.vue';
defineOptions({
	name: 'LayoutIndex',
});
const appStore = useAppStore();
const isExpand = computed(() => appStore.isExpand);
const navbar = computed(() => settingStore.navbar);
const sidebar = computed(() => settingStore.sidebar);
const settingStore = useSettingStore();
settingStore.setNavbar({
	height: defaultSettings.navbar.height,
	showNav: defaultSettings.navbar.showNav,
	navbarExpand: defaultSettings.navbar.navbarExpand,
	showDarkMode: defaultSettings.navbar.showDarkMode,
});
settingStore.setSidebar({
	showLogo: defaultSettings.sidebar.showLogo,
	showSidebar: defaultSettings.sidebar.showSidebar,
	expandWidth: defaultSettings.sidebar.expandWidth,
	collapseWidth: defaultSettings.sidebar.collapseWidth,
});

// 监听窗口大小
const { width } = useWindowSize();
const device = computed(() => appStore.device);
const WIDTH = 992; // refer to Bootstrap's responsive design
// 监听窗口大小
watchEffect(() => {
	if (device.value === 'mobile') {
		appStore.setGlobalState('isExpand', false);
	}
	if (width.value - 1 < WIDTH) {
		appStore.setGlobalState('device', 'mobile');
		appStore.setGlobalState('isExpand', false);
	} else {
		appStore.setGlobalState('device', 'desktop');
		appStore.setGlobalState('isExpand', false);
	}
});

const handleMaskClick = () => {
	appStore.setGlobalState('isExpand', false);
};
</script>

<style scoped lang="scss">
@use './index.scss';
</style>
