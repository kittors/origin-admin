<template>
  <el-watermark
    id="watermark"
    :font="font"
    :content="watermark ? ['Origin Admin', 'Happy Working'] : ''"
  ></el-watermark>
</template>

<script setup lang="ts">
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
.layout {
  min-width: 600px;
}
</style>
