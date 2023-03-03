<template>
  <span class="text-with-color" :style="textWithColorStyles">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  color?: string;
}>();

const textWithColorStyles = reactive({
  borderColor: props.color || 'inherit',
});
</script>

<style scoped lang="scss">
.text-with-color {
  border-bottom: 2px solid currentColor;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.075);
  }
}
</style>
