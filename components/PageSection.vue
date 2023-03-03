<template>
  <div
    class="section-divider"
    v-if="divider == 'top' || divider == 'both'"
  ></div>

  <section class="page-section">
    <slot></slot>
  </section>

  <div
    class="section-divider"
    v-if="divider == 'bottom' || divider == 'both'"
  ></div>
</template>

<script setup lang="ts">
const props = defineProps<{
  divider?: 'top' | 'bottom' | 'both' | 'none';
}>();

const divider = props.divider ?? 'none';
</script>

<style scoped lang="scss">
@use '@/styles/colors';

.section-divider {
  height: 1px;
  background-color: colors.$page-section-divider-color;
}

.page-section {
  margin: 2rem 0;
}
</style>
