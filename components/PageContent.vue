<template>
  <div class="page-content">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/colors';

.page-content {
  padding: 1rem;
  margin-left: 2rem;
  color: colors.$page-content-color;
}
</style>
