<template>
    <div class="navbar-container">
      <div class="navbar-left">
        <el-icon class="navbar-expand" v-if="navbar.navbarExpand.show" @click="handleExpand">
          <Expand v-if="!isExpand" />
          <Fold v-else />
        </el-icon>
      </div>
      <div class="navbar-right">
        <SwitchDark class="dark" v-if="navbar.showDarkMode" />
      </div>
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/modules/app';
import { useSettingStore } from '@/stores/modules/setting';
import { Expand, Fold } from '@element-plus/icons-vue';
const settingStore = useSettingStore();
const appStore = useAppStore();
const navbar = computed(() => settingStore.navbar);
const handleExpand = () => {
	logger.debug('expand');
	appStore.setGlobalState('isExpand', !appStore.isExpand);
};

const isExpand = computed(() => appStore.isExpand);

onMounted(() => {
	logger.debug(navbar.value);
});
</script>

<style scoped lang="scss">
@use './index.scss';
</style>
