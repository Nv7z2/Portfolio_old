<template>
  <h2 class="section-heading">
    <span class="section-heading-prefix">&gt;</span>
    <slot></slot>
  </h2>
</template>

<script setup lang="ts"></script>

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
