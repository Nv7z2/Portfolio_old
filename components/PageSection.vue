<template>
  <div
    class="section-divider"
    v-if="divider && (divider.type == 'top' || divider.type == 'both')"
    :style="dividerStyles"
  ></div>

  <section class="page-section">
    <slot></slot>
  </section>

  <div
    class="section-divider"
    v-if="divider && (divider.type == 'bottom' || divider.type == 'both')"
    :style="dividerStyles"
  ></div>
</template>

<script setup lang="ts">
type Divider = {
  type: 'top' | 'bottom' | 'both' | 'none';
  size: number;
};

const props = defineProps<{
  /** Section's divider position. Default: 'none'.
   *  @example divider="{ type: 'top', size: 1 }}"
   */
  divider?: Divider;
}>();

const dividerStyles = reactive({
  height: props.divider?.size ? `${props.divider.size}px` : '1px',
});
</script>

<style scoped lang="scss">
@use '@/styles/colors';

.section-divider {
  background-color: colors.$page-section-divider-color;
}

.page-section {
  margin: 2rem 0;
}
</style>
