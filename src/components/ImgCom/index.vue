<template>
  <div class="my-image-wrapper">
    <el-image
      :src="src"
      :fit="fit"
      :lazy="lazy"
      :preview-src-list="previewSrcList"
      :initial-index="initialIndex"
      :zoom-rate="zoomRate"
      :preview-teleported="previewTeleported"
      :hide-on-click-modal="hideOnClickModal"
      :loading="loading"
      @load="handleLoad"
      @error="handleError"
    >
      <template #error>
        <div class="image-placeholder">
          <el-icon><Picture /></el-icon>
        </div>
      </template>
    </el-image>
  </div>
</template>

<script setup lang="ts">
import { Picture } from '@element-plus/icons-vue';
import type { PropType } from 'vue';

const props = defineProps({
	// 图片源
	src: {
		type: String,
		required: true,
	},
	// 适应容器方式
	fit: {
		type: String as PropType<'fill' | 'contain' | 'cover' | 'none' | 'scale-down'>,
		default: 'cover',
	},
	// 是否开启懒加载
	lazy: {
		type: Boolean,
		default: true,
	},
	loading: {
		type: String as PropType<'eager' | 'lazy'>,
		default: 'lazy',
	},
	// 预览图片列表
	previewSrcList: {
		type: Array<string>,
		default: () => [],
	},
	// 预览初始索引
	initialIndex: {
		type: Number,
		default: 0,
	},
	// 缩放速率
	zoomRate: {
		type: Number,
		default: 1.2,
	},
	// 是否将预览框插入至 body 元素
	previewTeleported: {
		type: Boolean,
		default: true,
	},
	// 是否可以通过点击遮罩层关闭预览
	hideOnClickModal: {
		type: Boolean,
		default: true,
	},
});

const {
	src,
	fit,
	lazy,
	previewSrcList,
	initialIndex,
	zoomRate,
	previewTeleported,
	hideOnClickModal,
} = toRefs(props);

const emits = defineEmits(['load', 'error']);

// 处理图片加载完成
const handleLoad = (e: Event) => {
	emits('load', e);
};

// 处理图片加载失败
const handleError = (e: Event) => {
	emits('error', e);
};

onMounted(() => {
	logger.debug('src.value', src.value);
});
</script>

<style scoped lang="scss">
@use './index.scss';
</style>
