<template>
  <h2 class="section-heading" :style="headingStyles">
    <span v-if="prefix || prefix != 'none'" class="section-heading-prefix">
      {{ prefix }}
    </span>
    <slot></slot>
  </h2>
</template>

<script setup lang="ts">
const props = defineProps<{
  /** Prefix to the heading. Default: ">". */
  prefix?: string | 'none';
  /** Margin in rems. For example :margin="1" equals 1rem. */
  margin?: number;
}>();

const prefix = props.prefix ?? '>';
const headingStyles = reactive({
  marginBottom: props.margin ? `${props.margin}rem` : '0',
});
</script>

<style scoped lang="scss">
@use '@/styles/colors';

.section-heading {
  margin: 0;
  font-weight: normal;
  color: colors.$section-heading-color;
}

.section-heading-prefix {
  color: colors.$section-heading-prefix-color;
  margin-right: 0.5rem;
}
</style>
